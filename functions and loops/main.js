//Create a function that checks if the input/parameter is an even number.
function checkEvenNumber(number) {
    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is not an even number.`);
    }
}

checkEvenNumber(11);


//create a function that prints to the console n1 to n2 where n1 is the first parameter and n2 is the second parameter

function displayNumbers(start, end) {
    for (let i = start; i < end; i++) {
        console.log(i);
    }
}

let startNumber = 0;
let endNumber = 10;
displayNumbers(startNumber, endNumber);

//Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.

function calculateSum(start, end) {
    if (start > end) {
        [start, end] = [end, start];
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

console.log(calculateSum(1, 9));
