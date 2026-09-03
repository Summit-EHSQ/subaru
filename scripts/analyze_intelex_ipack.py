#!/usr/bin/env python3
"""Extract a traceable logical object model from an Intelex JSON .ipack export."""

from __future__ import annotations

import argparse
import csv
import json
import re
from collections import Counter, defaultdict
from pathlib import Path


OBJECT_TYPE = "MetObjectPackageItemData"
SCALAR_TYPE = "MetPropertyPackageItemData"
REFERENCE_TYPE = "MetReferencePropertyPackageItemData"


def short_type(node: dict) -> str:
    value = node.get("$type", "")
    return value.split(",", 1)[0].rsplit(".", 1)[-1]


def walk(value, pointer=""):
    yield value, pointer or "/"
    if isinstance(value, dict):
        for key, child in value.items():
            escaped = key.replace("~", "~0").replace("/", "~1")
            yield from walk(child, f"{pointer}/{escaped}")
    elif isinstance(value, list):
        for index, child in enumerate(value):
            yield from walk(child, f"{pointer}/{index}")


def safe(value) -> str:
    return "" if value is None else str(value)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("package", type=Path)
    parser.add_argument("--out", type=Path)
    args = parser.parse_args()

    with args.package.open("r", encoding="utf-8-sig") as handle:
        package = json.load(handle)

    nodes: dict[str, dict] = {}
    paths: dict[str, str] = {}
    duplicate_ids: Counter[str] = Counter()
    relations: dict[str, tuple[dict, str]] = {}

    for value, pointer in walk(package):
        if not isinstance(value, dict):
            continue
        node_id = value.get("$id")
        if node_id:
            duplicate_ids[node_id] += 1
            # Prefer the fullest representation if an ID occurs more than once.
            if node_id not in nodes or len(value) > len(nodes[node_id]):
                nodes[node_id] = value
                paths[node_id] = pointer
        if {"Start", "End", "Source", "Type"}.issubset(value) and node_id:
            relations[node_id] = (value, pointer)

    objects = {key: node for key, node in nodes.items() if short_type(node) == OBJECT_TYPE}
    lookups = {
        key: node
        for key, node in nodes.items()
        if short_type(node) == "BusinessObjectPackageItemData" and node.get("Type") == "Lookup Object"
    }
    entities = {**objects, **lookups}
    scalars = {key: node for key, node in nodes.items() if short_type(node) == SCALAR_TYPE}
    references = {key: node for key, node in nodes.items() if short_type(node) == REFERENCE_TYPE}

    outgoing = defaultdict(list)
    incoming = defaultdict(list)
    unresolved_refs = []
    for rel_id, (rel, pointer) in relations.items():
        start = (rel.get("Start") or {}).get("$ref")
        end = (rel.get("End") or {}).get("$ref")
        if start:
            outgoing[start].append((rel_id, rel, pointer))
        if end:
            incoming[end].append((rel_id, rel, pointer))
        if start not in nodes or end not in nodes:
            unresolved_refs.append((rel_id, start, end, pointer))

    object_by_record_id = {
        safe(node.get("RecordId") or node.get("FieldData", {}).get("Id")): key
        for key, node in objects.items()
    }

    root_refs = {item.get("$ref") for item in package.get("GraphData", {}).get("RootItems", [])}
    included_refs = {item.get("$ref") for item in package.get("GraphData", {}).get("IncludedItems", [])}
    dependency_refs = {item.get("$ref") for item in package.get("GraphData", {}).get("Dependencies", [])}

    def package_role(node_id: str) -> str:
        roles = []
        if node_id in root_refs:
            roles.append("Root")
        if node_id in included_refs:
            roles.append("Included")
        if node_id in dependency_refs:
            roles.append("Dependency")
        return "; ".join(roles) or "Nested dependency"

    def obj_label(node_id: str | None) -> str:
        node = nodes.get(node_id or "", {})
        return safe(node.get("FieldData", {}).get("Caption") or node.get("Caption") or node.get("FieldData", {}).get("Name") or node_id)

    def obj_internal(node_id: str | None) -> str:
        node = nodes.get(node_id or "", {})
        return safe(node.get("FieldData", {}).get("Name") or node.get("Caption") or node_id)

    # Ownership is explicitly represented twice in healthy exports:
    # Object --ObjectProperties(Type 1)--> field and field --Object(Type 2)--> Object.
    field_owner: dict[str, str] = {}
    ownership_conflicts = []
    for field_id in set(scalars) | set(references):
        candidates = []
        for _, rel, _ in incoming[field_id]:
            start = (rel.get("Start") or {}).get("$ref")
            if rel.get("Source") == "ObjectProperties" and start in entities:
                candidates.append(start)
        for _, rel, _ in outgoing[field_id]:
            end = (rel.get("End") or {}).get("$ref")
            if rel.get("Source") == "Object" and end in entities:
                candidates.append(end)
        unique = sorted(set(candidates))
        if len(unique) == 1:
            field_owner[field_id] = unique[0]
        elif len(unique) > 1:
            ownership_conflicts.append((field_id, unique))

    parents: dict[str, str] = {}
    parent_conflicts = []
    for object_id in objects:
        candidates = []
        for _, rel, _ in outgoing[object_id]:
            end = (rel.get("End") or {}).get("$ref")
            if rel.get("Source") == "SuperType" and end in objects:
                candidates.append(end)
        # FieldData.SuperType sometimes carries an ID rather than a graph reference.
        raw_parent = objects[object_id].get("FieldData", {}).get("SuperType")
        if isinstance(raw_parent, str) and raw_parent in object_by_record_id:
            candidates.append(object_by_record_id[raw_parent])
        unique = sorted(set(candidates))
        if len(unique) == 1:
            parents[object_id] = unique[0]
        elif len(unique) > 1:
            parent_conflicts.append((object_id, unique))

    field_types: dict[str, str] = {}
    field_type_nodes: dict[str, str] = {}
    type_conflicts = []
    for field_id in set(scalars) | set(references):
        candidates = []
        for _, rel, _ in outgoing[field_id]:
            end = (rel.get("End") or {}).get("$ref")
            if rel.get("Source") == "Type" and end in nodes:
                candidates.append(end)
        unique = sorted(set(candidates))
        if len(unique) == 1:
            field_type_nodes[field_id] = unique[0]
            field_types[field_id] = obj_label(unique[0])
        elif len(unique) > 1:
            type_conflicts.append((field_id, unique))

    reference_by_owner_name = {
        (field_owner.get(field_id), safe(field.get("FieldData", {}).get("Name"))): field_id
        for field_id, field in references.items()
        if field_owner.get(field_id)
    }

    def cardinality(field_id: str, field: dict) -> tuple[str, str, str]:
        relation_type = (field.get("RelationData") or {}).get("Type")
        # Type 3 is explicitly labelled m:n in RelationData.Name throughout this export.
        if relation_type == 3:
            return "0..* to 0..*", "Extracted (RelationData.Type=3 and m:n label)", ""
        # Type 2 is implemented as a foreign-key relation. The declaring field is
        # either the single-reference start or the reverse collection end.
        if relation_type == 2:
            is_start = field.get("FieldData", {}).get("IsStartOfRelation")
            if is_start:
                lower = "1" if field.get("FieldData", {}).get("IsRequired") else "0"
                return f"0..* to {lower}..1", "Inferred (foreign-key start; lower bound extracted)", ""
            reverse_name = safe((field.get("ReverseProperty") or {}).get("Name"))
            target_id = field_type_nodes.get(field_id)
            inverse_id = reference_by_owner_name.get((target_id, reverse_name))
            inverse = references.get(inverse_id or "", {})
            if inverse:
                lower = "1" if inverse.get("FieldData", {}).get("IsRequired") else "0"
                return f"{lower}..1 to 0..*", "Inferred (foreign-key reverse collection; lower bound from inverse)", safe(inverse_id)
            return "Unresolved", "Unresolved cardinality: inverse field is not exported", ""
        # Blank RelationData identifies the reverse/navigation end. Resolve it by
        # the explicit ReverseProperty name and the target object's declared field.
        reverse_name = safe((field.get("ReverseProperty") or {}).get("Name"))
        target_id = field_type_nodes.get(field_id)
        inverse_id = reference_by_owner_name.get((target_id, reverse_name))
        inverse = references.get(inverse_id or "", {})
        inverse_type = (inverse.get("RelationData") or {}).get("Type")
        if inverse_type == 3:
            return "0..* to 0..*", "Inferred from extracted inverse m:n field", safe(inverse_id)
        if inverse_type == 2:
            lower = "1" if inverse.get("FieldData", {}).get("IsRequired") else "0"
            return f"{lower}..1 to 0..*", "Inferred from extracted inverse foreign-key field", safe(inverse_id)
        return "Unresolved", "Unresolved", safe(inverse_id)

    object_rows = []
    for object_id, node in sorted(objects.items(), key=lambda item: obj_label(item[0]).lower()):
        data = node.get("FieldData", {})
        declared = sorted(fid for fid, owner in field_owner.items() if owner == object_id)
        parent_id = parents.get(object_id)
        object_rows.append({
            "graph_node_id": object_id,
            "stable_metadata_id": safe(node.get("RecordId") or data.get("Id")),
            "package_item_id": safe(node.get("Id")),
            "internal_name": safe(data.get("Name")),
            "display_name": safe(data.get("Caption") or node.get("Caption")),
            "table_name": safe(data.get("TableName")),
            "parent_internal_name": obj_internal(parent_id) if parent_id else "",
            "parent_stable_metadata_id": safe(objects[parent_id].get("RecordId")) if parent_id else "",
            "directly_declared_field_count": len(declared),
            "identity_fields": "; ".join(
                safe(nodes[fid].get("FieldData", {}).get("Name"))
                for fid in declared if nodes[fid].get("FieldData", {}).get("IsPrimaryKey")
            ),
            "outgoing_reference_count": sum(1 for fid in declared if fid in references),
            "incoming_reference_count": sum(1 for fid, target in field_type_nodes.items() if target == object_id and fid in references),
            "is_system": safe(data.get("IsSystem")),
            "is_abstract": safe(data.get("IsAbstract")),
            "package_role": package_role(object_id),
            "evidence": "Extracted",
            "source_path": paths[object_id],
        })

    lookup_rows = []
    for lookup_id, node in sorted(lookups.items(), key=lambda item: obj_label(item[0]).lower()):
        data = node.get("FieldData", {})
        declared = sorted(fid for fid, owner in field_owner.items() if owner == lookup_id)
        lookup_rows.append({
            "graph_node_id": lookup_id,
            "stable_metadata_id": safe(node.get("RecordId") or data.get("Id")),
            "package_item_id": safe(node.get("Id")),
            "internal_name": safe(data.get("Name")),
            "display_name": safe(data.get("Caption") or node.get("Caption")),
            "table_name": safe(data.get("TableName")),
            "directly_declared_fields": "; ".join(safe(nodes[fid].get("FieldData", {}).get("Name")) for fid in declared),
            "referencing_field_count": sum(1 for fid, target in field_type_nodes.items() if target == lookup_id and fid in references),
            "exported_value_count": 0,
            "package_role": package_role(lookup_id),
            "evidence": "Extracted lookup type; values not present in package graph",
            "source_path": paths[lookup_id],
        })

    field_rows = []
    relationship_rows = []
    for field_id, field in sorted({**scalars, **references}.items(), key=lambda item: safe(item[1].get("FieldData", {}).get("Name")).lower()):
        data = field.get("FieldData", {})
        owner_id = field_owner.get(field_id)
        target_id = field_type_nodes.get(field_id)
        is_reference = field_id in references
        field_rows.append({
            "graph_node_id": field_id,
            "stable_metadata_id": safe(field.get("RecordId") or data.get("Id")),
            "package_item_id": safe(field.get("Id")),
            "owner_internal_name": obj_internal(owner_id),
            "owner_display_name": obj_label(owner_id),
            "owner_kind": "Record Object" if owner_id in objects else ("Lookup Object" if owner_id in lookups else ""),
            "field_internal_name": safe(data.get("Name")),
            "field_name": safe(data.get("FieldName")),
            "display_name": safe(data.get("Caption") or field.get("Caption")),
            "field_kind": "Reference" if is_reference else "Scalar",
            "type": field_types.get(field_id, ""),
            "type_graph_node_id": safe(target_id),
            "is_primary_key": safe(data.get("IsPrimaryKey")),
            "is_required": safe(data.get("IsRequired")),
            "is_system": safe(data.get("IsSystem")),
            "relation_type_code": safe((field.get("RelationData") or {}).get("Type")) if is_reference else "",
            "is_start_of_relation": safe(data.get("IsStartOfRelation")) if is_reference else "",
            "reverse_property": safe((field.get("ReverseProperty") or {}).get("Name")) if is_reference else "",
            "evidence": "Extracted" if owner_id and target_id else "Unresolved",
            "source_path": paths[field_id],
        })
        if is_reference:
            card, classification, inverse_id = cardinality(field_id, field)
            relation_type_code = (field.get("RelationData") or {}).get("Type")
            relation_name = safe((field.get("RelationData") or {}).get("Name"))
            junction_match = re.search(r"\(via\s+([^\)]+)\)", relation_name)
            relationship_rows.append({
                "source_object": obj_label(owner_id),
                "source_internal_name": obj_internal(owner_id),
                "declaring_field": safe(data.get("Name")),
                "field_stable_metadata_id": safe(field.get("RecordId") or data.get("Id")),
                "target_object": obj_label(target_id),
                "target_internal_name": obj_internal(target_id),
                "target_kind": "Record Object" if target_id in objects else ("Lookup Object" if target_id in lookups else "Other"),
                "cardinality": card,
                "required": safe(data.get("IsRequired")),
                "reverse_property": safe((field.get("ReverseProperty") or {}).get("Name")),
                "relation_type_code": safe((field.get("RelationData") or {}).get("Type")),
                "relation_name": relation_name,
                "junction_object": junction_match.group(1) if junction_match else "",
                "canonical": "True" if relation_type_code in (2, 3) else "False",
                "inverse_field_graph_node_id": inverse_id,
                "evidence": f"{paths[field_id]}; Type edge in graph relation",
                "classification": classification if owner_id and target_id else "Unresolved",
            })

    # Detect cycles by walking the single direct-parent map.
    inheritance_cycles = []
    for start in objects:
        seen = []
        current = start
        while current in parents:
            if current in seen:
                inheritance_cycles.append(seen[seen.index(current):] + [current])
                break
            seen.append(current)
            current = parents[current]

    summary = {
        "package": {key: package.get(key) for key in ("Id", "Name", "Version", "VersionId")},
        "counts": {
            "record_objects": len(objects),
            "lookup_objects": len(lookups),
            "scalar_fields": len(scalars),
            "reference_fields": len(references),
            "owned_fields": len(field_owner),
            "typed_fields": len(field_type_nodes),
            "inheritance_edges": len(parents),
            "canonical_logical_relationships": sum(1 for row in relationship_rows if row["canonical"] == "True"),
            "graph_relations": len(relations),
        },
        "object_type_counts": Counter(short_type(node) or "ReferenceOnly" for node in nodes.values()),
        "unresolved": {
            "graph_references": unresolved_refs,
            "field_ownership": sorted((set(scalars) | set(references)) - set(field_owner)),
            "field_types": sorted((set(scalars) | set(references)) - set(field_type_nodes)),
            "ownership_conflicts": ownership_conflicts,
            "type_conflicts": type_conflicts,
            "parent_conflicts": parent_conflicts,
            "inheritance_cycles": inheritance_cycles,
            "duplicate_json_ids": sorted(key for key, count in duplicate_ids.items() if count > 1),
            "duplicate_object_stable_ids": sorted(
                key for key, count in Counter(safe(node.get("RecordId")) for node in objects.values()).items() if key and count > 1
            ),
            "duplicate_field_stable_ids": sorted(
                key for key, count in Counter(safe(node.get("RecordId")) for node in {**scalars, **references}.values()).items() if key and count > 1
            ),
        },
        "inheritance": [
            {
                "parent": obj_label(parent),
                "parent_internal": obj_internal(parent),
                "child": obj_label(child),
                "child_internal": obj_internal(child),
            }
            for child, parent in sorted(parents.items(), key=lambda item: obj_label(item[0]).lower())
        ],
    }

    if not args.out:
        print(json.dumps({"summary": summary, "objects": object_rows, "lookups": lookup_rows, "relationships": relationship_rows}, indent=2))
        return

    args.out.mkdir(parents=True, exist_ok=True)

    def write_csv(name: str, rows: list[dict]) -> None:
        path = args.out / name
        with path.open("w", encoding="utf-8-sig", newline="") as handle:
            writer = csv.DictWriter(handle, fieldnames=list(rows[0]) if rows else [])
            writer.writeheader()
            writer.writerows(rows)

    write_csv("object-inventory.csv", object_rows)
    write_csv("controlled-lookup-inventory.csv", lookup_rows)
    write_csv("field-inventory.csv", field_rows)
    write_csv("relationship-register.csv", relationship_rows)
    canonical_rows = [row for row in relationship_rows if row["canonical"] == "True"]
    junction_rows = [
        {
            "junction_internal_name": row["junction_object"],
            "source_internal_name": row["source_internal_name"],
            "declaring_field": row["declaring_field"],
            "target_internal_name": row["target_internal_name"],
            "cardinality": row["cardinality"],
            "relation_name": row["relation_name"],
            "stable_metadata_id": "",
            "classification": "Extracted name and m:n implementation; stable ID not exported",
        }
        for row in canonical_rows if row["junction_object"]
    ]
    write_csv("canonical-relationship-register.csv", canonical_rows)
    write_csv("junction-object-register.csv", junction_rows)
    write_csv("inheritance-register.csv", summary["inheritance"])

    def mermaid_id(internal_name: str) -> str:
        value = re.sub(r"[^A-Za-z0-9_]", "_", internal_name)
        return value if not value[:1].isdigit() else f"Object_{value}"

    mermaid = [
        "classDiagram",
        "direction LR",
        "%% Extracted baseline. Display/internal-name mappings are in object-inventory.csv",
    ]
    for node_id in sorted(entities, key=lambda key: obj_internal(key).lower()):
        mermaid.append(f"class {mermaid_id(obj_internal(node_id))}")
    for row in junction_rows:
        mermaid.append(f'class {mermaid_id(row["junction_internal_name"])}')
    for child_id, parent_id in sorted(parents.items(), key=lambda item: obj_internal(item[0]).lower()):
        mermaid.append(f"{mermaid_id(obj_internal(parent_id))} <|-- {mermaid_id(obj_internal(child_id))} : inherits")
    for row in sorted(canonical_rows, key=lambda value: (value["source_internal_name"], value["declaring_field"])):
        if row["junction_object"]:
            junction_id = mermaid_id(row["junction_object"])
            mermaid.append(f'{mermaid_id(row["source_internal_name"])} --> {junction_id} : {row["declaring_field"]} [m:n]')
            mermaid.append(f'{junction_id} --> {mermaid_id(row["target_internal_name"])} : target [m:n]')
        else:
            if row["cardinality"] == "Unresolved":
                mermaid.append(
                    f'{mermaid_id(row["source_internal_name"])} --> '
                    f'{mermaid_id(row["target_internal_name"])} : {row["declaring_field"]} [cardinality unresolved]'
                )
            else:
                source_cardinality, target_cardinality = row["cardinality"].split(" to ", 1)
                mermaid.append(
                    f'{mermaid_id(row["source_internal_name"])} "{source_cardinality}" --> '
                    f'"{target_cardinality}" {mermaid_id(row["target_internal_name"])} : {row["declaring_field"]}'
                )
    (args.out / "baseline-logical-model.mmd").write_text("\n".join(mermaid) + "\n", encoding="utf-8")
    with (args.out / "extraction-summary.json").open("w", encoding="utf-8") as handle:
        json.dump(summary, handle, indent=2, default=list)


if __name__ == "__main__":
    main()
