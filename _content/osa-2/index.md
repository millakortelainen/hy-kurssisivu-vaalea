---
layout: chapter
title: Osa 2
nav-title: Osa 2
sub-sections:
    - link-url: peruskomennot
      sub-section-title: Peruskomennot
    - link-url: yhteenvetokyselyt
      sub-section-title: Yhteenvetokyselyt
---
# Osa 2: SQL:n perusteet

{% for s in page.sub-sections %}
* [{{s.sub-section-title}}](#{{s.link-url}})
{% endfor %}

{% include_relative osa-2-1.md %}
{% include_relative osa-2-2.md %}