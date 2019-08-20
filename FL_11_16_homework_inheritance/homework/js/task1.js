function assign(obj) {
  for (let j = 1; j < arguments.length; j++) {
    for (let i = 0; i < Object.keys(arguments[j]).length ; i++) {
      obj[Object.keys(arguments[j])[i]] = Object.values(arguments[j])[i];
    }
  }
  return obj;
}


const defaults = { a: 123, b: 777 };
const options = { a: 456 };

const configs = assign({}, defaults, options);
console.log(configs);