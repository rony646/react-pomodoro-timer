// Function to show two zeros when the time is less than 9
// So instead of getting for example "2" you will now get "02"

function parseTime(time) {
    return time <= 9 ? "0" + time : time
}

export default parseTime