function create(obj) {
  const copy = {};
  copy.__proto__ = obj;
  for ( let i = 0; i < Object.keys(obj).length ; i++ ) {
    copy[Object.keys(obj)[i]] = Object.values(obj)[i];
  }
  return copy;
}

const obj1 = { prop: 5 };
const obj2 = create(obj1);

console.log(Object.getPrototypeOf(obj2) === obj1);
console.log(obj2.prop);