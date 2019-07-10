const addOne = x => x+1;
console.log(addOne);
function pipe(number) {
  for (let i = 1; i < arguments.length; i++) {
    number = arguments[i](number);
  }
  return number;
}
console.log(pipe(1, addOne)); // => 2
console.log(pipe(1, addOne, addOne)); // => 3