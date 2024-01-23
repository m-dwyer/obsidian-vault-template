---
cssclasses:
  - hide-frontmatter
  - cards
obsidianUIMode: preview
obsidianEditingMode: live
---

```dataviewjs
let projects = dv.pages('"Tasks/Projects"')
let basePath = `${window.app.vault.adapter.basePath}`
let defaultCover = app.vault.getResourcePath(dv.fileLink("assets/covers/project.jpg"))

const defaultProgress = '<progress value="0" max="100"></progress><br>0% completed'

await dv.table(null,
		projects.map(project => [
			`<div style="position: relative; overflow: hidden; width: 200%; height: 200px;"><img style="object-fit: cover; object-position: center; width: 100%; height: 100%;" src="${project.cover ? app.vault.getResourcePath(dv.fileLink(project.cover)) : defaultCover}" /></div>`,
			`<span style="font-size: 1.2em">${project.file.link}</span>`,
			`<span>${project.progress || defaultProgress}</span>`,
			`<span>Goal: ${project.goal || ""}</span>`,
			`<span>Area: ${project.goal ? dv.page(project.goal)?.area || "" : ""}</span>`
			]));
```
