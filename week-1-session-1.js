const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = [24, 12, 32, 13, 22, 23, 21];
const test3 = [0, 1, 4, 6, 7, 11, 55, 1001, 19];

// helper function to determine prime number
function isPrime(num) {
  if (
    num === 1 ||
    (num != 2 && num % 2 === 0) ||
    (num != 3 && num % 3 === 0) ||
    (num != 5 && num % 5 === 0)
  ) {
    return false;
  }
  return true;
}

// NOTE: I attempted to use .map and .forEach but I realized that both did not allow me to break out of the loop once a prime number was encountered.

// Function declaration
function untilNonPrime(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      console.log(`Prime encountered: ${numbers[i]}; function terminated.`);
      return;
    }
    console.log(numbers[i]);
  }
}

// Function expression
const untilNonPrime2 = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      console.log(`Prime encountered: ${numbers[i]}; function terminated.`);
      return;
    }
    console.log(numbers[i]);
  }
};

// Test cases; uncomment to run
// untilNonPrime(test1);
// untilNonPrime(test2);
// untilNonPrime(test3);
// untilNonPrime2(test1);
// untilNonPrime2(test2);
// untilNonPrime2(test3);
