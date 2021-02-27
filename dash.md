# Overdue Tasks
```dataview
table dueDate, project
from "tasks"
where date(today) > dueDate
sort due asc
```


# Upcoming Tasks

```dataview
table dueDate, project
from "tasks"
where date(today) <= dueDate
sort due asc
```


# Projects
```dataview
table
from "PARA/001_projects"
where completed = "N"
```



# Project Tasks

```dataview
table due, project
from "tasks"
where project = "a"
sort due asc
```



```query
path:tasks and project:
```