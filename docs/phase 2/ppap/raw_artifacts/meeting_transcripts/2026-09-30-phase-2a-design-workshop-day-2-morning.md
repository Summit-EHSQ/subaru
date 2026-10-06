---
meeting-title: "Subaru | Summit EHSQ | Phase 2A Design Workshop Day 2 - Morning"
meeting-date-time: "2026-09-30T09:30:00-04:00"
timezone: America/Toronto
participants:
  - Amanda Raver
  - Dave McLean
  - Emma Lister
  - Joel Frick
  - Keith Freeman
  - Luke Filippo
  - Rick Redmond
  - "Heather (surname not captured)"
  - "Pete (surname not captured)"
artifact-type: meeting-transcript
---

0:00:00 Emma Lister: We are being supervised. 
0:00:04 Dave McLean: Uh, Joel, you guys all in the room over there? Yeah. 
0:00:09 Emma Lister: Perfect. You're drinking an energy drink this morning, Dave. I 
0:00:15 Dave McLean: ran out of coffee beans. 
0:00:18 Emma Lister: Oh no! Tragic. Yep. How does one run 
0:00:22 Joel Frick (6124): out of 
0:00:23 Amanda Raver (6414): coffee beans? That just seems wrong. You're gonna make me say it 
0:00:27 Dave McLean: here. That was a big inhale. Uh, so, my mother-in-law and sister-in-law went to Hawaii a couple weeks ago, and they brought me back Kona beans, which are delicious, and wonderful, and luxurious, and as a result, we didn't, we took our leave.
0:00:48 Dave McLean: regular coffee beans out of our order this week, not realizing that the bag that they brought us was only a half pound.
0:00:55 Joel Frick (6124): Oh, yeah, that, that definitely was heavy. So I have 
0:00:58 Dave McLean: plowed through that in about 48 hours. Yeah, so today we're, today we're going for having a Pink Slush Alani. All right!
0:01:08 Dave McLean: A Canadian formulation, though, which is less, less caffeine than the American one. 
0:01:12 Joel Frick (6124): Okay. Probably more real sugar than if 
0:01:15 Dave McLean: it's not American. Uhm, no sugar. 
0:01:21 Joel Frick (6124): No sugar, 
0:01:21 Dave McLean: okay. 10, 10 calories. 
0:01:24 Amanda Raver (6414): So what's the caffeine content of the Canadian version? 160 for us. No way. 
0:01:30 Dave McLean: Yeah, we're, I'm sorry, 140, my bad. Uh, and yeah, yours is 200. We have, uh, we have a connoisseur in the office.
0:01:40 Dave McLean: Uh, Ethan, Ethan, uh, puts that stuff away. Like he's got, he's got his own case of, uh, Celsius in the Costco order for the office every week.
0:01:51 Dave McLean: But, uh, it's one of the first things we does whenever he gets on site is hit a target or something to go, go get a case of eight of them for the week.
0:01:59 Dave McLean: But 
0:01:59 Emma Lister: he really enjoys the American ones because they have more caffeine than we have in them here. Like it's the same brand, it's the same drink, but the US version is higher caffeinated.
0:02:09 Emma Lister: Like, 
0:02:10 Dave McLean: extra. So, it's funny when you get like three or four of them in the day. I mean, it can't be good for him, but he's buzzing around the office 
0:02:21 Amanda Raver (6414): like a humming bee. Yeah. He probably doesn't know. The output 
0:02:26 Dave McLean: of like five people, yeah. That's it. That's it. He was saying when we were in L.A. last week that, uh, there's flavors, too, that we don't have because of the formulation.
0:02:38 Dave McLean: So, he found, uh, he said it was like a lemon flavor. Lemon sorbet or something like that flavor that was really good.
0:02:44 Dave McLean: He was, he was all over that all week. So, anyway, uh, is there anybody else we're waiting on, Joel? Nope.
0:02:54 Joel Frick (6124): Yeah, we're all set. 
0:02:55 Dave McLean: Wonderful. Okay. I'm just going to pull open the agenda here. Just give me a second. Put it up on the screen.
0:03:08 Dave McLean: It's on yesterday's. 
0:03:13 Joel Frick (6124): Reminding me that I came directly here from the 
0:03:29 Dave McLean: Pull in here. OK, let me know when you guys can see my screen. You should see a PDF open within an email chain.
0:03:41 Dave McLean: Yes, yes, perfect. Hey Rick, how's it going? 
0:03:44 Joel Frick (6124): Fine, how you doing? Good, good. 
0:03:48 Dave McLean: Just taking some flack for my choice of beverage this morning. No coffee in the house. OK, so today today's session is focused on the PPAP process.
0:03:58 Dave McLean: For those who are joining us for today and who may be are stepping into the project for the first time, or it's been a while since we touched base at the blueprinting session last, or earlier in the year, probably early summer, the project scope for phase 2 is to implement a suite of quality applications
0:04:17 Dave McLean: , centred around supplier relationship management and a number of other processes that interact with suppliers. A key component of that is the PPAP process, which will be layered on top of Intellix's PPAP application, a standard primary application.
0:04:34 Dave McLean: We will make some Subaru-specific changes to, which is what we're here to uncover today. Today's session follows hot on the heels of a session we did yesterday on pilot part data, and a couple of integration points that are important.
0:04:50 Dave McLean: Are likely relevant here as well, specifically integrations with Bomex and PartsMaster that we think we've got a general architecture setup that should feed data that we can leverage here where we need it.
0:05:03 Dave McLean: But really, today's focus is. I'm going to characterize it somewhat as, on the one hand, it's you guys taking me to PPAP school, giving me a real sense of how PPAP works within Subaru, what are some of the challenges that you've historically faced, and what, you know, I know we drive a lot of this a 
0:05:22 Dave McLean: lot of these processes through IntelliQuest, and so along the way, what I'm also looking for is a healthy dose of, hey, these are some of the things about the technology stack that we've used historically that, uh, that don't necessarily work for us.
0:05:35 Dave McLean: I also seem to remember a very large spreadsheet that was floating around. A spreadsheet template. I might be getting that mixed up with another process, but, uh, along the way, if anybody needs to share a screen to animate a point or animate, uh, you know, some sort of concept or content that we need
0:05:52 Dave McLean: to be factoring into IntelliQuest, then by all means, we can do that. We can relinquish control of the screen, but otherwise, what I'll be looking to do is, uh, really to step through the PPAP process.
0:06:02 Dave McLean: What does it look like from cradle to grave? What are all the sub-components and sub-tasks for it? Where is it that Subaru employees will interact with those processes?
0:06:11 Dave McLean: Where is it that, uh, that the supplier will be interacting with it? And we'll, we'll start to dig into what's expected for each of those.
0:06:20 Dave McLean: As far as the agenda is concerned, uh, I'll preface with the same, uhm, same preface that I used yesterday. Uhm, I used this, uhm, this is a list of topics, uhm, and so if we, if we kind of push and pull a little bit through and, and emphasize certain areas out of place, that's fine, uhm, the, the goal
0:06:35 Dave McLean: is to get to the end of the road here by the end of the day, uh, make sure that we have all of our, all of our requirements documented and, and captured, uh, whether we, we spend the sort of amount of time that I guessed we would spend when we were, when we were structuring the agenda or not.
0:06:50 Dave McLean: So, if people do need to drop in and out of the meeting and, and have some critical information or, or needs or requirements with respect to any of these I would just ask that we call it out.
0:07:00 Dave McLean: We've got a larger group today, so I expect we'll probably have people cycling in and out a little bit. Questions?
0:07:10 Dave McLean: Awesome. The only housekeeping note on, uh, with respect to lunchtime, Rick, let us know that there's a fire drill. Uh, so, sorry, I'm going to sneeze.
0:07:20 Dave McLean: Nope, apparently not. That's going to come back and bite me later. Um, Rick let us know yesterday that there's a fire drill, uh, on on-site for you guys today.
0:07:32 Dave McLean: So, uh, as far as when we start up again after lunch, I'll take our cue from you guys once everybody's settled in and back, uh, back inside.
0:07:39 Dave McLean: Um, so, you know, again, I suspect that other than maybe just, uh, starting a little bit later after lunch, I don't think there's that'll make a difference for us, but, uh, again, just calling it out here so that we'll, we'll make sure we factor that in through the day.
0:07:55 Dave McLean: Okay, questions? Awesome. Okay, let's start out. Um, this, this first segment is really going to be, um, kind of you guys primarily talking me through PPAP through the existing assets that you use, uh, take me through an example, ideally a simplified one that we can use to, to get through.
0:08:12 Dave McLean: What I'm looking forward to this section, session is, or this segment of the session is to get a sense of, of what initiates a PPAP.
0:08:22 Dave McLean: And I think we got some of the answer to this from our discussion on the Bomex integration yesterday. Where does it interact, or where does it connect to the, uhm, pilot part data process that we discussed yesterday.
0:08:35 Dave McLean: And then what comes further downstream from there? Once we've really kicked off and started the pilot part, or sorry, the production part approval process, what are all the steps that are needed?
0:08:44 Dave McLean: And who's interacting with them? Who's accountable? Who's responsible? Who's informed and notified? And so on. Who on your end would be the best person to tell us a tale this morning?
0:08:57 Dave McLean: You want to tell the tale or 
0:08:57 Joel Frick (6124): you want me to? I think that you qualify as PPAT expert. Mr. PPAT. That's right. Okay, uhm, so. As we talked yesterday, our PPATs are driven primarily by an engineering change that's released to a drawing.
0:09:17 Joel Frick (6124): So and those usually fall under two categories. It's either something that's going to change. I'm going to go through the existing part, or it's a new part that's going to be introduced for a model change.
0:09:30 Joel Frick (6124): But it all starts with that Phonex ECS release that says, okay, SIA, here's this change. We need to validate this change before we use these parts in mass production.
0:09:45 Joel Frick (6124): So the engineer responsible for that part, or supplier, that's one difference between how SQA does it and how we do it in model change.
0:09:53 Joel Frick (6124): SQA is divided into, model change by suppliers, regardless of the type of part, and model change is divided by parts, and the reason why we do that is that's how our counterparts in manufacturing engineering are aligned.
0:10:10 Joel Frick (6124): They're aligned by parts. They don't care about which supplier makes it, as well as our design groups, so we're, we're aligned with our model change counterparts, which are focused at the part level, and they, you know, regardless of supplier.
0:10:24 Joel Frick (6124): So once, go ahead. Oh, I'm sorry. Nope, that was, uh, 
0:10:29 Dave McLean: uh, an understanding explanation. That's all. So once, once 
0:10:35 Joel Frick (6124): you review that change content, and you understand the scope of the change content, then you decide whether or not a piece of feedback is needed.
0:10:46 Joel Frick (6124): OK, 
0:10:46 Dave McLean: so to clarify, so the 1st, the 1st stage, the 1st decision of this upon an EC, uh, upon a, an engineering change being pushed from ThoughtWorks.
0:10:55 Dave McLean: Next to intellects, isn't that we're automatically kicking off a PPAP is that somebody needs to review the substance of that change and decide there is a human decision there on whether to whether to 
0:11:06 Joel Frick (6124): initiate a PPAP, correct, that that human reasoning. Reviews the change content and makes the decision that a PPAP is needed or not.
0:11:17 Joel Frick (6124): Okay. There are some automatic cases where there is no PPAP, but it again, we put that decision on the human review.
0:11:26 Joel Frick (6124): We're doing it to make that decision, and then there's a category that it gets filed under for a reason why there is no PPAP required for that.
0:11:35 Joel Frick (6124): The assumption is everything that is an engineering change requires a PPAP. Got it. You that assumption from the beginning, and then you have to say why no PPAP is required if you're not going to request it.
0:11:52 Joel Frick (6124): So, once you decide that PPAP is needed, then you decide what to do. What level of documentation is needed to confirm that that change has been properly implemented, or that that new part has been properly validated to the requirements on the drawing and all of the other, uh, technical standards that
0:12:19 Joel Frick (6124): exist within our systems and the quality manual, yadda, yadda, yadda. Before we get into that, there is one other scenario that can trigger it, Pete.
0:12:28 Joel Frick (6124): Who's gonna get there? We're, we're, you get in there? I, I, I wanna, I wanna make sure that we mention this and then maybe we need to come back to it.
0:12:36 Joel Frick (6124): Um, yes, process change request. So, okay. Yeah, so that's it. That's, that's a fork. Yeah, that's a fork in the road.
0:12:45 Joel Frick (6124): Yeah. So, based upon the change content, or, um, and again, even if it's model change, we're usually approaching a new part based upon how it's different from something else we've made in the past.
0:13:00 Joel Frick (6124): Um, a lot of times there are. There will be some similarity in process, um, uh, usually if there's new tooling, um, it's going to need full validation.
0:13:12 Joel Frick (6124): But again, all of that comes down to the engineer deciding based upon what is changing. All of the evidence supplier needs to upload to prove to the engineer that that part has been validated correctly and can be used in our vehicles.
0:13:31 Joel Frick (6124): So, once the engineer puts together that list of requirements, then they send that to the supplier and say, I need you to submit all of these, and then send it back to me, sometimes with samples of that change or that new part, so that I can verify that, yes, your part is can be used in my vehicles, 
0:13:53 Joel Frick (6124): and once I approve that, you meet all my requirements, then the approval is sent back to the supplier. That's PPAP in a very 
0:14:02 Dave McLean: compressed nutshell. Sure, awesome. As far as the tasks, I'm going to use the term task as the sort of general catch-all here that the supplier needs to complete that list of them within the project, essentially.
0:14:18 Dave McLean: Are those templated? Is that something that, like, there is a single master template that applies to everything? Is it a template that is, uhm, by product categories, like, or our part categories or anything like that?
0:14:31 Dave McLean: How is it that we go from a blank? It's 
0:14:33 Joel Frick (6124): very standardized. Yeah, in fact, uhm, so we, well, automotive manufacturers as a whole, Thank Uh, the whole idea of PPAP was established by AIAG, which is, uh, uh, an industry group that defined what should happen for PPAP, and so those requirements are already defined.
0:14:56 Joel Frick (6124): by AIAG, and then there's a little subcategory called that OEM-specific requirements, and every OEM has their own additional requirements, but again, that's standardized even for us.
0:15:09 Joel Frick (6124): We have defined what those additional items are. That we can pick from, uhm, so I think the best way to talk about this is to show you what those items are.
0:15:28 Joel Frick (6124): Alright, so I will share this, so. When the engineer is presented with the PPAP, we have these standardized items.
0:16:00 Joel Frick (6124): That we go through and say, yes or no, I don't need these. Based upon, again, the type of change, the level of change, and what they want the supplier to submit to send to them.
0:16:16 Joel Frick (6124): So you see some of these. This is a model change PFAP, so this visual comparison sheet and project timing plan.
0:16:26 Joel Frick (6124): Those, and that design communication is also, those are what Luke mentioned earlier, the PCR. So, that fork that Luke mentioned is if the supplier is going to make a change that is not driven by an ECS, then we have different requirements for the supplier.
0:16:49 Joel Frick (6124): Because we need some level of documentation that drives this, because when there's an ECS, that ECS includes timing, that ECS includes context.
0:16:59 Joel Frick (6124): But when it's driven by a process change is the one that is defining that timing to us, and we're actually approving that timing, in effect, uh, as part of the PCR PPAP.
0:17:16 Joel Frick (6124): So that's why you see that unchecked in my model change, because that's already defined. for me by the ECS. Got it.
0:17:24 Joel Frick (6124): Okay. So after the engineer has selected those, uhm, said I need you to submit these elements, then it goes out to the supplier and it shows those elements.
0:17:37 Joel Frick (6124): And the PPAP with a due date and then the supplier submits them. Right now, there's nothing submitted to review. The engineer receives it, reviews it, and then we go through the review.
0:17:50 Joel Frick (6124): Usually, it's very rare for a model change that it's approved on the first pass. There's usually something the supplier forgot.
0:17:59 Dave McLean: Same for SQM. Yeah. Okay. Okay, a couple of questions here. Uhm, first of all, for, if you scroll back down a little bit, submission requirement column.
0:18:14 Dave McLean: Is that, is that just a pick list to tell them what it is that they need to do with it?
0:18:17 Dave McLean: Or is there, are there other values that can show up in that, in that 
0:18:20 Joel Frick (6124): column that would instruct them? So we have Thank you. The four different levels of, uh, there. So by default, it's defined in our procedure.
0:18:36 Joel Frick (6124): The supplier is supposed to have and retain. I mean, that, that one is required. That is our default. We tell them that in our procedure.
0:18:44 Joel Frick (6124): Even if we don't ask you to submit it, you are supposed to have this on hand, because this is defined in the quality manual as something you are supposed to be doing, regardless of whether I ask you.
0:18:55 Joel Frick (6124): And if I ask you to see it, you better by God have it, because you're supposed to have it. OK.
0:19:03 Joel Frick (6124): Not required. Again, even if we don't ask them to submit it, it kind of falls under the same line as retain.
0:19:12 Joel Frick (6124): But we're basically telling them we don't need to when I'm asking you to update this, because this is not affected at all by this change, but you should still have the old version, and then update and submit versus submit, uhm, for us in model change, we basically say submit all the time, because it's
0:19:32 Joel Frick (6124): a new part, so they're basically creating something. Update and submit is used rarely, yeah, and it's one of those things, it's like, if we're asking you to submit, we don't care whether you're creating it new or updating.
0:19:46 Joel Frick (6124): We, 
0:19:47 Dave McLean: we want this. Okay, from a functional point of view, as far as what, what the supplier is expecting to do, or is expected to do in IntelliQuest here, they behave the same, they have to, they behave exactly the same, 
0:19:59 Joel Frick (6124): yeah, okay, realistically, the fact that we don't ever use it, I think we could just, like, let update and submit fall away as a requirement, and kind of, this, this part of the discussion, I think, is where there's a difference between the way that we're using IntelliQuest now and the way that we want
0:20:20 Joel Frick (6124): IntelliQuest to work, uhm, with regard to this, and I think Keith mentioned before, I thought, uhm, had a really good idea, like, a really good concept of what we would want for this Thank you Basically for this column to not be needed or to be used differently, and I think that is, let's, let's use 
0:20:42 Joel Frick (6124): material certifications just as your, as your example, and say, I have no changes to my material certifications, therefore, I would like I wouldn't need to submit, there's nothing to update, retain, yeah, sure, but what I would want to show up on that PPAP would be the material certifications from the
0:21:00 Joel Frick (6124): last time it was PPAP, right? And so that's functionally in IntelliQuest, in the way that we have it, we have this set up, submission requirement is, is just a dropdown, it's just metadata, functionally, it doesn't actually do anything with the way that, you know, the system operates, it doesn't change
0:21:18 Joel Frick (6124): the requirements for, you know, the way that the supplier updates or anything, it's, it's it's data in a column, as far as I can tell, uhm, for the way that this works, but what we really wanted it to do was what, what Keith was, was describing.
0:21:34 Joel Frick (6124): So, yeah, so the, the last time we talked about this, it was, if I'm using it, not asking you to update and submit the previous level moves forward, you know, as the then current level, because I, as the engineer, am saying, 
0:21:50 Dave McLean: carrying that over is fine. Got it. So, if it avoids the kind of cottage cheese or a Swiss cheese nature of the data, wrong cheese.
0:22:02 Dave McLean: Yes. Okay, alright, so, so to put this in functional terms, what we want is when we, when we initiate the people.
0:22:11 Dave McLean: That we're selecting, you know, a template that like a highly structured template that's going to pre-populate a list like this.
0:22:20 Dave McLean: You're going to go through the list of tasks based on the data. This particular PPAP and decide which of them is needed, which of them is irrelevant, and at what level.
0:22:30 Dave McLean: And then at some level in the background, what we need is for the system to then connect each of those tasks to the last instance of them.
0:22:39 Dave McLean: For that particular part. Yeah, OK, for that drawing specifically, I guess the drawing is the thing that anchors it. So that way, if even if there's no changes to be made and it's not.
0:22:55 Dave McLean: And you guys have agreed with the supplier that, yep, there's nothing required here for this PPAP. So the other, this one persists through.
0:23:02 Dave McLean: Then when we close the PPAP out, we basically, for all those ones where we are just accepting whatever the prior submission was, we're pulling it that through to this one, so that it counts for the next time through.
0:23:15 Dave McLean: Yeah, it becomes the 
0:23:16 Joel Frick (6124): then current approved. So it just moves forward with each PPAP. If it doesn't change, then there's no need to update it.
0:23:25 Joel Frick (6124): Yeah. And that really simplifies the programming. It really just simplifies how we currently do PPAPs. I know most running changes are very focused on change content and change content.
0:23:37 Joel Frick (6124): So that's usually two or three elements. Yeah, requirements that they put in their PPAPs. Whereas with modeling, because it's introducing new part numbers, we usually request almost every requirement in our PPAPs.
0:23:55 Joel Frick (6124): So that actually gets to, the template, you mentioned there being a template. So depending upon the type of part, by default, these show up.
0:24:09 Joel Frick (6124): We'll time. And the engineer processes it. The engineer still has the ability to add and subtract, but 
0:24:18 Dave McLean: they show up by default. And you mean specifically the ones that have the little checkbox next to it? Yep. Yep.
0:24:26 Dave McLean: Got it. Okay. So when you say. That the the engineer has the ability to add to it. Do you mean they can that they're able to just add additional checkboxes to the ones that are already there?
0:24:35 Dave McLean: Or could they actually completely create their own task? That's 
0:24:39 Joel Frick (6124): unique to that PPAP. There's there's no way they can currently. Create a whole new task. Those tasks themselves are defined already, yeah, um, controlled by the you see my name and Luke's name all over these because we we define these requirements and these are the only requirements that 
0:24:59 Dave McLean: you can have in your PPAP. OK, OK, so in this requirement library, again, I'm partly saying this for the for the note takers here just to capture some of the stuff I'm seeing on the screen a little easier.
0:25:12 Dave McLean: Each requirement library record, which is what we would call it in intellects or a, a, a task template would have a title, a status, active, inactive requirement type.
0:25:22 Dave McLean: Is that just a grouping? That's to collect things together under a subheader within the PPAP? Yes, yeah, 
0:25:29 Joel Frick (6124): in this system, it's basically used as a filter. So that, you know, if you had hundreds and hundreds of different requirements, if you were trying to search for the one that you were looking for, you'd say, oh, I want to, thanks for this particular kind of, you know, functionally, it doesn't really change
0:25:43 Joel Frick (6124): anything. It's just, it's just a category that you put those requirements in. But it doesn't functionally change anything. Where it is functionally affected is at the levels.
0:25:55 Joel Frick (6124): So, in SQA, they have various levels of PCRs, and they have a, a document that's a matrix that defines which PCRs are PCR level they're supposed to choose, uhm, and in new model, we have basically four levels of parts.
0:26:16 Joel Frick (6124): Uhm, there's the non-regulated part. So, in other words, this part doesn't have any, uh, government regulations affecting it.
0:26:26 Joel Frick (6124): So, there are certain elements that we don't have to request. Then, we've got what's called important quality or regulated. So, if it is affected by a government regulation, it then gets elevated to our higher level of, uh, requirements.
0:26:45 Joel Frick (6124): So, that one as an example. What happens with that is this control plan, is in the template. So, if it is an important quality or a regulated part, the supplier has to submit the, has to submit the control plan in the PPAP.
0:27:04 Joel Frick (6124): Uhm, otherwise, it's just something that they're supposed to have. on hand, and we'll ask for it if we want to understand what's going on in the process.
0:27:12 Joel Frick (6124): And then the other one is the traceability plan. So, the traceability plan means, if we find a defect on this part or in the field, Thank you.
0:27:24 Joel Frick (6124): I need to know what your plan is. If I tell you I have this part, you can trace it back through your process and tell me all of the steps of raw materials that went into it.
0:27:34 Joel Frick (6124): Again, this goes to the idea of it being important quality regulated. If we are in a recall situation, we have to be able to go to our supplier and understand how big our population is.
0:27:48 Joel Frick (6124): So that, again, that is why those two are added as opposed to the general. I wish my screen was bigger.
0:27:57 Joel Frick (6124): Come on, baby. As opposed to general. So on this one you see control plane is not selected by default. Traceability, not selected by default.
0:28:13 Joel Frick (6124): And then the the highest level. Is similar to important, but because it's important and safety and this is this comes from our drawing.
0:28:24 Joel Frick (6124): If it's stamped by default. By our parent company that this part is important in safety. Then it's the same requirements as important, but it adds an additional routing.
0:28:37 Joel Frick (6124): That it has to go through management after we review and approve it. At the engineer level. The 
0:28:44 Dave McLean: individual task, not the whole PPAP you mean? No, the whole PPAP. Once the engineer approves the PPAP. Got it. Then 
0:28:52 Joel Frick (6124): it goes to management for management to approve the PPAP. Got it. 
0:28:56 Dave McLean: OK. So the workflow. The workflow variation is controlled by the level, not the individual task. Correct. Got it. OK, no problem.
0:29:05 Joel Frick (6124): So then the number of requirements is just that. Put a finer point on it. You've got, I don't remember how many requirements on an important safety.
0:29:20 Joel Frick (6124): I think it's like 10. That's right there, 9. Oh, that's, is that, yeah, it shows that the number of requirements.
0:29:26 Joel Frick (6124): Got it. Oh, that's OK. Yeah, that's level. That's the, in any case, so that the engineer will have, however many, let's say there's 10, uh, you know, requirements in there, the engineer will have 10 approvals to do, right?
0:29:41 Joel Frick (6124): That the engineering group leader will have one approval. For the 
0:29:45 Dave McLean: entire PPAP package. Got it, OK, uhm, this content, specifically the levels and the task templates that are there, uhm, are you guys able to export that, those tables in full from IntelliQuest and, and so on and send it over as content that we can, we can see the equivalent tables in IntelliX with?
0:30:05 Dave McLean: Oh yeah, should be able to. Yeah, if we can't, we can copy and paste. Make it easy enough. And I guess the adjacent question to that is, is that content right now, for lack of a better term, is it, is it good?
0:30:19 Dave McLean: Is it what you want to use? Or is this, uh, is this an opportunity to go and look at and revise the content?
0:30:25 Dave McLean: Because there's, there's gaps and, and redundancies and things like that, that you would like to try to edit out of the content before you load it to IntelliX.
0:30:33 Joel Frick (6124): Well, that goes back to the pilot part inspection that we talked about yesterday. So, if I go to right here, we had briefly talked about using the PPAP as a place for the supplier to upload part data.
0:30:54 Joel Frick (6124): Yeah. In IntelliQuest before we adopted ProjectQuest as the place for them to upload it. So, from the discussion yesterday about pilot part uploads, Thank very much.
0:31:05 Joel Frick (6124): Thanks. Is this the place where that would happen, or can the pilot part inspection occur outside of the PPAP requirements?
0:31:18 Dave McLean: I think what we're going to strive for is that it happens outside of the PPAP requirements. From what I saw yesterday, it was anchored by a specific design phase, and I noticed on one of the screens here it said, you know, phases act basically yes or no.
0:31:32 Dave McLean: It looks like certain PPAPs you use phases for, others you don't, which to me also implies that some PPAPs you do pilot part data and some that you wouldn't.
0:31:42 Dave McLean: So I'd want to understand how that phase piece works before giving a final answer, but what I'd be striving for is that it's its own thing that is connected into 
0:31:52 Joel Frick (6124): PPAP for when it's needed. Okay, so it wouldn't be like we started here with A cross W part data. It would be its own entity, but attached.
0:32:02 Joel Frick (6124): You got it, and what you might 
0:32:03 Dave McLean: be doing is for each level, for example, you might have some additional properties like, uh, is the, this one, uh, does this level 
0:32:12 Joel Frick (6124): require pilot part data? Okay, so to your question about phases, uhm, in our model change, world, you see all these dates are the same date.
0:32:32 Joel Frick (6124): What the phases were doing for us is these dates would be staggered throughout development for a model. And then PPAP.
0:32:44 Joel Frick (6124): So, basically, when the drawing is released, and then the supplier starts working on their process that's going to make that part to create the process, they will have an FMEA, which then ends up in the control plan.
0:33:04 Joel Frick (6124): Okay. So, from a phage standpoint, one of the earliest things we ask for is the control plan. Because the control plan defines how their process is going to be set up, so it's an earlier document that exists in the whole context of the PPAP.
0:33:24 Joel Frick (6124): So, the phage, when we say a phage for PPAP, means Peace. I'm going to submit some of these documents at one date, I'm going to submit some of these documents at another date, and then the rest of them are all due in this final date.
0:33:40 Joel Frick (6124): So, what that phage does is it separates out these requirements. 
0:33:44 Dave McLean: By due date. That phage though is more of a conceptual thing right now, rather than it being something that's reflected in IntelliQuest.
0:33:52 Dave McLean: Uh, 
0:33:53 Joel Frick (6124): right now we're manually doing it because we couldn't get the phages to work how we wanted them. Very glitchy. It created more problems than it helped.
0:34:04 Joel Frick (6124): So we abandoned the phage in IntelliQuest and we are manually manipulating these due dates in the PPAFs to achieve that.
0:34:14 Joel Frick (6124): So, before we move on from that, Keith, you actually had a really, I don't want to say really good because it makes it sound better, but you had a better system in XPRIZE where you were able to, based on, you know, I don't want to overstate it, but basically, let's say, Okay.
0:34:33 Joel Frick (6124): You know, uh, DX3, this is a DX3 Trim Parts, uhm, PPAP, therefore my phase dates are this, this, and this, and then you were able to assign that, and then if you change your phase dates, it would change the phase dates for all of the PPAPs, right?
0:34:50 Joel Frick (6124): Yes. That's what the intention was. And that is how it works. If it wasn't approved yet, and you've advanced it to the next phase, it would go back to the phase dates for that model, based upon which model you chose for that PPAP.
0:35:05 Joel Frick (6124): Yeah. And set the date for those requirements that were in that next phase. So that's, that's level one, just from, like, an ease-of-use standpoint.
0:35:17 Joel Frick (6124): That's something that I think we would like to have an end-to deluxe. Yeah. Because we, we actually lost that going from our old, old system to our current system.
0:35:28 Joel Frick (6124): Yeah. I think we'd like to get that back. So that's, that's piece number one. And then from a management perspective.
0:35:35 Joel Frick (6124): What we would want to be able to do is say, okay, I want to know how we're progressing to DX3 phase one for trim parts and be able to see that as a, as a summarized.
0:35:47 Joel Frick (6124): view and say, you know, we've got 82% of our, our PPAPs have passed that phase one milestone or have accepted that phase one milestone from reporting standpoint.
0:35:58 Joel Frick (6124): So that, that was something that we were attempting to accomplish. Yeah, with IntelliQuest we were unable to do. Okay, 
0:36:07 Dave McLean: so let's play that out for a second. Uhm, are the, would the actual phases that exist always be the same for every PPAP or is it, you know, similar?
0:36:17 Dave McLean: Some PPAPs have 2 phases, some have 5 phases. Is this an, is this a value that we could, what I'm really getting at is, is the phase structure something that we could hard-code into the workflow because it's always the same and it's just mapping tasks to them or is it something that where we need to 
0:36:35 Dave McLean: make that a definable property when you're setting up the task templates so that it's specific to any given level or any given type of PPAP that you're creating.
0:36:45 Dave McLean: I wouldn't want to do it where it's PPAP specific, but at the level of the template, I think it's possible.
0:36:50 Dave McLean: It's specific 
0:36:51 Joel Frick (6124): to the model, so all of the PPAPs in that model. I'm trying to find where I defined the face states, God, it's been so long.
0:37:01 Joel Frick (6124): I know, every time I open this page, I'm like, oh man, where were the faces? So it is specific to a model, so those phase dates will be established at a model level basis based upon the master schedule.
0:37:16 Joel Frick (6124): Let me, let me 
0:37:17 Dave McLean: clarify the question first. I'm not even talking about the dates. I mean, like, literally, what are the stage gates? Or what are the phases that you would go through?
0:37:25 Dave McLean: Gates 
0:37:25 Joel Frick (6124): with a G, right? Well, I think that the gates, I think I'm hearing your question, Dave. Based on, based on conversation we've had yesterday, I would say if you asked us that question 10 years ago, we'd say, oh, yeah, it's, it's, it's, we, we have, you know, phase 1, 2, 2, and 3.
0:37:44 Joel Frick (6124): Now we're, we're in a cycle where we, we are actually actively changing what the model change structure even looks like right now.
0:37:52 Joel Frick (6124): And, and I'm not fully read into this. Most of the people in this room are way more read into it than I am, because I'm a mass production guy, but, uhm, those, those are changing, and I don't think that we can predict what it's going to look like even in 5 years.
0:38:05 Joel Frick (6124): So, I would say, we would probably want to make a template based on what you were saying. We want to be able to make a template for, like I said, DX3 trim parts, for example, and then for DX3 trim parts, that would not change substantially after, after we already know that we're going to be doing that
0:38:26 Joel Frick (6124): . And then we'd make another template for, uhm, you know, DX3 body parts, and then, and then for the next, uhm, uh, you know, model change after that.
0:38:37 Dave McLean: So if I, if you set it up, when you're setting up the template for DX3, in addition to, you know, defining the template itself and the name of it, and some of these sort of workflow doesn't require approval on the other side, or whatever the case is, you're going to have your list of tasks that need 
0:38:54 Dave McLean: to happen, and you can sequence those tasks for the purpose of the template, you can specify what the default value is as far as what's required by the supplier, you can specify for each task template within that, that broad template.
0:39:07 Dave McLean: Or a PPAP template, what supplier role is responsible for completing that thing, so that we can pre-populate as much as possible from what we know in supplier relationship management, but then you could also have a phase grid where you can define.
0:39:23 Dave McLean: For that template, OK, this one has phase 1, phase 2, phase 3, for lack of a better set of terms.
0:39:30 Dave McLean: Every task can then be related to whatever phases you created for that template, so that when you actually start a PPAP, you can.
0:39:39 Dave McLean: Using that template. It would create a record of the each one of those phases for that PPAP specifically, with all the tasks related in up to it, and then you can set your phase dates for that PPAP itself, so that this way.
0:39:55 Dave McLean: You're defining the structure of not just the list of tasks, but all those groupings and sequencing that you want to do, and the only thing that remains for the engineer who's setting up the PPAP when they're initializing it all is, hey, I've got phase one.
0:40:11 Dave McLean: I need this to be done by December 31st. Phase 2 is going to be done by February 28th, 2027. Phase 3 should be done by March 5th, 2027, whatever it is.
0:40:23 Dave McLean: And we can use that, depending on how you want, like, you can actually have it set up so that for your tasks, their due dates are calculated as a function of, you know, it can be a couple of things.
0:40:35 Dave McLean: You can set it up so that it's a number of days before the phase due date. You could set it up so that it's dependent on a predecessor task, uhm, there's a bunch of different things you can do that that would happen, but it all sort of starts with, do we want to try to define those phases as a part of
0:40:53 Dave McLean: the template that is being used to initialize 
0:40:57 Joel Frick (6124): any individual PPAP? Let me ask you a question. Based off of your question, if we establish something and it changes, because it has been changing quite a bit lately, how hard is that to go back in and change something?
0:41:12 Dave McLean: So, in the model I just described, not hard. You would change, you would go back to that task, or that PPAP template, you know, let's say you added two additional phases to it and want to change some, change the name of the first phase, you'd modify them in that template, publish the template, and going
0:41:31 Dave McLean: forward, all PPAPs would use that temp, that version of the template. Any in-flight PPAPs or historical ones would just retain whatever phase structure they started with.
0:41:40 Dave McLean: Uh, but the idea would be that we're, we're essentially versioning the task list, uh, and the template to be able to apply changes going forward.
0:41:48 Dave McLean: So that you can manage that without having 
0:41:50 Joel Frick (6124): to reconfigure the product. Yeah, that would be nice, because you would say, different terms now, but, FedTri, this has, these items have to be done.
0:42:00 Joel Frick (6124): So it would automatically put those dates in there, or three weeks before, or three months before SLP, these items have to be done.
0:42:08 Joel Frick (6124): So you have those different bases. It's just right now, those are a little out of balance, but I still think that could be nice, so somebody doesn't have to type in the dates.
0:42:18 Joel Frick (6124): Those automatically are generated based off of it. Hey, three months before SLP, this, this has to be done as part of the PPAP, or, or, or, you know, hearing, or when FitTry comes, this has to be done.
0:42:33 Joel Frick (6124): Yeah, uhm, I, I agree with that. I think that, in general, yes. You found it. Right.
0:42:44 Joel Frick (6124): In general, that, that would be good, but I think that, I think that one of the, one of the key pieces that, just from a workload standpoint, it's not that it's not doable, it's just very tedious to go back into however many hundreds of PPAFs and say, okay, oh, my SOP date changed, which does happen.
0:43:04 Joel Frick (6124): Yes. Has it? My SOP date changed. My relationship to that SOP date, in terms of phase due date, doesn't actually change.
0:43:12 Joel Frick (6124): I still need it done, you know, three months before or whatever, to use the example that you gave. However, now that that SOP date changed, and now I have to go into how do I really keep apps and go and change all of my phase dates and everything like that.
0:43:25 Joel Frick (6124): So the point that I was making earlier was I wanted to be able to go into a table, like what Keith has been talking about, ready to show, go into a table and say.
0:43:36 Joel Frick (6124): This is my SOP date. Everything hinges on this date or whatever they could choose and then be able to change that date and then have all of my other big dates shift.
0:43:47 Joel Frick (6124): So OK. Keith. Yeah, that's it. Found it. You found it. So these are the requirements and what it did was it defined the due dates.
0:44:05 Joel Frick (6124): Based upon. That model, so this is the model code and the requirement itself. So TM3 was not phased, but. Let's go GCP.
0:44:21 Joel Frick (6124): GC7 should have been phased. So GC7 was a major model and therefore we had these elements due at different times.
0:44:32 Joel Frick (6124): So as the supplier would submit and we would approve, ah, and I should back that up by saying in NextPrize, we didn't have the ability to approve each requirement individually.
0:44:45 Joel Frick (6124): So because the overall PPAP was reviewed and approved all at once, it was actually pretty easy to say, OK, now set the these new due dates for these elements that are due next.
0:44:57 Joel Frick (6124): So it started off with, again, the control plan is a planning document. Traceability is a planning document. The subcontractor registration was a planning document.
0:45:07 Joel Frick (6124): So we wanted those first. And then you had the, okay, now show me the evidence that you are following the drawing, uhm, and that you meet these requirements.
0:45:18 Joel Frick (6124): And then, of course, the last phase was related to QBA and QBB. Those are the documents that say Thank These are my measurements and testing of this part.
0:45:30 Joel Frick (6124): So those were always last. Uhm, so we talked about this being dynamic. One of the things that is going to have to change for us because of compressed development is when we have a new called QBA.
0:45:44 Joel Frick (6124): That's our testing document. That one will remain last, but we're actually moving up the QBB, which is the part itself, the measurements of the sample parts, because Thank joining us.
0:45:58 Joel Frick (6124): What happens in our model change development timing, the supplier has achieved a mature process. And once we have parts off of that process.
0:46:11 Joel Frick (6124): Then they can start testing with parts. Because we don't want to approve the part function based upon something that was an interim process or prototype.
0:46:23 Joel Frick (6124): We want it to be parts off of that final process. So the testing is always the last thing we're waiting on.
0:46:30 Joel Frick (6124): But by that same token, why we're moving the QBB earlier is because they do have off-process parts that they can submit when they start the testing.
0:46:41 Joel Frick (6124): So we can say, send me a sample in the measurements for that part. As soon as you have a process that's ready.
0:46:48 Joel Frick (6124): And then, later on, we'll wait for your test results. So that's now, uh, by itself going to be the final phase, is the testing and then the part submission one.
0:47:01 Joel Frick (6124): But again, the whole point concept of these elements being due. Yeah. Throughout development is the whole concept of phases. Yep.
0:47:10 Dave McLean: So, you know, again, like, to translate this into what it could be on the Intellect side, and there's various levels of how far we take it.
0:47:18 Dave McLean: But, like, you know, you're implying a number of stages as you work through, you're bucketing the task due dates that you've got there.
0:47:26 Dave McLean: So, imagine those stages exist in a table that's related to the level, which is, in Intellects, would be called a template.
0:47:37 Dave McLean: You define them, you don't define in the template what the due dates are, because the template is going to be used over and over again at different points and times for different parts.
0:47:47 Dave McLean: You define all the tasks, and you bind each task to a template. When you say for each task, essentially whether the due date for that task is something that you want to manage manually, or whether it's something that you want to bind to the phase due date, in which case all you're doing is saying, Thank
0:48:07 Dave McLean: X number of days, plus or minus the phase due date. Right, if you choose the first one, where you're doing it manually, you've got to set a date for those tasks.
0:48:15 Dave McLean: You've got to actually set a point in time. If you choose the latter, then what it means is if the phase due date shift in the project.
0:48:23 Dave McLean: Or in the in the PPAP, then the due date of those individual tasks will automatically follow them as they go forward.
0:48:31 Dave McLean: If this is a task that needs to be done 10 days before the end of the phase that it relates to, then the due date automatically changes.
0:48:39 Dave McLean: When you modify the due date of the phase, if it gets pushed out, or you know, if your SOW date at the end, or sorry, SOP date at the end of the PPAP changes and the whole thing gets pushed out, this model would allow all of those tasks to kind of follow along.
0:48:55 Joel Frick (6124): And when you're, when you're saying to change the due date of the phase, just to make sure I'm clear what you're saying, you're saying, I would do that in the individual PPAP, or I would do that in some management tool outside of the PPAP?
0:49:10 Joel Frick (6124): Would there be, Would there a way to do that in a management tool like what Keith showed? For us to say, okay, because this PPAP is in this particular category, or whatever we want to call it, it's related to this management table.
0:49:27 Joel Frick (6124): Uhm, and therefore, I can change that date in one spot and have it affect all of 
0:49:33 Dave McLean: the apps that are affected. There's a piece that I'm not connecting in here, uh, for that one. For me, this is entirely, uh, like, individual.
0:49:46 Dave McLean: The dates of it are completely PPAP-specific. So what is it that would be binding multiple PPAPs together that would allow you to 
0:49:54 Joel Frick (6124): change? The fact that they're all involved in the same model change. So all of the parts of it. This is 
0:50:00 Dave McLean: that model summary concept we were talking about towards the end of yesterday, where, like, if I have a model change that we're doing that has 500 PPAPs that are running in parallel while we do this, that, you know, in addition to all the individual activities that there is, there are some critical properties
0:50:18 Dave McLean: that are actually attributed to the model change that we're doing that really would cascade down throughout 
0:50:24 Joel Frick (6124): all the related PPAPs. And then same same comment for, like, the reporting and everything. Like, I want to be able to see what's my status for DX3, right?
0:50:37 Dave McLean: Okay, I understand. So if we think about it in the vein of there's a layer on top of, on top of PPAP, model change summary, for example.
0:50:47 Dave McLean: Yeah, and when you go to create a PPAP. One of the questions that it can ask you on the, on the 1st stage of that is, you know, is this a model change or is this related to a model change?
0:50:58 Dave McLean: If the answer is yes, then, you know, is this model? Has this model change already been created? If the answer is yes to that, then you're selecting a model change that you've already set up more likely for the 1st PPAP of that model change.
0:51:10 Dave McLean: The answer is no. And so you use the 1st PPAP to go and set up the model change. You populate all the properties and when you save it, it creates this model change summary.
0:51:20 Dave McLean: That all subsequent PPAPs under that model change you would relate to. Fast forward, you now have a model change summary with 500 PPAPs underneath it.
0:51:31 Dave McLean: And every one of those PPAPs uses different templates based on the specific part. The specific type of change that it is.
0:51:38 Dave McLean: They all have their own individual phases that are being tracked separately, so PPAP, ah, PPAP 1 might have different phases and different phase dates than PPAP 2 and 3 and 4 and 5 and 6.
0:51:51 Dave McLean: Ah, however, if you want, that PPAP phase concept can also have, ah, a derived calculation for its due date, so that if it's all based on, hey, when that, when that model change needs to be complete, if we're saying, like, everything needs to be done for this particular model change by, I don't know,
0:52:12 Dave McLean: July 31st of 2027, and if all of those underlying phases are all set up so that their phase due dates are defined as a, you know, number of days before or after.
0:52:24 Dave McLean: After that original due, or that model change due date, then it can actually push the phases in and out based on you changing the end date of the model change.
0:52:35 Dave McLean: Yes, something like, something like that. Would that be beneficial, or is that over engineering? 
0:52:40 Joel Frick (6124): That sounds like where we want to be. Yes. If it follows, so what you mentioned right there, so when we select this PPAP and decide we're going to do it, we do that right now.
0:52:54 Joel Frick (6124): It's either an SQA, we're going to do change or a new part model PPAP. So that is, that is one of our defining categories.
0:53:03 Joel Frick (6124): And then we say, OK, based upon the drawing requirements, and in this case, this is an airbag, so it's not just important, but it's important in safety.
0:53:14 Joel Frick (6124): So I have to choose that. That then pulls the requirements in based upon what type of part it is. Then the question about what are my due dates?
0:53:28 Joel Frick (6124): Based on and how do I categorize all those things with that model? That is also defined in the details. So this is for the DX3 model.
0:53:39 Joel Frick (6124): So if we have those phases set up, that then sets the due dates based upon that model. Model and ProgramState, right?
0:53:47 Joel Frick (6124): Yes, and ProgramState. So this, like this SAP here, so going back to this, depending upon the type of part it is.
0:53:56 Joel Frick (6124): Uhm, if it's SAP, so in other words, if I'm sending this part to another supplier, it's due earlier because it has to be approved before I ship it to that other supplier to put in their part.
0:54:12 Joel Frick (6124): So we have. We have basically four types of parts. So we've got body and engine SAP. So body and engine is always ahead of our trim shop.
0:54:23 Joel Frick (6124): So if it's a supply part that's body and engine, that is our earliest of all due dates. And then the there's trim SAP, which is a trim part that we ship to an Ops supplier.
0:54:32 Joel Frick (6124): And then there's the body and engine parts. And then there's the trim parts, because every, the final operation in our build process is our trim shop.
0:54:42 Joel Frick (6124): So that's, those are our four parts that are types within a model. That define. When something is due by that model.
0:54:53 Dave McLean: Hmm, OK. So the part types are pipe part types. Are almost the thing that corresponds to the phase. I mean, again, the individual dates within them might be a little different.
0:55:07 Dave McLean: It's not like they're all synced up to the same data for the part type, but at the very least, if there was something that kind of binds those tasks together, 
0:55:14 Joel Frick (6124): it's more the part type. Yeah, because you know, I guess. Again, for each model, we'll have four different phase date sets.
0:55:22 Joel Frick (6124): Okay, so if 
0:55:23 Dave McLean: you were to say when you're setting up the model change summary for DX3, if you wouldn't mind flipping back to the other system there.
0:55:33 Dave McLean: So if you set it up, if you set up the model change summary for DX3, the phases that you want to apply across all PPAPs within that model change would be body and engine, trim, body engine, SAP, and so on and so forth.
0:55:50 Dave McLean: Yep. You would specify dates for each one of those that, you know, must be done before this date, kind of thing.
0:55:57 Dave McLean: Yep. Yeah, and the way this is done is 
0:56:00 Joel Frick (6124): it, it defines each one, but I think what you mentioned earlier is in the requirement you say which phase it's in, therefore it does the same thing, but in reverse.
0:56:11 Dave McLean: Yep, you got it. So if you say that for, for DX3's model change, body engine SAP should be done by February 28th, 2027.
0:56:23 Dave McLean: If that's the end date of the phase, then for all the tasks that align with that phase across all the PPAPs, if you set them up to be due based on a, you know, X number of days before the phase due date, right up to including zero days.
0:56:40 Dave McLean: So, like, in theory, they could all be due on February 28th, just bound directly to the due date of the phase for that model.
0:56:47 Dave McLean: But presumably you'd want to stagger them out a little bit. So, you know, some of them are going to be 10 days before, some of them are going to be 20 days before, whatever the case is, to make sure that you can meet your dependency requirements for these things.
0:57:00 Dave McLean: Then, if the phase changes, so if you decide, you know what, body on engine SAP, we're going to push this by a month, because we haven't gotten the response that we're looking for as quickly as we're looking for some other changes coming, whatever the case is.
0:57:12 Dave McLean: We push the body engine SAP phase date a month, and that cascades down through all the tasks. That are bound to that phase on all the PPAPs under that model change summary.
0:57:26 Dave McLean: If you then, if you have also specified for any of these tasks, like a custom due date. So if a traceability plan, uhm, for BodyEngine SAP there, the one that's due on 1-21-20.
0:57:42 Dave McLean: If you had said, hey, that's got to be due 10 days before the phase due date, but for some reason for this, this one supplier, for this one PPAP, you kind of overrided that.
0:57:52 Dave McLean: Change and you push it out a little bit further because you got, they've asked for a little extra time. Then when you push the phase date, we would just reset that custom date back to nothing and go off of the calculated due dates going forward.
0:58:08 Dave McLean: Yeah, 
0:58:09 Joel Frick (6124): as long as we have the ability to modify at the individual PPAP level, uhm. Because there are cases where there are certain parts that are behind.
0:58:20 Joel Frick (6124): Yeah. As long as we have that ability to modify at the individual PPAP level. Well, I think that's fine. I was looking for an email where we just changed the due dates for TTAs.
0:58:30 Joel Frick (6124): Uh, I have that email. So I've got a better one. So. When I, as an engineer, when I am processing my TPAs, why, Mr.
0:58:48 Joel Frick (6124): Chair. When I am processing my TPAs for a model, I have on my drawing review sheet, in front of me, those due dates, so that I can start to set the element appropriately.
0:59:15 Joel Frick (6124): So, this is a, this is a model that we have upcoming with an SOP next year. So, these due dates, based upon what phase those elements are going to enter in for that model.
0:59:32 Joel Frick (6124): And again, if this changes, I, in, in what the scenario you're talking about, I should be able to go into that model and say, okay, now, DX3R, I'm changing these dates to something else.
0:59:45 Joel Frick (6124): And then it would automatically update the due dates for everything that says DX3R in 
0:59:51 Dave McLean: the PPAP details. Yeah, and Control Plan, Traceability, Subcontractor Registration, and so on. All of those are the tasks that would be applied to each PPAP.
1:00:00 Dave McLean: And again, you might. You might selectively turn them on and off based on the specifics of that PPAP, but if you imagine that really what you're doing is like there's sometimes that you're doing PPAPs in a one-off fashion.
1:00:12 Dave McLean: There's other times when, no, we're doing a model change, so we're setting up a structure. A structured template for hundreds of PPAPs that we're going to apply together.
1:00:21 Dave McLean: So I'd go in, hey, I'm doing my DX. We've got to do a new model change DX3. In fact, as I think it through, we probably start the process at the top level at that model change summary.
1:00:33 Dave McLean: In DX3, define the project phases within it, phase 1, phase 2, phase 3. Define the, I'm going to just use the term phase, each of the columns that we see listed out.
1:00:47 Dave McLean: Body paint, engine sap, trim sap, body paint, engine trim, and so on. You connect those two together so that you end up with a list of this matrix that you see here, and all the tasks that you're defining that are going to get applied to each of the PPAPs under that model change summary, would would 
1:01:06 Dave McLean: connect to the phase matrix that we see here. So am I using the right terminology like project phase is clearly labeled phase one, phase two, phase three.
1:01:18 Dave McLean: But the body paint, engine SAP, trim SAP, body paint, engine, trim, those four values would, I think we used the term phase earlier as opposed to project phase.
1:01:27 Dave McLean: Stage. 
1:01:28 Joel Frick (6124): Stage, got it. Yeah, so basically those are defined by when that part is introduced into our manufacturing process. Got it.
1:01:39 Joel Frick (6124): So the earlier it's introduced into the process, the earlier the PBAP is due. 
1:01:44 Dave McLean: Got it. OK, so phases and stages cross-referenced together, and it's the matrix of those two that'll determine the dates of the of the, we'll have to come up with a splashy term for what that, that cell is called.
1:02:02 Dave McLean: Don't use phase or stage. Yeah, I'm fighting the urge right now. Don't do it, Dave. Don't do it. Uhm, no, but whatever, whatever it is what we call that, that cell in 
1:02:15 Joel Frick (6124): the middle of the matrix. He's gonna have to follow my finger with this mouse, I think. Alright, where do you want my mouse?
1:02:21 Joel Frick (6124): Okay, so I guess if I click, I don't need to, it's fine, I can just click. So, uhm, I guess one of my questions would be just from a programming standpoint, and maybe I'm thinking into something that's not going to be a problem with intellects.
1:02:35 Joel Frick (6124): I'm just reliving my vivid past. So, uhm. After, after, so let's say we're doing this, the X3 are, I've got my phases set, I've got my dates set, what, what characteristics of that would be immutable after my PPAPs have been created?
1:02:58 Joel Frick (6124): So, so we've already talked about, I want to be able to change my dates, because we know that those can change.
1:03:04 Joel Frick (6124): My question is, can I, let's, let's say, for example, can I decide after the fact, actually, subcontractor registration is a Phase 2 requirement, not a Phase 1?
1:03:14 Joel Frick (6124): After I've already created my 500 Bebabs, can I do that, or am I, am I locked in? 
1:03:25 Dave McLean: I, I haven't. Yeah, I mean, what we could do, so again, I think, I think that is that decision. After we started a model change, we want to decide it's specific for that model change, or we want to decide that sort of globally going forward.
1:03:40 Dave McLean: Specific to that, 
1:03:41 Joel Frick (6124): yes, I think that would do it model change by model change. But the only reason I'm asking that question is I want to know, uhm, how, how locked in I am ahead of time so that I know how much planning we have to do and everything like that.
1:03:58 Joel Frick (6124): Not to say that it would change our response on, yeah, let's do this or let's not do this. We just want to have an understanding ahead of time so that we can explain, uhm, explain that as we're setting these up, is 
1:04:10 Dave McLean: question one, so. Yeah, so I think what we do if that's a use case we need to factor in, then what we would do is on that model change summary.
1:04:18 Dave McLean: Once you've done once you've started it, and although those PPAPs are getting created and joined to the model change, uhm?
1:04:28 Dave McLean: I think. 
1:04:35 Joel Frick (6124): So the reason for 
1:04:38 Dave McLean: the hesitation, I'll give the reason for hesitation in a second. What we could do is, from the model change, we can show you a grid of all of the tasks across all phases, stage, combinations, across all PPAPs within that.
1:04:53 Dave McLean: So if that, if your goal is subcontractor registration, we want to change that to a different phase, we could give you a grid that would allow you to just search, hey, show me all the subcontractor registration tasks.
1:05:04 Dave McLean: You narrow the list from, you know, 8,000 tasks down to the 500 that exist, and then do a mass update on that to change the stage.
1:05:14 Dave McLean: So you swap it from phase 1 to phase 2 or whatever, whatever you're trying to do. The downstream impact of that, so for all those tasks, most of them, their date is auto-calculated as a function number of days before or after the due date of the specific cell in that table that we have there.
1:05:39 Dave McLean: those would all push, so the dates would all get pushed as a result, and when you do the mass update, you might actually want to change the number of days that you've applied, because maybe it was supposed to be a near the end of, near the end of phase one, but now we're pushing it into phase two so 
1:05:56 Dave McLean: we actually want to frontload it into phase two, we're just trying to re-sequence the tasks a little bit, so you probably do both when you, when you update the task, uh, and now that those tasks are all due at a new date.
1:06:07 Dave McLean: If any of them had a custom due date applied, so you, you decided to override the due date in that case, we would probably blank out the custom due date.
1:06:19 Dave McLean: Right, once you decide to make that mass update and change, like, the action is once the phase changes, or the stage changes, all of a sudden, any 
1:06:28 Joel Frick (6124): custom due dates are gone. Yeah, which is what we would want. And you, you, you hinted at, and it sounds like we're in good shape there.
1:06:37 Joel Frick (6124): Uh, my next question, which is, I've got all this determined ahead of time, and then I've got to got, I've got some sort of special scenario where I say, you know what, because we got a late drawing release, or we got, whatever, insert name of excuse or reason or whatever, I need on this PPAP for this
1:06:57 Joel Frick (6124): part, I need to change my date for part of it. You know, requirement, uh, PPAP samples. Yeah, because like, it's basically created after the due date.
1:07:06 Joel Frick (6124): Yeah, yeah. But, and, I mean, DX3, so, like, that one I showed, the, the new airbag. Yeah. That thing just released.
1:07:15 Joel Frick (6124): Yeah. And we're already in the last time trial phase. Right. So, if we were enforcing the phase submission, phase 1 is already overdue the moment that, that PPAP was created.
1:07:26 Joel Frick (6124): Right. How late that time release. So, so, that's, that's a two part question that I have based on, again, the P, the team that we've experienced together.
1:07:34 Joel Frick (6124): Can the due date be updated independently, and it sounds like the answer would be yes, I could do that PPAP by PPAP, that's good, that's what we want.
1:07:48 Joel Frick (6124): And two, in this case that Keith mentioned, I still want to associate this PPAP with this, you know, DX3R, you know, phases, but I didn't even get my drawing until after things were due, now I'm, now I'm starting a new PPAP, and it's already been started as past due.
1:08:07 Joel Frick (6124): Question one is, will the system allow me to do that? Okay, good. Right now it won't even let me start a PPAP that's past due, it's like, nope, you can't even start your PPAP.
1:08:18 Joel Frick (6124): So, good. Uhm, and then, you know, can I, can I, you know, modify those dates? It's just what you're saying is, if I, if I go in and change my master schedule, it's going to just automatically wipe out those custom due dates and I'm going to have to go back in and hit those due dates again if I want 
1:08:36 Joel Frick (6124): to, you know, change those again. You got it. 
1:08:40 Dave McLean: You got it. Yeah, that's exactly it. It would be, uh, there's, there's an exception I'm going to ask about in a second, but yeah, it would be, I don't think we'd ever want to prevent somebody from creating a new PPAP or or, you know, generating these tasks, even if we're past a phase due date, I think
1:08:58 Dave McLean: the goal is to surface that. So if for some reason that's happening and we're creating the PPAP or we're triggering some of these tasks at a point where they're already overdue, we just want it to be apparent Thank you.
1:09:09 Dave McLean: To the user on the screen that, hey, you just, you know, you're about to trigger a bunch of tasks that are already overdue.
1:09:15 Dave McLean: Perhaps you want to go put a custom due date in to change. Change what that looks like. Alert not. Prevent.
1:09:22 Dave McLean: Right. Yeah, right. Can I ask a question? Maybe it's a little different. Maybe it's the same. If it 
1:09:27 Joel Frick (6124): is, Okay, we talked about, it'd be great to have the ability. Oh, SOP's moved. Oh, I want to move my dates.
1:09:34 Joel Frick (6124): Yeah, okay. Suppose out of 300, you've got 20 that for whatever reason have a different due date. If you do a mass update.
1:09:41 Joel Frick (6124): Is it also going to hit those with that new date and hard code over that, or how do we, how do we account for those 20 now that we have to do different?
1:09:50 Joel Frick (6124): Does that make sense? From what I'm hearing, it would, it would code over those custom ones. You have to go back to account for those 20.
1:09:59 Joel Frick (6124): Okay, yeah, I think what Rick's saying is, could you have a checkbox that says this is a custom date and it's not going to be affected by mass update, but you got a little box.
1:10:10 Joel Frick (6124): That says this one is not going to be affected by it. I can go out hard if it just gave you a list and said, okay, I'm getting ready to go update all these 300.
1:10:17 Joel Frick (6124): Are there any, you know, I'm applying this to all of these. 
1:10:21 Dave McLean: So, like, hey, I'm setting a custom date. That's one thing, but lock custom date so that it doesn't get affected by the that phase change logic or anything you 
1:10:31 Joel Frick (6124): might be doing at the parent company. Okay, so then, yeah, because we do have some parts that we already know are not going to make it.
1:10:41 Joel Frick (6124): So you have to adjust the due dates because like this. But the one I'm showing right now, this, this was released just a few days ago after phase one.
1:10:52 Joel Frick (6124): So all of my due dates are the final due date in that until I go in and I get what we've got meeting with the supplier next Tuesday.
1:11:01 Joel Frick (6124): Wednesday, and even understand, hey, all right, we got this drawing this late. How are we going to meet these due dates?
1:11:10 Joel Frick (6124): We're going to have to set up custom due dates because we know we're behind. And you don't want to have to go back in and try to remember every time.
1:11:17 Joel Frick (6124): And to your point, you're saying I don't want to accidentally miss some of these that I already have. Yeah, yeah, yeah.
1:11:25 Joel Frick (6124): OK, but what do you think about that, babe? Yeah, I think that's OK. Thank you for that. That didn't sound very positive, but if you need to think about that, it's just something I thought of while we were sitting here.
1:11:41 Joel Frick (6124): Do you need me to put a numeric confidence level on that? What I was wondering is when you go to, you're going to have an online automatic date there, when you, when someone goes in to change that date, it says, hey, you're, you're, someone pops up, says you're customizing this date, do you want to make
1:11:59 Joel Frick (6124): it independent of the other ones from here on out? And you, basically, if you answer yes, then, then, no matter what you do with the group, it's not going to change, it's going to stay the same, but, for a lot of places, it's going to stay the Well, at the same time, we've got this checkbox that says
1:12:19 Joel Frick (6124): this is a phased PPAP. If you create content, custom dates, if you remove that checkbox, it should fall outside of that phased PPAP.
1:12:30 Joel Frick (6124): But, basically, Heather, right? 
1:12:34 Dave McLean: For the, you want to make that a setting of the entire PPAP? Of the 
1:12:38 Joel Frick (6124): within the PPAP, yeah. Is it possible for that to be the trigger that says, I've moved outside of the phased dates for whatever reason.
1:12:49 Joel Frick (6124): Don't update this when I have to change the phases. So, I'm no longer updated. Yeah, yeah, you can't. I'd wanna, I'd wanna, I'd wanna 
1:12:59 Dave McLean: zero in on one model for this. So, it's either a property of the whole PPAP that we're looking at the phase dates or not, or it's a property of the individual tasks.
1:13:10 Dave McLean: I would say the whole PPAP. Yeah, yeah, You're kind of on your own for setting the dates. You got to do this.
1:13:29 Dave McLean: You got to 
1:13:29 Joel Frick (6124): do this yourself completely. That's right. And it's typically special case. We know those few special cases where, again, this, the one I brought up as an example, this drawing was released late.
1:13:40 Joel Frick (6124): I cannot meet those phase due dates. Because I got released after phase one was due. So I know automatically I'm not going to meet the phase due dates because this is a special case.
1:13:53 Joel Frick (6124): And it's rare. Most of them follow the model change phases. 
1:13:58 Dave McLean: Okay, yeah, that's fine. That's easier. So if you guys are okay with that just being a property of the PPAP, that's a little easier to implement than doing it on the task level.
1:14:07 Dave McLean: It just means that for the task, the due date that we apply, it's clearly going to be calculated, and it's going to be something that is something to the effect of, uhm, you know, if this is a model change, first and foremost, so it is related to a phase, based on the fact that it's coming from a model
1:14:25 Dave McLean: change, then apply the number of days before or after the phase due date in order to figure out what the due date should be, 10 days, 20 days, 100 days, whatever the case is, uhm, unless that override at the PPAP level is set to, to say, you know, unlink it from the project phase due dates, or from the
1:14:46 Dave McLean: , from the model change phase due dates. If that's the case, then you'd have to populate a date manually. Yep, yep.
1:14:55 Dave McLean: Okay. So what'll happen is, like, if midway through, let's say that PPAP gets created and linked to the model change without that due date, you're option, or with that option, not activated.
1:15:07 Dave McLean: So it is, it is drawing everything from the phase due dates. Everything's going to auto-calculate out. You're going to see your, you're going to see your due date spread out over months or whatever the case is.
1:15:17 Dave McLean: When you disconnect it, Bye-bye. In that case, everything's blank. So your, your, your task due dates are going to set to null in that case, because now you, now you have to actually go plug something in for each one.
1:15:29 Dave McLean: And you're just working your way down the list, setting, setting, you know, not arbitrary, but specific dates. You spoke dates for every task.
1:15:37 Dave McLean: Should you then come back in and relink it to the project phases to calculate, the calculation will take over and it'll wipe out whatever you had plugged in as the manual due dates.
1:15:50 Dave McLean: So if, if for some reason, you then somebody toggles it back and forth, could be a little frustrating and they'll never do it again.
1:15:56 Dave McLean: But if they, uh, you know, go through and set up their dates, then toggle it back on. 
1:16:01 Joel Frick (6124): Can we set one of those, and I can't remember the technical term, one of those little informational icons that when you open it Tooltip.
1:16:09 Joel Frick (6124): Tooltip that warns you, you know, hey, if you flip one way it does this, but the other way it's going to do this, right?
1:16:14 Joel Frick (6124): And we did a short version of that in the cover text for Tooltip. Don't make it, don't touch this button, because that makes 
1:16:21 Dave McLean: people want to touch the button. Do not click, right? It's like, don't touch the hot plate. The only other thing on this one that I think would be maybe, would maybe make sense is that that connection to the to the phase in the background, like it should still persist.
1:16:39 Dave McLean: Right, we should still be taking the phase due date and applying whatever that number is in the background to that task.
1:16:46 Dave McLean: Because if you have a series of tasks that you're going to essentially detach from the phase and kick out into the future, I can imagine it's probably a meaningful.
1:16:55 Dave McLean: Meaningful KPI to understand both the specific PPAP level and in the aggregate, how far after those phase due dates are things happening.
1:17:05 Dave McLean: So that if we can say, look, we were really on the ball with this one. Everything really worked out. We were able to get it.
1:17:10 Dave McLean: You know, everything was. It was before the phase due dates, or the average was really positive. Whereas you might have these outliers where it's no, some of them were 30, 60, 90 days after they were supposed to be done.
1:17:22 Dave McLean: What is it that caused that? Right? Because then if it's happening overdue, it's likely disruptive. It's likely expensive. It's likely on some level in terms of process change.
1:17:29 Dave McLean: So it is probably noteworthy to be able to look at, you know, and isolate for the ones that did fall into that category.
1:17:36 Joel Frick (6124): Why is it that that happened? Yeah, planned overdue versus a non-planned overdue. Yeah, you got it. Yeah, as long as we're doing we're still able to categorize regardless of the due dates to the model phases.
1:17:49 Joel Frick (6124): Each PPAP to a model and pull out those tasks and say, all right, did these tasks meet the planned due date?
1:17:56 Joel Frick (6124): I think that's fine. Yeah. As long as we still identify it by model, regardless of due dates. 
1:18:03 Dave McLean: No, I imagine on some level that that could also, that becomes a KPI for the supplier as well, right? Like, if you guys override the due date and push it into the future, because, you know, one supplier's stuff is dependent for another supplier's stuff, and so if the first one is late, then the second
1:18:24 Dave McLean: one doesn't even have an opportunity to do it, or whatever that looks like. But, uhm, if they just miss the date that you set for them, whatever the locked-in date was for that particular task, and if they miss that date on average by four days, I mean, that's a meaningful supplier performance KPI, 
1:18:41 Joel Frick (6124): I would imagine. And I'd love to get that back in the supplier scorecards, because right now they're exempt from model change BPAPs, because it is so hard.
1:18:52 Joel Frick (6124): to track the supplier's ability to meet the due dates for just bullshit reasons. Most of the time, oh, I forgot.
1:19:02 Dave McLean: What do you mean, Okay, cool. Uhm, this is a good spot for a break, so why don't we start up again at 5 after 10, and then we'll get going.
1:19:15 Dave McLean: I do have some questions on how do we initiate all this when there's a model change that comes up, so we'll start with that when we get back, but I'll see you guys in 13 minutes.
1:19:22 Dave McLean: Thanks, guys. Alright, hey guys, how's it 
1:33:02 Joel Frick (6124): going? Building. 
1:33:21 Dave McLean: There we go. There we go. OK. 
1:33:28 Joel Frick (6124): Click camera likes you. 
1:33:29 Dave McLean: Yeah, it's really zeroed in on you. 
1:33:33 Joel Frick (6124): Go away, camera. That's got the important one on there. This is, this is four of one and Yes.
1:33:52 Dave McLean: Alrighty. 
1:33:54 Joel Frick (6124): Yeah, we can get started because Luke had to run to another meeting, so. No problem, no problem. It's all my fault if it doesn't get implemented.
1:34:02 Dave McLean: Okay, I want to take it right back to the beginning of the process. I'm a little bit here to understand how we, how exactly we want to navigate the new drawing, new ECS record coming through from Bomex via the integration to the, to the, you know, whatever it is that's causing the decision.
1:34:24 Dave McLean: To do a PPAP and in particular view that through the lens of doing a model change summary in this case.
1:34:32 Dave McLean: So as the integration is kind of defined from yesterday's call every day or every, every, you know, whatever frequency we're looking at, we're going to receive a bunch of records from Bomex that are going to be records of an ECS that contain one or more attached drawings.
1:34:51 Dave McLean: Those records will get joined in or get merged into a part object. Within Intellects that will merge some of the data together with part master as we receive it, but the actual ECS record that we receive would potentially also be the trigger or the launching point for somebody to be notified that there's
1:35:12 Dave McLean: a new ECS that's available and to decide whether to make or to create a new PPAP. Uhm, I also want to be mindful in this discussion that, you know, the users that we're talking about also have access to Bomex in this case, and that some of those workflows might already exist there.
1:35:28 Dave McLean: And it's likely less about us trying to solve this problem. But at the end of the day, what I'm trying to answer is, how is it from the moment a new drawing is available in Intellects to the person creating a new PPAP?
1:35:40 Dave McLean: How do we bridge that gap? Some of the options. Sorry, go ahead. 
1:35:45 Keith Freeman (6781): Well, let me show you, uhm. Alright, so I'm sorry. 
1:35:53 Joel Frick (6124): The heck? I got unmuted. Anyway, uhm, so there's two scenarios. One is the current scenario we use right now. Uhm, and that is how Luke set it up in, in TeleQuest, which is what's called a draft PPAP.
1:36:10 Joel Frick (6124): Yup. So, as soon as that happens. Information shows up in, there we go. In TeleQuest, it creates a draft PPAP.
1:36:22 Joel Frick (6124): And then, come on. I hate these scrollers. And then from there. Thank you very much your time and year. Once you recognize that that drawing has been released, you go in and you review that.
1:36:36 Joel Frick (6124): After you've reviewed the drawings in Bomex and understand what the content is, you make a decision. No PPAP. Yes, PPAP.
1:36:44 Joel Frick (6124): And then this adorable. Rest here that was that is put in there for the cases, both model change and running change.
1:36:52 Joel Frick (6124): Remember where I said there are certain specific cases where regardless we don't request a PPAP? So that case is. Especially for RevZero of the drawing where this design releases this request for a spec drawing submission.
1:37:11 Joel Frick (6124): It does not request the PPAP to that drawing level. So the system doesn't know any different and there's no real flag in it to tell it that it's a request.
1:37:23 Joel Frick (6124): for SPEC or a SPEC drawing. So the engineer, once they review that drawing, they say, OK, no, PPAP needed, yes, PPAP needed, or addressed me.
1:37:35 Joel Frick (6124): That means this is going to be covered in another PPAP. So it then links that draft record with another PPAP.
1:37:47 Joel Frick (6124): Uhm, so again, this goes back to this record is going to be created by the engineering change and the drawing, and then the engineer makes the decision.
1:37:59 Joel Frick (6124): Yes, no, or this is already addressed in another PPAP. The old way, this is before IntelliQuest, it actually created the PPAP record as soon as that information became available, but the supplier never saw it until we 
1:38:21 Dave McLean: actually processed. Makes sense. 
1:38:24 Joel Frick (6124): Yeah, yeah. Let me find. Let's just go to this airbag again. So the way the old system worked is it already created the record.
1:38:44 Joel Frick (6124): And you just process that record as submitted or not. So, again, they addressed that in the old system, NextPrize. We would say that, no, it's going to be submitted in the new level.
1:38:59 Joel Frick (6124): So it's going to be submitted in something else. Okay. 
1:39:04 Dave McLean: Well, I think we can certainly work off of that. I think we can architecturally change that. I the model a little bit.
1:39:19 Dave McLean: So what I would view it as is between the ECS record. Actually, let me clarify, just to make sure I'm aligning this at the right level.
1:39:28 Dave McLean: Since an ECS can contain one or more drawing, would the PPAP align with each, like, one-to-one with the drawing, or would it align to the ECS?
1:39:39 Dave McLean: Drawing and ECS. 
1:39:40 Joel Frick (6124): Drawing and ECS. So that's why you see here, this is the ECS number and the drawing number. record is specific to that drawing 
1:39:51 Dave McLean: and ECS number. So if I, if I had an ECS that had three drawings associated with it, I could potentially have three separate PPAPs.
1:40:02 Dave McLean: So, yes. 
1:40:03 Joel Frick (6124): Yep. So an ECS could have multiple drawings, but it doesn't. So if you see here, if I say ECS DA9-1218, it's associated with drawing 00A, and drawing 0038.
1:40:24 Joel Frick (6124): Got it, okay, 
1:40:25 Dave McLean: so, so, and I would only pick, when I'm creating the PPAP, I would only create one of those two drawing records.
1:40:32 Dave McLean: Or I would, sorry, I would only connect it to one of those two records. Right, both of those records. Both 
1:40:37 Joel Frick (6124): records get created because the ECS affected 
1:40:41 Dave McLean: both of those drawings. Got it, got it, and if the drawing, is there ever a scenario where, like, two drawings on the same ECS and they're, they're both of the same ECS?
1:40:53 Dave McLean: In part, they're just different visualizations of it, or, or something like that, where, like, essentially, you're saying, nope, we've, we've already done the PPAP on the other drawing that satisfies what we need for this one?
1:41:06 Dave McLean: No, if it's called out in the ECS. 
1:41:09 Joel Frick (6124): Then, it needs addressed to that ECS. So, that drawing, the 00A and the 38, those both will need addressed to that ECS.
1:41:20 Joel Frick (6124): Oh, you can't see that. Got it. In a second, let me share. Share the ECS. Okay. So, this is ECS 1218, the one that we just talked about.
1:41:34 Joel Frick (6124): Yeah. So, both 00A and 38 need addressed. Okay. 
1:41:41 Dave McLean: Cool. 00A, 000, 30A. Yep. Okay. Got it. Yeah. So, the 000 and the 470 and the 
1:41:44 Joel Frick (6124): 380, those are parent company drawings that won't release in our system, but they're still on the same ECS. So, if it's in our system, then when Bomex sends the information over, the 00A and the 30A are the records that get created based on the CCS because those 
1:42:08 Dave McLean: are our drawing numbers. Okay. So, the way the trigger would work then is when the integration creates the ECS with, and we'll use this example with the various drawings that are associated with that ECS, each drawing record will then automatically create a record and we're going to call it a, uh.
1:42:30 Dave McLean: Uhm, you know, an initial drawing review or something like that, we can come up with a splash of your name for it, that gets assigned to the person or role or whatever, we'll figure out who it is in a moment, gets assigned to the person to make a determination, exactly as you're doing right now in that
1:42:48 Dave McLean: , that draft PPAP review that's happening. The reason why I want to, I want to keep it as its own record, distinct from the list of PPAPs, is because, from a reporting and KPI point of view, the fact that those draft records are getting created as a PPAP, it means you constantly have to filter them out
1:43:04 Dave McLean: whenever you go to run any KPIs or analytics on the PPAP program. By bridging it this way, you do your review in one place, and if the answer is yes, we need to do a PPAP, then you launch a new PPAP from that record.
1:43:18 Dave McLean: You use it to leapfrog from the drawing to this review to the PPAP itself. In those cases where the need is addressed or the answer is no, then the chain just stops at that that review record.
1:43:31 Dave McLean: So it's a simple task the user is going to look at. It's probably 3 or 4 fields. It's no different than what they're seeing right now, but it creates that control valve that allows somebody to make that determination and to track the answer, the date, the reasoning, who made the decision to create that
1:43:46 Dave McLean: PPAP. If they get it wrong, if they say no, and they click close the record out, and then you realize after the fact, no, you know what?
1:43:53 Dave McLean: We probably should have done a PPAP. You can still always go in and create a PPAP and just select the drawing that you didn't do the PPAP on.
1:44:01 Joel Frick (6124): Yeah, basically manually create it. You 
1:44:03 Dave McLean: got it. OK, who is it that does that review? How is that person? Assigned in the draft PPAP right now.
1:44:10 Dave McLean: So 
1:44:11 Joel Frick (6124): right now, and that's where the difference again, the difference between SQA for mass production and model change. So model change were divided by commodity.
1:44:23 Joel Frick (6124): So if I look at. Absolutely, if I look at.
1:44:35 Joel Frick (6124): These assignments over here. The system automatically. Creates it. And it says IntelliQuest system account. That is the initial. It's assigned to nobody.
1:44:48 Joel Frick (6124): Except that. In SQA. This will show up. It will show up in an engineer's inbox. Based upon the supplier. That that could potentially be assigned to if you request a PPAP.
1:45:07 Dave McLean: Since we know the supplier through the part number. Yes. We could do this. So, if the supplier is already set up and we already have an engineer assigned to that supplier in the supplier relationship management application.
1:45:22 Dave McLean: And again, it would go through, uhm, the way we're doing it on the supplier side is that you would assign that person by populating a role for that supplier, uhm, call it PPAP engineer for argument's sake for the moment.
1:45:37 Dave McLean: Uhm, whoever that person is, let's say it's Dave for Pilkington North America Inc. When a new drawing associated with a part that Pilkington make comes through.
1:45:48 Dave McLean: If it's a model change in this case. Right, so therefore it's a little bit dynamic in this case, but for a model change we would target that initial review task.
1:45:59 Dave McLean: To the PPAP engineer role associated with 
1:46:04 Joel Frick (6124): that particular supplier. Yes, and I think to further that, I think one of the ways that we address this shortcoming right here, where it says Mike Nordyke, anything that's model change.
1:46:16 Joel Frick (6124): Right now, the SQA engineer downstairs assigns it to the model change group later, who then assigns it to the model change engineer.
1:46:27 Joel Frick (6124): To address that shortcoming, I think what we would want to see in Intellects is three different types of PPAP engineers.
1:46:38 Joel Frick (6124): One for model change, one for mass production running changes, and one for PCRs. Is that possible to 
1:46:48 Dave McLean: And those are all assigned on a per supplier basis, or are some of them assigned on a per item basis, like per part?
1:46:56 Dave McLean: We had 
1:46:57 Joel Frick (6124): talked about doing it per part so that model change can stay in the commodity market. There are categories that are in, but I think like we currently do with the model change, where it by default goes to the group leader if it's model change, I think if we have an engineer that is the primary for a supplier
1:47:19 Joel Frick (6124): , then it's that engineer could then reassign based upon who's actually got that part. But if it's easy enough to do at a part level rather than at a supplier level.
1:47:36 Joel Frick (6124): I think that doesn't require reassigning basically most of the model change feedbacks, if 
1:47:45 Dave McLean: it can be done at the part level. My only, my only concern with doing it at the part level. Is the volume of parts.
1:47:55 Dave McLean: Yeah, so somebody would have to manage that, which means that like what you really would want to have is some sort of meta category of parts like groupings of parts that we could we could assign those roles on a rule 
1:48:08 Joel Frick (6124): based model. Yeah, and I agree with that. I think it would be very difficult to manage that at the part level, um, because we briefly discussed it as a way to deal with that.
1:48:21 Joel Frick (6124): But honestly, I think it's easier to deal with at a part supplier level than it is at a part number level.
1:48:31 Dave McLean: Okay. I mean, just to indulge the thought for a second, how is it that people are assigned to parts now?
1:48:39 Dave McLean: Like, how would you know? It's just a big spreadsheet that says this person 
1:48:43 Joel Frick (6124): is responsible for this part. So in model change, depending upon the scope of the model change, there are a certain number of people assigned to it.
1:48:55 Joel Frick (6124): So, like, if it's a really minor, minor change. There's only one or two working on everything in that model. If it's a major, minor, or a major, it's all hands on deck.
1:49:06 Joel Frick (6124): Every single one of us is working on that model. And the model lead, then, is the one who decides who's working on what parts.
1:49:18 Joel Frick (6124): And it's typically assigned based upon them having similar parts for other models, because there's a lot of sharing of components across models.
1:49:26 Joel Frick (6124): So, it's typically assigned if we're doing a model change, you will have both the minors and the majors for that 
1:49:35 Dave McLean: and those parts. Okay, no, but I think, I think creating and managing that list of data and intellects right now would be, it's not that it's impossible, it's that if you're going to use it for workflow routing, it has to be, it has to be perfect.
1:49:50 Dave McLean: Um, and I think that would be a challenge. So I like the kind of idea where you're going with it, where it's, you know, based on the type of change that we're talking about, will we route it to one of those three roles that are assigned to the supplier?
1:50:07 Dave McLean: And we'll, we'll make sure that that's, that person also has the capability to reassign it to anybody else in the, you know, whatever respective team we're talking about.
1:50:17 Dave McLean: Yeah, and that's the 
1:50:19 Joel Frick (6124): way basically we're doing it right now. 
1:50:22 Dave McLean: Okay, so then that way, I mean, what's the response level that's typically looking for for this? If I had to set a due date for completion on that initial review to make a determination on whether we need to PPAP or not, how long is that typically taking?
1:50:38 Joel Frick (6124): The standard in the past, this goes way back because I created the tracking system for it, the standard in the past was you had two weeks from the time the ECR was released, the drawing to process that drawing review 
1:50:54 Dave McLean: and the PPAP record. Okay, okay, so we set a two-week, two-week due date on the initial review task, which is just purely to make a determination, are we creating a PPAP record?
1:51:05 Dave McLean: Is it PPAP or not, is really it, and then the PPAP itself goes forward. Now, let's talk about, once that, once that happens, so let's talk about this model change scenario where you've got hundreds of PPAPs that are, we're going to bind together.
1:51:19 Dave McLean: Do those, do those ECS, records get released all at the same time? Oh God, I wish they did, 
1:51:27 Joel Frick (6124): but no, they're, 
1:51:28 Dave McLean: they're all over the place. Okay, so when the first one gets released, at the beginning of that process, when the very first ECS gets released, the for a model change gets released.
1:51:42 Dave McLean: Does the person reviewing it know that it's part of a broader model change that's going to have many others coming?
1:51:49 Dave McLean: Yes, so yeah, 
1:51:52 Joel Frick (6124): in our model changes, uhm, one of the things that we request in the early stages is, what is the change content for this model?
1:52:02 Joel Frick (6124): So that gives us a general sense of what parts will be changing. So that's the broad scope. And then after that, as the project moves forward, uhm, our design group releases the drawing release list, which tells us which drawings they are going to release and when they're going to release those drawings
1:52:24 Joel Frick (6124): . I would like to say that those release dates mean something, but when they miss a release date, they just change it so that it's not late anymore.
1:52:35 Dave McLean: Yeah. Yeah, I think at the beginning of a survey. The key part is when the user is doing that initial review, is there consistently a trigger for them to know that that PPAP that they have to create has to connect to a specific model change summary record?
1:53:01 Dave McLean: And by extension of that, who is it that would create that model change summary record in the first place before that first ECS comes through?
1:53:11 Dave McLean: The model lead? The model lead. 
1:53:14 Joel Frick (6124): Yes. So the model lead is the one who, so when I showed you those due dates. Yeah. Uhm, the model lead decides what those dates are with our production control and planning groups based upon the master schedule for that model.
1:53:30 Dave McLean: Okay, so there's sort of two different streams of usage that are happening here. For model leads, model leads are going to go in and, you know, they're going to create model change summary records and start to set up the project, essentially set up all the phase dates and, and, uh, or projects.
1:53:46 Dave McLean: The project phases and stages and, again, whatever the cells are, whatever we call those with all the respective dates that they're expecting.
1:53:53 Dave McLean: And that might be in flux early on. Eventually, when we start receiving ECS records that are related to that model change, Thanks for watching.
1:54:02 Dave McLean: Bye. The reviewer of that ECS record is going to look at it and say, yep, this is a PPAP, and they're going to know at that point this is related to a model change, and they're going to say in the dropdown, it relates to the DX3 model change, or whatever the case.
1:54:16 Dave McLean: They would be able to do all that. They would have a way to get awareness across the board, because you're probably going to show me those right on the drawing.
1:54:23 Dave McLean: Yeah, so in that ECS, 
1:54:27 Joel Frick (6124): that, the ECS that releases that drawing, it tells us the timing that applies to that change. So we know, when we review this drawing, which model that applies 
1:54:41 Dave McLean: to. Okay. Cool. For the, uhm, for the model lead, is there enough of a character? For them to use intellects from all the stuff that we've talked about that they'll actually go in and do it and create the model change summary record before all the 
1:55:01 Joel Frick (6124): ECS records start to come through? Absolutely, because it's the responsibility of the model. Lead to track the status of all the PPAPs related to that model.
1:55:12 Joel Frick (6124): So it is in their best interest to make sure that everybody working on that model is following the same path.
1:55:19 Joel Frick (6124): So when I showed you my. Pull it back up again. And I showed you my drawing review tracking sheet.
1:55:37 Joel Frick (6124): This right here. Was sent out by the lead for the DX3R, and we were told, when you review your drawings, these are the dates that you are to use.
1:55:49 Dave McLean: Got it. Got Got it. Okay. Perfect. Then that closes the loop on the creation of the process. And again, that summary, that only applies for model changes, that concept of sort of running multiple connected PPAPs together where their dates and timelines are Bye-bye.
1:56:11 Dave McLean: Really sort of being dictated by a broader project plan, that's specific to model changes. If I use the term model change in the naming convention of that object, that's not going to be something that, like, other groups trying to use the same thing are going to look at and say, oh, but 
1:56:26 Joel Frick (6124): we're not doing the model change here. Right, so the running changes and the PCRs are on their own timelines specific to that, uh, drawing number and change.
1:56:41 Joel Frick (6124): Okay. Okay. 
1:56:43 Dave McLean: Okay, so in that case, is this part of a model change? No, they don't see the model change summary drop down to select it, which means that from a logic point of view, all the due dates are when the, when the tasks fully populate on the form, the, uh, role that's responsible will populate from the template
1:57:05 Dave McLean: for the tasks, but the due date will not. The due date will just be blank and they'll have to go set all the due dates manually one by one.
1:57:11 Dave McLean: Correct. Yeah, all of those due dates depend on 
1:57:13 Joel Frick (6124): the when the supplier is planning to make that change. Cool. Generally, it's, it's roughly expressed if it's a running change, but it always depends upon when the supplier can actually do it.
1:57:30 Joel Frick (6124): It's either running out old inventory or making the tool change, whatever. It is always specific to that VPAP. Very, I can't think of any, well, we did talk about the one scenario, but, uhm, where, where it affects both, Cool.
1:57:46 Joel Frick (6124): Mass production and model change. There are those scenarios, but again. Implementing it in mass production. Is defined by the PPAP as a running change and with model change.
1:58:02 Joel Frick (6124): We will incorporate that ECS into our model change PPAP, but it won't change the due dates for the 
1:58:11 Dave McLean: PPAP for model change. OK, OK, cool. Awesome, uhm. We've talked a lot about how we structure the PPAP as a whole and its relationship to other things.
1:58:23 Dave McLean: We've talked about the tasks in the sense of, like, due dates and, you know, generating them from a template from lists of content, but we haven't actually talked about the makeup of the task itself.
1:58:34 Dave McLean: So in this context, when a task gets assigned within a PPAP, most of the examples we talked about here are supplier focused.
1:58:43 Dave McLean: We're assigning it to the supplier. Are there tasks that are done as part of a PPAP by internal users at SIA as well?
1:58:49 Dave McLean: Bye-bye. So, yes, I will. So, 
1:58:53 Joel Frick (6124): in these requirements. These two tasks right here. Uhm, this is very similar to the pilot part inspection.
1:59:15 Dave McLean: Yep. 
1:59:16 Joel Frick (6124): Basically, the PPAP sample being the last pilot part inspection. Because it is the last time we ask them to send to us unapproved parts for review and inspection.
1:59:28 Joel Frick (6124): Because once we approve their PPAP samples, then it's a mass production part. So these two tasks right here. Are actually internally assigned.
1:59:41 Dave McLean: Got it. Okay. 
1:59:43 Joel Frick (6124): And that's a problem with our current system. The supplier can see these as well. IntelliQuest doesn't have the ability for us to hide this from the supplier.
1:59:52 Joel Frick (6124): So we have to tell the supplier, don't touch this. This is for, this is for our associates 
1:59:57 Dave McLean: when they do the inspection. Yeah. So can I take that to infer then that when it comes to what the supplier should be able to see, it should really be limited to just, the tasks that they are responsible for.
2:00:09 Dave McLean: They shouldn't see clearly the tasks that internal SIA users should see. And by extension it, I can also imagine it means they shouldn't see 
2:00:18 Joel Frick (6124): the full PPAP as well. Ah. We want them to be able to see the PPAP. 
2:00:27 Dave McLean: Okay. So, show them the PPAP, but hide the non-supplier tasks. Right. 
2:00:35 Joel Frick (6124): They, they. Again, the main reason being is it causes confusion because they can't they think they have to fill it out.
2:00:41 Joel Frick (6124): Yeah. Because they see that as a task, even though it's assigned internally. But, again, that's a weakness of IntelliQuest, the 
2:00:47 Dave McLean: inability to hide that. Okay. So, when they log into the supplier portal in IntelliXport, they're gonna, you know, log into a home page.
2:00:54 Dave McLean: It's, you know, hey, these are my, uhm, you know, these are our recent supplier scorecard results, and here's the tasks that are assigned to me, specifically the things that I need to complete my punch cards.
2:01:08 Dave McLean: But for, you know, if I were to then navigate to one of the multiple supplier facility records that I have access to, as a, as a supplier user for that facility, uhm, if I click into it, would I then see, you know, hey, a list of active PPAPs, and then that's when I click through, and I can see the PPAP
2:01:26 Dave McLean: , less the internal supplier, or in, 
2:01:28 Joel Frick (6124): internal, ah, user records? Yeah, so this, that's exactly how our current collaboration portal works with IntelliQuest, so they've got their home, and it's basically a summary of PPAPs.
2:01:40 Joel Frick (6124): problems, yada, yada, yada, and then they can go specifically to the PPAPs, and see what PPAPs they have to submit, the ones that have not been fully closed out, so, uh.
2:01:56 Dave McLean: These are, these are PPAPs as a whole, or these are tasks that are open for them against the specific PPAP?
2:02:03 Joel Frick (6124): So, these are PPAPs as a whole, but then when they go into the PPAP, then they see the tasks within that PPAP.
2:02:10 Dave McLean: Okay, yeah, wouldn't be that different. On our end, it would be, you know, it wouldn't be a tabular layout the way it is with tabs at the top, it would just scroll down, you see the list of tasks.
2:02:19 Dave McLean: That list of tasks would be filtered to just the, uhm, just the, the supplier tasks. Not necessarily the ones that are directly assigned to them, because in theory, some of those tasks might be assigned to other users at that company.
2:02:35 Dave McLean: Uhm, you might have some of them going to one person at that company, some going to Dave, some going to Matt.
2:02:41 Dave McLean: Uhm, but I would, if I go into some of the see it, I would see all of the tasks assigned to people from my company.
2:02:51 Dave McLean: Yeah, cool. What about historical PPAPs? Once they're finished, can they 
2:02:55 Joel Frick (6124): still go in and see historical? Suppliers can see that? Yes, OK, I didn't know if they could see it, because I know they have to search.
2:03:04 Joel Frick (6124): Yeah. OK, yeah, that's close. 
2:03:09 Dave McLean: OK, when they're completing a task, so you've assigned me a task and it's, you know, it's active, it's something I've got to go do now, uhm.
2:03:21 Dave McLean: What what am I seeing typically? What am I being asked to give? Am I, you know, being asked to put a completion notes, a date completed, completed by and like a file attachment?
2:03:31 Dave McLean: Is that 
2:03:31 Joel Frick (6124): that's typically the extent of it? Yes, so when they process it, there's typically an attachment and if there is an attachment required, we set that up in that task to say an attachment is required to be able to complete this task.
2:03:49 Joel Frick (6124): And then there's a checklist that they go through to say, you know, have you done all the things that show you completed this task?
2:03:57 Joel Frick (6124): And then you complete the task. 
2:04:00 Dave McLean: This is one that's completed already. Okay, so there's a checklist of questions that are specific to this task type? Yes, yes.
2:04:08 Dave McLean: Okay, so they answer a general question, completion notes, they, we have a property in the background for you to decide whether one or more attachments is required for that particular thing.
2:04:20 Dave McLean: So, because I imagine sometimes the other attachments is a couple of files taken together. Yes. Yep, so we, they go in and put whatever attachments on which satisfies that criteria.
2:04:31 Dave McLean: There's also a checklist potentially of some additional questions that are specific to that task type 
2:04:36 Joel Frick (6124): that generates into it. Anything else? Uhm, no. I mean, it's upload, fill out the checklist, and then submit.
2:04:49 Joel Frick (6124): And it automatically puts the due date in there. So remember me talking about telling the software suppliers that's who we had to put this on ones where they can still see it.
2:04:57 Joel Frick (6124): We don't want them to 
2:04:58 Dave McLean: touch. Don't do it. Got it. Is this, uhm, this, or these, these documents that they're uploading, these attachments, are these are these revisioned documents where, like, we need to, we need to build a structure under which there's a periodic review that's set up for, like, outside of the context of 
2:05:20 Dave McLean: PPAP or anything, where, like, if they're uploading it, hey, this is a document that's got an annual review. Somebody needs to go in and make sure that it's current and up to date and that we have the latest version?
2:05:30 Dave McLean: Or is it, is that really all handled by the PPAP process itself? If something changes on your end, then you'll, you'll let them know that you need a new 
2:05:39 Joel Frick (6124): version of it or whatever the case is. The PPAP itself handles that, but the second answer to your question is we are currently discussing that for parts that don't change regularly because we know that concern exists where after a certain period of time they're having been no ECS to this.
2:06:01 Joel Frick (6124): Supplier has continued to send us this part. At some point, we need to make sure that everything is still okay.
2:06:09 Joel Frick (6124): And so we've been talking about how to trigger a window. It says, all right, this has been so long since we've had a PPAT for this part, and we're still using it.
2:06:21 Joel Frick (6124): We need to ask the supplier to update their information. So that is a current discussion we're having about how to move forward with that, but we don't currently have they do it.
2:06:31 Joel Frick (6124): Okay. In, in the, in the vein of talking about plumbing. 
2:06:37 Dave McLean: Yeah. 
2:06:38 Joel Frick (6124): I guess one of the things that we would need to be able to easily understand would be based on my drawing number.
2:06:51 Joel Frick (6124): How long has it been since I had a peak tap on this drawing? So it would be like data tied to the drawing number and it would be like the leaching data of the peak map.
2:07:05 Joel Frick (6124): I'm not sure, 
2:07:09 Dave McLean: I'm not sure that's going to make the most sense for that. I think The drawing is critical, obviously, because, you know, obviously, everything's going to come back to it, but like if we think about it more in the vein of it being like a controlled document.
2:07:24 Dave McLean: I'm not saying it's going to go to document control, because it's not quite the same, but it's more of a like when I upload the document.
2:07:33 Dave McLean: I think the first question I need to really think of is is this document that I'm uploading actually a new revision of something that we've previously uploaded in the past?
2:07:43 Dave McLean: I would have to be aware of that. 
2:07:48 Joel Frick (6124): So, uhm, in a scenario where. OK, so QVB data. Oftentimes we want to see the history, the history exactly.
2:08:01 Joel Frick (6124): So I want to see this is. But I did through all that. I want to be able to compare that in the same document, so I think that's what.
2:08:23 Joel Frick (6124): But he's talking about where, yeah, this is. I don't know if it's a revision to the document or not. It's it's not really exactly the same thing.
2:08:35 Dave McLean: I mean, it's just the reason it all matters is that if it if. We aren't aware of what like what document that is.
2:08:42 Dave McLean: If assuming there was like a single master record for that document that contains every revision of it. If we aren't aware of that, or more importantly, if the supplier who's uploading it isn't aware that there's one already there.
2:08:55 Dave McLean: Then they're just going to constantly upload it as though it's a new document, which means you're just constantly creating more volume of document reviews down the road.
2:09:06 Dave McLean: Because they're never superseding the 
2:09:08 Joel Frick (6124): original one. But then that also goes. It goes back to the decision from the engineer about what documents I want updated.
2:09:18 Joel Frick (6124): So then the engineer says, I need these documents updated and submitted. And then the system automatically pulls forward the previously approved level.
2:09:27 Joel Frick (6124): I think it eliminates that concern and puts that decision at the engineer. Hey, the old version is still fine, but I need you to update these documents and submit them.
2:09:38 Joel Frick (6124): Yep. So the short answer is provisioned history. Of that document. Approved document that approved documents. 
2:09:54 Dave McLean: OK, so if we if we play it now for a specific example for a moment and and. To simplify this, I'm going to or no, not to simple, because it's not actually a good example.
2:10:04 Dave McLean: Let's say every one of these documents is part specific, so part submission warrant for part whatever part number whatever. So when they get this task to go and upload it.
2:10:15 Dave McLean: Upload the part submission warrant. The task to do the thing is one concept, and that's being populated from the task library.
2:10:24 Dave McLean: But in the task library, if you're also then mapping that task to a document category. And the document category might be in the same thing, it might just be part submission warrant, then when the user goes in to complete the task, we can create a placeholder for that document called PartSubmissionWarrantDocumentFile
2:10:47 Dave McLean: . Or DocumentContainer, and we can populate it with a relationship to any prior instances of that particular document category for that particular part.
2:11:03 Dave McLean: Upload the file is they're not. They're not saying, you know, I want to add a new document record and attach the file.
2:11:09 Dave McLean: What they're doing is seeing a placeholder for them to drop that specific document into a document category container that is aware of prior uploads of the same category for that document, or for that part number, and it's that combination of the document category and the part number that creates the
2:11:29 Dave McLean: document parent record that contains all revisions of it. Yeah, 
2:11:34 Joel Frick (6124): I mean, I like that. So the standpoint of. Continually, yes, that document. Uhm, so when you first started asking the question, I thought you were asking about this.
2:11:46 Joel Frick (6124): Where we track. What was submitted and rejected? Got it. Yep. We currently have that, like, within a particular PPAP. If we reject something, uhm, then it retains a history within the PPAP of what was rejected the last time.
2:12:03 Joel Frick (6124): So, okay, no, 
2:12:05 Dave McLean: that's a good note. We want to we want to make sure. Okay. Let's make sure of that. That we want to have a rejection history so that we can see what was rejected for each of the tasks.
2:12:13 Dave McLean: Yeah, 
2:12:13 Joel Frick (6124): and something, something there. Yeah. Yeah. I'm glad you brought that up, Keith, because something there that I actually really like about the way our current system works is on the supplier side, it removes it from the, from the document, or, sorry, from the requirement.
2:12:33 Joel Frick (6124): Yeah, it's, it's no longer there at all. The way, the way it reads in the history, it says was deleted from the requirement.
2:12:40 Joel Frick (6124): Which is basically what it, I don't know if that's really technically what's happening, but it basically removes it from there and then all we can see it on what was rejected so that I think that has been really, really helpful in some of the.
2:12:55 Joel Frick (6124): It happens. It happens all the time. Some of the disputes that come up with, uh, why, why is this past due?
2:13:02 Joel Frick (6124): Why is this being rejected? And so on and so on. We haven't had that history. So I think that's actually.
2:13:08 Joel Frick (6124): And I think that was a huge improvement over NextPrize because with NextPrize. Once you rejected it, if you, the engineer, didn't delete it, it was put on the supplier, and then sometimes they would leave the old one there and upload the new.
2:13:24 Joel Frick (6124): It's like, no, no, I don't want the old ones, you know. So, I like that it's still there for us, you know, but it forces the supplier to upload the new version.
2:13:36 Joel Frick (6124): That was definitely a huge improvement over NextPrice. 
2:13:41 Dave McLean: Okay. So, in the, if we can figure out an easy-to-use structure, I really, really want to emphasize easy-to-use. If it requires the supplier to go search for prior instance of a document to connect it to, then it's not worth doing because they're not going to do it.
2:14:00 Dave McLean: It's just going to constantly be creating tasks for review that isn't needed. But let's say we can figure out a mostly automated way to do this.
2:14:07 Dave McLean: So when they go to upload a new part submission warrant for part XYZ as part of a PPAP, that that new upload, in addition to the fact that it's completing a task, it's helping them complete a PPAP task, but it's merging that in as a new revision to any prior, uh, part submission warrant for the same 
2:14:28 Dave McLean: part. So that on their supplier project, if they were to go look at all documents that have been uploaded, search for part submission warrant for part XYZ, they'd see one record and click into it where they'd see the current version of it, which was uploaded from PPAP task whatever, and prior versions
2:14:46 Dave McLean: of it that were uploaded on whatever dates that they were sent in. That parent record can then have a review frequency applied to it that is specific to whatever the document category is.
2:14:59 Dave McLean: So, perhaps part submission warrants are not a great example for this. Maybe this is one that you'd want. You know what?
2:15:03 Dave McLean: No, we don't. This isn't one that, in lieu of a new PPAP, we would want to see an annual or biannual review task.
2:15:10 Dave McLean: But maybe the inspection standard is something where we want, we want them to go in and look at it, because if we don't do another PPAP for that part for the next two years, then we at least want to make sure that somebody is looking at that inspection standard on an annual basis.
2:15:25 Dave McLean: And when they go in, it just creates a task for them. It says, hey, you know, your annual review for inspection standard for part 1, 2, 3, 4, 5 is due.
2:15:33 Dave McLean: Uh, you give them some instructions on what you're looking for. Let us know if there's changes that have been made or that everything is still accurate and complete and yadda yadda.
2:15:42 Dave McLean: And they fill out a, you know, fill out a comment box to say yes, it's done. The catch though is that if that review triggers a revision on their end, does that trigger a new PPAP for you guys?
2:15:55 Joel Frick (6124): But what you're talking about, it sounds exactly like the QBA, the testing. Yeah. One of the things that we've been trying to lift off the ground, but it seems like everything is every time we float that balloon, somebody is playing Skeet and shoots the balloon down.
2:16:13 Joel Frick (6124): But what you're describing is exactly what we're trying to do with the QBA. And you're right. And if we can do it by hand, by document type, the Park Submission Board is always unique to a particular PPAP.
2:16:29 Joel Frick (6124): The inspection standard is almost always unique to a particular PPAP. But the QBA is their testing results. And if we can have a part that's been out there in production for a period of time, we want the supplier to be doing a certain amount of testing after the initial approval to show that that part
2:16:51 Joel Frick (6124): still meets those requirements. And what you describe is exactly what we want. We would want to do. Yep. Without a trigger all at the same time?
2:17:03 Joel Frick (6124): Just for QV. Okay. Yeah, because, I mean, they're supposed to do their measurements monthly, and they're testing yearly. And we don't really have a good way to follow that.
2:17:12 Joel Frick (6124): One of the discussions we were having was, do we ask them to submit a new PPAP? And that was actually the current plan, right?
2:17:19 Joel Frick (6124): It was to, a yearly triggered PPAP. Yeah. But if the system can automatically say, hey, this QVA is one of those things documents that needs updated, trigger the supplier, okay, you need to submit an updated one.
2:17:34 Joel Frick (6124): But the question is how to review and who to 
2:17:37 Dave McLean: review once it's approved. Okay, 
2:17:43 Joel Frick (6124): so let's think about this. Uhm, and if we're defining the running change engineer versus the model change engineer would default to the running change, the mass production engineer, correct?
2:18:00 Joel Frick (6124): Updated QVA. You can just look, it's resubmitted. 
2:18:07 Dave McLean: Okay, so if we compare and contrast two, two documents here, let's say inspection standard versus, sorry, was QVA? 
2:18:16 Joel Frick (6124): Yup. QVA. Quality Validation CPA. 
2:18:20 Dave McLean: Got it. So if you've got a task for the inspection standard, that's not something that should be changing between PPAPs, because it's really PPAP specific.
2:18:31 Dave McLean: So the document category for that one would basically say no periodic review required. We're going to review this as needed as PPAPs change.
2:18:41 Dave McLean: And I suspect that most of the documents that are being uploaded in the PPAP process are probably going to fall into that category.
2:18:48 Dave McLean: Yes, then you get to the QVA, which in that case the QVA is something that requires periodic. I don't know if it's.
2:18:57 Dave McLean: I don't know if revision is the right word for it, because it's not really revision. It's you're looking for is test results in this case.
2:19:04 Dave McLean: But at least some some follow on update or submission that that's needed for it. And in lieu of that, we'll call it a new revision.
2:19:13 Dave McLean: So in that case, your document category record for QVA that you manage in the background would say yes, we do want a periodic revision.
2:19:21 Dave McLean: We would like to see, uhm, every three months. We'd like to see another another file, for example. So when the PPAC task gets created and generated for that QVA and sent to the supplier, Bye.
2:19:37 Dave McLean: The supplier looks at it, they're gonna, they're gonna see their little, uh, section to upload a document. But instead of it just being a file attachment, What they're seeing is a document record for the QVA for that file, or for that part, I should say.
2:19:53 Dave McLean: And to upload it, they click a little plus link, or add document link, or something like that, that triggers, that creates a new revision of that QVA against that PPAP task.
2:20:06 Dave McLean: So, if it's the first time through, because it's being uploaded, and initiated by the PPAP, then they are actually uploading revision 1 to populate that, that QVA document.
2:20:17 Dave McLean: They complete the task, everything gets accepted, and that document now shows up in a list of documents that the supplier can see in their portal.
2:20:27 Dave McLean: That document also carries a review frequency, and so, you know, we said every three months, maybe a month before the due date on that one, we activate the task and remind the supplier, hey, you need to upload new QVA results for part number or whatever, and they go in and do that by creating Rev2 of
2:20:46 Dave McLean: that document. By doing that, that completes the review cycle and pushes the date out into the next, into the next step.
2:20:54 Dave McLean: But the question, like this process. This workflow isn't actually that difficult to build out for QVA. The question is, do we need to consider this as something that is just QVA specific?
2:21:07 Dave McLean: We're just carving it out or, or maybe even, maybe a little broader and it's like testing results is what we're looking for from them.
2:21:13 Dave McLean: And not consider it in the vein of, of documents that have been uploaded, because this isn't really a document. This is a, this is a 
2:21:21 Joel Frick (6124): result. This is a record. I've always thought of it more like a record. It is, yeah. Yeah, I 
2:21:33 Dave McLean: agree. It's a record. So if we carve records out from from these for a second from the remaining PPAP tasks where you ask the supplier for stuff.
2:21:45 Dave McLean: How many, How many of those are, like, what would be, if you had to ballpark it, what would be the split between records that you're asking for, where you presumably would want to see more records down the road after the PPAP is concluded, versus 
2:21:57 Joel Frick (6124): documents where it's a point in time? Materials are the only ones that I would consider. Records versus documents, right? I agree.
2:22:06 Joel Frick (6124): Material certs, I always say this to the originals, but realistically, they should be showing us they're continuing to use the right material.
2:22:14 Joel Frick (6124): That's also annual. And then QBB, we've already said it's monthly. By requirement, anyway, we never check it. We would certainly not get into a scenario where we're checking their QBBs every single month.
2:22:25 Joel Frick (6124): Yeah, that would be overkill. Is it? So, Luke and I agree that three of our existing requirements are records. They're basically snapshot records that are submitted as documents at the time you have submission, but there are things the supplier needs to continue doing, and that we would want the supplier
2:22:45 Joel Frick (6124): to submit on a regular basis. But the follow up question to that is. Can we turn that on and off at the PPAP level?
2:22:59 Joel Frick (6124): Or would that 
2:23:00 Dave McLean: continue in perpetuity? No, probably, uhm. 
2:23:05 Joel Frick (6124): So the example would be. I want that, let's say, I want that, uhm, annual testing data. I want that, uhm, material certification data, and I want that dimensional data for this, this airbag that we're talking about.
2:23:20 Joel Frick (6124): Let's just say this passenger airbag. I want that. This headlight. This, yes, for this headlight, it's the reason why we're talking about it, yes.
2:23:32 Joel Frick (6124): So, uhm, so I want it for that, but for this, you know, A-pillar trim, A-pillar trim, maybe that's a bad example too, but A-pillar trim, I don't need it for that.
2:23:44 Joel Frick (6124): So I can do it part by part, PPAP by PPAP, and kind of decide, or maybe even a mixture of it, where I would say, I do want the annual testing for the A-pillar trim.
2:23:55 Joel Frick (6124): But I don't necessarily 
2:23:56 Dave McLean: need to get that monthly, uhm, measurement, measurements. Okay. For the, for the moment, just because I do want to break in three minutes for, so you guys can grab some lunch before your fire drill, uhm, for the moment, let's consider the inspection results as a, as a recurring task component.
2:24:17 Dave McLean: Let's consider that off to the side. We're going to circle back to that right after lunch, uhm. because I wonder if there is a world where maybe, maybe the supplier survey stuff can actually fill 
2:24:32 Joel Frick (6124): in for that as well. As far as I'm concerned, as long as there is some data tied back to that drawing.
2:24:41 Joel Frick (6124): Yeah. To that, that, that. To whatever the application that it lives in, in my opinion, the application that it lives in is not terribly relevant.
2:24:51 Joel Frick (6124): The application itself isn't that important, but it does need to tie back to an original PDF record or that drawing somehow.
2:24:59 Joel Frick (6124): Yeah, and from my end, so just thinking about this 
2:25:03 Dave McLean: from a statement of work, like scope of work for this project point of view, the requirement to have the user upload the results as part of the PPAP, it's just a file attachment.
2:25:14 Dave McLean: Yeah, that's fine. The requirement or the ask of like, hey, can we try to make that a recurring thing that happens and goes beyond the life cycle of that PPAP record and instead becomes a monthly or annual, you know, record update task.
2:25:33 Dave McLean: That's a piece that on its own is not something in scope, but it doesn't mean we can't meet that requirement.
2:25:39 Dave McLean: It just means that we might have to sort of work that into another piece that we have agreed to do, which is the supplier survey component.
2:25:46 Dave McLean: So that's, I want to think about that a little bit over the next hour here, but for the moment I would say.
2:25:53 Dave McLean: When we're talking about the documents as opposed to the records that they're up to uploading, the documents just go in and they just go in.
2:26:00 Dave McLean: I mean, they can be searched. They can be. They can be found later on, but I think in this case.
2:26:04 Dave McLean: In this context, it's less important for us to be managing revision history of individual documents, because for those documents they will be revised as part of the PPAP process.
2:26:15 Dave McLean: That is the revision process. We don't need something that sits outside of PPAP. For those documents. Correct. Yeah, 
2:26:22 Joel Frick (6124): the PPAP is just a snapshot at that point in time that says, okay, we meet those requirements for this 
2:26:30 Dave McLean: PPAP. Cool. And if they, if they revise that part submission warrant that they did the last time, they would be able to see the history of that, because we've already talked about, hey, we want to connect the part submission warrant from this PPAP to the part submission warrant of the last PPAP, so that
2:26:47 Dave McLean: if we say, hey, no change is made, they don't have to re-upload the file. They just pull it through from the last one.
2:26:54 Dave McLean: Yeah. Okay. And as long as we can do 
2:26:56 Joel Frick (6124): that by requirement type. 
2:27:00 Dave McLean: Yes. 
2:27:00 Joel Frick (6124): When the engineer processes that record and says, you don't need that data, pull the last one forward. Yeah, you got it.
2:27:07 Dave McLean: Yep. Okay, cool. Let's break for lunch. Rick, we'll plan for 1 o'clock, but let us know how things are going with the fire drill.
2:27:17 Dave McLean: It'll be 
2:27:17 Joel Frick (6124): 1.10, please. Let's go with 1.10. Yeah. Sounds good. Awesome. We're going to have a few thousand people that have to come back in the door.
2:27:23 Joel Frick (6124): Yeah. Thank you. Thanks, guys.
