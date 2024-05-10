---
title: Su questo sito
linktitle: Sito
summary: informazioni tecniche e filosofiche su questo sito
slug: site
date: 2021-01-25
lastmod: 2021-01-25T00:00:00Z
weight: 1000
tags:
  - webdev
  - markdown
  - opensource
---
La prima versione di questo sito è andata online nel 1997 (con il dominio krur.com) con html scritto a mano, poi gestito con Dreamweaver.    
Nel 2002 lo portai su TYPO3, un CMS di cui divenni professionista.  
Nel 2012 passai a WordPress, ma fu, ed è tutt'ora, un sistema che non mi piace.    
Nel 2017 circa decisi di smettere con lo sviluppo web e di gestire servers e siti dinamici con tutte le loro problematiche, ma sopratutto non volevo che i contenuti dei miei siti avessero **dipendenza dal sistema di pubblicazione** e che non fossero **future proof**, ovvero non pronti a durare secoli.  
Già innamorato del formato di puro testo [Markdown](https://en.wikipedia.org/wiki/Markdown) e con l'arrivo di ottimi generatori di siti statici passai prima a Jekyll e poi a Hugo.
Il sito è totalmente **Open Source**, puoi vedere come è fatto ed eventualmente contribuire a migliorarlo: <https://github.com/StefanoCecere/cecere.xyz>

Ecco alcuni dettagli:
## statico
non c'è PHP o altro sistema che interpreta le pagine. sono tutti files html. questo permette un'estrema velocità e sicurezza oltre che portabilità.

## indipendente
i contenuti del sito sono tutti files di testo semplice, organizzate in cartelle che dicono se sono post, eventi, progetti o libri etc.
possono usare mille metodi diversi per generare siti, o PDF o ebook, a partire da essi, con qualsiasi stile io voglia. non sono vincolato a nessuna piattaforma di pubblicazione

## locale
Io amo avere tutti i miei contenuti a cui tengo, in questo caso tutti i miei scritti di una vita, al sicuro sul mio computer, con backup su GitHub e hard disk e chiavette varie. Non voglio backup complessi.  
E sopratutto voglio poter scrivere ed editare i miei contenuti anche se non ho connessione internet.

## eterno
I files di testo in formato markdown sono una certezza che li possiamo aprire anche fra 1000 anni.
Ciò non si può dire con i siti WordPress o altro, a meno di complesse operazioni di conversione e backup locale.

## tecnologia
- [Hugo](https://gohugo.io) - static site generator
- [Wowchemy](https://wowchemy.com) - Hugo Template Framework
- [Netlify](https://www.netlify.com) - hosting and CDN

per editare sul computer uso [VS Code](https://code.visualstudio.com/) e [Obsidian](https://obsidian.md/)

## ultimi aggiornamenti
in questa pagina sono elencate tutte le ultime modifiche: [site log](/xyz/site-log/)