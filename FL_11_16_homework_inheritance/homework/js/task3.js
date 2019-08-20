function Pokemon(type, specie, fly, name, next) {
  this.type = type;
  this.specie = specie;
  this.fly = fly;
  this.name = name;
  this.evolving = next;
}

Pokemon.prototype.getType = function () {
  return this.type;
};
Pokemon.prototype.getSpecie = function () {
  return this.specie;
};
Pokemon.prototype.canFly = function () {
  return this.fly;
};
Pokemon.prototype.getPokemonType = function () {
  return this.name;
};
Pokemon.prototype.evolve = function () {
  if (this.evolving === undefined) {
    return this;
  }
  return this.evolving;
};

function Charmander() {
  Pokemon.call(this, 'Fire', 'Lizard Pokemon', false, 'Charmander', new Charmeleon());
}
Charmander.prototype = Object.create(Pokemon.prototype);
Charmander.prototype.constructor = Charmander;

function Charmeleon() {
  Pokemon.call(this, 'Fire', 'Flame Pokemon', false, 'Charmeleon', new Charizard());
}
Charmeleon.prototype = Object.create(Pokemon.prototype);
Charmeleon.prototype.constructor = Charmeleon;

function Charizard() {
  Pokemon.call(this, 'Fire', 'Flame Pokemon', true, 'Charizard');
}
Charizard.prototype = Object.create(Pokemon.prototype);
Charizard.prototype.constructor = Charizard;

function Pichu() {
  Pokemon.call(this, 'Electric', 'Mouse Pokemon', false, 'Pichu', new Pikachu());
}
Pichu.prototype = Object.create(Pokemon.prototype);
Pichu.prototype.constructor = Pichu;

function Pikachu() {
  Pokemon.call(this, 'Electric', 'Mouse Pokemon', false, 'Pikachu', new Raichu());
}
Pikachu.prototype = Object.create(Pokemon.prototype);
Pikachu.prototype.constructor = Pikachu;

function Raichu() {
  Pokemon.call(this, 'Electric', 'Mouse Pokemon', false, 'Raichu');
}
Raichu.prototype = Object.create(Pokemon.prototype);
Raichu.prototype.constructor = Raichu;