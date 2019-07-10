function isSmaller(a, b) {
  return a < b;
}
function isBiggerPlus(a, b) {
  return a > b;
}
function isSmallerPlus(a,b) {
  return isBiggerPlus(b, a);
}
console.log(isSmaller(5, -1)); // => false
console.log(isSmallerPlus(5, -1)); // => false
