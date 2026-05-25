// Number1. Reverse a string
// Write a function reverseString(str) that takes a string and returns it reversed.

//=========JavaScript Split (String)==========
const myName: string = "My name is Mazharul Islam Sourabh";
const result = myName.split(" ");

// console.log(result);

// ========JavaScript Reverse (Array)==========
const resultReverse = result.reverse();
// console.log(resultReverse);

//========JavaScript Join (Array)==========
const joinReverseResult = resultReverse.join(" ");
// console.log(joinReverseResult);

// ========Using For Loop============
const dog: string = "doggy";
const dogLen = dog.length;

let reverseDog = "";
for (let i = dogLen - 1; i >= 0; i--) {
  reverseDog += dog[i];
}

// console.log(reverseDog);

//Problem2: Find the largest Number
// Write a function findMax(arr) that takes an array of numbers and returns the largest one.

const myNumbers = [6, 4, 8, 0, 6, 9, 93, 56, 34, 2, 21, 87];
let maxNumber = myNumbers[0];
for (let i = 0; i < myNumbers.length; i++) {
  const targetedNumber = myNumbers[i];
  if (targetedNumber > maxNumber) {
    maxNumber = targetedNumber;
  }
}

// console.log(maxNumber);
