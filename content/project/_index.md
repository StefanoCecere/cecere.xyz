---
title: Projects
description: ""
type: landing

sections:
  - block: portfolio
    id: projects-all
    content:
      title: Projects
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 100
      filters:
        folders:
          - project
        author: ""
        category: ""
        tag: ""
        publication_type: ""
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      buttons:
        - name: All
          tag: '*'
        - name: Book
          tag: 'book'
        - name: Music
          tag: 'music'
        - name: Game
          tag: 'game'
        - name: Multimedia
          tag: 'dev'
        - name: Web
          tag: 'webdev'
        - name: Social
          tag: 'social'
        - name: Education
          tag: 'edu'
    design:
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: true
      spacing:
        padding: ['3rem', 0, '6rem', 0]
---
