// Creates navigation links for each dividingPeriod found within the period
// For example -- if you specif "Quarterly" for period and "Weekly" for dividingPeriod,
// we will get the current quarter based on the file title and create links for all weeks in that quarter
function note_timeframe_periods_nav(period, dividingPeriod, tp) {
    const defaultPeriodFormats = tp.user.period_defaults().defaultPeriodFormats
    const periodDisplayFormats = tp.user.period_defaults().defaultPeriodDisplayFormats
    const periodAdditionKeys = tp.user.period_defaults().periodAdditionKeys
    const periodIntervals = tp.user.period_defaults().periodIntervals
    
    const periodicNoteSettings = app.plugins.plugins["periodic-notes"].settings;

    const timeframeNoteFormat = periodicNoteSettings[period]?.format || defaultPeriodFormats[period]
    const periodInterval = periodIntervals[period]

    const dividingPeriodNoteFormat = periodicNoteSettings[dividingPeriod]?.format || defaultPeriodFormats[dividingPeriod]
    const dividingPeriodDisplayFormat = periodDisplayFormats[dividingPeriod]

    if (!dividingPeriodDisplayFormat) {
        console.error("Unable to find dispaly format for dividing period: ", dividingPeriod)
        return
    }

    const currentMoment = moment(tp.file.title, timeframeNoteFormat).startOf(periodInterval)

    let thisTimeframe = null
    let thisPeriodAddInterval = null
    if (periodIntervals.hasOwnProperty(dividingPeriod) && periodAdditionKeys.hasOwnProperty(dividingPeriod)) {
        thisTimeframe = currentMoment[periodIntervals[period]]()
        thisPeriodAddInterval = periodAdditionKeys[dividingPeriod]
    }
    else {
        console.error('Invalid dividing period: ', dividingPeriod)
        return
    }

    const links = []

    while (currentMoment[periodIntervals[period]]() == thisTimeframe) {

        const dividingPeriodFile = currentMoment.format(dividingPeriodNoteFormat)
        const dividingPeriodDisplay = currentMoment.format(dividingPeriodDisplayFormat)
        links.push(`[[${dividingPeriodFile}|${dividingPeriodDisplay}]]`)

        currentMoment.add(1, thisPeriodAddInterval)
    }

    const leftBracket = "❮"
    const rightBracket = "❯"
    const separator = " | "

    // Show all day links for the week
    let note_nav_content = `${leftBracket} `;
    note_nav_content += links.join(separator)
    note_nav_content += ` ${rightBracket}`

    return note_nav_content
}

module.exports = note_timeframe_periods_nav
