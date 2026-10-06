---
meeting-title: "Subaru | Summit EHSQ | Phase 2A Design Workshop Day 1"
meeting-date: 2026-09-29
meeting-time: "09:30"
timezone: America/Toronto
participants:
  - Dave McLean
  - Emma Lister
  - Joel Frick
  - Nathan Jannasch
---

0:00:00 Joel Frick (6124): If it ended up in Alaska, that would 
0:00:03 Dave McLean: make it Okey-dokey. The, uh, the workforce is here. Okay, Emma, do you want to lead us off, or do you want me to?
0:00:16 Dave McLean: I 
0:00:17 Emma Lister: can lead us off. Thanks for joining, everybody. Appreciate it. So, this is Design Part 2 for Phase 2 of our Subaru project.
0:00:31 Emma Lister: So, we hope you've already started Design for supply relationship management and non-conformance reporting about a month ago now. And those two applications are in configuration.
0:00:46 Emma Lister: So, the purpose of the next three days is to round out the remaining parts of Phase 2 as far as design goes.
0:00:55 Emma Lister: So, the purpose of today specifically is going to focus on product management and pilot part data. So, Dave's going to run you through collecting business requirements for those two items, specifically pose a couple scenario-based questions and gather all the information we need to put together our architecture
0:01:16 Emma Lister: decision records so that we can then go and produce design documents and then configure the applications to support the decisions that are going to be made today.
0:01:25 Emma Lister: So, as Dave walks through today, please feel free to interject with questions as needed. This meeting is being recorded both with, like, our AI Loom note-taker and the meeting is being recorded itself, and I'll share that recording with the Subaru team after the fact.
0:01:44 Emma Lister: I'll review the recording to identify any action items at the end of the day, and then you can expect a similar structure for, uhm, tomorrow and for Thursday.
0:01:55 Emma Lister: The agenda has been shared with you all in the meeting invite, and it's, there's a chance the agenda will tweak based on the conversations and how they go and when we can get people in the room, and that's no problem.
0:02:04 Emma Lister: We'll manage that accordingly as the time goes on. So with that, thank you for Unless there are any questions, I will turn it over to Dave to 
0:02:13 Dave McLean: get you started. Great, thanks guys. Perfect. Alright guys, before we, before we review the agenda for the day here and make sure we're all aligned, I did want to take a second just to talk through the outputs from a workshop like this and actually use the last workshop as an example.
0:02:31 Dave McLean: You guys haven't seen this yet, and so part of this is me backing into a question on who and how you would like to do a review of this.
0:02:38 Dave McLean: But when you're Bye-bye. Working on a software project, there's a couple of layers of documentation that can and should be produced.
0:02:48 Dave McLean: Generally speaking, the two that we really care about are either business and functional requirements. It's the stuff that you guys define that the software needs to do.
0:02:57 Dave McLean: The use cases it needs to serve, the functions that it needs to handle. It's very client-centric in that way. And then there's a specification layer, which is the, how do we actually go build it?
0:03:11 Dave McLean: And I would liken it to, you know, when you're building a home or something like that, you're working off of artist concepts, drawings, things like that.
0:03:20 Dave McLean: There are different layers of those drawings. There's one that's really meant to give you a sense of the space, give you a sense of where the washrooms are, what bedrooms there are, and so on and so forth.
0:03:28 Dave McLean: Then you get into the actual mechanical drawings. Then you get into the electrical drawings, the plumbing drawings, and so on, that are really, they may be of interest to you, but in reality, they're more about how it is that the contractor and the builder is going to realize the vision.
0:03:43 Dave McLean: All of this documentation, ultimately, is yours. So you, I'm happy to provide that to you guys at both layers of it, but I want to start with that first there, the requirements side of it, which Emma kind of named off earlier in the call here, which are a series of what are called architectural decision
0:04:02 Dave McLean: records. Architectural decision records are, I'll share my screen here, let me know when you guys can see it, you should see a GitHub portal.
0:04:13 Dave McLean: Architectural decision records are essentially a series of decisions. That we make about the architecture of the product. Those can involve, again, the business requirements, but it also can get a little bit into the plain English description of how it is we're going to solve for that particular requirement
0:04:32 Dave McLean: . And in a project like this, Thanks. ADRs are, to some extent, a living document. So, in the context of a sign-off for software documentation, Sort of becomes a little bit of a catch-22, because on the one hand, I want to make sure that we are broadly available.
0:04:50 Dave McLean: Aligned, and that we're all shooting in the right direction. On the same token, I don't want to create a cliff where you guys feel that, hey, you're signing off on something, and the consequences of any change are drastic and dire down the road.
0:05:03 Dave McLean: Those, there can always be consequences to doing the change. There are, you know, windows the further we get into it that the cost of change gets higher, but those are costs that get weighed, like any other change or any other decision that we make.
0:05:16 Dave McLean: So, as we review the structure of one of these ones in a moment here, Joel and Rick in particular, I'm going to look to you guys to think over the course of the week here about, for the first part of phase two, who it is that we would want to review that documentation, and who would we lean on internally
0:05:33 Dave McLean: for that. And similar question for the second half of phase two here. Who is it that really are the readers of the documentation, and the ones that we expect to give us that commentary.
0:05:42 Dave McLean: But to give an example of what one of these ones looks like. Let's do this one here. So, one of the topics that we We discussed during our first workshop was the concept of using onboarding templates to pre-populate roles, require documents, potentially training, and tasks that might that any given supplier
0:06:05 Dave McLean: might need. So, as you are creating a supplier record, and populating it for the first time, it's hopefully not an empty box.
0:06:13 Dave McLean: There's some degree of, well, we know it's this kind of supplier, and so that means that we need to have these five contacts with these five roles filled out.
0:06:22 Dave McLean: We need to get these documents from them. We need them to do these ten tasks. And so on and so forth, whatever those things look like.
0:06:30 Dave McLean: An ADR, without going into the specifics of this one that I cherry picked out, an ADR gives the context and the problem statement that we're trying to solve.
0:06:39 Dave McLean: This is written in plain English, hopefully it's written in terms that strip away anything to do with intellects in this case, unless that thing intersects with a standard product where we say, you know, the decision is that Subaru has bought this product from intellects and we need to make it fit that
0:06:55 Dave McLean: product. That could be the, you know, the framing of a given product. That given decision record. From there, the decision drivers become some of the different factors that we discussed in that.
0:07:05 Dave McLean: So what are the, what are the known things that are feeding into the decision of how it is that we would solve for this problem?
0:07:13 Dave McLean: In some cases, what are the options that we considered in our discussion? And in some cases, it can be fairly thin in this section, but this is meant to give us a record of, you know, hey, did we actually look at some of the other things that were maybe less obvious, or did we consider other options 
0:07:27 Dave McLean: and pass by them? And most, most importantly, the decision outcome. So how is it that we actually want to solve for this?
0:07:33 Dave McLean: What will the software do in order to, to encapsulate this requirement? This is really the structural part that if one was going to review only a section of any given decision record, it's the decision outcome.
0:07:46 Dave McLean: It's the one that we're going it's the really gives us the framing for what it is we want to do.
0:07:50 Dave McLean: Now, supporting that, there's consequences to that. So, hey, what does this give us? What's the benefit of the decision we've taken?
0:07:57 Dave McLean: If there's any identified drawbacks as well, limitations that we might be creating, or, or, uh, you know, constraints that we have agreed to within that discussion, hey, we'll be able to do supplier templating for roles, contacts, documents, and trainings, but not PPAP or whatever the, whatever the context
0:08:16 Dave McLean: is. Whenever we've explicitly agreed to a constraint, or something we need to follow up on, that's also captured here. Finally, with, with some objective evidence to be able to link this discussion to our meeting transcript.
0:08:29 Dave McLean: So, when is it we talked about this? Should we need to go back to the context of that decision in the past?
0:08:33 Dave McLean: Hopefully we're not. Combing through 24 hours worth of meetings, we can narrow it down to a specific segment, and in addition, because nothing lives in isolation, ADRs that are referencing other ADRs, in particular ones that this is either feeding into or that this is one supersedes.
0:08:52 Dave McLean: Because there are a couple of circumstances where we, in our blueprinting workshop, went in one direction, captured an ADR as a result of that.
0:08:59 Dave McLean: In our design workshop, decided as we fleshed that concept out a little bit more that we wanted to go in a different direction, that supersedes.
0:09:07 Dave McLean: So, in this case, that is not something that factors in here, but the ones that are referenced are related because they govern file storage for training content, where it is we would want training content to live, and, uhm, workflow requirements around the process of creating, creating a supplier.
0:09:28 Dave McLean: This one's a relatively lengthy one, and, uh, and the process for you guys reviewing it would be, I, I can export these into a Word document, uh, something that's a little bit more portable for somebody to read and hopefully a little easier.
0:09:39 Dave McLean: Easier to consume and digest, um, send it over to whomever it is that we want the readers to, to work through, and then ask that they, um, spend some time reviewing the, the, the document itself, um, post comments, just through Word, track changes, whatever the case is, and then we huddle up together
0:09:55 Dave McLean: in a week or two to be able to, um, to review that feedback and see if there's anything that's either a material change to what we're trying to do, or scaffolding around the decisions, just additional context and, and stuff to flesh out for the actual build.
0:10:11 Dave McLean: First question, does that make sense? Just in terms of the structure of how we've captured the outcomes of our conversations together?
0:10:20 Dave McLean: Yep, 
0:10:21 Joel Frick (6124): makes sense. 
0:10:23 Dave McLean: Awesome. after hearing this, is there anything Is there an obvious candidate or set of candidates for reviewing the first half of phase two documentation that we'd want?
0:10:34 Dave McLean: Or is this better, would be better off just to blast it over to Joel and Rick for 
0:10:39 Joel Frick (6124): distribution to the broader team? I can think of somebody who's sitting in my lab, that might be pretty good, besides the documents we need, so.
0:10:52 Joel Frick (6124): It's only a little bit of light reading. Here 
0:10:54 Dave McLean: goes the best. If you want, if you want, I can work on that. I'm converting it to a Kindle format as well.
0:11:02 Dave McLean: Yeah, I 
0:11:03 Joel Frick (6124): was mistaken. That person does not have a desktop. You put it in Audible, so I can listen to I would think you would, you would, you would, you and maybe someone else would probably, almost wouldn't document Let's go back and forward a third.
0:11:18 Joel Frick (6124): You start, you'll, yeah, sorry, you'll have to let us know. I know you're trying to transition out, but as much as you can share your vast background.
0:11:26 Joel Frick (6124): Yeah, I think, I, I had some discussion on this. You know, I guess this is good for the whole team to hear.
0:11:31 Joel Frick (6124): I had some discussion on this internally, and there's just, there's, there's way too much background for me to try to hand this over to Gary.
0:11:38 Joel Frick (6124): I mean, Gary's really good, but he can't extract all of that from me, and so I think I need to, I need to hang tight for this whole transition, so.
0:11:47 Joel Frick (6124): I think the other thing huge step in Intellectus is bringing supplier management into the mix. They have been outside of our quality system, they've existed in our own world, and they're not going to be completely integrated, so all of the supplier relationships they need to be a core part of establishing
0:12:10 Joel Frick (6124): the upfront, you know, how do we define all of these interactions, because they've previously been doing this, but outside of our quality system.
0:12:20 Joel Frick (6124): So, I mean, I think it's very important. I know Roy had worked on, uhm, trying to use the previous system as an APQP, but the software limitations just led to the decision of, no, 
0:12:33 Dave McLean: we'll just keep using it. for using it. Thanks. Awesome. Okay, so Joel, Rick, I'll, towards the end of the week here, I will do an export of all the Phase 2, uh, 2A stuff, and, uh, and feed that over.
0:12:47 Dave McLean: I will say, like, none of that holds up a build, right? Ultimately, you guys, we're building frameworks. At this point, so we're building the, the foundation to extend the home building analogy a little bit.
0:12:58 Dave McLean: We're building, you know, where the plumbing to the street is going to go. We're starting to frame the house, um, as opposed to deciding whether this wall is 8 feet away from that one or 10 feet, um, or whatever.
0:13:08 Dave McLean: Where the door is going to be. So, uh, there's, there's lots of room for flex at this stage of the game, um, while we, while we work through some of the underlying stuff.
0:13:16 Dave McLean: And, and similarly, the underlying stuff really acts as a constraint as well in a lot of cases. Those are, those are deliberate decisions that we made during some of our conversation.
0:13:24 Dave McLean: As far as this stuff, uh, for Phase 2b, uh, so the content we're covering this week, uh, we're a good deal faster at putting it together now, so, uh, should be able to have a similar export by end 
0:13:35 Joel Frick (6124): of next week for you guys. Okay, and then what kind of options of turn around did you want to have on that review and feedback?
0:13:45 Joel Frick (6124): A week 
0:13:45 Dave McLean: would be awesome, but I also recognize everybody's busy. It's a lot of content, so if we use a, if we use a week for, from sending it to you guys to, hey, let's, let's, let's, or to look at having a first conversation to, to pick apart any feedback, that would be terrific.
0:14:01 Dave McLean: Um, if it needs to be two, that would be, that's acceptable. Any longer than two, and I think we get pretty far into the build at that point, that would we would, we'd might want to pause on the build to give everybody a chance to digest any longer.
0:14:14 Joel Frick (6124): Is there, Dave, is there a specific one that, that you have particular concerns with? Like, you've got this one pulled up.
0:14:22 Joel Frick (6124): Is this one just an example, or is there? This was one, this 
0:14:27 Dave McLean: is one that I pulled up that had some substance to all of the sections of it. This was more to be illustrative of the structure of it rather than it being a specific.
0:14:35 Dave McLean: Uhm, topic. I can, that's a good question though, let me think on that one, but I can, I, like, there are, there are some open questions with each one that are detail oriented, they don't deal with the broad structure of it.
0:14:51 Dave McLean: But for example, ah, when we're talking about the supplier record, uhm, Intellect ships with, you know, a bunch of descriptors for the supplier.
0:14:58 Dave McLean: So the name, the address fields, the, you know, category and so on. But that's a starting point. Most, most companies want to add fields and properties.
0:15:07 Dave McLean: And I would expect that that's likely going to be more or less a conversion of the properties that you track about a supplier in the existing tools that you're using today.
0:15:17 Dave McLean: Uhm, so, you know, again, it's, I don't think it's going to be a controversial one, but it is still an open question.
0:15:23 Dave McLean: What maybe is a helpful one is for me to narrow down the 80 that have open questions of that nature so that that prioritizes and focuses.
0:15:32 Dave McLean: Yeah, 
0:15:32 Joel Frick (6124): I think that'll, that'll help a lot because I, I mean, I'm seeing down the list, you know, and if they're all, they're this, um, robust, maybe, uh, I just, I just know that I, I just know that I would not have the time in a week to, to be able to actually give a good thorough answer.
0:15:52 Joel Frick (6124): So, so highlighting those ones that are of particular 
0:15:54 Dave McLean: concern will help. Yeah, for sure. Okay. Sounds good. Awesome. And then, not to, not that this is something that I think you guys would need to review, but it is, again, if anybody's interested, the how do we build it side of it, um, is one of where the, the solution specifications come into play.
0:16:14 Dave McLean: Um, and so, again, to give a sample of what that would look like for one of these ones here, I've got a bunch locally that still need to be committed, but if I take the profile template, so where, where the next level of that comes into play, the piece that I would hand over to Victor or Gillian or, 
0:16:30 Dave McLean: or any, anybody else on the team to go and start to build off of is a, a specification that essentially starts by looking at the out-of-the-box product that we're building off of, looks at all of the ADRs that are, are, uhm, defined.
0:16:44 Dave McLean: For that particular topic or component, uh, and then defleshes out all the way down to the individual field level with alignment to the individual ADRs that they relate to.
0:16:54 Dave McLean: So that in theory, everything is traceable from a conversation in a raw artifact like a transcript. Through to a decision that we made, through to a specification, and ultimately into product itself that, uh, that gets built out.
0:17:08 Dave McLean: In some cases, I'm also introducing additional requirements in the vein of, uhm, in our conversation. In specifications, there are things that I am alluding to that I'm not necessarily explicitly articulating with you guys.
0:17:22 Dave McLean: The how to build something or how something will behave. So whenever we see requirements interpretation, this is me giving instruction to the specifications.
0:17:31 Dave McLean: They look, they're very specific. These are the parameters that I'm looking for here. For example, you know, mandatory is a required yes, no, with no implicit default.
0:17:42 Dave McLean: This is something, we wouldn't have talked about this in the context of building out a profile template. This is something I'm instructing it to do.
0:17:48 Dave McLean: And that's going to build out our diagram, which gives us a logical data model. It's going to give us a list of all the tables and intellects that we need to work with, or build, and then all of the fields by each of those tables one by one, so that somebody can go build them out and configure the forms
0:18:04 Dave McLean: . So, in the vein of volume, this is a level I wouldn't necessarily expect you guys to look at, though if we get into specific topics that become sticky, we might drill into the individual, or might drill into the spec level detail of it in order to figure out, well, how is it exactly done?
0:18:20 Dave McLean: And how does that translate into the product? Cool. Questions? So far. Wonderful. All right.
0:18:36 Dave McLean: Thank you. Turning our attention to this week. Appreciate you guys going on that journey with me. Okay, so for today's, today's session is focused primarily on product management, which is an Intellects product designed for tracking and building.
0:18:53 Dave McLean: Product specifications, as well as pilot part data, a process that was identified in our scope of work and we discussed at a high level in our blueprinting workshop.
0:19:06 Dave McLean: The structure of the day is meant to give us some broad guardrails. It's not, I'm less concerned with us sort of sticking to this exact, uhm, timing for each individual topic here.
0:19:18 Dave McLean: Uh, we might need to, we might need to go deeper or might need to stay a little higher level at different points, but, uhm, as a general rule this morning, as I is going to be focused on product management or specifications.
0:19:28 Dave McLean: This afternoon will be focused on inspections within the pilot part data program. Just to gut check for at least the product management part this morning, we've got everybody in the room or on the call that we would need.
0:19:40 Dave McLean: Is there anybody missing I'm Uh, that we should 
0:19:42 Joel Frick (6124): have for this part of the discussion. You mentioned Roy, he was invited, but well for product management. No, uh, the only one I can think of is possibly someone in IS for the.
0:19:57 Joel Frick (6124): And we've struggled with a lot of the day samples since, uhm, mailing. Creating records in IntelliQuest. Well, we set up a separate meeting to talk about the data portion of that, so they're kind of wrapping their heads around what we need and then we'll start.
0:20:15 Joel Frick (6124): Yeah, yeah, because they went to the first couple of days and it wasn't getting higher level and they, yeah, it would just maybe a half hour conversation over three days.
0:20:24 Joel Frick (6124): So instead we just set up separate. We know this one's got to be better that time. 
0:20:34 Dave McLean: OK, well, let's start us off then, uhm, so just a quick sort of definition of what product management is to intellects as a just a baseline aspect of the conversation.
0:20:45 Dave McLean: Here, the product management application was built and designed to work as a spec management tool that's highly integrated with both the supplier relationship management application for supplier data, as well as what intellects can call the shipping, receiving and inspections application.
0:21:05 Dave McLean: These two products were built originally with food and beverage companies in mind. Some of the terminology used in the out-of-the-box kind of follows that industry model a little bit, especially in the content layer.
0:21:18 Dave McLean: It's certainly not specific, and the idea is that product management would allow a user to come into Intellects to specify that they're creating a new product as a catch-all term, and that can be defined as either a part, it can be a component, an ingredient, it could be a finished good, whatever, whatever
0:21:37 Dave McLean: sort of level of granularity the person's looking at. And when they're building the specification, primarily that spec is focused on testing attributes.
0:21:49 Dave McLean: Things that would be, you know, that be would be looked at in the context of an inspection of that product.
0:21:55 Dave McLean: So for example, you might have a sampling program where if you have parts coming in from a supplier, and each of those parts, you know, they're supposed to be the same weight, this length, you know, whatever weight, measure dimensions that you're looking for, or whatever other spec attributes that you
0:22:13 Dave McLean: would test against in more of a lab setting, uhm, those attributes would all be defined with the relevant units of measure of measurement, uh, what the You guardrails are, upper, upper and lower threshold limits, and target numbers are, uh, so that we would understand when a, an inspection happens, whether
0:22:30 Dave McLean: something is in spec or out of spec and requires some sort of a finding or an action plan. That, that process, that, uh, that Thank you.
0:22:38 Dave McLean: Bye Product specification is wrapped in a versioning workflow that allows a user to periodically come in and revise the specification with a versioned number associated with it.
0:22:48 Dave McLean: It copies all the spec attributes from the last revision, pre-populates, and lets you change before, uh, before publishing. It is the new version going forward where that connects to shipping and receiving is in the idea that.
0:23:02 Dave McLean: You when you do a shipping, receiving and inspections event, you're basically logging a shipment or a sample that you're pulling off the line.
0:23:12 Dave McLean: If it's a shipment, it's typically coming in from a supplier, an inbound shipment is what it's called, and the idea would be from that, you're specifying a number of samples, uh, of whatever product that is being inspected.
0:23:24 Dave McLean: The system will generate an inspection record for that for each one of those samples that you've identified with the checklist for the relevant spec, active version of the spec pre-populated for you to answer questions, to be able to enter your results.
0:23:41 Dave McLean: From our original conversations, this kind of stuff that we're likely looking at changing about this product is, I think, broadening its use case to a number of different scenarios, from our discussions before, pilot part data, and the parts that feed that process all the time, P-PAP also feed potentially
0:24:02 Dave McLean: APQP as well, and all have some sort of supplier relationship as well. And from some of our discussions, it also sounds like in this case, rather than trying to build a workflow around spec management in APQP.
0:24:15 Dave McLean: Intellects, much of that data is being integrated from a system further upstream. ECS and PartsMaster were the ones that we had, uh, we'd specifically identified as ones that, uh, that would potentially be sources of data for this.
0:24:31 Dave McLean: So, as we talk through this this morning, what we want to, what we want to talk through first is, hey, what are the, what are the end use cases for product management?
0:24:39 Dave McLean: How does this feed specifically part, uh, pilot part data? Then we're going to back into it from a data flow point of view in the vein of where does this data live today?
0:24:49 Dave McLean: Where would we want to be trying to integrate it versus where would we want to be trying to replace something that is, uh, that is in use right now?
0:24:59 Dave McLean: That make sense? Awesome. Okay. Perfect. So, let's, let's start with straight up list of parts. We'll, we'll forget the specification or any aspect of that, the, you know, any, any sort of test attributes or test planning that comes into it.
0:25:16 Dave McLean: If we just start with a list of parts that's going to eventually feed into, uhm, pilot part data and other systems.
0:25:24 Dave McLean: We'll, we'll use pilot part data as the catch-all for the purpose of today. Right now, is that the, that's the content that lives in PartsMaster?
0:25:34 Joel Frick (6124): Yes, for pilot part data, yes. 
0:25:36 Dave McLean: OK, and what, what's, uh, what does a typical record in PartsMaster look like today? Clearly a part number, right? Something that's going to give us a unique identifier for that part, uh, probably a name of that part, uhm, and a description of it, and probably a life cycle status of some type.
0:25:56 Dave McLean: Pete, do you want to throw me a part number? 
0:25:57 Joel Frick (6124): Uh, let's do a new one. 98271SL05A. 
0:26:04 Dave McLean: Just have that one rolling around off the tip of your tongue. 
0:26:07 Joel Frick (6124): I just processed it. No particular reason. He's like our rain man for parts. I love it. 432 matches. Yeah. Mastered.
0:26:26 Joel Frick (6124): OK, OK, so we 
0:26:27 Dave McLean: see a if I if I start with the header up there just on the on the top, you see the part number.
0:26:33 Dave McLean: What's the Kanban number referring to? It's a it's a short, 
0:26:37 Joel Frick (6124): uhm, always four digit code. Materials uses it. I there's probably more to it. It's just in a nutshell. Storage location that's an identifier to tell the material where it's at.
0:26:49 Joel Frick (6124): Yeah, uhm, kind of. There's also there's also a warehouse location for that. Yeah, so. Which actually is not showing on this one, because it's a brand new one.
0:26:59 Joel Frick (6124): Here, give me an old one instead of that. Alright, we'll go with 00A. That's the existing impact. Oh, this is the SAP part.
0:27:06 Joel Frick (6124): Do you not want SAP? I don't. Actually, SAP is probably a good one. It probably won't change too much. Anyway, because it's not going to have a fit location, but that's okay.
0:27:21 Joel Frick (6124): Fit location is what tells materials where it is. Do you want me to try to think of one that doesn't get saved?
0:27:28 Joel Frick (6124): The sequence that's actually here at SA? Yeah. Uh, 64671SL2A. 64671SL2A.
0:27:41 Joel Frick (6124): That's crazy. There you go. Rear seat belt assembly. There you go. Locations. Warehouse locations. Kanban. Kanban is always a four-digit code.
0:27:55 Joel Frick (6124): My understanding for materials, there's probably a little bit more to it, but my understanding for materials is this is a intended to make it easier for the line-side delivery people instead of having to look at this huge, long number.
0:28:07 Joel Frick (6124): They're just matching four characters when they're putting it on the shelf or putting it in the, uh, in the line-side location.
0:28:13 Joel Frick (6124): There's probably a whole lot more to it from a materials perspective. That's my basic understanding. From our point of view, though, just a field.
0:28:20 Joel Frick (6124): It's just a field as far as you're concerned. 
0:28:22 Dave McLean: Cool. All right. Part name, in-house purchase code. Again, I'm going to assume for the most part these are just fields that we would use to describe the part that probably don't have much value.
0:28:33 Dave McLean: We're specific bearing on any intellects logic until we get there, like, for example, the supplier field. So, in this case, the supplier field, referencing a supplier number, tells us who it is that we get it from.
0:28:44 Dave McLean: And if I recall from our prior conversations, if you so happen to be receiving the same part, from multiple suppliers, it's actually issued with two different part numbers, correct?
0:28:54 Dave McLean: Should we? Yeah. Yeah, cool. OK, so from our point of view, any given part number supplier combination is unique. Uh, which is good.
0:29:06 Dave McLean: Uh, and then as far as the depot, this would be the specific depot from that supplier company that you're, that they're, like, shipping it to you from?
0:29:14 Dave McLean: That's right, shipping depot. OK, so in this case, would the supplier, A236, be referencing this? The company, or would it 
0:29:22 Joel Frick (6124): be referencing a facility? This would be referencing a company, so this would be, and then this would be the specific shipping depot.
0:29:30 Joel Frick (6124): I don't remember which one. That's Columbia 
0:29:31 Dave McLean: City. That's Columbia City. Got it. OK. So, in Intellect's terminology, three, four, the supplier field is referencing the supplier parent company, whereas the depot is, it'll likely be concatenated in Intellect's 8236-06, or something like that, something to that effect, but it's referring to what Intellect's
0:29:50 Dave McLean: calls the 
0:29:51 Joel Frick (6124): supplier facility. That is exactly right. That's exactly how we concatenate it right now, so I would like to carry that.
0:29:57 Joel Frick (6124): Love it. 
0:29:57 Dave McLean: OK, Destination, this is where it's coming from, or coming to you guys? Yeah. And what's C0001 referring to specifically? 
0:30:09 Joel Frick (6124): Good, good question. There's a for materials. I think basically this is telling us whether it comes to SIA or SLC, or if it's a SAP email and it gets direct delivered to the supplier.
0:30:18 Joel Frick (6124): There's a list of codes. Jesse, do you, do you know what that's about? Destination? It's a code that materials uses it for logistics purposes.
0:30:29 Joel Frick (6124): I don't see that being necessary in Intellects. We're not planning on using this for logistics purposes, to my knowledge, so.
0:30:39 Joel Frick (6124): But the next one, the two suppliers. That does matter. That's that's helpful to us. If it's a SAP part. So let's go back.
0:30:47 Joel Frick (6124): I know, I know. I changed my mind. Was that 9? That's 8271. SL030A, or S030A, should be 28316.
0:31:03 Joel Frick (6124): 315, or 315, sorry. Yup. So this is For your, for your awareness, is, this is the maker of the part, A23601.
0:31:21 Joel Frick (6124): This is the person who installs the part to a, or sorry, this is the supplier that installs the part to a larger assembly.
0:31:29 Joel Frick (6124): Okay. So, in this case, it's, it's a passenger airbag module. It gets installed into the instrument panel. Got it. Got it.
0:31:36 Joel Frick (6124): And the 2 Depot 
0:31:37 Dave McLean: would be the supplier facility of the 2 supplier that is, uh, is receiving it. That's right. Yeah. Got it. Yeah, so that 
0:31:47 Joel Frick (6124): destination code, see that right there, that's, that's actually telling us it goes to SLC, I guess, but, um, but anyway, we, we, we wouldn't need that.
0:32:00 Dave McLean: Cool. Okay, um, I'm going to skip over a whole bunch of fields here in favor of looking at part status and production status, uh, because any sort of, anything that sort of refers to or is, is indicating a life cycle is 
0:32:14 Joel Frick (6124): typically important on the Intellect side. it. ModelYear 
0:32:19 Dave McLean: isn't important. ModelYear is? Yes. Okay. Okay, so grid. In this case, a, I'm assuming it could be more than four.
0:32:30 Dave McLean: It could be, could be five. It could be ten. It could be dozens. Got Okay, so ModelYear will need a grid to be able to capture, uh, for each one that, uh, that we're receiving.
0:32:42 Dave McLean: And DX3, DX3R, these are, these are referring to a specific ModelYear of a specific vehicle, right? Not just, uh, not just the general year.
0:32:50 Dave McLean: Right. Yep. Got it. Okay. Um, talking about part status, what are the, what are the available options for part status?
0:33:00 Dave McLean: Uh, where, where are we at? Sorry. Uh, uh, 
0:33:01 Joel Frick (6124): top right corner. Yeah, sorry. I'm jumping 
0:33:04 Dave McLean: around, but trying to get to the stuff 
0:33:06 Joel Frick (6124): that deals more with logic. It's actually easier to look. I'm, I'm putting this on the key. So we're, we're either going to have production part or service part.
0:33:20 Joel Frick (6124): Sometimes they'll order production parts and service parts. And then some parts are nothing but service parts. And some service parts are not listed in this database.
0:33:32 Joel Frick (6124): Can 
0:33:33 Dave McLean: it be both at the same time? Yes, yes. Yes, okay. So for parts, status, we need to be able to capture more than one part status, production part or service.
0:33:44 Dave McLean: And then for production status, uh, this is, this is going to be referring 
0:33:49 Joel Frick (6124): to whether they're still building it or not. Whether we are still building with it. 
0:33:54 Dave McLean: Yeah, is that right? I wouldn't say that. Got it, got it. Is there, I wouldn't expect anybody in the room to have these handy off off the top of your head, but I'm assuming somebody would be able to pull a list of all of the available, uh, or all of the possible, uh, part status and production status
0:34:14 Dave McLean: codes that a product could be aligned with. IT should be able to do that for us. Okay, perfect. So, we'll leave that as a, for our AI note takers, we'll leave that as a, uh, as an open action to go retrieve.
0:34:29 Dave McLean: Uhm, more importantly, when something like this changes, or frankly anything on this, uh, on this list changes, so if, for example, the supplier, uh, the 2 supplier for this one changes, let's say, uhm, the, uh, sorry, uh, the 2, the 2 depot, I should say.
0:34:52 Dave McLean: So if A315, uh, decides, you know what, we're gonna start doing this assembly work at 0-1 instead of 0-2. Uhm, is that change just updated going forward, or is there a versioning control on this?
0:35:04 Dave McLean: Could you pull up a version of this record as it existed 6 
0:35:08 Joel Frick (6124): months ago, for example? Where do you want me to go, Keith? Underpartments, but there should be a history. This one?
0:35:16 Joel Frick (6124): Yup. If I have to put dates in, or?
0:35:31 Joel Frick (6124): Try to think through 
0:35:32 Dave McLean: it. Got it. Okay, so you get a full record audit trail here.
0:35:46 Dave McLean: Yup. Everything that was changed. Got it. Okay, and then therefore, if we follow that logic through, the idea would be, imagine on day one, at least as far as Intellects is concerned, all of these parts come through, we consider it version one in Intellects of that.
0:36:03 Dave McLean: That version. We start gradually receiving changes each day for each one of them. Version two, version two, version three, and so on and so on.
0:36:11 Dave McLean: When we create an inspection, for example, of that part, we're creating an inspection using whatever the version of that part is.
0:36:19 Dave McLean: That we have today. Or as of now, as of the moment you create it, would that be a fair assumption?
0:36:29 Joel Frick (6124): I'm sorry, ask that question again. I wasn't, I wasn't tracking. No, no, it's all good. It's all good. 
0:36:33 Dave McLean: Um, so what, what this table implies for us is that in the background, each part has a version history associated with it.
0:36:42 Dave McLean: This is showing it to us in a, in a very audit trail focused way, just showing us the delta. But in reality, there's a, if there's a part record, then, as a related grid somewhere, or a related table, there's a part versioned, uhm, table as well that's saying, you know, over time, this is how this part
0:37:00 Dave McLean: has changed. If we were to consume a table like that for the integration, then when we get further down, downstream in Intellects, where, for example, we go to do an inspection, some sort of an event that happens at a point in time, when that inspection is referencing the part and pulling any of these
0:37:18 Dave McLean: attributes through, it should be pulling those attributes through for the part as of that moment. It's not like we would need to backdate the inspection to a prior version 
0:37:27 Joel Frick (6124): of the part record. That would be incorrect. So, uhm, as the parts evolve during development, we will order at a specific ECS level during development.
0:37:39 Joel Frick (6124): Okay, and that that is usually tied to an event part order. So, there's 2 things associated with that particular inspection.
0:37:51 Joel Frick (6124): 1 is the event of building it. With it. Yeah. And 2 is the ECS level associated with the order for that event.
0:38:06 Joel Frick (6124): Got Got it. Our inspections are tied directly to those 2. 2 things. What ECS level am I supposed to inspect, and what event are these parts for?
0:38:19 Joel Frick (6124): Got it. Ok. So this, this, Dave, this is where, you know, we, we were talking specifically PartsMaster. This type of information, think of, think of.
0:38:31 Joel Frick (6124): Still showing. Ok. Yeah, jump back to PartsMaster here. Think of PartsMaster as the materials and logistics main source. Source of Truth.
0:38:44 Joel Frick (6124): And then Bomex as the engineering change main source of truth. Got it. There's some overlap, obviously. Between the two, because you can have part number changes, and sometimes a supplier change means that there's also a drawing change and things like that, but just kind of in general terms, for the 
0:39:04 Joel Frick (6124): most part, that's probably a pretty good articulation of the difference between the two sources. 
0:39:08 Dave McLean: Where would a change originate? A change to the data originate? Is it, is, or put another way, is Bomex fed by PartsMaster, or is PartMaster fed by Bomex?
0:39:22 Joel Frick (6124): Bomex happens first. Yeah, Bomex happens first, and then we react in PartMaster to update information as needed. Bomex is driven through drawing and engineering chain releases.
0:39:37 Joel Frick (6124): Those are controlled by our parent company. What we do with that part in PartMaster, we'll have to make some sort of update accordingly, uhm, to our logistics with regard to whatever that drawing said.
0:39:59 Dave McLean: Would it make more sense if we can see if we're considering integration to push data from Subaru into Intel X?
0:40:08 Dave McLean: Would it make more sense to be using Bomex as the? The source to feed directly to Intel X? Or are we better off having Bomex, you know, continue to feed PartsMaster because that's going to keep doing it and there's additional properties in PartsMaster that we really need and therefore there might be 
0:40:24 Dave McLean: a there might be a slight delay by the time it gets to Intel X. 
0:40:28 Joel Frick (6124): We, we actually, 
0:40:33 Dave McLean: we, I believe currently, I know currently we have to use both. Okay, got it. There are some properties in Bomex, there are some properties in PartsMaster, therefore, you know, part, you know, whatever part number, this, ah, this assembly that we're looking at here, uhm, its record in Intellects is fundamentally
0:40:53 Dave McLean: going to be a combination of data from PartsMaster and Bomex. That's right. Okay. So if we, if we roll the clock back on the life cycle of a product all the way to the beginning, which one would be the best source for us to consider to be the one creating the record in Intellects?
0:41:09 Dave McLean: Absolutely Bomex. Bomex. Okay. So architecturally, two integration solutions. Bomex would be the one that's creating the record, the new part record, whenever it comes in.
0:41:21 Dave McLean: Bomex might, might modify the record over time. It's going to presumably push references to drawings as well. And then on a, on a response cycle.
0:41:31 Dave McLean: And then schedule, PartsMaster is likely updating the part record in Intellects with the additional properties that are needed, but we would never receive a new part 
0:41:40 Joel Frick (6124): from PartsMaster. I believe that would be it, I can't say. I'd like that to be an accurate statement. If not for install drawings that call out usage of 
0:41:55 Dave McLean: parts that don't have drawings. Decision making will be when we circle back to IT to define the how exactly do we want the data to flow and what what what sequencing is IT going to use to push this data to intellects.
0:42:15 Dave McLean: But I think just for an operating assumption for the sake of today's conversation, soon. Bye. It's a 9010 rule, so if 90% or more of the time the appropriate flow would be Bomex creates the record in intellects and it might be creating it as a shell with certain properties populated, but not others.
0:42:34 Dave McLean: And then later that day, or later that week, or whatever, whatever cycle makes the most sense, given when the when that new record gets updated and processed in part master, we would then start receiving data for that part in part master.
0:42:48 Dave McLean: That's going to update the relevant fields there, and we just segment them on the form. If you're ever trying to do a part lookup in Intellects, you'd see a header primarily populated with data from Bomex, and then you'd start seeing sections of data that are, you know, Bomex specific and part master
0:43:05 Dave McLean: specific, so we know where each of 
0:43:06 Joel Frick (6124): these different fields is coming from. So, yes, so I'm going to, I'm going to raise the flag here as well.
0:43:15 Joel Frick (6124): We've talked about this before, and I think that we kind of indicated that IT is, is working, you know, having some discussion internally.
0:43:23 Joel Frick (6124): There's a there's a lot of moving parts here, but one of the particular concerns that we talked about, let me go back here.
0:43:31 Joel Frick (6124): Don't let me. Val doesn't like me very much, so. Val doesn't like to go back, back again. So remember, we talked about how key this, this parent company in this depot is.
0:43:50 Joel Frick (6124): Yeah. The, uh, thing about PODMAG, is I don't get that depot. I just get parent company. Okay. So this is, this, this is something we've talked about before in these meetings.
0:44:05 Joel Frick (6124): This is something that we currently struggle with in telecoms. Yeah. But we, we don't have the solution, because this is kind of my concern, and I think we should develop that solution before we hand over that entire architecture to Summit and to Intellects, because our main issue that we have here is
0:44:28 Joel Frick (6124): every supplier has a depot 0.1, whether it's an active depot, the way that we've set it up in IntelliQuest is every supplier has a depot 0.1, so that we can say, basically, everything defaults to that 0.1 depot.
0:44:44 Joel Frick (6124): And then from there, we wait for PartsMaster to update, and then when PartsMaster updates and moves it to depot 6, or depot 2, or whatever, then it will update in IntelliQuest.
0:44:56 Joel Frick (6124): But until that happens, we've got a PPAP potentially sitting out there at the wrong moment. So that causes all kinds of headache for QCDModel.
0:45:07 Joel Frick (6124): It causes all kinds of headache for SQA. So this little piece, it's more internal. I'm sorry, Dave, for, It is something that we have to work out internally before we hand that architecture over.
0:45:24 Joel Frick (6124): It can be. There's also a flat file that they receive from SVR for PartsMaster. So, and you said sometimes those can straddle and get far into the development process.
0:45:38 Joel Frick (6124): So, as a perfect example, IPs are made at heart level IPA. But, the IPs that said by default is dash 01, which is screencast.
0:45:53 Joel Frick (6124): So, I just released PPAP to Heartland. I'm like, sorry, it says 01, but this is yours. You need to go find it at 02.
0:46:01 Joel Frick (6124): That's kind of misleading everything people say. I was going to say 90%. That's probably actually exaggerated. I would say probably like 80% of the time, everything defaulting to 01.
0:46:21 Joel Frick (6124): 01 is not a problem because everybody just has the 01 default, but there's that 20% that's actually, you know, IPs.
0:46:28 Joel Frick (6124): There's a lot of those, uh, and that can become quite a big issue. Well, I know that also is a good example.
0:46:35 Joel Frick (6124): Yeah. The actual, the same… The availability depot codes are different than the shipping depot codes. So, when we deal with quality or PPAPs, we're dealing with 01 and 02.
0:46:49 Joel Frick (6124): But what shows the parts master is 06, which is Columbia City, where they ship 02. Yep. So parts master, like you said, is focused on our logistics.
0:46:58 Joel Frick (6124): Yep. More so than our part history. Yep. And, and I think if we're going to live in a world where we've got two systems, the world we want to live in, where it's the part being made.
0:47:11 Joel Frick (6124): That's right. Not where it should Is there a system in supply chain management or, uhm, procurement that identifies the manufacturing location as a specific depot?
0:47:32 Joel Frick (6124): So, as soon as we get a brand new part number, yeah, supplier management is the one who puts in the supplier code, yeah, uhm, into Omex.
0:47:43 Joel Frick (6124): Omex, okay. So the initial release of a new part number is assigned to a supplier by supplier management and then every new ECS after that propagates the previous, yeah, supplier code.
0:47:57 Joel Frick (6124): So, and, initially it is supplier management when we have a new part number. So they are involved right now. So if we have a depot code assignment within Omex or within Intel X, it would be supplier management taking that.
0:48:14 Joel Frick (6124): This is who's making it, and this is the depot it's coming from. So since they're being pulled into Intel X as an integral part, I think it's a step that they can be part of.
0:48:27 Joel Frick (6124): Maybe adding that field to Omex. Right, the depot code to Omex, so that it's a simple integration between Intel X and Omex.
0:48:39 Joel Frick (6124): Like I said, I know that this is basically an internal discussion that needs to be had, but I know it's people brought it up a couple of times.
0:48:48 Joel Frick (6124): I'm raising the flag again here. This is, you know, we're talking plumbing and electrical, right? This is, this is pretty foundational to us.
0:48:55 Joel Frick (6124): It's a good opportunity to drive that discussion. That's right. How do you guys work with MIT directly? Not to 
0:49:05 Dave McLean: complicate this, one of the admittedly higher level ADRs that we, we captured in, it actually came from our supplier NCR discussion, ah, so dealing more with how we use the data, was that we wanted to move to a model where any given part could have more than one supplier.
0:49:35 Dave McLean: Um, now, we've talked about it in the context of it being a fixed number, two of them, but the way we were talking about it originally, it wouldn't necessarily be a fixed number.
0:49:46 Dave McLean: So we'd want to qualify each relationship between the part and the supplier. For example, this is a manufacturing supplier relationship, so this supplier manufactures it, this one sequences it for assembly later on, and presumably there'd be more that would go, in which case, when we're talking about
0:50:08 Dave McLean: that part-to-supplier relationship, if we take that idea to its fullest extent, then it's not actually a list of fields on the part object that just connects them, it would actually be a list of records.
0:50:23 Dave McLean: And ideally we'd have to know, for each one of those part-supplier relations, what kind of relationship is that referring to?
0:50:33 Dave McLean: Does that ring a bell from prior discussions? Yes. Yep. Okay. Is there any? Yep. Is there any data right now that would, would look like that?
0:50:42 Joel Frick (6124): Uhm, this is, this is where, uhm, I'm gonna go ahead and call myself a liar. We do look at destination code.
0:50:49 Joel Frick (6124): We don't need to show it. But we do look at it. So, uhm, when you talked about the sequence parts, uhm, we look at destination code to see if that part goes to TAI, which is our sequencing company.
0:51:02 Joel Frick (6124): And I think it's, uhm, ends at 98 and 99 if I remember right. Pulling that out of 2 or 3 years ago when we set this up.
0:51:11 Joel Frick (6124): But, uhm, in any case, there's an indicator by destination code that this goes to TAI, which means it's a sequence part.
0:51:19 Joel Frick (6124): And then we would, from a problem reporting standpoint, never from a PPAP standpoint, but from a problem reporting standpoint, we would it.
0:51:27 Joel Frick (6124): Report, uh, problems to the sequencer or the, the maker of the part depending on the nature of the issue. Uh, yeah.
0:51:36 Joel Frick (6124): And then to further complicate that, I was thinking in my head about partners. SAP, yeah, to SAP. To sequencing, I was thinking about the cover front, the switches are set to Trim, the shifter indicator is set to Heartland, and then PAI sequences the cover front.
0:51:57 Joel Frick (6124): Yeah, it's multiple layers deep. So, yes, it wouldn't necessarily be just two 
0:52:02 Dave McLean: codes. OK, so then, would it be, forgetting how many different suppliers might be involved in this one, would it be fair to say that there are, there are essentially up to three different relationship types that there could be?
0:52:19 Dave McLean: There's a manufacturer, there's a, potentially a sequencer, and potentially an assembly supplier? Yes, and potentially 
0:52:28 Joel Frick (6124): I'll see you Bye. multiples of each. 
0:52:34 Dave McLean: Yep, no, that's fine. Okay, I'm thinking, uh, if you, if you want to envision it as a, as a form for a second, imagine I've got a form that describes the part and a table embedded in that form called supplier relations, where I go in and add each supplier that touches this part, and as I'm adding them
0:52:51 Dave McLean: with a little drop-down, the three values, I say this supplier is the manufacturer, this one is a sequencer, this one is an assembly supplier, this one also might be an assembly supplier, because it, you know, that part continues to move through the table, the chain, until you get to a, a, an assembled
0:53:07 Dave McLean: part that comes to SIA to, to integrate into the vehicle. So you could, in that, in that model, you could have as many relationships between that part and the supplier list as possible.
0:53:20 Dave McLean: That's needed, but when you're qualifying what those relationships are, three different categories, 
0:53:29 Joel Frick (6124): at least to start. Is there ever a service part or a warranty part that would be similar? Service parts could potentially have the same setup, but that would be more of a part status rather than a an additional supplier that would 
0:53:52 Dave McLean: So, let's play that out for a second. If I have a service part, uhm, I agree, there's a different status code, which might entail different properties, but when I'm looking at the relationships between that part and the supplier, there's a there's still going to be a manufacturing supplier.
0:54:11 Dave McLean: Somebody's got to make that part. Presumably that the types of relationships would be the same, I would imagine, like if it's a complex one.
0:54:20 Dave McLean: It might still have an assembly or might still have a sequencing supplier. And it could still have somebody that's doing assembly work before it comes to the dealer or you or whoever it is that would would be receiving it at the end of the line.
0:54:34 Dave McLean: I would say yes, but probably 
0:54:37 Joel Frick (6124): not sequencing. Sequencing is done for preparation for our lives. So got 
0:54:41 Dave McLean: it. Service negates that. I guess that makes sense. Sequencing is only needed when you need a lot of them because you're building a lot of vehicles, whereas parts, it's it's a little more one off than that, right?
0:54:52 Dave McLean: Yeah, right. And I mean, again, I realize you're you're stocking warehouses, so it's not actually one off. You're not. You're not building one.
0:54:58 Dave McLean: They're not building one part for one damaged vehicle, for example, but it's a little bit of a different process, so I think the structure still works.
0:55:07 Dave McLean: I mean, ultimately, the categories that define those relationships might be different, and I use three just to make it to define a world, but if it's a dropdown, then it's just a dropdown.
0:55:17 Dave McLean: I think what matters is the architectural decision is that when we are receiving these records from Bomex and Partmaster or, you know, however it is you guys want to handle potential changes to Bomex to get to get some of these properties there, wherever it is that we ultimately get it from, the part
0:55:37 Dave McLean: exists, and on its own, the part has no, no direct relationship to a supplier. Instead, there's a grid. Where you would then define each of those part supplier relationships, what kind of relationship it is, and further downstream, when we get into more of the intellects event-driven data, a non-conformance
0:56:00 Dave McLean: , for example, Thank you. In the opening form on a non-conformance, you'd say, okay, this NCR is in relation to this part number, and a drop-down is going to show that's filtered for those part relationship, or part supplier relationships, for you to pick which supplier it is, because it depends on the
0:56:17 Dave McLean: nature of the issue, you might be looking at it as a manufacturing issue, you might be looking at a sequencing issue, you might be looking at an assembly issue, but for the purpose of, of defining a supplier non-conformance, you'd have to pick where it is, and I, and the other adjacent part of that decision
0:56:32 Dave McLean: that we'd made in, in prior calls was, when in doubt, we tend to default to the manufacturing supplier, right? So, in the real world, there's some default logic for this, but, like, I think what this allows us to do is, if it's very clearly an assembly issue, or very clearly a sequencing issue, you can
0:56:53 Dave McLean: take that part and tie the, the supplier non-conformance to the appropriate supplier by using that relationship grid, rather than, rather than trying to, to basically always attribute it back to the manufacturer.
0:57:05 Dave McLean: I think 
0:57:07 Joel Frick (6124): it's fair to default to the manufacturer, but allow it to be altered at the time of creation for the NCR.
0:57:17 Joel Frick (6124): Yep. So, here's the, here's the. The big example we're talking about IP. Uh, instrument panel, uhm. Here's our, here's our airbag that we, we've been looking at.
0:57:31 Joel Frick (6124): Right. This, this is an application. That I believe is just using data. Um, but this, this one might be a good one to reference to IT to kind of help explain what we're talking about when we say, well, you know, if I, if I plug this part number in, I have a, I have a, a, uh, trouble with the IP as a,
0:57:57 Joel Frick (6124): you know, as a company at SIA, this is the part that we receive, uhm, directly, but for us to be able to say, actually, I want to be able to take this problem that I'm, I'm writing against the IP and say, well, I actually have a problem with the SAT part here.
0:58:13 Joel Frick (6124): This is, this is a parent-child cross-reference application. So, uhm, normally what we're telling our associates now, and, and from a PPAT perspective, this doesn't really apply, but for a problem-reporting perspective, it could apply.
0:58:29 Joel Frick (6124): What we're telling our associates now is, well, you need to know if this is a SAT part that you're dealing with, and just write it to this part number instead of to the IP part number.
0:58:38 Joel Frick (6124): And it's possible for them to do that by pulling drawings and really digging into it. And it takes quite a bit of effort, but it's possible, so.
0:58:47 Joel Frick (6124): But for this conversation, I think referencing this app to kind of help them understand what we're talking about, when we're talking about this cross-reference of the relationship between SAT parts.
0:58:58 Joel Frick (6124): and so on, I think this would be a good one for them to better understand what 
0:59:03 Dave McLean: we're talking about. If I'm getting the underlying context of this correctly, like, each of these different records exists as a part, just as like the, the Assembly, uh, parent part number 66643SL019.
0:59:21 Dave McLean: They're all parts. Yep. This is a relationship mapping that says, you know, basically, not in so many terms, this thing instrument panel includes all of these other parts.
0:59:33 Dave McLean: And in theory, you could go into any one of these parts and see the same table for them. And so you're, you're essentially building a part hierarchy out of it.
0:59:41 Dave McLean: Yep. That theoretically rolls all the way up to a finished vehicle. Yep. Okay. Is this part hierarchy, these relationships between parts, is this something that we think we'd need in Intellects beyond the, the relationship for each individual part to the suppliers that have touched it along the way?
1:00:02 Dave McLean: Showing the, showing the list of part relationships to other parts, would this be something that we think we would need for non-conformance, or audit, or pilot part data, EPAP?
1:00:17 Joel Frick (6124): Thank you very much. That's the I can think of. Yeah, like, problem report tonight. Yeah. So, like I said before, we're getting by without having this in there.
1:00:30 Joel Frick (6124): It's one of those nice-to-have, not-need-to-have. I would almost think of it as, when I plug this part number in to an NCR, that it gives some indication, in some way, hey, this part includes SAP.
1:00:50 Joel Frick (6124): parts, you know, make sure that your report is, is for the, the right part number, basically. We expect SAP before it goes to the destination supplier, so we will always be dealing directly with the manufacturer for our data.
1:01:13 Joel Frick (6124): So, Luke, you're getting by, and it'd be nice to have, or really nice to Uhm, yeah, good, good, good question.
1:01:20 Joel Frick (6124): I would say really nice to have. Really nice to have. This is, this is a, uhm, probably daily occurrence. I write a problem report to Heartland, and then I have to pull it back and say, sorry, Heartland, this isn't you, this isn't Kiyosaki, or this isn't, whatever, so.
1:01:37 Joel Frick (6124): Got it. Yeah, it, it, because the learning curve is pretty 
1:01:40 Dave McLean: steep, so. And if I, if I'm, again, oversimplifying this in my head, it's possible, for example, the nonconformance might initially get raised in relation to the instrument panel, but then number.
1:01:55 Dave McLean: Upon closer inspection of, you know, whatever's going on, it turns out that it's actually a specific component, a cable harness, for example, that's problematic, and so why, why continue to relate this MCR against the instrument panel versus Cheers.
1:02:11 Dave McLean: The cable harness and the supplier of that cable harness. Yep, correct. 
1:02:16 Joel Frick (6124): For example, you know, we initially might think it's a missed connection or a soft set, but upon further investigation, we find it's a bad crimp in the harness or a bad splice, so then we say, okay, this is going to the SAP supplier instead.
1:02:29 Joel Frick (6124): Got it. Okay. Okay. 
1:02:32 Dave McLean: So what that means for us is a couple of things. So first of all, in order to enable that use case in a world, in a way where the person can actually see that information on the NCR, we would need to have this part relationship table.
1:02:48 Dave McLean: And it doesn't have to be a complicated one, I think. It can be. We'd have to see what data underpins this, but at its simplest, it would just work.
1:02:59 Dave McLean: It just be, you know, parent part, child parts, based on the numbers. And they would just be connected that way.
1:03:06 Dave McLean: The only reason I would say that maybe it would be a little more complicated is if there's a, if there's a status that's associated with that.
1:03:12 Dave McLean: So, you know, if, for example, Cool. Uhm, the cable harness was part 1, 2, 3, 4, 5, and then later on, something changed in the, in the specification for the instrument panel that required us to start using a different cable harness from a different supplier.
1:03:30 Dave McLean: Therefore, you'd want to be careful. Deprecate the first relationship, uh, and show it as an inactive or, or, you know, whatever the case is.
1:03:37 Dave McLean: We can filter it, but I think it's still a, it's still a meaningful thing. There's sounds like there is probably a life cycle that is associated with these relationships, uhm.
1:03:47 Dave McLean: Or maybe it's just the part, maybe like. But would you, would you use, would you use one part as a component in multiple other parts?
1:03:56 Dave McLean: That cable harness, could it be used for multiple 
1:04:00 Joel Frick (6124): instrument panels? Maybe the harness isn't the best example of that, but yes, in general, you know, like the bolts would be maybe a good example.
1:04:09 Joel Frick (6124): Yeah, so yeah. OK. You 
1:04:12 Dave McLean: know what, I'm looking at it here even to, some of this is already here, the start and end dates, the quantity.
1:04:17 Dave McLean: This is a mapping table that actually contains a bit more than just parent part and child part number, but that's OK.
1:04:23 Dave McLean: That's, they're just properties on that table for us to consume. So, architecturally, we have our part record, we have our part to supplier relationship, where we put in how we want to qualify that supplier relationship based on what the nature or what the purpose of that supplier relationship is.
1:04:40 Dave McLean: We have a part to part relationship that describes which parts are subcomponents of another part, which actually Thank Thank you.
1:04:50 Dave McLean: It's a hierarchy, and that relationship is going to contain additional properties like the quantity used, the start date, the end date, parent drawing number, parent ECS, and so on and so forth.
1:05:00 Dave McLean: I assume the parent ECS in this case is always referring to the ECS for the set, uh, in this case, the 
1:05:07 Joel Frick (6124): airbag assembly. Yeah, I just, I just went the other way while you were, while you were talking. I just took this and said, child to parent.
1:05:15 Joel Frick (6124): So I took a child part, and then it says, okay, this child part applies to all of these parent partners.
1:05:20 Joel Frick (6124): Ah, so, okay, this 
1:05:21 Dave McLean: airbag assembly is used in all of these other parts. All of these instrument panels. Yeah, yeah, so look up the chain rather than down the chain.
1:05:32 Joel Frick (6124): You can, it can go either way. 
1:05:34 Dave McLean: Cool, yeah, we can do something similar. Again, how much, how useful that is in any given event record, maybe not so much, but I think having it at the person's fingertips without having to navigate out to somewhere else to go see it would be ideal.
1:05:49 Joel Frick (6124): Yes. Okay, cool. This is just being set up for somebody that isn't used to supplier codes and that. Sure, sure.
1:05:59 Joel Frick (6124): Would it be helpful to put the name of the supplier up there instead of always dealing with just the supplier code?
1:06:05 Joel Frick (6124): Yeah, I guess not. I guess I'm used to it. You know, you guys know, A315. It says the supplier. Wouldn't it be nice that it displays who that is in case, oh, I thought it was you.
1:06:16 Joel Frick (6124): Just add another column in the table to give you a feel for it. Actually, you guys don't even have 
1:06:20 Dave McLean: to do that. It's so, because we know who the supplier is on our end, right? We, like, we'll have to have a supplier table.
1:06:28 Dave McLean: That's how the supplier is logging in. When we display it to the user, even though you're only sending us the supplier number that it's referencing in the depot number, we can use that to pull through the properties of the supplier that we know, including their name.
1:06:43 Dave McLean: Yeah, 
1:06:43 Joel Frick (6124): and especially if we included the depot, then that will actually change necessarily the name of the supplier, the facility, if we properly named the depots.
1:06:56 Joel Frick (6124): You got it. We pulled from SAP and FAA. I'm sure it's all common if you do If we integrate with 
1:07:06 Dave McLean: You got it, OK? OK, cool, so I think I think you know structurally then just before we wrap for 10 minutes.
1:07:15 Dave McLean: I'm going to take a I think we've got a good handle on on some of the bigger pieces here. The part itself, the part to supplier relationships, the part to part relationships.
1:07:26 Dave McLean: I just want to come back to versioning real quick so. If any one of those properties changes, uhm? Subcomponents, for example, or or components of the part that you're talking about.
1:07:44 Dave McLean: I think there there's a spectrum of options that we can take. The most complex of which, which also gives you the ability to sort of roll back to any point in time and look at what this what that part and it's all of its related records look like at that time, is that anytime any of those properties 
1:08:03 Dave McLean: change. We basically create a copy of the part, pre-populate it with all of its supplier and part relationships, including the one that has just changed, and call it a new version at that point.
1:08:17 Dave McLean: I don't know how necessary that is, though. Versus, on the other end of the spectrum, where it's simplest, is, hey, look, all of these properties just exist, we maintain no versioning other than maybe an audit trail, something that just logs that it did change, and this is very simple.
1:08:35 Dave McLean: It's similar to the view that you showed before, but that anytime you're ever relating to the part, you're not relating to the part at a point in time, you are always relating to the part as it exists today, and if there is ever a need to snapshot those properties, then we snapshot them onto the events
1:08:51 Dave McLean: like the PPAPs, the non-conformances, the, you know, whatever events further downstream that 
1:08:56 Joel Frick (6124): we need to snapshot them to. I'll give you an example. So, if I have a part that is undergoing a change, or a model change.
1:09:06 Joel Frick (6124): Yeah. But that part is also, being used in current production. The engineering change will necessarily be required for a pilot part event.
1:09:18 Joel Frick (6124): Yeah. But the mass production use of that is still at the other level. So we will have both of those parts coming in here at two different ECS levels.
1:09:29 Joel Frick (6124): There's the current level, and then there's the part that's in development for a pilot event. Would they 
1:09:36 Dave McLean: not have two different part numbers, or would that be a revision? Not necessarily. 
1:09:41 Joel Frick (6124): Yeah, only with a revision level. So it could be, just to, I don't know if this is the case with these, but just CompuMeters, or for example, we get so many ECSs for CompuMeters.
1:09:56 Joel Frick (6124): Displays, radio displays, CCU assemblies, anything on software, because we're 3 years behind on software. So, so just using what you see on the screen here as an example, let's just say, and I don't think this is the case here, but let's just say, let's just say that this is what we're building with 
1:10:15 Joel Frick (6124): right now. We're building with Rev2, you know, ECS number, BO337, uhm, this is what we're building with in mass production right now, and then what's coming down the pipe for DY2 Thank you.
1:10:28 Joel Frick (6124): is this I0240. Again, not the actual case here, but just as the example, uhm, Rev3. So if I'm writing up a report for the current mass production part, I need to write it up on this ECS.
1:10:44 Joel Frick (6124): Level. And I need to have all of these levels exist in the system with two different statuses. Yeah, for the for the purpose of PPAT, for the purpose of NCR, for the purpose of auditing and so on and so on.
1:10:59 Joel Frick (6124): These different levels. Do matter, in terms of what I'm selecting. Sometimes we'll even run mass production, depending on our model.
1:11:06 Joel Frick (6124): One model will have the new level. Correct. The old one because the mass production. Correct. We're sharing it across the league.
1:11:14 Joel Frick (6124): One got it, one didn't. Production level. Yeah, in a perfect world, the SL05A that I talked about, we would change the part number in a perfect world, but our design department has very weird rules about when they issue an ECS.
1:11:33 Joel Frick (6124): And when they issue a new part number, it used to be pretty common, so that very last digit, the A, they would use that to increment revisions within an actual part.
1:11:46 Joel Frick (6124): And for whatever reason, they still do and they've stopped using that on so many parts. Uh, but like door trim.
1:11:55 Joel Frick (6124): Door trim. I'm a B, C, D, E, F. But then when I get a new part number on that same drawing, it starts with A.
1:12:03 Joel Frick (6124): So I'm like, oh So yes, the ECS level matters, simply because our design department doesn't follow a consistent set of rules of when to increment that last.
1:12:17 Joel Frick (6124): Digit of the part number, and when they create a whole new part number. So, for example. The 05A, that is a whole new part number.
1:12:24 Joel Frick (6124): For any other part, they would have just gone with a B. Got it. Whatever reason, they decided to go with a whole new part number.
1:12:32 Joel Frick (6124): Okay. So, Okay. So then, 
1:12:34 Dave McLean: for versioning of, within the scenario where, we're doing a revision of the ECS record, so a new drawing in this case, I guess, is probably the best, best descriptor for it.
1:12:47 Dave McLean: Would that be the only thing that, like, that, and all of its adjacent stuff, be this, the only scenario under which it we trigger a new revision, versus something where, uhm, the, I don't know, something low-level, the, ah, the depot that the supplier's going to, like, if it's, if it's something that's
1:13:08 Dave McLean: in that part supplier. relationship, that specifically isn't bound to a new drawing, or a new ECS change. I would, I would agree with that.
1:13:19 Dave McLean: I, I think that, I think that, 
1:13:21 Joel Frick (6124): uhm, ECS is the specific one where we need to have those descriptions. Uh, levels of discrete records. When, when we change, uhm, depot 01 to 06 in the system, that's just the live, that's what we can pick now.
1:13:39 Joel Frick (6124): We can't pick the old one and the new one or anything like that. So 
1:13:42 Dave McLean: yeah, I would agree with that. OK, some of my next set of questions on this topic is going to be a little bit more IT oriented.
1:13:58 Dave McLean: In terms of sequencing, because we have a decent idea of what the data needs to look like at the end of the integration, but because it's coming from multiple sources.
1:14:09 Dave McLean: Sequencing really matters here, so you know, to give us a sense of where some of that goes, since we had said before that Bomex is really the one that kind of kicks off the tree, and I'll use a new part for the sake of a simple example, something that doesn't exist in Intellect yet.
1:14:27 Dave McLean: Bomex is typically going to be the one to originate it, and it's going to create the part number, a name.
1:14:33 Dave McLean: It's going to give us some drawing information, which we'll talk a little more about what goes in there a little bit later as we go through this.
1:14:40 Dave McLean: It's going to give us a revision number, so in that world, I would use it to create a part revision record in Intellect.
1:14:46 Dave McLean: Or a part version might be a better term for it, which in and of itself creates the part master record, the one that contains all of the revisions, and we just know whatever the current one is at any given point in time, depending on how much of the part supplier care.
1:15:02 Dave McLean: Relations that Bomex can give us. Bomex might also be able to populate that table as well, but it sounds like they can't give us everything that we need.
1:15:14 Dave McLean: So in that scenario. You know, let's say we they can give us the manufacturing supplier relationship. Then what we'll need to figure out with the parts master group or the integration team that's working with part master group is on what sequence would.
1:15:32 Dave McLean: The ship to and the, uh. Sequencer or like any other any other components, any other supplier relations. At what point would those ones come in?
1:15:43 Dave McLean: And would that be something that in our world we would we would join it to the revision of the part?
1:15:48 Dave McLean: Or do we just join it into the part master itself? So what I would hate is if we join it to the revision.
1:15:58 Dave McLean: And so using using that information, we now can identify against that revision who the sequencer and who the assembly supplier is.
1:16:05 Dave McLean: Then two weeks later. We get a new revision from Bomex, which doesn't contain that data. And now we've lost those 
1:16:12 Joel Frick (6124): two supplier relations. Currently, like I said, only when it's a new part number, does it need that information filled out.
1:16:23 Joel Frick (6124): The current situation is, if there's a revision, uh, it carries over that information about which supplier it is. That's the default right now.
1:16:33 Joel Frick (6124): They don't have to fill that out every time there's a revision, uh, a new ECS. Thanks. That carries over. It's only when it's a brand new part number or drawing that we rely upon those fields being populated.
1:16:47 Joel Frick (6124): And then it's assumed that moving forward, it carries over. It's easy. It's very rare that we will move one part number from one supplier to another.
1:17:02 Joel Frick (6124): It has happened, but usually if that happens, it's a depot code, like a supplier moves from one depot to another.
1:17:10 Joel Frick (6124): But otherwise, it's extremely rare for a part number to move 
1:17:15 Dave McLean: from one supplier to another. Right? Right. Would there? Let me ask you this way. I think I know the answer, but.
1:17:26 Dave McLean: Thank you. What's the, what's the lag time between when a new revision in Bomex for a given part gets created and therefore would theoretically kick off something in Intellects to when all of the data in Parts Master relating to that has been populated?
1:17:43 Dave McLean: I suppose it's like, ideally, like, ideally all this data flows through from one system and therefore it's consolidated in one.
1:17:53 Dave McLean: Next best is that it comes from multiple systems, but it is triggered by an event in one system. And that the trigger event happens late enough in the game that all of the properties are populated everywhere.
1:18:07 Dave McLean: So we've talked about this in the vein of the trigger being the new ECS revision in Bomex, but because of that's further upstream in that sequence, we wouldn't necessarily have all the data in Partmaster that we would need to fully build this profile out.
1:18:23 Dave McLean: Yes. If we switch it the other way, and it's based off of an update in Partmaster, even if the web service that we're using that the integration, you know, realizes, oh, we've got a new, we've got a change to Part 1, 2, 3, 4, 5 in Partmaster, great, I'm going to go take the stuff that I need from Partmaster
1:18:42 Dave McLean: , and I'm going to go retrieve the stuff that I need related to that from Bomex, compile it into one payload, and send it over to Intellects as a, as a revisioned record in Intellects.
1:18:53 Dave McLean: That would be ideal from a technical point of view, but I suspect that it's probably too late, given that the goal is to run PPAPs.
1:19:04 Dave McLean: In Intellects, as I understand the sequence, is that the PPAP stuff is happening early in the process, like we basically need that initial ECS revision notification to kick off the PPAP as quickly as possible.
1:19:19 Dave McLean: That's right, yeah. 
1:19:20 Joel Frick (6124): Okay, so from my, from my experience, we don't use Parkmaster as much as SQA does in mass production. So from the development standpoint and the PPAP standpoint, what is at the moment?
1:19:36 Joel Frick (6124): SQA impacts, drives 99.8% of what we do, uhm, when we start to go back to Parkmaster, uhm, as an example, I will go in and I will look to see if I want to make sure which model a part is being used in.
1:19:55 Joel Frick (6124): So you saw on the original screen, when we very first started this DX3 versus DX3R, we are undergoing significant revisions of what's in DX3 versus DX3R.
1:20:04 Joel Frick (6124): It was originally supposed to be a minor minor submodel, but it's actually turning into a more major than DX3. So we, we have to go into the Parkmaster to understand whether it's a DX3 VPAP or a DX3RPPAP, but initially, when we process that revision, we don't necessarily need what's in Parkmaster as 
1:20:31 Joel Frick (6124): much as we do 
1:20:32 Dave McLean: what's in VOEX. Okay. At the stage of, uhm, when you're doing a PPAP, would you actually, like, because that's so early in the process, there might not actually be an identified supplier that's responsible for sequencing or 
1:20:52 Joel Frick (6124): for assembly yet, right? Uh, for assembly, yes, it will be done. Defined by the assembly drawing, which is usually a component of the parent part.
1:21:01 Joel Frick (6124): So there'll be an installed drawing inside there that says, um, what part is going to be in there? Um, but yes, there is a delay and, um.
1:21:12 Joel Frick (6124): It is an unfortunate delay, but thankfully we work close enough with supplier management so that even if they haven't populated BromEx yet, we can still process that record, um, and if they don't know yet, then we just have to sit on it.
1:21:28 Joel Frick (6124): Got it. Yes, there's always a delay when there's a brand new part number of at least a day or two before they get that updated.
1:21:39 Joel Frick (6124): And it's usually us saying, hey, I need a supplier code in here 
1:21:42 Dave McLean: so I can process this. Is that the delay material for any of these workflows that we're doing in Intellects? Like, would, if we waited until they do what they need to do, and theoretically there's some trigger in Bomex that recognizes when they've done their part, if that's the trigger to send it to 
1:21:59 Dave McLean: Intellects, would that, would that prevent that? Yes, uhm, 
1:22:04 Joel Frick (6124): so for example, uhm, currently in our system, if there is not a supplier code associated with it in Bomex, it will not create the PPAP record in IntelliQuest.
1:22:17 Joel Frick (6124): It depends upon that supplier code being there, or the record is not created. And so, that therein lies where we get stuck trying to process PPAP, because the record does not exist.
1:22:30 Joel Frick (6124): It literally does not exist. Yeah. 
1:22:33 Dave McLean: And that's 
1:22:34 Joel Frick (6124): something we want to improve. I'd love that to improve. Unfortunately, it is a reality of being that far ahead of production that sometimes we don't 
1:22:45 Dave McLean: even know who we're getting it from. Okay, so if Bomex contains, at minimum, the relationship to the supplier company, right, A135, we, you know, we've talked about defaulting it to it.
1:23:05 Dave McLean: Let's sidestep that, because I don't actually think that's totally necessary in this moment. If Bomex knows the part number, part name, Bomex understands who the supplier is, the company, and then, you know, a bunch of other stuff as well.
1:23:26 Dave McLean: We can use it to create the part revision. We can use that to create, and I'm going to even reframe that, and it's not, I'm not even going to call it the part revision, I'm going to call it the Thank you.
1:23:37 Dave McLean: ECS number revision. So, if we were looking at this one here, uhm, V0214 would be the first one that would come through to us.
1:23:53 Dave McLean: it's going to carry a reference to the drawing, it's going to carry the title, it's going to carry a supplier reference, the part number, and so on.
1:24:00 Dave McLean: We're going to use that to create the part. We will use the supplier reference on that, uh, ECS record number to create the first.
1:24:09 Dave McLean: Part supplier relation, right? That way, at least we can establish the relationship to the manufacturing company's parent. Would that, would that ECS number revision, would it come with all of the part-to-part assembly data, the, the relationships between an assembly and all of its parent components?
1:24:34 Dave McLean: Well, eventually, and yeah, let's just show you the 
1:24:37 Joel Frick (6124): SAP, there should be a SAP check. Well, yeah. This is the original, this is the K3 level. But yeah. Let's go back, let's, let's just do the current rev and see what we've got.
1:24:57 Joel Frick (6124): Oh, I'm sorry, I'm on drawing. I need to be on a part. I forgot to change tabs there. Yeah, see, it should, it should be checked.
1:25:06 Joel Frick (6124): Because this is a SAT part, we know it's a SAT part. But yes, it should be there, and, So, like I said, in our current system, we don't have supplier code there.
1:25:18 Joel Frick (6124): It doesn't create a record, and what I would love to see is an exception report that says, hey, this new record was created in Bomex, but I cannot create a PPAP record, because, there's no supplier code.
1:25:31 Joel Frick (6124): Somebody needs to populate this. I'd love to see that, and it would, you know, I would say punch somebody in the nose, but tickle somebody and say, hey, you haven't done your job yet.
1:25:46 Joel Frick (6124): We need this supplier code in here, because we 
1:25:48 Dave McLean: cannot process this. But again, that supplier code's got to go into Partmaster, or, or BOMAX, depending on which one we're talking about.
1:25:59 Dave McLean: Yeah. Got it. 
1:26:01 Joel Frick (6124): And, right. Like we said, usually BOMAX leads, and then Partmaster, again, is our logistics 
1:26:08 Dave McLean: and how we handle it, uhm, what we put it in. That's fine. Yep, I gotcha. 
1:26:16 Joel Frick (6124): Partmaster has it, right? That's, that's, I mean, Partmaster has to have it, right, or the part will show up here.
1:26:25 Joel Frick (6124): Right. For that part, which would be a problem. Yeah, and especially, like, the history, it showed it originally being direct ship.
1:26:31 Joel Frick (6124): Yep. To Heartland, and now we're sending it to SLC first, and then SLC sent it to Heartland, so you saw that whole history of ship 2.
1:26:39 Joel Frick (6124): So, one of the, one of the things that you said was ECS number. We want to avoid using ECS number.
1:26:49 Joel Frick (6124): We want to use drawings. We've learned that painfully, uhm, this one you can see the ECS prefix and ECS number.
1:26:59 Joel Frick (6124): It's the same ECS prefix for all of these ECSs. Sometimes, a drawing revision is driven by another model. And depending upon how they release that ECS, it'll have an ECS number from that other model.
1:27:19 Joel Frick (6124): So we want that drawing revision number. To be the driver. Okay. 
1:27:26 Dave McLean: All right, so drawing revision. Because we've run 
1:27:28 Joel Frick (6124): into, yeah, we've run into fits where we will have like. And an ECS number from a different prefix.
1:27:38 Joel Frick (6124): And it will throw people off and they'll be looking at the wrong model. So the driver vision number needs to be the primary and then the ECS number.
1:27:48 Joel Frick (6124): With the prefix that prefix is secondary. Just like supplier code supplier code. Defines the supplier, but we've asked, hey, can we see who this supplier is?
1:27:59 Joel Frick (6124): But the supplier code itself defines same as the revision defines it, and then the ECS 
1:28:06 Dave McLean: number is reference information, OK? OK, so the ECS contains part number. And a list of drawings. Drawing numbers. 
1:28:20 Joel Frick (6124): Yeah, pull that up, Luke. Pull up an ECS. 
1:28:27 Dave McLean: Can any given ECS revision have more than one drawing on it? Yes. Yes. Oh yeah, that's a good 
1:28:43 Joel Frick (6124): Oh, multiple drawings on this ECS, multiple part numbers on this ECS with reference to the drawing number that it's, 
1:28:54 Dave McLean: that part number is on. Got it, okay. And, when we say multiple part numbers, so the, okay, just thinking this through, a drawing of an assembly, because it's, because that drawing is referencing an assembly that is made up of multiple parts, these are the parts that would be listed in it?
1:29:21 Dave McLean: Kind of. 
1:29:21 Joel Frick (6124): It's more like specs. Okay. So, let me, let me just pull this up here. And I'll have to change the way I'm sharing my screen so that you can see.
1:29:31 Joel Frick (6124): You can what I'm seeing. Hey Dave, while he's pulling that up, I did get ahold of Nate, he's available. Do you think we'll be back from break around 11.20?
1:29:46 Joel Frick (6124): Or what do you think it Yeah, let's do it. Okay, so I'll have him. I'll have five more minutes to break.
1:29:53 Joel Frick (6124): Okay, you got it. Okay, so this is your drawing number, which not to try to be confusing here, work. It can also be a part number.
1:30:08 Joel Frick (6124): It usually actually is one of the part numbers on the drawing. And then you have additional part numbers that are associated with that same drawing.
1:30:17 Joel Frick (6124): So it's basically, steering wheel is a good example. That we've used multiple times in these meetings. Because it has recognizable specs.
1:30:27 Joel Frick (6124): So you'd say I'm going to write one drawing, but I'm not going to write a separate drawing because the stitching color is different between steering wheel tips.
1:30:35 Joel Frick (6124): I don't know if that's true or not here, but you know, I'm not going to write a whole new drawing because I've got an additional button on this version of the steering wheel, uh, versus, versus the other.
1:30:46 Joel Frick (6124): But when there's major fundamental differences, like this particular one is the heated steering wheel option. Versus a non-heated steering wheel.
1:30:54 Joel Frick (6124): Now I've got two different drawings and, and, uhm, you know, the minor spec options, let's say, typically are going to be included in the same drawing.
1:31:03 Joel Frick (6124): We also do this, another really good example of this would be like, handed parts. So you've got, uh, I've got the fender cladding that Keith was talking about.
1:31:11 Joel Frick (6124): The cladding keeps, door cladding keeps changing rev levels. I've got the left hand and the right hand version of it.
1:31:16 Joel Frick (6124): They're, they're symmetrical parts, uhm, but I'm going to have one drawing, uhm, and there's going to be, you know, two or, uhm, four, however many part numbers on there.
1:31:26 Joel Frick (6124): So, uhm, there's kind of a, let's just say a one to many relationship between, uh, part numbers and, and drawing numbers.
1:31:35 Joel Frick (6124): And then the same thing happens at an additional level between ECSs. Typically an ECS is either adding a part number to a drawing and or modifying a part numbers that are already on that drawing.
1:32:00 Joel Frick (6124): Those are the two 
1:32:01 Dave McLean: ECS scenarios. Primary. Yeah, I think, I think that just from a data point of view, like more We can definitely expose the drawing number, but to say that the drawing number is the thing that sort of leads the process in terms of the data integration, I don't think it's going to work.
1:32:23 Dave McLean: Just because it's not truly what's called a primary key for any given change. I think that's a going to have to, there's got to be an identifier here that is associated with the ECS.
1:32:33 Dave McLean: So if you think of the ECS as a whole, as a package that contains relations to other things, including the drawing and including the parts that it's related to.
1:32:42 Dave McLean: I think that's the piece that we need to sort of lead with, and then the drawings and the part relationships populate into the ECS record in Intellects.
1:32:52 Dave McLean: Well. Because you would never change the ECS typically. 
1:32:58 Joel Frick (6124): It typically lists only the drawing number on the ECS coverage sheet. Typically. That's OK. Sorry, it can 
1:33:04 Dave McLean: be more than one thing. The payload to Intellects can contain multiple pieces. It's that the trigger for all of this is an ECS view.
1:33:14 Dave McLean: Not so much a drawing, because there can be multiple drawings within an ECS. It's just describing different aspects of the same change, right?
1:33:25 Dave McLean: So I think the one record that we use to sort of lead the payload is the ECS itself, and whatever its unique identifier is, and that payload contains information about the drawings, so a table of the drawings that are part of that ECS, a table of the parts that are part of that ECS.
1:33:44 Dave McLean: And the advantage of that is that within the context of that ECS, if those drawings or parts change over the life cycle of that ECS as somebody is, you know, working it, we don't have to, on the intellect side, we don't have to snapshot every single tweak or change that somebody makes.
1:34:02 Dave McLean: We just consume them as they come through, and if the change rises to the level of it triggering a new ECS, then that's what creates the new version record.
1:34:16 Dave McLean: But otherwise, we're just, we're just synchronizing everything. Like that, under the hood here, that drawing, uh, in, in Bomex, that drawing is a revisioned record as well.
1:34:29 Dave McLean: So even though you're saying, you know, we're seeing drawing number 1, 2, 3, 4, 5, even if drawing 1, 2, 3, 4, 5 was used on the next revision, it's still, uh, there, sorry, the next ECS revision, uh, that's being done, next change request we're making, that, at least under the hood in the data, that
1:34:49 Dave McLean: drawing would still have its own version currently. Code that's associated with it for the 
1:34:52 Joel Frick (6124): second ECS. The only other caveat I would add is ECS revisions, the ECS itself. Yep, that's, yes, reissued. Yep.
1:35:06 Joel Frick (6124): That's it. That's all. That's what we do here. So this is, that's, Keith and I are on the same page here.
1:35:13 Joel Frick (6124): So the way that we pull this in currently, we kind of create this as a unique identifier. So basically what this is, is that prefix Thank joining us.
1:35:23 Joel Frick (6124): The ECS number, ECS revision, and then drawing number. And that actually creates a unique identifier. So then if the ECS gets revised, not the drawing, just a unique reason, a simple reason for an ECS to get revised, there's many reasons, but a simple reason would be, we changed our schedule, you know
1:35:48 Joel Frick (6124): , we said, well, actually, we wanted to pull this ahead to a different event or push this behind to a later event or something like that.
1:35:53 Joel Frick (6124): We wanted to revise ECS to do that, as a simple example, but the drawing itself did not change, we're just changing kind of our timing related to the change.
1:36:06 Joel Frick (6124): So, in those cases, oftentimes, we would want to maybe not repeat the ePath, but we would want to understand, hey, there was a change to the schedule, so we want to capture this in our drafts.
1:36:18 Joel Frick (6124): So, so we create a new draft. Timing is the key there. So, for us, what will typically happen is, so, back to the start of this whole discussion, about pilot part inspection, if the ECS changes timing, then that affects my inspection instruction to our receiving associates of when they should be looking
1:36:39 Joel Frick (6124): for this change to be in place on these parts. So, the ECS changes as revision, primarily, is usually about timing, and then that will drive my inspection instructions of when they should be looking for this change.
1:37:00 Joel Frick (6124): Let's pause it for a second, so everybody 
1:37:02 Dave McLean: can take a quick break. Mm-hmm. Yeah, we're good. Yeah, absolutely. Thank you very much. 
1:37:10 Joel Frick (6124): Back in time. Thanks, guys. Thank Hey guys. Hi Dave. 
1:45:17 Dave McLean: Welcome back. Hey, just to make sure I have the sequencing right here in my head, when you guys, uh, in.
1:45:47 Dave McLean: Bomex, the drawing is what gets created first by parent company, and then the ECS gets built around the drawing. Is that, is that how it would 
1:45:59 Joel Frick (6124): typically flow through ECS? ECS is the will have one or more drawings associated with it. Okay, so they'll 
1:46:08 Dave McLean: create an ECS record for you that contains drawings, one or more drawing, and by that pool, like, it'll also contain the, the, uh, relationships for that, that particular ECS.
1:46:23 Joel Frick (6124): Yeah, and then the drawing will have one or more part numbers associated with it. Yes. Drawing will have one or more part numbers.
1:46:29 Dave McLean: Okay. Perfect. And in this context, when we say an ECS, what we're saying is an ECS record. That's revision, which might be the first ECS, or first revision of that ECS, but technically it could go through multiple revisions over the life cycle of that ECS 
1:46:48 Joel Frick (6124): before it's done. And it could be a red series. Rarely have revisions, but they do have revisions. I can think of one ECS having 3.
1:47:04 Joel Frick (6124): I think that's the most I've ever seen. But they do. Drawings definitely have multiple revisions over their life cycle. Yeah, every, every, yeah.
1:47:17 Dave McLean: Sorry, Luke, I think you just answered my question there. Every drawing revision triggers or is encapsulated. Is it in a new ECS?
1:47:25 Dave McLean: That's right, yes. OK, so. So the first event that could possibly kick off this this integration trigger for anything would 
1:47:37 Joel Frick (6124): be a new ECS. Yes, and that ECS will release Rev0 of the drawing and that in effect creates our very first time that we are dealing with that drawing.
1:47:52 Joel Frick (6124): Got it. It 
1:47:53 Dave McLean: releases Rev0. Got it. And, and while that might not have any bearing on any sort of production data, because it could be very early, you were not actually making it, from a PPAP point of view, in the vein of trying to make it so that that part is available in the PPAP application as early as possible
1:48:11 Dave McLean: , same thing for pilot part data. It would be everything associated with that first, uh, that first ECS drawing that we've got.
1:48:20 Dave McLean: Correct. Okay. What happens if an ECS is created with a couple of drawing revisions, and subsequent to that, while you're still doing pilot part data, or you're still doing a PPAP, or actually, let's do a PPAP process in this case, what if the engineering group decides to change the drawing They realize
1:48:45 Dave McLean: , ah, there's a mistake, or there's some, you know, some issue that was unforeseen, and so, like, very quickly after that first ECS is pushed out, another ECS with a new revision of 
1:48:55 Joel Frick (6124): that drawing comes out. That's actually the most common scenario. 
1:49:01 Dave McLean: Got it. Okay. 
1:49:03 Joel Frick (6124): So, in our design group's product lifecycle, the initial drawing is typically what we call a request for spec drawing. They'll issue this drawing to the supply chain.
1:49:17 Joel Frick (6124): I want you to make this part for me, but I also want you to create a drawing of this part, send it back to me, I will approve it, and then it will be released as the spec drawing.
1:49:31 Joel Frick (6124): So, almost every part is every part we have, every drawing we have, almost every single one has two revisions. The initial is rev0 that says, okay, these are the new part numbers, these are a general description of what this part is going to be, and then we'll have a little block on there telling the
1:49:50 Joel Frick (6124): supplier, make your own drawing of this, submit it back to me, and then we will release this as the official spec drawing for this part.
1:50:00 Joel Frick (6124): So that's the most difficult scenario, rev0 and rev1. And of course, during development, we're usually 3 or 4 ECSs along the way after the spec drawing releases.
1:50:12 Joel Frick (6124): So I mean, those are two different levels of drawing. It's either a request for spec or a spec drawing. And that's typical for almost every single one part, except Metal and Harness.
1:50:25 Joel Frick (6124): That's all I can think of is Metal and Harness. Yeah, not all 
1:50:29 Dave McLean: Harnesses. Okay. Alright, so that is ECS, but because an ECS and its associated drawing can contain more than one part, like, ultimately, there's the question of, like, cool, how do we, how do we consider the ECS?
1:50:54 Dave McLean: That's relatively straightforward, but where we started with, with this was, hey, we need to get to, we need to get to a spot where every time there is a new part that we're creating in the new part with the relative, the requisite data we need.
1:51:08 Dave McLean: Yes. So let's play that out. For a sec, let's say we've got a brand new drawing, a brand new ECS, so we've never seen this drawing before, and that drawing contains, you know, let's just say for simplicity's sake, one part that is a brand new part.
1:51:25 Dave McLean: I'm assuming that that's something that happened in that, in that sort of sequence, where the first time that you're seeing that part as a record in any of your systems is as a relation to that drawing on that first ECS?
1:51:38 Dave McLean: Yes, and that's exactly what 
1:51:40 Joel Frick (6124): that very first part of the drawing is. The drawing number I threw out this morning was that SLO5. That is a brand new airbag part number on Rev0 of that drawing.
1:51:51 Joel Frick (6124): That's the first time we ever saw that. And, unfortunately, we never knew it was coming until it slapped us in the face.
1:51:58 Joel Frick (6124): That's why you know that card. Yes. Pain is a good teacher. Yeah, that's right. Pain is a teacher to say, not, don't do that again, unfortunately.
1:52:12 Joel Frick (6124): I am not the initiator of this pain. I'm the recipient 
1:52:17 Dave McLean: of this pain. Okay. ECS part record.
1:52:30 Joel Frick (6124): And so, where, where you're ultimately going with this, and this is, we, we briefly touched on this. Sometimes, the existing part numbers on that drawing will receive that change.
1:52:46 Joel Frick (6124): And there will be new part numbers on that drawing that are specific to model change. So, there will necessarily be two PPAP records associated with that, because of that.
1:53:02 Joel Frick (6124): So, for model change, my timeline is much longer, from the time of release until the time of putting that in mass production.
1:53:13 Joel Frick (6124): But, sometimes, that change to the effect of existing part numbers on that drawing needs approval, uh, basically right away, or within a time period for mass production.
1:53:28 Joel Frick (6124): So, the different part numbers on that drawing may or may not be in mass production. So, model, change PPAP, and then, same, the running change PPAP for the part numbers on that drawing.
1:53:42 Joel Frick (6124): Um, steering wheels is a perfect example. So, we had a, yep, we had a change to the steering wheels, Luke brought up the steering wheel ECS, or a drawing.
1:53:53 Joel Frick (6124): Um, some of those part numbers had a change to the heater switch and harness routing as a mass production change, and then I had new part numbers on that same drawing that weren't needed until later for the model change.
1:54:12 Joel Frick (6124): Had two different PPAPs. SQA had the running change PPAP, and I had the model change PPAP, and the part numbers were different because of the timing of when SIA was going to be consuming those.
1:54:27 Joel Frick (6124): But for pilot part inspection, I was still receiving those new model parts. I just wasn't using them in mass production yet.
1:54:34 Joel Frick (6124): So I still had to tell somebody how to inspect those parts, and in fact, We found the answer. There was an of the supplier on the pilot parts before we started receiving those parts for mass production.
1:54:45 Joel Frick (6124): Because of the pilot event where we inspect parts. Got it. Thank you. From a, from a system standpoint, I don't, I don't know for sure, and to be able to answer this better, thinking, thinking outside of what we do currently, and to what we're wanting, we have approval by part number, and even ECS level
1:55:11 Joel Frick (6124): , is, is there a way for us to, to have that in the system, that clearly indicates that these part numbers are running change, and these part numbers are, part numbers at the ECS level.
1:55:26 Joel Frick (6124): Right. That, well, that's, that's what I'm saying is, these, these current part numbers, the current production part numbers are going to receive the running change.
1:55:34 Joel Frick (6124): These are new part numbers, specifically for a new model. Can we see that in Bonex? Right now, I don't think By reading the ECS and reading the drawings, you know, we can't see that in Bonex right now.
1:55:48 Joel Frick (6124): So, ultimately, once we get the PPAP integration, there should be a flag in there that says, this is PPAP approved.
1:55:57 Joel Frick (6124): at this ECS level. And it ties back to a PPAP record that approved That makes sense. I guess what I'm getting at is, is there a way for the API going into intellects to know, hey, in this case, I need to create two drafts.
1:56:23 Joel Frick (6124): So that's, that's kind of the, the issue that I'm seeing is, we have to recognize that. When we process the draft, we still have to interpret what we're seeing on drawing in the ECS.
1:56:36 Joel Frick (6124): So, for the purposes of the system, we're still going to automatically create one draft. Because, again, like, as we do now, you guys will use the ECS to generate the PPAP, whereas we roll that ECS into an existing model change PPAP.
1:56:57 Joel Frick (6124): And I think, I would like to continue that practice, where the model change PPAP references the ECS and it gets rolled into the PPAP, whereas the mass production running change is tied directly to the ECS.
1:57:18 Joel Frick (6124): So, Dave, are you picking up what we're putting down there? I think so, yeah. So, I think that the part table is kind of the key part that we're actually missing right now.
1:57:34 Joel Frick (6124): We're missing that right now. We're missing that right now, and we have to have that going forward. And by part table, I mean specifically on the PPAP.
1:57:42 Joel Frick (6124): And we're probably going off the rails here because we're going to talk about PPAP later. Later. But we need to be able to reference.
1:57:49 Joel Frick (6124): But can you do that? We have to put the plumbing under the hood so that we can see how we do it.
1:57:56 Joel Frick (6124): We manually put that in the notes, and then we confirm it on the part submission warrant, which part numbers they're submitting for 
1:58:03 Dave McLean: approval. So, and the other thing I'm trying to reconcile here is whether, you know, again, because we have some data coming from ECS and some data coming from Partmaster to describe this part.
1:58:17 Dave McLean: Yeah, there's, architecturally, there's a world where, you know, are those the two, are those two records, via the integration, trying to update the same record in Intellects?
1:58:28 Dave McLean: And I think the sequencing is tricky here to do this in the way that we're describing. Like, we couldn't necessarily go to tell IT exactly what we're doing, but what trigger, in all cases, is going to be the thing that kicks off this process.
1:58:42 Dave McLean: And so I think we sidestep that by saying, look, there's, imagine there's a module in Intellects that is merely meant to replicate the data model of a given ECS record from Bomex.
1:58:54 Dave McLean: So, Thank you. At its simplest, this is slightly oversimplified from what it would actually be, but you have an ECS record which has one or many drawings associated with it, and the ECS record has one or many parts.
1:59:07 Dave McLean: The parts are also related to the drawings. And this is, this is data that you guys are shown on the screen in place.
1:59:14 Dave McLean: Since most of the time if we have a new part, the first that we're going to hear from it is an ECS part record that is referencing, or that is being referenced on a drawing through an ECS.
1:59:25 Dave McLean: So we would receive this payload from Bomex via an integration, and the part record would, every single time, it's going to fire some logic and intellects to create what intellects will just call a part, because that's the thing that, when this drawing gets bigger, this is what, that's what's going to
1:59:43 Dave McLean: connect to supplier nonconformance and PPAP and pilot part data and all the other stuff in intellects. That's the one that collects all this data that's inbound to us from the various feeds.
1:59:55 Dave McLean: If we think about what's in that initial payload, at its simplest, it's to the part number that we care about.
2:00:01 Dave McLean: That's what we're using to recognize whether we need to create it or whether we need to join it. It's going to contain the part name, it's going to contain a few other properties as well, but those are the two most critical ones that we would need.
2:00:13 Dave McLean: Later on in the sequence, so we may have, in theory, over the first couple of days even, we might have received another ECS record, as we described earlier, where, you know, hey, we've got a new drawing and that drawing is referencing the same ECS part record, so we're joining that as well.
2:00:29 Dave McLean: We can see that we've received that part record from Bomex more than once, but it's still all being combined and collected together on the Intellect's part object.
2:00:41 Dave McLean: At some point, somebody goes into Partmaster and fills out the profile in Partmaster, which would then trigger, you know, another integration point to push that data into a part record in Intellects.
2:00:52 Dave McLean: And once again, using the part number, we would then join that Partmaster record to the central Intellect's part object, so that if you were, if you were looking at that record as a form in Intellects, you'd see your header details, but then you'd also see two grids below it, which would be, here's all
2:01:12 Dave McLean: the Bomex records that we've received about this part, and here's all the Partmaster records we've received about this part. run themselves.
2:01:19 Dave McLean: Sequentially, and the latest of each one of those lists is what's being used as the current version of that record.
2:01:27 Dave McLean: That's how we, that's how we construct together, you know, the name, the supplier reference, all the other pieces that are needed in order to build out the additional 
2:01:34 Joel Frick (6124): structure that's needed here. Yeah, I think, I think having two, keeping them separate parts of that park record is good, because, you know, the park master is the logistics side, and Bomex is the engineering 
2:01:50 Dave McLean: history side. Yeah. Yeah, and I think that, like, we can visually display those fields separately, but I think in this model, where we just say, look, as far as what Intellects considers a part is concerned, it is neither an ECS part record or a park master part record, because neither is complete in
2:02:09 Dave McLean: the context that we need to use it. So we have to take those two pieces and join them together into our version of the part record, which is what then connects to everything else.
2:02:18 Dave McLean: And therein, therein lies the versioning that comes from this. Uh, and, again, I'm gonna give another example. This an overly simple view of this.
2:02:25 Dave McLean: Imagine the name of the part changes slightly. Nothing substantive, but just just that one property changes at some point in the ECS part record.
2:02:35 Dave McLean: So a new ECS gets received, that new ECS contains the drawing as well as the ECS part record with the name change, and because that field, that field in the part object is being sourced from the ECS part record, we know, oh, the name changed, updated here.
2:02:53 Dave McLean: Should you ever need to see the history of that particular property? You wouldn't see, like, a part revision table in Intellects because a part revision is actually a function of all the different part master and ECS part records that we've received.
2:03:07 Dave McLean: Depending on what properties we're talking about, we would just have to make sure that we, if there's a hundred fields, we would have to specify which ones we are listening to the part master part record for Ideally, there's never a conflict between the two, but human beings being human beings, that 
2:03:29 Dave McLean: might not be the case in some scenarios, so it would be that if for some reason the name of the part is different in ECS than it is in part master.
2:03:40 Dave McLean: Then we are just defining for our version of it in intellects that hey, we're all always listening to the ECS part record for the name, for the part number, for the, uh, whatever else we want.
2:03:51 Dave McLean: Whereas for part master record, we care about the depot, we care about the supply to, uh, we care about, you know, 
2:03:58 Joel Frick (6124): and so on and so forth. Yeah, the part, the part number itself is the, the key field, you know, you got 
2:04:08 Dave McLean: it, you got it. And so if we ever receive a new ECS record that contains a drawing with a new part, uh, or new part number in there.
2:04:17 Dave McLean: Or part number in that part record, that's the cue for us, go create a new part. And you can always look at, if you ever needed to, like, depending on any given specific application that we have down the road, maybe when we get to PPAP, there's a need that once you've selected the part, you need to be
2:04:33 Dave McLean: able to click through in order to go view the ECS record, or the drawing, or whatever the case is for that particular part.
2:04:40 Dave McLean: And so we'd be able to give you a link, if you imagine, PPAP over here, which is going to have a many-to-one relationship to a part, and given PPAP you select the part that you're working off of, you'd be able to follow that relationship back to the part in Intellects, back through the relationship to
2:05:04 Dave McLean: the part record. to then view the drawing or drawings that that part record is 
2:05:09 Joel Frick (6124): being referenced as part of. Yeah, that PPAP at an ECS level for that part number. 
2:05:17 Dave McLean: Correct, you got it. It'd be, yeah, I mean, if you really wanted to, you could do backtrack it into all prior ECS records and then look at a specific drawing from three months ago in a past version of any, like in a past ECS that we did.
2:05:31 Dave McLean: I don't know how applicable that is for what you guys would do, but like, because we would have all of that data accumulating constantly, and intellects, we build the UI so that it's the most likely case, which is, hey, show me the, show me the drawing or drawings associated with that part from the current
2:05:48 Dave McLean: or most recent ECS that we're working off of. But it would allow you, in theory, to go further. Go back further if you needed to, yeah, and then that that 
2:05:57 Joel Frick (6124): describes exactly what we do now. So if it's a running change, we're typically saying at this latest ECS level, yeah, if it's a muscle change, we're saying at the highest ECS level, plus everything else that 
2:06:11 Dave McLean: rolled into it. Yeah, and I suspect what will actually happen is when we go to create the PPAP, in addition to the fact that you're selecting the part that the PPAP is relating to, we would then likely also be showing you a drop-down of all ECS records that are related to that part, so that you, you 
2:06:28 Dave McLean: know, pick the one that is appropriate, and from there, pick the drawings that are appropriate for this particular PPAP that you're working off of.
2:06:36 Dave McLean: And it's just a series of drop 
2:06:37 Joel Frick (6124): That's very good description. So, like when Luke showed you the IP, so the IP is made up of many different components that are also undergoing ECS levels, and I have to tell the supplier which ECS level of this part I'm expecting them to have in there, so they also receive Thank you.
2:06:58 Joel Frick (6124): The information about those component parts, so that they know sometimes it will change the part number. Sometimes it will just be an ECS level.
2:07:07 Joel Frick (6124): So those component parts are tied to that assembly. And they have to make sure that those component parts are correct and at the 
2:07:15 Dave McLean: correct ECS level as well. Cool, and I'm just adding some of the additional tables we saw.
2:07:26 Dave McLean: So part relationships. It's that that hierarchy table. Uh, any given part record can have one or more subpart records. Any given part record can have one one parent record.
2:07:37 Dave McLean: In that case, one or more parent record. I guess it can be a component of. It could be a component of more than one.
2:07:44 Joel Frick (6124): Luke, do you see any reason to, from the standpoint of. Intellects to differentiate between subcomponents and sap components. I consider them the same.
2:07:55 Joel Frick (6124): And the reason why I say that is, is if we have. For example, a sap component change. We would want to make sure Heartland is using the correct sap component.
2:08:07 Joel Frick (6124): You know, another example is the console. The ECS was only released for the label on the console sub, not the console assembly.
2:08:18 Joel Frick (6124): I still have a PPAP record at the console assembly level. So, I don't think it matters whether it's a self-source sub component or a sap.
2:08:32 Joel Frick (6124): It's still tied to that parent PPAP. And could still potentially generate a PPAP record. Correct. As long as we have that part, uh.
2:08:46 Joel Frick (6124): Yeah, I think, I think where I've seen. Trying to think here. What, what exactly the. I've seen where we, we give the.
2:09:07 Joel Frick (6124): ECS to the SAP suppliers say, hey, you're, you're changing this. And then because the part number doesn't change, the assembly drawing doesn't need to change.
2:09:21 Joel Frick (6124): And there's no change for. You know, the end-users are supplied. And then, in that case, then you only have the DPAP generated for.
2:09:36 Joel Frick (6124): Right. Like, the SAP part, the subcomponent part. But if it's a subcomponent, it might necessarily drive SAP won't always drive it, but a subcomponent will drive it, if there wasn't a purchase part drawing change as well.
2:09:53 Joel Frick (6124): Yeah. Console being an example. Yeah, the purchase part drawing didn't change, the subcomponent did. But then we would wrap that up into a purchase part drawing.
2:10:03 Joel Frick (6124): And sometimes we have to do that manually right now, which I think is probably what we would have to do here also.
2:10:08 Joel Frick (6124): No data system is going to see that. I would say, on that front, no change. 
2:10:20 Dave McLean: Alright guys, just make a router change for a second here. I keep bouncing in and out. 
2:10:43 Joel Frick (6124): Who is it after this?
2:10:54 Joel Frick (6124): Are you kidding me? Absolutely. I don't make that much. He's like, P-PAP. He's like, what is a P-PAP? I whipped it up as a production 
2:11:05 Dave McLean: part of the process. Oh, so you whipped it Yeah, I whipped it up. Ha, ha, ha, All right. All right, so almost building out from here.
2:11:26 Dave McLean: Okay, we'll clean some of this stuff up afterwards, but I think that captures the lion's share of what we would need.
2:11:31 Dave McLean: So, so. Okay, we have a new entrance to the arena. How's it going there, sir? Perfect. Perfect, I so what we're what we're trying to wrap our head around here.
2:11:47 Dave McLean: Is the necessary plumbing that would be needed for some REST API calls to intellects in order to create, uhm? Create records from Bomex as well as part master.
2:12:04 Dave McLean: Uh, and a big chunk of what we're what we're really trying to wrap our heads around here is sequencing. So when when would a given event chain start?
2:12:10 Dave McLean: It sounds like it's all really being driven off of Bomex as a beginning thing with some adjacent information coming from part master.
2:12:18 Dave McLean: So to lay out a scenario. What we'd be looking for is an integration that would send intellects a REST API call whenever a new ECS record is created that would join not only properties about the ECS record, but also any related drawings, any related parts to said drawings, as well as any part relationships
2:12:44 Dave McLean: to the parts that are coming into play. So, that over time, what we would get is essentially a replication, a simplified replication of the ECS record from which we can process and create our own part table that consolidates information from ECS as well as part master, as well as other stuff that's going
2:13:02 Dave McLean: to be generated within Intellects as well. Sort of the general direction we're headed. Does that make sense? Yep, yes. Perfect.
2:13:13 Dave McLean: Uhm, I guess just starting from a technology point of view, uhm, I can't imagine Bomex on its own has the necessarily capability to do that, so I imagine this would be something that's either being built out as a custom integration or, like, with custom code or through an 
2:13:32 Joel Frick (6124): integration platform of some type. Is Nate on the call yet? No, I, Nate said. Oh, I'm sorry, I thought we said he wasn't.
2:13:42 Joel Frick (6124): He said he he had something come up. He wouldn't be available till 1 o'clock, so it might be something cool.
2:13:46 Joel Frick (6124): No, I'm just So, yeah, he's not available till 1 o'clock. He did have another meeting that it wasn't. 
2:13:56 Dave McLean: Sorry guys, so 
2:13:59 Joel Frick (6124): I didn't know if we want to get into something else or if we want to try to discuss it without him.
2:14:05 Joel Frick (6124): I can answer at a very high level and say that the current setup is as you described your building. Custom app, basically, to send that REST API.
2:14:20 Joel Frick (6124): Okay, 
2:14:21 Dave McLean: okay. What he's going to need in order to sort of spec out what this looks like, like, we're giving him.
2:14:28 Dave McLean: Essentially, tables, or at least conceptual tables. He'll, at some point, need to go figure out the actual table names from which to pull that.
2:14:35 Dave McLean: But what he's going to look for is, you know, what are the specific triggers in the data that he's monitoring for, what specific properties.
2:14:44 Dave McLean: Does he want to send? And again, we can sort of rhyme off really high-level ones, part number, part name, and so on, but there's more to it than that, obviously, when we look at the screen as you're doing the walkthrough.
2:14:56 Dave McLean: So something you guys are going to want to think about is to start compiling an exhaustive list of all the fields from each of those Bomex tables that you would want to send over to Intellects to be able to have visible or to drive logic on the Intellects side.
2:15:12 Dave McLean: He'll need that for the integration. I'll also need that for us to be able to, to find the fully incorporate into the specification for, you know, what actually needs to be built for this.
2:15:25 Joel Frick (6124): I'm guessing that you don't use the data DCS report. That's just for us. It's probably a good starting point, 
2:15:37 Dave McLean: right, just in terms of being able to identify the properties that you need. It's probably not a bad starting point if there's a report that you consistently come back to, but there would likely be more to it than that.
2:15:48 Dave McLean: Yeah. They're pretty sure 
2:15:50 Joel Frick (6124): the import slash export is more than the daily ECS report, but the daily ECS report contains ECS number and part numbers and drawing numbers associated with that ECS.
2:16:05 Joel Frick (6124): But I'm pretty sure that ECS report is not what drives what gets from Bomex to IntelliQuest right now. Right, yeah.
2:16:16 Joel Frick (6124): It's, it's, it's a, it's a specific trigger in. Uh, Bomex, for sure, but there's also a, uhm, what do I want to say?
2:16:30 Joel Frick (6124): Condition, I think, that he looks at in RFQ, which we haven't even talked about. And I don't want to talk about it because I don't know anything about it, other than I've heard him say, yeah, we have to look at this specific field or this specific condition in RFQ.
2:16:46 Joel Frick (6124): So that'll have to be made, but I can't, I can't answer that. You can't see in RFQ. can do that every time.
2:16:52 Joel Frick (6124): Peace. Do you want me to respond to him that 1 o'clock is OK, or 
2:16:57 Dave McLean: let's do it? OK, yeah, let's do it. Perfect, then in the meantime, let's let's start to shift our our focus over to the inspection side of things will will take as an assumption.
2:17:09 Dave McLean: That we can get everything we want from the integration, which then lands us every day. We've got a. We've got a list of parts in Intellects that have relations to their their adjacent ECS records, drawings, specific versions of of, uh, part records that were sent to us from ECS and Partmaster, but essentially
2:17:30 Dave McLean: a consolidated list of parts that we could work off of. So, in that vein, let's, let's start talking about Pilotpart.
2:17:38 Dave McLean: In terms of, in terms of what we got here, from our original discussions on this. Pilotpart, my understanding of it, is that it's a, it's a structured sample level inspection program that runs.
2:17:53 Dave McLean: So, typically being done early on in the life cycle of a product, of a new part, we're taking a sample, whether that's, you know, X number of them per Y number, whatever the case is, however you determine which ones you're actually going to do, and you're going to run a set inspection checklist against
2:18:12 Dave McLean: each of those, each of those parts. Uh, for the purpose of assessing something. We didn't actually get that far in the, in the first, uh, first kick of this, as far as, like, where it all heads, but as far as, uh, being in inspection programs, that, we didn't We're, we're in the right ballpark here.
2:18:27 Joel Frick (6124): Correct. So, uhm, the pilot parts are tied to the PPAP for that new model. Yep. And we will receive certain parts for a build event.
2:18:42 Joel Frick (6124): And the engineers are responsible to create inspection instructions saying, I need this, and this, and this, and this, and this checked.
2:18:52 Joel Frick (6124): And then I need a result of that inspection. Log. And then if there's anything wrong with those, then that generates, uh, feedback to the supplier of what was wrong.
2:19:08 Joel Frick (6124): And then a disposition of, I need these reworked, I need to put them replaced, yadda yadda. So it's basically a mini-NCR, but because it's pre-production, it doesn't tie into the scorecards or anything else, but it does, uh, tie directly to that part number and we would love to have that history.
2:19:28 Joel Frick (6124): Be able to be visible to mass production once those parts go into production so that they can see, hey, this happened in pre-production, so it could potentially happen in mass production.
2:19:39 Joel Frick (6124): The example I gave of the steering wheel, perfect example. That is something I absolutely love. I absolutely wanted SQA to know happened on our pilot parts because that was an ECS that was happening in mass production and for model change.
2:19:53 Joel Frick (6124): We found it first on model change, so I want that history to be there if it ever happens 
2:19:58 Dave McLean: again in mass production. Got it. So, let's talk about that life cycle then. So, first of all, would it be fair to consider pilot part data as one step of the PPAP, or is 
2:20:13 Joel Frick (6124): it sort of pre-PPAP? It's pre-PPAP. So, it is basically reviewing the parts on the way to PPAP approval. So, they are at various stages of process maturity when we receive them.
2:20:32 Joel Frick (6124): We, but we still inspect them before 
2:20:36 Dave McLean: we build with them. Got it. And then, does that pilot part data program continue on once the PPAP is started?
2:20:42 Dave McLean: Or is it, it truly is pilot? so many other components 
2:20:51 Joel Frick (6124): to it for vetting as well. It generally ends with the PPAP part sample. Okay. As the last step of pilot part review, and then once the PPAP is approved, then it closes.
2:21:07 Joel Frick (6124): Got it. Okay. Unless Luke wanted to continue it on with SafeLaunch. Usually. So, that was something we briefly talked about, was the potential to continue it on.
2:21:21 Joel Frick (6124): Past PPAP approval, because right now, ah, SQA samples parts, but the, would you want the same instruction, or would you want different instruction?
2:21:33 Joel Frick (6124): We would, we would. I think what we talked about was we would want to start with. With that, and be able to modify it, you know, revise the instructions basically.
2:21:41 Joel Frick (6124): And I think that's what we talked about earlier today was each event will necessarily have its own pilot part inspection record.
2:21:50 Joel Frick (6124): So, when we will order parts, we will. Receive the parts for that event, and it's that, that event, and that ECS level, and there will be multiple events.
2:22:00 Joel Frick (6124): And then what Luke is wanting is, he wants to be able to continue that after PBAP approval. So, it would be like a new event.
2:22:09 Joel Frick (6124): And ECS level, basically the ECS level that it was approved at, so that his associates can inspect those for our safe launch during the ramp-up at SOP.
2:22:25 Dave McLean: In terms of setup for that, is the, is the checklist that's used for pilot part data the same for every part, or is it something that's unique to each part that the engineer is defining?
2:22:37 Dave McLean: It's every single part, yeah. Okay, so in terms of setup, really the first step. Is, hey, I've got to go in and I've got to create my checklist, uh, as the, you know, the engineer's got to go in to create the checklist that, that defines whatever attributes we're measuring, or whatever attributes we're
2:22:54 Dave McLean: checking, uh, publish that version, and, and proceed with it. Presumably that needs to be a version checklist as well, because over the life cycle of that pilot part data window, they might decide to revise the checklist at some point, right?
2:23:09 Dave McLean: That's yeah, and that's, that's 
2:23:10 Joel Frick (6124): exactly what happens. So if I get an ECS during and development. I will go in and I will modify that checklist for the event that it's going to apply to and say, okay, at this event, I've got this ECS that needs confirmed to be present on these parts.
2:23:28 Joel Frick (6124): Okay, and then and then. And on the other side of that, what Keith referred to with the safe launch, I'm most likely, not, not, not every case, but I'm most likely going to take that pilot part inspection instruction and, for lack of a better term, gun that down.
2:23:46 Joel Frick (6124): And only check a few attributes rather than many attributes that are being checked in the attributes or measurements, I guess, uh, that are being, uh, checked in the pilot 
2:23:58 Dave McLean: part inspection phase. Okay. So, let's do this. So, we know, and there's more to it than this, obviously, questions and choice lists and things like that, but at the simplest pilot part inspection checklist, pilot part inspection checklist version, so that we can, we can version these together, uhm, 
2:24:18 Dave McLean: these are, are going to be related to the pilot, to the part, although that might be through something else. So, let's talk about the trigger.
2:24:26 Dave McLean: So, it sounds like this process has really kicked off, uh, with the, with, you know, with intellects receiving a new ECS record.
2:24:35 Dave McLean: Essentially, that, that's going to be something that, how is it that we figure out who it is that we're kicking it off for?
2:24:43 Dave McLean: Is it a named individual 
2:24:45 Joel Frick (6124): associated with the part? Uh, associated, yes. So, we, we will have. An engineer associated with that when we're developing. So, right now, we manually assign that because how we are assigned during development is different than how SQA is assigned during mass production.
2:25:07 Joel Frick (6124): So, if it's easier to tie it to the PPAP, because the PPAP is tied to a specific engineer, if it's easier to do it that way, do it that way.
2:25:19 Joel Frick (6124): Otherwise, we'll just have to have a Good. I think 
2:25:25 Dave McLean: it's okay for the moment to consider it its own. We'll, we'll figure out how, like, in the case of a brand new one, that's the one that we'd have to have to figure out if it's a brand new part that we've never received before.
2:25:39 Dave McLean: There's gotta be some default logic that tells us who that's going to go to. And I think even as part of that, is it that all ECS records that we receive, even if it's, you know, even if it carries a new part, like, will we run a pilot part program for every one of those parts within, within the new 
2:26:01 Dave McLean: ECS, or is it only a certain subset? 
2:26:04 Joel Frick (6124): In model change, we absolutely do. So that is one of the key steps of our drawing review when we get a new ECS.
2:26:11 Joel Frick (6124): Even if it's REV0. So REV0, we receive that, we create our inspection instruction based upon how is this part different than a part we've used on a previous model.
2:26:24 Joel Frick (6124): So that we can focus our inspection instruction on making sure that those characteristics are confirmed to make sure that this part is what this ECS is describing, uh, in the drawing.
2:26:38 Joel Frick (6124): So it absolutely is driven by every single ECS, uh, where we go through and make sure if there's anything changed with this ECS, that we are identifying that in the inspection instruction to confirm that that change was included on the parts.
2:27:00 Joel Frick (6124): that happens here, though, and that, that would be, is this a model part or not? Meaning, is this a running change?
2:27:09 Joel Frick (6124): Alright, so if it's a running change, in FQA sampling, we're not going to do a 
2:27:15 Dave McLean: pilot part inspection. If it's a running change, we're not going to do a pilot part. So, as a descriptor of the ECS record, again, hopefully we can get the data for this type of change, would be 
2:27:30 Joel Frick (6124): either, Good night. I think it's tied to the part table, where we say which part numbers are affected. So, again, tied back to the PPEP, actually, because, yeah, model change PPEPs are inherently going to have other parts.
2:27:50 Joel Frick (6124): Whereas, your running change PPEPs don't. They'll just get the PPEP sample if they request one. So this is like, this is like PPEP type.
2:28:00 Joel Frick (6124): So based on PPEP type. 
2:28:04 Dave McLean: So then if we use that as a qualifier, then what that means is that the pilot part inspection piece has to be a component of PPAT.
2:28:20 Dave McLean: If I have my PPAT and I specify type of, type of change, either running or new model, what that means is each time You the part receives a new ECS, or is referenced as part of an ECS, is it that we're, so, okay, here's another one.
2:28:48 Dave McLean: Any given ECS record, by way of its drawings, can have multiple parts. Correct. Are we launching a separate PPAP for each part referenced in an ECS, or for one ECS?
2:29:00 Dave McLean: Each drawing. Each drawing, okay. So, in that case, it's gonna get a little messy over here, but we'll fix that.
2:29:14 Dave McLean: So, each drawing that we receive from Bomex triggers a new PPAP. We specify that PPAP. Is either a type as either a running or a new model, but because that drawing can contain multiple parts.
2:29:32 Dave McLean: So same question when we go to launch our pilot part inspection program. Are we defining? Are we defining that as?
2:29:41 Dave McLean: Against the drawing, and therefore, if that drawing references three or four parts, are we taking all of those parts sampling of all of those parts together and running in our inspection against the grouping of them?
2:29:53 Dave McLean: Or is it that we're running a separate pilot part program for each of each part 
2:29:57 Joel Frick (6124): referenced in that drawing? The answer is yes and yes. And the reason why I say that is because we don't necessarily order every single part number on that drawing for each event.
2:30:13 Joel Frick (6124): So we might only receive parts 0, 1, 3, and 6 for one event. And then, you know, we'll receive 2, 4, 7, and 8 for the next event.
2:30:29 Joel Frick (6124): But there are all still on the same drawing. Yep. So they won't all necessarily get inspected every single time. I mean, if there's only one part number, yes, it's the same every time.
2:30:41 Joel Frick (6124): Yeah, yeah. If it's different part numbers, it's, it's quite often different. Different part numbers per event, and we do that on purpose so that we can confirm all of our various models throughout the different build events that we have here at SIA, so that we've made sure that all of the part numbers
2:30:59 Joel Frick (6124): at some point Bye-bye. got confirmed in a finished vehicle. 
2:31:07 Dave McLean: Got it. So then. OK, so ECS record gets sent to intellects. Each drawing triggers the creation of a PPAP record.
2:31:22 Dave McLean: In the PPAP record, the engineer in that first stage of the PPAP workflow, for example, or however it is that we decide to wrap this into the PPAP program, is going to say, OK, I need to go create a pilot part program.
2:31:32 Dave McLean: It's part of that pilot part program. They're going to specify which parts they're going to be inspecting by selecting from the part list filtered for the parts that are referenced on that drawing.
2:31:44 Dave McLean: Right? Don't show me the full part list. Just show me the, if this particular drawing only contains one, then only show me one.
2:31:49 Dave McLean: If it contains 20 parts, show me the 20 and let me pick the five that we're going to include in this pilot part program.
2:31:58 Dave McLean: Once I've done that, the next thing I'm going to do is 
2:32:02 Joel Frick (6124): define my checklist. So, Dave, I'm sorry. 
2:32:10 Dave McLean: Yeah, go for it. It's all good. 
2:32:13 Joel Frick (6124): I was, I was coming from a, from a mindset of automation. And that's where I was concerned, and that's why I, why I, I mentioned.
2:32:22 Joel Frick (6124): Running change versus, uh, new model. If this is something that, that we're going to manually trigger, and I do think that, that, that is the right way to do this for a pilot part inspection, that's something that we're going to manually trigger.
2:32:37 Joel Frick (6124): I don't think that that's that type of change is actually relevant. I, I'm not 100% sure. I kind of want to talk through that, but running change versus new model.
2:32:46 Joel Frick (6124): I don't want to limit the system and say if it's running change, I can't do. No, I'm not, I'm not saying I want to do that, so I'm just thinking of it as a, it's, it's thinking of it like a PPAP element and you, as the engineer, are going to decide I'm going to do a pilot part inspection on this PPAP
2:33:06 Joel Frick (6124): and then I'm going to do another one and another one. Do as many as you want. And for running change, the engineer might decide they want to do some version of a pilot part inspection, or they might not.
2:33:20 Joel Frick (6124): They might not add that. So as long as it's not an automated trigger, I don't think this is the type of change is necessary to keep in mind for a pilot part inspection.
2:33:33 Joel Frick (6124): Does that make sense? Yeah, that makes sense. All right. I wanted to talk through all of that. You're headless, turning those wheels, finally, you know.
2:33:42 Joel Frick (6124): Clicked. Yep, yep. All right. So we're not talking about automation, which makes that less important for this. The 
2:33:48 Dave McLean: only automation that I've got here so far is that the drawing automatically creates the PPAP record in sort of an initial, like, staging stage.
2:34:00 Dave McLean: Exactly. It's assigned to an engineer, and again, we'll figure out the failover logic in case it's the first time that, that, what, that thing has been referenced before.
2:34:09 Dave McLean: But, like, in that case, that drawing creates the PPAP. The engineer is going to classify that for the PPAP, and they're going to make a decision on whether that PPAP requires a pilot part program to be run.
2:34:22 Dave McLean: Yes. If they do, they're going to create the pilot part program where they're going to specify which parts they're going to be inspecting.
2:34:28 Dave McLean: Yup. And that's, that's the release of the relationship back to the part object, filtered by the parts that are referenced in the drawing that originated the PPAP, and once they've identified the parts, they would then go in and start defining the checklist.
2:34:46 Dave McLean: So, it can create the container of the checklist, but the idea would be that it's, you're, you're defining what questions, and if, I mean, in an ideal world, if this PPAP has been created because we've just got a new revision of it, of a drawing, like a subsequent revision of a drawing, then ideally,
2:35:06 Dave McLean: in my mind, we would probably give you the option to select prior versions of the pilot part checklist that you did for that same drawing.
2:35:14 Dave McLean: Absolutely. And that way you can seed it, right? Yeah. Just to make it a little easier 
2:35:18 Joel Frick (6124): for you. I was just pointing out. That way we can do the same thing with, ah, Save Launch. Yeah, you continue over with what we did during development.
2:35:27 Joel Frick (6124): Yep. And then just remove what you don't want, right, once you're in Save Launch. Right. 
2:35:32 Dave McLean: Okay, but ultimately, the… The checklist that you are creating is unique to that instance of the pilot part program, and in and of itself, it is versioned so that over the course of that one pilot part program, if you need to tweak the checklist, you can, without messing around.
2:35:51 Dave McLean: up your historical data. Yep. Okay, uhm, and again, there will be questions and choice options and stuff like that to come into play after the fact.
2:36:00 Dave McLean: So, but once that happens, so we've, we've set up our pilot program by identifying which parts we're going to be inspecting, and what the checklist is.
2:36:10 Dave McLean: The last thing I can think of that, from everything I know about it so far, is that there's now a sampling component.
2:36:15 Dave McLean: So something that's going to say, how many samples are we doing here? Or are we inspecting? Or, or something that, that isolates this program to specific parts that you're pulling out of a shipment, or 
2:36:27 Joel Frick (6124): off a line, or something like that. And that's, that's the one where it's hardest for us to define ahead of time.
2:36:36 Dave McLean: Okay. How do you know, how do you know in advance when the pilot part program is done? 
2:36:43 Joel Frick (6124): Based upon our build events. So we will have specific build events during development. So we will know when we should expect parts to be received.
2:36:55 Dave McLean: Should know when we would expect parts to be received. Okay, so you would know, for example, that the period of time in that development phase, let's say it's going to be three months, you would know that you're going to be receiving parts.
2:37:11 Dave McLean: every week or monthly or whatever the 
2:37:14 Joel Frick (6124): case, you're going to have a frequency. I won't necessarily be a frequency. It'll be fixed build events, so let me share something real quick with you.
2:37:27 Joel Frick (6124): Showing up perfect.
2:37:38 Joel Frick (6124): Okay. Yep. So. Typically in any model change, we will have build activity at our parent company and build activity here at SIA.
2:37:54 Joel Frick (6124): And. For CD6, which is a minor model that we're currently in right now. So, what we're doing right now is.
2:38:08 Joel Frick (6124): This event inspection results, the instructor. This is how we're doing it. These are the characteristics I need you to confirm.
2:38:23 Joel Frick (6124): And so we'll identify those characteristics. And again, we're doing this in Excel right now. Yeah, so these are the instructions in this case.
2:38:34 Joel Frick (6124): I don't have anything that's tied to a specific event. These are just the things I want them to check every time.
2:38:39 Joel Frick (6124): Okay. And then, for the event, the supplier uploads their data, says, okay, I've shipped these parts.
2:38:53 Joel Frick (6124): That is a trigger along with receiving the parts to our inspection associates to perform that inspection for the event. I should close that.
2:39:06 Joel Frick (6124): Because. Then they record their results over here, so they'll do it by event. So, again, this is all one sheet right now, but in the system you're talking about, the instructions will exist for you for each event, and the results will exist for each event, which is how I originally had this way back 
2:39:29 Joel Frick (6124): when, but I got approval by a receiving group that wanted it all in one sheet, like, so if we go back to each instruction and each inspection being its own record, that would be awesome.
2:39:42 Joel Frick (6124): But it's not consistent in timing between events, it's based upon a specific event on our master schedule. Which, which means you as the engineer.
2:39:54 Joel Frick (6124): Would be each event where you want pilot part data, which should be every event. But each event where you want that, you're going to be saying, do pilot part data.
2:40:08 Joel Frick (6124): record is required each time. Yeah, and so with that pilot part record, so this was going to be the next subject I got into in your flowchart, there's a supplier aspect of that where the supplier Thank you.
2:40:23 Joel Frick (6124): Thank you, Eric. is responsible for uploading the data associated with the parts that they're shipping to us. Got it, okay.
2:40:33 Dave McLean: Okay, so 
2:40:37 Joel Frick (6124): let's take this for a second. Hey, Dave, we need to be mindful that the cafeteria closes at 14 minutes. You know what, this is actually a great spot.
2:40:51 Joel Frick (6124): This is actually a great place to stop. 
2:40:53 Dave McLean: Thank you very much. That's a terrific one. Thank you very much for keeping me on track there. We'll join up back up for one o'clock, okay?
2:41:01 Dave McLean: Oh, it's a good conversation. Yeah, thank you. Cool. Awesome. Thanks, guys. 
2:41:05 Joel Frick (6124): Did your stomach grumble, Rick? No, that was for Joel, because Joel works here 
2:41:09 Dave McLean: and I can't remember Can't survive off of eight cups of coffee a day. There you go. Thanks very much, guys.
2:41:19 Dave McLean: We'll see you in 45. Oh, we were just. Let's go. Yes. 
3:25:40 Joel Frick (6124): Oh. 
3:25:41 Dave McLean: OK, looks like we have Nathan with us. Hey Nathan, how's it going? 
3:25:50 Nathan Jannasch (6894): So far, so good. 
3:25:51 Dave McLean: Good good. Happy Tuesday. 
3:25:53 Nathan Jannasch (6894): Yes. Happy Tuesday to you as well. 
3:25:58 Joel Frick (6124): Well, we'll see if we can ruin that It's still time. It's not so 
3:26:04 Dave McLean: happy Tuesday. Wow. Wow. OK. 
3:26:09 Joel Frick (6124): The same space. That's how I feel about Luke's comments don't reflect on the rest of this, OK?
3:26:24 Joel Frick (6124): That's right. They don't reflect ... ... You think your laptop had poor performance ...
3:26:40 Joel Frick (6124): ... ... ... ... 
3:26:46 Dave McLean: Alright, uhm, so to frame up our discussion, Nathan, we're, we're working on solution design for a component of Intellects, a quality management system, uhm, specifically, Please.
3:27:02 Dave McLean: What we're, what we're working on today is, uhm, everything to do with parts, whether, uhm, ECS, drawings, part records, part master, number of different sort of places, and, and how we would consume that data into Intellects for the purpose of then leveraging it within a number of quality-based workflows
3:27:23 Dave McLean: within Intellects. All of this is in service of a replacement for IntelliQuest, and the segment that we're heading into now is to start talking through some of the technical requirements for For more information visit www.fema.gov Integration from Partmaster and from Bomex.
3:27:38 Dave McLean: For the folks in the room there, did I frame that up correctly? Yes. Perfect. So we've done a functional deep dive this morning into Bomex.
3:27:50 Dave McLean: And some of the workflows that are happening there, how that would interact with Intellects, as well as Partmaster, and we have a kind of target design on the Intellect side that we're shooting towards.
3:27:59 Dave McLean: What we want to understand is the feasibility of running an API integration to be able to create and maintain Bomex and Partmaster records in Intellects.
3:28:13 Dave McLean: And so I'm going to share my screen just to give us a somewhat simplified visual of the relational model that we're looking at.
3:28:20 Dave McLean: Let me know when you guys can see my screen. Yep, perfect. So I've kind of found the two different components for integration into containers here.
3:28:31 Dave McLean: The orange section deals with tables, at least the tables that we've identified anyway. The data model might be more complex on the Bomex side.
3:28:38 Dave McLean: But the tables that we would need to have populated in Intellix from Bomex, as well as a single table that we've identified so far.
3:28:49 Dave McLean: Again, it might be a little more complex than that when we get into the technical weeds, but a single table.
3:28:54 Dave McLean: A single part table from Partmaster that collectively would combine together with part records from Bomex from any given ECS record to create a part record in Intellix that is the connection to all the individual Intellix records.
3:29:11 Dave McLean: workflows. So ultimately, we're really looking for kind of a transactional model for each of these integrations. Just each time there's an update, each time there's a change, um, posting a new record into, into Intellix to capture that change.
3:29:26 Dave McLean: So I'll start. I'll start with just the plumbing itself right now. Intellix supports a REST API or has a REST API built into it with a number of different authentication methods.
3:29:37 Dave McLean: What we would be ideally hoping for is for, for Subaru to leverage that. To be able to push the data into Intellix as, as changes are made, and we'll narrow our focus for the time being to Bomex in this case.
3:29:50 Dave McLean: Okay. Is that something, generally speaking, is that something that Subaru IT can support for, for an integration like this? Yeah, 
3:29:59 Nathan Jannasch (6894): that's kind of what we're already doing for Intelliquest. Perfect. 
3:30:03 Dave McLean: What, what, uhm, what is the trigger that you guys use right now for when to send a new ECS, uh, and all the associated data from Bomex to, to IntelliQuest?
3:30:12 Dave McLean: Like, how do you, how do you know when to actually go get that data? Is there a trigger in Bomex right now that, that fires like a webhook or something like that to a service, or are you monitoring an 
3:30:24 Nathan Jannasch (6894): on-prem table or something like that? So, I, I'm gonna speak very, very loosely here, uh, just because it's been three years or so since we've done this, and, uh, I was only in this from kind of a high level up, but, um, if I'm remembering correctly, we have, uh, a process that pulls information into
3:30:44 Nathan Jannasch (6894): Bomex. Uh, just a slight spelling correction there. It's B-O-M-E-C-S, not B-O-M-E-C-S. Sorry. Um, and, so, that information comes from our parent company, and we import that, uh, twice a day, and it is incomplete.
3:31:02 Nathan Jannasch (6894): So, um, it, then, is basically given to our production control, uh, department, and they do some manipulation to the data.
3:31:15 Nathan Jannasch (6894): Um, check, check a box here, check a box there, adding part information. Part information is a big part of their daily interaction with Bomex.
3:31:25 Nathan Jannasch (6894): Um, they have, you know, I think just one person at this point who does a lot of the data entry for this.
3:31:34 Nathan Jannasch (6894): And so, when this record comes in, it comes into us, it is flagged as, like, not public viewing. Uh, so, uhm, if I'm remembering correctly, the flag that we use to identify when to push this information off to InqeliQuest at the moment is when Production Control says, I'm done with this, this is ready
3:31:57 Nathan Jannasch (6894): to be shown to the public, which is basically just them indicating that they're done with their changes. Obviously, that way, nobody is seeing an incomplete record as it's in, uh, as it's, as the public they're adding data to it.
3:32:09 Nathan Jannasch (6894): So, uhm, once they get done with that, they click a button to release it to, like, the public Bomex, uh, users here, and at that same time is when we fire off the information to IntelliQuest as, like, you know, this information is ready and complete.
3:32:28 Dave McLean: So, for the folks in the room, does that, that recollection jive with, with your understanding as well? Yep. 
3:32:35 Joel Frick (6124): Cool. 
3:32:35 Dave McLean: I think 
3:32:37 Joel Frick (6124): Gary, uhm, sorry, Nate, Nate, I, I think Gary did some work related to RFQ, but I'm not sure exactly what, what that work was.
3:32:48 Joel Frick (6124): We, we had some errors, not super early on, but, uhm, Gary, I'm sure has notes on that. So, yeah, there, 
3:32:57 Nathan Jannasch (6894): there's more to this process, though. I mean, that is, that is the base level standard flow, how it should work.
3:33:03 Nathan Jannasch (6894): Uhm, we, we also have, uhm, code in there to handle, you know, poor, poor events. Uhm, obviously, with production control doing this as a manual data entry piece, they, uh, can type part numbers wrong.
3:33:21 Nathan Jannasch (6894): They can type information wrong into the system. And so, we have, uh, a, uh, and just, I guess, from a big picture, all of the information in the Bomex application feeds into our procurement quoting application.
3:33:37 Nathan Jannasch (6894): And so, it is, uhm, also possible for this information to be released in Bomex and be incorrect and be fed into our RFQ software.
3:33:50 Nathan Jannasch (6894): So, what that, what that, what happens at that point is that, uhm, sometimes it's identified, sometimes it's not, uhm, procurement will, will see that, hey, this, this is not correct, uh, they will contact production control.
3:34:05 Nathan Jannasch (6894): Production control can make a change to that. We record that event and if it is one of the, uhm, like, fields or bits of information that we have previously fed into IntelliQuest, uhm, we identify that and feed an update to IntelliQuest when that information is saved to, uhm, the Bomex tables.
3:34:32 Nathan Jannasch (6894): And then it also resends all that information to 
3:34:35 Joel Frick (6124): RFQ as well. I have a question for you. Uh, sometimes there are errors. How frequently does IntelliQuest create those draft feedbacks?
3:34:54 Joel Frick (6124): Once every 24 hours. Okay. So the feedback loop from the RFQ system not necessarily immediate. There's going to be a time lag depending upon when they review that.
3:35:07 Joel Frick (6124): Correct. Okay. Yeah, because every once in a while we'll see some of those records with that match the original raw, you know, data.
3:35:15 Dave McLean: Okay. Yep. Cool. And you're pushing that data, that batch data into IntelliQuest API, or is it going via a 
3:35:25 Nathan Jannasch (6894): file drop of some type? Luke, correct me if I'm wrong, but I believe this was all done through APIs. I don't think we were dropping a file 
3:35:32 Joel Frick (6124): anywhere for this type of stuff. It It is API. Yes, 
3:35:36 Dave McLean: OK, cool. As a starting point, is there a, is there a data dictionary available for the service that's generating those API calls to send the data through just so that we can mine it for the properties that we need?
3:35:50 Dave McLean: The whole structure of that we have over here is, it's a set of custom objects that will be created in IntelliX, so while we kind of understand the conceptual fields that need to be there, the details of what can actually be sent and received would be, would be useful, uh, if 
3:36:05 Nathan Jannasch (6894): we can use that as a starting point. Yeah. Yeah, sorry, I just got this invite an hour ago, so yeah, I will talk, talk to my developers and 
3:36:14 Dave McLean: get that information for you. Perfect. Awesome and. 
3:36:22 Joel Frick (6124): Dave, 
3:36:22 Dave McLean: how soon do you need that? End of the week would be ideal, so I can, I can, uh, leverage it for next 
3:36:30 Nathan Jannasch (6894): week when I'm building documentation. I would say that would be questionable, but I'll, I'll see what we can do. 
3:36:39 Dave McLean: I'll go the other way then, like, once you, once you ask around if there's a more reasonable time frame, uh, that, uh, that you give back, just let us know what it is and we can, we can adapt where needed.
3:36:49 Dave McLean: Okay, Okay, cool. Uhm, I think using that, that structure that I mentioned, that schema, like, you know, again, there's a component here of us, of us, uhm, trying to map the data model of Bomex into Intellects without necessarily changing it, or if we are going to change it, then doing it in a very deliberate
3:37:09 Dave McLean: way. Uhm, so I think the, the guiding principles there is to be able to use the existing integration structure, and match that, but if, if there's something that ends up being needed, uh, additional properties, let's say, or, you know, a table that's not currently available through that, that API call
3:37:28 Dave McLean: , but, that is part of Bomex, and, and is something that we need, how much, how much flexibility is there to be able to change the service that, uh, that's able to generate the, the API calls?
3:37:39 Nathan Jannasch (6894): Uh, it, it's absolutely possible. Okay. Uhm. I, I, I think that would be a, once we can get you the detailed information on, on what we're sending across and you are able to examine that, uhm, I, I think that, uhm, being able to identify the significance of those changes would, would be a, a good thing
3:38:04 Nathan Jannasch (6894): for me so I can kind of, uh, build that into our upcoming development pipeline. Got it. 
3:38:11 Dave McLean: Okay. Yeah, that's great. And, and I would, I mean, in an ideal world, I'd almost like to use the existing local logic as a constraint, uh, and to say that, you know, hey, we will not ask for something that fits outside of that box.
3:38:23 Dave McLean: And, and yet that might be aspirational. It might be something that as we dig into a more, just to enable, enable what we're trying to do here, that, that might, we 
3:38:31 Nathan Jannasch (6894): might need to go a little further than that. And I do have one question on that, and Luke, jump in here, uh, because I remember this piece of the conversation from IntelliQuest, um, with the way that our Bomex information is related, we can have an ECS, that has many drawings, that, and each drawing 
3:38:51 Nathan Jannasch (6894): can have many parts. For IntelliQuest, we had to switch that kind of around, uh, and so we had to make some modifications to the, to the logic to be able to say, each ECS can have many parts, and each part can have many drawings.
3:39:07 Nathan Jannasch (6894): And, so, that might be a point that, from a logical perspective with SIA, it might be better to switch that back around if, uhm, you guys can, uhm, You can work with either of those, uh, types of relationships.
3:39:26 Nathan Jannasch (6894): Yep. 
3:39:27 Joel Frick (6124): Yeah, I think we wanted to basically match the, the way that Bomex presents the data. I'm not sure if it's the way it stores the data, but certainly the way it presents the data.
3:39:37 Dave McLean: Perfect. Yeah, on our end, we can, like, we can change the, the object model however we need to. It doesn't exist, so we're, we're going to build out that component of it as is.
3:39:52 Dave McLean: Okay. Okay, awesome, cool. Now, question for you in terms of updates to that service right now. So, if an ECS record gets published out to Intellects or any other downstream system with all of its constituent components here, if something in one of those constituent components gets updated, are you sending
3:40:12 Dave McLean: follow-on messages as well to update those, or is it a point in time in that the next time we ever hear anything about it would be because there's a 
3:40:19 Nathan Jannasch (6894): new ECS record? No, we're, my understanding is that if we are hitting a key, or a key piece of information, or a certain field is being updated, we don't, we don't do this for every single field in every single one of the tables, but if it is a key piece of information that IntelliQuest uses or SQA needed
3:40:41 Nathan Jannasch (6894): . Then we are firing off an update. 
3:40:45 Dave McLean: An update for the entire package, or for the individual records? Where I'm going with this is, like, let's say, uhm, within the ECS record, which contains one or more drawings, Let us know Let's say on day one, when, when the, uhm, person who's, who's processing the data in Bomex goes in and adds whatever
3:41:05 Dave McLean: part records are, are being referenced in the drawing. Uh, let's say that, you know, they add ten, ten parts, whatever part relationships, yadda, yadda, yadda.
3:41:13 Dave McLean: That big click. Done. And that triggers the, the process. You send it downstream. We receive an ECS record with the drawings, with the ten parts.
3:41:21 Dave McLean: The next day they go in and realize, you know what? I missed one. Uh, there's another part that's referenced in, in one of those drawings, so they add the eleventh one.
3:41:29 Dave McLean: Would you be sending the entire process? The entire payload of, of all of those objects again, or would you just send that one additional part or one modified part if it's, uh, some property of that part that's been changed?
3:41:40 Dave McLean: Yeah, the second one. 
3:41:41 Nathan Jannasch (6894): Just, just the individual part or, uh, new part or updated part. 
3:41:47 Dave McLean: OK, OK, so this is where, I mean, depending on how, how it's implemented now and how you'd want to implement it, this is where it can get kind of interesting on the Intellect side, because if we were talking about a new ECS record coming to Intellects, so just after that initial, at all.
3:42:02 Dave McLean: Data population that that happens in Bomex in order to add all the parts. Once they say go, there's a world where the service that you, the API call that you send us is a single batch request that sends.
3:42:18 Dave McLean: Sends the ECS record, plus a record of any drawings that are related to it, plus any parts that are related to it, and any part relationships like you sort of carry it all down and just send it as one.
3:42:30 Dave McLean: One request to the intellects API that embeds all of the individual operations with that. The alternative to that is that every row or every record in those tables has to be sent as a separate call, each with its own authentication, drop the payload, relate back to whatever it needs to.
3:42:50 Dave McLean: So like, imagine, imagine an ECS record, 3 drawings, 10 parts, uhm, you know, and that's before we get to any part relationships.
3:42:58 Dave McLean: You, there, we're now at 14 separate operations in order to build that ECS record. I call this our, just, it's a, it's a function of intellectual property.
3:43:06 Dave McLean: Not like using Alexa's API and how it's structured. This might inform how, how it is that you might want to approach any sort of implementation of this, okay?
3:43:16 Dave McLean: Okay, we can we can go through the weeds of it as we go. Like the other side is that if you do a batch for the initial creation.
3:43:23 Dave McLean: And then run a delta for any any given changes like you're just hitting the individual tables and records for modifications that might be more efficient, but it requires building separate calls for each each operation, so that might not be more efficient from a build up.
3:43:39 Dave McLean: Point of view. Yep, understood cool. 
3:43:44 Joel Frick (6124): Awesome Dave, my understanding. I'm going to use the wrong term, I'm sure, but but basically your documentation around the way that the APIs work in intellects.
3:43:55 Joel Frick (6124): It is pretty solid. Scott Bailey mentioned that, I think, in our last meeting. They've got, you've got pretty solid, yep, documentation for that.
3:44:05 Joel Frick (6124): Is that, uhm, available to us already? Yep. It is. Let 
3:44:14 Dave McLean: me answer two parts. So Intellects, the part of the documentation that he's referring to, is the sort of generic Intellects API documentation.
3:44:25 Dave McLean: So what that's going to describe is like, Thank you. Thank you. How it is that you send a message from point A to point B.
3:44:32 Dave McLean: What it doesn't contain is the specifics of this integration. The, like, what payloads, what object names, what does the actual data model look like for these objects.
3:44:42 Dave McLean: Right. In particular, because they don't exist, right? So it is very useful, right? And it's highly generalizable. The examples that are given tend to be health and safety focus.
3:44:54 Dave McLean: It's sending incidents through, but it's fundamentally still an event. And the payload structure is sort of looks the same. It's just that if Nathan wanted to sit down tomorrow to start writing code, it wouldn't be enough to go on.
3:45:08 Dave McLean: This is where we end up having to kind of tier it. So the starting point would be send the generic universal documentation.
3:45:14 Dave McLean: Nathan and his team track down the data dictionary for what's available, send it to us. We decide what properties we care about for the purpose of our Bomex integration, and we map those to the individual tables.
3:45:29 Dave McLean: And then I get either Victor, who's on the call here, with me, or somebody in my team to go build the objects and fields, and then create sample calls in an API tool called Postman, which is, it's like giving very detailed instructions on how exactly to 
3:45:46 Joel Frick (6124): consume those endpoints. Yep. So, Nate, would that high-level documentation be helpful for you this week? 
3:45:57 Nathan Jannasch (6894): Or no? Uh, I mean, probably not this week, no. But, uh, yeah. Uh, helpful overall, yes. 
3:46:06 Dave McLean: Yeah. Yeah, it's going to hand, in particular, like, beyond the structure of the API and the payload, uh, structure that it's looking for, authentication limits, uhm, things like that are all covered there.
3:46:17 Dave McLean: So, a couple of different methods of authentication. But we'd likely be looking at some sort of an API key, uhm, model.
3:46:24 Dave McLean: The one that I'd want to be really mindful of as we, we consider how to, how to build this. Intellex's API has a request limit of six requests per second.
3:46:36 Dave McLean: So, if you imagine, if, if we take the model where I'm sending through a new ECS record with multiple drawings and multiple parts, let's say in total, there's 50 different records that need to be created based on that operation.
3:46:54 Dave McLean: You'd have to make sure that, that if you're taking the model where you are, uhm, sending them one at a time and, and sending them in series, you would have to make sure that you are throttling that connection so that you're not exceeding six requests per second.
3:47:09 Dave McLean: It's still pretty fast, but like enterprise software can, can push it even faster if you, if you don't put any limiting on it.
3:47:15 Dave McLean: So it would just be a mindful of like, hey, there, there are pragmatic limits to how fast, how fast you can push that data through.
3:47:24 Dave McLean: OK, or at least how concurrent the request can be. That's probably a better, more accurate description. I understand. Whereas if you end up going with the batch model, uhm.
3:47:38 Dave McLean: It's been a while. What is it? Batch request. Batch services limits the maximum number of operations or change sets that can be included in the body of a batch request is 100.
3:47:54 Dave McLean: The max number of operations inside a change set. Is 1000, so depending on how you structure it. In theory, you could have up to 10,000 operations in one request with the batch with the batch method and up to 6 requests per second on that one, which would be probably far more than you'd ever need.
3:48:11 Dave McLean: I think it's. If you did take that route, you'd probably do one batch request per ECS that you're posting, and then that way it would just encapsulate everything that goes into the ECS record.
3:48:28 Dave McLean: The only other one that is a good one to know at this point, uhm, when you push updates to a record in Intellects.
3:48:37 Dave McLean: So let's say, uhm, I don't know, just for simplicity's sake, let's say on a given, uhm, ECS. There's a date field that gets updated by the user in Bonex, and that's going to come through as an update to the existing ECS record.
3:48:54 Dave McLean: Intellects's patch request to send that data, or that record update to Intellects, would require, the request has to reference the Intellects internal GUID of that record.
3:49:10 Dave McLean: So, you wouldn't be able to say, hey, this goes to Bonex, 1, 2, 3, 4, 5, or sorry, ECS record 1, 2, 3, 4, 5.
3:49:17 Dave McLean: You would have to actually send Intellects's GUID in that payload in order for it to properly update the record, which would mean that generally the most efficient way to do that is each time you receive a response back from Intellects, whenever you create a record, is to store a mapping of a mapping
3:49:33 Dave McLean: table somewhere in your integration layer that will basically tell you, hey, Intellects ECS record number whatever equates to Bomex ECS record 1, 2, 3, 4, 5.
3:49:46 Dave McLean: That way, every time you build the call, you can, you can, uhm, use Intellects as GUID for that record rather than having to do two separate calls, one to look it up using a filter, and then another to then actually perform the update.
3:50:05 Dave McLean: Cool, I will send through Intellects' generic API documentation, and then we'll take a run at more specific samples of calls once we kind of peruse through the data dictionary for what's available now, but, uhm, at the very least, the, the developer guide from Intellects will, will give you some of these
3:50:25 Dave McLean: parameters around authentication and how to use each of the different methods. is anything that we're shooting for here, does it seem out of the, out of the realm of possibility, or is it all, you know, relatively straightforward what we're looking for?
3:50:46 Dave McLean: Even if the implementation may not be straightforward, the, the, the ask itself is something that's compatible with 
3:50:50 Nathan Jannasch (6894): what you guys have done in the past on this. Yeah, yeah. Nothing's standing out as a 
3:50:55 Dave McLean: screaming red flag. Okay, cool. How about Partmaster? That's the other side of this, because some of the properties that we need to describe a part don't live in Bomex right now, they live in Partmaster.
3:51:07 Dave McLean: So the thought process was if we can get two, parallel data streams, one for Bomex, one for Partmaster coming through, and then use those respective part records to then join together and create an Intellects part number or an Intellects part record that, uh, depending on what property will draw the 
3:51:26 Dave McLean: data that, that, uhm, constructs that Intellects part record from either the Partmaster or Bomex version of it, uhm, based on what the authoritative source is for that one.
3:51:38 Dave McLean: Yeah. So, 
3:51:39 Nathan Jannasch (6894): a little bit, again, high-level description. Yeah. Uhm, we obviously store some part information in Bomex, but, uhm, you know, we have our Partmaster, which is the, you know, primary part information table.
3:51:53 Nathan Jannasch (6894): So, the, the, the big difference here is the timing of these records. Within Bomex, that information, uhm, is used within our procurement process.
3:52:07 Nathan Jannasch (6894): And so, the part information going into Bomex can be very early. Yeah. So, we're-we're talking about, you know, a. Some records that could live for a year or two within Bomex, uhm, you know, we're-we're not-we're not procuring these parts yet.
3:52:22 Nathan Jannasch (6894): We-we haven't bought these parts yet. We don't have some of the details on these parts. And so, uhm, we, that information comes from our-our parent company, and it makes its way through the quoting process, which can be months on its own, uhm, before we finally get that information back as-and saying
3:52:39 Nathan Jannasch (6894): that, yes, we're going to buy this part from this supplier at this price, and then that information is-is pushed to our pricing department.
3:52:46 Nathan Jannasch (6894): So, that is kind of the, you know, in a nutshell, the life cycle of a part within, uhm, that area.
3:52:55 Nathan Jannasch (6894): PartMaster is a bit different in that we get the-some separate Part information from our parent company that is fed into the PartMaster, you know, a few weeks to a month before we actually start receiving those parts, and so the timeline is a bit different here, and even each of these systems holds different
3:53:20 Nathan Jannasch (6894): pieces of information. And so, uhm, but we, we receive, you know, both parts from our parent company. So, uhm, the PartMaster information, we get a file like every 10 days and.
3:53:33 Nathan Jannasch (6894): And it will contain that part number, uhm, and when it's going to go into effect. And so, again, I'm kind of going off memory here, but if I'm remembering correctly, we, we piggyback on that ingestion event from SPS.
3:53:50 Nathan Jannasch (6894): BR to fire off information to IntelliQuest when that information is inserted into 
3:53:58 Dave McLean: our part master as well. Cool. I think I've got I think that structurally works on our end. I mean, the time delay.
3:54:08 Dave McLean: I'm sure where it will be a factor for us is also a factor for IntelliQuest, but I don't think that's our problem to solve in this moment.
3:54:16 Dave McLean: What we do know is that part of the value of having both systems be in particular having Bomex feed into Lex is that because we get that early information, it can launch, it can serve as the basis for the PPAP process and pilot part data and a few other, like, very early quality processes that take place
3:54:35 Dave McLean: before we are actually purchasing from that, that company. So I think that works. It's just that once the part master data starts coming through and all of its unique properties, as long as the part number is common between the two, then we can join them together and build our composite system.
3:54:52 Dave McLean: That part profile in Intellects based on, you know, both pieces of information, at least as best available that we have at any given point in time.
3:55:02 Dave McLean: Until that part master comes through, part master record comes through, it would just mean that all the fields that are, you know, meant to come from part master, they'll just be null on the Intellects side until then.
3:55:14 Dave McLean: Okay. 
3:55:15 Nathan Jannasch (6894): Hey, Luke, real quick, do you remember what the special rules involved with information in Bomex where we had pound-pound part numbers?
3:55:25 Joel Frick (6124): We went ahead, uh, yeah, vaguely, I think we went ahead and, well, the drawing numbers are always going to be that way for the, for the color-coded parts.
3:55:41 Joel Frick (6124): So, for your context, uh, Dave, you remember, we were looking at those, those part numbers, there's five numbers, then two letters, and then two numbers, and then a letter at the end.
3:55:52 Joel Frick (6124): Uh, and Nate's talking about those pound-pound parts, he's talking about. There's two additional letters that get tagged on to the end of that, and that indicates a color code, usually, of a, of a, uh, part number.
3:56:05 Joel Frick (6124): Uh, so, drawings, most drawings, I don't want to say all, everything is part most, unfortunately, usually, or whatever, but, it's not consistent with most, yeah, most, uh, drawings that contain parts with a color code are going to end with that pound pound, uh, end.
3:56:29 Joel Frick (6124): And we ran into trouble where we had some part numbers that matched the drawing in that way, so that the part number would say pound pound instead of, like, B-H, or something like that, and so Nate, Nate, what I remember us doing in order to basically say, okay, we're not going to, it was kind of a cop
3:56:52 Joel Frick (6124): out, we're not going to deal with this, just go ahead and add the pound pound part number in as a part number, and then we just won't use it.
3:56:59 Joel Frick (6124): So, uh, that's basically what we ended up doing in B-H. in, in Telequest site, I believe, because we couldn't find a good way to code around it, so we just said, add all of the part numbers, including the pound pound part numbers in.
3:57:15 Joel Frick (6124): I believe the group reason why they allow the pound pound part numbers to survive is for service, where the dealer themselves will paint it.
3:57:24 Joel Frick (6124): Oh, they'll receive a, you know, an unpainted part that's not in color. I think that's the reason why they allow those 
3:57:30 Dave McLean: part numbers to exist. So, in this scenario, if we receive, if I'm hearing this correctly, we might have a part number 1, 2, 3, 4, 5 for the sake of simplicity, but you might also have another part number come through 1, 2, 3, 4, 5, past pound, pound, that in the real world, those are, those are referring
3:57:54 Dave McLean: to the same part, but they basically exist as two separate part numbers. 
3:57:59 Joel Frick (6124): Well, so, Luke mentioned the two digit part number, so if, if it has the pound, pound on the drum. number, we will be buying parts with that 11th and 12th digit populated.
3:58:15 Joel Frick (6124): They won't be pound, pound, so we will be buying the individual colors, and it is not uncommon, in fact, it's very common Thank much.
3:58:22 Joel Frick (6124): You're welcome. That, uh, some parts will be added in new colors when we have a new model. So, if it's if it's a part that we receive painted from a supplier, and we're adding a new color, those are reasons why we would need a new PPAP because.
3:58:38 Joel Frick (6124): Those new colors are new to that model. So, it is actually part of, it is part of the part number, uh, that 11th and 12th digit.
3:58:47 Joel Frick (6124): If, if there's a pound-pound on the drawing, we will receive part numbers with the 11th and 12th digit populated by instead of a pound-pound for what we receive.
3:58:57 Joel Frick (6124): And if it's not painted, if it's not painted, uh, or the color is defined the same or within the part number, then the 
3:59:10 Dave McLean: pound-pound won't work. It won't exist. OK. Another 
3:59:15 Joel Frick (6124): question, Luke said, wouldn't they all start changing the format? The two letters are not always going to be 6 and 7, moving forward.
3:59:25 Joel Frick (6124): I dropped that out with NB8. That's awesome. Yes. They're changing it, right? That's since they came up with the 6-7.
3:59:32 Joel Frick (6124): That's what it 
3:59:34 Dave McLean: I was really trying to learn. She's got kids. 6-7. Did they do that in Canada too? 
3:59:46 Joel Frick (6124): They do, they do. They do it in Mexico. I see it in the airport in Mexico. They're saying, what's going on?
3:59:54 Joel Frick (6124): There's your example. Okay. Steering wheel is a great example for all this stuff. It's It's colored. That's right. It's got overlapping ECSs from model to model.
4:00:10 Joel Frick (6124): Yup. Okay. Also simultaneous running chains with model chains. How do they handle PPAP for select parts, like main bearing on the engine?
4:00:21 Joel Frick (6124): Because that'll be one drawing, usually, that has all the different thicknesses. On one, do they do PPAP for each select part?
4:00:30 Joel Frick (6124): It'll be by drawing. So if they're on the same drawing, they've 
4:00:33 Dave McLean: got the same PPAP. So this pound-pound thing, just so I understand how this ultimately becomes a problem for us. So if we receive a part number that has the pound-pound suffix in the end, based on the drawing that it came from, so the, like, basically the cue that this is a, this is a color-coded item
4:00:56 Dave McLean: , and therefore the drawing is color-agnostic, but when you actually get the part, it's going to reference a color. So what happens What this tells us is that when we go and request, for pilot part data for example, if we go and request the supplier to send us X number of units of the part, we're probably
4:01:15 Dave McLean: going to ask them to send us X number of units of the part, regardless of color. When they give it to us, though, they're going to give us something that doesn't have pound pound at the end, they're going to give us something with the actual color code corresponding 
4:01:28 Joel Frick (6124): with the color they sent. Yes. But, but, you know, going back to the state, the statement about we'll add new colors for a model that is very much true that those new part numbers with those new color suffixes.
4:01:48 Joel Frick (6124): Yeah, are the specific parts we're going to be reviewing for pilot. part data? 
4:01:53 Dave McLean: Is there a taxonomy that defines the structure of a part 
4:01:57 Joel Frick (6124): number all the way? I wish there was a consistent one. Usually, but usually, yes, usually. Okay, there's that word. 
4:02:08 Dave McLean: I was gonna say, like, if it's consistently built the right way, then, you know, if we receive it with those two extra characters, then we can always, I mean, we store it, but, like, we can always drop it off for the context under which we don't need it.
4:02:24 Dave McLean: And then add it back in for when we do need it, so that, you know, for example, if, uh, if the part was originally created with pound-pound, but then six months later you receive a new ECS record because you're adding a new color of that thing, that references the actual color of the color code, that
4:02:42 Dave McLean: model would actually let you join it to the part master in a way that, like, sort of respects the fact that this is just a variation of the part.
4:02:53 Dave McLean: But I also don't necessarily want to try to solve that problem in Intel. Because to me, that's, uh, that's more of an enterprise-wide 
4:03:01 Joel Frick (6124): problem to solve. Pomex will feed that to you. I think that problem is already addressed in there. Okay. Okay. 
4:03:09 Dave McLean: So we just take it as it comes to us and deal with that. So, uh, 
4:03:14 Joel Frick (6124): TG8, Doortrend, the color exists at the drawing level. It is not bound-to-bound.
4:03:29 Joel Frick (6124): That's the only instance I can think of. Or it's like a different part number instead of a color code. Yeah, yeah.
4:03:35 Joel Frick (6124): And, um, again, why there's no consistency, I don't know. But when I actually started before TG8, I got customized. So that's why I'm familiar with it.
4:03:47 Joel Frick (6124): Yeah, just told me it's fun. I'm going to have a white 
4:03:54 Dave McLean: manager. OK, as far as far as Nate's time, Nathan's time. I'm here, sorry, didn't mean to call you Nathan. It's my son's name is also Nathan, uhm, we, uhm, I think we've got what we need for this moment here.
4:04:11 Dave McLean: You know, the next level of detail that we need is quite a bit more detailed. It's sort of individual property level and individual information.
4:04:17 Dave McLean: Integration methods, so I think we're better served by each, you know, going away and getting our respective action items done.
4:04:25 Dave McLean: So I'll send you the developer guide just so that you have it for when you're ready to take a look at it.
4:04:30 Dave McLean: And once you once you've tracked down the data dictionary and documentation, documentation for the existing services, ideally for both Bomex and Partmaster, flip it over and we can.
4:04:40 Dave McLean: We can start to build our data model off of that so that it matches as closely as we can. OK, sounds good.
4:04:47 Dave McLean: Cool. Awesome. I think that is. I think that's all for now, uhm. Yeah, alright, 
4:04:56 Nathan Jannasch (6894): OK, sounds good. I will drop off then and I will go start asking some questions. Thank you, Sir. Appreciate it.
4:05:02 Nathan Jannasch (6894): Thank you. 
4:05:04 Dave McLean: OK, back to where we were just before we broke for lunch. So recap, we were defining some of the different concepts for the pilot part program that we would trigger, uhm, trigger when a new PPAP comes through.
4:05:21 Dave McLean: And again, that's going to be a user action to decide to trigger a new pilot part program. If they do, they're going to select the parts to be inspected that are aligning with the drawing that they're working off of.
4:05:32 Dave McLean: They're going to define an inspection checklist, uh, and version that checklist. Once they've done that, once they've defined what that looks like.
4:05:40 Dave McLean: It sounded like the next piece of it here is how we actually get those parts for inspection. It's how do we?
4:05:49 Dave McLean: How do we get them in our head? It sounded like it was really more of a request basis. So once you set it up.
4:05:53 Dave McLean: It's a, hey, I need to set up a form to say based on the task milestones that we're working on through the development phase.
4:06:01 Dave McLean: If I'm the engineer that's looking at this one, I need to fill out a request task to the supplier. It says, hey, can you send me X number of units or something of samples or whatever of whatever part number and on the flip side when they receive that request, you know, presumably receiving that via intellects
4:06:21 Dave McLean: , they would then fulfill that request in the real world and then log what it is that they sent. So, you know, if you ask them for 50 units of something, there's a world where maybe they can only send you 10 initially, and then it's potentially multiple drops before they close it out, but in this case
4:06:37 Dave McLean: , if they're shipping them, then they're basically saying how many of them have they shipped, through what mechanism have they shipped, and ideally, like, what's the, ah, expected delivery date for them, so that, so that on your end, you're able to keep an eye out for them.
4:06:51 Dave McLean: Something like that makes sense? In a general 
4:06:54 Joel Frick (6124): sense, uhm, the suppliers will receive the request, from, ah, procurement, they'll, they'll be issued a PO, we need these parts by this date.
4:07:05 Joel Frick (6124): So, on the quality side, based upon the master schedule, we will set up those event, ah, inspections. for the suppliers to upload their data, and for our inspection team to upload their inspection results.
4:07:22 Joel Frick (6124): So, we don't have visibility of the PO, so we don't know the exact date, but we do know the approximate date based on the master schedule.
4:07:30 Joel Frick (6124): So, we will want to make sure that we have those events defined on when and where, uh, we want the data uploaded, as well as the inspection 
4:07:43 Dave McLean: results uploaded. it. Talk to me more about these events. What do these look like? Is this a templated list of events where, you know, for every part, it's always the same five steps or whatever it is, and you're just filling out the dates?
4:07:59 Dave McLean: Or is it, is it really dynamic? It's actually very dynamic, and it's 
4:08:04 Joel Frick (6124): currently, currently what one would call a tornado of dynamic activity, as we are throwing everything in the air and redefining our events, moving forward super development.
4:08:21 Joel Frick (6124): We used to have a set. Yes, we used to have a set number of events. Just recently it's been compressed and renamed and converted.
4:08:28 Joel Frick (6124): So we will generally know at the start of a model, once the master schedule is released. What events we are going to have.
4:08:37 Joel Frick (6124): And it generally applies to all parts across that model. Uhm, loosely speaking. And it will vary slightly depending upon whether it's an engine part or a body part.
4:08:50 Joel Frick (6124): But those usually tie into a trim build event as well. There are precursors to it. So, there are build events that are fixed by our master schedule and we, as the engineer, should know that when we.
4:09:06 Joel Frick (6124): Populate our 
4:09:08 Dave McLean: inspection instructions. And build events are are actually broader than just pilot part program, right? The build events will extend all the way through the entire PPAP, or is it?
4:09:19 Dave McLean: Is it bound to just the pilot part program? It 
4:09:24 Joel Frick (6124): is, it will extend through the PPAP, so we will have multiple build events where we build batches of cars and we will receive parts for those cars.
4:09:34 Joel Frick (6124): And we want to inspect those parts before they are built into cars. Generally, three to four, depending upon the model, will occur before the final PPAP submission, and then the culminating event is the PPAP samples themselves, which look like at least the 
4:09:55 Dave McLean: PPAP approval, so. Will the build, will the build events have been defined before you start the pilot program, pilot part program?
4:10:05 Joel Frick (6124): Yes, they should be defined by 
4:10:07 Dave McLean: the master schedule already. Okay. Okay, so if the build events are a child object of the PPAP, then in this case, so you're not really requesting through Intellects the pilot parts that are going to be tested from the supplier because they gotta, they actually have to, like, you actually have to purchase
4:10:34 Dave McLean: them, so that's going to go through procurement. Yeah, procurement does the actual request. Yeah, once they, once the purchase has been done, and they send it through, who is it that's receiving those, 
4:10:46 Joel Frick (6124): those pilot parts? Officially, first receipt is through our materials department, but then they're immediately turned over to the group that will be performing these pilot inspection.
4:11:00 Joel Frick (6124): So that is our 
4:11:02 Dave McLean: receiving inspection team. Got it. So, okay, we'll, we'll talk about it in a sec, how we connect this to the real world and the analytics side of this.
4:11:10 Dave McLean: But in this world, if procurement works with the supplier to buy a bunch of parts for the pilot part program, then in Intellects, is it that we would expect the supplier to then come in and fill out a quick form where they're saying, hey, we, we sent you this many, sent you this many parts.
4:11:29 Dave McLean: Of this part number in relation to whatever build event 
4:11:33 Joel Frick (6124): that's open. Yes, so using the sample I pulled up earlier, I'm going to show it again. Uhm, so.
4:11:50 Joel Frick (6124): Yes, thank you. This line trial, which is our upcoming event here for the CD6 model. When the supplier ships those parts, on the procurement side, they show the ASN that says, alright, here's your shipping notice, these parts are coming.
4:12:09 Joel Frick (6124): And on the quality side, they upload the data for those parts. That we expect to see when we perform our quality inspection.
4:12:19 Joel Frick (6124): So their data that ties to these parts gets uploaded when they ship those parts to us. And it is tied to the event itself.
4:12:27 Joel Frick (6124): So we aren't at production trial yet. But once we get to, looks like they're ready to ship production trial 2.
4:12:36 Joel Frick (6124): But we don't have RK parts yet. There we go. No RK yet. So they've shipped line trial parts. And says they've shipped production trial parts.
4:12:46 Joel Frick (6124): Those are the same data. I don't believe that. He must have uploaded it to books. And yes, it requires a lot of child care to, uh, to get data uploaded 
4:13:01 Dave McLean: and to the correct location. And the part, like, in terms of not, not the inspection results or anything, but at least the piece that that the supplier is telling you about when they say, you know, hey, we sent you these parts when they're uploading that file.
4:13:18 Dave McLean: It's, again, it's the part number, it's the number of them, and 
4:13:23 Joel Frick (6124): the date that it was sent. As we are currently operating, uhm, as we are currently operating, they don't send an individual report by part number.
4:13:42 Joel Frick (6124): They just, the report is an aggregate, but if that's, if that's the way we want to move forward by part number, then we can do that.
4:13:50 Joel Frick (6124): But it is an aggregate of the parts that were in that shipment request. So it will be the measurement results, uhm, testing results, and then there's typically a cover sheet that goes with it as well.
4:14:06 Joel Frick (6124): That says, okay, these are the parts I'm shipping. This is how many parts I shipped. So basically telling us, yes, here's the parts I shipped to you.
4:14:16 Joel Frick (6124): Please confirm that my parts meet your requirements for this event. 
4:14:21 Dave McLean: Got it. Okay, so. Uh, goodness questions. We got questions. So as far as being able to let them do more than one in one shot, we can.
4:14:30 Dave McLean: We can look at what that what that front end looks like, but it's got to resolve to part number specific records in there.
4:14:38 Dave McLean: So. You've defined your checklist. Is that checklist what you're hoping for is that when they upload this pilot part data to say, hey, we shipped you these parts that they're all they've done the inspection themself and they're uploading the, uh, they're uploading the results along with that.
4:14:55 Dave McLean: Or is the inspection something that you're doing when you receive the parts to verify whatever 
4:15:00 Joel Frick (6124): they came up with? They're different, so what we want the suppliers to do is a full dimensional layout as well as a report.
4:15:11 Joel Frick (6124): On all of the testing that is required by the drawing, the inspections that we ask from our receiving inspection associates is specific to, characteristics that we think will be a problem.
4:15:32 Joel Frick (6124): Characteristics that define that part for the model, uhm, or change content related to an ECS that is implemented as well.
4:15:43 Joel Frick (6124): So 
4:15:45 Dave McLean: they are definitely different. OK, so. The piece like beyond the hey, we sent you these parts. This report that you're looking for this summary of data.
4:15:57 Dave McLean: To me, this is an attachment, 
4:15:59 Joel Frick (6124): right? The the. Like, yes, it is an attachment. Basically, alright, here's the parts I shipped. I performed my measurements. Here's my test results.
4:16:09 Joel Frick (6124): We don't necessarily do anything with those, but we want the evidence that they have measured those parts. And confirmed that they were good to ship to us by 
4:16:19 Dave McLean: their, by the drawing. Yep, OK, so what we can do. If it makes it easier on the supplier, I think, is we can get it so that what they would do is they would open a form.
4:16:31 Dave McLean: A form called Pilot Part Shipment, for lack of a better term in this moment. In that, they would, uh, supplier fills out shipment date, and then in a grid, fills out the part level detail of what they shipped.
4:16:57 Dave McLean: Uh, each shipment can contain one, one or more. Part numbers. When they go through to do it and for each part number.
4:17:14 Dave McLean: They have to. Identify the number of items. Shipped and they have to upload the what would you call that report that you need from them?
4:17:28 Dave McLean: We just call it our pilot part 
4:17:30 Joel Frick (6124): data packet. 
4:17:32 Dave McLean: Data packet, yeah. Yeah. Would this typically be multiple file attachments or is it all bound up into one per part?
4:17:41 Dave McLean: Typically multiple files. 
4:17:52 Joel Frick (6124): It'll be a common, uh, submission cover sheet, a common test result, and then individual measurement sheets.
4:18:05 Joel Frick (6124): They'll, they'll typically, by the requirements, have multiple sheets in the manual. They're supposed to submit measurement results separately by part number, though they don't always do that.
4:18:15 Joel Frick (6124): They'll usually combine them, but officially it's supposed to be multiple 
4:18:19 Dave McLean: measurement sheets. If I just give them You one file attachment area per part number for them to upload whatever documentation they need to.
4:18:30 Dave McLean: Is that enough, or do you need to go more specific in detail by then? No, I think that's enough. OK.
4:18:36 Dave McLean: OK. So then in the supplier's view, you know, again, they're, they're not necessarily, They're necessarily aware of all of this at this juncture.
4:18:43 Dave McLean: What they would see is they're working with procurement. Procurement said, hey, can you send us, you know, 10 of these, 50 of these, 100 of these, whatever it is for the pilot part program.
4:18:51 Dave McLean: They complete the purchase. Their next step is they go log into Intellects and they create a new pilot part shipment.
4:18:57 Dave McLean: They fill out the date that they're doing it, who's doing it on their end, like who's actually working that record in that moment, and then when they save the record to continue, they start adding in what I'm calling a pilot part data log, which is one row per part number.
4:19:13 Dave McLean: That is part of that shipment, and the pilot part shipment, would they know what build event that 
4:19:21 Joel Frick (6124): that shipment is in relation to? Yes, the order will say specifically which build event those parts are for. 
4:19:27 Dave McLean: OK, so they would. But it could be a different build event, because they send, they're sending multiple parts. It could be a different build 
4:19:40 Joel Frick (6124): event per part. Typically, uhm, Bill. Ship by build event. Multiple part numbers by build event. Each build event usually has a collection of purchase orders associated with it.
4:19:58 Dave McLean: Got it. Typically, as in it happens often enough that. Should they happen to be putting parts that align with different build events, like for different PPAPs, for example, into one box to ship it off to you or one one physical FedEx shipment?
4:20:13 Dave McLean: Yes. Could we could we make it so that the constraint is that? In Intellex anyway, it's one pilot part shipment record per build event, and if they happen to be doing this in the real world where they're putting them together in one shipment for multiple PPAPs, that they just have to create more than
4:20:29 Dave McLean: one record in Intellex. Yes, 
4:20:32 Joel Frick (6124): we definitely want the records to be separate by PPAP. 
4:20:37 Dave McLean: OK, so the user goes in, they specify, hey, I'm doing a pilot part shipment for build event XYZ, which is part of PPAP ABC, which is related to, you know, blah, blah, blah.
4:20:49 Dave McLean: We can backtrack that relationship as far as we need to. They put the data in, they put their name in, or we auto-stamp their name, they hit continue in order to start adding in parts, and each part, because this relates to a build event, the parts that they're able to select from are specific to the
4:21:08 Dave McLean: parts that you had identified to be inspected as part of this pilot event, uh, pilot part program. Yes. Right, that way they're not sending stuff that's wholly irrelevant for this, it's very narrow focus with respect to this data.
4:21:20 Dave McLean: Uhm, as they, As they do so, they entity, they enter the quantity that they shipped, they, uhm, upload the, uh, pilot part data packet for each one of those parts that goes along with it.
4:21:33 Dave McLean: Anything else that you're looking for from them at this juncture before they hit complete? Um, a lot of times it is 
4:21:40 Joel Frick (6124): very helpful with pilot parts, and especially with PPAP samples, to have a tracking number associated with that, uh, when they're shipping it to us.
4:21:50 Joel Frick (6124): So, yeah, when we receive it, we know exactly which PPAP it's associated with. So, some sort of a tracking number.
4:22:03 Joel Frick (6124): We don't like them to put this with mass production shipments, because then they go up to the floor and get lost.
4:22:09 Joel Frick (6124): So, we always put a We always request that they have a special shipment tracking for these pilot parts. So, that's a very useful field that we use currently.
4:22:20 Joel Frick (6124): Cool. Okay, cool. 
4:22:23 Dave McLean: They enter. I'm going to put it as an optional one for the moment, just in case, for whatever reason, they don't, or do you want to, do you feel strongly enough about that to make it mandatory?
4:22:34 Dave McLean: Tracking? Yes, make it mandatory. Done. User enters tracking number as well. They then click Submit Pilot Part Shipment. Record. That routes it off to, presumably, it goes to the engineer who's running the PPAP, and running, or running the pilot part program?
4:22:51 Dave McLean: To, to the receiving team for inspection. Receiving team for inspection, which would have been identified up here at the pilot.
4:22:59 Dave McLean: Part program? Yes. Okay, so, uh, submit, uhm, inspection team from the pilot, and that's typically one or more people?
4:23:13 Joel Frick (6124): Uh, yeah. It gets assigned among them based upon 
4:23:19 Dave McLean: workload as it's received. Is it generally, uh, for any given pilot part program? So, like, any given drawing when you're running pilot part, uh, for it?
4:23:31 Dave McLean: Is it one person at a time for that pilot part program for one particular inspection? 
4:23:37 Joel Frick (6124): Yes, it usually be. 1 person that does that. Drawing number for that event, so all of the part numbers associated with that drawing, typically.
4:23:48 Joel Frick (6124): OK. Just a second here. Shouldn't have it.
4:24:00 Joel Frick (6124): It's something that we'll get into this later. The RMA. But, like, basically what service to expect it in. In some cases, you'll have a headliner and they're not going to ship it by, so you can guess.
4:24:14 Joel Frick (6124): They're still going to put it on a trailer, so your tracking number is going to be a trailer. So, would it be helpful for your team?
4:24:24 Joel Frick (6124): I don't know. To say that you're doing, you know, a parcel shipment, you carry a milk round or whatever. We have a drop down with the selection.
4:24:37 Joel Frick (6124): FedEx, UPS, hand carry, and milk round, the typical ways. Same for RMA. So, I kind of wonder if that shipment type might be a good drop down for pilot parts or not.
4:24:51 Joel Frick (6124): I mean it's helpful. Yeah. Did you catch that, David? 
4:24:57 Dave McLean: No, I'm sorry, I didn't. 
4:24:59 Joel Frick (6124): So, Luke was saying that not only a tracking number, but a shipment method was a drop down. Bye-bye. Because we typically, when it's not a mass production shipment, we typically have a set number of ways that we will receive that.
4:25:18 Joel Frick (6124): Very rarely will they put it on a production run, but sometimes they have to. To IPs being a good example, IPRAT cannot ship, well, we do receive IPs sometimes, but for pilot events, we don't.
4:25:34 Joel Frick (6124): Only for PPAP samples do we receive them individually. So, yeah, I think shipment method is what as well as tracking number.
4:25:42 Joel Frick (6124): Shipment method being like FedEx, Purolator, like different carriers? Yep, yep, or hand carry, or milk run, such and such, yep.
4:25:51 Dave McLean: Cool. Yeah, we can put in all the options later on, so that's okay. Uhm, cool. Okay, so then they route it back.
4:26:00 Dave McLean: Our inspector for the pilot part program that this is all related to gets a notification. Hey, such and such supplier just filled out a pilot part shipment in relation to, you know, Thank you.
4:26:12 Dave McLean: This pilot part program for this build event would be kind of the structure of the notification that they would get.
4:26:19 Dave McLean: Presumably at this point, they're now waiting for product to come, because it might take a few days somehow in the real world through the ether.
4:26:28 Dave McLean: That product gets to the inspector, right? So it gets shipped with instructions that, you know, hey, attention Dave McLean. And we get that part.
4:26:37 Dave McLean: Dave realizes, oh, okay, this is the, these are the parts that relate to pilot part shipment. So in this case, I think that shipment record, that shipment record probably stays open until the person has received it.
4:26:55 Dave McLean: Yes. Okay. So it's a task on their task list that they need to be able to say, you know, yes, I have received this, or parts have been received and all parts present, or something like that.
4:27:07 Dave McLean: Like, getting a box doesn't necessarily mean that you got everything that you're supposed to get for it, right? Right. Okay.
4:27:15 Dave McLean: Pilot. Program receives task and e-mail in the awaiting receipt of.
4:27:32 Dave McLean: shipment stage. Once received, they mark the shipment as received and close the shipment Now, at this stage, they've now got a bunch of parts.
4:27:52 Dave McLean: Is it that they're inspecting, they're running their pilot part inspection checklist against each part that they've 
4:27:58 Joel Frick (6124): received in this moment? Yes, that is when they begin their inspection. Typically, our pilot events are small enough where we want them all inspected, but I don't think they have any events now that are that big.
4:28:20 Joel Frick (6124): I think pre-SOP is considered last production. Yeah, it's last production, so. Yeah, I mean, typically we want all the parts inspected that were in that.
4:28:32 Joel Frick (6124): Not just the sampling. That's our typical request. 
4:28:36 Dave McLean: Do we actually want to link that together? So, like, if the supplier said in their pilot part data log, if they said 10 of part XYZ, do we actually want to leave the pilot part shipment open until Have a great Not just that it's been received, but that 10 inspections against that part have been completed
4:29:02 Dave McLean: ? I think. Or is that a little overkill? 
4:29:05 Joel Frick (6124): I think that might be a little overkill, but at the same time I think they had to reject an inspection because I wanted one of one part number and one of another and they shipped two of the one part number and then closed it out.
4:29:23 Joel Frick (6124): I'm like, well, I don't know. I needed that second part number. But I do think it might be overkill at that point because I think we can cover it through the inspection result if it doesn't match what it was supposed to be.
4:29:38 Joel Frick (6124): Let me 
4:29:38 Dave McLean: put it. Let me put it a different way. Maybe let's not based on the shipment. Maybe it's based on the build event.
4:29:44 Dave McLean: Is there a threshold of completion for any given build event worth of inspection? So if if this pilot part program relates to an X, is there, is there something that tells the inspector when they have inspected enough?
4:30:02 Joel Frick (6124): No. No. No, typically we'll want all the parts inspected. 
4:30:08 Dave McLean: Okay. Alright. So then, in that case, the, the only other one here is when they, when the inspector marks the shipment as received, are they typically running, like, going right from that moment into doing the inspections, or is it, hey, we're going to quickly mark it as received?
4:30:29 Dave McLean: So we can close the loop on that, they're going to sit on a shelf for a day or two until we get a chance to run the inspections, and, and so we're coming back to it, typically, 
4:30:36 Joel Frick (6124): when we do our inspection. Well, there's real world, and then there's want-to-be. So, want-to-be. Yeah. Want-to-be is, The team leader acknowledges receipt of the parts, puts them on a shelf, and then, based upon workload, assigns an inspector.
4:30:57 Joel Frick (6124): The reality is, the team leader, doesn't acknowledge receipt until he assigns it. He's going to retire soon. So we may be able to return to the want-to-be, but I don't know.
4:31:15 Joel Frick (6124): Honestly, I wonder, We'll have to be able to have that acknowledgement that the parts were received, because that is an important step along the way, because in the past we've lost parts because we didn't acknowledge they were here.
4:31:28 Joel Frick (6124): Yeah. Jesse's looking at, because he used to work down in there. He knows exactly what I'm talking about. Hey Jesse, go grab some parts from the floor and inspect them.
4:31:43 Joel Frick (6124): The ones we received two weeks ago that nobody acknowledged. 
4:31:54 Dave McLean: The catch with having it so that the assignment of the inspection happens at the time that the shipment is being processed as received, is that it means that that's probably the only way that it happens.
4:32:05 Dave McLean: So when we get into these other scenarios where the person is sort of doing it all in one shot, it just really means that they have to have to go through that process.
4:32:14 Dave McLean: This would be an appropriate way to do it if you really wanted to force the issue and move towards that model.
4:32:20 Dave McLean: But if it's not, if it's possible that, like, the, I guess the assign a shipment part really has to happen.
4:32:30 Dave McLean: That's the, that's sort of the interesting one, because if the team lead who is marking them received isn't necessarily the one who's going to do the inspection.
4:32:44 Joel Frick (6124): And in the current case, that's, uh, 100%. He is the one responsible for marking them received, but he himself does not do it.
4:32:54 Joel Frick (6124): He any of the inspections. He assigns 
4:32:55 Dave McLean: all the inspections. And would he assign each part number, no matter how many parts there are, to a person? Or, like, if there were 50 parts of a given, like 50 individual parts, or 50 individual units of a given part number, would he split that into two different groups 
4:33:15 Joel Frick (6124): and assign each group separately? It would be extremely rare to break them up. It's usually all assigned to one person per event.
4:33:23 Dave McLean: Okay. So if we go with the Thank you. It's rare enough that in the odd chance that happens for for real world, it's really one like in the real world is one person or it's two people doing it, but they're entering the data against the one person's task and intellects.
4:33:39 Dave McLean: Would that be alright? Yes, that would be correct. Okay. So then in this world, Ben, user click submit pile of inspection team.
4:33:56 Dave McLean: Inspection team leader from the. Pilot part program receives the task in the email in the awaiting receive shipment stage. Once received, they mark the shipment is received.
4:34:07 Dave McLean: Then assign each part. To an inspector before When they assign it to the inspector, there is a set number of days that the inspector has to finish the inspections, or is it something that's variable, where we, It's variable.
4:34:36 Dave McLean: It's variable. So when I'm assigning the inspector, I'm also 
4:34:38 Joel Frick (6124): assigning a target date. Yes, and ideally, you want it done within a day or two, but depending upon the part, it could take.
4:34:46 Joel Frick (6124): Or if our associates get pulled out to 
4:34:49 Dave McLean: an SQA campaign. Okay, so, That part down a lot. Which means, All right, let's do this.
4:35:18 Dave McLean: Pilot Part Inspection So Our user So we'll do that, and we'll do this.
4:35:47 Dave McLean: Okay, one more callout. Once the pilot part shipment has been marked complete, each pilot part datalog will trigger a notification and task to the assigned inspector.
4:36:17 Dave McLean: So that notification and task only activate once the pilot parent shipment has been marked as complete. Hey, we've received everything, we're good to go.
4:36:28 Dave McLean: When that inspection, or when that notification goes out, that's going to instruct the inspector, hey, you've been assigned to do the pilot part inspection for part number whatever under pilot part program, whatever, referencing whatever drawing it is.
4:36:41 Dave McLean: That's also going to tell them, that's also going to link through to what pilot part inspection checklist they need to do.
4:36:48 Dave McLean: From that task, they're going to open the task up and click an, you know, an add entry button. Or, or, you know, start inspection for the first part that they're going to do.
4:36:58 Dave McLean: Now, when you're doing the inspections, are you doing those inspections on multiple parts at a time? Or is it, I take one part, put it on the workbench in front of me, do all my inspection metrics, finish it, finish that one, put it off to the side, go grab another one?
4:37:14 Joel Frick (6124): What did you normally do, Jesse? Do them all and then upload? What was the question again? Measure one. Measure one, upload result.
4:37:22 Joel Frick (6124): Measure two, upload result. Or would you measure two, measure all, and then measure all? 
4:37:29 Dave McLean: And you, like, typically measure all for one specific attribute first, record the results, and then go back and do the next attribute for all.
4:37:37 Dave McLean: What I'm thinking of is, uh, the first time I ever implemented shipping, receiving, inspecting, and doing for a big client was Starbucks, and.
4:37:49 Dave McLean: You're frozen, Dan, if 
4:37:50 Joel Frick (6124): you can hear us. Save, we lost you. Oh, sorry. 
4:37:54 Dave McLean: Oh, there you're back. You're kind of coming back, yeah. Sorry, guys. Probably dropped at Starbucks. They're listening to us. They would receive a shipment of cake pops or something and have 30 of them on a workbench in front of them with 5 attributes they'd have to measure.
4:38:14 Dave McLean: You know, length, height, uhm, the height of the stick, for example, as to the size of the actual cake pop itself, and so on and so on.
4:38:22 Dave McLean: What they would do is, with a pair of calipers, they'd go through and measure the full height from bottom of the stick to the top of the pop for all 30 of them, record the results, then come back and do the diameter, all 30 of them, record the results, and so on.
4:38:38 Dave McLean: And so, even though each inspection is one product to one inspection, but it has five attributes to it, they're, they're sort of doing them one by one attribute of a time across all of the 
4:38:48 Joel Frick (6124): products that they're working off of. I would say generally it would be each attribute confirmed on all, and then each attribute confirmed on all.
4:38:56 Joel Frick (6124): Okay. Well, are they doing it digitally now, in the lab now? Because whenever I was doing it, it was, I could do that scenario that you just explained, like, same feature on all five, and then write it down or whatever.
4:39:10 Joel Frick (6124): Yeah. Instead of it being upload. Right? Yeah. That's why I'm asking, are they doing it? Nothing is doing it right now.
4:39:17 Joel Frick (6124): It's all, it's still an upload. It's still an upload in Excel. Okay. Well, it's a live upload now, so now they have access to a live Excel sheet, so they're able to do it each characteristic at a time.
4:39:30 Joel Frick (6124): So, look, here's the thing I want checked on these parts, and then they put the result. Here's the thing I want checked on these parts.
4:39:36 Joel Frick (6124): Here's the result. So, they're doing it each attribute at a time. But would there be some bigger parts that you think was just the size of them that you would try to do that with as you measure it all?
4:39:47 Joel Frick (6124): I'd say it depends on the part and the person. Very dependent upon what on the part, but like a harness, you probably want to lay out one at a time.
4:39:55 Joel Frick (6124): And measure, attribute one, record attribute two, so on and so on on that one part. But if it was five cake pops, it'd be a lot easier just to, Oh, yeah.
4:40:06 Dave McLean: ,what to do. Yeah, this, this client actually had a, they had calipers that connected to their PC, and the software would run that every time they click the button on the calipers, it would record the result and then tab twice 
4:40:21 Joel Frick (6124): to get to the next field. So, Dave, Dave, can I ask what's the question behind the question? 
4:40:29 Dave McLean: Yeah, great, great question, uhm, from a user interface point of view, if this was something where they're doing one whole part at a time.
4:40:39 Dave McLean: So, I'm going to put a single part down, and I'm going to run all of the inspection metrics for that part, and then I'm going to move on to the next one.
4:40:47 Dave McLean: What we would have the user do is create one inspection at a time. Right, and it's still related to the pilot part data log, but we'd be able to say, okay, I'm going to do a new inspection, uhm, and, you know, save the record so they could generate the checklist, answer the questions, start, uh, save
4:41:06 Dave McLean: and add entry to go create another one. If, on the flip side, what they're going to do is, they're running the multiple inspections concurrently, then what we would want them to do is to, you know, in the real world, lay the parts out in front of them, specify how many parts that they are inspecting 
4:41:25 Dave McLean: and have the system pre-create the data. That number of inspection records and present to them a view where instead of seeing a list of parts, like a list of inspections, that they have to open one by one to get to the attributes they're populating, we show them a single grid that is all of the attributes
4:41:43 Dave McLean: that need to be. Uh, entered, grouped by the part that they belong to, like the sample number that they belong to.
4:41:52 Joel Frick (6124): Yeah, I think the grid is a better solution. And that, I think that also provides the flexibility 
4:41:59 Dave McLean: to do it either way. We can, we can toggle the view, yeah, but I think it all starts with the instead of me creating one record at a time, it's I'm specifying a number, right?
4:42:12 Dave McLean: So the way I've got this worded is once the pilot part shipment has been marked as complete, by the team lead, and therefore assigned, each pilot part data log will trigger a notification and task to the assigned inspector.
4:42:24 Dave McLean: When the inspector gets it, that user is going to enter the number of parts that they're going to inspect. And this is going to be defaulted to the number of, the number of ships that the supplier entered originally.
4:42:35 Dave McLean: It's just, hypothetically, you know, they ship 30 of them. We might decide we're only going to inspect 10 of them today, or maybe, maybe three of them look like they were damaged in shipping, so we're going to exclude them.
4:42:45 Dave McLean: Just, there's a world where it's not actually one-to-one in that case. When they enter the number of parts to be inspected, the system should then create one inspection record per unit, or per, I'm going to use the word unit in this case, just to, you know, individual part that was created.
4:43:04 Dave McLean: it. The user should then be able to toggle between two views of the checklist, and one of them is a list of.
4:43:21 Dave McLean: The individual parts that the user can click into to see the inspection attributes or questions Thank you patience.
4:43:37 Dave McLean: For each to be answered for that unit. And then another version of this, which is a consolidated list of all.
4:43:53 Dave McLean: Inspection questions grouped by unit, so that they can quickly fill out the results.
4:44:09 Dave McLean: Without having to open each inspection record individually. We're going to play around with some UI options for that, because that.
4:44:25 Dave McLean: That's going to be make or break. Right, ultimately, at the end of the day, no matter all the stuff that we do up here in terms of how we integrate it, how we connect it to PPAP and how that's all categorized, if it's an absolute pain in the ass for the inspector to do the inspection.
4:44:43 Dave McLean: Program fans, yeah. So I think that's where we're going to want to spend a decent amount of our time next week in terms of like, hey, what are the on my end?
4:44:54 Dave McLean: It's it's mocking up some different options for how that goes. That could look so that it's. Quick, it's easy. It visually shows what they need to see, and ideally it.
4:45:06 Dave McLean: As few clicks as possible, like in my mind, it would be ideal if, uh. They could, you know if it's a number that they are entering, it's, uhm, enter the number, hit tab, like tab on their keyboard to go to the next one.
4:45:19 Dave McLean: So 1.3 tab, 1.4 tab, 1.1 tab, so on and so on. It's gotta be that quick. Yep, so question for you Dave, built 
4:45:28 Joel Frick (6124): in to. Setting up the instruction. Well, the engineer have the ability to. Either ask yes, no attribute or force of measurement.
4:45:42 Joel Frick (6124): If you want, yeah, so as 
4:45:43 Dave McLean: a as a general principle. What I would view the different answer options to be would be numeric values, which would have upper and lower guardrails on them.
4:45:54 Dave McLean: Choiceless, so yes, no, yes, no, not applicable, pass, fail, compliant, not compliant, whatever. Whatever choiceless means. The numeric you want, and that can be used as either a single selection or a multiple selection.
4:46:07 Dave McLean: Though in either case, the. You'd have to define the, you know, pass criteria of those, so it's easy when it's a multi select or when it's a single select a little harder when it's a multi select.
4:46:18 Dave McLean: Usually that's more descriptive. I'd expect there be a date type, so manufacture date, for example, might be an attribute that you'd see on the checklist.
4:46:27 Dave McLean: Uhm? And. What's up? Serial numbers are often. and TitanDates. They look 
4:46:35 Joel Frick (6124): for serial numbers as part of the, uh, inspection. 
4:46:39 Dave McLean: Yeah. Uh, question I have for you for, for numeric values, uhm, do you, would you guys been doing all of your measurements with a common unit of measure for, like, if we're talking length, is it always going to be millimeters?
4:46:56 Dave McLean: Most always millimeters 
4:46:57 Joel Frick (6124): for any type of measurement. 
4:47:00 Dave McLean: Do I need to support the user being able to toggle between unit of measure, or can I take it? It always, when we're talking about this attribute, it will always be the same unit of measure that is used, no matter whether it's a exhaust manifold that, that runs the length of the vehicle or it's a, you
4:47:22 Dave McLean: know, a button, a switch or something like that. 
4:47:25 Joel Frick (6124): That's very small. Can you think of anything that's English? No, no, no. In, in, in terms of, in terms of dimensionals, it would be in millimeters.
4:47:36 Joel Frick (6124): Yeah. No, no, no question. But, dimensional is not the only attribute we can find, measure, distance, in some cases.
4:47:50 Joel Frick (6124): I don't know how detailed, you know, we did. More detail, like that level of detail, on PPAP samples, like burn rate, we'll do burn rate on fabric PPAP samples.
4:48:05 Joel Frick (6124): Dave, what if it's, what if, what if it's temperature, something else is going to affect that distance? 
4:48:12 Dave McLean: Oh, we hate temperature. Yeah. 
4:48:14 Joel Frick (6124): Uh, I think we mix our, our metric with our, 
4:48:19 Dave McLean: yeah, Fahrenheit. No, there's a very specific reason why I hate temperature, uh, for this kind of thing. And, and it has nothing to do with the business value.
4:48:29 Dave McLean: So if you, if, if that is a, if that is a thing that you are, that is part of your inspection checklist, then I think we have to support it.
4:48:37 Dave McLean: And it means that we have to support unit and measure through, uh, the not regular way in which we're using Intellects for supporting it.
4:48:44 Dave McLean: Intellects' built-in platform unit of measure only allows you to apply the multiplier. It doesn't allow you to apply a formula.
4:48:54 Dave McLean: So for temperature, it's like the conversion from Celsius to Fahrenheit is, you know, X plus whatever, like, ratio that there is.
4:49:03 Dave McLean: Like, it's a, it's a formula-driven thing. Whereas when you're talking about, you know, meters to feet or whatever the case is, it's just a straight multiplier.
4:49:12 Dave McLean: There's no, there's no formula to it. It just assumes it's it's, you know, however many feet times zero point whatever.
4:49:20 Dave McLean: And, and therefore, Intellects only allows you to put in the zero point whatever, and it just applies that formula for everything.
4:49:25 Dave McLean: So if we need it to be supporting temperature as well, it means we have to create a custom unit of measure.
4:49:30 Dave McLean: I don't think we ever record temperature values. Our test 
4:49:36 Joel Frick (6124): parameters are in temperature, but the result of the test is never in temperature. What's the actual boiling point Shoot! That's the one that I've got.
4:49:54 Joel Frick (6124): Is there something like hardness? Hold Yes, we will do hardness on faster. Especially fasteners. If it's a critical fastener, it's going to be hardened.
4:50:07 Joel Frick (6124): We'll probably especially repeat that challenge. We'll ask them to. But you're just saying converting on the fly. If we define this in the inspection instruction up front, what we're expecting the inspection result to be is based upon our instruction in the guardrails that we established, right?
4:50:29 Joel Frick (6124): You got it. So if you tell 
4:50:30 Dave McLean: them in the instruction to record their results in Fahrenheit, and that's just part of the test attribute, that whatever they enter, we're going to assume it is in Fahrenheit, then they could enter, you know, 211, and you wouldn't need to, you wouldn't need to have a unit of measure field with you.
4:50:49 Dave McLean: With it, you would just specify your guardrails in Fahrenheit as well, and it would figure that, figure out the answer.
4:50:55 Dave McLean: Did it pass? We can do that. We can, we can specify how, 
4:50:58 Joel Frick (6124): how, and it won't matter what the actual unit is. We will tell them what they're supposed to measure. So, then we will get a number.
4:51:11 Joel Frick (6124): Yeah, burn rate is just pass, fail, load. Ah, well, the millimeters per minute. Yep. There's still a number that's up to enter a value, but they, they do, but it, we won't necessarily ask for that in the PPAP sample.
4:51:33 Joel Frick (6124): That'll come back as a test report because the associates will submit it to the lab. to do the burn test, and then that will be a pass-fail, then they'll attach a copy of the report or send it to us.
4:51:46 Joel Frick (6124): So, Dave, it sounds like we won't have to convert anything. No. We may have, we may, we'll be measuring hardness, we'll be measuring, you know, temperature, but we, it will tell them what to measure, what, if it's supposed to be C or F, so they're just entering a number, and then length would usually
4:52:05 Joel Frick (6124): be millimeters, but if it would ever be inches, we would just tell them inches, I guess. I don't, I don't ever see a need to make the system be able to convert for me, right?
4:52:19 Joel Frick (6124): I mean, we can just do the math if we need to do the math, and then if we had a, a, a drop-down even, as far as I'm concerned, that just said unit of measure, and you pick from millimeters, degrees Celsius, you know, whatever, whatever other thing that you are picking from, and then it's just a number
4:52:38 Joel Frick (6124): , and you're comparing number values to number values. I think that would work fine. 
4:52:42 Dave McLean: Would you not be looking to then aggregate, if, if you're going to allow the person to specify what unit of measure any given measurement is in?
4:52:58 Dave McLean: not then want to take that attribute over, you know, every time that inspection was done and aggregate the results of it, not just the pass fail decision, but also like, okay, where, where are we, like, you know, we got it, the SPC charts that you found.
4:53:14 Dave McLean: Out there, that would require everything to be normalized into 
4:53:18 Joel Frick (6124): a common unit of measure. Yeah, and it should always be the same based upon what the inspection instruction was set out.
4:53:27 Joel Frick (6124): That will define the unit that they're supposed to report to. 
4:53:30 Dave McLean: Let's preserve this one for the moment, until, the decision on unit of measure, until after we talk through PPAP, because there's others that are inspection types, and if those inspection types do require not only unit of measure selection at point of entry, but also conversion, then, you know, ideally
4:53:59 Dave McLean: we're building the thing once, and therefore, you know, the benefit is here. If, if if we can skirt through this without having to build it, it simplifies things a little bit.
4:54:11 Dave McLean: This 
4:54:12 Joel Frick (6124): is the other inspection. Okay, this is it. Yeah, yeah, that's right. Yeah, he reminded me. I was like, oh, no, the one thing that I've got and I forgot that it was temperature, uh, but yeah, it's absolutely correct.
4:54:28 Joel Frick (6124): It's this is the break oil that we do, but that's, that's, I mean, that's what we're doing. Here, we're just saying, and I don't need to be able to convert it in the system.
4:54:41 Joel Frick (6124): Okay, and this is not pilot. No, this isn't just production. This is production. Yeah, 
4:54:46 Dave McLean: we just did this yesterday. Okay. Okay. So final answer for now. What we'll have it do is, when you define the checklist, when you build your checklist, when you create a question, or a test attribute, you specify what type of answer they're going to give, choices, date, time, text, numeric.
4:55:09 Dave McLean: If they choose numeric, you would then have the option to enter an instruction on what unit of measure you're expecting.
4:55:20 Dave McLean: That's going to show to the user as a, as a read-only property of that question, so that at least it's instructing them that, hey, when you enter this, enter it in millimeters, enter it in Celsius, enter it in Kelvin, whatever the case is.
4:55:32 Dave McLean: Um, you'll also be able to define the upper and lower guardrails and the target for each one of them. And when the system generates the inspection checklist, so when it actually goes to generate it for any given sample that you're running the inspection on, they'll see the attribute name, they'll see
4:55:51 Dave McLean: the, uhm, if there's any hint guidance on, you know, how to test it or something like that that you want to include, they'll see that, they'll see the, uhm, unit of measure required for entry, so that they know what it, they know what it is, and they'll see the, uh, the field where they would enter the
4:56:08 Dave McLean: answer. Once they enter the answer, it'll run the comparison. between the upper and lower guardrails to evaluate whether they passed or failed, or whether it passed or failed.
4:56:16 Dave McLean: It's not they, the person didn't pass or fail. That make sense? Yep. Cool. Okay. All right. So putting it into my diagram here, unit of measure support is not needed, but when a question with type number is used, the person defining the question should be able to specify what UOM the inspector is required
4:57:03 Dave McLean: to report results in. This applies to the guardrails targets as well. Cool. Okay, so fast forward.
4:57:21 Dave McLean: We've, we've done our inspections. We have a mixed bag of pass and fails. Let's start with, let's start with just passes.
4:57:29 Dave McLean: Let's assume for argument's sake that every, every sample, every attribute passes. The inspector's done what they need to do. Is there anything else they have to enter before they close the, uh, pilot part 
4:57:40 Joel Frick (6124): data log out? Yeah, I mean, once they complete the inspection, if everything's fine, you. Bye. Um, then they close out their inspection activity, green tag the box and send it to the pilot team in trim who's gonna build the actual vehicle.
4:58:01 Joel Frick (6124): But if everything's not fine, 
4:58:04 Dave McLean: sorry, just go through the inspection. So we close the inspection out. Who is it? Are we sending something to anybody or is it just the data's now available 
4:58:11 Joel Frick (6124): for somebody else? The data is now recorded. It's not usually reviewed by anybody 
4:58:16 Dave McLean: if everything passes. OK, close the record out. No. No additional routing or notification. 
4:58:26 Joel Frick (6124): It's all good. Is there any comment for any reason? Not if it's all good. But comments. Possible, 
4:58:39 Dave McLean: but not required. 
4:58:41 Joel Frick (6124): The receiving team didn't make sure that they had an 04 and an 06. And they approved it with 2 04s and I rejected it because I said I needed that 06.
4:58:53 Joel Frick (6124): You were supposed to look for an 04 and an 06. But I think the way he's setting it up, it's forcing it by part number.
4:59:03 Joel Frick (6124): Here's your 04 that you need to review. Here's your 06 that you need to review. That's going to force that.
4:59:09 Joel Frick (6124): Are, are, are engineers currently reviewing and approving pilot part data? We will go in and review it if there's a question during the build.
4:59:22 Joel Frick (6124): We don't free up approval or anything like that. I was just thinking that, let's say they all pass, but they're right on that edge.
4:59:32 Joel Frick (6124): Normally the associates will say something to us. Like, hey, these are all, like, at a minimum, they'll say something to us.
4:59:39 Joel Frick (6124): Yeah. Okay. If that's the case. Yeah. And like, you said, once it passes, nobody's really going to go back and look at this much anyway, so.
4:59:46 Joel Frick (6124): Unless we have an issue with it. That's when we'll go back and look at the, the, and that's why I want attribute data.
4:59:54 Joel Frick (6124): I mean, uh, variable data. Yep. And I, and I specify in my instructions. Whether I just want them to confirm, or whether I want them to measure.
5:00:02 Joel Frick (6124): Those are two different terms. So, the question that I've got is, in this, in this, this is the normal process.
5:00:11 Joel Frick (6124): This is what happens, maybe 98% of the time, by the part receiving data, what happens when there's a no. 
5:00:20 Dave McLean: You're up Dave. You got it. What we'd originally talked about was that we should be able to trigger a supplier non-conformance at this stage.
5:00:29 Dave McLean: So if something name. Fails, I think, is the threshold here. The number, the value, the answer is not what we're looking for.
5:00:38 Dave McLean: Based on how we set the question up, the system should then force the inspector to log a non-conformance. That then kicks off.
5:00:46 Dave McLean: The non-conformance workflow, and I'll have some more questions about what that looks like in a second, and to differentiate different types of non-conformances, but in this world, basically what it's going to set is for every failed inspection result, a little switch in the background is going to flip
5:01:03 Dave McLean: that says, hey, something more is needed, which prevents the inspector from completely closing out their task. It's going to give them an error, hey, you've got, you've got a failed inspection or a failed attribute that you need to have a non-conformance for.
5:01:17 Dave McLean: It'll show to them on the screen, and they'll be able to, you know, click a little plus sign or a little button in line with that question to then go and add a, add a non-conformance to the system.
5:01:28 Dave McLean: And ideally, we pre-populate as much as possible based on all the things we know, because the part is really the anchor.
5:01:34 Dave McLean: We're, we're relating that non-conformance to the part, to the supplier, we're relating it to the, ah, pilot part program, um, so that we, we have that sort of full traceability at the pilot part program of all non-conformances that came out of all of our inspections and what the results are.
5:01:50 Dave McLean: And perhaps even rolling that up to the PPAP level. If, ah, if you could have multiple, like, non-conformances coming from different aspects of the PPAP, then same thing.
5:02:00 Dave McLean: You'd probably want to see all of that consolidated at the level of PPAP. But I think once you add the non-conformance, non-conformance, and trigger that process from the point of view of the pilot part data log that contains all of these inspections, you've now done the thing you need to do.
5:02:20 Dave McLean: The question is whether that pilot part inspects or delivers that non-conformance, is that if you had multiple failures, and let's say in particular it was multiple failures on the same attribute.
5:02:32 Dave McLean: Would that be one non-conformance that you want to relate to all of those attributes, or would it be a separate non-conformance for each failure?
5:02:38 Dave McLean: Uhm, probably the former. 
5:02:42 Joel Frick (6124): Typically the former, and, uhm, so what will happen is if we have a problem with pilot parts, we will need to resolve that issue before using those.
5:02:55 Joel Frick (6124): parts in the pilot build. So there needs to be some sort of a trigger that says, hey, I had this non-conformance.
5:03:04 Joel Frick (6124): Now I need to either repair or replace those pilot parts. And that's and I can't close out that pilot part data because I have not been able to release those pilot parts to the build because they weren't 
5:03:20 Dave McLean: fit for the build. Let me, let me pause for a second here. I'm, I mean, I'm going off of, off of just terminology technology.
5:03:27 Dave McLean: That we were using in prior conversations that it's a supplier non-conformance that we're creating, but from what you just described that that's in terms of the process and the investigation.
5:03:37 Dave McLean: That's a good deal lighter than what a non-conformance is like a normally a non-conformance. I think in the context that we were talking about it.
5:03:44 Dave McLean: And in our last sessions, it deals more with like. Probably mass production issues, right? We're like, you know, at this early stage, like it's expected at some level that there's going to be a higher frequency.
5:03:59 Dave McLean: Of issues because you literally are still starting it up. It's still very early, so you're you're the process exists to work out the kinks.
5:04:07 Dave McLean: So is this really? Is this truly a nonconformance that we're creating? Or is it to coin a new term here?
5:04:13 Dave McLean: Is it a you know, a fail? An inspection failure? Report where you're looking for your you're looking for a response from the supplier, but it doesn't necessarily need to go to the kind of multi layer cause analysis and action plans and all the all the process stuff that an NCR typically entails.
5:04:30 Dave McLean: This is more. Hey supplier. 8 of the 30 parts that you sent us failed and this is these are what the issues were.
5:04:39 Dave McLean: Send us new parts and tell us what you're going to do to make it so they don't fail again. 
5:04:44 Joel Frick (6124): Yes, definitely lighter than a mass production. In the NCR, but I absolutely do not want it to be resolved off the books.
5:04:57 Joel Frick (6124): Because that is, that is unfortunately what they are told to do now. They're told, oh, just send us an email.
5:05:04 Joel Frick (6124): And that is completely off the books. There's no record of it. It doesn't get passed on to mass production as a history.
5:05:11 Joel Frick (6124): And I want that history there. Visible, uhm, so there needs to be some level of non-conformance. And we truly pride.
5:05:20 Joel Frick (6124): Are you still down there when we started writing them? Anyway, I want to, I want to tie into the park history, researchable by mass production, that we had this issue during the pre-PPAP era.
5:05:41 Joel Frick (6124): And it's, yeah, along the lines, Dave, something that you said kind of made me think here. Keep in mind that these parts were all measured by the supplier also.
5:05:48 Joel Frick (6124): And said to be okay. And said to be okay. And so, so it's a little bit more than, oh, we're just trying to work out the kinks.
5:05:54 Joel Frick (6124): It's, you, you already said these parts were okay. Now we've received them and we've verified they're no good. So there's, there's a little bit more to it than just, you know, the, the collaborative effort.
5:06:06 Joel Frick (6124): Although that is part of what we're trying to do is get a good part in mass production. I think there's a little bit more to it.
5:06:12 Joel Frick (6124): Okay, but would you always use a non-conformance report? Well, right now we have nothing. But do you want to? At some level of reporting.
5:06:23 Joel Frick (6124): I had a thought on this, and, and this, I don't know, this might trigger a whole other path. Because it can pop up too and say, you want an NCR or do you just want a, whatever the other report is, it's called.
5:06:38 Joel Frick (6124): Well, here, here, here's what I was thinking. I think you're headed the same direction as I was. I think one of the main complaints we have with IntelliQuest right now is, uhm, I think the way that you put it, Keith, is the engineer can't kill the report before it goes to the supplier.
5:06:53 Joel Frick (6124): And I kind of wonder if that's maybe this, whatever the reaction is to non-conforming pilot part data, should be on the inspector's side standard.
5:07:04 Joel Frick (6124): It's, hey, I have non-conforming part data, send it to whatever that next step is. And we always want to be notified before it goes to the supplier.
5:07:13 Joel Frick (6124): Right. So that's where I say, it maybe creates the NCR, I guess, or whatever, you know, whatever that document is, and it goes to the engineer responsible for that piece.
5:07:26 Joel Frick (6124): And says, okay, you want to send this on to the supplier, or do you want to kill it, or do you want to, you know, do something less or what, you know, whatever the case may be, but then it kind of gives you the opportunity to process it first.
5:07:42 Joel Frick (6124): Yeah, there are absolutely times where I say, well, let's just get this resolved, and then there are other times where I'm like, how in the hell did you ship me these parts like this?
5:07:54 Joel Frick (6124): Yeah, I want to know how this happened. Luke, on TeleQuest, you guys have, like, a segment for PRs, whether it's PRC or interview only, or whatever.
5:08:09 Joel Frick (6124): Uh, couldn't you do something like that? But regardless of risk band, it still goes to the supplier automatically. But categorization, okay.
5:08:20 Joel Frick (6124): That's, I think, I think where you're saying is, maybe the engineer does the risk analysis and says, this is the level of pilot parts.
5:08:31 Joel Frick (6124): You know, response that I'm looking for. Maybe it doesn't even have to be a risk analysis. It could just be a straight up selection and say, I just want to the equivalent to a quick feedback or the equivalent to, you know, a PRC or whatever.
5:08:46 Joel Frick (6124): Yeah, but I absolutely agree. We want to document that there was a problem. 
5:08:51 Dave McLean: Yeah. So what we're describing here, I think. I think it is something different than NCR, though it would inherit from the same framework that supplier NCR.
5:09:03 Dave McLean: It's built out of so that you could build your list of like, hey, show me all, show me all nonconformance reports for this supplier and these would be included in that, even though they're a different thing, they sort of fall under the big umbrella of supplier nonconformance.
5:09:19 Dave McLean: Therefore, there's they would carry with them the relationship to the supplier. They would routing wise can go to the supplier as well and so on and so forth.
5:09:26 Dave McLean: But if we think about it from a workflow point of view, what I what I heard a second ago is that once the inspector creates it, it sounds like there's an initial review that you'd like to like where the pilot part program team lead.
5:09:38 Dave McLean: Is it or is it somebody else 
5:09:40 Joel Frick (6124): usually goes directly to the engineer? Once once the inspector finds a problem, it's a direct interaction with the engineer responsible for that.
5:09:50 Joel Frick (6124): Very rarely does it go to the team leader first. I don't think it ever does, does it? He'd probably be watching Star Trek.
5:09:59 Dave McLean: And then assuming the assuming in the like what the engineer is looking for. In this case is what is it something where, like, hey, is there is there an issue with our testing methodology that led to this and therefore it's not really a supplier issue or is it truly a supplier issue and we we need to
5:10:20 Dave McLean: send this off to the supplier for response. Is that kind of the decision 
5:10:23 Joel Frick (6124): making that's happening here? Yeah, there's, there's always a discussion about how it was found, what was found, uh, yeah, possible reasons for why it might have been a discrepancy that that always happens.
5:10:34 Joel Frick (6124): It's the very first step. And then once it's confirmed that, yeah, we've got a problem, we need to deal with this.
5:10:40 Joel Frick (6124): Uh, we need parts reworked or replaced, then, yeah, then it gets escalated and sent out to the supplier. Because there are some things we can deal with in a build event that we know can happen because we're not fully off-process yet.
5:10:55 Joel Frick (6124): And we'll deal with that as needed. You know, ideally, we're at a certain level of process maturity, but it's not always where we want it to be.
5:11:07 Dave McLean: And we deal with it as needed. Okay, and then, so after the initial review, if you're sending it to the supplier, it would, it's probably a supplier response stage.
5:11:24 Dave McLean: It's not really an investigation, so to speak. It's a, hey, this issue came up. You know, what's your response? And maybe, maybe what the engineer is asking for is, you know, give us, maybe it is a full root cause analysis.
5:11:36 Dave McLean: Uh, you know, maybe it's a description of the issue and, uh, what are you going to, like, what are you going to do about it?
5:11:41 Dave McLean: You're going to send us new 
5:11:42 Joel Frick (6124): parts or whatever the case is, right? Sorry. Clarification, when you're saying the status, you're saying the status of the NCR or the status of the inspection task?
5:11:51 Joel Frick (6124): The NCR. Okay, alright, I just want to be clear on that. Yeah. Because the inspection task is going to close once the NCR is issued.
5:11:59 Joel Frick (6124): Yeah. Right? Well. Unless we get new parts to replace it. And when we had, you would add an additional, Yeah, we would have to have a new shipment.
5:12:10 Joel Frick (6124): Okay, yeah, so the old one, the original one where the defect was found, you close that task. Unless it was a no good data.
5:12:18 Joel Frick (6124): Unless it was used as is. And we aren't requesting new parts. So yeah. Even still, that task is going to close with the creation of the NCR.
5:12:30 Joel Frick (6124): Yeah. Regardless of what happens with the NCR from there, the task is going to be Is that? I don't know.
5:12:36 Joel Frick (6124): Because if we're replacing it. Replacing it, you're going to start another inspection task. And if you're using it as is, you're not going to re-inspect it.
5:12:48 Joel Frick (6124): We do a lot of re-inspecting. We reworks, though. We do use QRAs for reworks. Pilot parts that fail is one of those.
5:12:56 Joel Frick (6124): There's a good way to capture that, that it got reworked. Would you put that in the NCR? In response to the NCR?
5:13:05 Joel Frick (6124): Yeah, I mean, as long as we capture what, what the disposition was, how we dealt with that no good part condition, use as is, rework or replace, I mean, those are, those are our three options.
5:13:17 Joel Frick (6124): We have to have pilot parts to build the vehicles. Yes, so, would you capture that, this is to both of you, Dave and Keith, would you capture that disposition in the inspection task, or would you capture 
5:13:32 Dave McLean: that in the NCR? The NCR, it's specific to the thing that failed. Okay. Or things, if it's multiple. So again, I'll use the example, they sent 30 parts, and 8 of those 30 failed on a specific dimension that you measured.
5:13:48 Dave McLean: You're probably only going to create one failure report, but you're going to relate it to all 8 of those 30.
5:13:54 Dave McLean: failed attributes, and by definition, then it's relating to the 8 sample parts that you, you tested. So you, by creating that one failure report, assuming it truly is the same issue that you're seeing across all 8 of them, by creating the one failure report, and then relating it to the 8 attributes that
5:14:12 Dave McLean: failed, you are satisfying that requirement that all failed attributes have a related NCR. This now allows you to close out the inspection.
5:14:20 Dave McLean: The NCR, the failure report in this case, is what lives on. So now the engineer can gets it and reviews it.
5:14:28 Dave McLean: They can backtrack to the inspection result and see the broader inspection result. And at this point, they're going to decide, you know, hey, what do you, what do you think the cause is?
5:14:36 Dave McLean: Are we going to send this back to the supplier or not? And if so, what are we asking them to do?
5:14:42 Dave McLean: And then what are we doing with the parts that failed? Are we using them as is? Are we, are we looking for replacements?
5:14:47 Dave McLean: Or, you know, again, we can figure out the fields a little bit further down the line. But to me, that's what the engineer is looking for.
5:14:54 Dave McLean: If they're not sending it to the supplier, then it's done. If it's the kind of thing that we're looking at it going, no, you know what?
5:15:00 Dave McLean: We might have had a, we might have had an instrumentation issue with our testing. And so this probably isn't the supplier's issue, so we're not actually, it definitely failed as per the spec, but it's a very different kind of failure than what we are when we're sending it to the supplier.
5:15:14 Dave McLean: Similarly, if we are sending it to the supplier, we want the supplier response, so we're going to tell them, hey, I want you to do, I want you to do a root cause analysis and give me, give me the root cause that you found on your end.
5:15:27 Dave McLean: I want you to tell me what your preventative actions are. Like, it's going to look like this. It's going to a lightweight NCR in that regard, uhm, plus, based on what you said you wanted to do with it, what the disposition was, if you're asking them to create a new shipment, does that go back through
5:15:44 Dave McLean: procurement, or is this now kind of, because this is based on a failed product, you've already bought the product, you just need them to fulfill it with a, a 
5:15:54 Joel Frick (6124): good shipment. Correct, yeah, once those products have been found to be defective, there is not another PO issued, and they are responsible for that.
5:16:02 Joel Frick (6124): for providing us this many of this part, and if they didn't provide me good parts, they need to provide me good parts.
5:16:11 Joel Frick (6124): So they're, they're not paid again. Mass, mass production, we do the ASNs and then, you know, the EDOs and everything else to replace it, scrap it, but not for pilot parts.
5:16:29 Joel Frick (6124): Pilot parts are not in our inventory, so to speak. So there's no, no need for all of the other things that happen with mass production.
5:16:44 Dave McLean: OK, so then I say. This is where it kind of ties back nicely here. Uhm? Don't want to bold that so.
5:16:55 Dave McLean: If the inspection. Failed. Many. If the inspection failed and we sent it off to the supplier with the disposition that says.
5:17:07 Dave McLean: Send us new parts. You know, we need five new parts or something like that. Then in the response, in addition to asking them for their root cause analysis and preventative action plan, we also show and force them to add a new pilot part shipment, which is the thing that kicked off this inspection.
5:17:23 Dave McLean: So they're at the very beginning, so now they're looking at it going, oh, you know, eight of those 30 failed.
5:17:27 Dave McLean: OK, here's here's here's what happened. Here's what we're doing about it. New shipment, here's, you know, I'm adding in the part that needs to go for that shipment.
5:17:37 Dave McLean: Here's the eight that you're requesting for the dispatch. It's position, which then loops it back through, sends it to the inspection team lead.
5:17:44 Dave McLean: The inspection team lead looks at it and says, OK, I got eight of that part again. They can also see that that that part shipment is related to a pilot part inspection failure.
5:17:55 Dave McLean: And so. So in this case, when they go and complete it. They can. Yeah, it's still going to be related to the same build event.
5:18:08 Dave McLean: So that's where everything gets consolidated together that you don't see not only the original 30 inspections that you had, including the eight failures.
5:18:16 Dave McLean: You'd also see the eight additional ones that came from the new parts if you were looking at the build event.
5:18:23 Dave McLean: Yep, yep. Cool. That way it becomes almost a circular process here. Like, if they fail, then they send new ones, you do it again.
5:18:34 Dave McLean: If they fail again, you send new ones, you do it again. Hopefully not Ad Nauseam. Cut. It's a theoretical answer.
5:18:43 Dave McLean: Endless loop. Yeah, yeah, and while I would say, I mean, you guys correct me if I'm wrong here, but while I would say that in.
5:18:51 Dave McLean: You know, as a general rule, when there's anything of a non conformance nature, yes, you want the supplier to respond.
5:18:57 Dave McLean: Normally you want somebody to then review that response. To make sure it's satisfactory and adequate. But in this case, they're literally sending you more products to test, so the proof is in the pudding.
5:19:09 Dave McLean: It's less about what they did, and it's more about did that actually create the circumstances for them to pass this test.
5:19:15 Dave McLean: Inspection. Cool. Before we take a break here, any? Any final thoughts on the?
5:19:28 Dave McLean: Shipment to data log to inspection to failure. 
5:19:32 Joel Frick (6124): Cycle, um, the, the only thing I would. You, I think you mentioned it earlier. Would we be able to search by event by model?
5:19:50 Joel Frick (6124): What's been inspected and what's been received, would that be possible based on how this is set up? By model? By, like, model of the vehicle?
5:19:57 Joel Frick (6124): Well, I, our, our build events are tied to a particular model. So, if we have a build event, it'll be named by the model in that build event.
5:20:06 Joel Frick (6124): Would we be able to, to run a report and say, okay, this is all the parts I received for this event.
5:20:12 Joel Frick (6124): What, what 
5:20:13 Dave McLean: have I not received yet? Yeah, yeah. So, you'd start your report way up there. In the framework, you'd start it with, uh, show me all PPAPs related to Forrester model year 2029, let's say, whatever, and again, I'm sure there's a more specific coding for that, but, uhm, you'd, you'd specify whatever, 
5:20:33 Dave McLean: cast whatever, filter on the PPAPs that you're looking for. You'd then break down into a specific build event that you want to see.
5:20:41 Dave McLean: From there, you'd be able to then connect, uh, through the build event to Standard. Yeah, to the specific pilot part shipments that came under that build event and backtracking that relationship, you'd be able to figure out who the team lead was, for example, like properties of the of the pilot part 
5:21:05 Dave McLean: inspection. But otherwise, you'd see all the shipments. From there, you would see you'd be able to backtrack in to see the data logs as well, which are the individual parts that were received.
5:21:16 Dave McLean: You could then go to the level of the inspections, which are sample levels. So over the life cycle of the that build event.
5:21:24 Dave McLean: Let's say the supplier sent you 10 shipments of parts for that, or for a given part, uhm, or sorry, 10 shipments of which that, those shipments all had the same part in it all 10 times, and across all of those shipments, let's say there was a total of 500 individual parts that they sent you, you would
5:21:49 Dave McLean: then see that level of 500 here, and then if you wanted to get the next level down into the individual inspection attributes, you would then break that down into a level that I haven't defined here, but it would be Pilot Part Inspection Response is the name of the object, and it's basically each attribute
5:22:08 Dave McLean: for every individual inspection. If your checklist is 10, you have 10 questions, 500 parts inspected over the life cycle of that build event means you have 5000 records in that response object, and you'd be able to then say, look, over those 5000 attributes that we tested, uhm, you know, maybe they had
5:22:28 Dave McLean: a 97%, uh, pass rate, and on the 3% failure rate, we can then dig into the inspection failure records that, uh, that were triggered as a result of Sounds good.
5:22:43 Dave McLean: Okay, cool. Let's take a 10-minute break. When we come back, we're going to talk about security. That old trick. Joel's going to laugh because we've been talking about security and Facebook for about 
5:22:59 Joel Frick (6124): 10 minutes, and about it for 6 months now. Alright guys, we're almost there, and 
5:23:08 Dave McLean: I think what we talked about is going to work here too, but this will be the first real litmus test of it.
5:23:12 Dave McLean: So, okay, cool. Let's start up again at 10 after 10. For 3, okay? Alright. Cool. Hey guys, you guys hear me okay?
5:35:51 Dave McLean: Yes, we can. Perfect. My wife's sending me pictures of houses, house listings in the neighborhood, but not ones that she wants to buy.
5:36:07 Dave McLean: One's with strange decoration. Oh, you can't see. Hang on. There. I was going 
5:36:15 Joel Frick (6124): to say, you got your filter on. That's it. That's a decoration. 
5:36:22 Dave McLean: That's a decoration. Okay. There it is. Yeah, right? Like, I mean, it's a nice enough room, but there it 
5:36:32 Joel Frick (6124): is off in that corner. Oh, that's huge. I thought it was smaller than that. What? 
5:36:39 Dave McLean: In the heart news. Suburban Toronto area. It's not 
5:36:42 Joel Frick (6124): exactly known for bears. That's an expensive 
5:36:48 Dave McLean: corner piece. Yep. Yep. In a 1.86 million dollar home. Actually, pretty nice house other than the bear.
5:37:02 Dave McLean: All right, uh, just us for the rest of the afternoon, or are we waiting on anybody else to come back?
5:37:13 Joel Frick (6124): I think Joel's coming back. He's not back yet. We'll probably get started at the same time. Okay, 
5:37:20 Dave McLean: I'll hold on security until Joel's back just because it relates into some of the other stuff we're doing. What I did want to ask a little bit about was, uh, um.
5:37:30 Dave McLean: Availability of this app, so everything to do with pilot part program with respect to mobile from everything we've talked about.
5:37:37 Dave McLean: It sounds like this is really like the testing. The inspection itself happens more at a workbench person is going to be in front of a laptop.
5:37:44 Dave McLean: Or a PC of some type, rather than rather than ripping through it on a, you know, mobile phone or something like that.
5:37:51 Dave McLean: Am I misreading that? Or is this? Is this going to be something primarily driven through somebody in a browser on 
5:37:56 Joel Frick (6124): a laptop or PC? I would say. Especially for the Japan parts, they will be away from the facility, inspecting parts at a logistics warehouse.
5:38:10 Joel Frick (6124): And even, even some of the pilot event parts. Uh, instead of coming into our facility, especially the SAP parts that we talked about that get shipped to another supplier, those, we typically inspect those at one of the collection warehouses.
5:38:29 Joel Frick (6124): So, the ability to do all of that on mobile would be great, uhm, I wouldn't say it's mandatory because we do have laptops and we can still, uhm, use a PC-based system, but if it is available mobile, that would be awesome because it would definitely free them up, uh, to use their mobile devices.
5:38:55 Joel Frick (6124): Did you guys have the phones when you were down there? Is that after you? No, that was after me. We had the two laptops.
5:39:02 Joel Frick (6124): Yeah. So they were actually issued. They were issued, uh, mobile devices to be able to do some of their activities, uh, but I wouldn't say it's mandatory, but I would say it'd be really nice if they could 
5:39:15 Dave McLean: do it mobile. Okay. Mobile as in, uh, in how, how, uhm, a boundary to the app versus doing it through a browser off in the mobile device in a responsive form factor.
5:39:32 Dave McLean: Something that like when the page open, it's really structured to make it work on a mobile device. It responds to the form factor you're on.
5:39:41 Dave McLean: The reason I ask is, and where this would come into play, is, uhm, if there's a need for the person to have offline capability, so to be able to, ah, Okay.
5:39:53 Dave McLean: Even then, I don't actually know how that would work in the flow of this, but, uhm, they would have to have, they would have to have basically started the, uhm, data log.
5:40:03 Dave McLean: They would have had to have generated their samples, basically, before they went offline, uhm, so that the samples are already there.
5:40:09 Dave McLean: I mean, the checklists are all ready for them when they get out there into no connectivity, and then they're answering their questions like that.
5:40:16 Dave McLean: If offline is something that we can leave out of, out of scope, because it's actually not going to be that common, or really ever, that they would actually be fully offline when they're trying to do this, then I think we could actually do a better user experience through the browser because we get a 
5:40:35 Dave McLean: lot more flexibility with how it looks. The mobile app, the mobile app is designed to support offline use cases, but as a result, the options we get for how to present this are much narrower to the end user.
5:40:49 Dave McLean: So, for example, the toggle back and forth between, am I doing this by, uhm, the individual part or am I doing this by, by attribute for each part, uh, and being able to toggle the UI back and forth, that's just not something that would be possible if we were doing it in the mobile app.
5:41:08 Dave McLean: But whatever, whatever user interface we come up with, to be able to make it work, efficiently for somebody on a laptop, we can factor in tablet and phone driven user interface as well so you guys can kind of see and visualize what it would look like and how the user would interact with it when they're
5:41:28 Dave McLean: working on those form factors, 
5:41:30 Joel Frick (6124): but still in the browser. Um, I think, I can only think, I don't think there's anywhere where you wouldn't have the building he used the Hasbro cluster of the world.
5:41:46 Joel Frick (6124): Warehouses that you went to, you know, at the very least, you could take the hotspot if you didn't have Wi-Fi available.
5:41:54 Joel Frick (6124): Yeah, yeah, I think ultimately we would be able to find a way to get connectivity. If we didn't have Wi-Fi around.
5:42:02 Joel Frick (6124): We've got some hotspots that we maintain for travel or, uh, if we're going to be off-site and we can't get logged in, so.
5:42:13 Joel Frick (6124): Yeah. All right, guys. All that Blab Talks and I'm Ryder. Keep listening to all this stuff. I'm gonna go on my cups now.
5:42:24 Joel Frick (6124): That's the case. That's what I would do. I'm still down there. Just take my laptop and 
5:42:31 Dave McLean: So be fair to say then primary form factor would be a laptop. Secondary form factors are connected mobile devices and iPads or tablets.
5:42:41 Dave McLean: Yeah, and an out of scope for our purpose is the, uhm, having to support the offline use case. I can safely 
5:42:51 Joel Frick (6124): say that I think we would always be able to find a way to get 
5:42:54 Dave McLean: some form of connectivity. OK, OK, then. So I'll build our decision record based around. Mobile use case will be satisfied in the browser on the mobile device.
5:43:07 Dave McLean: With a responsive design, something that's purpose built and, you know, is optimized for mobile usage for a 4 inch screen or a 10 inch tablet screen or whatever the case is, touch form factor, all that good stuff without actually driving it through the mobile app itself.
5:43:23 Dave McLean: Where we'd be much more constrained. 
5:43:25 Joel Frick (6124): Yep, sounds good. Okay, so when you say offline, Dave, would they still be able to use, let's say there was no internet, would they still be able to use it and put the information in and then it downloads later?
5:43:36 Joel Frick (6124): Or are you just saying 
5:43:37 Dave McLean: you couldn't do that at all? So if offline was a use case we were supporting, a couple of things come from that.
5:43:46 Dave McLean: The first is that it would have to go through the mobile app, not through the browser, because you can't use the browser offline in this case.
5:43:53 Dave McLean: So, you have to go through the multiple mobile app, and therefore the user interface options that we have are significantly reduced as far as how we actually present this to users to make it easy for them and fast to work with.
5:44:05 Dave McLean: Moreover, the other side of that is, Thank you. There is, uh, based on the way we've described this, where the user has to enter in, you know, how many samples are they actually testing?
5:44:19 Dave McLean: Uh, you know, if the shipment had 30, we're going to test all 30 of them. That action pre-creates the inspection requirement.
5:44:27 Dave McLean: So, if and all of the attributes within each inspection, you'd need the server for that. So, if we really had to support an offline use case, essentially what you'd be doing is saying to your, your testers, hey, back at the hotel before you show up on site, you have to log into the app and you have to
5:44:43 Dave McLean: basically set it up so that you, you know, you know how many you're going to be inspecting when you get out there into the field, so that all those records pre-create and download to your device before you go offline.
5:44:56 Dave McLean: Okay. Yeah. Okay. 
5:44:59 Joel Frick (6124): So there are different. There's be some usability, but you'd have to prepare. Yeah, okay. Sorry, if you 
5:45:05 Dave McLean: took that pathway, what we just said is we're going to leave that out of scope. Okay. Right, like the trade-offs of supporting that, I'll say it plainly, in order to support a very limited offline use case, every other record that your users enter is going to suffer as a result of that.
5:45:24 Dave McLean: The interface that the person is going to work with is not going to be as strong as what they 
5:45:28 Joel Frick (6124): otherwise would have. Yeah, I thought I heard, I don't remember who it was in some of the, in the groups before when we did the design, that there were some use cases where they didn't have internet access or, but if, if we have, if you can connect to your phone.
5:45:52 Joel Frick (6124): You know, through your laptop. Yep, you get internet. We, we, we can probably figure something out like that. Yeah, 
5:45:58 Dave McLean: yeah, and I think as far as the the inspection, like the checklist view, the thing that actually, um. You're entering all of your attribute results on, um, I like we can.
5:46:09 Dave McLean: It's a little bit of front end web development, but we can build something that that is designed to scale up or down.
5:46:15 Dave McLean: So if the person as long as the person is comfortable doing in the browser, which again we can. Make that experience pretty tight, then this isn't a big problem for them.
5:46:24 Dave McLean: It just means like they still do it on a mobile device. They would just have to be online. They would have to have some connection and once they're in there, they're doing it in the browser in a in a responsive form design that is is structured.
5:46:36 Dave McLean: For that particular device. Cool, OK, let's talk security. So to frame up this discussion where we're currently at with security is.
5:46:52 Dave McLean: Visibility to any given type of record or set of records and intellects is governed by a bunch of different factors, and in this case.
5:47:03 Dave McLean: Anything related to supplier data sort of actually sidesteps some of what the rules that we're working off of in some cases in favor of other rules.
5:47:12 Dave McLean: But when we're talking about internal SIA users, the first layer of data filtering that happens, or securing that happens, is against SIA's org structure, depending on departments, sections, groups, so on and so forth.
5:47:27 Dave McLean: And that's a hierarchical structure that, ah, we've, we've, I think, just settled on within the phase one context, that any given record gets created at a, at a given location or node of that hierarchy.
5:47:39 Dave McLean: And as a general rule of rule, visibility to those records is for anybody who is, who's able to see that location and above that location.
5:47:48 Dave McLean: So in this context, when we're talking pilot part inspection data, pilot part data, uhm, this I mean, you guys tell me where this makes the most sense from an org structure point of view.
5:48:00 Dave McLean: Is this a QC process, really? Is it a supplier quality process? How would you guys, like, is it an engineering process from a, from a new build point of view?
5:48:07 Dave McLean: How would you guys typically decide what, what department essentially 
5:48:11 Joel Frick (6124): owns these records? From the standpoint of pilot part data, the, the quality department 
5:48:18 Dave McLean: owns the records. Okay. Okay. And from a visibility point of view, as a general rule, most of the people that would need to see it are people that are in the quality 
5:48:27 Joel Frick (6124): department or quality or above, uhm, the quality department, plus all of the departments that interact with the suppliers. So supplier management materials, all of all of the departments that directly interact with suppliers on a regular basis from the.
5:48:44 Joel Frick (6124): From a supplier portal standpoint, I don't see any reason why we wouldn't want them to have at least visibility of the status of our data and feedbacks.
5:48:55 Joel Frick (6124): Yeah, because they create a supplier scorecard based on that, so probably anybody within procurement. Quality, procurement materials and quality all interact correctly with suppliers.
5:49:06 Joel Frick (6124): Yeah. Okay. So a lot above all the sections is where we, sounds like we'd have to put that. 
5:49:16 Dave McLean: Maybe. 
5:49:19 Joel Frick (6124): Okay. Maybe. Didn't you say it's a different structure for supplier-based? Yeah, so it kind of brings us into the next layer of this 
5:49:27 Dave McLean: one here. So the constraint that Joel's thinking of in this moment is the, um, hey, records are visible at the location they're created and above from that location, but not parallel to.
5:49:39 Dave McLean: So if we follow the typical rules of an IntelliX app, if you create these records at, quote, quality control that would not be visible to users of supplier management unless we do some sort of, like, exception based sharing of records.
5:49:54 Dave McLean: But let's put a pin in that one for a second, because it's not that long. It doesn't necessarily have to be the end of the story.
5:49:59 Dave McLean: The second layer of governance is on a domain space, and we're typically using this to be able to differentiate, for example, environmental management system, quality management system, safety management systems, records in the system.
5:50:15 Dave McLean: So you imagine in the audit application, where there's one audit app, a safety audit should probably not necessarily be required.
5:50:23 Dave McLean: It be visible to quality team members, even of that that specific site. Or an environmental audit might might have restricted access.
5:50:31 Dave McLean: Different people are going to be able to see environmental ones from safety audits in that case. And so that that sort of domain based record.
5:50:39 Dave McLean: Um, security is another Avenue for us where imagine there is a supplier for lack of a better term supplier in quality domain space, which is really designed for all of this data that connects to suppliers.
5:50:55 Dave McLean: And therefore needs to have some visibility to people across the organization, but not necessarily to people who we just say should not have access to supplier related data.
5:51:07 Dave McLean: That's kind of another way to do it. And in that scenario, what we probably look to do is change the rules.
5:51:11 Dave McLean: We'd rule for location security so that any given data in pilot part data is technically globally visible, and instead we'd rely on that supplier domain to be the thing that restricts access to the data for internal SIA users.
5:51:28 Dave McLean: So even though, uhm, you know, let's say there's no location filtering, we create pilot part data at, ah, at quality control, ah, but we secure it with that supplier domain, then all of the people in procurement, quality control, supplier management, normally speaking, they would, for most other applications
5:51:46 Dave McLean: , they would only see records at their location, and below, for this one, they see it for the whole organization, but with that supplier cut across the records that they see, so they're only seeing, seeing it because of that supplier designation.
5:51:59 Dave McLean: If they're not part of a group of that grants them access to the supplier domain, they don't see it, 
5:52:03 Joel Frick (6124): no matter what their location is. Yep. Sounds good. Okay. Pricing study. I don't think we would start with the pricing.
5:52:16 Joel Frick (6124): I mean, we don't ever know what the price is, so it's not in there now, but you know, covered. Okay, yeah.
5:52:22 Joel Frick (6124): Sorry, just a side 
5:52:23 Dave McLean: conversation. No worries, no worries. So the other dimension for this is, uhm, something that we just introduced as well, which is almost like a management hierarchy level, so associates and team leads and group leaders and section managers and so on, all the way up to the executive level.
5:52:42 Dave McLean: The requirements coming somewhat from document control, but as well from audits and inspections where, uhm, records might be bound not only to a specific location and bound to a specific domain space, but even for people who have access to those, those, you know, two concepts, they might not necessarily
5:53:01 Dave McLean: have access to all of the data within that. You might have document control, for example, that exist at, uhm, you know, manufacturing, uhm, who have, they're, they're maybe considered safety management system documents, but they should only be accessible to people that are managers and higher within 
5:53:20 Dave McLean: the, within the management people hierarchy. Does something similar exist here? So, within that sort of construct of people who are granted access to the supplier data domain, would you see a world where there's a, you know, a need to restrict things by somebody's, basically their level within an 
5:53:41 Joel Frick (6124): organizational hierarchy? You could deal anything with, like, uhm, recalls, safety-related recalls. That would be in there. Yeah, that's something I can think of, and QE currently has their own system for that.
5:54:01 Joel Frick (6124): The only QE interaction right now is the warranty. CAR. Data, the CARs. Warranty CAR will be in this. We can, we can see a warranty CAR currently.
5:54:13 Joel Frick (6124): Okay. But we don't see anything related to recall. So the only thing I would think about, and that's not hierarchical, it's more role-based, is.
5:54:22 Joel Frick (6124): Is there anything with new model related stuff that would be for sure? Strict for a period of time. Yes, from the standpoint of the master schedule and the drawings and the inspection information.
5:54:38 Joel Frick (6124): From the standpoint of, we don't want mass production to see, just like we mask everything, until we get to the reveal point.
5:54:48 Joel Frick (6124): So we still have those restrictions. Well, that would be another level of complexity we'd have to share with them. Right?
5:54:55 Joel Frick (6124): How do we designate that? So that's what I So, then what he's talking about is, there are, so as we talked about PPAP, for example, and schedules, right, for new models coming up, within our organization.
5:55:14 Joel Frick (6124): We traditionally have compartmentalized that for people that need to work on Don't make that available until it becomes closer, once the model's been revealed and where it's going to be made.
5:55:30 Joel Frick (6124): Then we typically, uhm, release that information. I know historically, uhm, there's some, uh, stuff about public information and potential insider trading type of issues that can go on, or, you know, a supplier finding out they're not getting a contract.
5:55:46 Joel Frick (6124): So there have been business needs to try and restrict that, but I don't know, from the software side, how difficult that becomes.
5:56:00 Dave McLean: I actually think it fits nicely. So, I would go I would probably start with this being something that's captured in the domain hierarchy, that business hierarchy, where right now, you know, it's, it's, right now it's almost oversimplified, it's SMS, QMS, EMS, there's three different ones, but if you 
5:56:18 Dave McLean: take, you know, if you take QMS, uhm, you know, I'm, I'm gonna, I'm gonna carve it out now for the mo-, just for the sake of the conversation, let's, let's say it's not even considered a QMS function, because it's not really a management system function.
5:56:32 Dave McLean: Oh, no. Yeah. So, QC. It maybe is a better way to do it, or, or, you know, supplier related, or something like that, and from there, if you break it down into new model and production, or mass production.
5:56:45 Dave McLean: Yeah. Most people who would need access to this QC domain, need it for the mass production branch of that. So that's where they're going to get access to, ah, for example, you know, most supplier records for, and I'm going to view this through a supplier bent, in this case, so you've got supplier management
5:57:05 Dave McLean: , uhm, analysts that are working with suppliers, they've got access to see the supplier list, but imagine you've got a supplier who only is working on something for new model, you might want to classify that supplier as new model only under that hierarchy versus putting them into the, into the mass production
5:57:23 Dave McLean: . branch, or even if they do both, putting them up at the next level entirely. Similarly, if you go a step further down, let's say you have a supplier that is considered a mass production supplier, but they're now working on a part through a PPAP that is specifically for a new model.
5:57:39 Dave McLean: So the supplier is a mass production supplier. That PPAP and all of its associated records are a, uh, new model domain space record.
5:57:52 Dave McLean: Users that would be able to see the supplier are using users that are granted access to the quality control node that lives as the umbrella above these two branches, as well as people that are just, just focused on mass production.
5:58:07 Dave McLean: People that can see just the PPAP would be ones that are given access to access only to the, uh, new model domain space.
5:58:15 Dave McLean: And people that, that can see both sides of that fence are the ones that live at the, you know, parent quality control level or 
5:58:22 Joel Frick (6124): however you'd want to describe it. But we're, they're not in the agreement. Intellect system until the supplier or supplier puts them in there.
5:58:31 Joel Frick (6124): Is that correct? Which would mean we'd already 
5:58:33 Dave McLean: have an account with them. Um, so for the sake of this conversation, I'm not talking 
5:58:39 Joel Frick (6124): about the supplier users. Right, correct. I'm just saying. Thank you. If, yeah, there wouldn't be in this intellect system until a supplier was selected, so we wouldn't have to worry about even somebody here at SIA knowing that, hey, the supplier got it over this supplier.
5:58:58 Joel Frick (6124): They've already been afforded. The parks, it's already been, it's a done deal. 
5:59:06 Dave McLean: At least in so far as, like, the new model, like, I mean, maybe, maybe I'm misunderstanding this here. In the context of, like, pilot part data, for instance, for a new model, new model part, in order for all this to work, the supplier has to have a profile in the system.
5:59:22 Dave McLean: They may not be a, they might not be a mass production supplier yet, but I think in order for them, like, procurement to have bought parts from them to participate in the pilot part.
5:59:31 Dave McLean: data program, they'd already have to be a supplier in Intellects in order for those 
5:59:37 Joel Frick (6124): records to be created. Yeah, the award letters go out before the drawings are issued. Yeah. We're not talking about exceptions here.
5:59:48 Joel Frick (6124): So what I guess what I was saying is there's not really that risk of, hey, somebody might find out that this person got awarded a part because it would already be sent out to the suppliers that, hey, this person Thank you.
6:00:04 Joel Frick (6124): Or you either you didn't get the part or somebody else did, uhm, so I don't that security may not be necessary.
6:00:12 Dave McLean: Yeah, so for for internal data. I think it probably would be, uh, I mean, it would the supplier having a record doesn't necessarily mean that anybody can see the part data that's associated with that supplier.
6:00:26 Dave McLean: We can segment it from there. Yeah, so from the standpoint of internal 
6:00:30 Joel Frick (6124): data, it basically we have a handover slash reveal. Reveal usually is a handover. I think we could use the handover time period is when we lift the bail to mass production on the model change data, PFAS and everything, because we basically are handing over to them at that point set.
6:00:52 Joel Frick (6124): This is what happened in development. So we have to figure out what is that trigger that allows one group to see it, to move it from, you see what I'm saying, in those two domains?
6:01:05 Joel Frick (6124): Yeah, because once it's approved, we're basically handing it over to the mass production people at that point. So unless you have an idea, we have to think about how do we now allow now the mass production domain access to this record?
6:01:19 Joel Frick (6124): What is the trigger? What is the tell that lets it be seen by one versus all? 
6:01:24 Dave McLean: Yeah, I mean, the simplest way to do it is the domain hierarchy in a truncated form. It doesn't have to be the QMS and EMS and all the other values, but at least so far is just new model and mass production domain.
6:01:40 Dave McLean: Make that a field on all these records so that it's a user that is 
6:01:46 Joel Frick (6124): selecting when that happens. So we go back in and change the field on those items? Yeah. Yeah, as long as there's a way to do it.
6:01:56 Joel Frick (6124): And, you know, honestly, that's a good way to track the handover, because we do it on a drawing-by-drawing basis. And they say, okay, the PPAT's approved.
6:02:08 Joel Frick (6124): It's yours now. Do you have anything else to say about it? Yeah, 
6:02:14 Dave McLean: you know, that's good. So when we're talking about it at the level of a part, then that handover happens at the conclusion of the PPAP?
6:02:25 Dave McLean: Basically, yes. Okay. All right, so if the peep has to go. If it's created for a, uhm, you know, a running change to a mass production part, the domain is still just going to be mass production, correct?
6:02:38 Dave McLean: Yeah, 
6:02:38 Joel Frick (6124): running changes will always be mass production, and then the model changes start with us, and then become mass production models.
6:02:44 Joel Frick (6124): Okay, alright, so 
6:02:47 Dave McLean: if we default it to, in the, uh, in either the PartsMaster or Bomex feeds, is there a way for us to tell the difference for each part?
6:03:00 Dave McLean: On whether it's, at the point that it's being created in Intellects, whether it is a, uhm, mass production 
6:03:08 Joel Frick (6124): or a new model part? When we define the, the PPAT, it's got to be a part number. Yeah, we include that part number in the PPAT.
6:03:22 Joel Frick (6124): So if it's never been approved. Yeah, chances are it was model change. I mean, there are exceptions. We'll, we'll create a new part number as a running change, but.
6:03:33 Joel Frick (6124): The vast majority of new part numbers are 
6:03:36 Dave McLean: model change. OK, so when that when it comes into the product, when it comes into the product at first. It comes in without a domain, the part or the part again.
6:03:46 Dave McLean: I mean, like for the very first time that we ever looked to see that part number, it comes into the system and, you know, PPAP gets created through whatever process.
6:03:55 Dave McLean: We'll talk more about that this week. But at that point, the domain of the record is blank. One of the first things that the person running the PPAP is going to do is specify whether this PPAP relates to a new model or a mass production part in that case, because if it's a running change, then you're
6:04:20 Dave McLean: going to specify that. That's going to set the visibility of the record through the duration of the PPAP, but it's also going to kick that classification up to the part itself.
6:04:30 Dave McLean: So that should there ever be a non-conformance, for example. Against that, that the people that can view the record. The non-conformance application should still only be able to see the correct things, so if I write so that if I if in the middle of the will take the.
6:04:50 Dave McLean: Pilot part data failure reports as an example, because those are. A kind of subtype of nonconformance. So if something like that happens to a new model part, while it is a new model part that that nonconformance should probably be have or should have some level of restriction on it, so that only people
6:05:08 Dave McLean: who have access to new model data. Should be able to see it. Then at the conclusion of the PPAP. Assuming that at the conclusion of that PPAP, we're now at a spot where we're going to move it to mass production.
6:05:20 Dave McLean: Then when you change the classification of the record on the PPAP, that should be pushed up to the product or to the part number, which would then cascade down and change the classification of all the related NCRs.
6:05:34 Dave McLean: Now those people who yesterday couldn't see those product part numbers, or failures, now they can because that part is now a mass production part, and they can now see 
6:05:42 Joel Frick (6124): the full history of that part. But let me ask a question. Yeah, can that be tied to revision 
6:05:51 Dave McLean: slash ECG? At the ECS level? Depends on the data we're getting from Bomex. 
6:06:00 Joel Frick (6124): If you can articulate a rule, then yeah. Sometimes, with regard to the record, there is an ECS that is happening.
6:06:08 Joel Frick (6124): To a part number that is model change specific and 
6:06:12 Dave McLean: not a running change. Part number is still going to be that we're going to use the same part number in the new model year.
6:06:22 Dave McLean: Right, 
6:06:22 Joel Frick (6124): but it would be specific. Specific ECS. Can we get that level of detail, or are we still tied to the part number, regardless of ECS?
6:06:34 Dave McLean: I think it's got to be one or the other. It can't be both. You can't have, Okay. You can't have the, Contact.
6:06:40 Dave McLean: Well, No, I suppose you could. I mean, since you're running it off the PPAP. Yeah, 
6:06:50 Joel Frick (6124): because the PPAP is defined by ECS levels attached to those part numbers. 
6:06:56 Dave McLean: Yeah, just, I think the question, though, is that if you have, if that part number is currently a mass production part, you'd probably want to change the logic of what we just said, where if the PPAP for the new model, Cool.
6:07:12 Dave McLean: ECS comes in, when you get to the end of that PPAP, I don't know if, oh, actually, no, other way around, sorry, if, um, any records relating to the PPAP, the new model PPAP that you've created, should inherit the record domain of the PPAP.
6:07:39 Dave McLean: So even though it's related to a supplier, that's a, that's considered a mass production supplier. If there is inspection data, if there's failure data, non-conformance data, or whatever that's related to that PPAP for the new model change that you're doing, then that stuff should be protected using 
6:08:00 Dave McLean: the new this model. 
6:08:03 Joel Frick (6124): And I think I think that's OK. The pilot part data because they can still see the if it's an existing, they still see the ECS's.
6:08:16 Joel Frick (6124): So they know it exists. But they can't see the details, and I think if it's tied to the PPAP, then the then the flag says, OK, now they can see it once it becomes mass production.
6:08:33 Joel Frick (6124): So, if it's not possible to lock it down by ECS level, we, the vast majority is new part numbers. And if that's what we have to default to, we'll fall back to that because.
6:08:47 Joel Frick (6124): If it's. If it's an ECS to an existing part number, they can see it if they want to. Yeah. It's already there in Bowman's.
6:08:56 Joel Frick (6124): If they look for it and they pull it up. They just won't be able to do any NCRs against it because that ECS level.
6:09:05 Joel Frick (6124): Won't be approved 
6:09:07 Dave McLean: yet, yeah. I mean. Part of where I'm hung up on it is is, you know, I said a few minutes ago that like when you when you make that decision as part of the PPAP, we would also apply that decision to the supplier.
6:09:21 Dave McLean: But to the supplier company itself. But let me let me ask the question like do we actually differentiate? It sounds like we don't really differentiate between the supplier company or facility based on whether it's new model or, uhm.
6:09:38 Dave McLean: Mass production. It's the next layer down. It's the part of PPAP 
6:09:42 Joel Frick (6124): data that we differentiate. Yeah, I mean, typically, uhm. It will be different people working on mass production versus model change, but it's some suppliers.
6:09:53 Joel Frick (6124): It is the same person. 
6:09:54 Dave McLean: Yeah, OK, so. If we play that out, if, uh, what I'm really saying here is if we just think of the supplier list, forget all the others, the records associated with them, literally.
6:10:10 Dave McLean: Literally just the list of supplier companies and supplier facilities that are underneath them. I don't think we would differentiate mass production or new model security visibility for a list of, essentially a list of companies and a list of facilities.
6:10:28 Dave McLean: As long as it's 
6:10:28 Joel Frick (6124): within the supplier. Yeah, yeah, we wouldn't, yeah, that wouldn't be a concern inside the supplier. Okay. Yeah. Okay. So 
6:10:35 Dave McLean: then, from that point, so knowing that the domain space doesn't really apply to the supplier parent company or supplier of the facility, it applies at the part PPAP audit, potentially nonconformance, like all of the stuff that's below the supplier or contained within the supplier account, that would 
6:10:54 Dave McLean: allow us to have a situation where, you know, a PPAP is, a PPAP for Part A is classified as new model, while another PPAP for Part A is classified as mass production.
6:11:08 Dave McLean: And those two things can, can sort of work their way through the system. when you get to the end of of the PPAP for the new model one, if you change it to mass production, like, the part is already visible mass production, because you're, you're already making it, so it doesn't actually do anything to
6:11:31 Dave McLean: them. The part, it just exposes the PPAP and all the related activities to the PPAP. Yeah, right. Is there ever a scenario where somebody should not be able to see mass production, but should be able to see, uh, new, new model, or is it if you see new model, you should also 
6:11:51 Joel Frick (6124): be seeing mass production? Yeah, we can, we can see all mass production. Yeah. Okay. Yeah, for a new model, because we use their failure data, in our countermeasure activity, as well as the inspection activity.
6:12:08 Joel Frick (6124): So, if there's something happening in mass production, we want to make sure that isn't going to happen in model change.
6:12:14 Joel Frick (6124): Model change is our chance to reset past failures. Okay. So, I mean, it's in 
6:12:21 Dave McLean: the same way that it was, you know, Associate, which rolls up into Team Lead, which rolls up and rolls up and rolls up.
6:12:27 Dave McLean: It's just a one-dimension hierarchy all the way up. Be kind of the same thing for this. In the same hierarchy, just a separate branch from the top, it could be, uhm, new model at the bottom, so that's the most restrictive classification.
6:12:41 Dave McLean: Or no, I'm sorry, otherwise, uhm, it goes the other way. So it'd be mass production at the bottom, which is the least restrictive of them.
6:12:49 Dave McLean: You'd have new model above that. Thank you. Bye-bye. Which is the more restrictive ones. Anybody who's, you know, most people when they're granted access to supplier-related data would be granted access at the mass production level of that branch of the hierarchy.
6:13:03 Dave McLean: So that's what they see. They're only seeing mass production. If you, your access is elevated, it. To the new model one that would carry with it the ability to see the mass production data.
6:13:15 Dave McLean: Yes, yeah, and I think once something is considered mass production, like, if we think of the PPAP stuff. If that, uhm.
6:13:23 Dave McLean: If that PPAP was classified as a mass production one when it was created, then when you get to the end of the PPAP, there's no difference.
6:13:31 Dave McLean: You're not changing the classification. You can't go from mass production to new model in that case, so we don't even ask.
6:13:38 Dave McLean: But the flip side is true. So if we start it as a new model PPAP, then when we get to the end, we get the option now to say, do you want to switch this to mass, this, this 
6:13:48 Joel Frick (6124): PPAP to mass production? Yeah, yeah, cool. Summarize it nicely. And the ability to do 
6:13:55 Dave McLean: that in mass would be great. Like, how many? How many at a time? 
6:14:00 Joel Frick (6124): Uh, well, a major model will have 500 and some PPAPs. A minor model will have, Oh, I see.
6:14:12 Joel Frick (6124): So, in other words, if it's not possible to do that, we would do it on an individual basis at the time.
6:14:22 Joel Frick (6124): But it would be great if we could do that in mass and say, okay, these are all of the PPACs for this model.
6:14:31 Joel Frick (6124): We are now handing this model over to mass production and here, they're yours. Versus piecemeal, just being able to say, it's a packet, here you go, and now you guys get access.
6:14:42 Joel Frick (6124): Yeah. If we can. Yeah, if we can. Otherwise, it would fall back on the engineer at the point of PPAP approval, flipping that switch and saying, okay, this is now mass production.
6:14:54 Joel Frick (6124): Yeah. 
6:14:54 Dave McLean: Because he's in there already, right? Yeah. Yeah, on sort of an individualized basis. Yeah. Would those, like, if, if, uh, you said 500, for example, so if, if 50 of those were done well before the remaining 450, would they leave those PPAPs open until D-Day, basically?
6:15:16 Dave McLean: No. We close the PPAPs as soon as we can. Got it. So, therefore, the act of closing it does not always mean that you're changing the classification of it.
6:15:26 Dave McLean: That just becomes an option at that stage. Correct. Got it. Okay. Okay, so this will somewhat be a function of the PPAP conversation, but it sounds like what's needed is the ability to almost change the status of the new model itself that all these PPAPs relate to.
6:15:44 Joel Frick (6124): Yeah, so it's okay, this model is now, we've now hit SMR. It's now GLP, and it's now mass production. Yeah, and so if 
6:15:52 Dave McLean: each of these, if you've got 500 PPAPs, it almost sounds like, you know, there might be an argument made for having a, like, new model summary that sits above all of those PPAPs.
6:16:02 Dave McLean: That'd be awesome. And it might, it might That'd be awesome, he said. Okay. Okay, so we'll, we'll play that out when we start talking PPAP a little bit, but like, I think that, to me, that would be the thing.
6:16:15 Dave McLean: So if you had your 500 records, if 50 of them were done three months before all the others, or six months before the others, you're not asking them on the individual PPAP to change the, uhm, change the classification.
6:16:28 Dave McLean: You might get through all of the PPAPs before you, you could then go up to that model summary and say, OK, this model, we're moving this one to mass production.
6:16:36 Dave McLean: Apply this. Apply that change down to all of the PPAPs, which then connects it through to all the 
6:16:41 Joel Frick (6124): parts that they were related to. I think that also saves you if you missed one, knowing you closed the PPAP, if you didn't change it to mass production, then.
6:16:51 Joel Frick (6124): This, this group update will get you to grab it along. Okay, keystroke, keystroke error versus automating it. Yeah, yeah, for sure, for sure.
6:17:02 Joel Frick (6124): Because it's not a matter of if, it's a matter of when some of you forget to do it. 
6:17:06 Dave McLean: Would, would there be a scenario where that classification doesn't work? A change for all of those PPAPs would happen before all of them are finished?
6:17:13 Dave McLean: Yes. Yeah. Oh yeah, yeah. Okay. Okay, so the, the classification change for the model doesn't necessarily, it's not necessarily bound to the workflow of the individual 
6:17:24 Joel Frick (6124): PPAPs contained within it. Right. There, there are cases where we will have stragglers, uhm, for whatever reason, whether it's due to a late engineering change, or the supplier didn't get everything done.
6:17:37 Joel Frick (6124): But once we get to that stage, where we're supposed to flip that switch, Thank you very much. We are very closely tracking those stragglers with, uh, a lot of white-hot 
6:17:47 Dave McLean: attention. Okay. Okay, yeah, that, I mean, that sounds doable, uhm. I think that also probably, ,creates a little bit better control over who gets to decide to make that classification change, given the stakes of what you're describing it as, like, I don't necessarily think that that's something that
6:18:07 Dave McLean: the individual engineer who's responsible for each PPAP would make that, that call. I think that's 
6:18:12 Joel Frick (6124): more, it's more, it's a bundle, right? And that, that actually accurately describes how we do it. We have a formal handover process at the management level that says, I am handing this model over to mass production.
6:18:26 Dave McLean: So, and who, who is the I in that statement? For, for a given one, like, 
6:18:32 Joel Frick (6124): well, it was at the manager level, but now that we're getting folded into SQA, it would probably be at the product manager level.
6:18:41 Joel Frick (6124): I think now, so we, we weren't a separate department, we're going to get folded in to SQA, so instead of being group leader, ah, manager level, it will probably either be group leader or product manager level, but it, it's definitely at a management level.
6:18:59 Joel Frick (6124): Got it. 
6:18:59 Dave McLean: The official handover. Okay. Then, yeah, I would say, you know, I think the control for it is as, as the PPAP records get created, as we get new ECS, ah, records from Bomex, if you say that it's a new model, like, if you classify that PPAP as a new model, then the next question that it's going to ask
6:19:19 Dave McLean: you is, great, what, what new model summary 
6:19:21 Joel Frick (6124): does this relate to? And that's exactly what we do right now. We will, we will tag that and say, this is the model this PPAP is tied to.
6:19:30 Joel Frick (6124): That is, that is one of our 
6:19:32 Dave McLean: flags in the PPAP. Got it. For my own information here, when we say new model, that that's going to be more at the level of, like, a model year and a specific vehicle forest or something like that, as opposed to a specific trim level.
6:19:47 Dave McLean: Or is it? The trim 
6:19:48 Joel Frick (6124): levels are usually similar. Submodels within that model year. Yeah, got 
6:19:56 Dave McLean: Got 
6:19:58 Joel Frick (6124): Yeah, that should be fun. OK, let's get scooping, yeah. Alright. 
6:20:06 Dave McLean: How much of everything we've talked about today should be visible to the supplier themselves, for their 
6:20:11 Joel Frick (6124): own company, obviously? The supplier should be able to see it. Uhm, I don't think there's anything within what we talked about today that I wouldn't want.
6:20:22 Joel Frick (6124): The supplier to be able to see, and in fact, one of the things we tell them to do is, uhm, rely upon previous records.
6:20:31 Joel Frick (6124): Like, if we agree that certain stuff can be carried over, they should be able to see a previous record. And either, we tell them to keep it on hand, but most of them don't.
6:20:43 Joel Frick (6124): So they have to download the previous record to upload to the new, uhm, if it's related. But I, I can't think of anything where we would be able to restrict that within the supplier.
6:20:57 Joel Frick (6124): What about there? 
6:21:00 Dave McLean: So let's let's work our way backwards. 
6:21:03 Joel Frick (6124): Subs underneath them. How does that work? I mean, for us, it's only from the standpoint of depot codes. But even then, because of some of the issues we have with depot codes not being right, most suppliers who are, who have people that are in model change, they have access to all their depot codes.
6:21:24 Joel Frick (6124): So that they can see what is going to be in another depot code, even if it's not assigned to them.
6:21:33 Joel Frick (6124): Because, like, right now I have one today that's assigned to Heartland Greencastle, but I need Heartland Lafayette to work on it.
6:21:40 Joel Frick (6124): I'm like, well, that's a lot of We can still see it. We have access to all the depot codes. Did you hear that, Dave?
6:21:46 Joel Frick (6124): Yeah, 
6:21:46 Dave McLean: yeah. So if you're a parent company user, you should see the data for your constituent depots or facilities underneath it.
6:21:54 Dave McLean: But if we get more specific about the word data here. So starting kind of in reverse from how today's gone.
6:22:00 Dave McLean: Pilot part inspection failures, so the nonconformance is to come out of pilot part inspections. They should be able to see that.
6:22:08 Dave McLean: Yes, or at least they should be able to see it once you have sent it to them. Great. If, if, uh, in the initial review, the engineer says, nope, you know what?
6:22:17 Dave McLean: We're not going to send it to the supplier. What we basically need to be filtering out is, uh, that we should not be allowing them to see the record until and after it gets to the supplier response stage.
6:22:29 Dave McLean: Yeah. Okay. Um, the shipment data that they're filling out, clearly they're going to see that because they're the ones filling it out.
6:22:39 Dave McLean: Same with the pilot part data log, the section of the form where they said, hey, I, you know, I've sent you 25 of these.
6:22:45 Dave McLean: That's part part. That's part of the shipment. What 
6:22:48 Joel Frick (6124): about the actual inspection You mean what our people fill out when they do the inspection? You got it. I don't see a need for the supplier to see that, 
6:23:05 Dave McLean: unless there's a concern. In which case they're going to see the failure report. 
6:23:11 Joel Frick (6124): They're going to see the failure report, right? 
6:23:13 Dave McLean: OK, OK, cool. So they're going to see the shipment. And the data log that was filled out. They're going to see the inspection failures that came from all of that.
6:23:23 Dave McLean: Uh, they're not going to see the inspection or the related checklist, uhm, parameters. They're not going to see the pilot part program that you guys used to set that up.
6:23:37 Dave McLean: And we'll talk about PPAP and build events when we get to PPAP, so I won't go too far into that one in this moment.
6:23:45 Dave McLean: What about the list of parts? Like, just, like, is there value? Is there, is there a reason why or why they shouldn't see the list of parts, uh, and therefore the, uh, part relationships and potentially other supplier relationships that 
6:23:59 Joel Frick (6124): are associated with those parts? No, uhm, they should all know if they are getting SAP from another supplier. Yep. They, they will know who that supplier is.
6:24:11 Joel Frick (6124): We don't hide them. Got it. 
6:24:14 Dave McLean: And I guess that makes sense. They're literally on the name of the box or the shipment or whatever the case is.
6:24:20 Dave McLean: And if they're sending it to another supplier, it's the same thing. They've got to know where to send it. Yes.
6:24:24 Dave McLean: They know who the secondary customer is of that. Yes. But if they're, if they're thinking that they need to, they should be able to see, like, if they wanted to use Intellects to be able to look up what parts we supply to Subaru, like they're, that's, that's not the use case.
6:24:39 Dave McLean: They've got to maintain their own ERP systems and production systems and finance systems to do that. So in this case, the fact that we're storing a list of parts organized and related to individual suppliers, that is more to feed data into the other workflows, like the pilot parts stuff that they have
6:24:58 Dave McLean: to fill out, which really means that, as we play this out, out of all the stuff we've talked about today, the only things that they really should be able to see are the shipments, and the components of the shipment that they fill out, as well as the failures that come back out of the inspection.
6:25:13 Dave McLean: Everything else, completely hidden from them. Yeah, as far as what we talked about today. 
6:25:18 Joel Frick (6124): Cool. Cool, 
6:25:21 Dave McLean: yeah, I'm sure PPAP will get more interesting for some of that stuff tomorrow when we start getting into all the tasks, and how much of the PPAP they should be able to see.
6:25:28 Dave McLean: So we'll, we'll fill in the blanks a little more with that one. Okay, beyond that, when we look at the, some of the, the integration points that we've talked about, the, the orange objects in the data model that we were looking at, and the green ones from part master.
6:25:43 Dave McLean: To me, those records are, because those are going to be feeding the part table in intellects automatically, the actual integration endpoints, those will be hidden from anybody except admins.
6:25:58 Dave McLean: As a general rule, you shouldn't need to see the Bomex record in intellects, because it's feeding and, and, uh, and creating or generating another record here.
6:26:08 Dave McLean: Now, the drawings that are associated with the Bomex record, you probably want to see that, because that's, that's meaningful. Uhm, but, since everything else, the part record itself, the part relationship, all of those data points, we're feeding those into fields on the part object.
6:26:23 Dave McLean: I don't necessarily think there's any reason that a user would have to be able to backtrack into the actual integration tables that are being used to facilitate the integration.
6:26:32 Dave McLean: Yeah, I agree. That's the way it 
6:26:35 Joel Frick (6124): is currently. Only some of us can see the part table in the background that feeds into our NCRs and PPAPs and everything else.
6:26:45 Joel Frick (6124): Right, cool. 
6:26:48 Dave McLean: Okay, then that covers security then. That's fairly straightforward. Again, we'll create a template security model. The general rule is for SIA users that have access to some component of this data, there will be Thank you.
6:27:04 Dave McLean: Thank you. You know, users that have the view access to it. So, you know, people that can go in and view the list of suppliers, view the list of PPAPs, view the list of pilot part program.
6:27:14 Dave McLean: But in theory, if they were just in that group, they wouldn't be able to do anything else with it unless they were assigned to a task.
6:27:20 Dave McLean: There will be others that have create permission to it, which is actually where you start getting to more of the power user stuff.
6:27:26 Dave McLean: So, for example, people that can create a new PPAP, I imagine, are relatively limited in terms of who has that authority.
6:27:35 Dave McLean: And even then, it's, The drawing is going to create it most of the time automatically, if not all of the time.
6:27:42 Dave McLean: People who can create the pilot part program, since that's generally, by the sounds of it, going to be created as a first or initial step of a PPAP.
6:27:52 Dave McLean: The number of people that can do that are limited to the ones that are running a PPAP. 
6:27:59 Joel Frick (6124): Yes. 
6:28:00 Dave McLean: Right, OK. Same thing, editors, like people that can dive in and out of these records to modify them. Maybe. It's going without actually being responsible for them, going to be relatively limited.
6:28:12 Dave McLean: It's going to be your power users, but those are the ones that are going to kind of keep the wheels greased when somebody is out on vacation or somebody can't get to their laptop, but we need somebody to click that button, you know, supplier to the left of me, executive to the right of me.
6:28:25 Dave McLean: Somebody's got to click submit. It's the the editors that are the ones that are going to be able to do that, and they're they're relatively limited in number.
6:28:35 Dave McLean: Yes, OK. Cool, should there be any restrictions? Restriction for your internal folks beyond new model and mass production on, like, product categories or anything like that, or part categories, part portfolios?
6:28:52 Dave McLean: Is anything like that a factor where? 
6:28:56 Joel Frick (6124): We generally don't have those kind of restrictions. Yeah, the only, the only thing where that really comes into play is in the mechanics of the PPAP approval, where we've got the important and safety parts have a secondary liability.
6:29:12 Joel Frick (6124): Level of approval at the management level. OK, that's a workflow. Yeah, yeah, and that's a workflow thing that's not related to security.
6:29:21 Joel Frick (6124): Yeah, awesome. 
6:29:25 Dave McLean: Cool, OK. Awesome. Last one for now. Data migration. So, you know, we have. We have a couple of integrations in scope to build our list of parts.
6:29:41 Dave McLean: I just can't actually remember off the top of my head what our scope of work says, so. Before I open my big fat mouth on this topic, maybe we should make 
6:29:49 Joel Frick (6124): sure whether it's in scope or not. I'm going to guess loop one of data migration for. And that's not here to keep you from watching.
6:29:59 Joel Frick (6124): Because we have to have. Something for anything that's currently in production. And what was our 10 year record retention? Is that where we're at?
6:30:09 Joel Frick (6124): I can see here for just, well, here's PPAP. What are you talking about? PPAP for migration? No. I don't think we had any, uh, data migration for file part data.
6:30:25 Joel Frick (6124): Oh, file part data specifically. Yeah, he's looking at it too. For product 
6:30:34 Dave McLean: management, which is the piece that's going to store the and receive all the data from Bomex and PartMinister. There's no historical parts data imported, but the end of the day, it's really sort of up to the user.
6:30:49 Dave McLean: The integration side of this, that if you wanted to blast. All, let's say all parts are all active parts or whatever.
6:30:56 Dave McLean: The case is all parts with a specific status into the system. Then you're free to do so. It's it's not really a legacy migration on our part, it's just.
6:31:05 Dave McLean: Pushing data through the feed in order to create, in order to pre-create the records that need to be in there.
6:31:13 Dave McLean: Depending upon when we do this, 
6:31:14 Joel Frick (6124): there's going to be a certain number of ECSs out there for active model change. This is where we have to go back a certain amount and push those over.
6:31:25 Joel Frick (6124): Yeah, that would be us. You know, there's nothing in here we're going to need to 
6:31:27 Dave McLean: Okay, so we'll want to factor that in when next time we talk to Nathan is making sure that we have a defined strategy to cast.
6:31:37 Dave McLean: Whatever filter. He needs to be able to send through that data when when the code is ready to go. And then.
6:31:53 Dave McLean: Pilot part data. No historical pilot part data will be imported. Nope. Cool. Cool. That makes sense. It will.
6:32:07 Dave McLean: Because it's an offshoot of the PPAP process, or at least the starting point for it, when we get to PPAP, there is a one-time import of active and historical PPAPs up to 3,000 records, or 3,000 closed records.
6:32:23 Dave McLean: to be sent through. I'm gonna get to the PPAP, imported data will be limited to core PPAP objects and tasks.
6:32:34 Dave McLean: Yeah, so taken as is, uhm, the migration for PPAP data would allow you to create a bunch of PPAP records, or, or it'll, it'll let us pre-seed the system with any closed-out PPAP records.
6:32:45 Dave McLean: Uh, we'd need to close any, er, we'd need to open new ones for any new records that are in progress.
6:32:51 Dave McLean: Uh, but as far as pilot park data is concerned, we would not be migrating any of that in. The first time a pilot park record gets added to the system would be the, you know, essentially the first PPAP record that gets created 
6:33:04 Joel Frick (6124): that requires it. Yeah, and would we have the ability for any of the open PPAPs that get transferred to create?
6:33:12 Joel Frick (6124): That. Pilot park. Upload. 
6:33:17 Dave McLean: Instance. You would, albeit second bullet point of my statement of work says that we're importing 3,000 historical records closed and completed.
6:33:28 Dave McLean: Yeah. Closed and completed. 
6:33:29 Joel Frick (6124): We would not do that. But it would be only be the open ones. But open ones are not in scope.
6:33:36 Joel Frick (6124): We can call it closed. How many, how many, how many are you talking about? Well, these are all closed. Can you put them?
6:33:47 Joel Frick (6124): So right now, CD6, BX3, TG8, we just got our first CC7. I don't expect that we will have anything for 25 PF until about March.
6:34:00 Joel Frick (6124): Which is when the same drawings are going to start releasing. Because once drawings start releasing, that is the trigger for the PFAP record.
6:34:08 Joel Frick (6124): So, does it really matter what it's called, Dave, as long as it's less than 3,000? 
6:34:16 Dave McLean: No, it does. Importing open records into a given state is significantly more complex. Okay, great. Whereas, like, for example, when you import it into the closed stage, all the logic that fires along the way, as the PFAP progresses, you skip that, because it's meaningless.
6:34:35 Dave McLean: You're just sending it into the end. If you need to send it into the second stage, or the third stage, or the fourth stage, or the third stage, but with half the tasks open, some of them are manipulating logic on the PPAP record, you have to account for all of those variables.
6:34:49 Dave McLean: Which creates a really, really big shift in terms of the work and the type of work that's needed to get that data in.
6:34:57 Dave McLean: One of them is just a bulk load. The other is, we actually have to build logic around legacy records that 
6:35:04 Joel Frick (6124): are being migrated in. And you don't think you'll have that many anymore, do Well, our, so for example, our CD6 DX3 TTA That is March.
6:35:24 Joel Frick (6124): We're expecting CC7 D-84 to be minor. We're hoping it'll be minor other than Tier 4 if that moves forward, which we're going to find out tonight.
6:35:34 Joel Frick (6124): Uhm, but we can just move that one up. Yeah, and that was the thing. When we migrated from NextPrize to IntelliQuest, we started off saying, okay, we're only going to start creating new ones in IntelliQuest.
6:35:47 Joel Frick (6124): And we're going to keep everything still open in NextPrize, finish it out in NextPrize. Yeah. And then we hit a point where it was like, okay, now you're going to have to create new ones in IntelliQuest.
6:36:01 Joel Frick (6124): So we did have that transition, but then we reached a point where it's like, okay, you're done. The system is gone.
6:36:09 Joel Frick (6124): So, is there any, Is there a way that you can teach us to move a closed one over that's closed outside of the mass upload?
6:36:16 Joel Frick (6124): Would that be something you could teach our new system administrator 
6:36:22 Dave McLean: at some point? To do, like, so, load your closed ones here. Historically, but run out the clock on the ones that are open as of go live and then migrate those ones over.
6:36:32 Dave McLean: Yeah, yeah, yeah, we can. We can share the templates with you in the mappings. Uhm, so you would basically just be populating those templates with the data for.
6:36:42 Dave McLean: For 
6:36:42 Joel Frick (6124): each of the closed records. OK, yeah, it should just be, well, it's not going to work right now. It looks to be minimal.
6:36:50 Joel Frick (6124): Like below the, below the 50, even probably. Yeah, depends on what happens with tier 4. Yeah, yeah. Yeah. When we say 
6:36:59 Dave McLean: minimal, how many PPAPs would that be? 
6:37:14 Joel Frick (6124): There's some electrical components that change, you know, every year because of, you know, some things that have to happen by regulation, right?
6:37:21 Joel Frick (6124): We've got these emissions, so there's a handful. I don't know, somewhere between 20 and 50 for each one of the models you spit off.
6:37:29 Joel Frick (6124): But, yeah. 200, I think, would be a very good estimate, under 200, and I would say probably closer to 90.
6:37:37 Dave McLean: Yeah, yeah. Okay, you're still at a volume, though, where it's worth doing a bulk load. The reason I ask is at the end of I would say, like, honestly, guys, you're, you're better off just clicking through the screens, and it will take somebody the better part of an afternoon to do it, but, like, doing
6:37:57 Dave McLean: it that way is the safest way to do it, uhm, from, uh, just, eh, you know. You're, you're following the logic as we've defined and tested it by that point.
6:38:06 Dave McLean: Loading it in carries with it a little bit of risk if something, you know, you get a reference wrong or a number wrong in a, in a relationship to a part or something like that, you're now possibly unknowingly applying a PPAP to the wrong part.
6:38:19 Dave McLean: Uhm, but for 200, like, you know, even, even 100-ish, it's probably still worth it, because otherwise, you know, you imagine how long it would take you to click through all the screens for even one PPAP, if you had to do that 90 to 100 times, that's going to take somebody a couple of, couple of weeks
6:38:35 Dave McLean: . potentially. 
6:38:36 Joel Frick (6124): Yeah, yeah. Say nothing of the fact that it would be boring. Yeah, welcome to SIS, it's like funny. No, it'd be the individual engineers, you know, that do PPAPs.
6:38:48 Joel Frick (6124): What, what is our migration? We'll, we'll figure that out. They'll, they'll migrate it. Dave can answer that better, but it's more along the lines of, once we get stuff going, right, so it'd be springtime, right, anywhere in March, it should be.
6:39:06 Joel Frick (6124): Yeah, yeah. Yeah, it's got to be after the build 
6:39:09 Dave McLean: and test phase. We'll, we'll likely, I mean, we'll, we'll, part of the reason for asking about it now is to understand the sort of broad boundaries that we're looking at.
6:39:19 Dave McLean: We'll likely revisit this again during the build out, solely from the point of view of trying to start to map out what the templates look like, just to get a sense of, of, you know, give you guys a sense of what you're going to have to populate.
6:39:33 Dave McLean: Because it can take some time to develop all the extractions that are needed, but we won't actually be loading them in.
6:39:39 Dave McLean: Typically until sometime either during or after user acceptance testing. So, 
6:39:45 Joel Frick (6124): I think from that standpoint, uhm, we should expect to migrate CD6, DX3, TGA as closed PPAPs. DX3R is a, uh, June PPAP, so it's going to be our first transition ahead of CC70W4-TF9.
6:40:12 Joel Frick (6124): have 25 PF, even though we're going to have drawings released, I think we need to hold off creating any records and plan to create all 25 PF within the system and don't kill ourselves.
6:40:28 Joel Frick (6124): Knowing we're going to have drawings released in the spring, but hold So, minimize it. PF3R, try to close those out and IntelliQuest if they don't shut us down.
6:40:44 Joel Frick (6124): And if we're forced to, we'll, you know, create new records, yeah, because, again, our due date isn't until June for the XPR.
6:40:52 Joel Frick (6124): Yeah. Minor CC7W14F9. Shut down. Should be very few, TMI especially, because TTA is a major minor.
6:41:05 Joel Frick (6124): Yeah. Well, the other meeting we'll have to talk about is, how do we introduce this to the suppliers without it getting back to Intel?
6:41:14 Joel Frick (6124): Oh, we'll leave that. Yes, we'll just, you know what I mean. Yes. Intel Equestria is also going to want to marry it.
6:41:22 Joel Frick (6124): Why, why is it going to slow down on the data here? Hopefully they just think that we said it wrong.
6:41:31 Joel Frick (6124): We said, we said Intel Equestria. Yes, 
6:41:33 Dave McLean: sir. Okay, just running through my list here.
6:41:46 Dave McLean: I think we got got everything. Talked about NCR initiation, which we're going to do through a separate failure type, purpose applicability, frequency plans.
6:42:00 Dave McLean: We're not doing QC new model and SQA routing. It's a security. Function. Talked about inspection, tolerances, or guardrails, pass fail logic, disposition on the failure.
6:42:16 Dave McLean: Fallback, we're not doing offline. I love hard data. Infrastructure, inspection requests, samples, yep. We are good. 
6:42:28 Joel Frick (6124): So tomorrow, do you expect anybody besides the supplier You don't need IT or. Any other? No, we we've covered the integration 
6:42:41 Dave McLean: stuff for today. I suspect once we get into it, we may have. We may uncover some additional needs with respect to the to the integrations we talked about today that will circle back to Nathan with.
6:42:52 Dave McLean: But I think we can do that after the fact. I think we've got a good enough understanding of where we're trying to head with the integrations that we can focus just on what's within the box of intellects for for PPAP.
6:43:04 Joel Frick (6124): Yeah, I just turned it if we needed him. I was going to try to grab some time, but we're good.
6:43:08 Joel Frick (6124): I would have talked to Jamie if I had to play here. Yeah, it's possible tomorrow. You know, Roy is on.
6:43:15 Joel Frick (6124): He's invited, but maybe he's on a tournament Administrative note for tomorrow, Dave. We have an annual fire drill. So it's from 1240 to 1 and then people will have to walk.
6:43:29 Joel Frick (6124): So, uhm, start lunch at 12, but I would say we won't be able to start up 
6:43:35 Dave McLean: until 10 after 1. No problem. No problem. Give me some, give me time to go for a little walk around my house too, so I'll pretend, I'll 
6:43:43 Joel Frick (6124): pretend that's a fire drill here too. Go have 
6:43:47 Dave McLean: some Timbits. That's it, yeah. Get my, get my vest on, go to the muster station. Love it. All right guys, well then I will see you all tomorrow.
6:43:57 Dave McLean: I hope everybody has a great evening and if anybody thinks of any gotchas, any curveballs or anything like that, let me know, but otherwise I think we've got, I think we've got a really great starting point here.
6:44:09 Dave McLean: All right. Thank you. Thanks very much. Thanks Have a good one. All right,
