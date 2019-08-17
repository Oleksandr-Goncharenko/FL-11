function Humburger(type = 'Unknown', initialCalories = 0, secretIngredient = false) {
  function caloriesCheck(check, change = false) {
    let caloriesCheck = parseInt(check);
    if (typeof caloriesCheck !== 'number' || isNaN(caloriesCheck)) {
      if (change) {
        return calories;
      }
      caloriesCheck = 0;
    }
    return caloriesCheck;
  }
  let calories = caloriesCheck(initialCalories);
  let withCheese = false;
  let tomatoes = 0;
  function totalCalories() {
    let result = calories;
    if (withCheese) {
      result += 120;
    }
    result += tomatoes*20;
    if (secretIngredient) {
      result += 100;
    }
    return result;
  }
  let bites = 0;
  this.type = type;
  this.getCalories = () => totalCalories();
  this.setCalories = changedCalories => {
    calories = caloriesCheck(changedCalories, true);
  };
  this.addCheese = () => {
    if (bites > 0) {
      console.log('Sorry, you cannot add cheese.');
      return;
    }
    if (withCheese) {
      console.log('Sorry, you can add cheese only once.');
      return;
    }
    withCheese = true;
  };
  this.addTomato = () => {
    if (bites > 0) {
      console.log('Sorry, you cannot add tomato.');
      return;
    }
    if (tomatoes === 2) {
      console.log('Sorry, you can add tomato only twice.');
      return;
    }
    tomatoes++;
  };
  this.addSecretIngredient = () => {
    if (bites > 0) {
      console.log('Sorry, you cannot add secret ingredient.');
      return;
    }
    if (secretIngredient) {
      console.log('Sorry, you can add secret ingridient only once.');
      return;
    }
    if (totalCalories() === calories) {
      secretIngredient = true;
    } else {
      console.log('Sorry, you can add secret ingridient only before another ingredient.');
    }
  };
  this.bite = () => {
    bites++;
  };
  function lastIngredient(last = false) {
    if (last) {
      return '.';
    }
    return ',';
  }
  this.info = () => {
    let result = this.type[0].toUpperCase() + this.type.slice(1);
    if (totalCalories() === calories) {
      result += ' hamburger.';
    } else {
      result += ' hamburger:';
    }
    if (secretIngredient) {
      result += ` with secret ingredient${lastIngredient(bites + tomatoes === 0 && !withCheese)}`;
    }
    if (withCheese) {
      result += ` with cheese${lastIngredient(bites + tomatoes === 0)}`;
    }
    if (tomatoes > 0) {
      result += ` with ${tomatoes} tomato${lastIngredient(bites === 0)}`;
    }
    if (bites > 0) {
      result += ` is bit ${bites} times.`;
    }
    result += `\nTotal calories: ${totalCalories()}`;
    return result;
  };
}

// check all situations from the task

const oneH = new Humburger('classic', 600);
console.log(oneH.getCalories()); /// ---> 600
oneH.setCalories(700);
console.log(oneH.getCalories()); /// ---> 700

console.log('\n//////////////////\n\n');

const twoH = new Humburger('classic', '600');
twoH.addCheese();
console.log(twoH.getCalories()); /// ---> 720
twoH.addCheese(); // ->> Sorry, you can add cheese only once.

console.log('\n//////////////////\n\n');

const threeH = new Humburger('classic', 600);
threeH.addTomato();
console.log(threeH.getCalories()); /// ---> 620
threeH.addTomato();
console.log(threeH.getCalories()); /// ---> 640
threeH.addTomato(); // ->> Sorry, you can add tomato only twice.

console.log('\n//////////////////\n\n');

const fourH1 = new Humburger('classic', '600');
const fourH2 = new Humburger('classic', 600);
fourH1.addSecretIngredient();
console.log(fourH1.getCalories()); /// ---> 700
fourH1.addSecretIngredient(); // ->> Sorry, you can add secret ingridient only once.

fourH2.addTomato();
fourH2.addSecretIngredient(); // ->> Sorry, you can add secret ingridient only before another ingredient.

console.log('\n//////////////////\n\n');

const fiveH = new Humburger('classic', 600, true);
console.log(fiveH.getCalories()); /// ---> 700
fiveH.addSecretIngredient(); // ->> Sorry, you can add secret ingridient only once.

console.log('\n//////////////////\n\n');

const sixH = new Humburger('classic', 600);
sixH.addSecretIngredient();
sixH.addTomato();
sixH.addCheese();
sixH.bite();
sixH.bite();
sixH.bite();
sixH.bite();
sixH.bite();
sixH.addTomato(); // ->> Sorry, you cannot add tomato.

console.log('\n//////////////////\n\n');

const sevenH = new Humburger('classic', 600);
console.log(sevenH.info());
sevenH.addSecretIngredient();
console.log(sevenH.info());
sevenH.addCheese();
console.log(sevenH.info());
sevenH.addTomato();
console.log(sevenH.info());
sevenH.bite();sevenH.bite();sevenH.bite();sevenH.bite();
sevenH.bite();sevenH.bite();sevenH.bite();sevenH.bite();
sevenH.bite();sevenH.bite();sevenH.bite();sevenH.bite();
console.log(sevenH.info());