---
title: "Regular Expressions: il paradiso del cerca e sostituisci automatico"
slug: "regex"
subtitle: ""
summary: ""
tags: [text]
categories: [tutorial]
date: 2021-04-06T12:33:22+02:00
lastmod: 2021-04-06T12:33:22+02:00
featured: false
draft: false
image:
  caption: ""
  focal_point: ""
  preview_only: false
projects: []
---

Ho 1200 files che presentano tutti una sequenza di parole con lo stesso formato, e voglio cambiarli tutti.

ad esempio: 
```
url: /2018/02/03/un-testo-a-caso
```
e voglio cambiarlo in 
```
url: /2018/02/un-testo-a-caso
```

la domanda è: "c'è una regola con cui potrei trovare tutte le stringhe e una regola per sostituirle? se sì, benvenuti nel mondo dell'automazione

in questo caso io cerco qualsiasi testo che inizio con `url: /` seguito da testo a caso, sequito da un altra `/` etc.. tipo questo formato, dove ho numerato le parti tra le `/`:
```
url: /$1/$2/$3/$4
```
e poi lo vado a sostituire eliminando la parte `$3`

per farlo usiamo RegEx (abbreviazione di Regular Expressions) che è uno standard di qualsiasi linguaggio di programmazione o editor di testi

cercherò quindi:
```
url: \/(.+?)\/(.+?)\/(.+?)\/(.+?)
```

e lo sostituirò con:
```
url: /$1/$2/$4
```

e il gioco è fatto! 1200 file cambiati in un secondo.

PS: l'ho usata per riorganizzare i vecchi post del mio blog
