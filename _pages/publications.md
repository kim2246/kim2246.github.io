---
layout: page
title: publications
permalink: /publications/
nav: true
nav_order: 3
---

## Published
{% bibliography --file papers --query '@*[keywords="Published"]' --group_by year %}

## Under Review
{% bibliography --file papers --query '@*[keywords="Under Review"]' %}

## In Preparation
{% bibliography --file papers --query '@*[keywords="In Preparation"]' %}
