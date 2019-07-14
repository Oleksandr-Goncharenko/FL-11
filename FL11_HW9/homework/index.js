//Task 0
function getNumbers(string){
  const array = [];
  for (let i = 0; i < string.length; i++) {
    const currentSymbol = parseInt(string[i]);
    if (isNaN(currentSymbol) === false) {
      array.push(currentSymbol);
    }
  }
  return array;
}
//Task 1
function findTypes() {
  const answer = {};
  for (let i = 0; i < arguments.length; i++) {
    if (answer[typeof arguments[i]] === undefined) {
      answer[typeof arguments[i]] = 1;
    } else {
      answer[typeof arguments[i]]++;
    }
  }
  return answer;
}
//Task 2
function executeforEach(array, someFunction) {
  for (let i = 0; i < array.length; i++) {
    someFunction(array[i]);
  }
}
//Task 3
function mapArray(arrayIn, functionIn) {
  const arrayOut = [];
  executeforEach(arrayIn, el => arrayOut.push(functionIn(el)));
  return arrayOut;
}
//Task 4
function filterArray(arrayIn, functionIn) {
  const arrayOut = [];
  executeforEach(arrayIn, el => {
    if (functionIn(el)) {
      arrayOut.push(el);
    }
  });
  return arrayOut;
}
//Task 5
function showFormattedDate(dateIn) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `Date: ${months[dateIn.getMonth()]} ${dateIn.getDate()} ${dateIn.getFullYear()}`;
}
//Task 6
function canConvertToDate(example) {
  const a = new Date(example);
  return !isNaN(a.getFullYear());
}
//Task 7
function daysBetween(firstDay, secondDay) {
  const milisecondsInDay = 86400000;
  let difference;
  if (firstDay > secondDay) {
    difference = (firstDay - secondDay)/milisecondsInDay;
  } else {
    difference = (secondDay - firstDay)/milisecondsInDay;
  }
  return Math.round(difference);
}
//Task 8
function getAmountOfAdultPeople(array) {
  const newArray = [];
  const todayDate = new Date();
  filterArray(array, el => newArray.push(daysBetween(todayDate, new Date(el['birthday ']))));
  const daysToGrow = 6570;
  return filterArray(newArray, el => el > daysToGrow).length;
}
//Task 9
function keys(object) {
  const array = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      array.push(key);
    }
  }
  return array
}
//Task 10
function values(object) {
  const array = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      array.push(object[key]);
    }
  }
  return array
}