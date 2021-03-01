---
name: {{tp_title}}
dueDate: {{tp_tomorrow}}
completed: N
tags:
  - project/{{tp_title}}
---

# {{tp_title}}

## Overview

## Goals

What goal(s) does this project work towards (if any?

## Tasks

```dataview
table dueDate, completed
from "tasks"
where project = "{{tp_title}}"
sort dueDate asc
```