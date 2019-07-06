let sideA = prompt('Enter first side of the triangle:');
let sideB = prompt('Enter second side of the triangle:');
let sideC = prompt('Enter third side of the triangle:');

sideA = parseFloat(sideA);
sideB = parseFloat(sideB);
sideC = parseFloat(sideC);

if (sideA < sideB + sideC && sideB < sideC + sideA && sideC < sideA + sideB) {
  if (sideA === sideB && sideA === sideC) {
    console.log('Equivalent triangle');
  } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
    console.log('Isosceles triangle');
  } else {
    console.log('Normal triangle');
  }
} else {
  console.log('Triangle doesn’t exist');
}