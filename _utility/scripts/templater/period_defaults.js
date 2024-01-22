const defaultPeriodFormats = {
    Daily: "YYYY-MM-DD",
    Weekly: "gggg-[W]ww",
    Monthly: "YYYY-MM",
    Quarterly: "YYYY-[Q]Q",
    Yearly: "YYYY"
}

const defaultPeriodDisplayFormats = {
    Daily: "ddd Do",
    Weekly: "[Week] WW",
    Monthly: "MMMM",
    Quarterly: "[Q]Q",
    Yearly: "YYYY"
}

const periodIntervals = {
    Daily: "day",
    Weekly: "week",
    Monthly: "month",
    Quarterly: "quarter",
    Yearly: "year"
}

const periodAdditionKeys = {
    Daily: "days",
    Weekly: "weeks",
    Monthly: "months",
    Quarterly: "quarters",
    Yearly: "years"
}

// Export a function to keep templater happy
function defaults() {
    return {
        defaultPeriodFormats,
        defaultPeriodDisplayFormats,
        periodIntervals,
        periodAdditionKeys
    }
}

module.exports = defaults
