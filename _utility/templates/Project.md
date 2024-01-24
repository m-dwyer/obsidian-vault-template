---
tags:
  - project
goal: "[[<%* const dv = this.app.plugins.plugins["dataview"].api; const goals = dv.pages('"Review/Goals"').file.sort(n => n.name); let suggestions = goals.name; let values = goals.name; tR += await tp.system.suggester(suggestions, values); %>]]"
cover: assets/shared/covers/project.jpg
progress: "`$= await dv.view('project-progress', {file: '<% tp.file.title %>'})`"
---
`= this.progress`

# Overview

>[!tip]+
>Include a description of the project containing what the project sets out to achieve and scope


# Tasks

- [ ] TODO 