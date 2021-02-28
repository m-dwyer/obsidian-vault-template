# My Day

## {{tp_title}}

### Assigned Today
```dataview
table dueDate, project
from "tasks"
where assignedDate = date({{tp_title}})
sort dueDate asc
```

### Routine
{{tp_include:f=_templates/recurring/daily}}


### Day Planner
- [ ] 