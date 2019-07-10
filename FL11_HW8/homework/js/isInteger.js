function isInteger(numberA) {
  return parseInt(numberA) === numberA;
}
console.log(isInteger(5)); // => true
console.log(isInteger(5.1)); // => false
console.log(isInteger(5.0)); // => true