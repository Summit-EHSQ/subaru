---
meeting-title: "Subaru | Summit EHSQ | Phase 2A Design Workshop Day 2 - Afternoon"
meeting-date-time: "2026-09-30T13:00:00-04:00"
timezone: America/Toronto
participants:
  - Dave McLean
  - Joel Frick
  - Jamie Dossey
  - Luke Filippo
  - Keith Freeman
  - Rick Redmond
  - Greg Chappell
  - "Damian (surname not captured)"
  - "Kate (surname not captured)"
artifact-type: meeting-transcript
---

0:00:00 Joel Frick (6124): Thanks for Alright, we got most everybody here.
0:00:37 Joel Frick (6124): We're going to get started Dave, we're out of time. Alrighty. 
0:00:43 Dave McLean: Sounds good. Everybody have a good lunch? Yeah, yeah. 
0:00:48 Joel Frick (6124): Have a nice walk 
0:00:49 Dave McLean: and walk it off too. Good stuff, good stuff. OK, let me. OK, Loom Notetaker is in. Perfect, OK, so. Oh, before the break, we were talking about the actual task makeup itself.
0:01:12 Dave McLean: So what types of things that we would expect either the supplier or the internal user to be able to You Capture within any given task when they're trying to complete it.
0:01:25 Dave McLean: We talked about The need for people to be able to upload documents and the possibility of doing some sort of a record upload in the process.
0:01:37 Dave McLean: We'll come back to that in a moment. We talked about there being a checklist. I'd like to dig into the checklist a little bit as well, but where we kind of stop short is what happens after they complete the task, whether there's a, you know, review step associated with each task, is the engineer running
0:01:54 Dave McLean: the PPAP looking at each task, or are they kind of looking at it all in aggregate, but before we get back to that one, you guys okay if we come back to the concept of uploading records to, and potentially have an ongoing upload of records with respect to, uhm, PPAP tasks.
0:02:13 Dave McLean: Yeah, 
0:02:13 Joel Frick (6124): yeah, yeah, yeah, 
0:02:15 Dave McLean: yeah, OK, so I think the example was QVR was what we were talking about. A validation report. So in this case, just to just to make sure that we're understand the yardstick we're shooting for.
0:02:27 Dave McLean: When we say records, what we really care about in this case is a file that the supplier has generated, as opposed to having them enter in the raw data into Intellects for whatever that thing is.
0:02:39 Dave McLean: We're not, we wouldn't be in any realistic version of this. We wouldn't be trying to find a way to get them to give, like, like, to enter testing results in the same vein as, you know, what, what you guys would be doing with, uhm, pilot part data that we talked about yesterday.
0:02:57 Dave McLean: Greg Chappell. Just a different kind of file upload with some different rules around it. Yeah, yeah, OK, OK, cool. So in this case, when we have a PPAP task that requires, you know, some sort of a record of that.
0:03:13 Dave McLean: Upload that has an ongoing component to it. The problem we would need to solve for with this is when they upload that task or when they upload that record to the PPAP task that would satisfy the nature of the PPAP task.
0:03:29 Dave McLean: But we would also need them to be defining, or we would need to define for them, the parameters of the ongoing part of that task.
0:03:39 Dave McLean: So if we were to take QBR as the specific example, who is it that would dictate how frequently they would need those QBR results would need to be sent to Subaru and who it is that's responsible 
0:03:50 Joel Frick (6124): for doing that going forward? So that would be the mass production engineer in SQA. So when we finish the PPAP and model change, we hand that over that part effectively to SQA.
0:04:06 Joel Frick (6124): And then from that point forward, it becomes that part becomes the mass production engineers. 
0:04:17 Dave McLean: So, in this sense, if we view the ongoing part of this as a separate but related thing to the original results that were uploaded, can this be something that, because there's some discretion involved in this, can this be something that isn't necessarily built into the task template itself, but is in 
0:04:37 Dave McLean: fact like a, a final step or one of the final steps of the PPAP process, where we would look at and say, you know, are there any ongoing tasks that need to come from this PPAP, and the person would say, yes, we need a, you know, monthly QVR upload, we're going to assign it to this role for this supplier
0:04:55 Dave McLean: , and we, you know, we expect it by the 30th of the month, and here's who it's going to get routed to.
0:05:00 Dave McLean: Like, defining all of those parameters of the workflow as something that is separate from the completion of the task, so that you, you have the data as a starting point, but you, you are, ah, you, you are giving the person an opportunity as they close the PPAP to say when it is that 
0:05:18 Joel Frick (6124): they need this thing and when they don't. I'll, I'll, I'll preface that with this. An internal question to Luke. Yeah, this almost sounds like it would start out as a safe launch and transition to, because that's, that is, that is Hello?
0:05:38 Joel Frick (6124): Typically the transit, transition point is safe launch at handover. Yeah, but typically for safe launch we're also, one, we're obviously not doing the kind of test that we have on Qt.
0:05:54 Joel Frick (6124): QBA, and we're also typically not doing the type of dimensional that you do on Qt. So, yes, in, in concept, but I don't know, well, I but also the ongoing testing is never the same amount that it is at the model change.
0:06:15 Joel Frick (6124): The model change is there has to be some evidence, even if it's carryover, you know, testing. There has to be some evidence for everything on the drawing.
0:06:22 Joel Frick (6124): And then only some of that continues forward. Based upon regulatory or high-risk, you know, testing, So this leaves a safe last question now.
0:06:38 Joel Frick (6124): I see, I see where you're aware that it's a very similar, uhm, activity, but it's not the same information.
0:06:51 Joel Frick (6124): Okay. It's because I, I, I see the safe launches being much more closely related to, uhm, pilot parts inspection. Than QBA, QBB, ongoing testing, review of data.
0:07:03 Joel Frick (6124): Yeah, I would agree with that. 
0:07:04 Dave McLean: Yeah, so, uhm. Luke, where I'd like to take this, if we can, is, you know, to me, these types of things, wherever we have some sort of a data collection from the supplier, whether that is upload your QBR response or results for the month, or, uhm, you know, pilot part inspection.
0:07:30 Dave McLean: Inspection data that's very precise and very specific that's being done internally by an SIA user, even the survey piece, depending on sort of exactly how we implement that, they all fundamentally can be structured around the idea of a task.
0:07:46 Dave McLean: With a list of components that need to be completed. When I say component, I'm reaching for a really generic abstract word there.
0:07:56 Dave McLean: In some context, it's a question that needs to be answered. In other contexts, it's a file that needs to be uploaded.
0:08:03 Dave McLean: And in other contexts, it's a task that needs to be completed. But this idea that, like, you know, if the pilot part inspection that your folks complete is a task that needs to be done, an inspection that needs to be done with a list of questions.
0:08:19 Dave McLean: Then I wonder if this is if the concept of the QVR, other than the workflow around it, and how it gets assigned, is it not really the same thing?
0:08:28 Dave McLean: It's still a task that needs to be completed, and it only has one question, which is a file upload in this case.
0:08:35 Dave McLean: It's just one thing that they have to do. They don't have to answer 10 or 12 questions with checklists and things like that.
0:08:43 Joel Frick (6124): Yes, it sounds like it should work the same way as the way you're kind of describing the survey. One of the other things that I don't know that we have defined well is sometimes this testing, we've gotten into the habit of calling it annual testing.
0:09:07 Joel Frick (6124): But it's not always actually annual. Sometimes it's due every 3 months, sometimes it's due every 6 months. You know, whatever the case may be, based on the JAS 2000.
0:09:22 Joel Frick (6124): So, uh. Yeah, it's not. The problem, Dave, that we have right now is that we don't have a process for this.
0:09:33 Joel Frick (6124): Okay. This annual testing thing almost goes into the same sort of thing where you ran into in phase one where we're, like, trying to stand up a system, but we don't have a great process for it.
0:09:46 Joel Frick (6124): Yeah. Where all these other things we've talked about so far in phase two, PPath, we're going to get into NCR, all these kinds of things, we have a really well-defined process for it.
0:09:54 Joel Frick (6124): So we're We can tell you what we need to do and where the pain points are and everything like that.
0:09:58 Joel Frick (6124): With the annual testing one, we recognize that there is a gap in our ability to collect the information one easily.
0:10:08 Joel Frick (6124): Anyway, collect the information and kind of see that as an overall status, but we haven't really defined who is doing what and who initiates it and how exactly it gets initiated.
0:10:21 Joel Frick (6124): All this kind of stuff really isn't defined from an internal process standpoint. And so that's where some of these questions are a little bit more difficult for me to ask.
0:10:32 Joel Frick (6124): I kind of want to take that as homework and meet with the QCD model team. It would certainly be within SQA.
0:10:43 Joel Frick (6124): In the QCD model, there's some overlap in that Venn diagram, so to speak, between the two departments in this task.
0:10:54 Joel Frick (6124): I just don't know exactly how to define those circles yet. Basically, a handover level of activity that is defined by what happened during model change and the part level of required 
0:11:14 Dave McLean: quality. Yeah. Yeah. Okay. So if you want to meet, if you want to take that one away, what's a, what's a reasonable timeline for us to be able to come back to this topic and either further develop the concept or decide what we're No, you know what?
0:11:32 Dave McLean: This isn't really the right, the right way to go about it for whatever, 
0:11:35 Joel Frick (6124): whatever reason that may be. So let me, let me ask you this. Is annual testing specifically listed in our scope of work?
0:11:43 Joel Frick (6124): I don't think it is. No, it is not. No. Okay. So. I almost see this as, let's talk about, we use this, talk about the plumbing now.
0:11:55 Joel Frick (6124): Yeah. And you don't stand it up until like 4+, you know, phase 4. Okay. And if it's like, if it, if it turns out to be like, we just turn on an element that we already have and it's relatively easy to stand up, then we do it sooner.
0:12:13 Joel Frick (6124): Or if it turns out that supplier survey that, yeah, if it, if it fits the bill, which is where Dave is saying.
0:12:20 Joel Frick (6124): Yeah, it does that fit the need better. And if it does, it's already in there, it's on SMD's needs. And it's just an application of supplier survey.
0:12:33 Joel Frick (6124): Yeah. Yeah. From the description that I'm hearing about the survey, it sounds like it captures everything that we 
0:12:47 Dave McLean: It's fundamentally a questionnaire, right? If you think about survey in a, More abstract sense than the questions that make up the survey.
0:12:58 Dave McLean: The way it's sort of defined is, much like with the pilot part inspection checklist. You in the background, like you being Subaru, uhm, You know, admins in this case, or at least power users, would define a survey, so a list of questions that you need to send out, a list of data points that you're looking
0:13:19 Dave McLean: to collect. You would define a data collection, uhm, Thank you. Bye. Bye. Bye. Process for it, which it, it's the same process every time, but it's who is it we sent, who is it we're sending it to for each supplier, what types of supplier are eligible for this one, or are we sending it to, what, what
0:13:36 Dave McLean: classifications or statuses, but essentially like filtering the list of suppliers, to know who to send it to, and then from there, which role at that supplier to send it to, uh, and then what's the timeline and, and potentially what's the frequency of that, I, I think while you run the survey program
0:13:53 Dave McLean: annually, let's say, I think the questions can change from one supplier one year to the next, enough that it might actually be worth just considering each one as a one off that you're sending out and, and blasting out.
0:14:05 Dave McLean: From there, the model is almost that of a marketing campaign. Once you click go, you, you've defined what you're asking, you've defined which suppliers you're asking it to and who at the supplier is responsible for answering it.
0:14:18 Dave McLean: It sends it out with a task that shows up that carries a workflow and a grid with a list of all the questions where they would be answering, answering the values.
0:14:28 Dave McLean: In my mind, this is almost very similar. It's obviously a different category of these things, so you'd want to display them a little differently, but whereas for a supplier survey, you might be asking 25, 30, 50 questions.
0:14:42 Dave McLean: For this one, you're fundamentally asking one question. Hey, for this product, you know, please upload the QVR results for May of 2027, for whatever month you're actually in, and give them a place to upload that piece.
0:14:58 Dave McLean: If that's the direction that we go, where this starts to go to look more and more like what we're doing with Supplier Survey, we can maybe wrap it in something a little different.
0:15:07 Dave McLean: Supplier Survey isn't being talked about in any version where it's connecting to the item level. So this concept would not be a Supplier Survey, it would be an OpsGenie.
0:15:17 Dave McLean: Item Survey or something like that, depending on how you want to define what that relationship is, but it's still sort of fundamentally the same process.
0:15:25 Dave McLean: A task shows up on a periodic basis, telling the supplier, hey, you need to give us this information. They log in, they give you the information, and they click complete, and based on that particular type, it either closes the record out, or it routes it off to somebody at SIA for 
0:15:42 Joel Frick (6124): review and closure. Okay, and that answered the lingering question that I had, so, which was, can we make it so that somebody has to approve, or, you know, acknowledge, 
0:15:54 Dave McLean: or review, or whatever. Yeah, yeah, and so, you know, if we consider it in terms of structural model, for a second, like, let me just share my screen real quick.
0:16:12 Dave McLean: So, ignore, ignore these pieces for a moment. This was just doodling for something else. So, we know we have supplier surveys, which would go out to the end user.
0:16:21 Dave McLean: And we know that we would have this sort of request for record upload, for lack of a better term. Both of these would sort of fall under one big bucket called abstract.
0:16:37 Dave McLean: Uhm? Supplier. Task something like that, for lack of a better term. And again, there might actually be other ones too, where it's just a, you know, literally just supplier task.
0:16:53 Dave McLean: So, in my mind, when I define these different buckets, the supplier survey one and the request for record upload would both show the checklist grid that we've talked about for supplier survey.
0:17:07 Dave McLean: The only difference is that we're supplier survey. The checklist is long and it's got lots of different things for the request for record upload is just going to be one thing that they're doing.
0:17:17 Dave McLean: Supplier task is going to be a little little simpler than that. Even still, it's literally just going to be a, hey, one off.
0:17:23 Dave McLean: I need to send you a task. It's not it might be a recurring task. It might be a, you know, hey, could you, uh, you know, could you confirm once a quarter that, you know, you've had no late shipments or so whatever the whatever the actual thing is.
0:17:37 Dave McLean: But it's all of that interaction that the supplier management team is doing team has with the supplier that often goes in email back and forth, but it always leads to some sort of action.
0:17:49 Dave McLean: It creates a component in intellects where they can actually store that action and the supplier can actually complete it. So you get full traceability on it within intellects that gives get as much of it out of out of the email side of it as possible.
0:18:01 Dave McLean: This is a hypothetical. We don't have to go in that direction, 
0:18:04 Joel Frick (6124): but for us. I saw it. Go ahead, Kate, but I think it's the same. It's just the different those different.
0:18:14 Joel Frick (6124): Those are all abstract supplier tasks, but that's generic supplier tasks. So, as he described it, what I also was hearing in my head was, we sent out the IRQ survey.
0:18:25 Joel Frick (6124): Tell me what new tooling you're going to make. That is a task that we send to the supplier at DrawingRes0.
0:18:31 Joel Frick (6124): All right, I've got this drawing. Tell me how you're going to make it. And then the follow-up to that is, now, let's talk about the test plan.
0:18:39 Joel Frick (6124): Those both sound like the supplier The task, which we're currently doing right now in the APQP. But we want SMB visibility of this activity.
0:18:54 Joel Frick (6124): Right now, we're doing this separately from SMB. They're doing their tooling worksheets, and we're doing the IRQ survey. Yeah. Interesting.
0:19:02 Joel Frick (6124): So, we could make this collaborative. I'm going through my notes right now, and I was literally reading PVP and approval, and it's exactly what you're talking about.
0:19:11 Joel Frick (6124): We could define this supplier task, and then the routing of this supplier. task, depending on what the task is. If it's just coming to me, I review and approve.
0:19:22 Joel Frick (6124): If it's just going to you, you review and approve. But we didn't define that routing. So, for example, the PVP, the test plan, one of the things of that test plan is we weren't talking about this.
0:19:33 Joel Frick (6124): After we approve the test plan, OK, you're going to do all these tests new for this part. You can carry over these tests because it's similar enough on a parent company part or a similar part.
0:19:46 Joel Frick (6124): You don't have to do this testing. So that feedback then goes to the buyer and says, if they submit a bill for this test, we already told them they don't have to So we could set that up as a supplier task that routes through us to SMD to the buyer to close that loop and say we're not paying all this 
0:20:03 Joel Frick (6124): money. We're only paying. So I like this task. Yeah, me too. Me too. Especially, so Dave, I think that the piece that I want to nail down maybe today, or at least, uh, Bye-bye.
0:20:21 Joel Frick (6124): Research starting today is, can we tie a supplier task to the set of records related to a drawing referral? That's kind of the, kind of the key, key point.
0:20:37 Joel Frick (6124): And so I guess what I mean, what I mean by that is, if I want to try to find out, did I do my annual testing on this steering gear box, I can search somewhere by the drawing number or the part number for the steering gear box, and return some sort of result or not, 
0:20:58 Dave McLean: if there was good testing. Yeah, so I think, I think the idea would be then that, you know, supplier surveys are likely, well, no, actually, I think any of these things can be, bound, they all have to be bound to a supplier.
0:21:13 Dave McLean: Yes. For no other reason than, like, they, that defines the scope of who and what we're doing. But they could also be bound to an, to a part.
0:21:21 Dave McLean: I think that's the level that that happens. Drawings become very specific in that regard. But in this case, if, if you create a supplier task for XYZ automotive part tooling, and you bind it to part 1, 2, 3, 4, 5, that they, they produce that's coming from the parts and integration team, from Bomex and
0:21:42 Dave McLean: from Partmaster, then in that case, when you define the scope of that task, annual testing, and you said it's annual testing, testing against a specific drawing, you wouldn't be able, you wouldn't be able to bind it to that drawing record.
0:21:58 Dave McLean: But you're binding it to the part. 
0:22:00 Joel Frick (6124): Well, we just do it, we'll be binding to the first card on the drawing. Well, right, and so that's kind of what we were talking about yesterday, where drawing is a group of parts, basically.
0:22:14 Joel Frick (6124): So, but what Intel Equest calls it, I think, is a product family. And there's multiple part numbers involved in that product family.
0:22:26 Joel Frick (6124): So, I guess if I can search for a part. I should also be able to search by the product family or part number.
0:22:34 Joel Frick (6124): Yeah, but you'd only, you'd only be 
0:22:39 Dave McLean: able to use the product family as a search. You'd have to choose one part. 
0:22:45 Joel Frick (6124): Which would be. It'd probably be fine. I don't see it. I don't see a major problem with that because when we do the annual test, it's not like we're going to necessarily do it on every single part that's on that drawing.
0:22:56 Joel Frick (6124): We're going to use a representative. Yeah, I'm going pick a part, which means. Okay. Yeah, 
0:23:02 Dave McLean: Would it help? Would it help to then, once you have the part selected, to then select a drawing that contains that part?
0:23:11 Dave McLean: Yeah. Yes. Yes. So that you're, for at least tracking purposes, you're narrowing the scope of the task. Right. Okay. So then that means, at, you know, various levels here, you have relationship to supplier abstract.
0:23:34 Dave McLean: So the supplier abstract really.
0:23:51 Dave McLean: Relationships is always going to be filled out when you do any of the abstract tasks of survey. For example, you're you're sending it to a supplier request for upload.
0:23:59 Dave McLean: You're sending to a supplier supplier task. You're sending to a supplier. The part is likely only going to come into play for these two.
0:24:06 Dave McLean: Yep. And I don't think it's necessarily mandatory. There are theoretically some one-off tasks that you might send to the supplier that have nothing to do with a specific part.
0:24:15 Dave McLean: They're they're more general about your relationship with that supplier. Okay, but so it's there, but it's it's not mandatory. And then the drawing one would only be available if the relationship has been established to the part, and it becomes optional if that task has a relationship 
0:24:34 Joel Frick (6124): to a specific drawing. And it also. Always will. Every part is related to a drawing. But the way he just described this, this also is how SMD would do their tooling.
0:24:53 Joel Frick (6124): Monthly development worksheet. Right into that. I know, that's exactly what I was hearing. We're going to need offline discussion on that, gentlemen.
0:25:03 Joel Frick (6124): Oh, there's Damian. 
0:25:08 Jamie Dossey (6360): I'm hearing a lot of suggestions and I'm not sure that I'm following. I don't align with what you're saying, so let's 
0:25:13 Dave McLean: discuss that offline. Yep. Yeah, let me just. OK, so just to kind of notate what the purpose of some of these is, uhm, task.
0:25:43 Dave McLean: is set up as either a one-off or as a recurring, i.e. frequency-driven, task that needs to be complete every X months, years, whatever.
0:26:04 Dave McLean: Uhm, then in this case, task is assigned to a supplier role for the supplier, so instead of sending it to a specific person, we're sending it to the role just in case the people leave.
0:26:24 Dave McLean: Okay, uhm, task require, task setup. would define whether a, what's the word I'm looking for, only a completion note is required to complete, or a file upload is also needed.
0:26:55 Dave McLean: Let me make this a little bigger. And, uh, TaskSetup would also define if the task is closed once the assigned user completes it, if it requires a review after completion.
0:27:28 Dave McLean: So in some cases, it's literally just a, hey I want to send this out, and go do it, and that's it.
0:27:34 Dave McLean: We're monitoring an aggregate, we're doing it, and we're not necessarily looking to have a notification come back to us when you finish the task, and I look at it, and I'm the one that sent it to you that closes it out.
0:27:47 Dave McLean: OK, now with these, in this model, to me, this is something I that you set up on a kind of one-off supplier basis, so it's not something where you would define a single task and then apply it to 500 suppliers of all types.
0:28:04 Dave McLean: This is really meant to be like, I'm working, I'm the SQA, I'm somebody who's working directly with this supplier, and I need, I need something from them, I need them to do something, so I'm going to create it as a one-off task, or, hey, we just talked about it, you know, things are, things are not going
0:28:19 Dave McLean: great with that supplier right now, I need them to send us some audit reports that they're running once a month or something like that.
0:28:24 Dave McLean: It just, that goes a little bit beyond what we would otherwise do, but it isn't something where we're setting up a campaign to blast those types of tasks out to multiple suppliers in the way that we 
0:28:35 Joel Frick (6124): would for a supplier survey. Yes, basically what we do with that email task, it would absolutely be targeted. Yeah, Okay, so it's 
0:28:44 Dave McLean: okay, like, this just means then that the overhead for setting them up is built around the fact that it's done one, like, you set it up once per supplier in that case, rather than I set it up once, I'm going I select the suppliers and I click go and it automates the creation to all of those different
0:29:02 Dave McLean: supplier companies. It would be done, 
0:29:04 Joel Frick (6124): I don't know, one case by case, one by one, part by part, really, in business. It's a very targeted request.
0:29:12 Joel Frick (6124): Okay. 
0:29:13 Dave McLean: Okay, so, then in this case, this one is, uh, more structured, built around the supplier having to upload a file That's really the goal here.
0:29:32 Dave McLean: Um, contains a relation to the supplier and often to a part and drawing. I think that's also held true here, uh, as well, because when we're talking about the QVR results, that's in relation to a specific part or drawing.
0:29:43 Dave McLean: and time. Task is set up as either a one-off or as a recurring one. I think the same thing. There's, as I look at this through, these are close enough that perhaps these actually just get merged into one thing, and it's just a slightly different configuration of how the form shows based on what we're
0:29:58 Dave McLean: asking for from them. Uh, but. We'll, we'll work 
0:30:02 Joel Frick (6124): that, work that out. We can set up a template for each one would be for. Yeah. Are these able to be made into templates?
0:30:15 Dave McLean: Into templates. 
0:30:17 Joel Frick (6124): Or, basically, can I create a template to use to create the tasks. It's probably a better way to say that.
0:30:25 Dave McLean: If you have, like, more 
0:30:26 Joel Frick (6124): questions that you wanted to ask. Uhm, so, so, like, for example, if I was going to set up my. My annual testing one, for example, I would, I would think that I would want to have all of my SQA engineers setting those up in the same way.
0:30:44 Joel Frick (6124): The best way to do that would be to say, use this template to set your task 
0:30:48 Dave McLean: up. Yeah, yeah. Got it. Yeah, I. Yeah, you know what? As I think this through conceptually, there's so much overlap here that this actually becomes one thing.
0:31:05 Dave McLean: So, in both cases, we would tie it to a part slash drawing. 
0:31:11 Joel Frick (6124): In both cases, it would be targeted at a supplier and a 
0:31:16 Dave McLean: specific part of the drawing. Task setup requires the SIA user to define what is needed for completion of the task.
0:31:34 Dave McLean: So, in this case, either, uhm, File upload. Options include a completion note, just, hey, all done, that's it, and or a file upload, and or checklist completion.
0:31:54 Dave McLean: In the vein of what we, what we're seeing with the PPAP one, so depending on the specific context. Uh, and we will say, uhm.
0:32:08 Dave McLean: Supplier tasks. Should also, uh, could, I'm gonna say could rather than should, could relate to a template that pre-defines these tasks.
0:32:26 Dave McLean: Options, so in the case of a real true one off, we're never going to do that. We may never do this one again.
0:32:32 Dave McLean: This is just a one off request for information. I'd create a task. I would say that in order to complete it, I want a completion note and I want to file upload.
0:32:41 Dave McLean: I don't care about it. There's no check. List for this, though, and as a result, we're not using a template because it is a one off.
0:32:48 Dave McLean: On the flip side, if we talk about like our recurring record request for QVR, where we're actually looking for a file upload periodically, they might choose a QVR template or QVR upload template which will predefine completion node is required, file upload is required as well.
0:33:08 Dave McLean: And those two things are there, that ensures that it's always consistent, that one SQA doesn't, you know, have to create this with forgetting to put the file upload on it and they just say completion node.
0:33:19 Dave McLean: Uhm, that way it's consistent and it's also, it gives you a marker so that you can, you can search for all of them.
0:33:25 Dave McLean: Uhm, on the flip side you might also, if you have a template that has a checkbox, a checklist attached to it, then that checklist would get pulled into all instances of that task as well.
0:33:37 Dave McLean: Right? What you wouldn't be able to do though, uh, for templated tasks only. For a truly one-off task. One that's not related to a template, you would not be able to create a checklist on it, because checklists are, by definition, those are templated things.
0:33:54 Dave McLean: You define those separately in the background. So if you're not picking a template to work off of, you can't really pull in a checklist.
0:34:01 Joel Frick (6124): Okay. And then again, I have some assumptions, and I just want the answer the way it is now, without doing a bunch of rework.
0:34:11 Joel Frick (6124): Yeah. If I have a checklist, and then I've created a task, you know, I have this task that's been opened, and then I go back and change my checklist.
0:34:21 Joel Frick (6124): The task exists in the way it was created, and does not change. And then the only way that I actually, my checklist update changes anything is on any new tasks that are created after the update.
0:34:33 Joel Frick (6124): You got it. Yep, that's good. That's fine. I don't want to try to change that. I just want to make sure that's clear to everybody.
0:34:51 Joel Frick (6124): I think so.
0:35:01 Joel Frick (6124): I think, you know, from things that I've heard done in the past, I think that's that this task is, I think, it's so flexible that it could be used for a lot of different things.
0:35:17 Joel Frick (6124): And I think of some of the scorecard stuff that, you know, that Jesse, Jesse Gales would have put together. Which we'll get into, I think, a lot more deeply, but I can see that Sapphire Task 40 is fully serving that scorecard pretty well, too.
0:35:33 Joel Frick (6124): Oh, who wants to learn? Yep, let's do 
0:35:37 Dave McLean: it. Okay, so the other, the other side of this fence, just to differentiate the two, whereas I've bolded this statement for a reason, because this is, this, how we create it is really the key differentiator between these two concepts, whereas Supply Chain and Supply Chain, the task is truly one-off.
0:35:58 Dave McLean: We are creating it for one supplier at a time. The survey is a task that's defined as, like, a campaign that applies the same properties, like the assigned role that we're going to give it to, the due date, the checklist, uhm, completion criteria, uhm, and, uh, reviewer rules.
0:36:23 Dave McLean: Uh, that's it. To multiple suppliers, the campaign is what will generate the task for each supplier, or task You instance, I guess is the best way to describe it.
0:36:46 Dave McLean: So, uhm, in that sense, if I go in and say, great, I'm, I'm gonna do, unlike this one over here, I go in to define a supplier survey campaign, and I say, I'm gonna do the, uh, the, you know, 2027, or 2027 6 annual, uh, supplier survey.
0:37:02 Dave McLean: We've already defined a checklist for that, so I'm gonna specify we need checklist completion for this one using that checklist.
0:37:08 Dave McLean: Uh, we're gonna say that we are also looking for, uh, a completion note. We want them just to give us some free text before we go beyond the checklist, you know, how are things going, something like that, uhm, and we are assigning this to the, uhm.
0:37:24 Dave McLean: I don't know the, uh, the key business partner role at every supplier that we decide to send it to. It needs to be defined.
0:37:31 Dave McLean: It done by December 31st, and it has no recurrence, because when we go to do this again next year, we may use a completely different checklist.
0:37:39 Dave McLean: So even though we do it annually, we don't want the system to automatically create it annually, given the fact that this is a more, more of a planned event than an automated trip.
0:37:47 Dave McLean: Once I save the parameters of that campaign, I'm then presented with a list of suppliers, meeting the criteria that I've set.
0:37:58 Dave McLean: Select all, perhaps, maybe it's, you know, maybe it's as simple as it's going to all suppliers with suppliers that have supplier status X or Y or Z, whatever that is, and that returns a thousand suppliers.
0:38:09 Dave McLean: Select all, begin campaign, ten seconds later they all get an email, hey, you've been assigned the new supplier survey, it's due December 31st.
0:38:17 Dave McLean: They log into it, they see their checklists, they see their questions, and they do other things, and you are able to see on the campaign record how are they doing.
0:38:26 Dave McLean: Of the thousand of them, two weeks later, you know, maybe twenty of them have responded, the rest of them haven't done anything with it 
0:38:31 Joel Frick (6124): yet, or whatever the case may be. So, love Okay, now the nice thing here 
0:38:43 Dave McLean: for this is because they all bind back to abstract supplier tasks. Task completion, when you really sort of well develop the process.
0:38:52 Dave McLean: Processes that you have with your suppliers into these types of tasks doing things on time is a big performance metric.
0:39:00 Dave McLean: So while we can certainly display all of these things to you and to your suppliers based on the individual buckets they live in, they also aggregate together.
0:39:08 Dave McLean: So, you know, think of it almost like the newsfeed on the supplier profile. These are all the activities that are currently open, whether they are one-off supplier tasks, supplier survey, which is not just the annual one.
0:39:20 Dave McLean: Maybe you've also got some smaller scale quarterly or monthly things that you're sending out as well. 
0:39:26 Joel Frick (6124): And so on and so forth. From the standpoint of SQA, this supplier survey was discussed from shutdown. Yes, yeah, that's exactly, the whole time he's talking about this, I'm like, oh my gosh, the shutdown surveys would be so long.
0:39:40 Joel Frick (6124): It so much easier. I maintain a system that I built for that, basically. And it's not, it's not good. It's still, it still has a lot of the problems.
0:39:53 Joel Frick (6124): This has it built in. Yes, and it's already time to run. But yeah, definitely supplier survey, definitely supplier task, there's a use case for both of them.
0:40:12 Joel Frick (6124): So, uhm, the other, the other, uhm, supplier task, uhm, I guess maybe survey tools, oh, uhm, uhm, updating their, uhm, contact information, yeah.
0:40:32 Joel Frick (6124): Yeah, that was one of the 
0:40:34 Dave McLean: things we'd, uh, we'd originally conceived the supplier survey piece when it was more of a stand-alone thing on its own.
0:40:41 Dave McLean: But in this case, like, again, I want to stress, I don't view, this supplier task branch of this structure, this isn't the same as the tasks that APQP is generating, or sorry, that PPAP is generating from within the project.
0:40:56 Dave McLean: Those are, those are kind of project-specific tasks. To me, these are things that you would create at the end. At end of the PPAP, where, great, now that we've got all of our results back, we've, you know, everybody's uploaded all their documentation to satisfy the PPAP requirements, based on what we've
0:41:11 Dave McLean: received, we are now going to create some persistent, long-running tasks that are for record uploads, for example, or, you know, whatever the case is, so as we, as we learn more, as we get our information from the PPAP, or from other events that are playing out, otherwise, when we have a need to basically
0:41:28 Dave McLean: say, okay, this, this thing, I need you to send me the next version of this. I'll have it three months from now, and then every three months after that, that's where these get created.
0:41:38 Dave McLean: Both, 
0:41:39 Joel Frick (6124): both things, Fluency and Angle Testing. Yep, we'll call it for that. Yep. A lot of nodding heads 
0:41:45 Dave McLean: here, yes. Okay, okay, so this model of, of, I, I, it's a really important point architecturally on my end, so I, I, I'm going to state it all again a slightly different way to make sure that the implications are fully clear.
0:41:58 Dave McLean: What we're really saying is that the tasks that satisfy a key path, right, the individual project tasks that go through all the document uploads they have to do to meet those requirements as they're called in, in IntelliQuest right now, that lives on one side of a fence.
0:42:17 Dave McLean: On the other side of the fence are the other tasks that may have to have originated because of something that was uploaded during PPAP, and those tasks can be created from a PPAP record, but they are not the same thing as the tasks that were being done and generated 
0:42:35 Joel Frick (6124): by the PPAP itself. From a structure standpoint, that is exactly what this is. They are not part of the PPAP, but they are related to the PPAP.
0:42:46 Joel Frick (6124): You got it. Okay. That is the desire. Desirable, yes, yeah, cool. Awesome, OK. 
0:42:54 Dave McLean: Perfect, so then coming back to PPAP then, because we just solved the sort of key question that we left off with before lunch, and so the rest of this stuff, I think, gets a little easier to work with.
0:43:05 Dave McLean: So coming back to the PPAP task itself that we've just assigned to the supplier user or internal user, the question I had asked beforehand was, are those tasks, are they meant to be something that's done on a one-off?
0:43:19 Dave McLean: So I send it to you, that's a wrong way of describing it, are they complete the task and it's done?
0:43:25 Dave McLean: Or are they the kind of tasks that once you complete it, we needed to route back to the supplier? The engineer running that PPAP, for example, to review it, and it's the engineer that's sort of formally checking the box that it was complete.
0:43:41 Joel Frick (6124): Absolutely, absolutely has to be each individual 
0:43:43 Dave McLean: task by the engineer, each individual task by the engineer. So if. If that engineer, let's take the big example of, uh, uhm, yeah, let's take the big example of, like, a new model.
0:44:00 Dave McLean: New model that's running, uhm, we've got. 500 PPAPs, uh, 20 of them are being run by engineer Dave in this case, and so you have a constant stream of tasks coming back at Dave to review and close out.
0:44:15 Dave McLean: Uhm, I can totally see a scenario where, yep, Dave, we need you. We need to review all of these things because we got to make sure we got to keep the supplier honest.
0:44:23 Dave McLean: We got to check their work and all that kind of stuff. Is there a scenario where that becomes a bottleneck and and therefore it's only certain types of tasks or certain tasks that we define that that review is needed for?
0:44:35 Dave McLean: Thank you. 
0:44:36 Joel Frick (6124): Every PPAP, every task needs reviewed by the engineer, including the internally routed tasks of, ah, that we showed you for the service.
0:44:42 Joel Frick (6124): All of those are the responsibility of the engineer to review and approve. And then, once all of those tasks are reviewed and approved, the engineer gives the overall 
0:44:56 Dave McLean: approval for the PPAP. Easy peasy. Okay. Okay, and that approval is, you know, approved yes or no, comment if no, send it back if the answer was no.
0:45:08 Dave McLean: If the answer is no, it will be done at a task level, 
0:45:13 Joel Frick (6124): the reason why that task is rejected will need to be in that rejection, goes back to the supplier and it's saved open until the engineer is satisfied and then Thank you.
0:45:24 Joel Frick (6124): Back to the concept of engineering changes, if we have an engineering change later, we should be able to reopen that task if that 
0:45:34 Dave McLean: task is affected, right? You have an engineering task later, no, you'd be creating a new instance. And it would 
0:45:43 Joel Frick (6124): replace the previous one? Well, I say that because, especially in model change, we will continue to have engineering changes. Even after phase one is done.
0:45:57 Joel Frick (6124): And we've approved phase one tasks. And generally, most of those do not affect previously approved tasks. But sometimes, it's a significant enough change that we will need to re-open that phase requirement and have the supplier update So the example would be, probably most common would be QVB, right?
0:46:21 Joel Frick (6124): You're already in phase three and then something comes back and affects your QVB in phase two. Mikey, I can give you an example of one.
0:46:28 Joel Frick (6124): I'm dealing with this right now. I'm about ready to hit bad news first. Okay, great. The part failed DV testing.
0:46:36 Joel Frick (6124): They've already uploaded the material service. Yeah. Which is phase one. Yeah. They're talking about the countermeasure being a material change.
0:46:44 Joel Frick (6124): Uh-huh. Which, uh, will mean I need new material service. So that is an engineering change along the development timeline that I will need updated in the PDAT.
0:46:59 Joel Frick (6124): Is it possible to re-open a task? And if not, you say a new instance. Does it retain the previous instance as history, or is it gone?
0:47:10 Dave McLean: Just give me a second to answer that one. I'm, uh, I might be getting some terminology mixed up here, so I just want to make sure that the engineering change request isn't what I'm thinking it is in the statement of work.
0:47:27 Dave McLean: Uhm. Design, so, okay, no, design change request is something different than this. Yes, 
0:47:44 Joel Frick (6124): that's different. So these are, so we talked about how the ECSs will feed the PPAP. Yeah. So, we've already started the PPAP.
0:47:53 Joel Frick (6124): We've already started approving the different tasks within that PPAP. Yeah. But then an engineering change happens before the PPAP is fully approved.
0:48:04 Joel Frick (6124): Okay. So, if one of those previously approved tasks is affected by that engineering change, I will need an updated version of that 
0:48:13 Dave McLean: previously approved task. And so, in this case, the flow of data would be the engineering change would come through from Bomex.
0:48:23 Dave McLean: Yeah, would trigger another one of these, uh, would trigger a review, uh, the initial review for us to say, yes, we need a new PPAP, no, we don't, or, uh, the other term, I think it was accepted or addressed.
0:48:36 Dave McLean: Yeah, thank you. 
0:48:37 Joel Frick (6124): We're addressing it to the this already existing. 
0:48:40 Dave McLean: Got it. OK, so we're now in that in that third branch. So in that scenario for the constraint that I'm working around is, in my mind, each PPAP is only related to one, uhm, one ECS record, therefore, one PPAP.
0:48:54 Dave McLean: One drawing. So if if you receive a new ECS that has a new revision of that drawing, but the PPAP is still open, therefore you're not creating a new PPAP.
0:49:07 Dave McLean: You you need to be able to join that. New ECS and the new drawing that's associated with it to the in-flight PPAP, and then your your engineer is making a determination based on what what's been completed on which ones they need to reopen as a result of that change.
0:49:27 Dave McLean: Correct, correct. Okay, okay. Yeah, so, okay, so all that context has nothing to do ultimately with the real question you're asking, which is, hey, can we reopen a task?
0:49:38 Dave McLean: The answer to that is yes, we can. It's the circumstances that trigger that, that action. Are the ones that lead us to that other side, because what that means is that the relationship that we have to the ECS record into the drawing from a PPAP is one of, hey, there is an originating ECS that was the
0:49:57 Dave McLean: trigger for us to create this task. This PPAP. Then there are, I guess, supplemental ECS records that we relate to, because over the life cycle of that PPAP, if there's two or three or four other design changes that come through, those are all material for us to know and to to join in so that the engineer
0:50:17 Dave McLean: and anybody else viewing the, ah, PPAP record should be able to see it, but it still originated from the first one.
0:50:26 Dave McLean: Yes. Okay. 
0:50:28 Joel Frick (6124): But yeah, and in some cases. A later ECS will cause us to need to. Update or change something that might have already been approved in the PPAP.
0:50:42 Dave McLean: Okay, so I mean, is there is there a scenario where a late change? Comes through that essentially requires you to just stop 
0:50:51 Joel Frick (6124): the PPAP and start over. I would like to say no, but I'll change the scenario. Probably not. You're just going to finish out your building block, right?
0:51:01 Joel Frick (6124): Yeah, but again, we created this. The concept of building block, all of them pointing to an original record, because of limitations of the system.
0:51:13 Joel Frick (6124): We did that, and then we just, everything that came out after that original one, we pointed back to the original, saying, oh, OK, this CCS points back to this original, or this CCS points back to the original.
0:51:28 Joel Frick (6124): OK, can. 
0:51:31 Dave McLean: OK, so let's play out the reopening scenario. Somebody's. Hold on, sorry, David. Yeah, no worries. Luke's wheels 
0:51:38 Joel Frick (6124): are spinning. I, I, yeah, well, spinning and not getting any traction is the problem. OK, so it's not just a system constraint.
0:51:48 Joel Frick (6124): There's also the confusion that occurs in terms of. Yes, if they have to move to a new record, that creates confusion for everyone.
0:51:57 Joel Frick (6124): Right, and so, and so that is, I'm thinking, especially on the supplier end, because they're probably doing some sort of internal tracking sheet, and they're like, OK, keep that one in So we do the same, we have an overall list, and it points to the PPAC.
0:52:12 Joel Frick (6124): So if we, if we say, OK, we're going to close this one and open a new one, and it relates back to all of this, and my ID changed, and it becomes, so the, I think the building block concept is still the right way to go for that reason, if, if for no other reason.
0:52:28 Joel Frick (6124): Well, and the reason why I say it's not always true, because if we've approved the PPAP at PP, which is our current, that's when you're supposed to try to have it done, you know.
0:52:40 Joel Frick (6124): The unfortunate reality is, we are getting more and more pre-SOP and SOP implementation times. In that case, we create a new record, rather than go back and reopen the original.
0:52:53 Joel Frick (6124): Now one thing that's going to help that, is we are now moving from PP to pre-SOP. So it's going to fix that window, of how long that original piece has to be.
0:53:06 Joel Frick (6124): But there's still the SOP that we need to consider, as far as re-opening, because of an engineering change. And I wouldn't, in that case, re-open the PPAP.
0:53:19 Joel Frick (6124): I would leave that. Well, but that's the question. Which is easier? Leave it closed, or re-open it and slide it in and update it to the newer level.
0:53:31 Joel Frick (6124): But, but in this case, I think what, what, we might be talking about two different things, and Dave might be able to bring us together, I don't know.
0:53:39 Joel Frick (6124): But, in this case, what you're talking about is the entire PPAP package has already been deployed. Yep. And we're saying, then, then the change content comes out.
0:53:49 Joel Frick (6124): In those cases, I would say we would typically not, you know. And that's where you reorder now. And, and, what, what I think the other, the other side of that is the PPAP package has not yet been approved.
0:54:02 Joel Frick (6124): Now I've got my change content that came in, and it affected my material service. I want to just reopen that one task, the material service.
0:54:12 Joel Frick (6124): PPAP's already still open. So that's, these are the two different scenarios. I would be really, really, I would be really hesitant 
0:54:22 Dave McLean: to create a pathway under which somebody is either modifying or reopening a closed PPAP. Once you close that PPAP, like, imagine, you imagine the amount of work, the amount of dependent work that's gone into getting to that final review and closure on the part of the engineer is pretty significant.
0:54:42 Dave McLean: And so, if, if you receive a change request, I hate to say it, five minutes after you close it. I don't know.
0:54:48 Dave McLean: But like, you know, we say this and and go figure the first month after go live, it's going to happen 
0:54:54 Joel Frick (6124): if it's happened the day after I can use that from experience. Yeah, so I think in that scenario. 
0:55:02 Dave McLean: You get the ECS and the new job. Drawing through you look at it and realize, oh, this is directly related to the one we approved yesterday, much as it's kind of daunting.
0:55:13 Dave McLean: In that case, you trigger a new PPAP. As a result of, you know, template all the stuff you need to do, it builds out all the tasks.
0:55:22 Dave McLean: And in those tasks, carry over everything from the approved. You got it, except for the one thing that it is, because that linkage would exist to the prior 
0:55:31 Joel Frick (6124): approved PPAP. Yeah, I think that's a more elegant solution than what we're doing right now. Yes, if we are able to get that pull forward of the previously approved task.
0:55:42 Joel Frick (6124): Cool, yep, 
0:55:43 Dave McLean: we can do that. It just means the constraints that need to happen in order to make that real are that.
0:55:51 Dave McLean: First of all, on the task itself, when the person is looking at it, there has to be an option for them to just say, you know, no changes needed, or something like that, like a little tick box or something like that.
0:56:04 Dave McLean: They can see the, you know, we can show them the prior document they uploaded from the last one, whether it was yesterday or a year ago, whatever the case is, but like, when they get the task, if it's a task that's been completed before for that part, just on a different vision of the drawing, we pull
0:56:22 Dave McLean: it through, display it to them, they review it right there. They look at it and say everything's good. They tick the little box that says, hey, no change is needed.
0:56:30 Dave McLean: We close the task out, it copies over, and now that's part of your review. So, ideally, it's easy for everybody.
0:56:35 Dave McLean: Uhm, the other side of this is that it means that you guys can do it, can't have more than one PPAP open per 
0:56:45 Joel Frick (6124): part at a time. That, that's, that's the potential problem. OK. Because. Of what we've been about this morning, basically, and also process change request PCMRs.
0:57:04 Joel Frick (6124): Right now, you could potentially have a model change, a running change, and a process change request. In existence at the same time.
0:57:13 Joel Frick (6124): What if they have 2 to 3 DCS numbers? They absolutely will, because, well, no. Not necessarily. Yeah. PCR will be existing, DCS.
0:57:25 Joel Frick (6124): Yeah. True. 
0:57:27 Dave McLean: Well, actually, this might not be, this might not be awful. For those 3 different types of PPAPs that we just described, do the requirements 
0:57:36 Joel Frick (6124): for each one overlap? Yes, especially the inspection standard. The inspection standard carries through all of them. Yep. And is common.
0:57:48 Joel Frick (6124): So, I, I was, I was thinking about this as we were talking the, the pulling, pulling information forward. I wonder if there is a way, uh, maybe this is going too far down the rabbit hole, but.
0:58:04 Joel Frick (6124): I wonder if there's a way for, for when I say, uhm, that, that checkbox that you, that you mentioned. If I say, pull this, pull this in, I don't need new information.
0:58:13 Joel Frick (6124): Pull in the, uh, last one. Instead of saying the last one, I pick the one that I want to pull in.
0:58:21 Joel Frick (6124): Basically, I want to pull in from this feedback. It's already closed. Does that make sense? 
0:58:31 Dave McLean: Or what if, my worry with that is, first of all, that would have to happen on every individual task. Meaning the person would have to know what they're looking for.
0:58:41 Dave McLean: And I think that might be a challenge. But what if, what if we, OK, so in the scenario we're describing where.
0:58:50 Dave McLean: Let me, let me model it out as though we have a long running tail of records here. Just let me just open an Excel file real quick.
0:59:00 Joel Frick (6124): When we first started here before he said you'd only have one per drawing. Yeah, we screeched to a halt. I was thinking from the standpoint of.
0:59:12 Joel Frick (6124): If we. We have a reduction, right? For example, what we're doing right now, we're establishing new standards and we're necessarily creating PCRs so that we can generate new inspection standards.
0:59:31 Joel Frick (6124): Yeah, that's because we don't necessarily create a PCR. The inspection standard itself, well no, we still want a PCR, we still want a Okay, 
0:59:51 Dave McLean: so imagine over the life cycle of it, I have Bye.
1:00:04 Dave McLean: You know, 01-01-2026, and then we have a design change request, followed by another design change request.
1:00:18 Dave McLean: Uh, let's say this one is But let's 
1:00:22 Joel Frick (6124): say that just for the sake of using our terminology, let's use RunningChange. Thank you. Nope. 
1:00:31 Dave McLean: Nope, that's good. So RunningChange, I've got one that's open that has not been closed out yet. I have another RunningChange that was approved on, uh, like that.
1:00:48 Dave McLean: Uh, what was the third type of PPAP again? ProcessChange, uh, and again, I've got another a number of these ones here, uh, including one open, so I'm gonna say this one is 06-30-2026, and this one is 05-30-2021.
1:01:09 Dave McLean: So, in this scenario, if I were to look, if I were to model this out and say, show me the PPAP history for part number 12345, I can see that there are a total of six PPAPs, four of which are approved by which been closed, two of which are still open, um, and the open one in this case is a, uh, we'll 
1:01:32 Dave McLean: say that this is a new model, one for next year. So we're, again, just to make sure, the part from last year's model that's being reused for next year, next year's model, would still have the same part number, right?
1:01:44 Dave McLean: Yep, could be, yep. Okay, so what's a common requirement between these three types of PPAPs? Inspection standard. Sorry, what's that?
1:01:53 Dave McLean: Inspection standard? Yep. Okay. 
1:01:56 Joel Frick (6124): What we're putting up here is not, like, a crazy hypothetical. This almost exact sort of thing 
1:02:01 Dave McLean: could happen all the time. Okay. Okay, so now, when they first uploaded it, you know, it was inspection standard v1.0.
1:02:13 Dave McLean: .do or .pdf, something like that, is the file that they uploaded. For the open one, they haven't uploaded anything yet.
1:02:22 Dave McLean: Maybe this is still something that, for whatever reason, is kind of stalled out, or maybe they're still working through something that deals with that run time.
1:02:30 Dave McLean: For this one, it's the same one. They reviewed it, because when this one was created, it figured out that this was the most recent approved, not just PPAP, the most recent approved inspections list.
1:02:46 Dave McLean: So it's requirement from all PPAP types for that part. Yeah. OK, now we get a little further, and oh, actually, they needed to change it this time.
1:02:56 Dave McLean: So, inspection standard v2.pdf, they modified it, they uploaded the new version. Similarly, here, for this process change, they did this again, v3.
1:03:11 Dave McLean: That's good. Now, if we focus on the two that are open, this one that was opened, and for argument's sake, let's say the C1, the order that you see them listed out here is the order that they were created in Intellects, based on the underlying Bomex integrations that sent it through.
1:03:26 Dave McLean: So, this one that's still open from earlier in the year, they haven't uploaded anything. If they were to log in to that task, what they would do what see is this one, because at the time that that task was generated, the most recent inspection standard for that part that had been uploaded was this one
1:03:45 Dave McLean: . Yep. Okay, even though in the time that it took them to get to this, that document was superseded twice more, they're still only going to see 
1:03:54 Joel Frick (6124): inspection standard V1. At the time they go to upload. 
1:04:03 Dave McLean: At the time they go to complete and upload that task. You got it. Even though it's it's, you know, months after the fact.
1:04:12 Dave McLean: However. For this new model one. So if we assume for argument's sake that the new model one that we see here.
1:04:21 Dave McLean: Was created after the after this was approved. What they will see when it defaults is ISV 3. 
1:04:32 Joel Frick (6124): But that open one if you. Close that it'd be ISV 4. It would grab ISV 4. Or it would grab ISV 3.
1:04:44 Dave McLean: It's it's the the grab happens at the moment the PPAP is created as opposed to when the person 
1:04:51 Joel Frick (6124): goes in to view it. In that standpoint though, I can think of very few instances where the inspection standard does not get updated, regardless of whether it's a PCR.
1:05:10 Joel Frick (6124): Yeah, I think, you know, maybe even the inspection standard wasn't a great one to pick because it does get updated basically every time, but the underlying, the underlying control plan is a good example.
1:05:27 Joel Frick (6124): It's one we usually carry over unless there's something significant that changes the process. Yeah, so think about this in terms of control plan and the problems that that could cause.
1:05:39 Joel Frick (6124): What if, Dave, what if there was a, uhm, I don't know, like, a refresh button? When I'm ready to approve this PPAP and I say, you know, I want to make sure that my control page is the most recent one.
1:05:57 Joel Frick (6124): Refresh, and then it looks up. They're not going to know to click it. 
1:06:01 Dave McLean: It's possible, 100%, just from a human, knowing how humans operate, they're not going to do it. So, if the problem that we're circling is a real problem, that needs to be solved, whether inspection standard is a great example or not, it sounds like this is a real problem.
1:06:21 Dave McLean: So then the next option would be, instead of capturing a direct link between this one and this one at the moment that this one was created, we don't do that, and instead what we show is a grid that shows all of these.
1:06:43 Dave McLean: And gives them a link so we can see, OK, like, show me the PPAP history for this part for this requirement.
1:06:52 Dave McLean: So I can see those four records in a grid read only. I can't modify them. I can't click through to them.
1:06:57 Dave McLean: I just see them listed in a little table and essentially what the person is being asked is to. To pick.
1:07:05 Dave McLean: If they, if they, there's no thing that has been superseded from whatever they're working off of, then they pick the one that they're going to apply to this PPAP.
1:07:14 Dave McLean: So the catch with this is that it requires them if they really want to do this accurately, they have to be very aware of V1, V2, and V3.
1:07:23 Dave McLean: They have to know what's in each one 
1:07:26 Joel Frick (6124): in order to, to do that. And I would, I would say if, if it's going to be a grid, then that means you could also show some additional metadata associated with that file, i.e.
1:07:40 Joel Frick (6124): the, uh, ID number of the PPAP, the date on which the PPAP was created, when it was approved. and then the ID number, the, the prime revision associated with that.
1:08:00 Joel Frick (6124): Yeah, sure. Yep, yep. Any of this sort of data that's associated with that file, in order for us to help us make the right decision?
1:08:10 Joel Frick (6124): Now, I'm sorry to say this, but who would make that decision then? Well. In the scenario you were describing, is this a supplier user, or are you saying?
1:08:21 Joel Frick (6124): Well, 
1:08:21 Dave McLean: actually, so, fortunately we have more metadata about when this data was completed. So, much as the PPAP was approved on these dates.
1:08:30 Dave McLean: Yeah. In addition to the fact that these individual tasks had these file numbers, and it's very clear in this one, which is the latest version, but it won't always be that way, because people don't them.
1:08:40 Dave McLean: People don't name things specifically. What we do know is when each of these tasks was completed, right? By definition, in order for the, for the PPAP to have been approved and closed out, all of these tasks have to have been completed as well.
1:08:56 Dave McLean: So, if we wanted to isolate this, if we wanted to take the decision out of it from the part of the supplier user, instead of showing all four, what we would do is simply join to, not just the latest approved PPAP, we would join to the latest approved task for that PPAP.
1:09:14 Dave McLean: So, when they open the record up, we would show on this record, it wouldn't be a hard relationship at the point the record is created, but the grid would just show this record here.
1:09:27 Dave McLean: Most recent completion of this requirement with the link to the document so they can review it and decide at this juncture, you know what?
1:09:37 Dave McLean: Actually, the one that we uploaded back in June, it doesn't actually solve whatever problem or whatever thing was being raised back then.
1:09:45 Dave McLean: It was in January when this one was done, so now I'm going to do isv4.pdf, and I'm going to close this one out today on 09.30.2026, and Thank much.
1:10:01 Dave McLean: Thanks. Thank you. If I were to then immediately go into this PPAP, to this Inspection Standard Task, because this one is still open, this, ah, this PPAP is still open, I don't know if we would show that.
1:10:17 Dave McLean: It would 
1:10:21 Joel Frick (6124): include the review of the task. 
1:10:33 Dave McLean: Not the review of the whole PPAP at the end. 
1:10:36 Joel Frick (6124): There's the theoretical possibility that it gets kicked back by the interplanetary, yep, comes in and says no, and then the inspection standard needs to get revised for one.
1:10:47 Joel Frick (6124): And that could theoretically happen now. We could theoretically have PCR and a model change PPAP simultaneously open right now, yep, and there would be two different versions of the inspection standard.
1:11:00 Joel Frick (6124): That's right. The window, quite honestly, but the scenario that we just described is extremely small because we're talking about a very small number.
1:11:21 Joel Frick (6124): Very small number of parts that could be in the management review phase after 
1:11:28 Dave McLean: the task is approved. The only other way around it is back to the, you can't have multiple PPAPs open, or that even if the requirement is met, it's common between those different PPAP types, like inspection standard, that Intellects doesn't recognize that they're the common thing.
1:12:01 Dave McLean: So you're only ever looking at them as though new model, running change, and process change are three distinct buckets of PPAPs for the purpose of this.
1:12:09 Dave McLean: And I don't think that's 
1:12:09 Joel Frick (6124): reflective of reality here. But honestly, Bill, the scenario we just described, if that important safety got kicked back, and then the model change PPAP was approved, he's gonna see that there's a newer.
1:12:24 Joel Frick (6124): Yeah. That he's gonna have to pull forward. So, here's, here's where In, in this scenario, the way where we have a new model, maybe this is not true, I'm talking through it.
1:12:43 Joel Frick (6124): The way we have a new model PPAP open at the same time as a running change to PPAP is when you have two part numbers on the same drawing.
1:12:56 Joel Frick (6124): Correct. And, and, and we look at, we will make sure that all of those revisions are in our new model PPAP, even if you have an open running change.
1:13:05 Joel Frick (6124): Correct. The PCR is where we have this potential mis-sensitivity. So this is where we need to resolve the problem. But, what I'm getting at is, it's on the same drawn number, but it's a different group of partners.
1:13:19 Joel Frick (6124): Your PPAP and your new model PPAP just don't do part numbers. Yeah, that's true. Right? These part numbers are not included in the new model.
1:13:30 Joel Frick (6124): For the running change. I don't know if that solves anything. And the problem we would need to solve for is process change requests.
1:13:42 Joel Frick (6124): Again, it's to only occur on past production parts. And if you're doing a process change request on new model parts on a PPAP that's not closed yet, it wouldn't apply to new model parts anyway.
1:13:57 Joel Frick (6124): I think it's a self-solving problem with regard to that. We'll put it in.
1:14:10 Joel Frick (6124): So in this case, this model change PPAP would include that running change.
1:14:24 Joel Frick (6124): We always include the running changes in our model change PPAPs as a reference, because that change occurred along the way.
1:14:33 Joel Frick (6124): And so here's the other thing from our example. From our meeting this morning, assuming that we do go forward with that and think we will, then it's the same person.
1:14:43 Joel Frick (6124): Yes. Which, which solves the majority problem that we have with this. It's not as big a problem as we thought, but we definitely have to have simultaneous PPAPs open at the same time.
1:14:57 Joel Frick (6124): We cannot 
1:14:58 Dave McLean: avoid that. OK, so then if we're OK with the scenario we've played out here, which again, to recap, is we will display on the form at the point the person opens the form, not because we've established a hard relationship at the point the record is created.
1:15:16 Dave McLean: It's when they open the form, we will display a relationship to the most recent. Approved PPAP requirement task for the matching requirement for the same part number.
1:15:34 Dave McLean: So, in this scenario, again, when we come back to. So, I'm If I cut this one Over here, so if I'm opening this one what it will show me is this because this is an approved PPAP.
1:15:55 Dave McLean: Happens to be a process change. It'll show me this document and the reason the way it knows what the most recent one is is off of this.
1:16:04 Dave McLean: And as I'm looking at it for this one here. I go OK, look the one that we uploaded back in June is good, but the reason.
1:16:11 Dave McLean: The problem that was raised on this one that came in February. Let's say it requires a further revision. So I do before I update it and I complete this one in reality today on September 30th.
1:16:23 Dave McLean: It's unlikely that the rest of this PAP is going to get closed. Within a few minutes, because there's still an engineering review that needs to happen of the task and any other tasks and then the whole PAP itself.
1:16:34 Dave McLean: So if I, as the user that is responsible for this one and this one, then immediately switch over to this new model one, in my mind, instinctively I'm going to think, well, I just uploaded V4 to this one, so that's what I'm going to see.
1:16:47 Dave McLean: And in fact, I'm not. What I'm still going to see is V3. Because the V4 one is associated with an open PPAP and we very deliberately want to keep that, because just because we're uploading it doesn't mean that Subaru has approved it.
1:17:02 Dave McLean: So, fortunately, the mitigation for this is that in most circumstances, whether it's new model, running change, or process change, the inspection standard task, or the same task across that series of time, will likely go to the same person at the supplier.
1:17:20 Dave McLean: So, in the very specific circumstance I've just described, it doesn't really matter that this task is showing me V3 in spite of the fact that I just uploaded V4.
1:17:30 Dave McLean: I just uploaded V4. I'm aware that it exists. It's top of mind in this moment for me, and so I can, you know, we can, we can put a tooltip on the page so that they know why the V3 one is showing up, but in this scenario, I would just know, okay, well, I'm going to upload V4.
1:17:47 Joel Frick (6124): Because realistically, V4, while it's specific to that running change that occurred back then, that ECS history is good.
1:18:03 Joel Frick (6124): It's going to happen. 
1:18:05 Dave McLean: Yep. And this model offers one more advantage. So let's say, you know, I go in and I upload it today.
1:18:14 Dave McLean: Everything is good. And then tomorrow, maybe I was the last holdout from this one for something. You know, maybe there was some.
1:18:19 Dave McLean: Turnover in my organization. Nobody knew. That's why this one lingered on. So I, I upload it. The engineer reviews it 10 minutes after I upload it.
1:18:28 Dave McLean: Great. Awesome. PPAP moves to the final review stage. Tomorrow, the engineer does final review, and this one is now approved.
1:18:35 Dave McLean: Approved as of October, uh, 10, October 2026. Oops, if I use the right, oh, come on.
1:18:52 Dave McLean: Text strings, so this one is now approved. But the engineer also reviews this task that I just uploaded and says, no, you know what this actually isn't OK for the new model one and sends it back.
1:19:05 Dave McLean: Now when I come back. I would still see, even though I uploaded V4, I see that V4 is here. I can see that that was approved, but knowing the feedback that I have from the engineer on this one, I go in and say, OK, well, I make my edit and now I'm on V5.
1:19:24 Dave McLean: Upload that one today for now the second time, or rather, I guess it would be 10.01.2026, and send that through.
1:19:33 Dave McLean: Eventually, that one gets approved, and now any future changes, they're all anchored off 
1:19:40 Joel Frick (6124): And then let me add one more. It's maybe not a scenario, but let me just throw this out there that all of this history has happened.
1:19:49 Joel Frick (6124): We've been running the part for 2 or 3 months, and then we do a process change request. I say I don't want to update my.
1:19:56 Joel Frick (6124): Control plan. We would update the inspection standard. I don't want to update my control plan. I just want to pull in my control plan.
1:20:04 Joel Frick (6124): And is that going to be a task that the supplier will still have to do and select the one they want to pull in?
1:20:11 Joel Frick (6124): Or do I just say, Thank you. I'm just going to show the most recent control plan in the PTAF. Say that again.
1:20:22 Dave McLean: So the control plan is another requirement? Yeah, well, 
1:20:25 Joel Frick (6124): we can say inspection standard. I just, I would never do that. For a PCR, I would always request a new inspection standard, but for the sake of argument, let's just say we're running and we're in January 27, and I want to do another process change request.
1:20:41 Joel Frick (6124): But then I say, I know, I know already. I don't want to need an update to this inspection standard. Yeah.
1:20:48 Joel Frick (6124): So, but I still, I still want to show, this is one of the things we talked about, I still want to show all these requirements in every EPAP.
1:20:56 Joel Frick (6124): I just don't necessarily need an update to it. And that's what we're talking about. 
1:21:00 Dave McLean: Sorry, I'm struggling with the I in that statement. Do you mean I as the engineer who's running that EPAP? Yeah, that's right.
1:21:08 Dave McLean: Got it. So, okay, so we're changing, okay, change persona. So now, subsequent EPAP that gets created a few months later, you generate it, you look at it, your, your process.
1:21:16 Dave McLean: You're aware of the details of this particular part and everything. So as you're looking through, you go, yeah, I know already.
1:21:21 Dave McLean: I don't even want to ask the supplier for this thing, because I know that what they just did two months ago is still valid right now.
1:21:27 Dave McLean: So in that scenario, you as the engineer, as you work your way through your list, You're making that determination on whether or not they need to, I think the terms were submit, not required, or submit, retain, or whatever.
1:21:42 Dave McLean: If you choose retain, you'll just have to pick which one it is. Because, again, if there's more than one. open at any given time.
1:21:51 Dave McLean: OK, yeah, perfect, right? So the rules for the supplier in this regard are the same for you. If you're saying retain, 
1:21:58 Joel Frick (6124): you've got to choose which one. And that's why we haven't done it in the past, because you had to go into the old PBAP, drag and drop, download it, and then upload it to the new PBAP.
1:22:08 Joel Frick (6124): If it's as simple as saying just pull forward the old, I think we can do it easily. Well, OK, so one question, another question, I keep saying one question.
1:22:20 Joel Frick (6124): Another question. Just calling Colombo. Yeah, there you go. QBA. Is actually a good example of one where I would have kind of like a master document of.
1:22:34 Joel Frick (6124): You know this test. The result will be. Was passed, but then also I have 20 different PDFs or whatever that are the evidence of the testing actually occurring.
1:22:46 Joel Frick (6124): Uhm, so I might have multiple. Let's just say there's 20 files in that one folder in that one folder. Yeah, they constitute that the document is actually 
1:22:56 Dave McLean: one too many to file. Yeah, that's right. Yeah, so is it going 
1:23:00 Joel Frick (6124): to be easy for me to say select all, carry it over? Yeah, so 
1:23:04 Dave McLean: I'm slightly compressing this when I when I say file in this case. So like, you know, again, imagine we roll it all the way back to the very first one in this sequence when the person gets the task and there's nothing.
1:23:16 Dave McLean: There's no previous one for this part, and so that shows up as blank, or if they had, even if it didn't show up as blank, but they need to do a revision and they need to add a new one.
1:23:25 Dave McLean: What they're doing is saying, OK, I want to add a new document that's going to give them a form that is a wrapper or a container that allows them to then add multiple files to it.
1:23:37 Dave McLean: So that way we get some metadata. We can be aware of what the file itself is, or some sorry, what the document is, in spite of the fact that it is a wrapper around.
1:23:46 Dave McLean: It could be half a dozen files, whatever it is, but in that scenario. So in this case, rather than saying file name, which is probably not the most apt way to do it, it would be.
1:23:57 Dave McLean: You know, document, container, yeah, container, or record, which that's a useful term in this context, in an actual fact, it's going to be a series of GUIDs in the database, or like gobbledygook identifiers.
1:24:12 Dave McLean: We'll let them give it a 
1:24:13 Joel Frick (6124): mascot. Or give it a name. But in reality, the PPAP itself is merely pointing to that document that's been uploaded.
1:24:21 Joel Frick (6124): So if I carry that forward, I'm not uploading an exact duplicate. I'm merely pointing at that container again. And I say that from the standpoint of when we have PDFs and 20-some, you're talking 20, 30 megabytes of storage.
1:24:43 Joel Frick (6124): And I'm asking the question, not because I'm convinced. I'm not about our storage capability, but because I'm wondering. Do we need to talk about storage capability?
1:24:53 Joel Frick (6124): So is it? Is it in reality creating an exact duplicate or is it pointing back at that container 
1:25:00 Dave McLean: that was approved before? Yeah, that's a good question. From a storage point of view, you're spot on, right? Copying it from one to the next doubles the storage space it takes up and then doing it again adds more and more and more.
1:25:16 Dave McLean: Uhm? The tradeoff, though, is that constantly pointing back to the same document record. While that's better from a storage point of view, should anything ever change about that?
1:25:30 Dave McLean: And I think we try to control this too, through security, so that, you know, people can't modify a prior one.
1:25:37 Dave McLean: But if there's a scenario where that ever happens, that change is now applied to all of the instances of it being mapped everywhere.
1:25:48 Dave McLean: So what would be an 
1:25:49 Joel Frick (6124): example of where that would happen, uhm? Well, I can't, I can't think of one off the top of my head.
1:25:56 Joel Frick (6124): If, if we say, okay, carry over all of these previous tests and then redo this test, then they would, pull a copy of the previously approved and then update just one of those individual test reports in there, but the rest of them would pull forward.
1:26:18 Joel Frick (6124): Yeah, so to do the 
1:26:19 Dave McLean: crow's foot notation, so if I have my PPAP task, which related back to a task template, which was defined earlier, uhm, what we'd be displaying in relation, or what we'd be doing in relation to the PPAP task is, P-POP TASK would have a, so there's a document container record, which contains one or more
1:26:50 Dave McLean: documents, sorry, one or more files, and that would essentially be a many-to-many relationship to ppaptask. But this relationship filtered to only show documents.
1:27:08 Dave McLean: Documents from approved ppaps related to same part, same Thank you. Task template, which is another term for what you guys call requirement in IntelliQuest.
1:27:36 Dave McLean: So if we do that, the user interface, what would it look like? Uhm? You would see.
1:27:48 Dave McLean: At its simplest, it would be a drop. No. I can only pick one.
1:28:09 Dave McLean: I'll have to think about that. The user interface in this model, to do what we're trying to describe, we're going to restrict it so that the person only chooses one document container.
1:28:19 Dave McLean: We don't want them to, for example, in trying to complete our PPAP task, they select multiple prior versions of the document.
1:28:27 Dave McLean: I think that would be, that would sort of differentiate the point, so we need them to choose one. Yeah, choose one container.
1:28:34 Dave McLean: Yeah. 
1:28:35 Joel Frick (6124): And that pulls forward a copy of the documents in that container, puts 
1:28:40 Dave McLean: them in a new container. Yeah, so then it's actually, oops. So it's actually not a many-to-many, it's a. 
1:28:52 Joel Frick (6124): Based on that Excel file that you had there, What I'm hearing as we progress this down is you would never have.
1:29:01 Joel Frick (6124): Version 1 and then version 2 version 2. It would always be a new as far as as far as the system is concerned, it's always a new revision, even if nothing changed, yeah.
1:29:17 Joel Frick (6124): Because you wouldn't you wouldn't necessarily know the difference between the two, because it's not the keys point. It's not pointing back to the same exact container that was doing that.
1:29:27 Joel Frick (6124): You would know which version you were working on. You got it. You got it. If you're if you're copying the container each time, it's it's everything.
1:29:34 Joel Frick (6124): Every single time it's a I'm on the container from this previous. Yeah, so in this case 
1:29:39 Dave McLean: it would look like this. So on it's a bit. It's a bit of a dual user interface when you're showing them the list of files.
1:29:48 Dave McLean: that are the list of documents that we have containers that they could choose from. That is a list of of the or that it's not even a list.
1:29:57 Dave McLean: It's the one record. It's showing just whatever that recent one is and then you're asking them to confirm it, which would populate a drop down pointing at that.
1:30:06 Dave McLean: Field or or some other relationship pointing at that document container. If they say no, you know what? I need to do a new revision or I need to post.
1:30:14 Dave McLean: I need to post a new document to this task. That's when they would go and create the new document container, upload all of the documents to that container and we would then establish the relationship when they close their task.
1:30:31 Dave McLean: So there's a, it's not super relevant for you guys in this conversation. There's some things that naggling would be the technical, technical term for how the user interface would look so that it's clean and easy for the user, like that it's got to look obvious for what they're doing.
1:30:48 Dave McLean: But under the hood, what it would get us to is a spot where you have a single list of. Of these document container records and each document container record can be related to more than one PPAP task.
1:31:03 Dave McLean: How we actually achieve that is highly filtered, so you can't relate that inspection standard to. You know, some other kind of of PPAP task.
1:31:14 Dave McLean: It has to relate to an inspection standard task for that part. That comes in a subsequent PPAP, but this would avoid the duplicate storage.
1:31:24 Joel Frick (6124): problem. So what you're saying is each PPAP has its own container, and then when you go to pull, it's filtered by that task.
1:31:38 Joel Frick (6124): What I'm saying 
1:31:38 Dave McLean: is that each, each document has its own container. And that document container can be related to more than one PPAP task.
1:31:47 Dave McLean: The inspection standard from, ah, Design Change Request 1, and the inspection standard from New Model Change Request 2, and Process Change Request 3, all three of those could refer to the same, uh, or, or could all be pointing at the same document container because the, the document didn't change 
1:32:14 Joel Frick (6124): from one to the one to two to three, which is the opposite of what we just, yeah, I, I think that gets too messy.
1:32:22 Joel Frick (6124): I think that what, what we need to do is, uhm, you know, work out the storage part. That's, I mean, we currently are storing every copy of it.
1:32:37 Joel Frick (6124): That's right. So, I don't know, and, and we talked about this. That's on Joel's budget, that goes to the IS budget, and then it gets handled by it over.
1:32:48 Joel Frick (6124): That's right. So, but I guess I don't want to get too far into it because we did talk about this briefly in phase one, and I'm not worried about storage space.
1:32:59 Joel Frick (6124): That's, that's, as far as I'm concerned, we need as much storage as we need, and IT Thank you. needs to handle making sure that we have enough space so that we don't, you know, shut everything down if we start to get low on space, which we've done multiple times.
1:33:12 Joel Frick (6124): So, we wanted to, we wanted to, uh, you know, make sure that that And I guess, I guess what I'm saying is, I don't want to design our solution around constraints of storage space, you know, because storage is cheap these days, especially.
1:33:35 Joel Frick (6124): Unless it doesn't make a difference. Yeah, you got to do what you got Yeah, it'd be fair to give them time to be able to For sure.
1:33:46 Joel Frick (6124): But I was wondering, you know, these all relate back to the different versions. But if somehow it related to the ECS, that'd be easier because you only have one ECS related to That way you know what you're referencing.
1:34:05 Joel Frick (6124): Change the version. Well, it is. In a particular PFAP, that PFAP is related to an ECS level. If it's a running change or if it's a modeling change.
1:34:17 Joel Frick (6124): The only thing that's not directly tied to an ECS level is a PCR, but it is still related tied to the most recently approved ECS level.
1:34:28 Joel Frick (6124): So it is still tied to the ECS level, it's just not driven by the ECS release. Yeah, I was thinking the ECS level, like that, somehow related to this, but you know what I mean, how do you do grab the right information?
1:34:41 Joel Frick (6124): Yeah, and the other thing that complicates this is the case of, for example, the IP, various components within the IP as well as the SAP components within there, those are also get tracked in the inspection standard, so I will have an ECS to another part that I will actually tie to the IP feedback because
1:35:10 Joel Frick (6124): it's part of the IP. So all of that history has to be there. I just want to request a separate feedback for that.
1:35:18 Joel Frick (6124): I'll just tie it to it and say, hey, this is in this IP feedback. Today we need to be able to show the whole system.
1:35:31 Joel Frick (6124): We performed our due diligence. Make sure we're all versed 
1:35:35 Dave McLean: in all of it. OK. Cool. OK, uhm. Awesome.
1:35:47 Dave McLean: Moving on workflow-wise here, I want to sort of fast forward past the tasks. So let's assume that all the task work has happened.
1:35:56 Dave McLean: 50 tasks in a PPAP, 100 tasks, 500 tasks, whatever the case is, we've gone through back and forth with the suppliers.
1:36:02 Dave McLean: We've gone back and forth with our internal users. The engineer has approved and signed off on each one of the task submissions.
1:36:08 Dave McLean: And we get to that last task that gets approved. What's next? Is it the same engineer that's now reviewing the entire task?
1:36:17 Dave McLean: Or is it moving on to a different approver in that case? The 
1:36:21 Joel Frick (6124): engineer will basically approve the PPAP after all tasks have been approved. Okay. Then, if it's not one of the tasks approved, the important and safety PPAPs, then that record is closed.
1:36:38 Joel Frick (6124): If it is the important and safety PPAP, then it goes to that person's, usually group leader, but a person in a management role.
1:36:49 Joel Frick (6124): Above that engineer, that person then does an overall review. And they either approve it or kick it back to the engineer.
1:36:59 Joel Frick (6124): Who may need the supplier to make revisions to one or more of the data. 
1:37:05 Dave McLean: Okay, so if we think of the workflow of the PPAP as a whole and not the tasks, we have a draft stage where it all gets set up.
1:37:16 Dave McLean: We have an in-progress stage where the, like, that's the moment the tasks go out to everybody, right? Or at least start going out to everybody, and they're completing tasks.
1:37:25 Dave McLean: Once that, and through that window, if the engineer were to try to click the, uhm, you know, PPAP finished button, or whatever we want to call it, if there's open tasks, it's going to throw an error message saying, hey, you can't do this because it's still open.
1:37:41 Dave McLean: Once the last task is closed, you know, presumably they're going to want to do a review, they're going to want to read it, because it's been a long-running project, but that's what now activates or allows them to use that finish PPAP button, which would then, trigger the logic based on the type of PPAP
1:37:57 Dave McLean: that they're running. Is it just closed at that point right now, or is it one that now has an approval stage or a, you know, final review stage or something like, whatever you want to call it, final review is probably the better one.
1:38:09 Dave McLean: And in the parameters of that type of PPAP, that's where we would determine who the reviewer is or how the system should determine who the reviewer is, what the target period is for that, and I mean, beyond the person reviewing it and saying, yes, no, and comments, if necessary.
1:38:28 Dave McLean: Is there anything else that 
1:38:28 Joel Frick (6124): the reviewer is typically doing? Uh, no, usually when you reject it, you typically say, I don't like this. I don't like this.
1:38:39 Joel Frick (6124): I don't like this. And then the comments will tell the interviewer. Which things to fix before submitting back to you, right?
1:38:47 Joel Frick (6124): Yep. So the way that. One of the. Uh. Problems that I had is that as a group leader, when I was doing this was.
1:39:00 Joel Frick (6124): We are talking about group leader rejection, right? Yeah, managing. Sorry, uhm, so, uhm, I, I struggled sometimes because I, I might have a problem with the QPA task analytics.
1:39:20 Joel Frick (6124): And, uhm, I would have to put all of that into my comments and say, I've got this problem with the QPA task and this problem with the inspection standard task.
1:39:28 Joel Frick (6124): I, I had the ability to do it directly. In the requirement, but then when I did that, it, it was just me rejecting it back to the supplier instead of the interviewer being able to take those comments first and take it back to the supplier.
1:39:42 Joel Frick (6124): Uhm, I, I don't know if that's, if that's a, a major issue or not. I, I would say probably it's not a major issue.
1:39:50 Joel Frick (6124): I could just say I have these problems with QPK and these problems with, uhm, 50 year inspection standard. All of that to say my major issue was, uhm, I couldn't make any of my comments unscathed to the supplier.
1:40:07 Joel Frick (6124): Oh yeah, that should absolutely stay internal. My, my comments to the engineer should be internal. So basically what I had to do was give one set of really kind of high level no good on the QBA and no good on the inspection standard and then come back separately on an email or a team's message and say
1:40:25 Joel Frick (6124): , you missed this and this and this and this, you know, all the, all the stuff that I wanted to, you know, grill my engineer about.
1:40:31 Joel Frick (6124): That's what I meant to say. But, uh, you know, I would want to try to do that in a safe space, so to speak.
1:40:40 Joel Frick (6124): Obviously, in any of the things that I would say, I think it would be okay for anybody who's looking at that PPAP to be able to see that internally.
1:40:52 Joel Frick (6124): I'd be, I'd be fine with, you know, Rick getting in there and being a dozy and being like, what did Luke say to Keith about this PPAP?
1:40:59 Joel Frick (6124): I'd be fine with that. I wouldn't be saying anything there. It would be copy, paste, and you'll repeat it. Yeah, right.
1:41:04 Joel Frick (6124): Yeah, exactly. Uhm, but I don't want the supplier to see that back and forth between me and the engineer. So I guess that would be my only common one.
1:41:15 Joel Frick (6124): I want to be able to have a safe space to note all of that in the PPAP. But, okay, between me and the engineer and the supplier, yeah, I think that's absolutely true.
1:41:29 Joel Frick (6124): Any of the feedback comments from the management to the engineer stay within SIA, but the feedback comments from the engineer to the supplier stay within the tasks.
1:41:41 Joel Frick (6124): Yes. So the supplier can always see what's in the task, but what's from the manager or group leader to the engineer is outside the task and inside SIA only.
1:41:51 Joel Frick (6124): Yeah, we had that same problem with NextPrize, if you ever heard of it. It's pretty bad history. Yeah, they could see all the comments, everybody made it back and forth.
1:42:02 Joel Frick (6124): Internal. And it's just, yeah, because the routing will include the task in the rejection. That's, that's the best standard for routing to have a comment, yep.
1:42:15 Joel Frick (6124): It's almost like two fields, rejected and then reasoned. Internal and 
1:42:18 Dave McLean: external. So, so let's talk about comments for a second. When we say comment, like, are you, are you just saying, in your mind, is that just a straight text field at the bottom of the PPAP?
1:42:31 Dave McLean: Or are you commenting individual tasks 
1:42:34 Joel Frick (6124): as you're reviewing it? The, the manager is doing it currently, because from what you're asking Thank you. You're asking what do I want, not what are we doing.
1:42:44 Joel Frick (6124): Yes, sorry, yeah. You're only reading all comments internally on the project. You're only looking at it when the PPAP as a whole is rated.
1:42:54 Joel Frick (6124): That's right. Not the tasks. I, I would say, I would say, I think I would want it to remain basically the same way that it is, where I make a comment overall on the PPAP and not commentate it.
1:43:06 Joel Frick (6124): But overall, that's part of your review, rejection. Yeah. That's your comment in the process of rejecting. That's right. So it's a rejection comment.
1:43:15 Joel Frick (6124): Yeah. For the overall PPAP. For the overall. I just need to comment on this. I just want to keep it internal, but it's not rejecting it.
1:43:24 Joel Frick (6124): And other things. Yes, I do that all the time. Yeah. So, so an approval comment, right? Right. But I'm saying something if you don't like the supplier.
1:43:31 Joel Frick (6124): Yep. And I would say that overall approval comment would fall into that same. The overall approval comment of, yeah, this could be a heck of a lot better, but there's no sense in holding off approval because they need to ship tomorrow.
1:43:45 Joel Frick (6124): Yeah, that's right. Next time, do better. So, you might have a free-form text, internal, with approval or rejected. Yep, and it's required with rejected.
1:43:57 Joel Frick (6124): It's required with rejected. Yes. And then an external one, when it's rejected. Yeah. The external one always has to be there at the task level, so if I reject it back to the supplier at the task level, I have to tell them what's wrong.
1:44:12 Joel Frick (6124): Yep, yeah, when I reject it. But as a manager, you just do it if they won't roll. That's right, yep.
1:44:18 Joel Frick (6124): And only within SIA to the engineer. Yep. And that, that matches current workflow. I don't want to, to, to change that.
1:44:27 Joel Frick (6124): Oh no, I kind of heard you say you wanted to have it on the task level. Yeah, I thought about it, and then, and then said.
1:44:34 Joel Frick (6124): So when the engineer rejects it, it goes back to the supplier. Yes. When the manager rejects it, does it go back to the engineer?
1:44:42 Joel Frick (6124): Yes, yes. And then he gets What happens, or what can happen, I'm talking to myself here, and I've got to leave, but uh, no wait, it's Wednesday.
1:44:54 Joel Frick (6124): Yes, sir. I'm with you, we're on the same boat. Bob can handle that meeting by himself. I'm just thinking it was Thursday and I need to come back to the institute, so, sorry, sidebar, uhm, where, where was I?
1:45:11 Joel Frick (6124): You're putting yourself into a hole here, rejecting back to the engineer, yup, and overall compass, overall versus the engineer. It's individual test feedback.
1:45:20 Joel Frick (6124): It goes back to the engineer before it goes back to the supplier. Yup. Oh, oh, right. Okay, now, now I'm with you.
1:45:26 Joel Frick (6124): So, I'm back in my room. Sorry. Okay, so, I'm sorry. So, thank you very much. So, basically, what can happen is I'm the dumb group leader who doesn't know all the details of this development.
1:45:43 Joel Frick (6124): I just know, well, why does this look like this? And so, as a group leader, I'm going to send it back to the engineer and then I might get.
1:45:50 Joel Frick (6124): a reasonable explanation back from the engineer where I say, oh, okay, that makes sense. Now, I'll get to approve it.
1:45:57 Joel Frick (6124): And it never had to go back to the supplier. That's a scenario that has played out many, many times. I agree.
1:46:03 Joel Frick (6124): So, I think that that, in the end, I would say all of that right now, counting on back and forth is invisible to the supplier.
1:46:09 Joel Frick (6124): No status change with the supplier until the engineer says, yep, you're right, I need to send this requirement back. And so, and Dave, from the perspective of the, the, uh, task itself, I'm taking a task, a supplier, a PPAP task, that is already approved, and then going back and changing my decision 
1:46:32 Joel Frick (6124): and saying, never 
1:46:33 Dave McLean: mind, it's not approved anymore, it's rejected. Yeah, that's fine. So, uh, I mean, structurally, at the end of the day, from our point of view, the technical requirements to meet this are that, uhm, when the, when the PPAP is in progress, right, so when, when it's with the engineer, is the name of the
1:46:53 Dave McLean: stage, the, uh, engineer should have, should have the ability for each individual task to post a comment when they're approving or rejecting it, required if they're rejecting it, and that task will be visible to the supplier user that filled it out, or the internal user, that, that is being routed to
1:47:12 Dave McLean: , with the constraint that supplier users will not see tasks that are assigned to internal users. They would only see the tasks that are assigned to their, their company.
1:47:21 Dave McLean: Uhm, and that, that back and forth just plays out because that, that's sort of just part of the process. Once the, once the PPAP is approved by the engineer and sent on to the group leader, the group leader's comments work exactly the same way, except they're not in line with the tasks.
1:47:37 Dave McLean: It's not, it's not a comment field on the task form. It's a comment in the approval section. Of the PPAP, and when it goes back, uh, like, at any point in the, in the life cycle, that field should not be visible to the suppliers.
1:47:53 Dave McLean: So even if it's still with you, uh, before you've actually formally clicked, you know, send it back to the engineer, uh, but you've already saved some comments, and it shouldn't be visible then.
1:48:03 Dave McLean: When it goes back to the engineer, it shouldn't be visible then. From the supplier's point of view, those comments, and your, everything to do with the group leader's approval in that case, none of it should, in any way, be visible.
1:48:15 Dave McLean: To the supplier. The closest that they should get is that they should see on the form, or on a list of PPAPs, like active PPAPs in their supplier profile, they should see that it exists, they should see that it is still open, and that it, you know, it has a target, whatever stage it's currently in, it's
1:48:35 Dave McLean: in, it's in a final approval stage, and that's it. They 
1:48:38 Joel Frick (6124): really shouldn't see anything else. When it's at the engineer's table, it's getting ready to go to the group leader, should they be able to access it, add a comment, and only the internal would be able to see, you know, how you said sometimes a group leader asks questions and comes back, should the engineer
1:48:58 Joel Frick (6124): be able to send anything to it and say, hey, this is specific to this. Or do they not really need the comment?
1:49:06 Joel Frick (6124): They're just saying, hey, this is approved. I don't know if that would be a status. I would say typically, no.
1:49:12 Joel Frick (6124): It's just once, once all the feedback requirements are done, now I'm 
1:49:16 Dave McLean: sending it back to the group leader. Okay, 
1:49:21 Joel Frick (6124): I'm setting it back the entire feedback back to the group leader for review. But one thing, one thing we did talk about earlier.
1:49:30 Joel Frick (6124): That I want to help drive home here. We talked about those, uh. Rejected requirements, uh, where that showed up kind of in a, in a grid of.
1:49:42 Joel Frick (6124): I projected the QVA this many times and here. So that's actually really, really helpful for the group leader review, too, uh, because then I can.
1:49:52 Joel Frick (6124): I can go back and look at those, those comments that the engineer made, go back and make sure that the changes that I asked for were actually made and all of that.
1:50:01 Joel Frick (6124): So that, you know, that visibility is helpful for the group leader as well, it seems. Yeah, the way it'll show 
1:50:07 Dave McLean: to you when you see it, just like it would show to the, to the engineer. So the main chunk of this form, of this PPAP form, is this grid section that contains all of the tasks.
1:50:21 Dave McLean: But that grid section will have a couple of tabs on it. Thank you. The main one, the first one, is the list of tasks, and it's going to show you all the open and closed tasks in whatever state they are.
1:50:30 Dave McLean: It's going to show you the, who's assigned to it, you know, what stage it's in, and all that kind of stuff.
1:50:36 Dave McLean: But if you tab to the second one, right, that's going to be the, you know, task rejection log or something like that.
1:50:42 Dave McLean: That'll be a different grid that is grouped by task that has been rejected. So if nothing has ever been rejected, then that grid is empty.
1:50:52 Dave McLean: If 20 of the tasks have been completed, but only 5 of them were rejected. At some point, then what you'll see is 5 groupings, one corresponding to each one corresponding to a task with a record under the grouping of each rejection.
1:51:09 Dave McLean: And it's basically each time the engineer clicks reject. We'll write whatever their comments and the date and time and their, you know, uhm, their, uhm, name into the log and build that as a running thing.
1:51:23 Dave McLean: So if, if, uh, again, to play that out, you have 20 tasks that are complete, 5 of them complete. Some have been rejected at least once.
1:51:31 Dave McLean: In total, across those 5, there have been 10 rejections. It'll be 10 rejections grouped under 5 headers. In chronological sequence with the, probably the most recent rejection at the top.
1:51:45 Dave McLean: At 
1:51:45 Joel Frick (6124): the top of each grouping. And then the other, the other comment that I would make to make this even more robust and even more helpful to the folks who are doing this review process, having a number Thank you.
1:52:00 Joel Frick (6124): Bye-bye. Just a total number. In the task. Right, so it's like normally if I have no rejections, it'll say, you know, your rejection tab will just have this row.
1:52:14 Joel Frick (6124): But if I had the 10 rejections, even if it was five, it has five different documents, it just has a 10 next to it.
1:52:19 Joel Frick (6124): I've got 10 total times I've had rejections for this. That's kind of like a good visual flag that I used all the time when I was doing this.
1:52:27 Joel Frick (6124): Oh, I got it. Yeah, so we can, I think the cleanest way to do it, we can put it into the tab capital.
1:52:33 Dave McLean: So, you know, you'd see like, you know, number of tasks and then in parentheses 50, whatever it is, and then number of rejections and then in parentheses 10.
1:52:44 Dave McLean: That's right. Yep, that's a really helpful visual indicator for those who are doing it. Cool. Yep, definitely doable. 
1:52:55 Joel Frick (6124): One thing, Dave, I wanted to ask is when they have their group leader, when it's automatically assigned, is that by our employee record or is there sometimes people have a group leader that's not, wouldn't maybe be part of HR's success factor or?
1:53:14 Joel Frick (6124): Uhm, I think by default it's assigned to the success factor's group leader. I think we should also have the capability to reassign that to another person that's an authorized group leader.
1:53:26 Joel Frick (6124): I don't know if it's because of my admin level, but I can manually choose any of the group leaders in SQA or QC to models.
1:53:35 Joel Frick (6124): Everybody, everybody can right now. Okay. But in the only way there is that you can do that, and anybody can do that, admin or not, but you can only pick, you can't pick yourself because you're not on that list.
1:53:46 Joel Frick (6124): Yeah. So basically the way that we have done that, structured that, Dave, is that, uhm, what we want Thank you.
1:53:53 Joel Frick (6124): Bye-bye. And actually, the current setup doesn't even default to that. You just have to pay from that list over here, which isn't that big of a deal, but it's a very, very short list, but still, there's only a select list of group leaders who would be able to have the to So how do we 
1:54:15 Dave McLean: determine which group leader it goes to? 
1:54:18 Joel Frick (6124): Just that that employee's group leader in, uh, OK, sorry. The input list you got, you'll get, or you have from Scott Bailey would tell you.
1:54:26 Joel Frick (6124): It gets updated every day that that has all the current listing of the associates and who their 
1:54:32 Dave McLean: their supervisor is. Yeah, but I mean, we're talking about engineers in like a specific department. So isn't their group leader?
1:54:41 Dave McLean: Isn't it always the same person? Or am I am I just misunderstanding where they 
1:54:44 Joel Frick (6124): fall in the work structure? We get our backers changed too. So in in QC new model, the answer is yes, there's one per flitter.
1:54:55 Joel Frick (6124): In SQA, there's three per flitter. So, okay, we have three generic groups. I've got three hourly groups. Tim is just one of those three.
1:55:08 Joel Frick (6124): So they're they're saying that they want to grab that information from the input list. That's Scott generated, Scott made it.
1:55:18 Joel Frick (6124): Yeah, I said, I'm just logging in for 
1:55:25 Dave McLean: a sec to see how that plays out, because I think what. Like the closest concept to that would be having a group leader role that you're populating for each of those locations, which shouldn't be a problem when we're talking about what we're talking about here, but it's 
1:55:44 Joel Frick (6124): the SQL But 
1:55:48 Dave McLean: I 
1:55:49 Joel Frick (6124): guess the point that I was making there, though, was was less about.
1:56:03 Joel Frick (6124): I think this will be relatively easy to figure out as far as who the engineer's group leader is based on the information you're already going to receive that.
1:56:12 Joel Frick (6124): That part is not going to be the challenge, I don't think. My concern is, uh. Keith is an engineer, he's got, uhm, an urgent PPAP that needs to be approved today.
1:56:29 Joel Frick (6124): And Mike is his group leader, and Mike is a Halter. He's on vacation, he has sick, he's traveling, whatever. Mike is out.
1:56:38 Joel Frick (6124): Mike can't do the final approval today. So Keith's got to reassign it to Rick, and, uhm, Rick is an authorized approver, but he's not Keith's group leader.
1:56:51 Joel Frick (6124): So, Halter. How, just so he knows, so, Dave's going to ask us all, how often does that happen? Do we need to make it into the system, or is it something that Kaiser can go in and reassign?
1:57:03 Joel Frick (6124): It happens often enough that I do not want Council to help us fix it. We need to make it into the system.
1:57:09 Joel Frick (6124): That's right. It definitely happens often enough. That's why I said default, so it should default. It'd be great if it could just default to keyscript later as the approver for that PPAP, and then if I need to, I can go in and change it too.
1:57:23 Joel Frick (6124): Who can change it? And that authorized approver, the engineer, on the PPAP can change it. And so that authorized approver, the way I think about it, would just be a role in the PPAP application.
1:57:39 Joel Frick (6124): Management, review, authorized 
1:57:42 Dave McLean: approvers. Yeah, I think, I think, given the sort of combination of requirements here, I think the way to do it is that the, the at the, at the end of the day, if there's four approvers that it could be, at least today, anyway, like, there could be more, but it's a small pool of approvers.
1:58:05 Dave McLean: I think what it is actually is a drop down on the form that the engineer has to select. Yep. And, and that drop down is narrowed down to just the four people, or five, or six, or however many there are in the future, if there's ever more, like, it's bound based on a group, or it's bound based on a filter
1:58:21 Dave McLean: criteria. I'd have to take a look at the actual HR data to figure out what the, what the best criteria is for that, but at the end of the day, uhm, you know, a group or something that, that puts a box around those four people, and Keith, or anybody else that's acting as the engineer for a PPAP, before
1:58:40 Dave McLean: they send it for, or before they close it out, they're basically, if, if it is one that has a review tagged on to the end of it, then they have to select which of the four people they're sending it to.
1:58:54 Dave McLean: That kind of offers the best balance of control versus flexibility. On the control side, you're limiting it to people that are actual approvers.
1:59:02 Dave McLean: So if, if Keith decides to send it to somebody who he shouldn't have sent it to, it's a small enough number of people that they should be able to then send it back with the comment, I'm not the approver for this one, go 
1:59:13 Joel Frick (6124): send it to somebody else. Have a good one. Thank you very much. So, uhm, so yeah, I, I would see it as a, a roll or some, some way to, like you said, put a box around those people who are allowed to do the approval.
1:59:52 Dave McLean: I would even get away from, I would even get away in this context from binding it to the group leader, specifically.
1:59:58 Dave McLean: I would say that in the PPAP setup, where you define the types of PPAP and whether they meet the review stage.
2:00:05 Dave McLean: If you say yes, then you get a grid that says who are the eligible approvers to show up in the list.
2:00:11 Dave McLean: And you, like, as a setup function application administrator, you are, you are going in and specifying who it is that should be in that list of approvers.
2:00:20 Dave McLean: That's exactly how it works right now, up That's And that drop down for any given type of PPAP. And whether the drop down even exists at all.
2:00:59 Joel Frick (6124): That's right. That's right. I can select Gary. Holder. Pop is not. It's what she read. Yeah, you're not on here.
2:01:14 Joel Frick (6124): Oh, yeah, there you are. I was going to say I took myself out So Troy and all the group leaders in both SQA and.
2:01:22 Joel Frick (6124): You see me about it. Yep. So new hearts, not everything, but so Holder and you and Josh and Kayla, right?
2:01:32 Joel Frick (6124): And so choose any of you, right? And so the only people who can in our current setup, the only people who can modify that list of people.
2:01:40 Joel Frick (6124): That can be selected are application administrators or which is exactly what we want in this case. So the question that you had earlier about, like, is it often enough to need to have Kaiser going and do it?
2:01:55 Joel Frick (6124): I would say no. Sorry. Yes, it is often enough that we wouldn't have to do that. Take it. However, the change of that list is not often enough.
2:02:06 Joel Frick (6124): And I would say that should be a help us take it. I need to add, you know, Gary Cooper. Well, that's good.
2:02:12 Joel Frick (6124): Take it. But QC admin, because we're gonna have admin junior admins that are the perfect. Right? Yeah, we can. We can have to, but I'm thinking, and maybe they correctly here.
2:02:27 Joel Frick (6124): If we do a role based in that, that's a That comes off of the roles defined within the HR mini-master, which success package, and we wouldn't necessarily do a role based though, because I can't distinguish based on that.
2:02:40 Joel Frick (6124): I can't distinguish between Tim Newhart and John Koehler. Okay. Because it's just a group leader at QC. Well, I can think about it, but I would say, yeah, I can think about it, but once you start the creation of that VPAP, a year later, yeah, it may be a different person.
2:02:56 Joel Frick (6124): Well, we only select it at the time, because I, I mean, I'm submitting it at the time I'm submitting it is when I'm selected.
2:03:02 Dave McLean: OK, yeah. Same, same on the intellect side, and in this case, I think the people that can control who shows up in that list.
2:03:11 Dave McLean: I don't actually think that should be an admin feature. I mean, admins can absolutely get to it, but I think it's the next level down, which, unfortunately, we use the term admin a little clunky here.
2:03:20 Dave McLean: An application admin is actually a full-access user from a licensing point of view. They don't need access to the employee, like, to modify the employee list or group or role membership.
2:03:31 Dave McLean: They're literally just designating who lives in that in, like, who has been marked as an approver for that type of PPAP.
2:03:39 Dave McLean: Okay. Yep. Okay. Okay. That just gives control over to the people that run the PPAP program. Yep. Okay. 
2:03:46 Joel Frick (6124): Yeah, so that can work. 
2:03:48 Dave McLean: Cool. Okay, so to recap then, the approval is conditional, uh, based on the type of PPAP or the program that it's running under.
2:03:57 Dave McLean: If we turn it, if we disable it, then the engineer completes the PPAP once all tasks have been marked as closed and approved.
2:04:05 Dave McLean: Uhm, if, uh, if there's any that are still marked open or some of them that are currently marked as rejected and are back with the supplier, the system throws an error message if they try to close the, uh, close the PPAP.
2:04:16 Dave McLean: When they do so, if the PPAP is released, then if related to a type that has the approval turned on, for the final approval stage turned on, then they will also have to select who the approver is, uh, from a, a filtered list of employees that is defined for each type of PPAP.
2:04:37 Dave McLean: Uhm, when they click through, the same validation applies as far as completeness of it, so if, assuming that it is complete, the system will route the task, or route the PPAP to the approver, uh, send them an email notification, and what they'll see at the bottom is, you know, beyond the fact they can
2:04:52 Dave McLean: see all the data, they can see the redistribution, the injection log that we talked about, they can dig into each of the individual tasks, both internal and, and supplier as they need to, without changing any of that data.
2:05:02 Dave McLean: That's all locked at that point. Uhm, if they have comments, those comments are directed back at the end of the engineer, and therefore the comments that they're posting are into a field that is hidden from the supplier view.
2:05:17 Dave McLean: They should not be able to see the approver's comments, no matter what, what role in the organization the approver fills, you should never be able to see that.
2:05:25 Dave McLean: If the approver rejecting it, the approver fills out their comments, marks it rejected, and sends it back. The engineer receives a notification, they can see the comments, and it'll be their job to decide how to distill those comments into action.
2:05:39 Dave McLean: One pathway might just be that they post their own comments in response to it, and send it back to the approver, because it's a clarifying thing.
2:05:46 Dave McLean: It's not, it's not something that necessarily requires work, we just have to make sure that we're all on the same page as far as what we're approving.
2:05:52 Dave McLean: Um, separately, if, if what has been said does require some modification, then it's the engineer's job to reopen whatever tasks are needed, post a rejection comment into those tasks that is now visible to the supplier, or to the SIA user who's responsible for that task, and to route the task back to 
2:06:13 Dave McLean: that person so that they can add action accordingly. Same idea, maybe in some cases that doesn't actually lead to a change or a modification, it just leads to a, uhm, clarifying comment from the supplier user, for example, before closing it out again, but in a lot of cases it, it, you know, blocks by
2:06:30 Dave McLean: the sounds of it's going to lead to a different answer in a checklist, or it's going to lead to, uh, a new revision of whatever document they posted to that task before they route it through for approval of the task again, once again, when all of the tasks are now showing again as approved, approved 
2:06:47 Dave McLean: and closed, the engineer can send it through back to the, uh, approver, who then hopefully marks it as complete and, uh, and approved.
2:06:58 Dave McLean: Yep. Okay. Cool, sounds good. This is a good spot for a break. Why don't we come back on again in about 10 minutes.
2:07:09 Dave McLean: My last sets of questions, just to prime the pump, deal with where pilot part data integrates with this. So when is it that we're triggering it?
2:07:16 Dave McLean: And then I want to start talking about, security visibility and mobile, just to finish off the same ending conversations that we had yesterday.
2:07:24 Dave McLean: All right, see you guys in Hey guys, let me know when you're back.
2:19:34 Dave McLean: Awesome. Okay, homestretch. Alright, let's talk about pilot part data and how it connects into PPAP. Yesterday when we talked about this, we talked about pilot part data being something that is something that or a pilot part program being something that's triggered at a certain build event, or I'm assuming
2:19:57 Dave McLean: that that is what we're describing as a phase this morning, uhm, of a given PPAP, but, uh, to try to take the assumptions out of that, it.
2:20:06 Dave McLean: Bye. Can you guys can you guys describe how these two processes intersect and specifically how and when, within the context of a PPAP, we would start 
2:20:14 Joel Frick (6124): the pilot part program? So the pilot part data is basically the pilot. It's the that will eventually be approved by the PPAP.
2:20:26 Joel Frick (6124): But they are submitted at our build events. That we have at SIA. Uhm, along the way to model completion, so they are.
2:20:38 Joel Frick (6124): They are. Triggered by whatever the master schedule says, we're going to build at SIA. That's when we're going to have a build event and that's when we're going to order parts and therefore we are going to need to inspect those parts.
2:20:54 Joel Frick (6124): To the requirements by the engineer before they can be released for the event. And the reason why I say it's tied to the PPAP, because the instructions for the PPAP sample review, basically, that goes to the culminating stages of the PPAP, are cumulative, based upon the engineering changes along the 
2:21:19 Joel Frick (6124): way, and the original requirements, and any problems that are encountered, we'll add new comments for the next event. So, it's basically like a pre-review of what's going to be 
2:21:33 Dave McLean: the PPAP samples. Okay, and it's only pre-review, right? It's not like we have to do the pilot part data program again midway through or again at the end of the PPAP.
2:21:44 Dave McLean: Well, at the end 
2:21:45 Joel Frick (6124): of the PPAP, it'll be a very similar review, but it'll be the PPAP sample parts. Which is 
2:21:52 Dave McLean: its own task within the PPAP breakdown structure. Correct. Got it. So, in that case, it's less about tracking the inspection results.
2:21:58 Dave McLean: It's results in the way that we are for Pilot Park program. It's that we're assigning a task to somebody in the PPAP task matrix, and they, you know, complete it, they upload a file attachment, and they do the 
2:22:12 Joel Frick (6124): checklist that's embedded within it. It doesn't necessarily have to be within the PPAP itself. In fact, it currently isn't. Uhm, but it is tied to the PPAP because we are currently using the same inspection checklist 
2:22:27 Dave McLean: for both. Okay. Okay, so there's a potential. Problem we're going to run through later here, which is that if we follow the architecture as we have it right now, pilot part program, the piece that will be done at the beginning is its sort of own thing, and then that step of the PPAP task list is a different
2:22:47 Dave McLean: thing. And even if it's its own checklist, how that actually plays out will be a little different. So we're going to want to reconcile that together eventually here, but I want to let's this concept of the build event.
2:23:00 Dave McLean: The build event is not one of those stages or, uh, phases that we saw in that little matrix that you 
2:23:06 Joel Frick (6124): showed in the Excel file, right? Correct. The document submission to the PPAP, uh, does not match up exactly with our build events here at SA.
2:23:17 Joel Frick (6124): OK, 
2:23:18 Dave McLean: so the build event The build events are defined for each, like each build event is defined for each PPAP. It's not something that's templated.
2:23:28 Dave McLean: It's for 
2:23:29 Joel Frick (6124): each model, like the PPAP has phases, the build events are tied to the model as well. OK, so this is only 
2:23:37 Dave McLean: for, sorry, this might actually, this might be lost in the ether from yesterday for me. Pilot part data is only for new model?
2:23:44 Dave McLean: Correct, correct. Right, got it, OK. So, for our, uhm, model, model lead, model, the person who's creating that, uhm, new model summary record that we talked about earlier today, that's going to contain all of the different PPAPs.
2:24:02 Dave McLean: In addition to them defining the new model phases, the new model stages, and therefore all of the plan deadlines that come as the intersection, the cells in that matrix, one of the other things that they would be defining at that stage is also the build events that would, would correspond within this
2:24:19 Dave McLean: new model plan, right? Correct. Okay. Okay, build event, and when they're defining a build event, what would that, what would that entail?
2:24:31 Dave McLean: Giving it a name and putting a date on it? Is that as simple as that? Yes. Do those change? Ever?
2:24:41 Joel Frick (6124): Unfortunately, yes, we're currently changing names, but hopefully we'll be stabilized here in the next years, but specific question, I think is.
2:24:55 Joel Frick (6124): Do they change after we create this for that model? Yeah, 
2:25:02 Dave McLean: you got it for a specific new model. That's your question, right Dave? Yeah, you 
2:25:05 Joel Frick (6124): got What is the answer to that question? Usually once we establish the master schedule, the, the, the. Build events are the build events, right?
2:25:13 Joel Frick (6124): So it might change from dy2 to dx3. It probably did actually change from dy2 to dx3, but after dx3 is set, it's set and you're not going to change those events again, you're right.
2:25:25 Joel Frick (6124): Yeah, it's very rare that we will add a build event. After the model is kicked off. I mean, it has happened.
2:25:32 Joel Frick (6124): In fact, very rare. Yeah, I think, I forget which one it was. I think it was TGA that we added a build event.
2:25:38 Joel Frick (6124): Sometimes I can generally a special event, something. Like if SVR asks us for a special event, Yeah, because the online build here at TGA.
2:25:47 Joel Frick (6124): Yeah, but it's very, it's very rare that once we start a model that we add a build event after the master schedule has issued.
2:25:58 Joel Frick (6124): OK. Yeah, dates can change. Yeah, dates can and do change, but yeah, the major milestones do not really change or pertinence.
2:26:09 Joel Frick (6124): Got it. Do you, do you happen to 
2:26:10 Dave McLean: have a sample of something, an Excel file, a document or whatever, that, that shows an example of how, this master schedule with build events actually displays right now?
2:26:21 Dave McLean: Like, how, I just want to make sure I have the right content 
2:26:24 Joel Frick (6124): in mind. Again, understanding that we're in the midst of a corporate. Of course. Strategy change. We can show you in the past what that's looked like.
2:26:34 Joel Frick (6124): Yeah, yeah, yeah, we can send that to Perfect, 
2:26:38 Dave McLean: so, but ultimately for any given new model summary, there will be multiple build events that are listed out, each of which is given a name and each of which is given a date.
2:26:48 Dave McLean: That that build event is, that that build event happens 
2:26:51 Joel Frick (6124): on, or happens by? It normally, in a build event, will kick off on a date, and depending upon how big the build event is, it either lasts three days or two weeks.
2:27:04 Joel Frick (6124): It's, it's a time period. There's usually a kickoff date for it, and our parts for that build event need to be approved ahead of the start of the event.
2:27:13 Joel Frick (6124): So, I would say, for us, with respect to pilot parts, it's definitely the, the kickoff date. Of that event, that we have to have 
2:27:23 Dave McLean: the pilot part data. Okay, perfect. Now, so we, we have, we've set the stage for it. We have our, our new model, uhm, sorry, the term is new model engineer, was it?
2:27:36 Dave McLean: Yeah, that, that's running that. Is it the new model engineer that once they've built out the schedule, including the build events, are they the one that is going to is now defining the pilot part program?
2:27:48 Dave McLean: That's to say, uhm, which pilot part programs are, which build events will have pilot part programs attached to it, what the checklist is, and any sort of version control of the checklist that's going to be used, or is that somebody else?
2:28:02 Dave McLean: Somebody else who's building out the pilot part program and connecting it back to the build event of a certain 
2:28:09 Joel Frick (6124): new model summary? Yeah, the, the engineer who's responsible for the PPAP of those parts also creates the checklist for the, uh, pilot part inspection.
2:28:20 Joel Frick (6124): Got it. Okay, 
2:28:21 Dave McLean: so our, our new model engineer is, is responsible for setting up the new model summary, schedule, everything like that. Then later on through ECS, uh, from Bomex, we receive our first PPAP.
2:28:38 Dave McLean: And again, we'll get many more of them, but we get our first PPAP. That's going to go to the, to the engineer based on the routing that we talked about earlier.
2:28:46 Dave McLean: They're going to review it and say, yep, we've got to do a new PPAP. And when they're setting up that PPAP, they're defining what type of PPAP it's going to be and relating it back to the new model summary.
2:28:57 Dave McLean: Assuming it is a new model, it's related to a new model summary. We would also then be giving them the option to establish the pilot part program as a Thank you.
2:29:07 Dave McLean: Pre in progress stage, so when I was talking about workflow before the break and said, look, we're going to have a draft stage.
2:29:12 Dave McLean: We're going to have an in progress stage and then a final review, which is optional. It sounds like between draft when they're setting it up and in progress when we actually send out all of these PPAPs.
2:29:23 Dave McLean: tasks, that's where pilot part data is really going to happen. It's independent. 
2:29:29 Joel Frick (6124): It's not dependent. It's not dependent on the PPAP itself. Got it. OK, it supports it from the standpoint of it gives us.
2:29:39 Joel Frick (6124): Pre-review. Pre-reviews of the parts that will ultimately be approved by that PPAP, but the PPAP itself does not depend upon that pilot part 
2:29:48 Dave McLean: inspection. Got it. So when they're setting up the PPAP, they would say, OK, I want to do a new pilot part program related to build event one within that new model summary.
2:30:02 Dave McLean: They're going to define their checklist and all that stuff within the pilot part program, and that's all functionally independent of the flow of the PPAP program.
2:30:12 Dave McLean: In theory, could those overlaps, could the pilot part program be happening after, still happening after the PPAP tasks have all been sent out?
2:30:21 Dave McLean: No. 
2:30:22 Joel Frick (6124): So once the PPAP is approved, and this is actually one of the caveats we give to the suppliers to get the PPAP submitted and approved, they no longer have to send data once they're PPAP approved.
2:30:35 Joel Frick (6124): PPAP approved. So those are now approved parts that don't require this special, uh, pilot event inspection. 
2:30:45 Dave McLean: Got it. Sorry, I think I was asking the question in a different context, but what you answered is still really good to know.
2:30:50 Dave McLean: What I'm saying, though, is when the engineer is setting up the PPAP program, and, you know, defining the, uh, like, building the PPAP after having reviewed the new drawing and going through and sort of making all the task manipulations that came from the template, before those tasks go out to the suppliers
2:31:15 Dave McLean: and internal users for them to start completing them, completing those tasks. Does the pilot part program have to be finished before that happens?
2:31:23 Dave McLean: Or can the pilot part program still be running where the supplier is responsible for continuing to send, uhm, parts and we're still inspecting those parts?
2:31:33 Dave McLean: While the PPAP tasks are being completed, knowing that can happen over the span of weeks or months. Yeah, they will run simultaneously.
2:31:41 Dave McLean: They run simultaneously. 
2:31:42 Joel Frick (6124): So, basically, our first build event usually occurs in Japan. Uhm, and then. When we talk about PPAP tasks as far as the phase due dates, typically phase one is after that first build event that happens in Japan and approximately near our first build event at SIA, but they are not tied to each other.
2:32:11 Joel Frick (6124): They just generally simultaneously occur. So phase one of the PPAP versus our second build event, but our first at, at, here at SIA in the second build event at SIA, again, occurs somewhat simultaneously with phase two, but they are not intrinsically tied to each other.
2:32:34 Joel Frick (6124): They are not linked, but they do happen to occur approximately. Okay, so is it 
2:32:40 Dave McLean: possible that two, it sounds like it's possible that two pilot part programs against the same PPAP can be running simultaneously, one against build event one, the other against build event two.
2:32:52 Dave McLean: Yeah, and how does the supplier know that? Close enough. 
2:32:55 Joel Frick (6124): If they're close enough, uhm, then there is the possibility that there were two different orders sent out, uhm, RKIV is one I can think of.
2:33:07 Joel Frick (6124): We usually combine them, but sometimes they're spread out. But, yes, it is, it is possible that there are multiple pilot part event inspections open 
2:33:22 Dave McLean: at the same time. Got it. So, when procurement goes through, to the supplier, to go and purchase those pilot parts, is part of that procurement process to bind that PO to whichever pilot part program they belong to?
2:33:38 Dave McLean: Like, if we're going to go to them and say, hey, send me, we want to buy, we want to buy 50 units of this part for the first build event, and we want another 50 for the second build event, and they, if they're functionally overlapping, is there something that ties the fulfillment of that order back to
2:33:56 Dave McLean: build event 
2:33:57 Joel Frick (6124): 1 or build event 2? No, uhm, in fact, we're, we're kind of blind to that in quality. We don't know the exact PO number, but the PO that is issued to the supplier will name the build event, so the supplier knows when they're going to receive that PO, which build 
2:34:16 Dave McLean: event those parts are for. Got it. OK, so, cool. So in this case, if, if, if any given build event, ah, sorry, let me rephrase that, if any given PPAP slash build event combination can only have one pilot part, then we can, we can figure out which, which record those are being fulfilled against.
2:34:39 Dave McLean: Yeah. OK. 
2:34:41 Joel Frick (6124): Yeah, when the order goes out for an event, I don't know if that helps, but I'm showing it here on screen.
2:34:50 Joel Frick (6124): We specify which ECS level we are ordering for those 
2:34:52 Dave McLean: parts for that event. OK, so just, just so I get where, where is the event, oh, there we go, column C, got it.
2:35:00 Dave McLean: Yeah. OK, so lots, OK, lots of events, potentially. 
2:35:04 Joel Frick (6124): Oh, yeah. Oh, yes. Got it, OK. Just, just so that, just so that you know, so some of those, it says, like, paint try, metal try, trim try, all that.
2:35:16 Joel Frick (6124): Not every part is ordered for every event. 
2:35:21 Dave McLean: What? Not every part is ordered for every event. OK. OK. 
2:35:26 Joel Frick (6124): Every part has to be ordered for every event. But some of them are current models, so. Well, no. If we're doing paint try, or if we're doing metal try, we don't don't need any trim work.
2:35:34 Joel Frick (6124): No. So not every part, not every trim part. We still have to order the metal parts for 
2:35:39 Dave McLean: the rally. Yep, yep, yep, yep, yep. OK, is the inspection checklist name or is the inspection checklist that you would use when you are?
2:35:51 Dave McLean: Inspecting each of these parts, is it? I mean, barring maybe revisions that you make as the program progresses or as the PPAP progresses, is the intent that the checklist is the same all the way throughout?
2:36:03 Dave McLean: Or would each event have its own unique checklist? For that particular pilot part program. There, there will 
2:36:11 Joel Frick (6124): be, uhm, revisions and event-specific instructions. So, as an example, when Thank you. The ECS releases, it will sometimes name that build event that that change has to be implemented into.
2:36:33 Joel Frick (6124): So the engineer updates the inspection checklist to say, at this build event, you need to confirm that this ECS was 
2:36:42 Dave McLean: incorporated on these parts. So, if I think of the sequencing in the system that's going to make the most sense for the user, when I initiate the PPAP, the master schedule has already been defined, so I have my 50 different build events, or whatever it is, already defined at the master schedule level
2:37:07 Dave McLean: . If I go in and say, OK, I need to create a pilot part program, and I'm going to define my build events.
2:37:11 Dave McLean: My base checklist that we're going to use for this, and the sort of generic instructions, publish the checklist at that point in time, so that we now have a Rev1 of that pilot part program checklist, and then select one or more as many of the build events for that new model, that new model summary record
2:37:33 Dave McLean: that we're related to, select all of them that I want to run the pilot part program for. And in doing so, take the checklist, and essentially, essentially, okay, we'll come back to whether we're copying it into each individual build event pilot part run, because there'd be some challenges if you just
2:37:59 Dave McLean: , you decide to change the checklist later on, if we've already copied that into the pilot part build events, then it would make it much more difficult to apply those changes.
2:38:09 Dave McLean: So for argument's sake, let's just say, I define the pilot part program, I define the checklist for it, I select, all of the build events that we want to run this pilot part program for, and from there, I would, within each, uh, pilot part program, run, uh, which is where it relates into each build event
2:38:36 Dave McLean: , that's where I'm going to go and specify which parts we're inspecting for that run, uh, and then create the, the, uh, or then give the opportunity to the, uh, to the supplier for them to fill out their pilot part program.
2:38:48 Dave McLean: So, part shipment form. The one that says, hey, I just sent you this much, this many units. It's related to this build event.
2:38:55 Dave McLean: Here's the tracking number and the shipping method so that you guys can follow up on it. And when they're coming through, what they're giving you is based on the purchase or based on the purchase order that they just fulfilled, they're telling you how many units they shipped, what build event it belongs
2:39:09 Dave McLean: to, and how they shipped it to you, plus the tracking number. That way, that way we can connect it to, maybe run is the wrong word here, but a specific run of the pilot part program as it pertains to one build event.
2:39:24 Dave McLean: Yes. Okay, okay. Now, when we say, when we say that from one build event to the next, to the next, to the next, we might have some, some, you know, some confusion.
2:39:36 Dave McLean: Specific instructions that we're giving to the, to the, uhm, inspector, or the person who's doing the inspection. Is that, like, just high level instructions, like a single text field that we give them at the top of the checklist?
2:39:49 Dave McLean: Or can it actually be, no, we actually might, slip in a couple more questions that we want them to ask for build events X, Y, and Z that are not part of the other 20 build events that we're running pilot part program for?
2:40:01 Dave McLean: It's, it's generally cumulative, 
2:40:03 Joel Frick (6124): uhm, so as we, as the ECS is released and change parts will say I need this to be confirmed at this event and if that stays in there historically, uhm, you know, just confirm that it's still there at the next event.
2:40:20 Joel Frick (6124): Uhm, but if we find problems during the build event that are potentially related to how that part was made, we will want that instruction to be in the next event instructions so that we don't get that same error.
2:40:34 Joel Frick (6124): The same problem at the next build event. So they basically grow from event to event as we learn, and whether that learning is a past problem with the part or the vehicle, Thank you.
2:40:50 Joel Frick (6124): or an ECS, it just continues to build 
2:40:54 Dave McLean: on the instructions. OK. OK, so the way that that's going to play out is that, you know, as you're doing inspections on the units that the supplier has shipped you, as part of, you know, Build Event 2, if you're noticing issues, is that, is that how it would, like, it's typically going to be something
2:41:17 Dave McLean: that's triggered by an issue that was noticed, so you're, you're getting failed results, uhm, in the, in the inspections. The inspection results you're getting, and that triggers the creation of additional questions or instructions 
2:41:28 Joel Frick (6124): for the next Build Event? Typically, it's as we're building, or, uhm, when we have a finished vehicle and we're inspecting.
2:41:39 Joel Frick (6124): That we find something and we trace it back to the park, then we will update our instructions for the next Build Event.
2:41:46 Joel Frick (6124): Uhm, and in the middle of an actual event when we're doing park inspection, there's very rarely an update at that point as well.
2:41:55 Joel Frick (6124): It's only after the parks have been approved to that checklist, and then we find something with it, with those parks later, then we will update the checklist to make sure that whatever it was that occurred before doesn't occur in the next Build Event.
2:42:12 Dave McLean: Got it, got it. Got it, okay, so. Okay, so because Build Events have a, have a defined start and end date, and even though if they might overlap, or they might be very close together, in reality, we, we, we would know generally when a Build Event is done.
2:42:36 Dave McLean: Are all of the, is it possible that the, is it possible that the parts that the supplier is shipping you to inspect don't actually get to you 
2:42:47 Joel Frick (6124): during the Build Event? No, we have to have the parts, 
2:42:51 Dave McLean: or we can't build. OK, got it. So, so the Build Event can't end until the parts have been received and inspected.
2:43:00 Dave McLean: Right, got it. OK. And similarly, on the other side of that, the parts may have been received by the start of the Build Event.
2:43:12 Dave McLean: Maybe not yet. Maybe if it's something that lasts over the course of a few days, it may be you start it knowing that there's still something in transit to you, but you would not have done any of the inspections before 
2:43:24 Joel Frick (6124): the Build Event starts. Generally, we want them finished before 
2:43:30 Dave McLean: the Build Event starts. Got it. Oh, I understand. So the pilot part inspections precede each Build Event. Right, so we generally have a due date anywhere 
2:43:41 Joel Frick (6124): from two to four weeks for the parts to get here, so that we have time to inspect the parts, inspect parts, and stage the parts 
2:43:50 Dave McLean: ahead of the Build Event. Got it, OK, so. Each time the Build Event, each time a Build Event gets closed out essentially.
2:44:04 Dave McLean: How is it that the feedback on what needs to change about the checklist gets to the PPAP engineer who's running that PPAP in that pilot part program?
2:44:16 Dave McLean: We're directly involved 
2:44:18 Joel Frick (6124): in the Build Events. So you're plugged in. Yeah, so we are. We're sort of plugged into the Build Event. We attend a wrap-up each day to talk about the concerns with the bill, and then we initiate investigation and countermeasure based upon what we learned from the Build 
2:44:35 Dave McLean: Event of that day. Got it. OK, so I, OK, I can visualize how this is going to look now. So the PPAP engineer holds the PPAP record and all the tasks and everything like that.
2:44:47 Dave McLean: They're doing their thing. They have a list of Build Events that they have added into the pilot part of the part program for that particular PPAP, the ones where you're going to run a pilot part inspection plan.
2:44:59 Dave McLean: And so let's say for the PPAP I'm working on, let's say I've got 20 Build Events that we are going to run the inspection program for.
2:45:08 Dave McLean: Procurement. Procurement goes out and buys those and they buy them at a time, like they complete the purchase of those so that there's enough time generally for those parts to get shipped to us so that we have them to be able, we have them in advance, well enough in advance of the Build Events that we
2:45:23 Dave McLean: can do our inspection. When we get to the Build Event, the real-world work happens, and at the close-out of the Build Event, the, that would be the moment, because the qual, or because the PPAP engineer is directly involved in the work in the real-world, if they choose to go and make a modification to
2:45:45 Dave McLean: the checklist. I want to add a couple more questions to go look at some additional things that we're seeing in the, in the build, uh, that we, we just did, or maybe I want to refine the wording or the guardrails.
2:45:56 Dave McLean: Maybe I just want to give some highlights. Maybe-level instructions on how to be more specific about what we're looking for.
2:46:01 Dave McLean: Whatever those changes are, they now have an opportunity at that point to modify the checklist, publish it as V2 or V3 or V4, whatever it is, so that the next time that we start receiving parts and we kick off an inspection, we're now using the newer one.
2:46:17 Dave McLean: But because these happen in waves, rather than just sort of a constant stream of things, we should generally know that if, uhm, if I published my checklist yesterday with a new revision, time.
2:46:29 Dave McLean: And I receive a bunch of parts today, I should be inspecting it using the version of the checklist I used yesterday.
2:46:36 Dave McLean: Or that I published yesterday. You would never go back and use the prior version from before, just because maybe there was a shipment that was late in a really compressed time schedule.
2:46:45 Dave McLean: No, 
2:46:47 Joel Frick (6124): it's definitely cumulative, and it changes along the way. I will want Rev2 for BuildEvent 
2:46:54 Dave McLean: for the next BuildEvent. Okay. When we set up the individual BuildEvent containers, for each pilot, for the pilot part inspection, is there a target or something like that, that dictates how much product, how many units we want to inspect for each BuildEvent?
2:47:12 Dave McLean: Just to make sure that we have a representative sample? It's usually every part. BuildEvents are 
2:47:17 Joel Frick (6124): small enough, that we ask them to inspect every part of that BuildEvent. Do you have that schedule for each, like, one of each repair?
2:47:25 Joel Frick (6124): Uh, sure. 
2:47:30 Dave McLean: And again, notwithstanding something that came to you and was damaged in transit, so you're not going to, not going to do it.
2:47:35 Dave McLean: This, this would be, like, basically, if we had to figure out a percent complete of the pilot part program inspection for each BuildEvent, the way we would figure out how many there are is the sum total of all of the parts that the supplier sent us when they say how many they sent.
2:47:52 Dave McLean: It's the sum total of that, less any that we decided not to inspect for whatever 
2:47:58 Joel Frick (6124): reason once we receive them. Yes. Okay. Is that what you were talking about, Keith? Yeah. This is an example of some of the numbers.
2:48:08 Joel Frick (6124): Okay. So they're, they're, they're very low volume. So the numbers, total number of vehicles or parts. So those, those are examples of quantities.
2:48:22 Joel Frick (6124): That we're talking about. So it is not unrealistic for us to ask for every single part to be 
2:48:28 Dave McLean: inspected to that checklist. For an entire model, so, uhm. We're talking about tens of thousands of parts that come through.
2:48:38 Dave McLean: For a given model. 
2:48:40 Joel Frick (6124): Yes, OK, these are just for these events, yeah. So that OK, 
2:48:47 Dave McLean: sorry, it's just it's a scale that I wasn't. I don't think I had wrapped my head around until this moment here, so.
2:48:53 Dave McLean: If if over the course of a. Of each of each event, you build five vehicles out of it and you inspect every part of each of those five vehicles, knowing that there are tens of thousands of parts in a vehicle model.
2:49:10 Dave McLean: So the. The pilot part program data, the data accumulation is essentially you are going to have 50,000 or more inspection records per build event.
2:49:22 Dave McLean: Well, 
2:49:23 Joel Frick (6124): not every single, not every single part. Okay. Each vehicle. It's only the new parts. Only the ones that are that are in 
2:49:31 Dave McLean: scope for the PPAPs of that new model. Yes. Got it. Got it. Okay. So we were using the number 500 yesterday.
2:49:37 Dave McLean: So if my, if DZ1 new model has 500 PPAPs associated with it, then we're and we in in the SIA by certification build event, we built five vehicles.
2:49:50 Dave McLean: Then we expected, we inspected every one of the 500 parts five times. Yes. Okay, that's helpful.
2:50:03 Dave McLean: Okay, sorry, that was, uh, in the context of any given PPAP, what this is really telling us is that, you know, if the build event that gets planned for this date to this date You know, for that, that new model, if the build event is that we're going to build five, right?
2:50:20 Dave McLean: If the person who's building or who's defining the schedule says that for the SIA by certification event, that's going to start on this date and end on this date, and we plan to build five vehicles, then that actually can do to directly feed down into the part program data to give us a essentially a 
2:50:36 Dave McLean: percent complete. Yes. OK. Complete what are the what's white bodies, metal, plastic? Power unit and trim referring to in this case?
2:50:50 Dave McLean: White 
2:50:51 Joel Frick (6124): body refers to just a metal, metal body. So it's just a metal shell of the car that we don't attach any of the chassis or engine or trim parts to.
2:51:01 Joel Frick (6124): So if you look at that first, what's white or line 14 almost SI by certification? Yeah. So five complete vehicles and then it's showing five white bodies, right?
2:51:12 Joel Frick (6124): So, yeah, it's showing 11 metal. They're going to build 11 metal, metal of those. And then of those, where it says power unit trim, so six engines and six trims.
2:51:27 Joel Frick (6124): So there'll be six completed vehicles out of that 11. And five will just be the body shell, right? They'll build 11 body shells total.
2:51:35 Joel Frick (6124): Six more will 
2:51:37 Dave McLean: get painted and assembled. Got it. Okay. So again, different, different numbers here to determine how many different parts, depending on what part we're talking about.
2:51:47 Dave McLean: Yeah, I 
2:51:47 Joel Frick (6124): mean, and our, and our metal parts, for example, our white bodies, are usually a combination of parts that we stamp here, as well as metal parts that we buy from suppliers.
2:52:00 Joel Frick (6124): So, uhm, again, going back to that thousands of parts that go into the vehicle, we make a lot of those here ourselves.
2:52:07 Joel Frick (6124): We don't actually buy them, so they're not. They're completely outside of the scope of of PPAP 
2:52:13 Dave McLean: and pilot part data. Got it. OK. OK, I think that's OK. I think in this case, I mean, ultimately, I think this just gives us a better sense of.
2:52:24 Dave McLean: The flow of data. I think what's what's actually important here for this is is more so that as long as when the supplier.
2:52:32 Dave McLean: Creates the record of the shipment that they sent to you and they specify. You know what, what PPAP it relates to.
2:52:40 Dave McLean: What build event it relates to, then we can join it all together to make sure that we sort of place it at the right build event of the of the plan.
2:52:50 Joel Frick (6124): Yeah, so all build event pilot part inspections. Leaked to a PPAP, because ultimately those parts used in that build event will need PPAP approval.
2:53:04 Dave McLean: Okay, okay, so solution wise, the PPAP has a relationship to the pilot part program. Record, one to many, which. Pilot part has a relationship, but one too many to pilot part build event.
2:53:26 Dave McLean: Which in and of itself. Is related via drop down to the actual build event from the. New model summary, so in theory, if you were to go to the new model summary and then click into any given build event.
2:53:42 Dave McLean: You'd be able to see all of the individual events. The individual pilot part build events for that. Build event across all the PAPs.
2:53:52 Dave McLean: OK, and then that. Contains. A list of the the word we've got. That we've used Pilot part shipment. So we can see each individual shipment that's been sent to us, and that's going to be related through.
2:54:15 Dave McLean: Once again. Not too many like that. Yeah, just so there's a visual here. Does get a little dicey after awhile.
2:54:28 Dave McLean: So just in terms of where to integrate them so the PPAP. Program. Is related to the new model summary via via drop down or from the new model summary.
2:54:44 Dave McLean: It's a grid. You can see many, many PPAPs within it. And the PPAP gets initiated in addition to all the task stuff, which is I've just moved off of the diagram for the moment.
2:54:54 Dave McLean: The user is going to create a pilot part program within that pilot part program. They're going to select one or more of the build events for the new model summary or from the new model summary record.
2:55:04 Dave McLean: To create something called a pilot part build event. In that. Each pilot part shipment that the supplier creates when they say that they're sending you parts, they're going to select which PPAP it relates to.
2:55:20 Dave McLean: Using that PPAP, we're going to filter the list of build events for the build events that we have specifically said are part of this pilot part program, so there could be 100 up here, but for this PPAP, maybe we've only said 20 of them are relevant for that PPAP's pilot part program.
2:55:37 Dave McLean: And therefore, when they're choosing, they're choosing one of the 20 build events that are relevant for this PPAP. they send through data and we're going to assume for argument's sake that they get that that we're mapping correct because I think over time you know we can use the date ranges to figure
2:55:53 Dave McLean: to filter them out so that they can't accidentally send something for a past prior one and therefore we kind of lose track of it in the data.
2:56:03 Dave McLean: Then as the inspections occur. Part, that was actually the data log, that's what we were doing, created by the supplier, completed by the inspector.
2:56:19 Dave McLean: Yep, so in this case when they create their shipment, because the shipment can contain parts. Uh, oh, actually, sorry, different relationship here.
2:56:31 Dave McLean: So because the shipment could theoretically contain parts from multiple PPAPs, right, if they boxed it all up and said, we're going to it in one FedEx shipment for multiple PPAPs that are running.
2:56:47 Dave McLean: The relationship to the PPAP and the build event is at the pilot part data log level, where that's where they're saying the specific number of units.
2:56:56 Dave McLean: And once you guys run that, and you it, then you create your pilot part inspection, which uses the latest version, whatever version of the checklist, for this pilot part program that is currently active right now.
2:57:13 Dave McLean: And so this just presumes that any revisions that were made to that checklist after the last build event have already been made and already been published into Intellects.
2:57:24 Dave McLean: Yes. Part inspection. Pilot part checklist version. Which connects over here like that and oops.
2:58:01 Dave McLean: Pilot Park Checklist, which is the one where they're sort of actively manipulating it to then publish into specific versions, so.
2:58:13 Dave McLean: Yeah, like that. Active is the one that uses over here. And then we get into the failures, which we've listed somewhere here.
2:58:23 Dave McLean: There it is, Pilot Park Inspection Failure. So that's the other piece that comes off of the. Not the shipment, that was wrong yesterday.
2:58:37 Dave McLean: That Pilot Park Inspection Failure comes off of the inspection. Which, to be more specific about it, in this context, is Pilot Part Inspection Response.
2:58:57 Dave McLean: It's where we answer all of our individual questions. And then, finally, Pilot Part Failure Report, which is related to each one of these.
2:59:16 Dave McLean: Actually, it's a many-to-many. Because any given failure report can relate to more than one response, if the reason for the failure is essentially something that hits multiple.
2:59:32 Dave McLean: And same goes for here, although it would be, any given failure report relates to one pilot participant. Okay, and that's how it all relates into the PPAP.
2:59:46 Dave McLean: Okay, I guarantee there will be some new nuance to this one when I go into the next level of detail, and I will probably come back with some questions on it.
2:59:53 Dave McLean: But from a data modeling point of view, that covers the broad strokes of the relationship. Okay, so once again, sequence, though, by the time we get to the PPAP gets created.
3:00:07 Dave McLean: Our new model summary already has to be defined. By the person who's running the new model, including phases, stages, and therefore the the intersection, which in the cells in that matrix that you showed, I'm calling them planned deadlines.
3:00:20 Dave McLean: For the sake of the diagram here, but again, we can figure out whatever that looks like. Then the build events, the full list of them with the start and the end date for each one.
3:00:32 Dave McLean: We care less on the intellect side about how many vehicles you're going to build or the breakdown. That's good to know.
3:00:36 Dave McLean: But it's not, it's not germane for intellects. When the ECS records come through, the PPAP records will be created and owned by the engineer once they move into the PPAP kind of setup stage where they're starting to build out the PPAP plan and check all the tasks and decide what's going to be required
3:00:57 Dave McLean: , what's going to be something that they're using, using past information for and so on. Before they even get to that, that's where they're going to define their pilot part program.
3:01:05 Dave McLean: They're going to build out their checklist and publish it. They're going to specify which of the build events from the release or from the new model summary they're going to incorporate into this pilot part program so that when the shipments start to come through the supplier, when they start adding 
3:01:23 Dave McLean: the individual parts into the shipment, they can select which build event it relates to. Yes, and then that gives us full traceability from the inspection and the results back into individual build events.
3:01:37 Dave McLean: So not only would you then be able over time to check. You know, the failure rate for the PPAP, you could then segment that down to individual build events as well.
3:01:48 Dave McLean: Build event 1, you know, had an 80% success or 80% pass rate. Build event 2 had a 40% pass rate, like if it's really not going well.
3:01:57 Dave McLean: Well, I can't imagine the numbers are that bad, but. 
3:02:02 Joel Frick (6124): Our targets are usually 
3:02:04 Dave McLean: in the 90s, so yeah, yeah. OK. Cool. OK, let's talk security. So to kind of build on what we talked about yesterday with respect to pilot part program, where we had said.
3:02:22 Dave McLean: Hey folks, today we have one other 
3:02:25 Joel Frick (6124): question from Luke here. Go for it. Sorry. I'm ready to talk about security just yet, because we haven't talked about PCR yet.
3:02:34 Joel Frick (6124): OK, let's talk about PCR. How much time do we have today? 15 and 14 minutes. OK, so it may not take very long, but PCR.
3:02:45 Dave McLean: Process change request, right? That's right. 
3:02:49 Joel Frick (6124): So this is, this is another avenue. So we talked about new model and running change related to ECS. PCR is another avenue by which a PPAP would be created.
3:03:01 Joel Frick (6124): Or another reason for which a PPAP would be created is probably a better way to say that. The difference between a PCR and these other two is that a PCR is going to be initiated by the supplier.
3:03:18 Joel Frick (6124): So that's, it's a major difference from a program standpoint and the other difference is, you know, uhm, yeah, the other difference is it's, it's staged, meaning I have an approval.
3:03:34 Joel Frick (6124): I don't call it approval intentionally in the system, but basically from a programming standpoint, I have an approval of the PCR itself and then I go to PBAP.
3:03:45 Joel Frick (6124): And actually what I call that in the system and all of my documentation to avoid confusion. with the supplier is proceed to PBAP instead of approval.
3:03:55 Joel Frick (6124): We call it proceed to PBAP. Uhm, or reject or we need more information or something like that. So this is.
3:04:05 Joel Frick (6124): The other thing. The other part of this discussion is there's actually a broader discussion that we, as an organization, decided to move to phase 3 for process change because we actually want to ultimately bring in a bunch of other departments in that approval process.
3:04:22 Joel Frick (6124): Yeah, and we said from a scope standpoint, we can't fit it into phase 2. Yeah, I got it. 
3:04:29 Dave McLean: Okay. I can see it here. It's a, it's a, it's a category 
3:04:32 Joel Frick (6124): of a management of change. It is. It is. But the reason I'm bringing it up right now is we have to.
3:04:38 Joel Frick (6124): We have to have this stood up in order to to stop with the telequest. We at least have to have the portion where a supplier can make the request.
3:04:48 Joel Frick (6124): Stood up, whether we have all of the, you know, workflow with all the other departments and everything figured out. Before then, that's fine.
3:04:56 Joel Frick (6124): We can add all of that later, but I'm giving you all of this because 
3:05:00 Dave McLean: it's a plumbing discussion. OK, so the outcome of today's conversation on this is going to be a Joel, Rick, and Emma conversation, which is a challenge.
3:05:10 Dave McLean: And we're order to move this up and to understand what the impact to schedule and budget is. From a budget point of view, it's probably not material.
3:05:18 Dave McLean: It's probably just shuffling budget around in it, but it is another piece that we'd have to have to factor into this phase.
3:05:27 Dave McLean: Based on what you're describing is, hey, it turns out it actually is a key component 
3:05:31 Joel Frick (6124): for turning IntelliQuest off. Yeah, so we had discussed that earlier. Buddy was okay with leaving in phase 3. Buddy doesn't run PCRs.
3:05:43 Joel Frick (6124): Yeah, yeah, that's the key difference, and I think that Buddy is saying, as far as, you know, getting, you know, supplier management, uh, production and supplier management, Thank you.
3:05:59 Joel Frick (6124): Quality and procurement and design all the all the different people that we want to look at these eventually in there.
3:06:06 Joel Frick (6124): That's fine. That can be phase 3. What I'm saying is at a bare minimum, I have to have a way for a supplier to request.
3:06:13 Joel Frick (6124): To make the request and. And for SQA to say yes or no. Adding in all those other, you know, groups and all the other complexities and getting depot change in there and all that kind of stuff.
3:06:26 Joel Frick (6124): That can be phase 3. That's fine. What I have in IntelliQuest right now, I have to at least have what I have in IntelliQuest ready.
3:06:33 Joel Frick (6124): Okay, so we'll, we've only got like, yeah, so I can, I can offline give you an explanation of how that's going to impact the schedule.
3:06:43 Joel Frick (6124): Yeah, so that you can understand what you're asking. Yeah, and then Dave would have to give us, uh, a rough estimate of cost and schedule impact, and then we would have to go to Buddy, Rachel, and Chico.
3:06:54 Joel Frick (6124): Yep. And make a request. Yeah. In, in summary, Dave, it is a type of PPAP most similar to a running change that doesn't have all this model change complication.
3:07:06 Joel Frick (6124): Right. But it is initiated not by a OMEX data transfer. Yeah, yeah, that makes sense. Okay, so. It will, it will always, by nature, be only OMEX.
3:07:20 Joel Frick (6124): On a part that already exists in the system. Like a running change. Like a running change, yeah. Okay, and is it, is it 
3:07:26 Dave McLean: bound to a drawing in the same way that a running change would be as well? Yes. Yeah, so it is a, while, what they're, again, if I'm, if I'm, if I'm interpreting the name of it into what the, what's actually happening, the supplier is saying, I want to go make this product a little differently than what
3:07:44 Dave McLean: we'd originally said we were going to do. That's right. In theory, the, the product itself won't change. I mean, the composition of it might change, might be a little different, but like, it will meet the specifications for that product that we've all agreed to.
3:07:57 Dave McLean: That's Uhm, but as, because it is bound to a part, therefore it's all anchored by whatever the latest version of the drawing is.
3:08:08 Dave McLean: Yeah, yeah, and, and the way we define 
3:08:11 Joel Frick (6124): it, a PCR means we're changing something about how we make this part, but we're still satisfying all of the drawing requirements.
3:08:20 Joel Frick (6124): We're just changing some of the ingredients, whether it be the process itself. Making it, or who we're buying the materials from, we control that, but it's not controlled by the drawing, but it still is tied to the drawing because it has to meet the drawing requirements.
3:08:36 Joel Frick (6124): Yep. That's why I say it's not driven by an ECS. It's driven by the supplier needing to do something that's not controlled by the drawing, but they are bound by their contract to us to not make these 
3:08:49 Dave McLean: changes without our approval. Yep. Right. So if they think that they can, I don't know, Bye. craft a sturdy engine part out of pound cake instead of out of metal, and it has the same tensile strength and all the other properties that meet the spec, like, in their mind, that would be a good idea, but 
3:09:09 Dave McLean: they can't do that without 
3:09:10 Joel Frick (6124): getting you to approve it first. Yep. Most common is they'll change their, uh, production line, or they'll change their manning on the line, or they'll move the line.
3:09:20 Joel Frick (6124): Yep. Uh, those are the most common types of PCRs. Yep. 
3:09:24 Dave McLean: So it's not even about the product. Yeah, I guess this makes sense off the, at the top. It's not like, it's like they're gonna start sourcing the metal that they use, the steel that they use to make that part from somebody else, and therefore the specific steel is different.
3:09:38 Dave McLean: That would be a, that would be a, not 
3:09:40 Joel Frick (6124): something that they're allowed to do. Usually, if the type of steel is changing, to use your, to make your example out, if the type of steel is changing, usually the type of steel is going to be called out on the drawing at some, some level, usually not a very detailed level, but the type of steel would
3:09:58 Joel Frick (6124): be like a drawing change. But if, but if I'm going to say I'm going to change my source, of the steel from a mill in northern Indiana to a mill in Alabama, to use a recent example, then, then yes, that's I can't buy it from a new supplier, so I need to submit a PCR, because it's not being driven by a
3:10:23 Joel Frick (6124): design change. It's being driven by one of the factors that goes into me building it. Yep. Okay. And the 
3:10:30 Dave McLean: way the, the way the statement of work is worded on this document. Topic, the PCR itself is a, it seems like it's a relatively lightweight workflow where they are requesting to make this change to you.
3:10:43 Dave McLean: They have to describe the change that they're making, you know, in the real world. This is the supplier. These are their certificate, whatever stuff they want.
3:10:49 Dave McLean: When you review it, you would decide, you know, yes or no, this is approved, and presumably, if yes, do we need to do a new PPAP for 
3:11:01 Joel Frick (6124): this particular part? Got it. Okay. What we're talking about right now is very specific. It's simple, but what we're talking about later is bringing in other departments because of the impact to, all right, can this new line meet our production requirements?
3:11:14 Joel Frick (6124): Are we going to have to change our logistics? So, that's that later phase where we bring in the other departments, things we're going to be doing now outside of our current quality systems.
3:11:25 Joel Frick (6124): We have to communicate, all right, I've got this PCR, this is going to happen. So, that's why that later discussion is going to happen because it incorporates all the other groups that currently aren't part of the new PCR PPAP now.
3:11:41 Joel Frick (6124): Yeah. Okay. So, that's the difference between what I'm asking for in phase two and what we, what got moved to phase three is the simplicity of the workflow.
3:11:52 Joel Frick (6124): It is, it is truly a simplistic workflow currently, and it is truly a complex workflow for what we're looking at in the future, yes.
3:12:02 Joel Frick (6124): So, what we, probably what I hear is what we'd like to do is try to pull this into the phase two UAT part and do then separate that out, put together information on phase three, and then I guess you guys would have to let us know what that impact, if there is an impact by that, because most of the most
3:12:24 Joel Frick (6124): of the changes. For PCR would be in phase three, and there's an overlap. There's only about a month difference between UAT testing, but, uh.
3:12:35 Joel Frick (6124): Between the two, but, 
3:12:37 Dave McLean: uh, okay. Yeah, I will, so this this segment of. Of the recording, I'm going to shoot a message over to Emma after we wrap here.
3:12:47 Dave McLean: Emma's covering me right now with a couple of other clients that I have in UAT right now, so I've got her real busy right now, cleaning up my messes, so I'm going to just pass this one right along, and I can add it to her pile, which means, as far as the sort of timeline for decision-making for that,
3:13:02 Dave McLean: uhm, give her till, like, Monday to review this segment of the video, to sort of get her head wrapped around what we're asking for, and then to start to formulate a, a response.
3:13:14 Dave McLean: As far as, okay, what does this actually look like from a scope-schedule-budget point of view, uhm, how do we, how do we structure the change order just to make sure that all of our T's are crossed, I's are dotted, and that the timeline you're looking for meets the timeline that, uh, that we need with
3:13:29 Dave McLean: respect to our IntelliQuest. deadlines. And what 
3:13:31 Joel Frick (6124): you, what you guys are saying, though, is the rest of PCR can still be in place. Yes, yeah, yeah, absolutely.
3:13:37 Joel Frick (6124): Just this portion of this one. Okay, I mean, this is the most simplistic level of feedback because it's not even driven by Bomex.
3:13:47 Joel Frick (6124): It's literally driven by this flagger saying, hey, I want to do this. Yeah, right, right, yep. 
3:13:52 Dave McLean: Yeah, and so I think the complexity of this is actually in the PPAP, though, isn't it? It's the tasks that get generated for this type of thing.
3:14:02 Dave McLean: It's not PPAP, but, you know, is it that the majority of those tasks, like, they're still following the structure that we've laid out here so far, right?
3:14:12 Dave McLean: Yes, they follow the exact same structure. Yeah, so it's just a matter of who's responsible for them at the supplier.
3:14:18 Dave McLean: Which ones do, does, you know, who is responsible for certain SIA tasks that pertain to this, albeit, given what it is, I would expect that the vast majority of them are supplier tasks.
3:14:31 Dave McLean: Right? Uhm, yes. 
3:14:33 Joel Frick (6124): Yeah, almost all of them, yes. Yeah, 
3:14:36 Dave McLean: OK, so the complexity that you're alluding to for what you want to grow to later on. How is that, how is that, like, if we build the simple workflow process for them to submit a PCR request.
3:14:50 Dave McLean: Uh, you know, am I OK to do this so that you guys can vet the sort of do a pre vetting of it and then decide whether to go forward with a PPAP or not to fully assess the change.
3:15:00 Dave McLean: If we build that front end layer and then you guys load up all the content that's needed, all the task templates and everything for the process change PPAP type.
3:15:11 Dave McLean: What else comes later? 
3:15:13 Joel Frick (6124): That's all before. Everything that we're talking about in Phase 3 is everything leading up to that decision to 
3:15:21 Dave McLean: go to PPAP. Got it. OK, cool. OK, so then yeah, after we decide to go 
3:15:28 Joel Frick (6124): to PPAP, there's 
3:15:29 Dave McLean: no change on the back end. Right, got it. Yeah, it's like you've got it 
3:15:33 Joel Frick (6124): for a PPAP shift parts, basically. Cool. 
3:15:37 Dave McLean: OK, yeah, and then it just means that I'm on our end for PPAP. We just factor in that not every single PPAP would be created as a as a relationship to an ECS drawing that came through via the integration.
3:15:50 Dave McLean: There would be some that there are some that would be coming from PCR and then we identified one use case earlier today, which is no, there are some that we might initiate manually and then relate to a drawing after the fact.
3:16:02 Dave McLean: Yep. 
3:16:02 Joel Frick (6124): And realistically, if we're forced to, the PCR could be that. We just wouldn't have that history. If the ECS can't do it.
3:16:12 Joel Frick (6124): I know, I know you don't want to. I do not want to. I see your head shaking, but realistically, that is the fastest backward step.
3:16:19 Dave McLean: Yes. Yeah. Yeah. Okay. Okay, cool. All right. We'll talk to Emma. And get the ball rolling on that. From what you're describing, I don't think that would be, like, from a design workshop point of view, I don't think that's a full day.
3:16:34 Dave McLean: I think it's a half day at best, if not even a couple of hours to talk through it. The biggest risk of it is that You It was scoped as a component of management of change, which is a much more complex app than what we're describing here.
3:16:50 Dave McLean: And so it's a matter of making sure that while trying to achieve that objective, we simultaneously set up enough of management of change that it will work, while not locking in decisions for the rest of the management of change scope, based on this one very narrow use case.
3:17:09 Dave McLean: Yep, 
3:17:10 Joel Frick (6124): and I think you hit the nail on the head earlier. It's more a part of PPAP. It's just a terminology that's used.
3:17:17 Joel Frick (6124): Yeah, it's the same terminology that we use in Phase 3. Yeah, it, 
3:17:23 Dave McLean: honestly, like, if I was, if I was completely ignoring both our contract with you and your contract with Intellects, I'm not entirely sure that I would build this part as a piece of MOC versus adding it as a custom form into the PPAP application.
3:17:39 Dave McLean: In the same, in the same way that the new model summary is a custom form that we're adding, adding on top of, like, as a layer on top of PPAP.
3:17:47 Dave McLean: It's not 
3:17:48 Joel Frick (6124): something that exists today. We'll talk a little bit more internally about this too, because I'm not sure how this how this happened exactly.
3:17:56 Joel Frick (6124): So we'll 
3:17:58 Dave McLean: have to get that figured out. Cool, awesome. OK, look. So for security and mobile stuff, those are relatively straightforward questions at this point, just because I suspect the answer for PPAP related security is very much going to follow what we talked about yesterday, so I will I will do a quick circle
3:18:19 Dave McLean: up on that in the meantime. Morning will take 10-15 minutes tops to just to come back to those two topics and confirm if the answer is, hey, no, actually, we're wildly different than what we talked about yesterday, then we'll take that down as an open question to circle back so that we don't derail tomorrow's
3:18:34 Dave McLean: conversation. If we end up a little bit early might actually be a little bit early, end a little bit early tomorrow, because unlike today, where we're talking about configuration parameters, we actually have enough of the configuration parameters for scorecards, because we talked about it in the last
3:18:50 Dave McLean: workshop. Tomorrow is going more about starting to look at the actual content that will go into supplier scorecard. What is it exactly you are measuring, how much of that is going to be user-entered scorecard data versus potentially stuff that we can draw from other parts of the system, where we can 
3:19:06 Dave McLean: automatically populate it. 
3:19:08 Joel Frick (6124): Good, OK, cool. 
3:19:12 Dave McLean: Alright guys, appreciate everybody's time and attention today. I will see you guys tomorrow. Hopefully not with an energy drink to start the day.
3:19:19 Dave McLean: And I'll send you that file over that we just want 
3:19:22 Joel Frick (6124): to populate. Appreciate it very much, Rick. Thank you very much. So I sent you something to just give you an idea of what the typical schedule looks like and some of the terminology.
3:19:33 Joel Frick (6124): Oh, that's terrific. Alright, got it, OK. Thank you all. Thanks guys.
