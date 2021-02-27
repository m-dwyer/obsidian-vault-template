# Day Planner

## {{title}}

### Overdue Tasks
```dataview
table dueDate, project
from "tasks"
where date(today) > dueDate
sort due asc
```

### Up Next
```dataview
table dueDate, project
from "tasks"
where date(today) <= dueDate
sort due asc
```

### Routine
- [ ] 


### Task Times
- [ ] 