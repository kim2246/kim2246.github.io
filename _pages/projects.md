---
layout: page
title: projects
permalink: /projects/
description: UX/HAI research and projects that bridge psychology, data, and technology across diverse domains.
nav: true
nav_order: 3
horizontal: false
---

<!-- pages/projects.md (grouped by year) -->
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "date" | reverse %}
  {% assign projects_by_year = sorted_projects | group_by_exp: "project", "project.date | date: '%Y'" %}

  {% for year_group in projects_by_year %}
    <h2 class="mt-4 mb-3">{{ year_group.name }}</h2>
    <div class="row row-cols-1 row-cols-md-2">
      {% for project in year_group.items %}
        {% if page.horizontal %}
          {% include projects_horizontal.liquid %}
        {% else %}
          {% include projects.liquid %}
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
</div>
