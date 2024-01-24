const taskFilter = "TODO"
const projectIcon = "📐"


const projectsWithoutNextAction = []
const nextActions = []
dv.pages('"Tasks/Projects"').file.forEach(f => {
    const projectTasks = f.tasks.filter(t => t.text && t.text.includes(taskFilter) && t.tags.includes("#next") && !t.completed)

    if (projectTasks.length > 0) {
        projectTasks.forEach(t => {
            // Add project as a subtask for displaying
            t.subtasks.push({
                children: [],
                path: t.path,
                link: t.link,
                line: 1,
                lineCount: t.lineCount,
                position: t.position,
                text: `${projectIcon} *${f.name}*`
              })

            nextActions.push(t)
        })
    } else {
        projectsWithoutNextAction.push(f)
    }
})

dv.pages('"Tasks/Next actions"').file.forEach(f => {
    const nextActionTasks = f.tasks.filter(t => t.text && t.text.includes(taskFilter) && !t.completed)

    if (nextActionTasks.length > 0) {
        nextActionTasks.forEach(t => nextActions.push(t))
    }
})

nextActions.sort((a, b) => a.due - b.due)

dv.header(2, "✅ Next actions")
dv.taskList(nextActions, false)

dv.header(2, "🚩 Projects without next action")
dv.list(projectsWithoutNextAction.map(p => p.link))