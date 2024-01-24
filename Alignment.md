---
banner: "![[alignment_dash.jpg]]"
banner_y: 0.388
obsidianUIMode: preview
obsidianEditingMode: live
---
# Areas

```dataviewjs
let areas = dv.pages('"Areas"')

dv.table(["Area", "Tags"],
		areas.map(area => [
			`<span style="font-size: 1.2em">${area.file.link}</span>`,
			area.tags.filter(t => t !== "area"),
		]))
```

# Goals

```dataviewjs
let goals = dv.pages('"Review/Goals"')

const progress = function(progress) {
	return `<progress value="${progress}" max="100"></progress><br>${progress}% completed`
}

dv.table(["Goal", "Area", "Progress", "Deadline"],
		goals.sort(g => g.progress || 0, 'desc').map(goal => [
			`<span style="font-size: 1.2em">${goal.file.link}</span>`,
			`${goal.Area}`,
			`${progress(goal.progress || 0)}`,
			`<span>${moment(goal.Deadline).format("Do MMMM YYYY")}</span>`,
			]))
```

# Projects

```dataviewjs
const projects = dv.pages('"Tasks/Projects"')
const basePath = `file://${this.app.vault.adapter.basePath}`
const defaultCover = "assets/covers/project.jpg"
const defaultProgress = '<progress value="0" max="100"></progress><br>0% completed'

dv.table(["Project", "Progress", "Goal"],
		projects.sort(p => p.progress || 0, 'desc').map(project => [
			`<span style="font-size: 1.2em">${project.file.link}</span>`,
			`<span>${project.progress || defaultProgress}</span>`,
			`<span>${project.goal || ""}</span>`
			]))
```
