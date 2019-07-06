let pointAX = prompt('Enter X coordinat for point A:');
let pointAY = prompt('Enter Y coordinat for point A:');
let pointBX = prompt('Enter X coordinat for point B:');
let pointBY = prompt('Enter Y coordinat for point B:');
let pointCX = prompt('Enter X coordinat for point C:');
let pointCY = prompt('Enter Y coordinat for point C:');

pointAX = parseFloat(pointAX);
pointAY = parseFloat(pointAY);
pointBX = parseFloat(pointBX);
pointBY = parseFloat(pointBY);
pointCX = parseFloat(pointCX);
pointCY = parseFloat(pointCY);

const midpointKoeficient = 2;
let answer = false;

const midpointX = (pointAX + pointBX) / midpointKoeficient;
const midpointY = (pointAY + pointBY) / midpointKoeficient;

if (midpointX === pointCX && midpointY === pointCY) {
    answer = true;
}
console.log(answer);