// enable strict mode
'use strict';

// define variables
const numbers = [4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22];
const limit = 4;

// validate data
function validateData(numbers, limit) {
    // numbers and limit are not empty
    if (!numbers || numbers.length === 0 || !limit) {
        return console.warn('Parameter 1 and parameter 2 should be not empty.');
    }

    // validate numbers
    if (!(numbers instanceof Array)) {
        return console.warn('Parameter 1 is expected an array.');
    }
    if (numbers.some(number => isNaN(number) || number < 0 || number > 1000000)) {
        return console.warn('Parameter 1 is expected a positive array with numbers are not greater than 1.000.000.');
    }

    // validate limit
    if (isNaN(limit) || limit < 0 || limit > 1000) {
        return console.warn('Parameter 2 is expected a positive number not greater than 1000.');
    }

    return true;
}

// pad 6 spaces to before number
function formatNumber(num) {
    return num.toString().padStart(6);
}

// display number as a table
function displayNumberTable(numbers, limit) {
    let numberTable = [];

    // break line for each row based on limit
    for (let i = 0; i < numbers.length; i += limit) {
        numberTable.push(numbers.slice(i, i + limit));
    }

    numberTable.forEach(row => {
        // add +-+ before each row
        let line = "+";
        for (let i = 0; i < limit; i++) {
            line += "------+";
        }
        console.log(line);

        // add | before and after each number
        let rowStr = "|";
        row.forEach(num => {
            rowStr += formatNumber(num) + "|";
        });
        console.log(rowStr);
    });

    // add +-+ after the last row
    let lastLine = "+";
    for (let i = 0; i < numberTable[numberTable.length - 1].length; i++) {
        lastLine += "------+";
    }
    console.log(lastLine);
}

// call function
let isValid = validateData(numbers, limit);
if (isValid) {
    displayNumberTable(numbers, limit);
}