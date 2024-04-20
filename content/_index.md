---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography
    content:
      # The user's folder name in content/authors/
      username: stefano
    design:
      spacing:
        padding: [0, 0, 0, 0]
      biography:
        style: 'text-align: justify; font-size: 0.8em;'
  - block: collection
    content:
      title: Ultimi post
      count: 10
      filters:
        folders:
          - post
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: ""
      background:
        color: ""
        image:
          # Add your image background to `assets/media/`.
          filename: ""
          filters:
            brightness: 0.5
  - block: cta-card
    content:
      title: "Iscriviti alla mia newsletter"
      text: Tutte le settimane un resoconto su Intelligenza Artificiale, Educazione, Giochi e Attivismo Politico per il futuro!
      button:
        text: Iscriviti
        url: https://2042.substack.com
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""

---
