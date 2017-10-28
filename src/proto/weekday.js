Number.prototype.toWeekdayShort = function(uppercase) {

    let weekdays = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"]
    let day = weekdays[this]

    return uppercase ? day.toUpperCase() : day
}
