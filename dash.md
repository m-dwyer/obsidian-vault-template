# Overdue Tasks
```dataview
table dueDate, project
from "tasks"
where date(today) > dueDate
and (completed = "" or completed = "N")
sort dueDate asc
```


# Upcoming Tasks

```dataview
table dueDate, project
from "tasks"
where date(today) <= dueDate
and (completed = "" or completed = "N")
sort dueDate asc
```


# Active Projects
```dataview
table dueDate
from "PARA/001_projects"
where (completed = "N" or completed = "")
```
