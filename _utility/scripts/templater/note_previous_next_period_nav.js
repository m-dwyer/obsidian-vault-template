// Creates navigation links for the previous, current, next periods as determined from the file title
// For example -- if you specify "Weekly" for period, then we determine the current week from the file title,
// and display the previous, current and next weeks
function note_previous_next_period_nav(period, tp) {
    const defaultPeriodFormats = tp.user.period_defaults().defaultPeriodFormats
    const periodDisplayFormats = tp.user.period_defaults().defaultPeriodDisplayFormats
    const periodAdditionKeys = tp.user.period_defaults().periodAdditionKeys

    const periodicNoteSettings = app.plugins.plugins["periodic-notes"].settings;
    const periodFileFormat = periodicNoteSettings[period]?.format || defaultPeriodFormats[period]
    if (!periodFileFormat) {
        return ""
    }

    const periodDisplayFormat = periodDisplayFormats[period]
    if (!periodDisplayFormat) {
        return ""
    }

    const currentPeriod = moment(tp.file.title, periodFileFormat)

    let periodKey = null
    if (periodAdditionKeys[period]) {
        periodKey = periodAdditionKeys[period]
    } else {
        console.error("Unable to find timeframe: ", period)
    }

    if (!periodKey) {
        return;
    }

    const currentPeriodDisplay = currentPeriod.format(periodDisplayFormat)

    const lastPeriod = currentPeriod.clone().add({[periodKey]: -1})
    const lastPeriodDisplay = lastPeriod.format(periodDisplayFormat)
    const lastPeriodFile = lastPeriod.format(periodFileFormat)

    const nextPeriod = currentPeriod.clone().add({[periodKey]: 1})
    const nextPeriodDisplay = nextPeriod.format(periodDisplayFormat)
    const nextPeriodFile = nextPeriod.format(periodFileFormat)

    const previousPeriodLink = `[[${lastPeriodFile}|${lastPeriodDisplay}]]`
    const nextPeriodLink = `[[${nextPeriodFile}|${nextPeriodDisplay}]]`

    const leftBracket = "❮"
    const rightBracket = "❯"
    const separator = " | "

    // Create last week, this week, next week navigation
    let note_nav_content = `${leftBracket} ${[previousPeriodLink, currentPeriodDisplay, nextPeriodLink].join(separator)} ${rightBracket}`;
    return note_nav_content
}

module.exports = note_previous_next_period_nav
