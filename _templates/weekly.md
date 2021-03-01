---
aliases:
  - weekly
tags:
  - week/weekly
---

# weekly

## Tasks available

```dataview
table dueDate, project, completed, assignedDate
from "tasks"
where
	(completed = "" or completed = "N") and
	(
		assignedDate = "" or
		assignedDate = date(1970-01-01)
	)
sort dueDate asc
```

## Weekly planner

### Recurring Tasks
- [ ] 
- [ ] 

### Assigned tasks

```dataview
table dueDate, project, completed, assignedDate
from "tasks"
where
	(completed = "" or completed = "N")
	and (
		assignedDate <= date({{sunday:gggg-MM-DD}}) and
		assignedDate >= date({{monday:gggg-MM-DD}})
	)
sort dueDate asc
```


### Week at a Glance

[[days/{{monday:gggg-MM-DD}}|Monday]]
[[days/{{tuesday:gggg-MM-DD}}|Tuesday]]
[[days/{{wednesday:gggg-MM-DD}}|Wednesday]]
[[days/{{thursday:gggg-MM-DD}}|Thursday]]
[[days/{{friday:gggg-MM-DD}}|Friday]]
[[days/{{saturday:gggg-MM-DD}}|Saturday]]
[[days/{{sunday:gggg-MM-DD}}|Sunday]]

