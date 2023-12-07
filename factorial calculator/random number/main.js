function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomNumber = getRandomNumber(1, 100);

  function checkGuess(userGuess) {
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      return 'Please enter a valid number between 1 and 100.';
    } else if (userGuess < randomNumber) {
      return 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
      return 'Too high! Try again.';
    } else {
      return `Congratulations! ${randomNumber} is correct!`;
    }
  }

  // Example usage with different guess numbers:
let userGuess1 = 30;
console.log(checkGuess(userGuess1));

let userGuess2 = 80;
console.log(checkGuess(userGuess2));

let userGuess3 = 50;
console.log(checkGuess(userGuess3));

// Example with a correct guess
let userGuess4 = randomNumber;
console.log(checkGuess(userGuess4));