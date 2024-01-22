// Helper that allows us to apply templates based on a matching filename when a generic note is created
// Useful if we want to navigate to a file (e.g. daily note) that doesn't exist yet -- we can match the filename when link is clicked and apply the relevant template
function template_matcher(tp) {
    const defaultPeriodFormats = tp.user.period_defaults().defaultPeriodFormats

    const templater = app.plugins.plugins["templater-obsidian"];
    const templateFolder = templater.settings.templates_folder || "templates";
    const periodicNoteSettings = app.plugins.plugins["periodic-notes"].settings;

    const noteTypes = Object.entries(defaultPeriodFormats).map(([period, format]) => ({
        format: periodicNoteSettings[period]?.format || format,
        template: `${period}.md`
    }))

    for (const noteType of noteTypes) {
        if (moment(tp.file.title, noteType.format, true).isValid() || tp.file.folder(true) == noteType.format) {
            try {
                const path = `${templateFolder}/${noteType.template}`
                const templateFile = app.vault.getAbstractFileByPath(path)

                if (!templateFile) {
                    const errMsg = `Template not found: ${path} does not exist.`
                    new Notice(errMsg)
                    throw Error(errMsg)
                }

                templater.templater.append_template_to_active_file(templateFile)
            } catch (e) {
                console.error(e)
            }

            break;
        }
    }
}

module.exports = template_matcher
