---
layout: layouts/default.njk
---

# A Programming Languages club at Georgia Tech

`dependently-typed` is a student-run club that aims to bring together programming language and compiler enthusiasts.

You do not need prior experience to join! Undergraduate, graduate, and PhD students are all welcome :)

<a href="{{ social.wiki }}" target="_blank">Learn more about us</a>
<br>
<a href="{{ social.discord }}" target="_blank">Join the Discord</a>

## Latest Posts

{% assign numPosts = collections.posts | size %}
{% if numPosts != 0 %}
<ul>
{%- for post in collections.posts reversed -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
{% else %}
the lambdas are still brewing... coming soon :)
{% endif %}
