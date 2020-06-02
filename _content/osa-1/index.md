---
layout: chapter
title: Osa 1
nav-title: Osa 1
sub-sections:
    - link-url: mika-on-tietokanta
      sub-section-title: Mikä on tietokanta?
    - link-url: yksinkertainen-tietokanta
      sub-section-title: Yksinkertainen tietokanta
    - link-url: relaatiomalli
      sub-section-title: Relaatiomalli
---
# Osa 1: Johdanto

{% for s in page.sub-sections%}
* [{{ s.sub-section-title }}](#{{s.link-url}}){% endfor %}

{% include_relative osa-1-1.md %}
{% include_relative osa-1-2.md %}
{% include_relative osa-1-3.md %}