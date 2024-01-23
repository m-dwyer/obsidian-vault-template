const page = input?.file ? dv.page(input?.file) : dv.current()
let tasks = page.file.tasks.filter(x => x.text.includes("TODO"));

const progress = Math.round(tasks.filter(x => x.completed).length);
const total = tasks.length;
const percent = Math.round((progress / total) * 100) || 0;

dv.span(`<progress value="${progress}" max="${total}"></progress><br>${percent}% completed`)