---
tags:
  - daily
---
<% tp.user.note_period_nav("Daily", ["Yearly", "Quarterly", "Monthly", "Weekly"], tp) %>

<% tp.user.note_previous_next_period_nav("Daily", tp) %>

## 🧭 Direction

Embed from weekly review this week!

## 🌞 Daily Checklist

-   [ ] Habits

## ✅ Tasks

Choose 3 frogs

## 🗒️Notes



## 📔Daily Log



## Review

I'm proud that..

I'm grateful that..

<%*
const periodicNoteSettings = app.plugins.plugins["periodic-notes"].settings;
await tp.file.move("/Review/Daily/" + tp.file.title)
%>