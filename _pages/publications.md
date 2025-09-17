---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
---

## Published
{% bibliography --file papers --query @*[abbr="Published"] --group_by year %}

## Under Review
{% bibliography --file papers --query @*[abbr="Under Review"] %}

## In Preparation
{% bibliography --file papers --query @*[abbr="In Preparation"] %}
