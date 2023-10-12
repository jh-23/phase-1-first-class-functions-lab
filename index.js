// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function() {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function() {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const fare = 30;
const createFareMultiplier = function (number) {
    return function(fare) {
        return fare * number
    }
}
const fareDoubler = function(fare) {
    return fare * 2;
}
const fareTripler = function(fare) {
    return fare * 3;
}

const selectDifferentDrivers = function(drivers, callbackFunction) {
    if (callbackFunction === returnFirstTwoDrivers) {
        return drivers.slice(0,2)
    } else if (callbackFunction === returnLastTwoDrivers) {
        return drivers.slice(2,4)
    }
}



// const selectDifferentDrivers = function(drivers, returnLastTwoDrivers) {
    // return drivers.slice(2,4);
// }
