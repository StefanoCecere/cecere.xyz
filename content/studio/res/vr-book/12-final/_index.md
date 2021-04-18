---
title: 12. Evaluating
slug: evaluating
#linktitle: stefano
# Page summary for search engines.
summary: 'Which headset is better? Which VR experience is more comfortable over a long period of time? How much field of view is enough?'
date: 2017-09-09T00:00:00
lastmod: 2021-04-08T00:00:00
type: book
weight: 120
toc: false
---

Which headset is better? Which VR experience is more comfortable over a long period of time? How much field of view is enough? What is the most appropriate interaction mechanism? Engineers and developers want to know the answers to these kinds of questions; however, it should be clear at this point that these are difficult to answer because of the way that human physiology and perception operate and interact with engineered systems. By contrast, pure engineering questions, such as ''What is the estimated battery life?'' or ''What is the vehicle's top speed on level ground?'', are much more approachable.

Recall the definition of VR from Section [1.1](http://lavalle.pl/vr/node385.htmlnode3.html#sec:what), which involves an _organism_. When VR is applied by scientists to study the neural structures and perception of a rat, there is a clear separation between the rat and the scientist. However, in the case of VR for humans, the developer frequently tries out his own creations. In this case, the developer alternates between the role of scientist and rat. This introduces numerous problems, especially if the developer is naive about perceptual issues.

Further complicating matters is adaptation, which occurs on all scales. For example, a person evaluating a VR experience many times over several weeks may initially find it uncomfortable, but later become accustomed to it. Of course this does not imply that its likelihood of making a fresh user sick is lower. There is also great variation across people. Any one person, including the developer, provides just one data point. People who are immune to sickness from vection will have no trouble developing such systems and inflicting them upon others.

Another factor is that most people who create systems are biased toward liking what they create. Furthermore, as discussed in Section [8.4](http://lavalle.pl/vr/node385.htmlnode264.html#sec:vection), just having the knowledge of what the experience represents can effect vection. These issues fall under the general heading of _human factors_, which has been studied for decades. One closely related area is _human-computer interaction_ (_HCI_), which uses the methods discussed in this section. However, since VR works by disrupting the low-level operation of sensory systems that we have trusted for our entire lives, the level of complications from the lowest-level side effects to the highest-level cognitive effects seems unprecedented.

Opportunities for failure exist at all levels, from hardware, to low-level software, to content creation engines. As hardware and low-level software rapidly improve, the burden is shifting more to developers of software engines and VR experiences. This chapter presents several topics that may aid engineers and developers in their quest to build better VR systems and experiences. Section [12.1](http://lavalle.pl/vr/node385.htmlnode386.html#sec:training) introduces methods for guiding them to improve their discriminatory power. Rather than adapting to become oblivious to a problem, a developer could train herself to become more sensitive to problems. Section [12.2](http://lavalle.pl/vr/node385.htmlnode395.html#sec:best) applies the fundamentals from this book to provide simple advice for VR developers. Section [12.3](http://lavalle.pl/vr/node385.htmlnode403.html#sec:sickness) covers VR sickness, including the main symptoms and causes, so that VR systems and experiences may be improved. Section [12.4](http://lavalle.pl/vr/node385.htmlnode420.html#sec:experiments) introduces general methods for designing experiments that involve human subjects, and includes some specific methods from psychophysics. All of the concepts from this chapter should be used to gain critical feedback and avoid pitfalls in an iterative VR development process.

{{< list_children >}}