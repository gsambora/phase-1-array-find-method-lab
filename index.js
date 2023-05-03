// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function isWin(element, index, array) {
    return(element.result === "W");
}

function superbowlWin(winRecord) {
    if (winRecord.find(isWin) != undefined){
        return winRecord.find(isWin).year
    } else{
        return winRecord.find(isWin)
    }
}

superbowlWin(record)