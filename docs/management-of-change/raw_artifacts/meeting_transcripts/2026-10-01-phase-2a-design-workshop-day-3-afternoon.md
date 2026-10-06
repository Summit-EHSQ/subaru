---
meeting-title: "Subaru | Summit EHSQ | Phase 2A Design Workshop Day 3 - Afternoon"
meeting-date: 2026-10-01
meeting-time: "1:15 PM ET"
timezone: America/Toronto
participants:
  - Brian Hensell
  - Dave McLean
  - Joel Frick
  - Keith Freeman
---

0:00:00 Joel Frick (6124): That is not a typo. It is not the PCRs we've been discussing. It's a separate item. Just to let you know.
0:00:11 Dave McLean: On the supplier. 
0:00:12 Joel Frick (6124): What does it stand for? PRABLA, PRABLA, PRABLA, PCR, Process Change Request.
0:00:55 Joel Frick (6124): Right. Just in case you saw. Yeah. In case you walked and thought it was a typo, it is not. They are two separate things that we, I think we have a direct department here that purposely puts acronyms close together 
0:01:07 Dave McLean: so we can mix them up, so. Sorry, this PRC piece, this is, you said that this is referenced in supplier scorecard or, or, Yes.
0:01:18 Dave McLean: as subcomp, OK. So it's like a, it's a KPI. Yeah, it's a KPI within quality where you 
0:01:24 Joel Frick (6124): see PRC, it is not the same as PCRs we've been discussing about the 
0:01:31 Dave McLean: last day or two, so. OK, no problem. I think, you know, the way that's going to play out, you know, given like we said before, for the purpose of the KPIs, we're going to create them all initially as direct entries so that we can stand it up and, you know, get people messing around and testing stuff 
0:01:45 Dave McLean: and make sure that we're aggregating scores correctly. And then for, you know, KPI by KPI basis, we'll start to target, you know, you know, where those come into, uh, queries from other intellects places.
0:01:57 Dave McLean: And, you know, again, the work you guys are doing in the room to sort of start to wrap your head around where eventually that'll live.
0:02:03 Dave McLean: That's great. I think the, the real, the plain reality is that some of this stuff at go live might be set up as manual entry values with a plan over time for you to add whatever capabilities are needed.
0:02:19 Dave McLean: So if we talk through the, you know, before we settled on the recall piece being something that's probably bound to a category or a classification or something in the, in the non-conformance objects.
0:02:31 Dave McLean: Before we settled on that, there was a world where it's like, well, maybe you create a form with a simple workflow for, for the reporting or for the logging of, of recalls against the individual supplier, and that's what you end up querying out of.
0:02:45 Dave McLean: I think the same thing could apply for a lot of different things where it's, hey, currently, we, we, the data comes to us by other means, but is there a world where that data is, the data starts getting logged transactionally in Intellects against new forms that you guys add over time?
0:03:04 Dave McLean: For the, for out of the gate here, the, the starting point, the thing that I'll ask for as a, as a takeaway from this one, the supplier scorecard again.
0:03:13 Dave McLean: For example, and ideally the spreadsheet copy, plus the one that you were hacking up in there to to start to target where some of the data would come and how some of it would get entered.
0:03:22 Dave McLean: If you could send me those after, after the call today so that I can reference them, that actually forms the basis of some content imports that will end up in doing in Intellects.
0:03:32 Dave McLean: Yeah, I can do that. That's awesome. 
0:03:36 Joel Frick (6124): You can just copy, rig it like so. You want that right now, Dave? Just, sometime today. Sometime today, yeah. Just in 
0:03:49 Dave McLean: case, especially in the Excel file, in case we end up making annotations or anything like that along the way with the conversation, uhm, then if you send it at 
0:03:56 Joel Frick (6124): the end, then, then we catch everything. I did think of something during lunch, Dave, that I wanted to propose. Could, can you, uh, so, like, on those, if we stick with the manual entry, uhm, can you default that?
0:04:17 Joel Frick (6124): To a 5 or something, because there's some categories where there's only, like, you know, 10 to 20 suppliers that are going to get dinged, so then that'd be a lot easier for the person doing the work to go to those 10 or 20.
0:04:38 Dave McLean: Yeah. Okay. 
0:04:39 Joel Frick (6124): Yeah, absolutely. Okay, I might be able to sell that a little better to some of the others. Yeah, and we might be able to put an API together internally, right?
0:04:50 Joel Frick (6124): Like, either RITT or something. There might be some ways to, once it's all set up, be able to do some things from your spreadsheet.
0:04:59 Joel Frick (6124): Okay. So, there's some things that we might be able to do internally that maybe it's not part of their contract.
0:05:06 Joel Frick (6124): Yeah, I've kind of scored with them on how as quickly as we can get things so he can set it up to find me.
0:05:15 Dave McLean: Okay. So, we've talked about the KPIs in the vein of each KPI can be direct entry or querying from another part of the system.
0:05:33 Dave McLean: Are there scenarios where one KPI draws its result from other KPIs that have been loaded in? For example, I'm going to give a slightly different context, but imagine, for example, that your safety KPIs that you asked the supplier to enter.
0:05:56 Dave McLean: Imagine you had a KPI where you asked them to give you the number of OSHA recordable incidents they had at their site.
0:06:04 Dave McLean: You asked them in a separate KPI for how many hours worked they had for that site for that month. And the third KPI that you would actually score and care about would be running a formula to get the TRIR, like, the OSHA rate.
0:06:18 Dave McLean: And, you know, again, hypothetically, imagine you're scoring it based on where it falls within certain ranges or something like that.
0:06:24 Dave McLean: In order to get there, Thank you. Scoring it is one thing, but, you know, you wouldn't be entering the TRIR in that case, the way I just described it.
0:06:33 Dave McLean: What you'd be doing is calculating the TRIR from other KPIs. Is that, is that something that's part of the program right now in any of the KPIs?
0:06:42 Dave McLean: You have where it's, uh, you know, the result is this KPI plus this KPI or this one divided by this one or something like 
0:06:50 Joel Frick (6124): that? Yes, exactly. Yeah. Sticking with your example. The safety, they, uhm, well, I guess we would expect them to do that calculation on their own, the recordable, the incident rate, uh, the incident rate, and then the lost time.
0:07:12 Joel Frick (6124): So they would already have that calculated. But I would take those data points and put them against their, uh, the, the industry average.
0:07:22 Joel Frick (6124): Yep. And if they're under the average, they will get points, or if they're over the 
0:07:29 Dave McLean: average, then they get no points. Okay, so as it is right now, the KPI is essentially, like, uhm, it's that, that, uh, first row of the safety section there, safety through accountability and recognition.
0:07:43 Dave McLean: So what, when, like, what you're doing outside of Thank you. Bye-bye. the scorecard itself right now is figuring out the number of points.
0:07:51 Dave McLean: And in order to do that, you're, you're running the numbers based off of their reported OSHA and LTIR rates that they've given you and 
0:07:58 Joel Frick (6124): comparing to the industry average. Yeah, I can, but do you want to see an example 
0:08:04 Dave McLean: of one of my templates? I, I think I can visualize something similar for that. Uhm, I get it. So in this case, as the scorecard is currently constructed, you're not actually entering the Thank you.
0:08:19 Dave McLean: Either the rate or the hours worked in the the number of the respective incident types into the scorecard. What you're entering is just the number of points, and you, outside of the scorecard, are calculating that using whatever other functions that you need.
0:08:33 Dave McLean: Yeah. Got it. Yeah, that's awesome. It's all 
0:08:35 Joel Frick (6124): in Excel formulas and VLOOKUPs. Okay. Essentially, yeah. So, so the suppliers, are they putting anything into the sheet? Or is the sheet being fed off of your other sheet that you have?
0:08:51 Joel Frick (6124): Yeah, everything in the scorecard right now is, is fed from my master file. And how many suppliers are there? 171 right now.
0:09:00 Joel Frick (6124): Yeah, so, so just so you understand why, why we want to, we understand we're looking at doing it manually now, Dave, but.
0:09:07 Joel Frick (6124): There's 171 supplier scorecards that go out every month, so every one of these KPIs will have to be input 171 times.
0:09:15 Joel Frick (6124): All right, 
0:09:17 Dave McLean: so here's where supplier survey comes into play with this, because, again, you guys, you guys consider supplier survey, right? It's a specific survey, but and it's a long tail when it's an app.
0:09:29 Dave McLean: It's a annualized thing. The supplier survey is going to exist in a form that actually would allow you to create much more frequent canvas for request.
0:09:37 Dave McLean: So, for example, Thank you. What you could do is set up a supplier survey that is the, uh, supplier safety, uhm, metric report or something like that.
0:09:50 Dave McLean: You issue it to all the suppliers that you need to issue to. So when you set up the survey, Thank you.
0:09:55 Dave McLean: You set You say it's a monthly campaign. We need to issue it, uhm, on a, you know, 10 days after the, uh, sorry, we issue it one day after the end of the month.
0:10:07 Dave McLean: Uh, and it closes out at the, you know, at the 10th day or something like that. And the KPIs in it are, let's just keep it simple for argument's sake, uh, report your LTIR and report your TRIR rates into that form.
0:10:22 Dave McLean: And so you actually put the onus on the supplier in Intellects to do it rather than doing it via email and consulting.
0:10:27 Dave McLean: It's like consolidating to a spreadsheet or something like that. The advantage of this, the advantage of this is that that supplier survey is a queryable table.
0:10:36 Dave McLean: So that you could then pull those metrics into the data point here. And I want to, I want us to think in some ways.
0:10:43 Dave McLean: In some cases that the answer here for some of these KPIs is not necessarily for a user to enter the max points, but instead for the points to be calculated in line with the KPI based on a result that comes in.
0:10:58 Dave McLean: So imagine, for example, that your, ah, safety through accountability and recognition, uhm, is less than the national average by category.
0:11:12 Dave McLean: Oh, I see, okay, so, okay, it's less the composite, so, okay, nevermind, forget what I just said there for a second.
0:11:19 Dave McLean: In this case, they would report both of them. The report that you are using, the query that you're using that, ah, that would look at all of those data points that the supplier has reported, ah, and feed it to the supplier scorecard, would be the thing that handles the calculation that you currently 
0:11:35 Dave McLean: do in Excel. Take the, the rates that they've, ah, they've put in, compare it against the national average, or, ah, an average by category, and we're going to talk about where that might be stored, because that changes over time, and it depends on the industry.
0:11:48 Dave McLean: Ah, and then ultimately resolve what the number of points is that we're feeding into the report. If that calculation ever changes, you know, if one day you decide down the road, you know what, we're, we're okay with them if they, if they creep above the national average.
0:12:04 Dave McLean: National average by category a little bit, but no more than 5% or something like that, then you change the query and going forward.
0:12:11 Dave McLean: That query anytime that it's run is going to feed in revised point data based on how it parses the number.
0:12:19 Dave McLean: But if that's the model. Model that we can get to for some of this, where the. When you need information from the supplier in particular.
0:12:29 Dave McLean: In order to feed into the. KPI in an automated way, the thought process is, in my case, would be to use the supplier survey.
0:12:39 Dave McLean: That way you can, you canvass the data in a way that it can be captured by intellects. And fed into, uh.
0:12:46 Dave McLean: Into our report. Does that make sense in terms 
0:12:49 Joel Frick (6124): of where we, where we could head with this? Yes, uhm, it makes sense, but only for 
0:12:56 Dave McLean: a couple categories. Okay, so most of these are not being driven off of data the supplier 
0:13:01 Joel Frick (6124): is reporting to you. Correct, uhm, so that, that would be perfect for the safety category. Uhm, essentially that might be it.
0:13:18 Joel Frick (6124): And then the rest, uh, is, is all driven by 
0:13:23 Dave McLean: SI personnel. Okay. Where do you, uhm, like, how, how do you manage and define the, the national averages by category?
0:13:34 Dave McLean: For each of those, uh, rates. Do you, like, do you maintain a lookup table that gets updated from, with OSHA data that's provided, or that you pull?
0:13:43 Joel Frick (6124): Yeah, we pull data from the Department of Labor website. Okay. Uh, typically gets updated every year. Every two years, uh, so we just update that, like I said, 
0:13:56 Dave McLean: every year, every two years. Excuse me, there's that sneeze from yesterday that Okay, I, I think, so, so, I think the answer for that's probably going to be to maintain a lookup table, something that you can use as a reference table that we can connect in, because without that information, living in 
0:14:18 Dave McLean: Intellects, without the table of, of, uhm, Uh, National Averages, then the best you'd be able to do is to run your formula based on a, a fixed number, essentially, it would, it would be, you know, every time you want to change it, you'd be changing the formula.
0:14:35 Dave McLean: How many categories are we talking about here, over time? If it's, like, less than 10, it might just be better to put it into the formula and revise 
0:14:44 Joel Frick (6124): the formula periodically. It's 10 to 15, let me, uh, sorry. Uh. So, I got Spinning Wheel. So, 18 categories. 
0:16:15 Dave McLean: OK. Fiscal 26, 27. OK, so you maintain each one. Yeah, for this one, I mean, if you imagine the formula in the report, it's going to look like an Excel formula.
0:16:28 Dave McLean: If you were to do it that way, it'd be, you know, if the NAICS code, each one equals X, then use this number.
0:16:33 Dave McLean: If it equals Y, then use that number. I think, I think what we do is, uhm. I think we made like you're already going to be entering the NAICS code for each supplier as it is when, uhm.
0:16:48 Dave McLean: When you build their profile. So I think the answer is to maintain a lookup table that is. Rates by NAICS code for each year and basically a start and an end date and just once a year you'd have you'd have.
0:17:04 Dave McLean: You were an admin or somebody would have to go in and update those lists. And if you don't, you're just going to use last year's 
0:17:10 Joel Frick (6124): last year's data parameter. OK, 
0:17:16 Dave McLean: That'd be fine. Cool, so for the AI note takers, just a part of supplier scorecard, but adjacent to the actual scorecard itself is the lookup library for recordable incident rates and lost time incident rates, industry averages by NAICS.
0:17:36 Dave McLean: code by year that needs to be maintained by the supplier scorecard application administrators to be managed on a yearly basis, and we're going to use that to pull into the report that feeds the query KPI for, um, safety performance, uh, so that we can properly compare the reported LTIR and TRIR on the
0:18:01 Dave McLean: supplier survey that sends a once a month, uh, to the national averages for their respective category, and then go from there.
0:18:08 Dave McLean: Cool. Awesome. Just looking through our agenda here. I think we've got the broad strokes of 
0:18:17 Joel Frick (6124): our structure here. I have a question. Yeah, please do. there's going to be a little more complication into it. But then this category, we have a, uh, bi-annual safety Kaizen opportunity.
0:18:38 Joel Frick (6124): Okay. So, uh, every January and June, we'll do, we'll add a fifth question to the, uh, to the survey, which, by the way, we already do a survey type for this, uh, safety.
0:18:54 Joel Frick (6124): Uh, we'll do a fifth question into the survey, asking what your, uh, safety Kaizen is. Uh, and that, and that's worth one point that will carry over for six months.
0:19:11 Joel Frick (6124): So, I, I, I guess maybe We are. No, the answer I would need to be responsible for, well, could that be added to, I guess, the survey twice a year, only twice a year.
0:19:24 Joel Frick (6124): And then, uh, uh, I guess. Once I wouldn't be able to carry over, would it, I would have to add that point individually?
0:19:34 Joel Frick (6124): Yeah, 
0:19:35 Dave McLean: so, I, I think the first thing is, you, you wouldn't be able to, like, change the survey for one month out of it, uh, like, per one month every six months unless you're publishing the survey again.
0:19:48 Dave McLean: I, I don't think that's going to be the way to go for it. It's just, it, it would be building way too much logic for essentially one use case.
0:19:55 Dave McLean: Uhm, that, that, that would be an expensive KPI to build it that way. I think the way to do it, would be to create, you said it's biannual or semiannual, every two years?
0:20:05 Dave McLean: Uh, biannual, twice a year. Twice a year, okay, got it. So I would, semi is twice a year, uh, biannual is every two years.
0:20:17 Dave McLean: Respectfully. Yeah. Because we all get those things wrong all the time, I know. Uhm, no, so if, if it's an every six month task, I would actually create another survey.
0:20:31 Dave McLean: And it just means that on those six months, the suppliers are going to get two safety surveys, one with the core two questions, and one with the summer Kaizen question that they have to answer.
0:20:41 Dave McLean: And it's a little clunkier from the supplier's point of view, because it's two different forms that they have to fill out, like two different tasks that they're going to get.
0:20:47 Dave McLean: But that is a, that is a mechanism to do this in a way that works for everything without having to rebuild logic to account for this one KPI 
0:20:58 Joel Frick (6124): that happens twice a year. And when 
0:21:06 Dave McLean: they say, like, when you say SummerKaizen, like, what, what is the question you're actually asking them in that case? 
0:21:11 Joel Frick (6124): Essentially, they, they just fill out a text box in the survey saying what, you know, they had a, a laceration hazard that, that, this workstation or whatever.
0:21:24 Joel Frick (6124): So they put tape on it, something like that. That's satisfactory for the SummerKaizen. How do you score that, though? They, so that, this, this is one that we actually have to manually 
0:21:37 Dave McLean: review and score. Review and score, got it. OK. Definitely for the data collection, I would do this as a, as an every six month supplier survey that is.
0:21:54 Dave McLean: That is unique to this. While you're doing it, I would maybe consider changing it so that you're asking more nuanced questions rather than just a single text field.
0:22:03 Dave McLean: Right, like, because the survey answers can actually be choice types, they can be date types, they can be texts. But, like, I think you can get to a spot where if you ask them to describe it in more meaningful terms in that regard, rather than, not more meaningful, more reportable terms than just the
0:22:21 Dave McLean: text field, you get a little bit richer data from it. And then, at the very least, when you're When the scorecard comes up.
0:22:31 Dave McLean: How do we do that? So, basically, on your end, what you're saying is that every six months, instead of two scorecard KPIs, there are three.
0:22:43 Dave McLean: Am I hearing that correctly? 
0:22:48 Joel Frick (6124): So, the score, the Summer Kaizen point carries over for six months until the next opportunity. I tried to display that here.
0:22:59 Joel Frick (6124): If you can see the colored cells, it's looking at, uh, their, their OSHA and their incident rate and loss time for the month of August.
0:23:10 Joel Frick (6124): So, zero points and two points plus the Kaizen that they did back in June, at one 
0:23:31 Dave McLean: . . That's interesting. Nothing in the survey right now has, like, an answer coming back to somebody at Subaru, at a site.
0:23:47 Dave McLean: So I to essentially, like, respond or score the survey results that somebody's filling out. So, I don't know. Yeah. Yeah, let me ask you this.
0:24:03 Dave McLean: Remember how we said default, the value in some cases, for some of these, ah, these KPIs? Yeah. What if when you set it up, when you set up the KPI, what if it, when you, when you get to the section where you say whether you want to have a default value or not?
0:24:19 Dave McLean: What if, in addition to setting a static default value, just 5 or 10 or whatever the number is, what if you also get the option to use, ah, uhm, you, in it, like, in place of doing the static default value, what if we look at the last month?
0:24:41 Dave McLean: Then that way, this, this KPI shows up on the scorecard every month. When the scorecard generates, it defaults to whatever the value was from the last month.
0:24:50 Dave McLean: Which, that, that's what a lot allows you to carry it forward. And then if it happens to be one of the Kaizen months, where they've responded and they've, they've sent in the survey results, you can, you know, one screen you pull open, there's survey results, you've analyzed what it is they told you 
0:25:04 Dave McLean: and whether it qualifies going forward, and if so, then you leave the, you make sure that you set it to one point moving forward, and if it's not good enough, then you change 
0:25:15 Joel Frick (6124): it to zero in that case. Okay, and you're, you're saying defaults just, you're saying defaults to previous months just for this month?
0:25:24 Joel Frick (6124): Just for would that have to be for 
0:25:26 Dave McLean: Just for that category, you know, just for that category for that supplier. So, it, what it essentially means is the default logic for each KPI can actually be a little bit different.
0:25:35 Dave McLean: Ah, in the case of, you know, let's say the, well, the, the rate one is probably not a meaningful one, but, because we're going to, we're going to try to query that one, but in the case of this Kaizen one, if you set it so that it's, it's taking the value from the last month for that KPI, for that supplier
0:25:53 Dave McLean: , then it means if last month was your semi-annual, Thank you Bye now. Kaizen month and you set it to zero because they didn't report anything to you.
0:26:00 Dave McLean: They just didn't do a Kaizen event for safety. Then when this task, when your scorecard generates for next month, that KPI will default to zero because that's what it was the prior month.
0:26:11 Dave McLean: And as you fast forward, if you it to the next Kaizen event month. It'll generate with zero by default, because that's the prior month.
0:26:18 Dave McLean: But if you're looking at a survey result where it says they actually did a Kaizen event this month, then you can change the value for that month to one, and going forward until the such time as you change it again, it will keep defaulting to one, just because that's what it was for the last month for
0:26:34 Dave McLean: that KPI. Yeah, yeah, I'm with you. That sounds great. Okay. Okay, so a couple of decisions then. From a supplier scorecard.
0:26:44 Dave McLean: Set up point of view, we need to make sure that we have a capability to default the value of any given scorecard response using a couple of different methods.
0:26:55 Dave McLean: The first would be having it as a static value, where in the settings of the scorecard KPI, you just define what the value is going to be.
0:27:05 Dave McLean: The second method would be by using the prior month's value, which would instruct the scorecard response when it generates to pull the data, pull the default value from the prior month's score for that KPI for that supplier specifically.
0:27:21 Dave McLean: That way, you can loop it forward in time as you need to until such time as you change. In addition to that, we also need the ability to not have it defaulted, because sometimes you very specifically want somebody to be entering a value.
0:27:32 Dave McLean: You don't want them. You don't want them to have a default value in some cases, so that's kind of one decision in terms of setup.
0:27:39 Dave McLean: The other one is more specific to the safety components of the scorecard layout. We know that we want to have instances of incident rates being captured from a supplier survey that's being run monthly, where the supplier is reporting their incident rates, but we also want to have a semi-annual supplier
0:27:58 Dave McLean: survey that is set up for them to report the semi-annual safety kaizens that they have the opportunity to do. Um, and while those data points won't automatically pull into the scorecard, they'll be routed back to the relevant players that would be responsible at SIA for, for filling out and reviewing
0:28:18 Dave McLean: and approving the safety KPIs. And the scorecard would give them an opportunity to see what the supplier is reporting for that semiannual KPI, and then to make a determination on what score to attribute for that KPI that month.
0:28:32 Dave McLean: Combined with the default value, this would then allow the carry forward to happen. Until such time 
0:28:38 Joel Frick (6124): as you change the value. 
0:28:42 Dave McLean: OK, OK, the only constraint of this model is that it really relies on the person who is responsible for entering, or in this case, confirming the score for.
0:28:53 Dave McLean: The safety Kaizen KPI that gets carried forward every month. They really have to know when the end of that six month cycle is in order to decide whether to make the change.
0:29:03 Dave McLean: That's the only thing that they've got to 
0:29:04 Joel Frick (6124): keep track of for themselves. Yeah, yeah, that's that's not a problem. That's that's something we. We already do now. That's cool.
0:29:10 Dave McLean: Cool, is there a world where it would make sense to have a 4th KPI that is an unscored one? It's just informational, which would be the basically the date that the last or the month that the last KPI was, or that the last Safety Kaizen, uhm, score was changed.
0:29:33 Dave McLean: So that if I'm carrying it forward, if I'm looking at it each month, along with all of my other safety KPIs for review, then at least I can see, oh, I'm.
0:29:41 Dave McLean: You know, I'm coming up on six months, or is this something where the schedule is the same for all suppliers?
0:29:47 Dave McLean: The schedule is the same for all suppliers. Okay, so we know that, like, July and January or whatever months, those are our Kaizen months that we're doing this, and therefore they would know to look for.
0:29:57 Dave McLean: Look for the record for the survey results and connect them in where they need to. Yes. Okay, we won't do that.
0:30:04 Dave McLean: We'll just leave it on the part of the user that's, uhm, confirming the data that's coming through. Yeah, yeah, that works cool.
0:30:16 Dave McLean: Cool. What other nuances you guys have in the KPI data where where it gets painful sometimes? 
0:30:21 Joel Frick (6124): Uh, OK, I wanted to ask, uh, so we also have. Some categories that 
0:30:32 Dave McLean: will be blank. Uh, for For example, 
0:30:48 Joel Frick (6124): Prototype, well, Service Parts. Uh, if they didn't have any service part orders, the score would be blank.
0:31:00 Joel Frick (6124): Meaning, the total 10 points would not be calculated in a total possible. How would 
0:31:08 Dave McLean: we differentiate when to treat no result reported by the supplier from when no result exists in this scenario? Like, to me, this actually seems more like it's a, it's a not applicable flag, rather than, uh, rather than it being something that is, you know, like, the absence of the data, just because 
0:31:32 Dave McLean: we also kind of have this hard hard line that if, uh, if somebody doesn't complete their task in time to do this, then we take a non-response as a zero.
0:31:44 Dave McLean: But in this case, the lack of data is actually a response. So you'd have to have that. You'd have to have a mechanism to be able to report for that supplier, for that month, for that KPI, that no, uhm, no records exist, essentially.
0:32:02 Joel Frick (6124): Does that make sense? So, I'm sorry, can you, the part about not applicable, could that be one of the options in the score?
0:32:18 Joel Frick (6124): And then the total 
0:32:19 Dave McLean: would not be calculated? Yeah, so, like, just like all the other KPIs, this KPI would be assigned to somebody within SIA for, for, uh, ownership of, of data entry, right?
0:32:30 Dave McLean: So, they're gonna get a task on the 10th of the month that contains this KPI and the other ones that they are responsible for, for all of the suppliers.
0:32:38 Dave McLean: And it's gonna say, okay, uh, for this KPI, here's your list of suppliers, and it's gonna show, basically, uh, the max number of points, it's gonna give them a spot to enter the number of points in, that they could potentially add, but, it would then also give them a little task.
0:32:54 Dave McLean: checkbox next to the, next to that cell, to be able to say, for any individual supplier, hey, this month, this KPI is not applicable.
0:33:03 Dave McLean: That's the cue to exclude the max points from the denominator in the, in the, uh, scoring formula. Because if you don't do that, if you just leave it blank, well, blank is going to be treated as, hey, we didn't finish the task.
0:33:20 Dave McLean: And since not finishing the task equals zero, based on what we've said and established earlier, that's probably not what we want.
0:33:26 Dave McLean: Right, right. This forces a confirmation in order to exclude it. It forces you to say, nope, you know what, there was no data for this one, so I'm going to, I'm going to, I'm going 
0:33:37 Joel Frick (6124): to exclude it from the formula. Yeah, okay, so yeah, that not applicable. No feature would be needed for several of these categories.
0:33:47 Joel Frick (6124): Okay, cool. So I think then, 
0:33:51 Dave McLean: summarizing this again, so I think what we want to do in KPI setup, we want to be able to, for any given KPI, to be able to activate the ability to make it not applicable, because not all KPIs should have that option.
0:34:04 Dave McLean: So if you were to look at all the KPIs, let's say there's 25 of them, maybe only 10 of them have the ability to be not applicable in any given month.
0:34:12 Dave McLean: So we activate or deactivate. The ability to make it not applicable. And if we do, what that's going to do on the form that the user is seeing when they're when they're able to enter the data is they can toggle that not applicable flag on or off for any given KPI month, So.
0:34:30 Dave McLean: And that's combination. So for supplier X on time delivery of service parts, I'm going to make not applicable or whatever the case is.
0:34:38 Dave McLean: And if that happens. You can't enter a value for the points and it would then zero out. The max points that we use for all scoring.
0:34:49 Dave McLean: So there's potential max points and then actual max points that we're using, which is a either it is the max points or it's zero based on the fact that it's not applicable.
0:34:58 Dave McLean: OK, perfect cool. Awesome, yeah, that's a good one. That's a good call up. 
0:35:07 Joel Frick (6124): OK, next question. 
0:35:08 Dave McLean: I'm sorry, I'm sorry. One more for you here. If we make it not applicable, should we require a comment? 
0:35:14 Joel Frick (6124): Or is that overkill? No, that's overkill. OK. Yeah, cool. OK, uh, another nuance, uh.
0:35:35 Joel Frick (6124): So, high costs, or the cost category, for example, again, another semi-annual category that, uh, gets retroactively populated.
0:35:51 Joel Frick (6124): So, right now, uh, so, this happens every half fiscal year, so from April to September, the suppliers are supposed to be working on cost reduction.
0:36:07 Joel Frick (6124): And then, uh, based on that activity, they'll get a score, and then that score will be retro. So, this next, this month coming up, actually, so we'll issue September scorecards.
0:36:22 Joel Frick (6124): We'll actually be. Backpopulate previous month's data. 
0:36:29 Dave McLean: It'd be the same thing here. You'd have to, you'd have to open. 
0:36:36 Joel Frick (6124): I'm sorry. Sorry, we can't hear you very well. Oh, sorry. 
0:36:42 Dave McLean: Uh, how's that? Is that a little better? Yeah, perfect. You'd have to do the same thing here. Uh, the, the, this model is such an exception to the rule, which is that.
0:36:54 Dave McLean: Thank you. When we're, when the month is done, we're done, and we're moving forward in time. This one, in terms of backdating records by design, uhm, we don't, we're not, truthfully, we're like, we don't, we're not going to have the budget to go and build both ways, where you can both accommodate the
0:37:13 Dave McLean: , sort of, lockdown concept that we're trying to get to, as well as make it easy, like, make it a business process in the system for somebody to reopen large swaths of a specific KPI backwards in time by X number of months.
0:37:27 Dave McLean: months for all suppliers. It would have to be that, if you wanted to do that, you'd have to go into the, into the data, ah, the, like, the raw data for all of this.
0:37:37 Dave McLean: You'd have to run a search for, hey, show me all suppliers, years. Show me this specific time frame, so, January through June, or whatever the time range is, and filter it for just this particular KPI.
0:37:54 Dave McLean: That's going to return, again, if you've got 500 suppliers through that window, and it's going to return 500 rows. One, one row per supplier per, I'm sorry, six month window, it's going to return 3,000 rows.
0:38:06 Dave McLean: One, one row per supplier per KPI, and you're going to have to populate it through, through that mechanism. Like, through the UI, you're going to have to click through and enter a value.
0:38:15 Dave McLean: A trailing, just, like, doesn't this sort of defeat the point of the supplier scorecard being something that's kind of an up-to-the-minute value.
0:38:30 Dave McLean: For this to be a trailing thing that you're backdating through? Or am I misunderstanding this, and that is that you report the value today, and it carries forward again, like what we were talking about with 
0:38:42 Joel Frick (6124): the Kaizen event? No, no, this would be, uh, yeah, this would be backwards. Uh, and I guess, We use these scorecards.
0:39:04 Joel Frick (6124): I guess we have a, an annual, uh, like, award ceremony for, like, the best performing suppliers. So, essentially, the, uh, the main time the scorecard really matters is, like, the end of the fiscal year.
0:39:25 Joel Frick (6124): Okay. Uh, of course, we want suppliers to see their score monthly, uh, for quality. And, uh, that's delivery for, you know, day-to-day activities.
0:39:37 Joel Frick (6124): Uh, but I guess things like the cost, uh, the overall score for all 12 months, in all categories, are populated.
0:39:51 Joel Frick (6124): Uh, that, that's when, like, the final score is the final score, I guess. 
0:39:57 Dave McLean: That makes sense. Mmm, so you treat the month-over-month stuff as, like, it's almost an interim score. Yeah, it's not, that's the wrong word.
0:40:06 Dave McLean: It's, it's, it's a component of a broader composite for the year. Yeah, you could 
0:40:10 Joel Frick (6124): say that the quality scores are locked in month-by-month. Uh, the quality score, 33.3% would be permanent. The overall score, uh, will change once the end of the fiscal year comes, and all the categories are populated.
0:40:38 Dave McLean: And again, it sounds like you have a different cadence for this than monthly scorecard. So what if your monthly scorecard program excludes this value?
0:40:51 Dave McLean: Yeah, I might need to 
0:40:52 Joel Frick (6124): have some offline discussion with management. To see if, uh, maybe this can be taken out of the equation. Might be a difficult conversation, but, uh, no, I, 
0:41:07 Dave McLean: I think it's about doing it differently, though. I think it's so what if you exclude it? Exclude it from the monthly scorecard, because it has no bearing on monthly stuff from what you just said.
0:41:16 Dave McLean: And instead, you run a second scorecard program that's annualized. So at the end of the fiscal year, two different scorecard records are generated, one that has the regular monthly scorecard, the other that has, presumably, in many cases, it's going to be, uhm, what am I saying here?
0:41:37 Dave McLean: It's going to be the stuff that you only populate once a year. And so you're, let's say, you know, you populate that once in the last month of the fiscal year for that year.
0:41:47 Dave McLean: So the cost reduction points that they get would then only apply when you're looking at the annualized data. You wouldn't apply it across the board.
0:41:57 Dave McLean: You would just say, hey, show me the annual, uh, the annual results that we have, which means I'm cherry picking for whatever month the last, um, the last month of the fiscal year is that contains all of the monthly results for that that particular month, plus the annualized results.
0:42:14 Dave McLean: And I display that in one big column. 
0:42:15 Joel Frick (6124): Yeah, I personally, I, uh, I wouldn't be for that. Uh, the, I guess what I'm worried about or what I'm thinking of is, uh, our procurement side.
0:42:31 Joel Frick (6124): As you can see, the cost, yeah, is a total of 30 points, which is a pretty big chunk compared to everything else.
0:42:43 Joel Frick (6124): Yeah, so, so I just need, I would need to get that agreement. That we can kind of show, get that off the display.
0:42:52 Joel Frick (6124): There might be some reservations about removing costs from, I guess, from the, uhm, you know, I guess just as a reminder that, hey, your cost activity is still ongoing and it's going to be challenged on the scorecard type of thing.
0:43:11 Joel Frick (6124): Yeah, I, I think, I think even though it's only, uh, it's only calculated twice a year. I think it's weighted so that that stays in there, so if these people don't hit it, they understand it's important to their score because they're stuck with whatever they did for six months.
0:43:32 Joel Frick (6124): Does that, does that make sense? So I think that's why they want them to show it on the call. No, I get it, but the problem is that if 
0:43:39 Dave McLean: you're backdating the entry, then they never actually see that score month over month. What they're only ever seeing is what you, like, if I'm looking at my scorecard for this month, you might not be populating that value.
0:43:52 Dave McLean: Until six months from now, so it's not actually showing them anything on a month over month basis. Where it's where it comes into play is at the end of the fiscal year.
0:44:00 Dave McLean: That's when it's really important. So this speaks more towards the, how is it that we would display any of the annualized variants of this data?
0:44:11 Dave McLean: So, you know, if I take any other KPI, for example, let's take the, I'm just going to use one that's divisible by 10 here.
0:44:19 Dave McLean: Let's say the on-time delivery of service parts over a 12 month year, that score is worth a total of 120 points across the year, right?
0:44:30 Dave McLean: 12 times 10. And again, we can obviously average this out, but let's say, by the end of the year, my collective score for that fiscal year is 105 out of 120, divided down into, you know, whatever that is, 89 points.
0:44:45 Dave McLean: You guys are probably all better at the math than I am. Um, so, you, you, like, that, it's almost like asking them to sort of recognize, hey, sometimes we're looking at the monthly, monthly, monthly transactional stuff.
0:44:59 Dave McLean: Then, at the end of the year, that's what, that's the report card. Everything prior to that is the parent-teacher interview, along the way.
0:45:05 Dave McLean: And, hey, it's a bellwether, but you still have opportunity to change, you still have opportunity to, to move the needle one way or the other.
0:45:11 Dave McLean: For the cost reduction piece, since it's not something that is reported on, on a monthly basis in the scorecard, you carve it out as a second scorecard, and at the annual, at the end of the year, if the user goes in to see their scorecard results and say, okay show me everything for fiscal 2026, what
0:45:33 Dave McLean: that's got to show is the average for each KPI of all results that were entered across the board for that supplier for that fiscal year.
0:45:44 Dave McLean: And since we know that any given month falls into whatever fiscal year, like that, that relationship is understood and established in the background, then, you know, when the report builds, it's going to show all of the KPIs regardless of whether they were tied to a monthly or an annualized scorecard
0:46:01 Dave McLean: . And it can show them with the relevant weighting that they need, because it's just averaging the individual numbers as we go.
0:46:13 Dave McLean: Then if they want to see the month-over-month stuff, again, at the level of the individual numbers, the individual KPIs, it's, hey, show me a matrix that shows me all of my KPIs grouped by the category for January through July.
0:46:30 Dave McLean: Then, in that case, because the cost ones aren't reported, in that window, or at least, let's say, months 1 through 6 of the fiscal year, just, ah, so that we sidestep where the end of your fiscal year falls.
0:46:40 Dave McLean: It'll show me everything in months 1 through 6 of the fiscal year. Well, cost was not something that was reported during that, that window.
0:46:48 Dave McLean: So, we leave that to the end of that the year, or, or whatever that frequency is, if it's quarterly, semi-annual, whatever the case is.
0:46:54 Dave McLean: Whenever we're, whenever we're applying this number for a period of time, then we have to collect it against the task that represents that whole period of time, not the month-over-month Thank you.
0:47:05 Dave McLean: sort of manufacture the data within that. Hey, Brian, thanks for putting your hand up there. Sorry. I did see, I did see you there.
0:47:13 Brian Hensell (7161): No, that's okay. Hey, Dave, I think you've given us some, uh, valid, uh, argument points that we need to take back to a group of people.
0:47:22 Brian Hensell (7161): To let them know what the challenge is going to be when moving the scorecard to Intellects, uhm, and what do we want to do with it so that it still accurately shows, uh, the supply side or, you know, how they're performing and everything, but yet works with Intellects as we move into the future.
0:47:45 Brian Hensell (7161): So, Jesse will obviously take that back and have to have a meeting with, as he said, Procurement and a few other people to see how what we want to do about changing the current scorecard to get it prepared for, uh, moving into Intellects, so.
0:48:02 Brian Hensell (7161): Yeah, yeah. Cool. Thank you, appreciate all those, all those points that you've provided to us. 
0:48:09 Dave McLean: No problem. I totally, I totally I'm hearing the subtext. This is a, hey, we can't make this decision on our own in the room here.
0:48:14 Dave McLean: So, 
0:48:15 Joel Frick (6124): totally get that. So, Brian, what, honestly, what we're doing right now is walking through this verbally and saying, well, maybe, well, maybe, well, maybe, but in the end, yeah, if the roots are good together and decides that this isn't going to work, we need to put our heads together with Dave and come
0:48:32 Joel Frick (6124): back and have 
0:48:32 Brian Hensell (7161): more discussions we can. Right. Yeah. Yeah, I know what exactly I agree with you 100%. And yeah, he's seen the subtext and it's been it's not something that we can decide on right now, and it needs to be something that we discuss.
0:48:47 Brian Hensell (7161): You know, can we even move forward with it? And if we do, then what 
0:48:52 Dave McLean: are we going to do about it? So, yeah, yeah. One, one other variation that we could do this with that it's derivative them.
0:48:58 Dave McLean: Of the option that I just laid out, but again, it maybe gives a little more ammunition for the conversation is that that you still run two different scorecarding programs a month over a month one and an annualized one for the annualized one instead of just putting in annualized KPIs into that one, you
0:49:16 Dave McLean: put all of the KPIs. So you're essentially recreating the all of the ones that you're doing month over month. You recreate them as annualized KPIs.
0:49:26 Dave McLean: However, for the annualized version of it, they're all query type. And they're looking at the monthly KPIs. So that when you get to that last month of the fiscal year, the same sort of process happens, uh, month, or day zero through nine, is the, hey, everybody get your data cleaned up and make sure 
0:49:45 Dave McLean: that you've got something to report, uh, day 10 through 15, or whatever is the data entry period for the monthly stuff.
0:49:54 Dave McLean: Then you do two days of review on the monthly stuff, and on day 18, that's when the annual one gets generated, pulling all of its data from, or pulling the vast majority of its data.
0:50:03 Dave McLean: So it's from the total body of monthly data that's been reported over the preceding 12 months, and then has these additional KPIs that get filled out much later in the month for cost reduction, or any others So is that once you complete the annual KPI, you have somebody who is reviewing the data as a
0:50:26 Dave McLean: whole. So instead of just looking at month-over-month snapshots for that last one, you're actually getting the system to track that KPI.
0:50:35 Dave McLean: You know, the average of the last 12 months for sorting is, you know, 9.2 out of 10 or whatever the, whatever the value is, you still can get whatever the value for the last month is.
0:50:47 Dave McLean: Hey, maybe that month, we got a 9 out of 10 for, for month 12. The annual KPI, the one is different, and is actually calculating from the sum total of all of the, all of the, uh, month over 
0:50:57 Brian Hensell (7161): month stuff for that fiscal year. Yeah, that, that, I, I understand that, and that makes a lot of sense, uh, definitely.
0:51:06 Brian Hensell (7161): Yeah. Cool. I mean, I mean. Right, yeah. Yeah, appreciate that. Okay, 
0:51:12 Dave McLean: so let's leave that one off to the side in terms of the broad sort of topic being how to handle, how to handle, uhm.
0:51:23 Dave McLean: Specifically the cost reduction KPIs, but I think more broadly, if there are any, uh, if there are any annualized values that we need to be entering where we only enter it at the end of the year, or we enter it midway through the year for a preceding six months or something like that, that's sort of 
0:51:40 Dave McLean: the full topic. And, uh, and if we leave that one with you guys, the only thing I'd ask is, is there a timeline that you can rally the necessary folks together to have those conversations, uh, and, and make the case for that?
0:51:56 Joel Frick (6124): How soon do you need it? Is, is, is it two weeks? Two weeks would be fine. Okay. Yeah, two, two weeks would be fine.
0:52:07 Joel Frick (6124): Yeah, I would hope maybe, maybe next week, but I don't want to push it. Two weeks. Yeah. Yeah. David, can ask a question?
0:52:16 Joel Frick (6124): Go for it. Within the conversation, you know, looking at the scope of work, it talks about, you know, the different things that we're, you told we'd be pulling data from, but there's a line that's that says, the last bullet point says, supplementary information not directly entered into Intellects will
0:52:35 Joel Frick (6124): be collected via supplier evaluations, but said evaluation types to gather summarized information for score 
0:52:44 Dave McLean: cards. This is the survey concept. This is the similar to the OSHA rates. We got to send them a survey that we are.
0:52:56 Dave McLean: We've evolved the concept of the evaluation to a different term, and truthfully, I think Matt's understanding of what it was we were doing.
0:53:00 Dave McLean: It's a little simplified for the way that it actually works, but conceptually, it's the, hey, we need some sort of a data collection form to be able to get information from the supplier, get raw inputs from the supplier, and then the scorecard needs to be able to look at that You to pull data through
0:53:18 Dave McLean: , and that's what we're doing for some of these ones. Yep, good callout though. Sorry, just looking at it. WorkHard was originally a Phase 4 thing, if I recall correctly.
0:53:37 Joel Frick (6124): Yep, yep, yep, you just, you had three-quarters of it done, and you thought, well, let's try and take a stab at pulling it into two, since we were, we were going to have three-quarters of it done, but.
0:53:47 Joel Frick (6124): For sure, for sure. Becoming a little more complicated Yep. 
0:53:54 Dave McLean: Current scope is limited to information that's gathered from supplier survey, PIR data, like NCR, scrap data, CAPA completion dates, PPAP submission dates.
0:54:03 Dave McLean: Yep, so again, different variations of where we're querying data. Matt didn't necessarily conceive of this as something where there's a workflow around it that requires people to enter data that, like, has this sort of dual track where some data is queried and some data is picked up.
0:54:20 Dave McLean: It's not entered into the scorecard, but again, that makes sense in concept to what we're doing here. 
0:54:30 Joel Frick (6124): Yes, yep. 
0:54:33 Dave McLean: Cool. I'm just coming back to my agenda here, make sure we're, okay. Hierarchy and Supplier Publication. We've covered most of the topics under here that matter.
0:54:45 Dave McLean: Parent company roll-ups we talked about in the past, in the past one. So historically, this has been a challenge because we only get it at one level.
0:54:52 Dave McLean: But if we've gotten depots and then rolling up into a parent company, then the model is that we're, we're reporting data, uh, like viewers, we would capture data for the depots, for the facilities, but a user who has access to the parent company would be able to see the scores card data for all of the
0:55:10 Dave McLean: facilities underneath, that way you're exposing it to them. What you're not doing though is running the score card for the parent company in that case.
0:55:18 Dave McLean: Does that make sense? 
0:55:22 Joel Frick (6124): Or do we need to run one for each, for each? For each depot? Yep. Nothing for the parent. But nothing for the parent.
0:55:33 Joel Frick (6124): You got it. Trouble? 
0:55:39 Dave McLean: The parent is a corporate entity, right? Like, it doesn't have, it doesn't have, uh, an incident rate. It has facilities that have incident rates.
0:55:48 Dave McLean: Like, the work happens at those depots. How do you 
0:55:52 Joel Frick (6124): guys score that? Is it, is it a combination of, like, Greencastle and Lafayette? Yeah. Greencastle is a corporate rate. Yeah.
0:55:59 Joel Frick (6124): So, yeah, that was actually one of my questions. Uh, it's all about, like, yeah, sticking with safety.
0:56:12 Joel Frick (6124): One person answered, it for the entire company, whether it's, whether it's, uh, you know, two depots or six depots, it's one person entering it for the whole company.
0:56:24 Joel Frick (6124): Okay. Uh, so in our scorecard concept, that would be split up by depot, or is there a function that it could be one applied to all depots?
0:56:38 Dave McLean: You can't apply it from another thing. So you would have the KPI, if you've got a company with two depots, just for argument's sake, you would have two scorecards being generated each month for that depot, or one for each depot.
0:56:54 Dave McLean: If they want to use the same value for TRIR and, uhm, and DART rate, or LTIR rate to report, and therefore, it all sort of works its way through that the scoring would be, would be the same for both depots.
0:57:08 Dave McLean: They can do that, but they have to fill it out once for each facility. You can't have facility-level data. That is, is something sometimes populated from the parent and sometimes populated from 
0:57:21 Joel Frick (6124): the, from the facility. Okay, but you would always have something there, right? There wouldn't be facility-level data put in. Is that correct?
0:57:31 Joel Frick (6124): When you put this in, no matter, no matter, for example, there's never, there's never data put in for each facility.
0:57:40 Joel Frick (6124): It's just one facility data put in. Yeah, that's right. Every single supplier. Yeah, there's never any facility-level data. If you heard that, it's 
0:57:49 Dave McLean: all company-level. It's all company. I think that, I think something that, I'd have to go back to the notes, but it was, it was identified during the first workshop on this topic that it would be, it would be awesome if it could be.
0:58:04 Dave McLean: Facility-level. It seemed like that was an aspirational goal. If the answer, look, truthfully, if the answer is that, no, you know what, when we do supplier scorecarding, when we map the supplier that the, that the system should generate it for, it should always be at the parent company level.
0:58:20 Dave McLean: general rule, that actually works easier on my end. It's got to be one or the other, though. Okay. 
0:58:27 Joel Frick (6124): Okay. I, I like the idea of having every supplier, or every depot, I should say, enter their safety data. Yeah.
0:58:36 Joel Frick (6124): Uh, yeah, I personally like that, but it's going to spread the workload among the suppliers. So, uh, I guess 
0:58:48 Dave McLean: that's what I'm looking to. Okay. Okay. Ultimately, that's not a decision that you have to make in this moment. It's, uh, it'll, it'll come later on, honestly, probably not even for a couple of months, though I wouldn't want to leave it that long, uh, just because the, the thing that will dictate this
0:59:05 Dave McLean: is the setup data that we load into the system, the setup You parameters that we, we put in that say, hey, these scorecards should map to these supplier entities, whether those are facilities or parent companies, that's going to be up to you at that point in time.
0:59:19 Dave McLean: And in the long run, you know, maybe it, maybe it's something you gradually change to. Maybe it's this year we go with just all parent companies, next year we decide, you know what, when we, when we build the program for the following year, uhm, maybe it's something where you decide that for a segment
0:59:36 Dave McLean: of those suppliers, we're, we're not going to assign it at the parent company level, we're going to assign it at the facility level.
0:59:41 Dave McLean: Or, or individual depot level. You, you would sort of get the ability, you get the option to change your mind on that one as you go forward in time.
0:59:49 Dave McLean: So if the change management with the supplier is too much, too fast to try to get them to do that, in addition to all the other things we're going to ask them to do in intellectual property, when we decommission IntelliQuest, I get that.
1:00:00 Dave McLean: I understand where 
1:00:01 Joel Frick (6124): that, where that would be coming from. So, uh, question off of that. So, you mentioned, like, the annual scorecard and then the monthly scorecard.
1:00:12 Joel Frick (6124): Yeah. Could the monthly scorecard be by Depot and the annual scorecard be by a company. 
1:00:18 Dave McLean: Is that how 
1:00:21 Joel Frick (6124): the cost savings are calculated? Yes. They're done on a company level? 
1:00:25 Dave McLean: So, yeah, so in this case then, the report that we would have feed the queries or the, the multitude of reports that would feed the query KPIs for the annual one would be a little more complex, but that's fine.
1:00:38 Dave McLean: That, that's okay. And it would basically do a roll up of the data from all facilities within those parent companies.
1:00:45 Dave McLean: This would just mean that, ah, your facility-level users would see their month-over-month scorecard data for their facility. Your parent company users would see the month-over-month scorecard data for the facilities they can see.
1:01:01 Dave McLean: within their parent company, and the annual ones, which are for the parent company. And the annual ones draw their data from the collection of monthly scorecards that are being 
1:01:14 Joel Frick (6124): generated for the facilities. Yeah, that sounds, from my side, that sounds. That sounds like the best option. Would you like a different timeline for that task?
1:01:28 Joel Frick (6124): Would you like a month to have conversations about what people want to do with the facility or corporate breakdown? Versus two weeks, two weeks to go, I think, two weeks, two weeks to go.
1:01:47 Joel Frick (6124): So, Dave, if we did, per depot, or, not corporate level, in the future, either we could decide to pay you guys more money, and we could collect that information and make it corporate, even though we're putting it in per depot, or we could do it on our own, couldn't we?
1:02:10 Joel Frick (6124): Yeah. Or not. They could roll it up. Yeah. I mean, the software is capable of rolling it up. 
1:02:19 Dave McLean: Yeah, no, it's like, and again, even on the reporting side, and it's, if you wanted to take those monthly ones and roll them up to the parent company to get averages for all their facilities over the course of the year, group by month, you could do that now.
1:02:33 Dave McLean: It's just that, like, you are, you are taking those averages. What it doesn't mean is that you are, what I'm trying to get away from is, hey, I am entering data for each of these KPIs for both the facility and the parent company.
1:02:47 Dave McLean: Right, right, because then what happens if they conflict? How do we actually represent that? Yeah. So, I think, I think you, in the model we're describing, monthly stuff is done at the facility level, annualized end of fiscal year stuff is done at the parent company level, the KPIs for the annual one
1:03:07 Dave McLean: , look at the monthly ones from the facility in order to give us the average roll-up by supplier, uh, combined into one annual number.
1:03:17 Dave McLean: All of that's okay, and then it's just the, if the, like, hey, look, I really need to see, I need to see all the KPIs for this company, and maintenance.
1:03:26 Dave McLean: You know, for argument's sake, let's say this company has five different facilities. I need to see the average of that company's facilities month over month for all of the KPIs.
1:03:35 Dave McLean: You'd be able to do that now with the reporting tool, no problem. It's just, you wouldn't necessarily expose that to the end user.
1:03:42 Joel Frick (6124): In the same fashion. OK. 
1:03:45 Dave McLean: Cool, awesome. Let's talk notifications, so we've got a bit of an interaction here between supplier surveys.
1:03:58 Dave McLean: Which are being used to canvass some of the data and supplier scorecards, which are being used to, to consolidate and capture the scoring itself.
1:04:06 Dave McLean: Ah, notifications for anybody who's actively responsible for data entry, like, you know, when we, when we say that this KPI is data entry.
1:04:14 Dave McLean: responsibility every month, Dave will get a notification when his task to go and make sure that all the data has been entered and, and, and get everything done.
1:04:22 Dave McLean: You certainly get that because he's got something specific to do. In addition, um, you know, we know there's a, a two day review waiting.
1:04:30 Dave McLean: There's a at the end of the data entry process that isn't so much a formal workflow task, but I think from what I heard from Luke this morning, it sounds like we want to make sure that when we enter that window, whatever day of the month that is, we want to be triggering a notification to whoever the
1:04:47 Dave McLean: community of reviewers is. That sound about right? Yeah. Are those reviewers, those reviewers by the sounds of it this morning were only SIA employees in that two day window?
1:04:59 Dave McLean: That's not the supplier reviewing it. They get it after the SIA. SIA reviewers have had a chance to look at it and give their say.
1:05:07 Dave McLean: That's correct, yeah. Okay, okay, so does that list of people change from month to month? 
1:05:12 Joel Frick (6124): Um, so we, we, the internal distribution. It gets sent out to anybody who essentially directly works with suppliers.
1:05:25 Joel Frick (6124): So it can change, it usually doesn't, but, uh, you know, if there's a new person that gets hired in procurement, we add them.
1:05:35 Joel Frick (6124): I 
1:05:37 Dave McLean: think the way we probably want to manage that, again, just rather than it being a system admin or IT-owned thing from the integration side, it's very, by the sounds of it, it's very KPI specific.
1:05:48 Dave McLean: So where you have your KPIs, where you have each KPI, defined with a, you know, person, for example, who's responsible for the data entry for that, and a contact person who the supplier can reach out to in case there's an issue with that.
1:06:07 Dave McLean: So if their data for that KPI, you would also then be able to identify the people being notified each month that the data is available 
1:06:15 Joel Frick (6124): for review for that KPI. Okay. 
1:06:19 Dave McLean: Okay, then that way if the four of you have in the room there are the people that are identified for supplier sustainability performance, then when the system transitions those records into that two-day review window, the four of you would be the ones getting a notification that, hey, the supplier's 
1:06:39 Dave McLean: data sustainability performance scorecard KPIs are ready for review. You click a link, here's a list of them for that, for last month, for all of the suppliers.
1:06:51 Dave McLean: So, it doesn't need to be 
1:06:52 Joel Frick (6124): that specific. Okay. Uh, and, uh, it can be when all categories are entered. So, I don't know if you remember, I said, uh, 15th is the last day for data entry, and then 16th, 16th will publish internally.
1:07:11 Joel Frick (6124): So, from the 16th, I would send them out internally to basically everybody that works with suppliers. 
1:07:20 Dave McLean: So, it doesn't need to be. it. It's not cut by the supply, like, it's, if you're a, if you're one of the community of reviewers, you can see it all.
1:07:28 Dave McLean: Yes. Got it. Even better. Awesome. Okay, that's even better. Then in that scenario, what would, what it would look like is, those people would just get a notification.
1:07:40 Dave McLean: And if they, if, should they choose to go in and review the data, the link would is going to post them, or is going to point them to the supplier scorecard application, where they can go and search and peruse the data that's been generated.
1:07:54 Joel Frick (6124): Yeah, correct. That, that's pretty much exactly what we do now. We just send out an email, and I put a link in the email.
1:08:00 Joel Frick (6124): Here's all the scorecards. If you want to go review them, go review them. If, yeah, if you have no issues, then we'll, we're going to publish the scorecard tomorrow.
1:08:10 Joel Frick (6124): Okay, 
1:08:10 Dave McLean: this is a great segue to security. So, in this case, the, with respect to most suppliers, when it comes to SIA employees, the, the most common security break that we see is the difference between something that is tagged as, uhm, mass production versus new model.
1:08:32 Dave McLean: The general rules we've defined are that, you know, if we apply this to what we, what we've decided for PPAP, is that PPAP data and part data, uhm, if it has been identified as mass production, it's also accessible to users that can see new models.
1:08:48 Dave McLean: But if it's been identified as new model data, then it's only accessible to users that have access to new model data.
1:08:55 Dave McLean: It's not accessible to the people that have mass production level of access to the application. Would the same kind of classification exist for the supply side?
1:09:05 Dave McLean: In order for us to carry that forward into their supplier scorecard data? Meaning, could Company A or Facility 1 of Company A be considered a mass production one that we would want to secure the data differently for?
1:09:21 Dave McLean: from Facility B of Company A that is a new model company that has more restricted access to their scorecard data?
1:09:29 Dave McLean: Or is it when we get to, when we're talking about the supplier profile itself and the scorecard data that underpins it, 
1:09:35 Joel Frick (6124): that distinction doesn't really matter? I'm going to say the distinction doesn't really matter, uh, because right now, you're talking 
1:09:47 Dave McLean: at the supplier, right? Supplier and or, uh, the facility level. 
1:09:53 Joel Frick (6124): So from the supplier's perspective, we just send them out by email, and essentially, we'll add whatever it wants added to 
1:10:06 Dave McLean: the email distribution. Got it. So the security model is you either have access to scorecard data or you don't. If you do, you have you 
1:10:17 Joel Frick (6124): have access to see it all. Yes, and then on the SI side. I don't think we need any sort of.
1:10:25 Joel Frick (6124): Restrictions, I don't know if this key is still here. I don't know. I don't think even if there was a in the future, a new model section of the scorecard, I don't think we would need to.
1:10:40 Joel Frick (6124): Make that private for. Current, or current production suppliers. Keith's, Keith's comment. 
1:10:46 Keith Freeman (6781): Yeah, we wouldn't need to, and the reason why is it's just aggregate data. It doesn't have the confidential drawing level information that exists inside the PPAP.
1:10:56 Keith Freeman (6781): They would just be able to see it. So we able to see whether something was late or not. But the correct answer was we aren't currently part of the scorecard, 
1:11:03 Dave McLean: but hope to be in the future. So, Keith, just to play that out for a second. Imagine you have a facility that does both.
1:11:12 Dave McLean: That, that, uh, that makes, uh, both mass production parts and is involved in a series of new model PPAPs. The KPI for, uh, what is it, number of overdue PPAP tasks for last month.
1:11:28 Dave McLean: Let's say it says, uh, it was an atrocious month. Let's say that supplier, that facility had 200 overdue tasks. Of those 200, 180 of them are from the new model stuff that would not be generally visible.
1:11:44 Dave McLean: The mass production visibility folks would be able to backtrack to see the PPAP data for just the tasks, the 20 mass production tasks that are overdue.
1:11:58 Dave McLean: So that differential of, hey, this is the transactional data I can see, and it's relevant to relatively narrow, when I look at the scorecard data and it's significantly bigger, they're gonna know that that's, or they could theoretically know that that's accounted for because this facility is involved
1:12:12 Dave McLean: in some new model development, but they wouldn't be able to see the specifics 
1:12:16 Keith Freeman (6781): of it. That's okay? Yeah, knowing that they're involved in new model development versus knowing the details at the drawing characteristic level 
1:12:25 Dave McLean: is definitely different. Okay, cool, that's awesome. So then from a security model point of view, when it pertains to SIA, Thanks for listening.
1:12:50 Dave McLean: They would to the supplier, uhm, supplier relationship management application to see the supplier profile. They would see the profile, and they'd be able to backtrack that profile to see the scorecard data for that supplier and any other suppliers on that they're granted access to.
1:13:08 Dave McLean: Where they would not see is there's an inheritance break that we've implied in our conversations for PPAP, for example, where if that supplier has both new model and, uhm, master production PPAPs that are in play, the mass production user that can see that supplier would only see the mass production 
1:13:30 Dave McLean: PPAPs, but they would see all of the scorecard data for that supplier. Yeah, I think that's accurate. Okay. And I think that same logic is going to be true as you get into, as we, you know, as we frame this around supplier non-conformance, same thing.
1:13:46 Dave McLean: If a non-conformance is raised against that supplier and it's classified as, uh, within the, uh, within the new model domain, .
1:13:54 Dave McLean: then it would take users that have access to the new model domain to be able to see that record. Yeah, see the details.
1:14:02 Dave McLean: Right. Yep. Okay. 
1:14:06 Joel Frick (6124): So, Dave, the only thing I can think of, and this would be a future issue, is if, in the future, we add some kind of a survey for the cost downs, cost reductions if we want to, like, exclude dollar amounts.
1:14:26 Joel Frick (6124): Uh, but I don't think we need 
1:14:29 Dave McLean: to have that conversation right now. So, you're thinking, like, create a survey for the supplier to report the dollar amounts of cost reduction that they have been able to create over whatever period of time.
1:14:44 Dave McLean: And then that, that information is what gets used from the people that are entering the scores for cost reduction. That's the sort of 
1:14:50 Joel Frick (6124): raw data that we're feeding in. Yeah, I'm not sure what future concepts we have in mind, to be honest with you.
1:14:56 Joel Frick (6124): Okay. I guess in the, in the conversation of security, that's the only thing I could think of that is worth securing is if we add dollar amounts in the cost reduction.
1:15:11 Joel Frick (6124): But I don't even know if that's 
1:15:12 Dave McLean: going to be a thing or not. And that's securing it from some 
1:15:18 Joel Frick (6124): SIA users, but not all. I'm not sure. 
1:15:24 Dave McLean: OK, OK. I will, I'll, I'll, I'll answer it with sort of a more generic answer. A generic capability distinction rather than a sort of specific solution without a, without a really zeroed-in, clear and present need for it.
1:15:39 Dave McLean: Uhm? While we want the product model to have a stable security model that we can all apply and use in different contexts, uh, without having to go, like, every time something new comes up to go back and change that security model, there are still scenarios where we can introduce exceptions to that model
1:15:56 Dave McLean: . So, for example, we've, we've worked through, in the phase one of this project, we've worked through some pretty extensive decisions discussions over how to, how we'd like to secure the data by location departments, uh, by security domains, whether it's EHS, whether, or, like, environment, whether 
1:16:13 Dave McLean: it's safety, whether it's quality, if it's supplier data, the, the, uhm, new model in mass production. We've also talked about how we can secure this by, uhm, dom, uhm, no, sorry, those are the three things, uh, uh, domains, as well as, uh, sorry, uh, visibility classifications.
1:16:31 Dave McLean: If you are an associate versus a section leader versus a group leader, maybe, uhm, maybe you're and so on and so on.
1:16:36 Dave McLean: It becomes another way to cut that data. I think, if I'm, if I'm inferring where the, the conclusion of that possible requirement that you might come up with later on is, is that there might be a scenario where certain surveys, Peace.
1:16:51 Dave McLean: Are actually bound to a specific level of the organization. So, in the case of most supplier surveys, we would consider it like associate level data that's being tracked, even though it's also being secured by, hey, you've got to have access to supplier data.
1:17:06 Dave McLean: You've got to have access to the survey data. Like, there's a few layers of security to cover that, but assuming all else is true, you'd be able to see all of the records in supplier survey.
1:17:18 Dave McLean: If we add in that other dimension where we then say, okay, you can see all of that data unless you don't have access to the visibility classification of it, because you see the system from the associate level, and we've classified that particular supplier survey as a senior manager level or something
1:17:37 Dave McLean: like that. It's something that only the higher-ups should be able to see. Then that actually works within the context of our security model here.
1:17:55 Dave McLean: Awesome. Okay, uhm. Next one from a reporting point of view, right?
1:18:08 Dave McLean: Like I get the sense from from all of this in terms of what it is that we need to show.
1:18:13 Dave McLean: We can we can infer quite a bit from from the scorecard that you've already presented and reproduce as much of that as possible to show when we're talking internal.
1:18:21 Dave McLean: There was there was some discussion in the first workshop about pulling this data out into Power BI. Is that. That's still something that.
1:18:31 Dave McLean: We'd like to pursue, or or would we care to do as much of the. Analytics and last mile reporting within intellects directly.
1:18:44 Joel Frick (6124): I don't have that answer, Dave. I'm pretty weak on power BI, so I don't know. And what context was that brought 
1:19:16 Dave McLean: I don't know. 
1:19:17 Joel Frick (6124): I'll include that in my discussions with, uh, management and see if we're still trying to do that. It may 
1:19:25 Keith Freeman (6781): have been brought up from the standpoint that. What we're not able to get out through the reporting that's built into IntelliQuest.
1:19:38 Keith Freeman (6781): We're using Power BI to get the reports we want, so that probably 
1:19:43 Dave McLean: is why the question was asked. Got it. As general rule, the same would apply. So if you run into a capability limit in IntelliQuest, I'll give an example of, uhm, oh, I'll keep a simple one.
1:19:56 Dave McLean: You might, you might want your report, which is going to go to, like, board-level personnel. You might want it to have a really, really specific name.
1:20:04 Dave McLean: You specific It's got to look and feel a very specific way. It's not, it's not quite the, hey, go generate the dashboard from within Intel X, screenshot it, and drop it into a slide deck.
1:20:14 Dave McLean: We want it to look a certain way. Power BI might be a more appropriate way to do that because it's, it's visualization-based.
1:20:20 Dave McLean: Visualization capabilities allow for a lot higher degree of branding, uh, to be applied to it. You can get, you know, it's a Microsoft product.
1:20:27 Dave McLean: You can get really, really specific with its formatting characteristics that have nothing to do with the analytics side. Similarly, if you are Thank much.
1:20:36 Dave McLean: Looking to try to visualize the data using visualization types that Intellix doesn't support. For example, let's say you want to see a heat map on a map of the United States.
1:20:52 Dave McLean: Of, you know, where all of your suppliers are, and the little bubbles would correspond to what their average scores for last month were.
1:21:00 Dave McLean: Not to say that's what you'd want to do, but like, if that's, if that's how somebody wanted to visualize it, Intellix doesn't have a native, uhm, geolocation.
1:21:08 Dave McLean: visualization type. It doesn't let you plot the data on top of a map in the same fashion, so you'd have to boot the data out into a reporting tool like Power BI that does contain something like that.
1:21:20 Dave McLean: Those would be the kinds of scenarios under which you might want to consider using Intellix. A third-party reporting tool, and if you do, then the model is that in Intellix, you produce a series of what are called source reports.
1:21:32 Dave McLean: They're just the queries that pull the data, and for each one of those reports, you can expose, uhm, a URL, an endpoint.
1:21:40 Dave McLean: That Power BI can connect to. So in Power BI Desktop, you'd go and say, OK, there's 8 data points that I, or there's 8 tables that I want to get from Intellix.
1:21:49 Dave McLean: Here's the links to each one. You instruct Power BI on how to authenticate into Intellix to go retrieve the data.
1:21:55 Dave McLean: Uh, you visualize the data however you need to and build the relationships. And when you're ready to publish that report, you publish it with whatever auto, auto data refresh you want.
1:22:05 Dave McLean: Every 6 hours, every 24 hours, whatever the case is, just instruct Power BI to go and refresh the data that it's using from the Intellix, uhm, You know, Intellix reporting tool.
1:22:16 Dave McLean: It's not, for, for limited usage, it's not incredibly complicated from a setup point of view. Obviously, Power BI, the sky's the limit.
1:22:25 Dave McLean: You could spend 10 years learning everything about Power BI Bye. So that becomes a function of how proficient the person is with Power BI.
1:22:31 Dave McLean: But the actual setup of the data is not something that you guys wouldn't be able to do on 
1:22:36 Keith Freeman (6781): your own with a little bit of guidance. Yeah, it's And then that's expected. I mean, we have to ask where the data can be grabbed from when we set up our Power BI.
1:22:48 Keith Freeman (6781): If we're doing something new, for example, because one of the last modules we launched was the Project Quest. So we want to be able to track when suppliers had returned certain elements, um, whether it be within pseudo-APQP we had in Project Quest or whether it was a phase-related, uh, submission within
1:23:10 Keith Freeman (6781): the PPAP in BPAP. Because, again, the phase concept doesn't exist in mass production, it only 
1:23:15 Dave McLean: exists in model change. Yeah. You got it. Okay. Straightforward. Then, we've talked security, we've talked reporting. Mobile. Again, I think the answer's pretty common here.
1:23:34 Dave McLean: Like, in reality, short of somebody completing a task to enter some data, the whole point for supplier scorecarding is that.
1:23:43 Dave McLean: That's the output on the other side of it, which, you know, the purpose of the mobile app is generally to support some really transactional data, like working through a submission of a non-conformance or something.
1:23:55 Dave McLean: And in particular, it's for those offline scenarios. So, my recommendation is, my recommendation would be for us to not spend a ton of time and effort on building, you know, what will inevitably be a very clunky UI for the mobile app to be able to process for supplier scorecards, in favor of, you know
1:24:14 Dave McLean: , hey, focus on the UI, and the browser, so that when somebody goes into the browser on a, on a laptop, or when they go in on an iPad, or a, uhm, mobile device, through the browser on that device, that the experience is as tailored as possible, because pretty much everything that they're doing in supplier
1:24:30 Dave McLean: scorecard is going to require some degree of connectivity for them to, uh, retrieve and complete the task that they need to do, let alone view the data on the other side.
1:24:40 Dave McLean: Yeah, I agree. I don't, I 
1:24:42 Joel Frick (6124): don't think anybody would be interested in favor of a 
1:24:49 Dave McLean: mobile app or anything. Okay. Perfect. Perfect and I mean the tasks that the people would be completing here. There's the survey stuff which, uh, for raw data and.
1:25:04 Dave McLean: Entry, so that should be fine without without the mobile app used to be able to support it, uhm. Entering data, entering the scores.
1:25:17 Dave McLean: Again, everything you guys have presented so far is. Is that when if somebody has to enter like do direct entry of score data for a range of suppliers for a set of KPIs, they're doing that by referencing other documentation that they have spreadsheets, emails, database, whatever the case is.
1:25:36 Dave McLean: The data that they're using to figure out what the score is implies that they're probably doing that at a laptop.
1:25:44 Dave McLean: They're unlikely to even be doing that sitting on a bus on the way to work in the morning, ripping it out on their phone, because they're not going to toggle back and forth between a massive spreadsheet, with eight XLOOKUPs pointing at different spreadsheets.
1:25:55 Dave McLean: They're, they're going to do it when they get there, when they've got a monitor in front of them, to be able to toggle back and forth.
1:26:02 Dave McLean: Correct. Cool. Okay. Okay, I don't think there's any, any broader use cases that we're, we're missing that would, would imply a strong mobile footprint.
1:26:16 Dave McLean: Setup of the application, they wouldn't do mobile. It's something you're going to do periodically, where you might revise the KPIs or something like that, but that's few and far between.
1:26:25 Dave McLean: It's a small number of users that will be very desktop browser driven. So then in that case, supplier scorecard will have no mobile, mobile view configuration, mobile app configuration, I should say.
1:26:41 Dave McLean: Instead, the goal is to expose the data to people in the browser on whatever device they're looking at in a way that's form-factor responsive.
1:26:53 Dave McLean: Don't, don't, don't compress a view that's designed for an ultra-wide screen app. Instead, monitor and, ah, and display that exact view to a 4-inch mobile device.
1:27:02 Dave McLean: Restructure the page when it opens on a 4-inch mobile device so that it looks 
1:27:05 Brian Hensell (7161): like a proper mobile view. Cool, agreed. 
1:27:17 Dave McLean: Awesome. Are there any big supplier scorecard topics that we feel that we've missed? There's obviously some devil in the details that'll come out as we progress through here, but just want to make sure that we we.
1:27:29 Dave McLean: Catch all the big stuff before 
1:27:31 Joel Frick (6124): we start to close out. Yeah, I have a couple questions. So we also have, we also divide all suppliers into commodities.
1:27:43 Joel Frick (6124): Okay. And we rank them by commodity, and we rank them overall as well. So in this example, they're in the key alliance commodity.
1:28:01 Joel Frick (6124): Okay. They placed 7th out of 7. And then out of all suppliers, all active, ah, ah, mass production suppliers, they placed in 166th place out of 171.
1:28:18 Joel Frick (6124): So, can that feature be, be on their scorecard, and be an intellect? So, a couple 
1:28:27 Dave McLean: of pieces to that. The first one is, can, can we break them down into commodities? Yep, I'm assuming that's just the property of the supplier company.
1:28:36 Dave McLean: Uh, eh, right now is, the commodity, is that a company or a, or a facility 
1:28:41 Joel Frick (6124): level designation? Well, it's like a type of, uh, manufacturing, to the lack of a better term, so, or, where they are on the vehicle.
1:28:52 Joel Frick (6124): Yeah, 
1:28:53 Keith Freeman (6781): but Jesse, what he's saying is, is it, is it divided by depot code? For example, DENSO's various things that they supply to us, or is DENSO in one particular, or two particular types of commodities 
1:29:08 Joel Frick (6124): as a whole? So, yeah, in our current system, they're, they're all the same. So, all depots would be the same commodity, and I haven't even thought about if they, you know, splitting them.
1:29:27 Joel Frick (6124): And I guess that would increase the number of suppliers. It would be, it would be 171. It would be, be all the depots combined.
1:29:35 Joel Frick (6124): Yeah. I 
1:29:36 Dave McLean: had an adjacent question for that. The this is, can a supplier, or a facility in this case, have more than one commodity?
1:29:45 Dave McLean: Can they actually sit in multiple commodities where we would need to bucket them? I'm going to say no. 
1:29:50 Joel Frick (6124): We, we bucket them in, I guess, their most, uh, how do I put it? 
1:29:58 Dave McLean: Whatever we spent, 
1:29:59 Joel Frick (6124): whatever we spent the most money on, that's what we, the commodity we put there. So you could, you know, like Sumitomo with the wire harness, it would be probably.
1:30:07 Joel Frick (6124): Or, actually, that's kind of a bad example. Like Sumitomo's, Sumitomo is a cardboard poster, it's like a, I don't know, yeah, they'd be unelectrable.
1:30:21 Joel Frick (6124): But we have another commodity that's, if you, that's high content. That's also an electric, uh, or also a harness supplier, but we spent so much money, so they're in the high content 
1:30:36 Dave McLean: commodity. I think, I mean, at the simplest, I think it's a, it's a. Uh, a selection that you make on the parent company, and you just carry it down to all the facilities, if you, if you don't necessarily want to have to go through and categorize each facility, if you do, we would do, yeah, okay, so 
1:30:56 Dave McLean: the commodity becomes something that we assign in a pick list at the parent company level. For the monthly facility level scorecards, we're just using whatever the score, or whatever the commodity of that facility's parent is, to be able to bucket them together.
1:31:11 Dave McLean: Now, as far as ranking them within that, so if I've got 17 facilities that are bound to parent companies that are in the engine commodity, for example, so the thing that you're trying to do is the, what's my ranking, based on the overall score, what is my ranking out of the total number of them for that
1:31:34 Dave McLean: one. And so in that case, we can do it as a We easily display that to the person. Fire name.
1:32:03 Dave McLean: Yeah, I think we can. So the. There's there is a rank function in an in Alex's Excel or in Alex's reporting tool that we can use that based on a range of data you pick you point at a numeric field.
1:32:19 Dave McLean: And it will. It will just rank it one through N. Whatever the total number is, it doesn't necessarily tell you the out of, but we can figure that out.
1:32:27 Dave McLean: And that's something that can be exposed in the reporting tool. If you wanted to show it on the scorecard itself, we would just then have to feed that in to the scorecard record into some fields that could then be available for the person to view, so that when they open their scorecard record in Intellects
1:32:47 Dave McLean: for that month, if I'm a user at A315 Heartland Automotive, and I go and look at my scorecard history, and I say, you know what, show me my, show me my scorecard for, uhm, August 2026, they'll see a form that summarizes all of this data, and at the top we can have fed back in the ranking information 
1:33:07 Dave McLean: that, uhm, that would need to come. So I think it should be okay to do that. The thing we'd have to be very mindful of here, is that if there's ever subsequent changes to the data, so, you know, a month later, somebody goes in and changes one of the scores that has a meaningful impact on the, the ranking
1:33:27 Dave McLean: , we'd have to make sure that the job that feeds that ranking information into the scorecards runs again. And that, that one, I'd rather not be running that daily.
1:33:39 Dave McLean: I don't, I don't think that makes sense. It a ton of sense. So. 
1:33:49 Joel Frick (6124): And the way you explain the, like, changing of a due date. Yeah. That you just hit refresh. To the scorecard?
1:33:58 Joel Frick (6124): Refresh rank. 
1:34:01 Dave McLean: It can do the refresh on a specific KPI, but then you'd have to hit another refresh button at the scorecard level 
1:34:09 Joel Frick (6124): to refresh the ranking. Let me ask you this. If this 
1:34:17 Dave McLean: was a, is this a must-have, a nice-to-have, or a, hey, it'd be great if we could have, but, you know, if it didn't find its way in for the ranking displayed on displayed to the user on the scorecard when they're looking at it, how, how big of a deal 
1:34:32 Joel Frick (6124): is that? How big of a change is it? Uh, I don't know. I need to, I need to ask management about that.
1:34:38 Joel Frick (6124): Okay. I, I think, uh, I think we might be, so, to answer, the portion of your question, the commodity ranking is more important, I think, than the overall.
1:34:49 Joel Frick (6124): Uh, probably doesn't help any, but, uh, we typically like to tell them, hey, and your, and your, uh, uh, and your business commodity, or your type of manufacturing you placed in this, you know, your last place, so, so do, do better.
1:35:17 Joel Frick (6124): Uh, so I think that the commodity ranking is, is more important, but like I said, it probably doesn't help. 
1:35:22 Dave McLean: Yeah, yeah, it's, um, the other side of that is that it's not even just, so if I change it down.
1:35:33 Dave McLean: At a point, after the end of the month, or after whatever that window is, like I refresh the data, or I modify the score, or something like that, no problem.
1:35:41 Dave McLean: It can automatically recalculate the score for that month, and even with another button, we can get it to tell us what the ranking is.
1:35:54 Joel Frick (6124): Yeah, I think that'd be okay, like, if the scorecard was a snapshot, or, yeah, the scorecard is a snapshot, and then supplier disputes, Thank us.
1:36:05 Joel Frick (6124): Pmap, that wasn't on time, actually was on, or, whatever, we correct that score, and then it only refreshes their ranking.
1:36:15 Joel Frick (6124): I think that'd be fine. We don't need to refresh 
1:36:19 Dave McLean: all suppliers. One more question for you, uhm, what if this property only shows when the page opens in Intellect, so like, you know, presumably at some point, they might want, they might want to download the scorecard, like, as a Word document or something like that, just to have it for posterity's sake
1:36:39 Dave McLean: . Right now, we're sort of scoping this around the users, viewing it in the browser itself in an Intellect's form. I can, I can create, or we can create some sort of a job that fires on page load for that view to go and figure out, uh, basically query at, like, with a little spinner over it until it 
1:36:59 Dave McLean: returns the response. Query how many, how many suppliers for this month are in this commodity, or have the same commodity, and then separately, how many of them have a, uh, a score above what I do in this moment.
1:37:14 Dave McLean: But that value would just never be stored. It would just display to the user on the page when they, when they open it up.
1:37:21 Dave McLean: It wouldn't be something that's a reportable value. I wouldn't be able to, for example, easily. go in and trend my ranking 
1:37:29 Joel Frick (6124): over six months. So it would be like a current standing. You got it. You 
1:37:35 Dave McLean: got it. For that month. So it would still work if I went back into last month's record or the month before, because each month of those is date-bound.
1:37:42 Dave McLean: When I open the record up, it just refetches whatever the ranking data is as of page load. That way it sidesteps the, hey, every time my ranking changes, that means by definition other people's 
1:37:54 Joel Frick (6124): rankings change too. Yeah, I think that'd be okay, uhm. You're saying it'd be, sorry, earlier you said it'd be, like, it wouldn't be on their scorecard, it would be, like, on, like, their dashboard or something?
1:38:24 Joel Frick (6124): Yeah, so, 
1:38:27 Dave McLean: let's put it in two different contexts. Like, in this case, when I go, when I go to view this data, I can do it through a couple of different means.
1:38:35 Dave McLean: If I view it from a dashboard, then it's probably not going to show the ranking data. It's going to show the score data.
1:38:43 Dave McLean: So, scores, ah, the aggregate percentages that I have, the max points, the order points, like, most of the stuff that you have in the, in the meat of this, ah, of this record.
1:38:55 Dave McLean: And if we can, if there's a way to do it along the way where we can go query, ah, with the reporting tool, the ranking for each of these, then so be it.
1:39:01 Dave McLean: Then we'll do it. That's awesome. We can do it. But I just, I'm skeptical that, that it's going to be possible on the dashboard at that point in time, unless we're storing the data somewhere.
1:39:09 Dave McLean: And the barrier, the barrier to storing that data is that any time there's a change, we have to recalculate the data for the entire month across all suppliers.
1:39:17 Dave McLean: And that, that's the part that would concern me with this. So what I'm saying is, for the dashboard, they would not see the ranking data.
1:39:25 Dave McLean: However, if they go to, if they were to open their supplier profile for their, their company or their facility or whatever level we're talking about here, they open it, I open it up for my facility that I work at, and I scroll down to the section that contains all of my past supplier scorecards.
1:39:42 Dave McLean: And I open up the August 2026 one. When it opens, it's going to show me this data in a read-only version of its raw form, so a grid with all of the scorecard properties grouped by the category.
1:39:55 Dave McLean: It's going to show me the max points, the awarded points. It'll show me my totals and everything like that. But for the ranking information, it'll just live as a little widget off to the side on that form.
1:40:06 Dave McLean: That when the page loads, you'll see a little loading spinner for two to five seconds, depending on on how active they've been in the system.
1:40:15 Dave McLean: And when that loading spinner disappears, it'll display there. It can then display their overall monthly ranking across all suppliers and their commodities.
1:40:22 Dave McLean: It's just that we're, we're, we're querying that on page load, and then when they navigate away, we don't actually store the ranking anywhere.
1:40:32 Dave McLean: Okay, yeah, yeah, 
1:40:33 Joel Frick (6124): that's, uh, yeah, I don't think there'll be any problem with that at all. Yeah, yeah, I don't see an issue with that at all.
1:40:45 Dave McLean: Okay, look, if we can, if we can find a good way to store it, or to, to either store it in the database, or to display it on the reporting tool without storing it in the database, that would then we will, right?
1:40:55 Dave McLean: I don't want to preclude it if there's, if there's something in there. I'll be honest with you, I haven't used the rank function in an Alexa's reporting tool very much, uh, which is why I'm somewhat hesitant to go and commit on it.
1:41:05 Dave McLean: But, uh, in terms of being able to figure out where you fall for that month, or where you fall for that month for the commodities that you're part of, it is, it, in, in technical terminologies, we would, we would request that information from the API, which would be, uh, essentially, how many suppliers
1:41:24 Dave McLean: are there for, that have a scorecard for the month. That month of August 2026, that's what would give us 171, how many have a score that is higher than the score that we have, that'll give us the 166, and then present it to the user as 166 over 177, or 171, same basic idea for the commodities that the
1:41:43 Dave McLean: only addition being, when we ask for how many there are, ask for how many that are filtered for the commodity that that 
1:41:50 Joel Frick (6124): supplier is related to. Yeah, that sounds good. Okay. 
1:42:00 Dave McLean: Does the commodity change ever? 
1:42:03 Joel Frick (6124): Yes. 
1:42:04 Dave McLean: Okay. So, when we change the commodity of a supplier, are we expecting that commodity change to basically retroactively apply? Through all of the past scorecard data?
1:42:17 Dave McLean: So, if I change it from Key Alliance to Engine, and I were to then go and open an old supplier scorecard, am I now being ranked as an Engine supplier versus Key Alliance?
1:42:28 Dave McLean: Or are we snapshotting the commodity? of that supplier at the moment the scorecard is created, so that it's locked for the month?
1:42:35 Dave McLean: That way, it's Key Alliance all the way along, until we change it to Engine, at which point, going forward, we're now being measured 
1:42:41 Joel Frick (6124): against Engine suppliers. Uh, I'm gonna say, uh, snapshot. So, once uh, yeah, so we don't want to retroactively change the commodity.
1:42:52 Dave McLean: Cool, okay, so another decision. Commodity is something that we factor into the creation of the supplier scorecard record as 
1:43:01 Joel Frick (6124): a snapshot of value. Cool, what else you got? Well, sticking with this real quick, I guess I don't want to commit to all commodities.
1:43:19 Joel Frick (6124): Or, I'm sorry, all depots being the same commodity, I wonder if my management would like 
1:43:26 Dave McLean: to split them up. Uh, sorry about I'm happy for you to take that one away, that's an easy change to make on our end.
1:43:34 Dave McLean: Like, I mean. Once we're rolling and we're actually creating data past go live, it's a lot harder to change that, but, um, through the build cycle, the field for selecting the commodity is actually going to be created on the underlying table that stores Cheers.
1:43:51 Dave McLean: All parent companies and facilities in one big block, and it's just that for parent companies, it'll be a selectable field for, uh, facilities.
1:44:03 Dave McLean: The, the behavior that we, we, we've agreed to up till maybe you go. Guys, change your mind and, and go with that direction would just be that for the facility, it's a, it's a lookup against the, the parent company.
1:44:14 Dave McLean: If you guys decide in six weeks or three weeks or something like that, you know what, actually, we want to attribute a different commodity for each facility, given that we're tracking all this data at the facility level.
1:44:23 Dave McLean: That's not a problem. It just means that we, we wouldn't make it a read-only field. We would make it editable as well.
1:44:28 Dave McLean: So you can, you can peg the parent company to one commodity and any combination of the facilities below it can be different, 
1:44:36 Joel Frick (6124): different commodities. Okay, okay, perfect. Like I said, I'll, I'll add that to my discussions. Cool. So, another question. So, uhm.
1:44:54 Joel Frick (6124): Like, you asked about, do commodities change? So, typically, any change to the scorecard or any metric, uh, like, on the third page, whether we change, like, you know, the percentage or the dollar amounts.
1:45:09 Joel Frick (6124): Yep. Um, we don't want to, so these, these are decided by upper management. Yep. So I guess my, I think I already know the answer, but these will be locked in and can only be changed by.
1:45:26 Joel Frick (6124): A certain level of, 
1:45:28 Dave McLean: uh, user, right? Yeah. So the underlying setup, everything in that sort of back office model that we talked about where you would define what KPIs there are, define which suppliers need to have the scorecard generated for them, define the the target tables for, or sorry, the, uh, uhm, industry average
1:45:47 Dave McLean: tables for, uh, for the health and safety stuff, all of that setup data would be bound to a security group called Supplier Scorecard Application Administrator.
1:45:58 Dave McLean: Okay. Likely a very few number of people, plus the system admins of the system, of which, I think, Rick, we said there were three or four of them in total when we go, when we're live?
1:46:14 Dave McLean: that again. How many, how many, how many system admins do we have, Rick? I think it's three or four? Yeah.
1:46:20 Dave McLean: Yeah. So, those folks who kind of have Godmode access, and then however many supplier scorecard application administrators you guys decide you want to grant access to those KPI setup screens and publishing 
1:46:34 Joel Frick (6124): and versioning screens. Yeah, we'd make you, you were the app administrator. Nice. Godmode. Uh. I think one last question, Dave, which is a branching off of another conversation we had earlier.
1:46:54 Joel Frick (6124): Uh. So we remember we talked about giving so changing the screen. Does it score, uh, manually and it doesn't reflect the actual data?
1:47:10 Dave McLean: Yep, yep. 
1:47:11 Joel Frick (6124): Uhm? I guess that feature I would want. I would wonder if. If it can be like an approval process.
1:47:23 Joel Frick (6124): So, like the engineer level says. They want to give them zero points and I would like that. Personally, I would like to see that go through.
1:47:35 Joel Frick (6124): Like, the group leader and approve that change. The reason for that is we have, like, a rogue engineer who is mad at their supplier because they didn't answer their email.
1:47:48 Joel Frick (6124): That's not reflective of the actual data. We don't want to give them access to, give them zeros just because 
1:47:55 Dave McLean: they're mad at them type thing. I love it. We have a vindictive, love it. It's passive aggressive too. It's great.
1:48:07 Dave McLean: Okay, so what we'd be saying then in this model is that if I am responsible for the data entry or if I'm reviewing the data and I see a data point that has been auto captured, so it's based on a KPI that is a query type KPI and I'm looking at it and I disagree with the queried result for whatever, you
1:48:30 Dave McLean: know, business rationale I have, instead of me just having to go and change the value and maybe post a comment, what I need to do is to fill out a, a, a, uhm, you know, data exception report or something like that where it's in line with the individual KPI and I say, you know, for this KPI, for this 
1:48:49 Dave McLean: supplier, for this month, uhm, I want to do an exception report and the current value is, X, I want to change it to Y, and here is why that is.
1:49:00 Dave McLean: How do we know who it is that's got to fill that out? It's the, it's a, in this case, it's the role.
1:49:06 Dave McLean: Or are we selecting from a, a bucket of group managers or, or, you know, different 
1:49:12 Joel Frick (6124): approvers for those types of things? Yeah, yeah, I would, I would say, yeah, from, like, at least a group leader to approve the change.
1:49:28 Dave McLean: Yeah. Yeah, and if it's rejected, then it's rejected. We just notify the person that it's rejected and that's that. If they feel they want to submit another one to make their case again, they can, but, uhm, it's just a, it's a simple one and done, 
1:49:42 Joel Frick (6124): approve or reject. Yeah, yeah, so I guess similar to, like, the are not as complex, but similar to the, uh, like, PPAP goes, the engineer approves the PPAP, and then the group leader has to approve it, uh, kind of the same thing that.
1:50:00 Joel Frick (6124): The engineer manually changes the score, and then it goes to a group leader for yes or no. Okay, I don't think it has to go beyond I don't think it has to go beyond the comment box.
1:50:11 Joel Frick (6124): So, why is this this core need to change and then. D**** to the. Group leader for approval. This is that.
1:50:21 Dave McLean: I think so too. Do we just in the creating a new workflow for something like this? I just want to make sure that this is actually worth.
1:50:29 Dave McLean: Worth it. How many of these do we have on my screen right typically where where we would want to change something from the published data as it exists at the time that that 
1:50:39 Joel Frick (6124): that data is being reported. I don't know. I need to talk to Luke about this. Maybe it's just easier for if it's only two or three a month, then you would require to use the administrator.
1:50:59 Joel Frick (6124): I request for change. You know what I'm saying? Yeah, if that's. If that's 
1:51:05 Dave McLean: the case, if like if it's that low frequency, then I would actually say that for any of those direct query information pieces.
1:51:15 Dave McLean: The only people that have the ability to override that value are the application administrators. And you guys develop whatever business process outside of Intellect that happens to change that, but you would be able to post the revision to it and log a comment just for audit traceability, in case you
1:51:32 Dave McLean: ever have to answer to why that was changed. But, uhm, they would not actually have the access to see the override field on their screen in that case.
1:51:41 Dave McLean: They would just, they would have the ability to refresh the data, right, hey, go re-fetch the data from whatever place we need to for this KPI, and if they still don't agree with the result, hey, shoot us an email to your group leader, shoot an email to the application admins, uh, explain, make your 
1:51:58 Dave McLean: case, and the application admin would be able to go in and do an override 
1:52:02 Joel Frick (6124): in a back-end screen. Okay, yeah, yes. Okay, so this is regarding what I said. I like that idea better, so.
1:52:08 Joel Frick (6124): Okay. So, yeah. Anybody with an admin level can do it. Yeah, and you'll require a computer hire to send the request.
1:52:15 Joel Frick (6124): That way you know who's been in, right? Yes, yeah. Cool. Love it. Okay. 
1:52:22 Dave McLean: Okay. Awesome. How we feeling? 
1:52:32 Joel Frick (6124): Pretty good. I'm I'm excited. 
1:52:37 Dave McLean: OK, so let's talk next steps, both for this as well as everything else. So our AI eye in the sky has been logging transcripts.
1:52:45 Dave McLean: We use that on our end. We use that to derive and author a series of architectural decision records that capture all of the key decisions around the structure that we're working through.
1:52:57 Dave McLean: Before you guys get a look at that, I get a look at that. I get to review because otherwise we would just be sending complete AI slop over to you guys, which is not the goal here.
1:53:05 Dave McLean: We want to use it for the benefit of time savings while still encapsulating human review and feedback in that process.
1:53:13 Dave McLean: So, that for this session, as well as the other two, um, it'll take me about a week to review through everything here.
1:53:20 Dave McLean: Um, to give context, Rick and Joel, I've generated all of the ADRs from Tuesday and Wednesday's session combined with everything we have previously.
1:53:31 Dave McLean: We're now at over a hundred discrete decision records that, uh, are in various states of review. All the older stuff I've reviewed through now and are extracting, it's the 20 or 30 new ones that have to be reviewed over the course of the next week or so.
1:53:45 Dave McLean: Once I've had a chance to review all of those to make sure that they all accurately reflect our understanding of the conversation and cross-referenced against any specific questions that I've got here, we'll export those, uh, by component, which in this case is basically going to be by day of our workshop
1:54:01 Dave McLean: , one. For, uh, part product, uh, inspection, uh, part product data, sorry, pilot part, pilot product, pilot part data, sorry, getting my, my P's mixed up here, um, one for PTAF and one for, uh, scorecard today.
1:54:18 Dave McLean: The scorecard one will also cover the decision records that were captured during the first design workshop, such as they have been amended and, and either, either amended, superseded, or added to by our conversations today, which, in this case, there's no there's lots of amendments that come from it,
1:54:36 Dave McLean: and lots of additions that come from today's conversation. Um, you guys will get a chance to review that. I'll look for, for that review to be completed within, within a week or two.
1:54:45 Dave McLean: Uh, we'll schedule some times to be able to walk through any decisions and, and, you know, capture any feeds. Um, but those decision records are, they are the common statement that says, hey, this is what this thing needs to do, and how we expect it to work.
1:54:59 Dave McLean: They are not the, how do we build this thing? How do we build this thing? Happy to share that for information purposes.
1:55:06 Dave McLean: That's not one that I'm looking for you guys to approve, because in some cases that might be too technical to, to realistically expect any given reader at SIA to be able to review that in entirety and give, give an approval.
1:55:19 Dave McLean: We'd, we'd spend the next six months reviewing that kind of stuff. You will be able to approve that, that vision when it's actually built and you start testing it, or start seeing some of that come out of the, come out of the, the actual product development side.
1:55:32 Dave McLean: So, as far as next steps, I'd say, look for, look for a document from me by the end of next week that captures this as well as the other documents that are documents for the other workshop sessions for you guys to start to review, um, plan for a little bit of light reading, uh, the following week, and
1:55:46 Dave McLean: , uh, and again, any comments, track changes, uh, post comments in the Word document, all that good stuff, and we can, we can huddle up in a call to be able to go through any Call.
1:55:54 Dave McLean: Comments or feedback 
1:55:55 Joel Frick (6124): that you guys have along the way. Okay, Dave, 1 thing, um, so, at the end of the day yesterday, Luke, and then I think Keith was also involved in that conversation.
1:56:09 Joel Frick (6124): They wanted to explore. Having a small type of functionality for process change requests, not the full boat. When can we set up a meeting to further explore that?
1:56:20 Joel Frick (6124): Yeah, I, 
1:56:21 Dave McLean: uh, I had a coffee machine conversation with Emma this morning about that when we took a break, um, so she's aware of that and that, uh, based on everything we talked about yesterday, I don't believe that that is an MOC, uh, where it's currently bucketed.
1:56:36 Dave McLean: So the, the biggest risk that I would have seen to moving that scope as an MOC class into this, or into this phase of the project to be able to achieve that is mitigated by the fact that I don't actually think that it was properly allocated to MOC in the first place.
1:56:54 Dave McLean: I think it's just a form and a workflow in the PPAP application. Yeah. So that sense, what that would mean is, and we can do this next week, and this is probably a Yumi and Emma thing to work out together, is we can do either add to the existing change order that I think you're working through, or do
1:57:12 Dave McLean: a different one depending on the state of those, to de-scope the MOC variation of process change, and insert into this phase a custom object form in PPAP or an extension of the PPAP object with the basic parameters of it.
1:57:31 Dave McLean: What that's gonna look like is probably a one-hour call, uh, discovery call with, uh, with Luke and any other players that, that hold that information, just so that we can make sure that it is what it seems to be.
1:57:42 Dave McLean: It seems to be, seems that way, but, you know, I wanna, I wanna be able to, to scrutinize that a little bit more.
1:57:47 Dave McLean: Before we try to put those, those requirements into a change order and then reallocate the necessary budget to it. Yep.
1:57:53 Dave McLean: Sound good, Keith? 
1:57:54 Keith Freeman (6781): Yeah, and I was gonna comment, I, I, I, I wholly agree that it's a, it's a form-based way of creating a PPAP rather than a, a Bomex forced way cause it literally is a supplier submits a form and then there's a review process and then once that review says, we proceed forward, then it can or cannot result
1:58:16 Keith Freeman (6781): in a PPAP. I mean, it is literally that simple whereas the. PCR that we are talking about is going to be bringing in multiple people within multiple departments at SIA to then.
1:58:30 Keith Freeman (6781): I reached that decision tree, so it's in scope. It currently as Luke wants it. And as it currently exists, it only exists within the engineer that handles that supplier and the supplier itself, like we 
1:58:43 Joel Frick (6124): already have within the PPAP. So, similar to what you were saying, Dave, what Luke was calling it was a Supplier Assurance PPAP.
1:58:51 Joel Frick (6124): So they share requests by request 
1:58:54 Dave McLean: to PPAP, yes. Yeah, yeah, that makes sense. If we do that, if we take it out of Phase 3, so we, we de-scope the, the MOC-based version of it that I think Matt, Matthew was thinking, primarily keying in off the term process change.
1:59:08 Dave McLean: I think it's where that, that got allocated to MOC. So if we reconceive of this as, no, it's a form, it's got a workflow, it's maybe got a couple of approval tasks that are embedded in it to get multiple people to be able to say, yeah, you know what, we're, we're good if they make this change, provided
1:59:23 Dave McLean: we do, the full PPAP to, uhm, match that change. Is there, is there still a PCR that would live in MOC as a more, more sort of thorough management of change?
1:59:37 Joel Frick (6124): Yep, yep. And 
1:59:39 Dave McLean: that, and that deals more with like a management of change, uh, to a process change that Subaru is making in-house.
1:59:47 Dave McLean: Yep. Got it. Less about the supply. So, okay, I'm going to restate what I said a second ago. The change order won't de-scope the MOC PCR, Bye-bye.
1:59:56 Dave McLean: Bye. Because it sounds like that's still needed in Phase 3 as a specific management of change type. This PCR, maybe we come up with a slight variation of the name so that we don't use it twice, this one just becomes an added, or an addition to the PPAP application without needing to reallocating budget
2:00:13 Dave McLean: . It's just, it'll be new budget to build it, though likely not a significant lift because 
2:00:18 Joel Frick (6124): it sounds fairly simple. Yeah, we, again, we'll have to triple check with everybody here, but that's basically what we all believe in right now.
2:00:26 Joel Frick (6124): So, but yeah, we'll have a look. We'll have an hour-long conversation, Dave, if you reference that as a supplier request, PPAP, we understand.
2:00:38 Joel Frick (6124): Supplier, supplier PPAP request? Yep. 
2:00:41 Dave McLean: Love it. That's good. Joel, you've got a career in branding ahead of you, Awesome. All right, guys, I appreciate everybody's attention and attendance this week.
2:00:55 Dave McLean: For those in the room, it was terrific to be able to see you guys. For those that were able to dial in at different points, thank you for sharing and sticking with me.
2:01:01 Dave McLean: I know it's tough to listen in to these long-form calls and accommodate me not being able to travel. I've been out a little bit, and my kids need to see me.
2:01:14 Dave McLean: They were not impressed with the last trip that I took. Let's just say we had to come back with a pretty good gift from L.A.
2:01:21 Dave McLean: last week, so. But I appreciate it, and we'll be in touch, certainly next week, about the change order for the supplier PPAP request, and towards the end of the week for the architect of the actual decision record summaries for this and the first half.
2:01:36 Dave McLean: In the meantime, the build-out for the first phase 2A program framework that continues, again, that's not dependent on anything on your end.
2:01:46 Dave McLean: We've got a general idea of where the plumbing needs to go. Uhm, we'll, we'll keep on keeping on with that.
2:01:51 Dave McLean: I've got a couple of people 
2:01:51 Joel Frick (6124): working on that stuff over here. Two quick questions for you. Yeah. Do you know if the, ah, location structure will be set by Monday for?
2:02:02 Joel Frick (6124): Yeah. Okay. It'll, it'll be set by Friday afternoon. I'm looking at the latest. In the, in 
2:02:07 Dave McLean: the, sorry, in the test environment specifically. Okay. 
2:02:11 Joel Frick (6124): And I didn't see it in the schedule, but I thought you and Eric were scheduled for Monday, uh, to do a download.
2:02:18 Dave McLean: He said he was going to shoot to have. The files over to me by end of day Friday, so I think.
2:02:28 Dave McLean: I don't have anything in the calendar right now for Monday with him, but, uhm, if he gets it in by Friday at this point, I've got some openings on for on Monday.
2:02:37 Dave McLean: Monday that we can work with. So as long as he as long as he can send me an email on Friday with a hey, all the files have been posted and they're ready for download, 
2:02:45 Joel Frick (6124): then we're good to go. Thank you very much. 
2:02:49 Dave McLean: Alright guys, appreciate everybody's time. Thank you. Thanks. Bye.
