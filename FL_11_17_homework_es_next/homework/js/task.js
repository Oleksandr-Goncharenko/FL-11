//  task 1
const maxElement = arr => Math.max(...arr);

const array1 = [1, 2, 3, 4, 56, 7, 8, 76, 5, 241, 5, 356, 567, 2];

console.log(maxElement(array1)); //  567
//  task 2
const copyAray = arr => [...arr];

const array2 = [1, 2, 3];
const copiedArray = copyAray(array2);

console.log(array2, copiedArray); //  [1, 2, 3] [1, 2, 3]
console.log(array2 === copiedArray);  //  false
//  task 3
const addUniqueId = obj => {
  const result = {...obj};
  result.id = Symbol('Some id');
  return result;
};

const obj3 = {name: 123};
console.log(addUniqueId(obj3));
//  task 4
const regroupObject = obj => {
  const {name, details} = obj;
  const {id, age, university} = details;
  return {university, user: {age, firstName: name, id}};
};

const oldObj = {name: 'Someone', details: {id: 1, age: 11, university: 'UNI'}};
console.log(regroupObject(oldObj));
//  task 5
const findUniqueElements = arr => {
  const result =  new Set(arr);
  return [...result];
};

const array5 = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
console.log(findUniqueElements(array5));
//  task 6
const hideNumber = someNumber => {
  const visiblePart = someNumber.slice(someNumber.length - 4);
  return visiblePart.padStart(someNumber.length, '*');
};

const phoneNumber = '0123456789';
console.log(hideNumber(phoneNumber)); //  ******6789
//  task 7
const required = () => {
  throw new Error('Missing property');
};

const add = (x = required(), y = required()) => x + y;
console.log(add(1,3)); //  4
//console.log(add(1)); //  Error
//  task 8
const userNames1 = (key = 'name') => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(answer => answer.json())
    .then(info => {
      const namesArr = info.map(item => item[key]).sort();
      console.log(namesArr);
    })
    .catch(eror => console.log(eror));
};

userNames1();
userNames1('username');
//  task 9
async function userNames2(key = 'name') {
  try {
    const answer = await fetch('https://jsonplaceholder.typicode.com/users');
    const info = await answer.json();
    const namesArr = info.map(item => item[key]).sort();
    console.log(namesArr);
  } catch (eror) {
    console.log(eror);
  }
}

userNames2();
userNames2('username');
