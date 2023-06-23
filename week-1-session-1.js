const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = [24, 12, 32, 13, 22, 23, 21];
const test3 = [0, 1, 4, 6, 7, 11, 55, 1001, 19];

// helper function to determine prime number
function isPrime(num) {
  if (
    num < 3 ||
    (num != 2 && num % 2 === 0) ||
    (num != 3 && num % 3 === 0) ||
    (num != 5 && num % 5 === 0)
  ) {
    return false;
  }
  return true;
}

// checking for edge cases
function isNonPosValue(num) {
  if (num < 0 || num === undefined || num === NaN) {
    return true;
  }
  return false;
}

// Function declaration
function untilNonPosValue(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isNonPosValue(numbers[i])) {
      console.log(
        `Non-positive or invalid value: ${numbers[i]}; function terminated.`
      );
    }

    if (isPrime(numbers[i])) {
      console.log(`Prime number: ${numbers[i]}`);
    }
  }
}

// Function expression
const untilNonPosValue2 = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isNonPosValue(numbers[i])) {
      console.log(
        `Non-positive or invalid value: ${numbers[i]}; function terminated.`
      );
    }

    if (isPrime(numbers[i])) {
      console.log(`Prime number: ${numbers[i]}`);
    }
  }
};

// Test cases; uncomment to run
// untilNonPosValue(test1);
// untilNonPosValue(test2);
// untilNonPosValue(test3);
// untilNonPosValue2(test1);
// untilNonPosValue2(test2);
// untilNonPosValue2(test3);
