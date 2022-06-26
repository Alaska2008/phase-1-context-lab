/* Your Code Here */
function createEmployeeRecord(record){
    return {
        firstName: record[0],
        familyName: record[1],
        title: record[2],
        payPerHour: record[3],
        timeInEvents: [],
        timeOutEvents: []
    }  
}
function createEmployeeRecords(employeeData){
    return employeeData.map(function(rows){
        return createEmployeeRecord(rows)
    })
}
function createTimeInEvent(dateStamp){
    
    
}

function createTimeOutEvent(){

}

function hoursWorkedOnDate(){

}

function hoursWorkedOnDate(){

}

function wagesEarnedOnDate(){

}



function calculatePayroll() {

}




/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

