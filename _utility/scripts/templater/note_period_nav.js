// Creates navigation links for each displayPeriod specified within the period, as determined from the file title
// For example -- if you specify "Quarterly" for period, and ["Yearly", "Quarterly"] for displayPeriods, then we determine
// the current quarter from the file title, and we display the current quartter and year
function note_period_nav(period, displayPeriods, tp) {
    const defaultPeriodFormats = tp.user.period_defaults().defaultPeriodFormats
    const defaultPeriodDisplayFormats = tp.user.period_defaults().defaultPeriodDisplayFormats

    const periodicNoteSettings = app.plugins.plugins["periodic-notes"].settings;
    const currentPeriodFormat = periodicNoteSettings[period]?.format || defaultPeriodFormats[period]
    const currentMoment = moment(tp.file.title, currentPeriodFormat)

    let displayableLinks = []
    for (const period of displayPeriods) {
        if (defaultPeriodDisplayFormats[period]) {
            const periodDisplay = currentMoment.format(defaultPeriodDisplayFormats[period])
            const periodFileFormat = periodicNoteSettings[period]?.format || defaultPeriodFormats[period]
            const periodFile = currentMoment.format(periodFileFormat)
            displayableLinks.push(`[[${periodFile}|${periodDisplay}]]`)
        }
    }

    const leftBracket = "❮"
    const rightBracket = "❯"
    const separator = " / "

    let note_nav_content = `${leftBracket} ${displayableLinks.join(separator)} ${rightBracket}`

    return note_nav_content
}

module.exports = note_period_nav
