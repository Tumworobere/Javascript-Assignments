//Write a function that calculates the factorial of a given number.
//DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE
function calculateFactorial(number) {
    // Check for negative numbers
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (number === 0 || number === 1) {
        // Factorial of 0 and 1 is 1
        return 1;
    } else {
        // Calculate factorial for numbers greater than 1
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage
const inputNumber = 10;
const factorialResult = calculateFactorial(inputNumber);
console.log(`The factorial of ${inputNumber} is: ${factorialResult}`);
