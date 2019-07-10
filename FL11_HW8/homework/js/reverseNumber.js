function reverseNumber(passedInteger) {
  let result = 0;
  while(passedInteger !==0) {
    result *= 10;
    const numbers = passedInteger%10;
    result += numbers;
    passedInteger = (passedInteger - numbers) / 10;
  }
  return result;
}
console.log(reverseNumber(123)); // => 321
console.log(reverseNumber(-456)); // => -654
console.log(reverseNumber(10000)); // => 1