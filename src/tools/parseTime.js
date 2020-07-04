function parseTime(time) {
    return time <= 9 ? "0" + time : time
}

export default parseTime