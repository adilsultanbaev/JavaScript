let number = 12345;
let strNumber = String(number);
let firstDigit = +strNumber[0];
let lastDigit = +strNumber.slice(-1);
console.log(firstDigit + lastDigit);
