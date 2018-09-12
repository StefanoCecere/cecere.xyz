---
date: "2018-01-01T00:00:00Z"
title: Tags

---

<ul id="all-tags">
  {{ range $name, $taxonomy := .Site.Taxonomies.tags }}
    <li><a href="{{ "/tags/" | relLangURL }}{{ $name | urlize }}">{{ $name }}</a></li>
  {{ end }}
</ul>

