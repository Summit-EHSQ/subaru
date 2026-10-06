---
meeting-title: "Subaru | Summit EHSQ | Phase 2A Design Workshop Day 3 - Morning"
meeting-date-time: "2026-10-01T09:30:00-04:00"
timezone: America/Toronto
participants:
  - Brian Hensell
  - Dave McLean
  - Emma Lister
  - Joel Frick
  - Keith Freeman
artifact-type: meeting-transcript
---

0:00:00 Dave McLean: So 
0:00:05 Joel Frick (6124): we do this. Oh, there's Andy. I have that too.
0:00:15 Joel Frick (6124): Let's take a final bite. I'm used to it, I guess. It's like spicy. Well, I'm in Flavo myself. Oh, there we go.
0:00:24 Joel Frick (6124): You're used to it. I'm good. I see. My fingerprint, I'm like, you're gonna burn my fingerprint off, aren't you? Well, somehow when mine gets into overdrive like that, the only way it picks it is to do a hard shut down.
0:00:41 Joel Frick (6124): Start it up again. That's a hard record. 
0:00:48 Dave McLean: All righty, guys. Just give you guys, uh, anybody else that we're waiting on on your end, or are we okay to get started here?
0:01:01 Joel Frick (6124): I'll see them, just jump into the chat. Actual call here, but, well, SMP, am I saying that right, SMP? SMQ, SMQ, yeah, well, that's the Plaxcore part, that'd be right, yep, Brian, my group leader here, Brian's here, okay, Brian's in the house, good to have you aboard, Brian, 
0:01:28 Brian Hensell (7161): good morning, there he is, I had to find the mic button, you know, it's, like, 
0:01:40 Joel Frick (6124): I didn't want to talk, I guess that's why, that's why I sent Jesse there, that's right, yeah, yeah, yeah, since delegation, yeah, yeah, yeah, where does this travel, it's only been here this morning, yeah, yeah, yeah, I saw the Illinois thing pop up.
0:02:09 Dave McLean: Alrighty, perfect. Well, thank you guys for showing up for day three. Appreciate it. Hopefully not too sick of my voice yet.
0:02:21 Dave McLean: Just pull open our agenda here. Let 
0:02:23 Emma Lister: me know when you guys can see our screen. We can see it. 
0:02:30 Dave McLean: Perfect. Awesome. Um, so today's today's focus, notwithstanding just a quick, um, revisit of a shorter topic from yesterday afternoon, which is, um security and mobile mobile usage for the PPAP application, today's focus is going to be on supplier scorecard.
0:02:50 Dave McLean: And while it's the second time we've kind of come through this one, I want to take this down the next level a little bit to start to dig into the actual KPIs.
0:02:57 Dave McLean: Because how we actually go about building the KPI tracking component of supplier scorecard can vary considerably, depending on the types of KPIs you're looking for.
0:03:09 Dave McLean: Generally, when we, when we spoke the first time around, it was very centered on, you know, on, uhm, not all that dissimilar from a survey, for example, albeit with different KPIs coming from different people, uhm, where you would have people that are actually entering the values that go into a supplier
0:03:27 Dave McLean: scorecard. I suspect that's going to continue for a go on here, but I want to dig into each of those a little bit to see if there's opportunities to leverage some of the data that will already be in Intellects by that point to hopefully help to automate some of that, uhm, data collection in addition 
0:03:42 Dave McLean: to the, uhm, the automation of the, uhm, build out of the, the scorecard records themselves. So, that'll be the key focus today, uhm, this is stretched out over the course of a full day workshop, uhm, I suspect that unless we get into anything controversial, I don't think this will take up a full day
0:04:00 Dave McLean: , uhm, so, you know, again, unless we run into any landmines here, uhm, I'm actually gonna be sort of shooting for a timeline to be able to wrap up for lunch and give everybody their, their afternoon back.
0:04:11 Dave McLean: If we do, no commitment to that timeline, so if, uh, if we do run into something that's a little bit stickier, then we'll, we'll use the time that we have.
0:04:17 Joel Frick (6124): To flesh it out. We may, just depending on, we may have to touch base around 1 because that's when Jamie's Earth is available.
0:04:27 Joel Frick (6124): Just in case they have any questions or we need to follow up, so we may have to. Brief get together after lunch.
0:04:36 Joel Frick (6124): Hey Dave, one thing I'd like to touch on also today in the scope of work it mentions under configuration SIA and supplier users should have the ability to add comments to an ongoing.
0:04:50 Joel Frick (6124): Comment update log outside of task and provide a single source of comments on a given feedback. I'd like to just touch on that too today if we can.
0:04:58 Joel Frick (6124): Yeah, specifically the line that's in the PPAP section, right? Yeah, OK, cool. Yeah, yeah, look, 
0:05:05 Dave McLean: let's let's wrap this up. Yeah, the PPAP stuff first then, so we'll come back to that one. And actually, that's probably a good starting point, just because we fleshed out the concept of comments yesterday, and I had noticed that line in there and had took it for the requirements that, uhm, sorry, let
0:05:21 Dave McLean: me, Turn this off here. Uhm, had took it for the requirements that, uhm, that Luke had, had been sort of talking through with, uh, with Keith around being able to have certain comments that are visible, which, like, in this case would be a comment field rather than a log.
0:05:38 Dave McLean: Uhm, I'd sort of taken that less about it being a log that lives adjacent to anything else, because, uhm, it, it seemed like we were just trying to get it into a field.
0:05:46 Dave McLean: That said, if, if there's a, a miss in terms of the understanding of the purpose of what we're trying to, to strive for there, happy to, happy to sort of crack that open and see if there's a, if we need to go further than, than just maintaining separate fields for each stage with different visibility
0:06:02 Dave McLean: properties on each, each comment field to make sure the right people see it. Luke, are we looking at your screen?
0:06:09 Joel Frick (6124): You are looking at my screen. So let's, let's dive right into that, the comments, uh, versus, uh, reviews and feedback, which is what I think you were talking about, right?
0:06:20 Joel Frick (6124): So, comments, uh, that we were talking about at the end of the day yesterday is, is, is when I go to review this, this PPAP and I say reject right now in my current system, I don't have a comment field, which is just bad design.
0:06:35 Joel Frick (6124): So I need a comment field here to be able to, and it, and it needs to be a required field.
0:06:42 Joel Frick (6124): So that I can put my rejection comments directly to the, to the engineer. Uhm, so, uhm.
0:06:54 Joel Frick (6124): But, but I guess what we were, what we were saying yesterday was I want to make sure that those comments are not visible to the supplier.
0:07:01 Joel Frick (6124): And also the the overall PPAP status. Uhm. Here's another thing. Let me show you what happens here. But when I, when I reject it, this is a test one, just so everybody knows.
0:07:21 Joel Frick (6124): I'm on the line, but it's a test one. So I didn't just reject the real thing. Uhm, but, uh, uh, what, what happens is now the supplier gets the whole status shows rejected.
0:07:34 Joel Frick (6124): It shows rejected on the collaboration portal side. There was no comment. I don't have a way to know why it was rejected or anything from the supplier side over the internal side.
0:07:43 Joel Frick (6124): So that's a clear hole in the communication that we have with our current system that we want to shore up.
0:07:49 Joel Frick (6124): But the other piece of this is this rejection that I'm doing here and that I want to kind of change, I guess, from the intellect side.
0:07:58 Joel Frick (6124): This rejection needs to not actually be visible to the supplier side. As far as the supplier is concerned, it's still pending approval, because this is an internal rejection.
0:08:09 Joel Frick (6124): This is the second level, the 
0:08:10 Dave McLean: group leader rejection. Does that make sense? Yeah, yeah. I will say, as a starting point, I'm There's different rules, schools of thought on this in the world of intellects, and it's primarily driven by just technical nuance of how you build the concept of rejection.
0:08:31 Dave McLean: The way that I've got this mapped out is that there is no status of rejected. What happens is, you know, the workflow is, you know, you draft kind of setup stage, you've got your in-progress stage, and then you've got your final approval stage, which is that optional one.
0:08:47 Dave McLean: If you're going from final approval back to in-progress, Thanks. the stage is still just in progress. In the background, there's a flag that we're setting in that transition backwards to say, you know, is this rejected?
0:09:00 Dave McLean: Yes, so that we can, we know the show on the form to the appropriate user, the rejection comments of the approver.
0:09:07 Dave McLean: But short of that, uhm, that visibility of the, that field, the, the supplier isn't going to have any visual queuing that, that, that PPAP that was rejected is any different than any other PPAP that's been submitted.
0:09:23 Dave McLean: It's just never 
0:09:23 Joel Frick (6124): even been submitted through at that point. Okay, so another comment here, and Keith, I'm going to ask for your, for your collaboration on this one.
0:09:32 Joel Frick (6124): Uhm, I, I kind of think that the rejected terminology, even that, if that's what it is, kind of in the background, the rejected terminology doesn't actually reflect what our conversation was yesterday.
0:09:49 Joel Frick (6124): It's, it's basically we sent it back to the engineer. Uhm. So, and I don't know, I think in, like I said, Keith, you're gonna have to help me out in next prize.
0:10:01 Joel Frick (6124): I think there was something similar to that where it wasn't actually, it didn't actually say rejected. It was like sent back or return.
0:10:11 Joel Frick (6124): When we're 
0:10:12 Dave McLean: looking for a softer connotation on the verb, the action, it's typically like return for more information, return with feedback or something like that.
0:10:23 Dave McLean: Like, it can be a couple different things, because you want to separate it. You want out the status of something from the action to send it to that status.
0:10:30 Dave McLean: Often it's one and the same, you know, submit leads to submitted or something like that. Uhm, but I think in this context, it's it's the status or what Intellects calls the workflow stage is still in progress.
0:10:43 Dave McLean: Uhm, and it's just that we are, you know, we've sent it through for approval and the actions are either to approve and close or 
0:10:52 Joel Frick (6124): return for more information. OK, OK. 
0:10:58 Dave McLean: Good cool, so that's so that 
0:11:00 Joel Frick (6124): that that version of comments I think I'm clear on. I think it sounds like you're clear on based on your feedback.
0:11:05 Joel Frick (6124): Any other comments or 
0:11:08 Dave McLean: questions on that? No, not not on that one. I think I had taken that one as essentially solving for the requirements that underpinned the line in the statement of work that you that Rick raised there.
0:11:23 Dave McLean: But if that if that line is actually is actually shooting at a different set of requirements, then you know, 
0:11:28 Joel Frick (6124): let's push out that other stream. It is. So, so that's where that's where this this portion comes in in our in our current setup.
0:11:37 Joel Frick (6124): And I don't like that. I like the way this is set up in PPAPQuest. I prefer the way it's set up in PRRQuest and I'll show you why the differences.
0:11:41 Joel Frick (6124): But this is basically just like an open message over to, let's say, uhm, tied directly to this PPAP. So it's, uhm, uh, It comes up and it kind of almost looks like an email, uhm, thing here.
0:11:59 Joel Frick (6124): This is external. Let me not show you in this because I don't even like the way it looks. I'll just, I'll show the good examples.
0:12:06 Joel Frick (6124): I know what I need. Coffee. There we go. Too many grounds in the coffee. This is my test case. My test problem.
0:12:19 Joel Frick (6124): Uhm, it's an easy way to find it if you guys are ever looking for a test problem to look at.
0:12:26 Joel Frick (6124): Just say you need coffee. Okay, so, reviews and feedback. This is the way that I like it. Uhm, so, so this kind of creates.
0:12:34 Joel Frick (6124): Almost like a conversation thread and it's very clearly marked. This is an external conversation. And then you can see with this little lock on it that it's an internal message and the difference is obvious externally.
0:12:50 Joel Frick (6124): External means, uhm, everybody who is, you know, assigned to this problem, all the external people can see this. Uhm, and then internal means that only internal people can see it.
0:13:00 Joel Frick (6124): And the beauty of this is instead of having emails with the subject of PIR 21035, I can have those emails and those discussions directly in the problem, and then anybody who gets added to that later doesn't have to get added to the emails or get added to the conversation.
0:13:16 Joel Frick (6124): The whole conversation and the whole back and forth, hey, what about this, what about that, can happen all directly. The problem, or as we're talking about today in the PPAP, and there's, there's, you know, some, some obvious, let's say, drawbacks to it because of the way that the notifications come 
0:13:37 Joel Frick (6124): out right now in this system. I think that based on what we've talked about with notifications, we're much, much more flexible in those terms with, with intellects.
0:13:50 Joel Frick (6124): But, yeah, so that's, that's the, that's the overall problem. That's what the requirement is talking about that Rick brought up.
0:13:59 Joel Frick (6124): Okay, 
0:13:59 Dave McLean: so, uh, just to sort of frame the functional requirements of this as, as I'm seeing it here, so that our, our AI friends can capture this for us here.
0:14:10 Dave McLean: What we need to see is the ability to log comments, uh, as, as related records. So, you know, a one-to-many relationship to the, uh, to the PPAP record.
0:14:20 Dave McLean: Um, specifically, that looks like it's just related to the PPAP. It doesn't relate to the individual tasks. Is that a correct statement?
0:14:29 Dave McLean: Or, or, okay, perfect. So, the comment, the comment fragment would live just on the, somewhere on the PPAP form itself.
0:14:37 Dave McLean: It would allow any user, both supplier and, uh, and SIA user, as long as they have access to that. the PPAP, they should be able to log a comment.
0:14:46 Dave McLean: That's right. Uhm, they can, they can log a comment. When they do so, they give it a subject, and they give it the actual comment itself.
0:14:52 Dave McLean: Uhm, there would have to be some sort of a visibility classification to be able to allow suppliers, supplier users, well, supplier users wouldn't see the visibility classification.
0:15:04 Dave McLean: It would just be visible for them and for anybody from SIA who's viewing it, but for an SIA user, they need to be able to essentially set a classification to say, is this an internal or a public-facing, like, external-facing comment.
0:15:19 Dave McLean: If it's internal, only SIA users should see it. If it's an external-facing comment, then only, uhm, only, or then suppliers and SIA users should see it.
0:15:28 Dave McLean: That's correct. Is that correct? Correct? Yep, correct. Uh, now when a comment is posted, obviously there is a poster, somebody who's actually, who's actually saying who, uhm, somebody who is actually posting a comment, but it looks like in this case we can direct that comment at multiple people.
0:15:47 Dave McLean: Is that a, is that like a 2NCC that we just differentiate, or is it, uh, is it one and the same, is it, is it like, hey, we just have a bucket of people that we're tagging to that comment so that they, uh, they get an email from Intellect notifying them that 
0:16:03 Joel Frick (6124): there's a new comment that's been posted? Um, option B. So it's basically, uh, the way that it works here is everybody who's assigned to this problem, both internal and external, would get all of this, all of these notifications, all these emails.
0:16:19 Joel Frick (6124): So, uh, what that means in our current state is, for external side, all the contacts who are here get the notifications, and on the internal side, all the contacts who are included in either these individuals or if these are groups, uhm, will get tagged on that as well.
0:16:47 Joel Frick (6124): Okay. 
0:16:48 Dave McLean: Okay, cool. So, in that case, uhm, I post a comment, I specify people that need to be bound into that comment, uhm, I need to be able to create sub-comments, therefore it's a threaded comment chain, uhm, where if it's a you know, if there's a child comment, or a grandchild comment, or, you know, a second
0:17:09 Dave McLean: cousin three-times-removed comment, then, in that case, the subject line should be piggybacking off of the ultimate parent comment, just to keep them truly threaded together.
0:17:21 Dave McLean: That's Okay. And, as far as the, the, sort of the, the context of this is that whenever somebody comes in to view the comment, whenever they post a reply, that reply should be is a subcomment to whatever they're, they're doing.
0:17:34 Dave McLean: It's not, they're not, they're never, sort of, posting in line with the original comment. It's always going to be a, a 
0:17:39 Joel Frick (6124): child comment to the first. That's right. Either, either a child comment of an original post or a brand new post.
0:17:46 Joel Frick (6124): Okay. 
0:17:47 Dave McLean: Cool. Yep. Cool. Is there ever a scenario where a comment should then be, like, activated as a task, through the discussion, you know, hey, Dave, could you send me this information that I need?
0:18:00 Dave McLean: Activate task, so that instead of just notifying Dave, it, ah, it triggers a workflow task, 
0:18:05 Joel Frick (6124): so that it can be followed up on? I'm, I'm gonna say that sounds cool, but, ah, I, I think that if we were going to do a task, that we should probably just flip over to wherever we have tasks and, and just add that, which is what we're used to.
0:18:20 Joel Frick (6124): It's called what we're doing right now. I, there's, there's no major, ah, you know, roadblock that would, that would be associated with that.
0:18:26 Joel Frick (6124): So, sounds cool. Um, not worth the build in my opinion. 
0:18:33 Dave McLean: Okay, just taking a note here. Just give me a second. Keith, 
0:18:38 Keith Freeman (6781): do you agree with that? Yeah, I, I agree that tasks need to be their own thing. No need to be able to directly create a task from within the conversation string.
0:18:51 Keith Freeman (6781): I mean, we can refer to it. Yeah, but I think it's 
0:18:54 Joel Frick (6124): need to stay their own thing based on the conversation. I think this was this was understood, but. As far as visibility is concerned, uhm, the difference between visibility and notification is.
0:19:17 Joel Frick (6124): On notification, I'm just notifying people who are on this. You know, associated directly with this particular. As far as visibility goes for internal, anybody who can go and see that PPAP can see all of these comments.
0:19:32 Dave McLean: Anybody who can see the PPAP, again, other than external visibility. Yeah, that makes sense. Correct. Yep, yep. Yep, that makes sense.
0:19:39 Dave McLean: OK, alright. Yeah, alright, so let's So I think we, we, we derive, we derive visibility only off of visibility to the PPAP and then segment based on internal users versus SIA, no visibility differential between, uh, a comment that is directed at somebody versus a comment that is, uhm, eh, the person 
0:20:03 Dave McLean: has access to the PPAP, uh, but the comment wasn't directed to them. It's not like we need to be able to secure it for just that one person.
0:20:10 Dave McLean: Right. Cool. Okay, and then I'm assuming we need to be able to, in a reply, in addition to a text reply, we need to be able to post a file attachment if needed.
0:20:23 Dave McLean: So again, if the request is for some more information, it's part of the discussion. Hey, I need to post a, uh, 
0:20:29 Joel Frick (6124): an image right or something like that to it, but, yeah, so our current system has that capability to, um, you know, take a, uh, an image, you know, as a, uh, you know, as a, uh, a, a, uh, part of the, uh, thread, uhm, as far as attachments, I want to be able to drop an Excel file or PowerPoint or PDF
0:20:55 Joel Frick (6124): or something like that in here, and I, I, I don't know that that's actually necessary, uh, uh, because Thank us.
0:21:01 Joel Frick (6124): I'm assuming we're going to have the general attachments bucket somewhere 
0:21:06 Dave McLean: anyway. Is that true or no? Yeah, so the, the PPAP would have an attachment grid, and so the catch, though, is that the person might not actually have access, even though the person has access to view the PPAP.
0:21:17 Dave McLean: They might not have access to modify the PPAP. So, they wouldn't have access to post something unless we put it on the comment.
0:21:25 Dave McLean: On top of that, what we'd be building here wouldn't quite have the, what you just did where you pasted the image in.
0:21:32 Dave McLean: What's actually happening under the hood, when you do that in this form, is, when you do the paste, the, the code that generates that text editor is taking that image that you're pasting, it's uploading it into a file store for you on the server, and then it's creating that HTML image reference pointing
0:21:53 Dave McLean: at a URL that was generated by that, and it does it all very quickly. That is, that is hard-coded behavior in IntelliQuest on this, this, ah, text editor field that they're running.
0:22:04 Dave McLean: Uhm, we could, We could fake that in the vein of, ah, there are, there are a million and one open-source text editors that we can overlay on top of a text field that would convert it from a raw text editor to an HTML editor, and many of them have a built-in file upload key, so that's capability.
0:22:23 Dave McLean: The problem is, they almost always then post that file to Bitly. Publicly accessible, no, no access restrictions, like, it's just out there on the web.
0:22:34 Dave McLean: So I don't necessarily think that's the direction we want to go, and, and we wouldn't be, there's no native capability in Intellects to do it in this fashion without us building custom front-end code for it, which is probably not the direction we want to go here.
0:22:49 Dave McLean: I think the way we do it is, we can certainly overlay an open-source text editor, so you can, you can have at least format the comments, right, bolded, italics, underlined, even potentially get to the level of, like, bullet points and tables and things like that, where it's, it's just HTML that you're
0:23:05 Dave McLean: , you're having the editor write into the text block. But if there, if there needs to be an attachment, whether it's a Excel file or an image, you'd have to attach that using Intellect's file attachment tool directly to the comment record, not into the comment text.
0:23:21 Dave McLean: I think that'd 
0:23:21 Joel Frick (6124): be OK. There's, there's no problem with that. OK, and then that, when what you're saying is. As that would then extend the capability beyond just pasting an image, and they'd be able to actually.
0:23:32 Joel Frick (6124): You gotta attach whatever acceptable file 
0:23:36 Keith Freeman (6781): type. OK, and the only downside I see to that is just someone seeing an attachment without comment. And they'd be like, what is this?
0:23:45 Keith Freeman (6781): Yeah, that's the only real downside I see, though. Yeah, 
0:23:51 Dave McLean: I think we'd have to. We'd certainly have to make the comment text field mandatory, even if the person, you know, is responding to another comment.
0:24:00 Dave McLean: Hey, could you send me this file? You know, we'd still have to force them to say, see file attached to this record, or something like that, just instead of attaching the actual document.
0:24:11 Dave McLean: I agree, like, the context of the conversation is, is what's important in this case. And in order to drive that, they'd really have to, you probably can't look at one comment record with its attachment in isolation.
0:24:25 Dave McLean: You have to look at it 
0:24:27 Joel Frick (6124): through the whole. Thank you. Another thing here, uhm, that I want to point out, you see this, this thread that I've got pulled up, it was started as an external thread, and then, I, I used my external thread external, sorry, can't remember which way this went, because apparently my username still just
0:24:53 Joel Frick (6124): shows as my name, whether I used my external or my internal account here, but anyway, uhm, I started it externally, replied to it internally, or something to that effect, and then, and then internally I came back and said, oh, I want an internal message related to this thread, so then the supplier user
0:25:12 Joel Frick (6124): can see this one, they can see this one, they cannot see this 
0:25:16 Dave McLean: one, I think we have to put some rules around that. And those might exist right now, uhm, in an ideal world, the entire thread is, its visibility classification is defined at the top when you first set up the thread, and if you needed to change it, like, if you started it with being an external facing
0:25:38 Dave McLean: thread, and then, you know, somewhere, somewhere, the conversation shifts and we need to get into something controversial or something we don't want the supplier to see, then you go back to the top level and you, you'd, you'd mark that entire thread as internal.
0:25:51 Dave McLean: The catch, though, is that the supplier may have already commented at that point, so it's going to look like you've just removed their comments.
0:25:57 Dave McLean: Uhm, the other side of that is, we can, we can sort of find a middle ground here, I think, where you don't necessarily have to define the entire thread, but that once you introduce that flag on a given comment, all child comments, grandchild comments, like everything that is a descendant of that comment
0:26:22 Dave McLean: , inherits it. So that, basically, at any level of that comment hierarchy, once the protected flag has been applied to it, you can't change that further down the descendancy change.
0:26:38 Dave McLean: Okay. Okay, so I could go ahead and have comment 1, which is visible, comment 1.1 and 1.2 are both, but they both start off at visible, uh, but 1.2, we change it and say, okay, this one's gotta be, this one's gotta be restricted, which means comment 1.2 and 1.2.1 1.2.1, 1.2.2, 1.2.1.1, so on all the 
0:26:59 Dave McLean: way down the chain. And you, once you, once you set it, that's an inherited property that can't be changed further down.
0:27:07 Dave McLean: So you can't get all the way to the end of that message chain and then, you know, save the A at the last level, seven layers deep.
0:27:16 Dave McLean: Okay, here's the decision that we've made in this private conversation. I want to make the decision public again, because that, you wouldn't have a linkage between the last place in the thread that was visible and the one that is.
0:27:28 Dave McLean: Uh, and the one at the end. If you wanted to do that, you'd just have to post a new thread.
0:27:32 Dave McLean: Hey, you know, referencing the conversation we were having internally here, 
0:27:36 Joel Frick (6124): this is what we want you to do. I think what, what my preference would be, uh, would be to follow, uh, Bye.
0:27:44 Joel Frick (6124): Recommended best practice here, and I think that's what you, you, you started out at the top of, you know, discussing all of this and say, look, it's, it's going to be best probably to just say this thread is external.
0:27:58 Joel Frick (6124): This thread is internal, and I think that that's. That's, that sounds like you're saying that's probably best practice. That 
0:28:05 Dave McLean: is, uhm, trying to give you the correct connotation. That is the easiest to implement. That is usually the probably a good proxy for best practice, but best practice is subjective, so I want to view best practice through real, functional use cases here, uhm, if we can make it so that in this conversation
0:28:30 Dave McLean: that either is acceptable cool. But preferable would be the the second way of doing it, which is that that flag can be introduced at any point in the chain, but once you hit that flag, then everything below that is considered protected and that the flag cannot be removed after it's been added.
0:28:48 Dave McLean: Once you make it protected, it's protected. Uhm, if that, if that model is more preferable than just protecting the entire thread from the top of the chain at the beginning and letting it be done, then I would say let's strive for that.
0:29:02 Dave McLean: Let's see if we can get that working the way we need to without any sort of enormous effort to do it.
0:29:09 Dave McLean: And if there, if it turns out there's some landmines that we come into with, with the actual implementation of that security model, then, you know, we 
0:29:17 Joel Frick (6124): can pivot back to the simpler way. Yeah. I think that the way that this is set up is that, you know, you have the parent comment here, let's say, and then you only have children, and I think that the only reason that this looks like this is a child and a grandchild is just because of the tiny It's just
0:29:39 Joel Frick (6124): showing the order of the comments. I think that they're actually independent of one another, and so, like, this is a child comment of this, and then this is a child comment of this also.
0:29:50 Joel Frick (6124): And that's, 
0:29:50 Dave McLean: that's kind of what we're used to. So you can't respond to the 3.45pm comment as a child of that. When you respond to it, it's, the response is a child of the original thread.
0:30:03 Dave McLean: You got it. That actually simplifies things a little bit, I think. Okay. Uhm, because it just means that we're dealing with fewer people.
0:30:09 Dave McLean: There's a higher, the challenges that I was trying to do it as if it's a conversation thread hierarchy, then by definition, it has to support an unlimited number of layers.
0:30:20 Dave McLean: You can't just arbitrarily say you can have all the conversations you want, as long as you have no more than 10 layers of voice.
0:30:25 Dave McLean: And if it's unlimited, then that permission model gets progressively more complicated, not only to set, if you set it and you have to cascade it all the way through the chain, but if something changes midway through, you.
0:30:41 Dave McLean: And you have to break that inheritance, it becomes increasingly difficult for you to be able to tell what should people see and what should they not be able to see.
0:30:49 Dave McLean: That's right. Uhm, this model, where the conversation is, is essentially a thread with responses. That's it. And it's not responses to responses, it's just thread response, uh, all the way through.
0:31:04 Dave McLean: This would actually simplify that a little bit. So, let me, again, let me take it away in terms of the actual design of it.
0:31:11 Dave McLean: The, the other thing I'm trying to, uh, balance here is, for years and years and years Intel X had a feature like this baked into it's, it's, uh, a legacy version of the product from like ten years ago called Message Centre, that they, they tried very, very hard to deprecate, uhm, only because it was
0:31:29 Dave McLean: , it was the it's just not an often used feature, they didn't want to reproduce it in, in the current platform, uhm, and yet, I heard last week that, uh, somebody within, like, Intel X's chief architect had to build a version of it that does very similar things.
0:31:45 Dave McLean: Things that we're talking about here, solely to facilitate a migration off of the 10 year old legacy platform for one client, uhm, and so it's just one of those, if, I've already sent him a message here asking if, if that is, uh, is that a, an IP thing that, like, hey, that client owns that thing, is
0:32:04 Dave McLean: it, I can't imagine it's a licensable thing, I suspect it's probably just one of those library of, of tools that they have when they need it, and if it falls into that category, then ask him to send it over so that we can mess around and see if everything that we just talked about or at least 80% of 
0:32:19 Dave McLean: what we just talked about, we've got something that's off the shelf that we can plug in here and then tweak the, the only thing I suspect we'd have to play around with is 
0:32:27 Joel Frick (6124): the security settings. Yep. So, uh, the only other thing, I, I think we've covered this already. If it was started as external, I can have external replies to that external conversation or internal replies to that external conversation and then those are marked, you know, those are, those are, have some
0:32:50 Joel Frick (6124): sort of visual indicator. Uhm, if I have an internal conversation that was started at top level internal, I can't then go external.
0:33:00 Joel Frick (6124): I can't change, you know, my next comment can't go external. Internal, if it starts as internal, internal, internal is internal.
0:33:07 Joel Frick (6124): Got it. If starts as external, then I might have a comment, you know, I might be able to see, see how this is able to let me do an external or an internal.
0:33:16 Joel Frick (6124): And all of this to say, 
0:33:18 Dave McLean: this is what we're used to. Yeah. Uhm, I think the worst case scenario for this that you'd be faced with is that whatever classification you set at the top level in the initial thread would just, would just be immutable through any responses to it.
0:33:35 Dave McLean: So in that scenario, if the worst case is that if we have an external facing conversation, then it just needs to be understood that, hey, every time you post a comment to that thread, it's an external facing comment, without the ability to change the classification of a response.
0:33:54 Dave McLean: If you're really interested you need to have a parallel conversation that's internal, then create a new thread, and trigger what you need from there, and then kind of circle back as you go.
0:34:04 Dave McLean: That would be the worst case scenario. What I think we strive for is something that's broadly consistent, or even more and goes 
0:34:11 Joel Frick (6124): further than what we see here. Yeah, I think, uhm, worst case scenario is acceptable if that's where we end up.
0:34:20 Joel Frick (6124): So I think it sounds like we're in pretty good shape. Okay, cool. And again, just to reiterate. 
0:34:26 Dave McLean: This comment feature, the, the need for it is just that you're posting comments to the PPAP. It's not like you also need to be posting similar comment threads to each task and then having them sort of merged into a master comment thread at the bottom where it works.
0:34:42 Dave McLean: For each one, like a, like a, uhm, like a message feed, almost. That gets 
0:34:50 Joel Frick (6124): super messy really fast. Yeah, OK, OK. 
0:34:52 Dave McLean: OK, cool. Can, uh, last question from Jeffrey. Can suppliers initiate a comment 
0:35:01 Joel Frick (6124): thread, or can they only respond? Yes, we do want them to be able to initiate. 
0:35:06 Dave McLean: OK, so we see the grid. They can see everything that's supplier visible, but they also get the button, you know, hey, I want to post a new comment.
0:35:15 Dave McLean: Or post a new comment thread in addition to being able to respond 
0:35:18 Joel Frick (6124): to any comment thread they can see. Yes. Let me ask you, this is related, but it's not a current thing that we have, and it's something that we somewhat struggle with.
0:35:31 Joel Frick (6124): So this is the external view of that same problem that I was looking at, and they can, they can request review.
0:35:38 Joel Frick (6124): One, one very common use case to this message thread from the external to the internal, sorry, from the external side.
0:35:47 Joel Frick (6124): Like the supplier user side, is to request a due date extension, uhm, and of course, because we're all humans and we all think slightly differently, Bye-bye.
0:36:02 Joel Frick (6124): The subject is going to be a little bit different. The body of that email is going to be a little bit different when we're requesting an extension.
0:36:06 Joel Frick (6124): I, I, I would really like to see some sort of, uhm, way, whether it's with this, these comments. Or these, you know, reviews and feedback, as they call it here.
0:36:18 Joel Frick (6124): Or if it's a separate, uhm, object. A way for them to do that consistently. So it's like, I can just say, I'm requesting a due date extension.
0:36:29 Joel Frick (6124): And I'm requesting it until this date, which is what we always have to come back, you know, a hundred times a day.
0:36:36 Joel Frick (6124): Hey, can I get an extension? Yeah, when you need the extension until. I'm not just going to extend it indefinitely.
0:36:42 Joel Frick (6124): So we always have to come back and it adds additional work where we just kind of force them to answer those questions.
0:36:47 Joel Frick (6124): And give him a place to go for due date extensions. I think that would be really helpful for PPAP side.
0:36:53 Joel Frick (6124): And then once we get into the problem reporting side, 
0:36:56 Dave McLean: same exact setup. So a couple of layers to that that I mean on the. Surface of it, that's not hard, and I wouldn't.
0:37:06 Dave McLean: I wouldn't necessarily drive that through the comment thing, because I think it comes back to when I said, hey, is this a workflow?
0:37:12 Dave McLean: Is this a thing that somebody needs to do? Or is it posting informational? Well, we're now starting to talk about is something somebody needs to action, because if it's yeah.
0:37:19 Dave McLean: Right, so I would. The way I'd approach this would be you've got your list of tasks. If I'm the supplier or the SIA user, whoever it is, I open my list of tasks and I see the things that I need to do to complete that task.
0:37:33 Dave McLean: The comment field, the file attachment. The piece and the checklist, depending on what's been activated for that particular task template.
0:37:44 Dave McLean: If I need to be able to request an extension as the person responsible for that task, I would see. You know, some sort of a, like, you know, a button, request extension that's going to give me a little pop up on that task where I can say, you know, it's going to track the existing one, the existing due
0:38:03 Dave McLean: date as a read-only field on the extension request. So I know that, hey, it's currently, it's actually due tomorrow, October 2nd, new requested date.
0:38:13 Dave McLean: I want to push this to October 31st. I need the month and a reason that's mandatory so that they're, they're justifying why they submit it.
0:38:20 Dave McLean: It's presumably going to go to the, the, uhm, engineer that's responsible for the PPAP, and the engineer's going to receive an actual task that they can respond to that's going to give them the context of that request.
0:38:31 Dave McLean: If they approve it, we then kick that new due date into the overrided due date field. I like that. It catches.
0:38:40 Joel Frick (6124): Yeah, instead of having to go into the due date and it's tied to the task too. Keith, what do you think about that?
0:38:51 Joel Frick (6124): Yeah, I like that. That's an elegant solution, 
0:38:57 Dave McLean: Dave. Well, that solution somewhat conflicts with some of the things we talked about yesterday, but, so, we are, we just need to reconcile this, so, I have my list of tasks, and let's say, the lion's share of those tasks have been set up, that their due date, at least initially, is derived as a, as a
0:39:18 Dave McLean: number of days before or after the, ah, the phase, stage due date that, ah, that aligns with that task. So, by default, all those tasks are built out, you essentially get your waterfall project plan, for all these tasks.
0:39:37 Dave McLean: We, we are certainly encounter, accounting for the, you know, hey, I need to override that date. So, it's, in this case, I want to, I want to change from the, you know, 10 days before the end of the phase, calculated due date, and instead I want to change it to October 1st.
0:39:53 Dave McLean: Maybe that already was a push off of what the original calculated due date should have been, and because there's an override, the override, the override wins in that case.
0:40:02 Dave McLean: Uhm, we had said that if the, the engineer needs to basically change those parent due dates, that we would want to, wipe out the override due date, and we would, you know, so if they push the, if they push the phase due date out by 60 days or something like that, we would null out the override due date
0:40:24 Dave McLean: , and then revert back to calculated windows that are driven off of whatever that is. That phase stage due date is.
0:40:31 Dave McLean: That's one thing when it's the engineer that's been setting those dates, but now when we have a log, because there was a request made, and that's what was driving into the, uhm, the override due date, or overridden due date, what'll end up happening is if after requesting an extension, the extension 
0:40:52 Dave McLean: is granted, there's now a record of why we did that, and the, if, if subsequent to that, we change one of those phase-stage due dates, we now wipe out the requested due date and set it back and the supplier is literally looking at something and says well, I requested a new date on this day, for this 
0:41:13 Dave McLean: date, and you accepted it, and that's not what's showing up there. And then in actual fact, there's a reason for it, but getting everybody to understand the reasoning for that, without going to a whole other level of logging, which is essentially logging a record of every change to that due date that
0:41:31 Dave McLean: was made, no matter what changed it, whether it was a calculation change, whether it was a request, whether it was a manually entered override on the part of the engineer, unless you get to that sort of logging progression, I, I, my worry is that it creates a bit of a deceiving model where only part 
0:41:48 Dave McLean: of the logic is exposed to the supplier user in particular. And even from the engineer's point of view, there's a lot of activity happening.
0:41:56 Dave McLean: It, it becomes very easy for them to forget the exact 
0:42:00 Keith Freeman (6781): sequence that they just went through. I think from from that standpoint. Um, generally, if we realign the phases, it is a known announcement to the master schedule and all suppliers are informed that there has been a change to the master schedule.
0:42:20 Keith Freeman (6781): So, they are aware, usually through a master schedule change announcement, that there is going to be a change to a due date.
0:42:28 Keith Freeman (6781): And so, they are notified. Usually, should be notified when the master schedule is adjusted, because it is a big deal, because it 
0:42:37 Joel Frick (6124): does affect every supplier. Keith, how many of those, how many of those do you get on a major 
0:42:43 Keith Freeman (6781): model change, do you think? Usually, very few. I do, but I, I'm eating my words, because DX3 and TGA have been contradicting the 
0:42:54 Joel Frick (6124): very few comments. Yeah, I didn't know if we could just bump those over into the manual column, once we make that, like we talked about yesterday.
0:43:03 Keith Freeman (6781): I was thinking, as this was being spoken, the number of requests we have to adjust due dates far exceeds the number of times that we adjust a schedule 
0:43:15 Dave McLean: overall for a program. Okay. Okay. So, in terms of business, business value, putting a workflow around the due date extension request and logging that it happened and who approved it and what the old date was and what the new date was and all that good stuff, that is, that is more valuable because of
0:43:33 Dave McLean: the frequency of it than trying to recognize and reconcile and log the, the, the sort of various sources of extensions that can happen, whether they're auto-calculated, whether they're, they're just manually injected changes, uhm, or whether they were requested changes.
0:43:50 Dave McLean: Yes, I would agree with that. Right. So, in the vein of, of, uhm, not necessarily good, better, best, but at least good and much better.
0:43:59 Dave McLean: Good is extension log and still full support of everything we talked about, knowing that, hey, there is a risk that at some point we might be looking at a data set that we don't necessarily know, we don't remember how it is that that date got there and what the progression of records was, but at least
0:44:18 Dave McLean: we can still manage and modify that date. We can see the requests, we can see under the hood, you know, whether it was originally set up as a calculated one and the number of days off of it, but the intermediate changes that happen along the way, they're not necessarily locked.
0:44:32 Dave McLean: And that's still okay, because it still gets us to a place where, if the due date doesn't match what we expected it to be, there's still a reason to why it got there, and we can always change it if we need to.
0:44:43 Dave McLean: The better option for us to strive for, which I'm going to say, let's, let's strive for this to see if it fits in without, you know, without adding undue complexity here, is that anytime any of those sources change, whether it is, hey, we changed the due date, and therefore the calculated due date has
0:45:02 Dave McLean: modified, that's what's driving the, the, uh, change log of, of that due date for that task, or because somebody manually injected it.
0:45:13 Dave McLean: A, an override due date, or because an extension request that was initiated by the supplier was approved and fed up, those are kind of the three different mechanisms that, that could change a due date on a task, and if all three of them were logging into a, uh, due date audit trail, essentially, or due
0:45:33 Dave McLean: date log, that it can be pulled up at any time so you can see, okay, on this date, the due date, the due date for this task was X, and the reason for it was because that was an auto-calculated due date.
0:45:44 Dave McLean: So first one And we see you. When it was when the task was initially generated, then two weeks later, we can see that it, uh, it changed to a new date.
0:45:51 Dave McLean: Uh, and the reason for that was also auto calculated the phase stage due date change, because maybe there were some refinements to the plan.
0:45:59 Dave McLean: Then a few days after that, we made a manual change. Uh, maybe the, the supplier and the PPAP engineer had a conversation, and the engineer said, yeah, no problem, I'll just, I'll just change the due date, give you a couple of extra days to match your schedule.
0:46:10 Dave McLean: So, we can see that was a manually overridden date. Then two weeks after that, they requested and had an approved due date extension, and we see that change.
0:46:17 Dave McLean: And so, in that task, should you need to, you'd be able to see the progression of that due date all the way through, so that if anybody, every, and the only time that anybody's ever going to ask this question is when it is so far past when we expected it to be due.
0:46:34 Dave McLean: That we're all sitting here wondering, how the hell did we get here? Yes. But in those moments, those are the moments you need that level of detail.
0:46:43 Dave McLean: That's right. Okay. That capability, whether it's through Intellex's built-in audit tracking, whether it's whether it's through something that we build and expose to better match the due date extension, that is what we strive for.
0:46:57 Dave McLean: That's the best of the model here. But the thing we need is the ability to run. The finding due date or not finding the due date extension logic with a workflow to the PPAP engineer.
0:47:14 Dave McLean: So at its simplest, you know, auto capture what the current due date is at the point the request is being made.
0:47:18 Dave McLean: What the new due date is being requested by the user who's responsible for the task and the justification. Submit it.
0:47:28 Dave McLean: Automatically route it. You don't have to pick who you're sending it to. Just route it to the engineer. The engineer gets it.
0:47:33 Dave McLean: Approve or reject. If they reject it, they post a comment for why they're rejecting it. If they approve it, then we automatically orchestrate the change and push it into the due 
0:47:42 Joel Frick (6124): date field on the task. I like it. So, we're talking about at a task level. Yep. And this makes, it makes really good sense based on all the conversation we had yesterday.
0:47:54 Joel Frick (6124): Do that at the task level. What we deal with in running change ppaths. So, what Keith deals with primarily, you do have those phases where these tasks are due at different times.
0:48:10 Joel Frick (6124): What we deal with on the running change side is all the tasks are due all the same day. Because there's no, there's no long, extended, drawn-out schedule.
0:48:20 Joel Frick (6124): It's basically a, usually a relatively minor change, and we're just asking for all of the documents. So, to add to this, or maybe the answer is no, but to add to this, would there be a way to say, I want to make a due date extension request for, you know, task one, two, three, and five, or, you know,
0:48:46 Joel Frick (6124): select all due date extension requests versus 
0:48:50 Dave McLean: individual task-by-task? From the supplier's point of view. 
0:49:00 Joel Frick (6124): From the supplier's point of view and also from the engineer point of view. I see it kind of from both sides.
0:49:04 Joel Frick (6124): You know, if I've got 10 tasks, they're all due tomorrow and I want to extend all of them to the 31st.
0:49:11 Joel Frick (6124): Now I'm going to go into this PPAP and 10 times I'm making the 30 request and then the engineer 10 times has 
0:49:17 Dave McLean: to approve the same request. So for the engineer who has the ability to just change the due date and we log it, I'm less concerned with that because I think we we strive for them to be able to do that in line on the grid.
0:49:33 Dave McLean: Um, so they're, you know, they're looking at their plan with 100 tasks. They search the tasks for the ones that they're looking for.
0:49:39 Dave McLean: Hey, show me everything that's due tomorrow. Uh, maybe cut it down a little further to look for a specific supplier that they're talking to that they know is going to, you know, whatever criteria they need in order to isolate for the 10 that they're trying to change.
0:49:51 Dave McLean: And they're not, they're not logging and approving each change because they are physically the one making the change. They just click into a cell in the grid, set the date, and that's it.
0:50:00 Dave McLean: Have the logging happen in the background automatically. And they do that 10 times. But, like, it's, it's not that hard.
0:50:07 Dave McLean: Right, sure. I wouldn't, I wouldn't try to build a workflow for them to be able to do something that they should just be able to change.
0:50:14 Dave McLean: There's no sense in routing it. For the supplier, 
0:50:19 Keith Freeman (6781): But, when I hear that description, it sounds like, uhm, what we currently have now, where you can individually select, or you have a, a button that says, with select.
0:50:35 Keith Freeman (6781): Selected, and you can individually choose, and then that's one of the options is change due date. I believe we have that capability right now.
0:50:44 Keith Freeman (6781): Yeah, like a mass update. 
0:50:49 Dave McLean: Like that. Yeah, yeah, we can do something similar, uhm. Bigger Business logic on it that prevents you from going my like my thing would be instead of tick, tick, tick, tick.
0:51:05 Dave McLean: It would just be like the due date cell in that table there. Yeah, you would just change it right there.
0:51:13 Dave McLean: Yeah, one after the other. Right, like we can. We can look into like we have the capability to add a mass update.
0:51:21 Dave McLean: It's just mostly not a fan of giving people two or three different ways of doing something. Versus just funnel them to the one way to do it.
0:51:29 Dave McLean: Uhm, and again, so like. What's the typical? When somebody has to do this for multiple, when an engineer has to go and update due dates for multiple tasks, as a general rule, what's the what's the stretch limit for the tasks that they would be 
0:51:44 Joel Frick (6124): applying the same date for? Within within a single PPAP, I think it's probably 11 is is the it's like 11 or 12 maximum requirements in a normal.
0:51:58 Joel Frick (6124): Okay, all right. So, I 
0:51:59 Dave McLean: mean, yeah, no, I mean, if you if you imagine that operation is going to take. Let's say per task by the time they click and pick the date, click and pick the date, and the fact they've got to do it 10 or 11 times, they might make a mistake along the way, if you imagine that it takes 20 seconds for them
0:52:17 Dave McLean: to update 10 or 11 tasks versus tick, tick, tick, tick, tick, tick all the tasks, click a mass update button, see a similar form as what you showed where they can apply a single date and then it applies for all of them, the, the better way to do it would be, would be just off of that.
0:52:33 Dave McLean: If they have to do a one-off, right, they're just modifying a single date, then they just open the task and, uh, and they go from there.
0:52:40 Dave McLean: So, that's fine. We can do a mass update so they can, they can modify the date and that changes the override for them.
0:52:46 Dave McLean: For the request for the extension. My worry about doing that is that I might be, as the approver, I might be approving that due date extension for only part of the tasks.
0:53:04 Dave McLean: Right, in reality, if I, if I'm submitting an extension request for half a dozen, or a dozen different tasks, and I'm binding them all together, I might not actually, like, it sort of pigeonholes the engineer a little bit into either I reject all of them, with comments that says, hey, go back and do 
0:53:23 Dave McLean: it again, but only for these three. Uhm, or, I have to approve all of them, knowing that that's not actually what I want.
0:53:31 Dave McLean: I realize there's some overhead here, but, like, can we consider a world where maybe that overhead actually has purpose? To be able to really make, both the supplier, or, like, the task owner, as well as the engineer, really think through whether that due date extension is warranted and needed for each
0:53:49 Dave McLean: individual task 
0:53:51 Joel Frick (6124): that's being requested for. Yeah. I, I, it's a fair, it's a fair comment. Keith, what do you think? I, I'm not doing it anymore.
0:53:59 Joel Frick (6124): That's not my, my 
0:54:01 Keith Freeman (6781): role anymore. What do you think? It has been. You have, it has been. You're right. Uhm, from, I, I think as long as there is a history, showing that this due date was requested in some sort of a comment or, you know, request box, and then the documentation of this due date was changed, uhm, and logs 
0:54:27 Keith Freeman (6781): who made that change, and when they made that change. I think we can make 
0:54:31 Joel Frick (6124): the connection between the two. I guess, I guess, Mike, my question to you as far as the ease of use aspect of it, if the supplier is going in and making 10 requests for due date, extension for every single task in the PPAP, every, every one of these PPAP elements or requirements, and then you as the
0:54:54 Joel Frick (6124): engineer have to either approve or reject each one individually. Now, I would 
0:54:59 Keith Freeman (6781): say that would be in the contract. Comment back when the supplier requests to make a change to A, B, C, and D, the engineer will respond back, I will change A and C, but you must still reply to C and D by the due date schedule.
0:55:17 Keith Freeman (6781): And then the log showing the due date change. As long as the comments are there and the log is there, I think that covers it.
0:55:27 Joel Frick (6124): I kind of think of it, and maybe I'm thinking of this wrong, but I kind of would think of it as a request for these three requirements, let's say, and then a button over here that says approve or reject.
0:55:39 Joel Frick (6124): And if I'm okay with the request date, you know, let's say this is due date, and then instead of response date, this says request date.
0:55:45 Joel Frick (6124): And then over here, I've got approve, reject, and I say approve or approve, approve, reject, and if I reject, I have to say why.
0:55:53 Joel Frick (6124): Yeah, that sounds a lot more complicated 
0:55:57 Keith Freeman (6781): that way. It just sounds 
0:55:58 Joel Frick (6124): more complicated that way to me. Okay, you would, you would. What, what, what? I guess I don't, uhm, are you saying you don't want to do this, uhm, 
0:56:15 Keith Freeman (6781): due date extension request? At the task level. It just sounds more complicated if it's at the task level. The due date extension request being within the PPAP itself.
0:56:33 Keith Freeman (6781): Yeah. And then the change being logged. Oh. At the individual task level. And it says who made the change. 
0:56:45 Joel Frick (6124): Okay. So maybe you only have the ability to do it at the overall PPAP date. No. 
0:56:53 Keith Freeman (6781): Be, be able to change the individual due dates, but the supplier, through an external discussion, says, hey, I want to be able to change these due dates.
0:57:04 Keith Freeman (6781): I mean, it's, it's, to me, it's the simplest thing. It sounds like we're going to have to set up a system.
0:57:09 Keith Freeman (6781): To be able to review and approve every single task, every single time, it just seems 
0:57:16 Dave McLean: more complicated that way. No, it's, it's more that, like, so there's going to be nothing precluding the supplier and the engineer having a conversation and agreeing agreeing, you know, through their own machinations, whether it's their comment, whether it's their phone call, whether it's their email
0:57:33 Dave McLean: , whatever. If they agree, yeah, you know what, these tasks we're going to kick them all out by six weeks. The engineer would then just be able to go in and chick, tick, tick, tick.
0:57:39 Dave McLean: And change them without, without it going through the request process. This just becomes a second avenue that, you know, again, maybe, maybe it's something we, maybe it's something we don't want.
0:57:51 Dave McLean: Maybe, maybe we don't necessarily want to create a workflow around this, versus build it out in such a way that it is easy for the engineer to make the change, but only for the engineer to make the change, not for the supplier to force a workflow to request this, because we want 
0:58:07 Joel Frick (6124): them to actually have a conversation. Yeah, that's kind of the hang up that I get, Keith. I think what I see is, I'll get an email from Craig Hamilton saying, hey, we don't have a PPAP for this, or hey, the PPAP is overdue, and we don't have a response date.
0:58:25 Joel Frick (6124): We need to ship parts in two days. What's going on? And then I'm scrambling. I go to the PPAP, and I'm like, why did we make the due date in two weeks when we need to ship now?
0:58:33 Joel Frick (6124): We moved the due date. I have no comment. I have no context to the supplier, you know, requesting any of that back.
0:58:38 Joel Frick (6124): And so, on the one hand, it's like, it's a discipline thing. If you're going to change the due date, explain 
0:58:43 Keith Freeman (6781): why. But, uhm. And I understand what you're saying, because I, I, I don't disagree. Yeah. Instead of using the PPAP, suppliers will call or send an email.
0:58:56 Keith Freeman (6781): That's right. That's usually how they do it. I, and I don't disagree from your standpoint of 
0:59:02 Joel Frick (6124): discipline and control. Yup. Yup. So, I, the thought process was not to limit the ability to change it in another way.
0:59:13 Joel Frick (6124): My thought process was to provide that tool to, really, it's a tool for us, is the way I think about it, to be able to say, you know what, I know this supplier does this kind of stuff to me all the time.
0:59:26 Joel Frick (6124): I'm not going to approve an extension unless you make the official request using this, this tool. That's, that's kind of the way I was thinking about it, but, but maybe there's too much build and too much work 
0:59:37 Keith Freeman (6781): involved with doing that. I do fully understand why you want to have that force. Through a tool, because I don't disagree.
0:59:47 Keith Freeman (6781): Most of the time, it's a phone call or an email that is completely detached from the PPAP itself. And I would, I would say 98 to 99% of the time, if not more, it's a phone call or an email.
1:00:00 Keith Freeman (6781): Completely detached from the PPAP. 
1:00:07 Dave McLean: Okay. So, if I'm hearing the consensus answer here, we want to strive for logging changes, whether they're automatic calculations, or changed due dates by the engineer, but no finding extension request workflow piece.
1:00:24 Dave McLean: And instead, if, if somebody needs an extension, the onus is on them to come and reach out and have the conversation.
1:00:31 Dave McLean: You've got to drive the collaboration. If that is an agreed upon thing, then the engineer would then be able to go in and change those due dates accordingly.
1:00:39 Dave McLean: And we just, we focus on making that an easy process for the engineer. Simultaneously, making sure that we log those changes in a way that is consistent, whether it was because of a, a calculated change or a manually overridden change.
1:00:52 Dave McLean: Yep, it's fun. Okay. Love Same is also going to apply, just FYI, for change of ownership of the tasks. Right, so if we've assigned it to, if I assign it to Jillian, and Jillian, Jillian is looking at it, she's going to be on vacation the month that all this stuff needs to happen, and that task should
1:01:19 Dave McLean: probably be redirected to somebody else. There's no sort of request reassignment thing. Jillian's not going to be able to reassign it, like, Intellix is really built in the way that if you're the person responsible for a task, as a general rule, you're the one responsible, unless the person that assigned
1:01:36 Dave McLean: it to you, or the person that created it, or the person that owns the parent record that that task is related to, modifies it for you.
1:01:43 Dave McLean: So, if it, the onus would be on Jillian to reach out, have a conversation, hey, I'm not going to be around that month, maybe go and assign this one to Victor.
1:01:54 Joel Frick (6124): Our, I'll say that our current setup is, it just goes to the supplier contacts at large and anybody on the supplier side.
1:02:10 Joel Frick (6124): Who has the level of access to be able to modify EPAP requirements, are able to do that. So it's not assigned to, the tasks aren't 
1:02:22 Dave McLean: assigned to specific people. Okay, so one of the, one of the guidelines. Guiding supplier relationship management principles that we set during the first workshop was that each supplier would have one or more roles filled for it.
1:02:36 Dave McLean: One of, you know, one of which might be PPAP coordinator, for example. There can be many people in that role.
1:02:42 Dave McLean: But the value of creating those roles is that for each individual workflow, we can target who it is that it's going to, and the supplier gets to manage who's in that role.
1:02:52 Dave McLean: So if, if the end result is that, oh, you know, everybody should be able to see it, then they can just go to the PPAP coordinator role.
1:02:58 Dave McLean: And assign everybody to it. Okay. But when you, when you create the task. Yep. What you're doing is specifying which role you want that to go to for that supplier.
1:03:10 Dave McLean: Gotcha. Okay. 
1:03:11 Joel Frick (6124): I, I, I, I understand. Now, the example that you gave had, you know, it was a red flag a little bit.
1:03:18 Joel Frick (6124): But so basically what you're saying is Jillian and Victor could be DPAT coordinators. And when I've assigned it to them, either one of them could.
1:03:26 Joel Frick (6124): You got it. Respond to it. Okay. Yeah. You got it. You got it. I mean, the reality 
1:03:30 Dave McLean: I'm, I'm. I'm fully cognizant that most suppliers are probably going to keep it fairly open. They're probably going to have lots of people in, in all of the roles that are needed, but the ideal intent, especially for your larger suppliers, where, where roles are actually more clearly defined for how 
1:03:46 Dave McLean: they operate. With you, the intent is that the supplier is managing who it is that's receiving what task types and in the, the list of roles that they have to populate on their profile, on their supplier profile, each role should specify in the description of that role, what it is used for.
1:04:04 Dave McLean: Um, so, you know, the, the PPAP coordinator is the role that is, that receives all PPAP tasks within this, uh, or for, for this, or for your company, essentially, versus the, um, I don't know, perhaps there's a supplier scorecard, uhm, which is a great segue, uh, supplier scorecard, uhm, task owner, 
1:04:28 Dave McLean: or something like that, whatever you want to call the role, that we consider as the, the role that is responsible for whatever data the supplier might have to fill out to fill out, or to complete the supplier scorecard, if we carve it up that way.
1:04:42 Dave McLean: Again, we'll figure that out when we start to look through the individual KPIs, but, uhm, each of these workflows, non-conformances, audits, inspections, like, all of this stuff, you get ideally, you want to be targeting these things at the people that are responsible for it at that company.
1:04:58 Dave McLean: Okay, that makes sense. Uhm, in theory, they No, I won't go there. That's, that's, uh, too much of an edge case.
1:05:14 Dave McLean: I was, I was going 
1:05:15 Keith Freeman (6781): to come, I was muted, I was thinking scorecard responders also known internally as nitpick and dispute. 
1:05:24 Dave McLean: Coordinator. There we go. Put an acronym on it, and there you go, right? Sounds real official. All right, um, just we're at 1038.
1:05:34 Dave McLean: Why don't we, why don't we take a 12-minute break, guys? Come back for 1040. Okay. Awesome. Thanks very much, guys.
1:05:41 Dave McLean: See Hey guys, let me know when you're, when you're back. Hey guys, how's it going?
1:22:13 Dave McLean: Alright, everybody back and ready to go?
1:22:29 Dave McLean: Or, uh, we need another minute. 
1:22:31 Joel Frick (6124): Okidoki. 
1:22:36 Dave McLean: Just give me a second to clean out my desk up here. Okay. Awesome.
1:23:10 Dave McLean: So, last, uh, hopefully the last one's for, for PPAP today before we move to the Supplier Scorecard. So, the, the security considerations we talked about with respect to pilot part that I think are going to apply here, especially given how interrelated these are.
1:23:28 Dave McLean: And that was essentially that for PPAP and for their associated tasks, the, the, the model is that if the user has access, and I'm talking specifically SIA user, if the user has access to the PPAP application, so you've granted them access, let's say your typical, your engineer or one of your, your, 
1:23:50 Dave McLean: uhm, uh, folks that, no, we'll just use the engineer as the use case here, that has been given access to the PPAP application.
1:23:59 Dave McLean: me. What? What they would be able to see would be all of the PPAPs that exist within their business domain hierarchy, uh, level of access, and the way we were separating that was essentially based off of, uhm, running time, change versus new model, uh, or new model versus mass production, actually, I
1:24:19 Dave McLean: think was the terminology we were using, so some PPAPs would get, would, uh, would be initiated as a new model PPAP, uh, that's connected to, uh, a new model summary, uh, there might be a scenario at the end where we're gonna change the status of that part, uh, but fundamentally you would have to have
1:24:37 Dave McLean: access not just to the PPAP application, you'd also have to have access to new, the new model business domain and the secondary hierarchy in order to see those records.
1:24:47 Dave McLean: On the other side, uh, for mass production stuff, uh, mass production would be, uhm, sort of the lowest level of that business domain hierarchy branch that deals with supplier-related data.
1:24:57 Dave McLean: Uh, and so in this case, if a user has access to new model, they would also have access to production.
1:25:05 Dave McLean: However, if a user is given access to mass production data, they would not necessarily have access to new model. And that's going to, that's going to apply through the new model summary, the PPAP object, uhm, all the PPAP tasks, all the pilot part data that comes along with it.
1:25:24 Dave McLean: It's primarily going to be split based off of that, that business dimension. Does that make sense? Yes, perfect. 
1:25:36 Joel Frick (6124): How does 
1:25:37 Dave McLean: handover work? So handover at the end of the, and I think we tie this in most likely on the new model summary record, so after all the PPAPs are done within that and we're ready to close out the new model summary.
1:25:52 Dave McLean: It's be a function of a question, you know, is this, would you like to change all of these over to the mass production business domain?
1:26:02 Dave McLean: If you answer yes, as you're closing out the new model summary, the business hierarchy domain for the new model summary, plus the PPAPs, plus all the tasks, plus all the pilot park data, like all of those related records, would then switch from the new model business domain to the mass production hierarchy
1:26:20 Dave McLean: domain, so that, so that everybody with mass 
1:26:22 Joel Frick (6124): production access would be able to see it. Does that work? Can you change them all at once? 
1:26:29 Keith Freeman (6781): Yeah, well, I guess the question would be, uhm, that honestly doesn't matter, even the ones that aren't closed out, new model can still see them, and it gives, you know, mass production visibility, even if we haven't handed over that, or closed out that individual PPAP.
1:26:47 Keith Freeman (6781): I mean, I, I don't see any reason why we would 
1:26:49 Dave McLean: be hiding it at that point. So, instead of binding it to the closure, workflow action, just make it a, a closed conscious decision.
1:26:58 Dave McLean: Would you, would you need to do that on a PPAP by PPAP basis? Or would it be, we're, we're doing it for the entire new 
1:27:04 Keith Freeman (6781): model all in one shot? We're, we're generally handling, handing over new models all at once, but the responsibility for closing out anything that's new.
1:27:13 Keith Freeman (6781): It remains, stays within the new model responsibility, but the visibility, that shouldn't be affected by that. All right. That's fine.
1:27:23 Keith Freeman (6781): That's easy. Yeah. 
1:27:25 Dave McLean: Okay. All right. So then, honestly. The, the answer would just be them. If the record is created, is related to a new model summary record.
1:27:40 Dave McLean: Then it's going to inherit its business domain from the new model summary. In that sense, that, you know, when you first start it, you're going to put it into the, into the new model hierarchy domain.
1:27:50 Dave McLean: And, you know, at whatever point in time that you decide to switch it over to mass production, it doesn't necessarily have to be on completion, just when that handover happens in the real world, then all that's happening is you're, you're switching it it from new model, you're basically dropping it in
1:28:06 Dave McLean: the hierarchy to mass production, which grants access to that additional group of people, plus everybody who already had it from higher up in that hierarchy domain.
1:28:14 Dave McLean: Which, like you said, it's just a visibility change, it does nothing, it's neither bound by it. Nor does it do anything to the workflow 
1:28:21 Keith Freeman (6781): of any of those tasks. Yeah, and I think that's key, as long as it doesn't affect the workflow, because anything that remains open, and that's part of our handover conditions, anything that remains open, remains the responsibility of NewModel to close out.
1:28:38 Keith Freeman (6781): You don't just drop it over the fence, hope somebody picks it up? Well, that'd be nice, but no, no. 
1:28:44 Dave McLean: You would never. sales-to-service transition in the 
1:28:53 Keith Freeman (6781): world of software The Trojan horse handover. We have no idea what's inside this. Let's 
1:29:01 Dave McLean: open it. Oh, God. I love it. I love it. Okay, cool. It's actually fairly straightforward, then. So, uhm, it's going to follow the same process.
1:29:10 Dave McLean: If anything, it gets a little more elegant now that we've more fully fleshed out the PPAP and the new model summary piece.
1:29:16 Dave McLean: So, uhm, I think we're good on that front. The second piece is mobile. Uh, and so, again, I'm going to, what I'm going to ask for is, or in this case, is the same type of operating circumstances that we've applied to, uh, pilot part data the other day, that let's focus our effort on building as strong
1:29:35 Dave McLean: of a UI through the browser and with a responsive design. That can be used on a tablet or a phone in the browser, versus trying to carve this up into the limitations of the mobile app, which would only need to be used, really, if the person's offline, and unlike a non-conformance, unlike an inspection
1:29:54 Dave McLean: , for example, or something like that, like a, a safety inspection, it sounds like, you know, yes, people are mobile, people are out on the shop floor, they're out in the field doing this kind of stuff, but they, they generally, from what we said the other day, they're, they're gonna have access when
1:30:07 Dave McLean: they're trying to, or they're gonna have network connectivity when they're trying to, you know, work and 
1:30:11 Keith Freeman (6781): complete these tasks. I don't ever see a use case where we would try to do mobile on APAPs. 
1:30:22 Dave McLean: Yeah, short of, like, just the person happens to be not sitting at their desk when they go and get an email notification from the system saying, hey, you know, you've just been assigned this new task.
1:30:32 Dave McLean: They might want to click the link in the email and it's going to pull open the browser anyway. Yeah. But I think that they're probably not actioning the task.
1:30:39 Dave McLean: They just need to open it and be able to read it in most cases and maybe post a comment. A comment or something like that to the PPAP.
1:30:45 Dave McLean: Maybe they maybe they're having a conversation in a meeting. They've got their tablet with them. They, you know, need to quickly open the PPAP plan to be able to see what's coming.
1:30:54 Dave McLean: That to me seems like the kind of use case that we're looking at here. Yeah, I love it. OK, that's PPAP.
1:31:08 Dave McLean: I'm sure we'll have more as we come up again. Like I said yesterday, there's a lot to this one. So as we get deeper into it, there will probably be some clarifying.
1:31:15 Dave McLean: questions, real nuance kind of stuff. But we've got to put it all sort of on paper first and review the actual documentation that comes out of this, the architectural decision records that come out of this before we can get to that level.
1:31:29 Dave McLean: So, with that, Let's transition over to Supplier Scorecard. So, to recap everybody's memory of where we were going with Supplier Scorecard.
1:31:43 Dave McLean: Let me just pull it open here real quick. Okay. So, the model we were shooting for, was one where the, the admins of the Supplier Relationship Management Program, uh, and I mean that in the app admin sense, would be able to define, uh, what the scorecard KPIs are.
1:32:20 Dave McLean: As a, as a bundle of different scorecard KPIs, so those would be created almost like a checklist is, where each KPI is a different record with its own properties for data entry and, and, you know, naming conventions, descriptions, what's good, what's bad, things like that.
1:32:36 Dave McLean: Uh, and then wrapping that in a scheduler that would allow you to have the system automatically generate supplier scorecard container records with all the individual KPIs built in for every supplier that meets one of whatever rule criteria you define.
1:32:54 Dave McLean: So all suppliers that are active, for example, or, or whatever, whatever segment that looks like, uhm, would allow you to have those, uh, assigned to a user so that when the supplier scorecard comes it gets generated, there's a person that receives it, gets an email notification, uh, and those would 
1:33:13 Dave McLean: generally be generated on, you know, X number of days after the end of a month so that when the person gets it, if I was getting it today, for example, I'm getting it for September.
1:33:24 Dave McLean: And the data that I'm filling out for that supplier scorecard relates to the September profile or September data for that particular supplier.
1:33:33 Dave McLean: Uhm, it would also contain logic to be able to target who it is that that supplier scorecard is being assigned to.
1:33:40 Dave McLean: Uhm, and again, if I, if I recall back to our conversation, I think it was, it was not something where we were assigning ownership to ownership for the entire scorecard, it was that we were assigning ownership for individual KPIs, because if I've got 100 KPIs in it, there are different people that need
1:34:05 Dave McLean: to give us each piece in that, in that option, so looking at the exact text that came out of it, uhm, we're going create draft scorecards for the preceding period, populate automated KPIs from governed sources, we're going to talk a little bit about that today, uhm, we're going to consolidate the remaining
1:34:23 Dave McLean: KPIs into data entry tasks by responsible roles, group, uh, and applicable supplier population, so each contributor can enter the values for which they are responsible without opening unrelated scorecard section.
1:34:35 Dave McLean: So if I had 50 KPIs, let's say hypothetically, 10 of those KPIs are automatically derived values that are queried from data points in the system.
1:34:46 Dave McLean: Average task completion, number of overdue tasks at the end of the month, something like that, where you can, we can theoretically snapshot it from the data in Intellects.
1:34:55 Dave McLean: Those ones, the data will snapshot, they'll live under the scorecard for the month for that supplier, but they aren't owned by anybody.
1:35:02 Dave McLean: The remaining ones, when you set up the parameters of those KPIs, you would be defining which role is responsible for that KPI.
1:35:11 Dave McLean: And I think part of the use case was that in some situations, we may be assigning that to the supplier themself to answer, but in most cases, I think it was that it's an individual within SIA that's going to be filling those out.
1:35:27 Dave McLean: Five of them might go to person one, five of them might go to person two, and the remaining go to person three, where person one, two, and three are actually defined as a role that is populated for each supplier.
1:35:40 Dave McLean: Before I, before I go any further, is this, this, construct ringing a bell from our past conversations on 
1:35:46 Joel Frick (6124): the scorecard during the last workshop? Out of curiosity, who, who was in that discussion? 
1:35:59 Dave McLean: Jamie was not. Dave, Glenn, Joel, Keith, Emma, which would have been her recorder, and Rick. I think it was similar to this one, though.
1:36:11 Dave McLean: My, my, ah, my log from the transcripts, it, ah, it only captured the Joel, specifically, as the person 
1:36:20 Joel Frick (6124): who was logged into the loop. I think it was Joel and Jamie, I don't think it was Jamie or Keith, but I thought that we were sitting through that 
1:36:27 Keith Freeman (6781): one. So, I'd love to have input into scorecards, but I'm, I'm out. No, I'm just thinking, uhm, I, I wouldn't have been the one commenting, because we are currently out of the scorecard, but I would love to be in the future once we get the, the PPAP module to a, a hardened situation where we can use it
1:36:48 Keith Freeman (6781): . Use model 
1:36:49 Joel Frick (6124): change, PPAPs in the scorecard. Yeah, just please speak up if something you need is different. If you have a different idea.
1:36:58 Joel Frick (6124): So, Dave, yeah, basically everything you said, uh. Uh. Is true from, from my, uh. From what I heard, but, uh, I was not in that initial discussion.
1:37:08 Joel Frick (6124): It sounds like you said Glenn. Glenn is, uh, uh, on my team as well, supply management quality. So we have the same role.
1:37:17 Joel Frick (6124): So. Uh, he did fill me in a little bit, but. I apologize, I don't have that background, all that conversation.
1:37:26 Joel Frick (6124): All good, no worries. 
1:37:28 Dave McLean: So, um, in the, maybe to orchestrate and bring you up to speed here, um, Luke, I think you showed a supplier scorecard example, uh, and again.
1:37:37 Dave McLean: It might not have been you, Luke, sorry. It was somebody 
1:37:40 Joel Frick (6124): else. It may have been, I've done it before, so, I remember seeing a document. Yeah, if you happen to 
1:37:46 Dave McLean: have one handy, that'd be great. Okay, this is great. So, in this context, the way you want to think about Supplier Scorecard, and how we, and to sort of frame up how we talked about it in the first call, is that there's a front end and a back end to this.
1:38:22 Dave McLean: The back end side of it is where you and your team, your team would go and set up what the scorecard is tracking, and how the system should automatically build the scorecard each month, quarter, year, whatever frequency, I think monthly is the model we're going with, how it is that the system should 
1:38:39 Dave McLean: build scorecards for which suppliers, because not all suppliers in the system will need to have a scorecard generated in active ones, for example, so there's different criteria that you would be defining to that, and you'd be defining workflow-related rules around each KPI, so who is responsible for 
1:38:58 Dave McLean: filling that KPI out, who is responsible for, ah, who's responsible for reviewing the whole scorecard, ah, at the conclusion of that reporting period, at what point do we lock in the scorecard results, whether it's been reviewed or not, these are all properties that would be set up in the background 
1:39:16 Dave McLean: by, you know, very broadly, your team, the application administrators for, for Supply Relationship Management. The front-end side of it is the part of the system that, ah, that actually stores the monthly records that you have that are being created by Intellects.
1:39:31 Dave McLean: And, and the whole model is really built out that, first and foremost, we, we never want you or your team to have to go in and say, okay, I want to go create a new supplier scorecard for this supplier for this month.
1:39:41 Dave McLean: The system should just automatically be building them based on all those back-end parameters that you set up, which would, with a different user interface, would very much mirror the content that you're seeing on the screen here.
1:39:53 Dave McLean: The KPIs, the list of KPIs with their performance targets and purpose, how we group them together, how we weight them, how many points are associated with each one.
1:40:01 Dave McLean: Thank Those would all be back-end settings that get pulled through into each monthly, uhm, monthly data collection record that is exposed on the front-end.
1:40:12 Dave McLean: On top of that, that back-end piece would also be versioned, because we recognize that, over time, the score could change, and parameters are going to change.
1:40:19 Dave McLean: You might add additional ones, you might refine the wording or change the weighting, you might drop them along the way, and so the, there's a versioning component that needs to be built into that, that data capture library of what's coming.
1:40:32 Dave McLean: When the records get created, the idea is that the scorecard itself, the, the parent company, the data collection form, uhm, would likely, I'm just confirming my, the decision outcome we made here.
1:40:50 Dave McLean: The parent, the parent record that, that consolidates everything would be living in like a disabled workflow state. So nobody owns the entire scorecard for the first X number of days of that month because Thank you.
1:41:06 Dave McLean: Each individual KPI is owned by whomever it is that your library settings defined should own that. If I look at one of them, for example, uhm, the safety through accountability and recognition KPI as well as supplier sustainability performance.
1:41:22 Dave McLean: Presumably, that's going to go to the EHS team. Right. So for every supplier, and again, the EHS team at the supplier, I should say, so when the task generates the supplier EHS role that is defined for each of the suppliers that the suppliers themselves will have populated, would receive a task that 
1:41:44 Dave McLean: contains those two KPIs and they need to fill out whatever value it is that you're expecting them to fill out, the awarded points or the answer to a question or whatever the case is.
1:41:54 Dave McLean: And when they submit it, that becomes a matter of record that will eventually be subject to review. In addition to that, based off of a predefined time period, if they don't click submit, then the record is locked in.
1:42:07 Dave McLean: So you might say, you know, look, we want to give everybody the first 10 days of the month to get their ducks in a row, close the month out, everybody's got to close the books.
1:42:14 Dave McLean: On day 11, that's when we want the supplier scorecard to get generated for all the suppliers. And we're going to give them 5 days or 10 days or something like that to enter the data into the scorecard.
1:42:26 Dave McLean: So in this case, your supplier EHS team has 10 days to enter the values. If they do, if they get it done, they're very diligent, they do it on day 1, they close it, everything's good, drops off their task list, it's ready to go for the review when that eventually comes up.
1:42:40 Dave McLean: If they don't, then 10 days after entering the supplier scorecard was generated, or however many days you want, they automatically close with whatever is entered at that point, presumably 0.
1:42:51 Dave McLean: So if you don't do the data entry, you certainly don't get credit for it. In that case, once you hit day 10, and after generation, which is actually probably day 20 of the month, all of those remaining open tasks close out, and what activates at that point is some sort of a review.
1:43:10 Dave McLean: So I have, uh, after required compilation, a timeboxed interview review will be open for for the departments that contribute to the scorecard.
1:43:19 Dave McLean: So in this case, provide one consolidated review entry point across the supplier population. Treat silence at the end of the review window as consent, rather than requiring every reviewer to approve each supplier entry and publish scorecard individually.
1:43:32 Dave McLean: And at the end of the review window, close the review and publish the completed scorecards to the appropriate supplier company and facility users.
1:43:40 Dave McLean: So you guys would define who it is that's doing that review after everybody has done their data entry or not done their data entry.
1:43:47 Dave McLean: And once that review is complete for each of those suppliers, the scorecards just become a matter of record for reporting and KPIs and scoring and all the other stuff that comes along with it.
1:44:01 Dave McLean: Conceptually, does that make sense, the direction that we're trying to head with it? 
1:44:04 Joel Frick (6124): Uh, yeah, that's it. That makes a lot of sense. Uh, and, uh, just to add to your description there, our, our dates are 15th is the last day that we have to enter information.
1:44:19 Joel Frick (6124): And then we typically give one business day, so typically we'll, we'll issue the scorecards internally on the 16th. Uh, give, uh, one business day from the for all the stakeholders to review for any issue, and then they'll be released, uh, to suppliers on the following day.
1:44:43 Joel Frick (6124): So, the earliest date a supplier will get a 
1:44:46 Dave McLean: scorecard is the When we talk about the state, just so. I can clarify for myself here. When we talk about the stakeholders that are reviewing it, who's that generally going to be?
1:44:56 Dave McLean: Is that somebody that like stakeholders that are reviewing the entire scorecard for each supplier? Or is it somebody who's reviewing a specific subset of KPIs?
1:45:07 Dave McLean: To be honest, 
1:45:11 Joel Frick (6124): it's more of a spot check. So, say Luke has a past due PRC that he wants to make sure that the supplier got deemed for.
1:45:23 Joel Frick (6124): So, he'll go in and just make sure, do a couple spot checks on whatever suppliers he wants to make sure the score is accurate.
1:45:31 Joel Frick (6124): So, it's not necessarily, uhm, yeah, it's not necessarily an approval process, it's more of a spot check. Got it. Well, like, these are available for review should you go in and want to see them.
1:45:46 Dave McLean: So, it's a notification. It's not something we're asking Luke, in this case, to do specifically and close out or sign off on.
1:45:52 Dave McLean: It's more that when we get to that, whatever day the review period starts. It's close out all of the tasks for data entry and lock in whatever was there or not there at that point in time.
1:46:03 Dave McLean: And then notify a community of SIA users, like a list of people within SIA that you guys would manage who that is.
1:46:12 Dave McLean: That all the supplier scorecards for September are ready to go, are ready to review. You've got two days to request any tweaks or changes or anything like that before, before we publish them out to the supplier.
1:46:25 Dave McLean: And the publish model is simply. Making them officially official, so at that point, the supplier can see it. It shows up as their current score on their on their home page, for example, or if there's a line chart on the home page that's trending it now, or a bar chart or something, you know, the new 
1:46:42 Dave McLean: bar shows up with whatever they got all the reviews. Results are now available to them to be able to see, and more importantly, they are, they are now the record.
1:46:49 Dave McLean: So if anybody has any issues with them, tough cookies. I'm sure it's not actually like that. I'm sure people realize, suppliers realize all the time after the fact, Ah, I didn't, didn't end it.
1:47:00 Dave McLean: I'm not sure in my health and safety data, can you, can you reopen it? Yeah, that happens all the time, or, ah, 
1:47:07 Joel Frick (6124): same thing with, ah, SQA data. They will, ah, be missed changing a due date or something like that. So we'll have to adjust that.
1:47:15 Joel Frick (6124): So there, there is on the same as adjustments after the fact, as well. 
1:47:20 Dave McLean: Those adjustments would generally be supplier reaching out to somebody in SQA, letting them know, and then, do we care to let the SQA person reopen that task?
1:47:32 Dave McLean: for the supplier to go do, or is it more to, no, once it's published, SIA has to make those changes.
1:47:40 Dave McLean: I can see pros and cons to that, just to animate that, on one hand, it's a lot of work. If, ah, if all those changes are coming to you, you've, you've got to make them.
1:47:48 Dave McLean: um, yourself, but on the flip side, it also gives you an opportunity to, ah, have some conversations with the supplier 
1:47:56 Joel Frick (6124): about making sure they get their work done. So I guess from an SQL standpoint, the, the, the SQA engineer has discretion whether they want to give us more back or not.
1:48:13 Joel Frick (6124): A common, a common occurrence, let's say, is, uhm, you know, let's take PPAP. New dates, they're somewhere. It's change point management.
1:48:24 Joel Frick (6124): That's what it's called. Change point management. There you go. Uhm, let's say, we dinged them on the scorecard and said, uh, and said, you know, you get 0 points because you're getting past 2 apps.
1:48:40 Joel Frick (6124): And then we find out later, oh, remember that new date extension thing we were just talking about before, right? We said, oh, the supplier actually requested an extension, would have granted it, I just didn't grant the extension in time before all the dates were pulled.
1:48:53 Joel Frick (6124): Uhm, hey, Jesse, can you go ahead and give them all 5 points for that? And then there are cases that, where, you know, we'll say, yeah, we'll go ahead and do that, and then we republish the scorecard, uhm, you know, just, just describing the current, the current situation, we republish the scorecard,
1:49:12 Joel Frick (6124): and then our SQA admin, Jerry Brown, she'll take the PDF and she'll re-send it to the supplier contacts, you know, related to that, that scorecard.
1:49:24 Joel Frick (6124): So that's our, that's our, kind of current real world scenario that happens probably every month with a supplier or two, with regard to either PRC's past due, or sometimes PPM, sometimes, uh, sorting costs.
1:49:37 Joel Frick (6124): It could be really any of these, but that's just kind of It's just as common as any quality, uh, adjustments.
1:49:45 Joel Frick (6124): We also make probably just as many delivery 
1:49:48 Dave McLean: updates as well. So everything you're describing here is that. The supplier's going to review the data, and what they're really asking for is for SIA to change the result, not for the, not for the, something to be reopened for them to change the result themselves.
1:50:10 Dave McLean: Right, right. Okay, okay, that's fine. Then. Are you, are you okay with the, I'm going to call it the dispute process, uhm, being something that happens outside of the system, and it's just the, you know, FQA users that can reopen this stuff to, to change the data, just have permission to do it, or are
1:50:29 Dave McLean: you looking to, would you be looking to try to capture that dispute process within Intellects? So, what that might look like is, ah, you know, the, the supplier sees their scorecard, they're looking at it, the number's not right, click a little button, you know, launch a, a dispute, maybe dispute is 
1:50:46 Dave McLean: a harsh word for it, we'll figure out something better for it, but, like, launch a dispute request, where they say, you know, they have to enter in a date, they have to select which, ah, which scorecard they're looking to change, hey, I, something's wrong with my September scorecard, and then they go
1:51:01 Dave McLean: and select all the KPIs that they see something wrong in their mind, and they have to post a comment for, with each KPI to define what it is that's, that's wrong and route it off to the SQA to take a look at, that way there's some traceable record that we've made a change.
1:51:17 Dave McLean: On the one hand, it creates the traceable record, it creates structure, it maybe avoids the calls that come into play, or at least discourages the phone calls, which can easily become lost, on the flip side, it's, it's harder, right?
1:51:32 Dave McLean: Like, it is something that it, it's often easier for the supplier to pick up the phone and talk to somebody about that kind of stuff, and depending on what you're, what you're trying to solve for either of those 
1:51:42 Joel Frick (6124): could be a feature or a bug. Uhm, I don't feel strongly either way. Uh, how many do you get, typically, within a month, or how many, per year?
1:52:04 Joel Frick (6124): Every month there's probably, you know, give or take 10 adjustments. 
1:52:11 Dave McLean: 10 adjustments, total or per supplier?
1:52:22 Dave McLean: Total. Oh, yeah, okay, don't build a whole forum for 10 adjustments. 
1:52:30 Joel Frick (6124): Okay, per month. Per 
1:52:31 Dave McLean: month, yeah, it's not, it's not enough to do it. Like, if we were talking a thousand adjustments. Spread across a hundred suppliers that are trying to change stuff, then it's a, it's a support queue, right?
1:52:45 Dave McLean: You need a, you need something, essentially log a ticket to go, go to get a change for the volume that we're talking about here, 10 a month, 10 individual adjustments.
1:52:54 Dave McLean: Even if it's 10, 10 suppliers that call in with adjustments to be made, even if it hits more than one KPI, the, the more, like that volume isn't such that things are likely to get lost, right?
1:53:06 Dave McLean: Because at the end of the day, there's only, there's only so many of them in that scenario. If that ever 10Xs, then you look to add a, a process into Intellects to be able to connect those types of, uhm, 
1:53:18 Joel Frick (6124): modification requests. Here's, here's where I would, I would recommend a middle ground. Okay. And that is. Give me a way to know who to contact about which KPI.
1:53:33 Dave McLean: Yep. Yep. You can set that up in a while. 
1:53:36 Joel Frick (6124): What happens to Jesse all the time, or even Jerry Brown, you know, my, my office admin, who's the one who actually emails it out.
1:53:42 Joel Frick (6124): They just email her about, because that's who sends them the scorecards, they just say, hey, what, what happened with my delivery of on-time service parts, or on-time delivery service parts, and she goes, I have no idea, I don't know anything about service parts, and it's not even SQA, and it's not SQA
1:53:58 Joel Frick (6124): , then we have to go through this whole chain of, who do I get a hold of to try to, so the recommendation would be to give me a way to very easily see, okay, I've got a question about this KPI, like, who do I email, yeah, give me a contact Bye.
1:54:14 Joel Frick (6124): What do you think about that? Is that safe? Yeah, I'm asking you guys. Yeah, I think that's a good idea.
1:54:22 Joel Frick (6124): If there is like, on each line item. Like, an email button or something, if you have a question, info pops up in Outlook email with the right contact person.
1:54:38 Joel Frick (6124): Yeah, that's fine, so when you set up- the way it would 
1:54:42 Dave McLean: work is when you're setting up the KPIs in the back-end side of it, uhm, you're selecting- in addition to populating the name of the KPI, the targets, purpose, the max points, all that good stuff, you're selecting a, uhm, you know, person responsible for feedback or- or something like that from the employee
1:54:59 Dave McLean: list of SIA users, which contains the person's email address. So if when you're setting it up, the- the two safety ones, those- those ones should all go to Dave McLean.
1:55:09 Dave McLean: You select Dave McLean, and when we- when we build the form and show it to the user, you know, we- we can, I mean, they're gonna get the email address, so you might as well say, like, when they're- when they're looking at their results and they see safety through accountability and recognition, uhm, 
1:55:24 Dave McLean: you know, KPI only, owner at SIA, Dave McLean, and that would just be a little link that, when you click it, it's the mail to at, uh, mail to Dave McLean, uh, at somebody at justq.com.
1:55:34 Dave McLean: So they go from looking at their results to emailing the- the right person for that individual KPI and what it What do 
1:55:43 Joel Frick (6124): you think? Yeah, that, uh, yeah, that sounds like a pretty good, really good idea. When the supplier gets it issued to them, will they be able to see that email at each KPI as well?
1:55:56 Joel Frick (6124): Yeah. Yeah, yeah, so I think. You guys to be the window people, right? No. Oh, you're okay with them reaching out to these?
1:56:06 Joel Frick (6124): Yeah, so my preference would be, because SQA is just responsible for not even the entire thing, just part of that.
1:56:13 Joel Frick (6124): Okay. I want, you know, Jerry Brown to be the one who gets the email about PPM or PRCs or whatever, but I don't want her to get emails about safety, you know, delivery or costing.
1:56:24 Joel Frick (6124): One other question I had. So, clarifying. For Jesse again. So, when it gets published and then the supplier says, hey, whoa, you know, like you just said, you know, the due date can be changed.
1:56:45 Joel Frick (6124): Yep. Do you guys go in and make the change, or do you ask SMQ to make the change? Well, both.
1:56:53 Joel Frick (6124): Both. Okay, alright. Because he said, he sounded earlier like both of you guys had that approval. I just wanted to make sure that that was what you guys understood.
1:57:00 Joel Frick (6124): Well, both, but it's in different areas. So, in current setup, I have to go in and make the change in the PPAP or make the change in the PRC or whatever the case may be.
1:57:12 Joel Frick (6124): I have to go and make that data change, and then I have to tell Jesse to reissue it. Hey, I have I made this change, and then you have to change it in whatever Excel database or whatever you're working on.
1:57:25 Joel Frick (6124): Which, I had a question about that, Luke. Yeah. Handful of PRC. PRCs. Or.
1:57:38 Joel Frick (6124): So PRC due September. But it would zero points past two, I mean, yep.
1:57:50 Joel Frick (6124): If you go and update it in October and the September snapshot, they requested that extension late in October, they say, hey, I still need more time and then it gets extended.
1:58:05 Joel Frick (6124): Well, the September score is. Current setup that doesn't in the current setup. No, and that's that's a question for Dave.
1:58:13 Joel Frick (6124): I'm not sure I wouldn't want it to, right? So we, because you said the right word and it's snapshot at this at this moment in time.
1:58:22 Joel Frick (6124): That's correct. This is what the data would look like. 
1:58:25 Dave McLean: Sorry, could you run the scenario one more time? Just to make sure I'm understanding each one. 
1:58:30 Joel Frick (6124): Sure. I'm going to take the screen here. Okay. It's a difference in asking forgiveness versus permission, right? Yeah, yeah. Okay, this is what we do right now, David.
1:58:46 Joel Frick (6124): Uhm. Since we were talking about PPAPs. Let's just stick with PPAPs. We can do the same thing with PRC, but.
1:58:55 Joel Frick (6124): PPAPs, what we do right now is I have a little Power BI query. That, that I created and it's looking at the status of PPAPs.
1:59:05 Joel Frick (6124): And then I just look at. My requirements due date, uhm, and my response date. And if that date is greater than or null.
1:59:19 Joel Frick (6124): Null if it's, you know, past today. Then those are going to be. Past due. Now, what my engineer is doing between now, since it's October 1st, actually, between now and October 8th, we just sent out the, uh, due date for making adjustments.
1:59:36 Joel Frick (6124): What my engineers are doing right now is going in and trying to clean this up. So, for example. You know, Skyler has this one that was due yesterday.
1:59:44 Joel Frick (6124): She may be deciding that she's going to give some extensions here. You know, based on, you know, supplier responsiveness or whatever criteria she's using.
1:59:53 Joel Frick (6124): And, uh, she may be going to move these dates out. So I'm not taking the snapshot right now. I'm going to take the snapshot on the 9th, actually.
2:00:01 Joel Frick (6124): Uhm, and then it's going to be based on those due dates and the response dates. Uh, okay. This is each one of these rows.
2:00:11 Dave McLean: Uh, like PPAP, uh, ID 5871, and then the follow on PPAP ID 5871. Those are tasks within 5871. Yep, yep, those are the individual requirements of 5871.
2:00:25 Dave McLean: So we would, we would actually do something similar here. In my mind, anyway, we would do something similar here. When you set up each KPI, the first question that you're going to answer when you're setting up the KPI in the back end is what kind of KPI is this?
2:00:39 Dave McLean: Is this a direct data entry one where somebody has to physically enter a value? Or is it a query that we're going to run?
2:00:47 Dave McLean: If it's a query, then you continue, just like the direct entry, you define the name of it, the target, all the other stuff that comes along with it, just to be able to frame up what it is.
2:00:56 Dave McLean: But then you get into the actual parameters of how to query the data, where you're going to connect that KPI to a report that you would have been built in the back, or that you'd have to build in the background.
2:01:07 Dave McLean: And that report is actually going to look almost identical to this in terms of tabular layout. The only other thing you probably add is the task ID that comes along with it.
2:01:16 Dave McLean: That report would then be grouped into a table that looks like the one on the left. Basically the number of overdue tasks per supplier for that month.
2:01:32 Dave McLean: At the designated date and time, the day that the front-end view gets created, so the 10th, let's say, or the 9th, not only will it generate the KPI record, it'll then fire the report and import the results into each individual KPI.
2:01:48 Dave McLean: So the point is. In the process that you go through, where this report is a front-end for you to be able to figure out what you need to do to do direct data entry, you wouldn't have to do that.
2:01:56 Dave McLean: You would just build the report once. You focus more on, you know, all of the task extensions. Like, you focus more on the actual data itself, and then come the 9th, the report fires, and it snapshots everything at that point in time.
2:02:13 Dave McLean: Now, I think the other side of that, though, is that now there's, you know, we've done a snapshot. It's possible that, hey, there's still some pending extensions.
2:02:20 Dave McLean: that we have to apply. And so, when everybody starts looking at that, uh, at those, uh, snapshot KPIs, and reviewing them, and realizing, oh, you know what, actually, there's a supplier, a, there's still a bunch of things we need to change.
2:02:34 Dave McLean: So, it was showing 10 overdue. They really should be not have any, because we've already agreed to these things. You go and change the data, and the idea would be that, uhm, during that data entry period, if there's somebody who owns that KPI, even though they don't have to enter the data, they could
2:02:53 Dave McLean: still go in and say, 
2:02:53 Joel Frick (6124): you know what, I want to refresh the data. Okay, so like, so that's what we're talking about between. There's two windows here.
2:03:06 Joel Frick (6124): There's one window that I give my SQL. QA engineers to say, okay, hey, FYI, it's the first of the month.
2:03:13 Joel Frick (6124): Uh, make sure you go in and make sure all your data is clean before we snapshot it and send it to Jesse is basically what you got in that in that window.
2:03:21 Joel Frick (6124): There is no scorecard yet, right? And then and then there's a second window. Where there's still no scorecard where Jesse is now processing all the data that he's receiving from all these different departments between the 8th and the 15th.
2:03:35 Joel Frick (6124): And then the 15th is when we, you know, we say, oh, but now it goes there. 16 is when we publish now it goes to the 16th.
2:03:44 Dave McLean: The 8th to the 15th window is the data entry window into the scorecard, right? That's when that's when the person at SIA is taking all this data that they've collected in this case through the Power BI report and plugging in the results into the results for each supplier into, whether it's an access 
2:04:01 Dave McLean: database or a spreadsheet or whatever it is for that month. They're the ones that are actually going in and saying, OK, my report says A102 has 1 overdue, so I've got to plug that into the into the scorecard in that number.
2:04:13 Dave McLean: That window, so I would say at the start of that window that in intellect, that's when the scorecards get created for that month or for the prior month, I should say, and in that same moment for all of the query based KPIs, we run the calculation at that point, so we have it in that moment, but all those
2:04:32 Dave McLean: queried KPIs are also displayed to the owner, like if they would all be owned by somebody for the purpose of data entry and initial review, so let's say you have You five KPIs assigned to you, three of which are data entry KPIs, and one of which, or sorry, and two of which are query ones, you would see
2:04:53 Dave McLean: all of those KPIs for all the suppliers, you'd be able to review them in that moment as the person doing data entry along with all the other stuff, and if you happen to notice mistakes at that stage, because, hey, there's still some extensions that need to be formalized in the system, you'd be able to
2:05:08 Dave McLean: , you know, make sure that all that stuff happens, and at any given point in time, you'd be able to say, refresh query data, right, but it's got to be somebody clicking the button to go to it, to tell the system, hey, go refetch the data from the source tables in order to make sure that everything's 
2:05:23 Dave McLean: accurate. When you get to the end of that data entry period, and you're now into your two-day review window, for, I think it's the same basic concept, if in the end that two-day review window, there's still some additional changes that are being made to the September due dates, pushing them into October
2:05:42 Dave McLean: , then, cool, we can still run, 
2:05:44 Joel Frick (6124): you can still run the query. Okay. So. So, so then the scenario that brought me to this page was now the scorecard has been published, and the supplier uses this, this great new tool of looking up who's responsible for, you know, the PR card, sorry, the PR PAP, uh, KPI, and they say, hey, Luke, I had
2:06:11 Joel Frick (6124): a, I had a past due, you know, I'm, I'm A102, I had a past due, it should not have been past due, I have an agreement, and then we go and do the research, and we agree, and we say, well, actually, yeah, you're right.
2:06:22 Joel Frick (6124): Uhm, it, it shouldn't have been past due, we make the adjustments, SQA is making the adjustments in the actual due date, say, okay, you, you did this per our agreement, we're on time, now, this one goes to a C.
2:06:38 Joel Frick (6124): 0, which means I get all my points on the scorecard, how do I, how do I do that just for A102, and say, 
2:06:46 Dave McLean: you find, you would go find the scorecard record for A102 for September 2026. You find that specific 
2:06:56 Joel Frick (6124): KPI, click refresh. You discreetly. For scorecard. For 
2:07:01 Dave McLean: that one, not even for that one score, like, in my mind, the scorecard is the collection of KPIs for one month for one supplier.
2:07:08 Dave McLean: I would actually go and say, it's for one month. One KPI for one scorecard. Like you wouldn't run. You wouldn't run that for all of the other KPIs.
2:07:17 Dave McLean: You would just run it for. Has to PPAP tasks and it 
2:07:22 Joel Frick (6124): can still look at the same window of data where it's not done. I get confused by, you know, now I've got past due for October and there's even more, right?
2:07:37 Dave McLean: That's fine. That's fine because it's comparing a date property on the scorecard. September 2026. To the filtering in the report, the report filtering is basically saying only pull the results for rows that match the supplier, the KPI and 
2:07:55 Joel Frick (6124): the date range. Makes sense to me. So, I guess, I don't know if the question was answered, though.
2:08:13 Joel Frick (6124): If you modify. Let's say the supplier, it's past due, and the supplier didn't notify that they needed an extension till a week after it's past due.
2:08:27 Joel Frick (6124): So, it's still their fault. They should still get DMV. But, SQA does grant the extension until October. We still want the September scorecard to show the date on the 
2:08:42 Dave McLean: October scorecard. That's, that's why we're not running that re-fetched date. It's a data job constantly in the background. That's why, like, basically once you lock it in, you specifically have to pinpoint a specific record to run that off of, because most of the time, once the review window is closed
2:09:01 Dave McLean: , even if the, even if the issue is a mistake, the fact that nobody caught, like, nobody bothered to raise the mistake until after the review window was done, like, that is, 
2:09:12 Joel Frick (6124): that is the ding in and of itself. And that, but then on the flip side of that, there are cases, we, this doesn't happen too terribly often, but there are cases where we say, hey, I'm looking at the September scorecard.
2:09:29 Joel Frick (6124): And when I started digging into that, I realized I also got, uh, uh, messed up on the my August scorecard.
2:09:36 Joel Frick (6124): I want to go and, and I want you to make all these adjustments to August and September. We don't normally do that.
2:09:44 Joel Frick (6124): I mean, there are some special circumstances where we realize, yeah, we made a mistake. Same, same thing though, right? I'm going to go back.
2:09:51 Joel Frick (6124): To my August scorecard for that KPI. Refresh that specific KPI. Now I'm good. Right? Yeah, I have to make that command intentionally.
2:10:04 Joel Frick (6124): You got it, yeah. 
2:10:05 Dave McLean: And there's a number of different ways that we can, we can sort of bind that parameter. I think the first is the automated job that runs when the scorecards get generated and runs throughout the data entry window, because I get to see that running every day.
2:10:21 Dave McLean: It should only be running Hmm. For scorecards that are still open in that case. Once the thing is closed, that's when you kind of move into exception level data fetching where you like the user has to specifically go to a specific supplier scorecard for a specific month and look at a specific scorecard
2:10:39 Dave McLean: . Specific KPI. In order to refresh that, it's deliberately harder to do it that way because you don't want the system.
2:10:48 Dave McLean: Constantly overwriting prior results as you go forward, right? Right, and I think the KPIs need to be different. Defined in such a way that, like, it recognizes, uhm, date comparisons.
2:11:01 Dave McLean: So, for example, if, uh, you know, we know there's a due date field on the task, and let's say, you know, the due date, the due date said it was due on September 30th, uhm, and it wasn't completed by that point, and you go in and, like, it says, okay, there's one overdue PPAP when it runs, and midway
2:11:23 Dave McLean: through the window, you realize, you know what, actually, uhm, we do, we, we had approved the change. To that record, so we're going to move it forward into October.
2:11:32 Dave McLean: Great, awesome. Now, when everything gets confirmed, it, it, it drops off the report, because that, uhm, that scorecard is still open.
2:11:40 Dave McLean: We're still using the workflow status of the scorecard to, to keep a key into what, which ones we should be refreshing automatically.
2:11:48 Dave McLean: Once that scorecard is closed, let's fast forward a month into October. And so we get to October, and the date says October 10th or something like that.
2:11:57 Dave McLean: Uh, the task is still not done. And so we, we now look at that as an overdue, overdue task. And this time, when the supplier reaches out and says, hey, no, you know, I want an extension on this, this is where you now say, no, you know what, you should have raised that before it went overdue.
2:12:13 Dave McLean: You're still going to have the ding for October. That's totally OK. The catch, though, is that in that window, if you change the due date to November, I suppose this means that you have to have some capability to override whatever is being snapshot, because if, if that is coming up during the data entry
2:12:35 Dave McLean: window for the scorecard, and you're going to say, no, I still want you to be dinged, even though now I'm going to change the due date, so that it at least shows correctly in the system going forward, you'd need to be able to show the due date.
2:12:48 Dave McLean: Ding, in spite of the fact that you, you know, you now have a planned date for when this thing is going to happen.
2:12:56 Dave McLean: Does that scenario make sense? 
2:12:59 Joel Frick (6124): Yeah. 
2:13:00 Dave McLean: So, how, like, if, if, uh, if the system says zero, but there's an override capability to, you know, basically say, no, you know what, you did have an overdue task.
2:13:13 Dave McLean: It's just that we've subsequently updated it, uh, during, but still during the review window. Is there. Does that cause problems from a, like, is it that every time you put in the override, when you override whatever the auto snapshot data is, you have to put a comment to say why?
2:13:36 Dave McLean: it too complicated now to have this sort of auto snapshot, it knowing that this is the behavior that it's going to take.
2:13:42 Dave McLean: Like, it's going to, it's really trying to take the data as it sees at the moment that job runs. Are, are you asking if, 
2:13:50 Joel Frick (6124): if the data reflects zero points, but we manually change the actual score to five points? Do we need to have a comment box or something like that?
2:14:01 Dave McLean: Or vice versa. If the, if the data says five, it says they, they achieve the KPI to the fullest extent.
2:14:08 Dave McLean: But in actual fact, the only reason for that is because you made a change to the data after having a conversation with the client or with the supplier telling them like, no, I'm going to, I'm going to ding you in, in October because you didn't do the thing you needed to do.
2:14:22 Dave McLean: I'm just going to change the data moving forward. So that we, we know what to expect from you at this point.
2:14:29 Dave McLean: In that scenario, if you change that, that data point, the due date, for example, while you're still in the scorecard review window, the system can't differentiate the concept of you doing the still saying, no, that was overdue at that point, unless you override it and say, I'm going to give you zero
2:14:47 Dave McLean: points for this. Because there's that, there's that window of data entry where the system is trying to, it's just trying to constantly get you at the latest version of the data from the tables.
2:15:04 Joel Frick (6124): So I mean, from my standpoint, we want the score to 
2:15:08 Dave McLean: always reflect the data. So in the scenario we're describing here, where the, the, the review window has caused the supplier who looks at the data and said, you know what, uh, I, I, we, we didn't request this extension last month, but we should have.
2:15:35 Dave McLean: And you say, okay, well, you should have, but you didn't. Now we're going to give you the extension. Because you're telling us that you need an extension, and we agree that it can take longer.
2:15:44 Dave McLean: So you take that due date from October 10th and you push it to December 15th. But you do that during the window that the system is constantly refreshing the data from the source tables.
2:15:59 Dave McLean: Then, in actual fact, what you're doing is you are changing the date and you're pushing it forward and that will be, that, the fact that it's no longer due in October will be reflected in the October scorecard, in this case, in a very positive way.
2:16:25 Dave McLean: If, if you're really looking at the data, there is no version of, uh, hey, you know, we're going to ding you for this one, and then we're going to move it later on.
2:16:34 Dave McLean: Like, you'd have to wait until you're past the data entry period 
2:16:38 Joel Frick (6124): to change the due date, essentially. I see. Okay, well, I, I do think there's value in having that function to manually change the score to have it not reflect the actual data.
2:16:57 Joel Frick (6124): Okay. But, uh, uh, when you're asked, you asked previously if we'd want something kind of review process for that, or, or, or at least 
2:17:08 Dave McLean: a comment, I think is, is warranted if you're gonna, if you're gonna use the override, uh, for specifically for the ones that are .
2:17:20 Dave McLean: auto queried from whatever data points and intellects, if you're gonna, if you say, no, you know what, the, the auto queried value is incorrect based on how we're interpreting whatever real business problem is happening here.
2:17:36 Dave McLean: That's cool. That's the kind of stuff happens. So you just, you, you should be able to override the result that the system queried, but you must post a comment to that result to be able to, 
2:17:47 Joel Frick (6124): to justify why. Okay. Yeah. I think. That feature doesn't hurt or help anything. I think, uh, I think it would be a nice feature, but not 
2:18:00 Dave McLean: necessarily needed. Uh, and I will, it will 6 months later when everybody's wondering why it is that. Uh, why it is that October says that we got dinged for an overdue task that isn't over that wasn't doesn't look in the 
2:18:17 Joel Frick (6124): data like it was overdue. Yeah, yeah, it's a good point. I guess generally, uh. I would have that record on email or I'll take I'll I'll.
2:18:28 Joel Frick (6124): I do make a note in my Excel files that the data is rooted so that's narrow. Yeah, I guess that comment box would be helpful 
2:18:39 Dave McLean: for record keeping. OK. I mean, I'll ask the question, or does this expose that maybe there maybe it's flawed logic at this point to assume that any of the data that goes into the scorecard should be automatically captured from a source table?
2:18:56 Dave McLean: And instead should go through that kind of human layer of, hey, I'm going to query the data, I'm going to interpret it, I'm going to talk to everybody, I'm going to re-query it again.
2:19:05 Dave McLean: But, like, ultimately, it's a human that's really making that decision for every individual record what goes in. Because we don't have to do the autopsy.
2:19:12 Dave McLean: No, 
2:19:14 Joel Frick (6124): I think we need the auto-capture, there's way too much work involved with the individual. So, uh, I guess would that comment be visible to suppliers?
2:19:29 Joel Frick (6124): Or, can we make that only visible to the USA? It's up to you, yeah. Okay, okay. How do we make it private?
2:19:39 Joel Frick (6124): Yeah, yeah, I would prefer private, because we don't want, uh, I guess I wouldn't want… a supplier to know that we can manually adjust.
2:19:48 Joel Frick (6124): Does that make sense? We typically want suppliers to know that these are formula-driven or data-driven, so we don't want them to know that we can manually adjust.
2:19:59 Joel Frick (6124): So, for that, uh, we would let 
2:20:01 Dave McLean: the comment box to be private. Okay. Yeah, no problem. I think, I think the way that we'd probably implement this is that the underlying forms and data records that people can see, uhm, that's probably just an SIA thing.
2:20:16 Dave McLean: I think what the supplier sees is likely just a series of charts or reports that are linked out, but, you know, they're, they're pretty static, so you imagine, like, they log in, uh, they, they click on a given facility or parent company profile that they have access to, and, you know, right up at the
2:20:32 Dave McLean: top, what they see is a, you know, very the aggregate score for the month, uh, perhaps they see that with a, a bar chart for the year or something like that, or a rolling 12, so they can see how they're doing.
2:20:41 Dave McLean: And then perhaps it's, uh, like a matrix or something like that, that shows them or, or a, uh, bar chart like a, a horizontal horizontal bar chart that shows them their respective scores by section.
2:20:56 Joel Frick (6124): After that, if they 
2:20:57 Dave McLean: want to get into, yeah, if they want, like, I would say, like, show them the, uh, the quality score and overall score.
2:21:03 Dave McLean: Uhm. Oh, I see. Okay. So they're used to, they're used to seeing it like this. 
2:21:10 Joel Frick (6124): Yeah, this is the second page of the scorecard. It's a rolling, uh, 12 marks. They get all three pages, right?
2:21:16 Joel Frick (6124): Every, every month. Yep. Okay. So it would likely be, 
2:21:19 Dave McLean: uh, instead of showing them much on the score, on the whole page. Um, what we do, there's enough here that we'd probably just link out to a dashboard, that they, on the dashboard, the only thing that they would be able to sort of slice and dice and filter off of is the supplier, uh, like, parent company
2:21:38 Dave McLean: . company or facility that they have access to. In most cases, it's only going to be one, so if I only have access to A315, then that's it, but if I have access to two or three different facilities within, within that company, then I'd be just toggled back and forth to whichever, whichever facilities
2:21:53 Dave McLean: I can think of. So if 
2:21:56 Joel Frick (6124): and it would regenerate a Okay, yeah, that sounds perfect. 
2:22:06 Dave McLean: Cool, now if I look through the actual 
2:22:20 Joel Frick (6124): Right, so all the data points on this in 
2:22:21 Dave McLean: August are exactly the same as, uh, first page. Okay, so when we say quality score, uh, like, on the left there, it says 48%.
2:22:29 Dave McLean: Can I assume that that is 48% of the 100% that is the full scorecard value? Is that how I should take that?
2:22:40 Dave McLean: Like, uh, if I take 7, yeah, 7.8 plus 48 is 55, 26 and 19 is 45. Yeah, so, okay, so it adds up.
2:22:53 Dave McLean: So the quality score is simply the sum of the scores that were attributed to the what, seven quality KPIs for that month.
2:23:02 Dave McLean: Got it. Whereas the overall score is. All categories. And that's factoring in the weighting across them. So whereas the quality score is 20 percent of 48 percent, is that, is that the way to read that?
2:23:20 Dave McLean: So in actual fact, they got, what is it, five, five, they got 15 out of a possible. 
2:23:31 Joel Frick (6124): You're looking at the… I'm just trying to figure, I'm just trying to 
2:23:34 Dave McLean: figure out where for, uh, September 2025, uh, if I, if you look down towards the bottom of the column there, the quality score of 20 percent, 
2:23:42 Joel Frick (6124): how do we calculate that? So that's, uh, you sum up the points, like you said, so 5 plus 5 plus 5 divided by the total amount possible.
2:23:54 Joel Frick (6124): The total amount possible for quality. For quality. For quality, okay. 
2:23:59 Dave McLean: So it is 20 percent of the possible quality points. That you could have gotten, whereas the overall score is the sum total of the points across all categories divided by the max points available across all categories.
2:24:14 Dave McLean: Yes, the total possible points are 
2:24:17 Joel Frick (6124): on the front page here. 
2:24:19 Dave McLean: God, a PPM is worth a lot. That's where I was thinking they were all worth five. Didn't realize that. OK, the weighting is pretty significant for for 
2:24:29 Joel Frick (6124): that category in particular. The third page is probably the most helpful today back here. Actually. In this term, because. That actually breaks down how exactly we score everything.
2:24:42 Joel Frick (6124): OK, alright, so. 
2:24:49 Dave McLean: OK. OK, so the first kick at this the way we're going to do this is when we once we built the framework out the first kick at this is going to be that every one of these is just a direct data entry.
2:25:03 Dave McLean: KPI you you enter in the points and then. That model would assume that you are essentially everybody is essentially doing the same thing that they do today in order to figure out how many points to attribute to any given supplier for any given month.
2:25:19 Dave McLean: Then, once we've built it out and we've got the list of KPIs in the system set up. that way, we would then go through and, uh, identify which of these ones the data lives in Intellect and is a candidate to make a query-based KPI.
2:25:40 Dave McLean: That make sense? 
2:25:42 Joel Frick (6124): Yeah. 
2:25:43 Dave McLean: Okay, so if I'm looking at most of these ones here. Sorting cost isn't something that's going to be there. Change point management is not going to be based on PPAPs generated by drawing change or PPAPs.
2:25:56 Joel Frick (6124): Probably, maybe it would actually be. So during the first portion of this meeting, I actually made a little cheat sheet here.
2:26:07 Joel Frick (6124): Love it. So, this is just my assumptions here. Uh, these two safety categories I would want.
2:26:24 Joel Frick (6124): So currently they're outside of, well, yeah, they're outside of our current quota. Quality system, but I would hope to do some kind of a task system, like, uh, a task given to a supplier on Intel X for these two safety categories.
2:26:39 Joel Frick (6124): Yep. PPM, uh, PRC, which, uh, I don't think we've talked about yet, and then, uh, Changepoint Management, which is PPAPS.
2:26:51 Joel Frick (6124): These are already going to be in Intel X. Sorting cost, I assume, would be a data upload. That's, uh, data that we get from a third-party company.
2:27:04 Joel Frick (6124): Uh, recall is, uh, is actually a blank score. Uh, this is actually a deduction. 
2:27:14 Dave McLean: If they have 
2:27:15 Joel Frick (6124): recall, then we deduct. Points instead of giving points. So I assume this would be a data upload, a manual adjustments.
2:27:24 Dave McLean: Uh, yeah, so when we say data upload, like I don't mean that that's not going to be from an Excel file.
2:27:30 Dave McLean: That's the users going into each. Each one and entering the value that they need to. They got to figure it out elsewhere, but whatever the whatever the points 
2:27:38 Joel Frick (6124): are, they're going to enter that way. These are. So in that particular one, Jesse probably wouldn't even be a data upload.
2:27:47 Joel Frick (6124): That'd be like a direct entry, right? Because, first of all, recall, fortunately, is exceedingly rare, right? So it's going to be like one supplier or maybe two suppliers total, and we do it once.
2:28:01 Joel Frick (6124): It's not like you have to go in and do it every month, go in and do it once, and then do it, and take it out.
2:28:05 Joel Frick (6124): Yeah. So, so, I guess, sticking with recall, Dave, uh, the penalty is, uh, minus 35 points for 24 consecutive months, What do you I have, can you, can we do that one time?
2:28:25 Joel Frick (6124): Or do I have to go in there? You'd have to carry it through every time. Yeah. We'd have to go in there and, uh, carry it through, you Yeah.
2:28:34 Joel Frick (6124): Sure. So you could do it once and say, this lasts for 24 months, and then he doesn't have to do it 23 additional times.
2:28:44 Joel Frick (6124): He just does it once, and then it automatically can come off in 24 months. Does that work? 
2:28:53 Dave McLean: Sorry, no, sorry, you guys control what data goes in. So if you need to carry that forward by 24 months, then you need to carry it forward by 24 months.
2:29:05 Dave McLean: Like, there's no data upload, there's no connection. It's a discretely managed by month program, the way that it's conceived here.
2:29:18 Dave McLean: So, if the presence of a recall in this context, without having, um, and I say this without having a separate form for logging the fact that there was a recall and a specific date, and therefore a different query that can look at it and parse it in that fashion, And if it's a direct entry kind of thing
2:29:39 Dave McLean: , then in that scenario, it could be. If you have to enter it every single month for the duration that it's going to hit 
2:29:46 Joel Frick (6124): the supplier scorecard numbers. OK, so then you can 
2:29:51 Dave McLean: graduate, which you can graduate to later on, which is a that's me saying that this is not in scope, right?
2:29:56 Dave McLean: We're not building it. There's no scope of work here that that covers this building a log or a tracker or something like that for recalls for any of these other pieces to store that data in intellects.
2:30:07 Dave McLean: If it's not already part of one of the in scope apps, but you could down the road go and build out a.
2:30:13 Dave McLean: A warranty recall or sorry, a recall or service campaign log or report. It doesn't have to be something super complicated, but something where either the supplier themselves or you log a recall against that supplier account with some basic data.
2:30:29 Dave McLean: Most particularly, the date of the recall. And if you're going to go that level, then I'd suggest adding a workflow around it so that when it gets logged, somebody at SIA is deciding whether that thing is worth triggering this recall.
2:30:45 Dave McLean: If it's ding on the scorecard, or is it something that has no bearing on what you're doing, like, just in case the supplier logs something that's wholly irrelevant for you guys, then, you know, whatever business logic you couch that in, you would change this KPI from a direct-entry KPI to a query KPI
2:31:04 Dave McLean: , and your report is what's going to handle all the logic to decide whether that thing gets carried forward for X number of months.
2:31:12 Dave McLean: So each time your report runs, it's not just looking at data logged for the last month. In this case, it's that report would be looking at last month and the prior 
2:31:21 Joel Frick (6124): 23 months. So Dave, you mentioned in-scope apps. I've got an idea for this. Anytime we have this level of issue, a recall or service campaign, that is, is, it will be associated with a PRC or a WCAR.
2:31:41 Joel Frick (6124): 100% of the time, it will be one of those two things. Therefore, I believe I could have a field on it.
2:31:49 Joel Frick (6124): A PRC and a WCAR have it point to the same field in the database and say, is this a recall?
2:31:58 Joel Frick (6124): And therein lies 
2:31:59 Dave McLean: the, why I started this with, hey, the first kick at this, we're going to create all of these APIs. As direct entry KPIs, because today, if you think about all of the stuff that has to go into making sure that we could capture this stuff from any given place within Intellects, it's a function of, first
2:32:20 Dave McLean: of all, functionality that hasn't been built yet. It will still be built later on, so even if we decided to set up the KPI right now, there's no way to build a report on a thing that doesn't, on a field that doesn't exist, for example.
2:32:31 Dave McLean: Moreover, stuff like this, where you know what, as you start thinking about the KPI need and how that's going to best align, perhaps there is a way that you could incorporate this in with a relatively small change, like just adding a field to be able, or adding a classification to the PIR category of
2:32:49 Dave McLean: NCR, right? And then that way it is something that gets logged. Again, I want you to think through the business logic of that, like, you know, if there is a recall, is that something that you guys are logging against the supplier, or is it the supplier would be logging it because they are the ones initiating
2:33:07 Dave McLean: the 
2:33:07 Joel Frick (6124): recall, or could it be both? Yeah, we have to 100% control the recall in this context, so, uhm, it would always be us, but to your point, everything is, is direct entry to start out with.
2:33:23 Joel Frick (6124): You got it. And I guess what maybe took two years to use the existing categories that you have on there, Jesse, I would say, make this an add intellects question mark sort of category, because, uh, I think that's where it belongs, because it will always be, it will necessarily be, related to either a
2:33:44 Joel Frick (6124): WCAR or a ERC. So, Dave, are you saying that, uh, so, like I said, sorting cost is third party company, we get dollar amounts from.
2:33:58 Joel Frick (6124): Are you saying we can't use, like, a spreadsheet or something to, to push data into, into Lex, or do we have to manually go to supplier one by one and add the dollar amount, and then it… You have to manually add it.
2:34:16 Dave McLean: The reason why is the import tool, first and foremost, is an admin licensed tool. So, unless you're going to give everybody who's doing this a system admin license, which greatly expands the number of people that can access it, then you're, you're… you know, beyond that.
2:34:31 Dave McLean: Beyond that aspect of it, though, even if you did that, the import tool is not something that is bound to a specific record.
2:34:39 Dave McLean: So, if we give you access to the import tool to upload a list of data points into the system, uhm, that are meant to, you know, add whatever scores or values in bulk to a given scorecard month for a whole bunch of suppliers, if you get one value wrong in the spreadsheet, you could potentially be updating
2:34:58 Dave McLean: other records in intelex. It's not a, it's not at the meant to be a user facing business loader tool. It's meant to be like an IT focused admin or developer bulk loading tool that gets used for like legacy data migration, uh, or for configuring batch jobs that run in the background.
2:35:18 Dave McLean: Like the query capture that we're talking about. So if you wanted to have something for sorting cost, the answer isn't to upload it directly into the scorecard.
2:35:28 Dave McLean: The answer is to create a place in Intellects that stores sorting cost raw data. That is detached from the scorecard so that when you're like, even if you were loading it, or you had a designated admin who you send this spreadsheet to and they bulk loaded in that it is as low risk from a technology point
2:35:47 Dave McLean: of view as possible. It just goes in. Into its own data table, and the KPI is a query KPI that looks at that table.
2:35:56 Dave McLean: That way, if you screw it up, which happens like I screwed one of these up myself yesterday for another client, it will happen at some point.
2:36:04 Dave McLean: The damage is limited to that. It's limited to, oh, shoot, we have to reload that list of sorting cost records or whatever it is that we're talking about, and then refetch the data into the KPI.
2:36:14 Dave McLean: We're not at risk of overwriting data in a KPI where it might not even be 
2:36:19 Joel Frick (6124): obvious that that happened. Kelsey, can you go to, to your Excel spreadsheet, because you're, you're doing this in kind of a line-item format, and then it populates kind of automatically into these individual scorecards.
2:36:37 Joel Frick (6124): And I think this is where we kind of bridge that gap, potentially, where we could say, for, for the, for the launch of this, we can say, okay, one scorecard is ready.
2:36:46 Joel Frick (6124): Now we send a, a file to Kaiser, once a month, and say, okay, admin Kaiser does the. Full upload for the scorecard, until we get all of these different apps and applications launched, and we can even have an app administrator subloading.
2:37:06 Joel Frick (6124): Sure. Yeah, we think about that. That has a potential. So our solution here are you asking for my overall? Yes, or yeah, there's a messy spreadsheet.
2:37:18 Joel Frick (6124): Just show me the show me what you got. See what we can come up with here. I think. I think Dave can handle a mess.
2:37:33 Dave McLean: Just to be mindful of time to for you guys to grab lunch, we're going to wrap in five minutes, even if we're mid word.
2:37:38 Dave McLean: Okay, yeah, 
2:37:39 Joel Frick (6124): yeah, we So this is the actual, oh, can't see So this is the data that gets, uh, this is the spreadsheet that, uh, the scorecards are generated from, uh, oh, sorry, it's blue.
2:38:14 Joel Frick (6124): So the idea would be, if we could send this format to whoever the admin is. And say, okay, we're ready to do our August upload.
2:38:34 Joel Frick (6124): You'd have to pivot it, just so you know. 
2:38:37 Dave McLean: And you're saying specifically the sorting cost piece. With respect to this KPI, 
2:38:42 Joel Frick (6124): specifically the sorting cost. Well, I guess what, what I'm getting at is if, if, if it's possible to stand up really quickly, relatively quickly to just say everything is an input right now without even looking at to launch to get us to get us going.
2:39:02 Joel Frick (6124): Without even looking at the, uhm, I can't remember what you called it, not direct entry, but from the system, you know, the link to the system.
2:39:13 Joel Frick (6124): And then I basically Jesse's job is unchanged from current other than, you know, instead of sending a folder to Jerry Brown, he sends this file to, uh, Pfizer, whoever the admin is.
2:39:30 Joel Frick (6124): Can we take an upload like something similar to this or something that maybe is reformatting? Yes, your question is, let's just go with manual entry but have the ability for SIA to do this once we get going, have a setup to do this.
2:39:46 Joel Frick (6124): Is that what you're saying? No, I mean, I mean just like for, for… the upload that, that Dave is talking about to take this line item for Elsa and say, okay, here's my scorecard for Elsa because I have all of my actual points already listed out here 
2:40:05 Dave McLean: cleanly. What is it that's generating this like whole 
2:40:13 Joel Frick (6124): bunch of manual inputs? Uh, it's a bunch of VLOOKUPs into VLOOKUPs into 
2:40:19 Dave McLean: VLOOKUPs. Yeah. Okay, so, if you wanted to do bulk entry like this, using, looking at your spreadsheet right now as it exists, every cell of that table would require a different row in the report.
2:40:44 Dave McLean: You'd have to fundamentally change how this is getting generated. You would need one row per month, per supplier, per KPI.
2:40:53 Dave McLean: So, instead of running this as a, like, like, visualizing it as a matrix, which is what you're doing right now, because it has to be tabular in order for the system to key into everything.
2:41:04 Dave McLean: That ELSA LLC one, that would be, what is it, 12 records for the, for the date range that's shown there.
2:41:11 Dave McLean: 12 rows that you'd be loading into the system. 
2:41:16 Joel Frick (6124): I think in our scenario, we would just add one month at a time, right, so. 
2:41:20 Dave McLean: Okay, so what you're really saying is you're not taking this file, you would be building an import template using this file.
2:41:27 Dave McLean: And that import template would have to be a good deal more normalized to use database terminology in this case. So, what you could do, for example, is copy column A and B, you're going to need the supplier code, your column C is going to be the date or the month that you're trying to load the data into
2:41:49 Dave McLean: , and then you're going to copy whatever month column stores the value that you're trying to load into the system, and recaption it as value or something like that.
2:41:59 Dave McLean: Then you would load the data and that into the table. So that this, and I'm sorry you'd have to have one more, which would also be which KPI is it that you're doing.
2:42:08 Dave McLean: So that way if you were trying to do one month's worth of data. Across 500 suppliers. Across 5 KPIs. Right, 5 KPIs times 500 suppliers.
2:42:22 Dave McLean: You're going to have 2500 rows in that with every row referencing a single month, single KPI, single supplier and a value that aligns with that.
2:42:32 Dave McLean: You load that in your KPIs in the scorecard module are going to be set up with queries where they are looking at a report that looks at that raw data table and is comparing filter values on the KPI to values in the in that report.
2:42:50 Dave McLean: So when it generates and goes to select which records it needs to pull through and sum onto that KPI, it knows to look for the locat- the, uh, the supplier that's referenced on the individual scorecard that we're trying to populate.
2:43:02 Dave McLean: Go look for that one in the in the, in the, uh, the report in IntellX that's pulled from your raw data table, then filter it even further based on the month of the scorecard that we're trying to populate, then filter it even further for the specific KPI that you're trying to calculate, and run that logic
2:43:19 Dave McLean: over and over and over again all the way through the list of all the, all the individual KPI records that need to be populated for 
2:43:25 Joel Frick (6124): that month for all suppliers. And it can do, it can 
2:43:29 Dave McLean: do that. It's just, the thing that I'm, I'm trying to be cognizant of here is, like, is that actually the best way to do this?
2:43:36 Dave McLean: Versus all of the work that would be happening outside of the system to generate this file, like, is it possible that that work just happens and the user, instead of plugging it into an Excel file, they just plug it into Intilex and we give them a view, like, if, You know, if you have one person that's
2:43:54 Dave McLean: responsible for all sorting KPIs, then we give that person a task that has all of the sorting KPIs for all suppliers.
2:44:06 Dave McLean: Maybe it's not easy that way. You said it's all based on one off of VLOOKUPs and XLOOKUPs, and so we're cobbling this together from other sheets.
2:44:14 Dave McLean: Yeah, so if you 
2:44:15 Joel Frick (6124): need to have offline conversations, that's fine. That's an acceptable answer. Uh, yeah, I think we need to have some more discussion.
2:44:25 Joel Frick (6124): Uh, as our materials, for example, our ANTS system, I don't know if anybody's talked to you about ANTS, but from what I understand, they just pull the, like, the percentage of deliveries on time.
2:44:41 Joel Frick (6124): And then they put that into a spreadsheet. So that seems, uh, the way you're explaining one by one seems like a lot more workload than what we currently do for all of our stakeholders.
2:44:55 Joel Frick (6124): So let's put a pin in this one, Dave. Think about when you would like an answer from us, and then maybe after lunch you can let us know, and then we'll think and get back to you.
2:45:06 Joel Frick (6124): Sounds good, sounds good. 
2:45:09 Dave McLean: Let's start up again a quarter after one, OK? OK, thank you. Thanks, guys.

