---
title: "Regular Expressions: il paradiso del cerca e sostituisci automatico"
slug: "regex"
summary: "Se una procedura ha una regola, allora può essere automatizzata. Scopriamolo con questo semplice sistema per cercare e sostituire del testo."
subtitle: ""
tags: [text, automazione]
categories: [tutorial]
date: 2021-04-06
lastmod: 2021-04-06T12:33:22+02:00
featured: false
draft: false
image:
  caption: ""
  focal_point: ""
  preview_only: false
projects: []
---
> Se una procedura ha una regola, allora può essere automatizzata. Scopriamolo con questo semplice sistema per cercare e sostituire del testo.

Ho 1200 files di testo che presentano tutti una sequenza di parole con lo stesso formato, e voglio cambiarli tutti.

Ad esempio: 
```
url: /parola1/parola2/parola3/parola4 con testo a seguire
```
e voglio eliminare la parte parola3, cambiando il tutto in 
```
url: /parola1/parola2/parola4 con testo a seguire
```

Ovviamente a mano impiegherei ore e sarebbe abbastanza stressante.
La domanda è: "c'è una regola con cui potrei trovare tutti questi testi e una regola per sostituirle? **se sì, benvenuti nel mondo dell'automazione!**

in questo caso io cerco qualsiasi testo che inizio con `url: /` seguito da testo a caso, sequito da un altra `/` etc.. tipo questo formato, dove ho numerato le parti tra le `/`:
```
url: /$1/$2/$3/$4
```
e poi le vado a sostituire eliminando la parte `$3`

Per farlo usiamo le [Espressioni Regolari](https://it.wikipedia.org/wiki/Espressione_regolare) (o Regular Expressions, abbreviate in RegEx) che sono uno standard di qualsiasi linguaggio di programmazione o editor di testi per trovare dei patterns di caratteri e modificarli.

Cercherò quindi:
```
url: \/(.+?)\/(.+?)\/(.+?)\/(.+?)
```
dove uso `\/` per il carattere `/` e `(.+?)` rappresenta un qualsiasi numero di caratteri, e lo sostituirò con:
```
url: /$1/$2/$4
```

E il gioco è fatto! 1200 file cambiati in un secondo.
Le Regular Expressions sono estremamente potenti, inventate già negli anni 1950!
E ci permette di capire una cosa: se qualcosa ha delle regole che possono essere formalizzate, allora può farla una macchina, e presto potremo chiedere alla nostra A.I. (Intelligenza Artificiale) di eseguire la procedura per noi.

PS: l'ho usata per riorganizzare i vecchi post del mio blog