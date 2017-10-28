Number.prototype.toTime = function() {
    
    let value = this.valueOf()
    let pad = "00"

    let hour = Math.floor(value).toString()
    let minute = Math.floor((value - hour) * 60)

    let shour = pad.substring(0, pad.length - hour.toString().length) + hour.toString()
    let sminute = pad.substring(0, pad.length - minute.toString().length) + minute.toString()

    return `${shour}:${sminute}`
}