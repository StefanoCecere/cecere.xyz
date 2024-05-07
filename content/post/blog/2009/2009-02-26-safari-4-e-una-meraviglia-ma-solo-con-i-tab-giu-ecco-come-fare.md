---
draft: false
categories: [blog]
date: 2009-02-26
guid: http://stefanocecere.com/2009/02/26/safari-4-e-una-meraviglia-ma-solo-con-i-tab-giu-ecco-come-fare/
id: 1537
tags:
- apple
- mac
- OSC
- tips
title: Safari 4 è una meraviglia ma solo con i Tab giù! ecco come fare
slug: /2009/02/safari-4-e-una-meraviglia-ma-solo-con-i-tab-giu-ecco-come-fare/
---

dato che ormai la maggior parte dei miei amici usa Mac credo possa essere utile che ogni tanto ne parli (uso mac ormai dal 1992!!)

il nuovo Safari 4 è meraviglioso bla bla ma fa letteralmente angoscia con quei tab posti là in alto.. e poi non ha più i pulsanti di stop/ricarica pagina! ovviamente dopo essermi lamentato con la Apple di queste due "cadute", ho trovato come ripristinarle:

o con il mitico MacPilot (un utility che configura e maneggia tutti i segreti di OSX) oppure scrivendo nel Terminale:

defaults write com.apple.Safari DebugSafari4TabBarIsOnTop -bool NO

invece il ricarica/stop è finito nella barretta dell'indirizzo web tutto a destra!

buon OSX a tutti!
  
s