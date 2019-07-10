function getMin() {
  let currentMin = arguments[0];
  for ( let i = 1; i < arguments.length ; i++ ) {
    if (arguments[i] < currentMin) {
      currentMin = arguments[i];
    }
  }
  return currentMin;
}
console.log(getMin(3,0,-3)); // => -3