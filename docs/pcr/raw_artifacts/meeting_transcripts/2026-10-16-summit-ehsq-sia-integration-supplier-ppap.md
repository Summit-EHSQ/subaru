---
artifact-type: meeting-transcript
meeting-title: Summit EHSQ | SIA | Integration Supplier PPAP
meeting-date: '2026-10-16'
meeting-time: '10:00 AM ET'
meeting-datetime: '2026-10-16T10:00:00-04:00'
participants:
  - Dave McLean
  - Luke Phillippo
  - Keith Freeman
  - Joel Frick
  - Brian Hensell
  - Isaku Nishiwaki
  - Andrew Brown
---

# Summit EHSQ | SIA | Integration Supplier PPAP

00:00 Dave McLean: For the heavier one that comes later on, which is more of a derivative of the management of change process, my understanding was that that one is not a supplier-initiated process, that one is a Subaru-initiated process.
00:16 Luke Phillippo (6770): I don't think so. Okay. I think, I think they're both, they're both supplier-initiated. I think what happens in the Phase 3 version is we get all these people that I'm having to email and go and make a phone call to and catching in the cafeteria and saying, hey, Brian, I've got a question about door 
00:36 Luke Phillippo (6770): glass or whatever, right? All of those kind of things and actually put them in the system, which is a pretty complicated, bigger process.
00:44 Luke Phillippo (6770): Totally understand why it's Phase 3, but even those are typically going to be initiated. 
00:48 Dave McLean: Is it truly a different process than the one that we'd be bringing into Phase 2, or is it, is it like, would it be more accurate to say it's like an enhanced version of, like, a deeper version of Phase 2 than one that we're going to do in Phase 2 here?
01:08 Luke Phillippo (6770): I guess I would say a little bit of both, and Brian could speak to this a little bit, maybe even Keith or Rick, but I guess what I, what I see from an SQA perspective is, right now, much of, let's use depot change, for example, that's entirely outside of IntelliQuest.
01:29 Luke Phillippo (6770): We don't do depot change in IntelliQuest, per se. We, we see the results of it sometimes, if they, if they do a depot change, and that actually leads to a manufacturing location change.
01:40 Luke Phillippo (6770): Usually, we know on the quality side, and we, we run a PCR, actually, but they're, they're entirely siloed. They're, they're completely separate in the systems.
01:48 Luke Phillippo (6770): And, uhm, what I think phase three is going to attempt to do is to pull all of that, to integrate it, to make it all one process, and that's, that's very different from what we do right now.
02:02 Dave McLean: Got it. So, again, I'm probably oversimplifying this, but if I'm the supplier, and I submit a process change using the phase two system, scope of, of functionality we're talking about, Luke, if that, if that comes to you, uhm, you're reviewing it, and then you do a whole bunch of real world stuff to 
02:19 Dave McLean: essentially determine whether or not we wanna, wanna proceed forward with a PPAP, or whether we wanna go back to the start.
02:41 Luke Phillippo (6770): You want to put a finer point on that, or does that pretty much match? 
02:46 Keith Freeman (6781): I would agree with that, and it also, the phase three also captures the various other parties being formally involved with their aspects, uhm, materials.
02:57 Keith Freeman (6781): Supplier management, uh, the buyer that are not currently involved within TeleQuest, because right now, TeleQuest is just our quality group.
03:07 Keith Freeman (6781): So all of that other stuff has to happen outside of a TeleQuest. We need those other groups involved. That's the goal, is to capture all of that, with the working of all the groups together, and then ultimately, once that's agreed, then it may or may not result in the PCR-driven PPAP like we currently
03:33 Keith Freeman (6781): have, that is only quality. 
03:36 Dave McLean: Sure, yeah, I think the Phase 3 functionality that we'd be adding, which, as I talk this through, I recognize in the real world, these are all sort of new products.
03:45 Dave McLean: These aren't or separate processes from the original PCR request that comes from the supplier, but I think from a product perspective, these, these, you know, additional steps, workflows, tasks, things like that, that happen are just further downstream within the process change request workflow that,
04:06 Dave McLean: that we have the supplier initiating as part of phase 3. So, whereas, uh, whereas the phase 2 functionality is really, again, to come back to the me submitting it and Luke being the one that gets it, it puts us a huge emphasis on Luke to do the work that needs to happen in the real world and then just
04:22 Dave McLean: come back with a simple yes, no answer. Essentially, phase 3 is now the, okay, let's incorporate all the stuff that allows us to show our work into that.
04:32 Dave McLean: And so therefore, when Luke gets it, maybe we he's gonna, he's gonna classify, hey, this is this type of, uhm, this type of change that they're asking for, which, based on that type of change, should pre-populate a list of potential, ah, reviewers that need to be looking at this change.
04:48 Dave McLean: He might be able to change that, add that some, remove some, modify who it's gonna go to, ah, modify the question that we're asking, or questions that we're asking each of them, but ultimately, once you've got your, let's say, ten people that need to be taking a look at this change that's been requested
05:03 Dave McLean: , he then blasts those tasks out, Thank And has full traceability on when everybody has completed them, if anybody rejects them, then that's probably got to roll the whole thing back so that he can take into account, uhm, whatever feedback came from that person who rejected it, work with the supplier
05:22 Dave McLean: , hire to refine the request or whatever it is, and then send it out again, or straight up reject it at that point.
05:28 Keith Freeman (6781): Does this all sound like it's a revolver? Yeah, the distinction I would make is, once we get to the Phase 3 PCR, supplier management will be the one who initially rejects it.
05:38 Keith Freeman (6781): Receives it, as opposed to quality. I think that's a distinction to make. 
05:44 Dave McLean: What would be the, Just to frame up my thought process here, consider this as one, one, Workflow, where the Phase 3 stuff is just a subsequent step within the, within the workflow that we roll out in Phase 2.
06:02 Dave McLean: So, the life cycle of it would still be that, uhm, the supplier initiates this process. when they submit it, it's going to go to, uhm, sorry, was it supplier management that's going to receive it, or is it quality that's going to receive the original, the, the first pass?
06:20 Keith Freeman (6781): For Phase 3, I would say it's 
06:22 Dave McLean: supplier management. Supplier management, but for Phase 2, it's going to be quality. 
06:28 Keith Freeman (6781): Specifically, SQA, yeah. 
06:31 Dave McLean: Okay, so SQA receives it, and then is SQA then using what was submitted to then orchestrate the next step in the process to supplier management?
06:41 Luke Phillippo (6770): Uhm, not really, not in the system, right? And I think, yeah, I think you were picking that up earlier, but not in the system.
06:51 Luke Phillippo (6770): That's all done kind of offline, uhm, you know, me picking up the phone. And calling, you know, Brian or somebody from Brian's team, hopefully, and that's sometimes we don't do that.
07:03 Luke Phillippo (6770): And that's kind of what we're trying to fix with, you know, the phase three. Uhm, but yeah, all of that real world stuff is basically on the shoulders of the SBA.
07:10 Luke Phillippo (6770): It's QE to, you know, make the right decision, get the right people involved and all of that. And then the only thing that's actually a system next step is create a new PPAP based on this PCR.
07:23 Dave McLean: Based on the outcome. Have we approved it? 
07:26 Keith Freeman (6781): Yep. Yeah. So, like, I, I envision in phase three, the phase two supplier requested PPAP is only a stub of the process when SQA agrees, yes, we're okay with it.
07:40 Keith Freeman (6781): We're okay this PCR, but as terms of this PCR, the supplier has to submit a PPAP, but the overall PCR has many other parts to it, and SQA's part of it at that point is, yes, SQA agrees, but you have to submit a PPAP as, before you ship parts in from this.
08:00 Keith Freeman (6781): Okay. 
08:02 Dave McLean: Okay. To put it all into, into sort of UI framework, so what, can you guys see my screen right now?
08:10 Joel Frick (6124): Yes. Yes. Okay. 
08:12 Dave McLean: What you guys are looking at right now is a mock-up, a semi-functional mock-up of what will eventually be the supplier portal in Intel X.
08:22 Dave McLean: So when, when the supplier logs in, this will be the first screen that they see in intellects. It's obviously not.
08:29 Dave McLean: It's obviously very task focused. So, you know, hey, what do you have to do? What are you waiting for from SIA?
08:34 Dave McLean: What are the priorities you've got? It gives a little bit of detail in terms of scorecard information that can be exposed.
08:40 Dave McLean: But as you get down, whenever the supplier needs to initiate one of those, the processes that is available to them, specifically process change, what I really want to make sure is we give them one button for that thing.
08:53 Dave McLean: So everything I'm hearing here is that the phase three component of PCR, that is, initiated by the same, the stub, I'm going to use the term that you used there, because that, that's a, that's a great way to think about it.
09:07 Dave McLean: It's initiated by the stub PCR process that we roll out in phase two, which they would initiate something like this.
09:15 Dave McLean: And once that process has been sent off to SIA and has been worked through to whatever extent is needed, when phase three is rolled out, the outcome of this process would be the start of the third phase.
09:29 Dave McLean: Phase three process, the heavier, more management-of-change-focused version of that that is all internal. And there might be some back and forth that, that might get, if not routed back to the supplier, then it might get routed, it might, the, the original stub piece of it might get routed back to the
09:47 Dave McLean: supplier if the more thorough one, uhm, requires more information or something like that. That can all be determined later on.
09:54 Dave McLean: But from the supplier's point of view, they only ever initiate one thing. The fact that there might be a subsequent and subsequent process that comes into play related to the thing the supplier is working through, that isn't, that isn't initiated by them.
10:09 Dave McLean: They just do the stuff and that will, that will never change. Correct? 
10:14 Luke Phillippo (6770): That is that is what the hope is. And I think that's what Rick was talking about in his introduction to this.
10:21 Luke Phillippo (6770): And that's like a, we want to, because this is going to be phased internally, totally makes sense. We understand why, why that needs to happen.
10:29 Luke Phillippo (6770): What we don't want to do is roll this out to the supplier, and then immediately change it in, you know, six months or eight months or whatever, and say, oh, your button's over here now.
10:39 Luke Phillippo (6770): This is now how you submit a PCR. Or, you 
10:42 Dave McLean: know, whatever, so. Yeah, or even worse, like two buttons. 
10:46 Luke Phillippo (6770): Right, right. Oh, this is, this is for depot change. This is for, yeah, yeah, we don't want that. 
10:51 Dave McLean: Yeah, yeah, no, they, they only ever initiate the stub. I think that makes sense. You know, the KISS principle applies here.
10:58 Dave McLean: And then you guys, me being SIA as a, you know, homogenous entity, you guys will then decide how to orchestrate it into the other process or not, uh, on your end.
11:07 Dave McLean: And, and again, there's, there will almost certainly be an interplay. It would be nice to think it's always going to be a happy path through, but in reality, the, the, the phase three part of the process, we'll likely have some backwards integration to the phase two process where we need more information
11:26 Dave McLean: from the supplier, and that's fine. I think what I'm hearing from this, the only, the only substantive change that I would want to make to how we go about doing this is, and this is a, this is not a consequential one because we're identifying this now, so great, uhm, in my view, the process change that
11:43 Dave McLean: we were doing in phase two, completely separate and distinct, no interaction, no relation from what we'd be doing in phase three, that it was a, a sort of unknown process.
11:55 Dave McLean: What I'm hearing here is that, no, it actually is all the same thing, and in reality, what'll happen is, we should build the stub version of this as an offshoot of management of change.
12:06 Dave McLean: That is just incredibly stripped down. When we get to phase three, we're building that back up again. So that workflow gets built out to more steps, most of which are SIA internal focused, uhm, the, the review process, like, all the review tasks.
12:22 Dave McLean: Tasks and screening question components that are typical for an MOC-like, ah, type workflow. Those would all get restored in at the appropriate points of that workflow.
12:31 Dave McLean: Uhm, it would, it would essentially be in Intellex, one holistic workflow, with a series of child workflows that come off of it for any of the review tasks that are needed, or implementation tasks that are needed along the way, whenever you have to bring in other people into the team.
12:48 Dave McLean: But the, the taking it from the stub that the person, that the supplier submitted, all the way through to when we've decided, yes, let's go do the PPAP, that should ideally be a single workflow that contains many child workflows within it.
13:11 Luke Phillippo (6770): That sounds like exactly what I was hoping you would say, so. 
13:19 Dave McLean: Possible, OK. Alignment achieved, yes. 
13:23 Luke Phillippo (6770): Uhm, so the, I mean, I guess this is. There's more Rick and Joel's question, but I'll go ahead and ask it now that now that we're, you know, kind of understanding what what each other is saying is their impact to schedule by making this work.
13:43 Dave McLean: Oh, still want to do the, we still got to do something in phase 2 here. So, you know, it's just instead of creating a custom object from scratch and building it up, we're taking, we were always going to be creating a custom object for people.
13:59 Dave McLean: We're not PCR under the MOC umbrella. This just means that instead of creating that and the stub object with its own workflow, we're doing the one, we'll build the PCR child object of the MOC application, that way it connects in for when we're ready to go.
14:15 Dave McLean: We go and do the full, the full version of it in Phase 3, but otherwise we're, we're starting with what is needed for the stub.
14:26 Dave McLean: Okay, so to make that easier, Luke, would you mind shooting over some screenshots for that PCR child process from IntelliQuest, the stub version of it that exists now, just so we can mine it for fields and make sure that there's nothing that is fundamentally going to be problematic for incorporating 
14:42 Dave McLean: it as a child of MOC? 
14:45 Luke Phillippo (6770): Yeah, I can, I can do that. Perfect. 
14:48 Joel Frick (6124): And what is your ultimate question, Luke, about rollout, how you want the suppliers to roll it out, if you have to wait for the phase 3, or if you are able to do it before then with the phase 2 that you're talking about?
15:07 Luke Phillippo (6770): Yeah, and that was, that was kind of the, the big thing. What I definitely did not want to do was say, okay, now all ECS PPAPs are done in Intellects, but we're still doing PCR for that.
15:20 Luke Phillippo (6770): So for PPAPs in, in Telequest until phase 3 is done and I just, because on the supplier side, a PPAP is a PPAP as far as you know, they're concerned for the most part.
15:31 Luke Phillippo (6770): And so I want to just say okay, PPAPs are now in this software and. You know, this is how you initiate a PCR and this is what to look for for ECS related ones and all of that stuff.
15:43 Luke Phillippo (6770): So I want to just do all of that at once, whether it's in phase 2 or phase 3. And it sounds like we can still do that in phase 2 and then in phase 3, it's gonna get enhanced in phase 3.
15:54 Luke Phillippo (6770): That's it. Once phase 3 
15:56 Dave McLean: goes live, like literally the day we hit the deployment button, it's just going to be that a whole bunch of new options open up in the PCR form and workflow that that's already being used.
16:08 Dave McLean: Specifically with respect to SIA users, from the perspective of the supplier, it won't change. They're still going to use the same entry form, unless you happen to add a few fields or options or something like that.
16:24 Dave McLean: along the way, just by way of enhancement. But, uhm, the, the, the Phase 3 functionality for this will just be extended functionality into the PCR stub form, or stub workflow that's already in place by the start of Phase 3.
16:40 Luke Phillippo (6770): Sounds good to me. You want me to just drop this in the chat?
16:51 Luke Phillippo (6770): Cause it's, it's super simple, uhm, request. Uhm, the only one, I guess, maybe, let me, let me, uh, modify my, uh, my answer here.
17:07 Luke Phillippo (6770): This one causes confusion. It says closed PPAP as an option. To start. I don't want that option. We never did want that option, so I'm going to modify my.
17:22 Luke Phillippo (6770): There we go. Now modified. Love it. Yeah, very high-tech. 
17:28 Dave McLean: Wouldn't it be hilarious if when the form gets built in Intellects, the option is there and has a red line through 
17:37 Luke Phillippo (6770): You'd be trolling me at that point, I think. I would. The product family in this, uhm. Context is actually referring to drawing.
17:47 Luke Phillippo (6770): So if you go back to our discussions about ECS and everything where drawing is a group of part numbers, that's what that's talking about.
17:55 Luke Phillippo (6770): And they would then select the drawing in this case, or would they not? They the drawing, yeah. So if it says product family.
18:01 Luke Phillippo (6770): Instead of that, that first drop down being part number, it's going to be drawing number, and then it should only be drawings that are associated with that supplier.
18:11 Luke Phillippo (6770): Same thing with the part number, of course, and then request type. I actually, we've got that a tier procedure that very much details what each of the request types are, and, uhm, in, in this case.
18:24 Luke Phillippo (6770): So, there's 10, so I can send those over. 
18:29 Keith Freeman (6781): Cool, that's great. If you were looking for a specific example, Luke, Bye. I pulled up the recent one for DIME PCR 2938, which was PPAP 4813.
18:44 Keith Freeman (6781): I participated in that one because it impacted TG8. 
18:48 Luke Phillippo (6770): Oh, so that would be one. Like a completed one that has all of the, yep, uhm, everything already done. Yeah.
18:55 Luke Phillippo (6770): Is that helpful for you, Dave, to see the, yeah, the whole workflow? Okay. 
19:01 Dave McLean: That'd be great if we could. Yeah. Okay. Yep. 
19:05 Luke Phillippo (6770): We can get that. I think this will get you started and then we can, we can, uhm, keep going from there.
19:11 Luke Phillippo (6770): For sure. So. That's terrific. Okay. Okay. 
19:17 Dave McLean: Cool. Was there anything else for 
19:20 Joel Frick (6124): today? So, Keith, Brian, you guys, Luke's okay with this so far. When we talked about it, you guys good with this?
19:31 Brian Hensell (7161): I mean, it doesn't, yeah, doesn't impact me 
19:33 Keith Freeman (6781): necessarily at this point, but as we move forward. And right now, what we're currently getting ready to do with Form 1-4, which is a PCR before PPAP approval, basically, it'll be the same thing once we get there.
19:51 Joel Frick (6124): So, yeah, Dave, we really, really appreciate it. We appreciate you being able to pivot a little bit on this with us.
19:56 Joel Frick (6124): No, this is great. This is great. Like I 
19:58 Dave McLean: said, honestly, because this is being brought up now, it's inconsequential from a project point of view. There's no budgetary scope, schedule change.
20:06 Dave McLean: It's just, where are we, where are we starting the functionality from, you know? Is it either a brand new thing, or is it on the thing that will eventually become the full phase 3 stuff?
20:15 Dave McLean: So that's a, that's a change, but it's a, it's an on paper change right now. It's not, we don't have to rebuild the wall kind of thing.
20:22 Joel Frick (6124): Excellent. Thank 
20:24 Dave McLean: you very Bye-bye. Bye-bye. 
20:26 Joel Frick (6124): Since we had time left over, did you want to talk about the PIR now, or schedule a separate meeting? 
20:34 Dave McLean: If we could schedule it, just because I think, if I'm reading between the lines from what Luke and the team were kind of implying when they were chatting with you guys, it sounds like there's more to it than probably fits a half-hour profile.
20:48 Dave McLean: Just looking at the calendar for next week, I'm gonna throw a few dates and times out into the world here, and if, if the stars align and everybody happens to be available off those, then we can book it and cook it.
21:01 Dave McLean: If 
21:02 Isaku Nishiwaki (6412): not, We a screen for suppliers, and for Phase 3, we're going to be, uh, preparing the overall APQP task, and I see here APQP and some tooling readiness, is it your idea that this is the only screen supplier our suppliers will see, or do you, uh?
21:38 Dave McLean: This is the, this is the landing page, so, I guess, let me, let me back up and give context here, uhm, this single page, the biggest complaint that I hear from, from companies that use Intellex's supplier relationship product and, and everything, everything associated with bringing suppliers in, is that
21:58 Dave McLean: it is a very, very fragmented experience for the supplier. Yes. Where? Every time they log into something, the first thing they see is a list of supplier company records, and then from there, they open it, and they see, like, absolutely everything.
22:12 Dave McLean: There, there isn't anything that draws attention to, what do I need to do today? How are things going? Like, it's just, it's not a, it's not sort of a management system view out of the box.
22:24 Dave McLean: So this is an attempt to kind of create, like a, you know, command center concept, where it surfaces the things that are important to them first, and then from there, allows them to navigate through.
22:37 Dave McLean: So in some cases, the idea would be, you know, if, if they have an APQP task that is assigned to them that is exposed as a priority task, click right through and they're on the task to be able to go do it.
22:48 Dave McLean: That'll take them to a, to a, an APQP site. Specific form where they'd be able to work through that task, just like they would if they were clicking on a process change or a PPAP element or whatever the case is.
23:00 Dave McLean: Similarly, if they had more than just those priority tasks, they'd be able to search for whatever task is assigned to them.
23:07 Dave McLean: But if they needed to, they'd be able to then navigate through each different component of the broader supplier program that's being run for them.
23:18 Dave McLean: So in this case, if they were running through an APQP piece, they'd be able to navigate through from there into whatever list of records that are associated with their supplier.
23:30 Dave McLean: Best way to think of it is this isn't meant to be everything they see. This is just meant to be the concierge that helps them to get to where they need to go.
23:41 Isaku Nishiwaki (6412): Yeah, yeah, I, I love this, uh, view. I, I, I like the concept, uh, but, uh, us working through Phase 3, I still cannot have some, some image, how, uh, because APQP itself is a, is a very broad, uh, task.
24:02 Isaku Nishiwaki (6412): It is from tooling and also, uh, in Compass, uh, PPAP. And so, uh, maybe I was trying to get some idea.
24:11 Isaku Nishiwaki (6412): How this simple, uh, uh, page is going to lead, uh, supplier to, uh, more complex APQP management.
24:23 Isaku Nishiwaki (6412): But not that I'm saying this is bad. It's, I, I really like this page. 
24:27 Dave McLean: Yeah, and in truth, like, the intent would be that this page is likely going to get revised with each phase release of the project.
24:36 Dave McLean: So, you know, 
24:36 Isaku Nishiwaki (6412): this, this, this is meant to get the, the, this particular view of it is meant to give us, uhm, a, a, a, 
24:39 Dave McLean: a, a, a skeleton, first of all, like, just a basic page structure. Uhm, branding is a, is a component of it, that, like, especially for supplier-facing compet-pieces of it, like, it doesn't have to be, uhm, perfect branding in this case, but it does kinda have to be, to look like a Subaru web product
25:02 Dave McLean: in my mind, in order for them to, to be able to make that connection, uhm, and then from there has to sort of give us the basic principles of how they're gonna navigate, but when we get to, when we get to phase 3 and we start looking at APQP, I suspect there probably will be aspects of APQP that require
25:21 Dave McLean: , or, or at least, uh, would, would greatly benefit from some modification to how, in particular, the quality component of this has been structured.
25:31 Dave McLean: Or perhaps there's a whole new menu item specific to APQP that is, is bespoke in that, in that sense for, for that particular program.
25:40 Isaku Nishiwaki (6412): Okay, yeah, we can, we can, uh, continue discussing, but I really love this page. Uh, I don't, I want to keep as simple as possible.
25:48 Isaku Nishiwaki (6412): And it's intuitive and yeah, I, I think this is a great start and wonderful. Thank you. 
25:56 Dave McLean: No problem. No, thanks for the feedback. Okay, perfect. Um, you guys ready for some, for some dates in the times next week?
26:05 Dave McLean: Yes, sir. 
26:06 Luke Phillippo (6770): Okay. Yes. 
26:09 Dave McLean: Tuesday, 10 a.m. to 12 p.m. Eastern time. 
26:15 Joel Frick (6124): Everybody okay with that, Keith? I've got a supplier in. Are you got a supplier in? Okay. Is 
26:22 Dave McLean: that all day or, uh, or just, uh, just a morning? 
26:24 Luke Phillippo (6770): It's 10 to 11, and then I've got a very small gap, 11 to 11.30. Uhm, let's see here, 12.30.
26:36 Luke Phillippo (6770): 12.30 1.30 is also open on Tuesday, but I'm, like, bookended there, so there's no, no flexibility to go over anything at that point.
26:49 Luke Phillippo (6770): Gotcha. 
26:50 Dave McLean: We'll come back to Tuesday in case we need it. Uhm, yeah. Uhm, I can do, on Wednesday, I can do any time from 9.30 to 3 p.m.
27:00 Dave McLean: Eastern time. 
27:01 Luke Phillippo (6770): 9.30 is good up until 11 for me. Let me see what the, oh, shoot, I've got a manager meeting.
27:14 Joel Frick (6124): We'll be out of that by 9.30. We should be. 
27:17 Luke Phillippo (6770): You think so? 
27:18 Joel Frick (6124): Well, it's just a manager meeting, you know. 
27:21 Luke Phillippo (6770): I'm not going to stay for the environmental portion. No, no, Heather 
27:23 Joel Frick (6124): can It's coming to talk. You're right. We may be in there till 10.30. 
27:27 Luke Phillippo (6770): All right. Yeah, yeah, yeah. 
27:29 Joel Frick (6124): Uh, what about the afternoon for you, Jay, uh, Luke? 
27:35 Luke Phillippo (6770): Yeah, let me check here. There's one. You know, I've got a meeting on my calendar at 11 that I don't actually need to be at, so I can do 11 to probably 10.30 to noon is good, actually, for me on Wednesday.
27:54 Luke Phillippo (6770): How's that, Keith? 
27:57 Keith Freeman (6781): I'm at AMX. 
28:00 Luke Phillippo (6770): I'll be on a plane. Yeah, you're with Kevin, aren't you? 
28:05 Keith Freeman (6781): But PIRs are mass production focused, so yeah. You can do that without me. Yep. 
28:13 Joel Frick (6124): OK. 
28:13 Dave McLean: 1030 to noon, I thought 
28:16 Luke Phillippo (6770): I heard. 1030 to noon is open. If we schedule that whole time, I think that'll help me with the bookends, too, just in case.
28:23 Luke Phillippo (6770): We may not need a full 90 minutes, 
28:25 Andrew Brown (7198): but. I'll be on PTO. Sorry, go ahead, Andrew. I was just going to say I won't be on PTO next week, but I will forward the thing to Matt and Crystal of my team, and one of them can handle it.
28:41 Luke Phillippo (6770): Yeah, I definitely want your team to be on there, and I'm going to make sure that. QE is on there, uhm?
28:48 Luke Phillippo (6770): Because, uhm. QE is currently in IntelliQuest, and that's one of the things that I want to. I want to make sure that we're aligned on and and Dave.
28:57 Luke Phillippo (6770): This may be super quick because you may have everything already set already. Nailed down it's it's more confirmation for me because I don't.
29:07 Luke Phillippo (6770): I'm not. Yeah, I'm not 100% clear that that that we're that we're aligned yet. So yeah, no worries. 
29:17 Joel Frick (6124): That what he's talking about is, is we're also wanting to touch on WCAR same kind of thing. Just the workflow.
29:24 Joel Frick (6124): They definitely plus WCAR. Okay. 
29:27 Dave McLean: I've got Joel, Rick, Amanda, Luke, and then on my end, Emma, you're on Jillian. Anybody else you want me to add to that one?
29:35 Dave McLean: We'll, we'll, 
29:36 Joel Frick (6124): we'll just, uh, you'll forward. Yeah. Forward and on. Thank you. Thank you. 
29:43 Dave McLean: Okay. On its way over. 
29:45 Luke Phillippo (6770): Perfect. Thank you. 
29:47 Andrew Brown (7198): Thanks. That's great. 
29:49 Joel Frick (6124): All right. 
29:50 Dave McLean: Well, thanks. Appreciate it. Thank you. 
29:55 Isaku Nishiwaki (6412): Have a 
29:56 Dave McLean: great weekend.
