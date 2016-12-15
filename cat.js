function Cat(name, owner) {
  this.name = name;
  this.owner = owner;

}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};


let kitty = new Cat("garfield", "peter");

console.log(kitty.cuteStatement());


Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}`;
};

console.log(kitty.cuteStatement());

Cat.prototype.meow = function() {
  console.log("Meow");
};

kitty.meow();

kitty.meow = function() {
  console.log("Grrrrrrrrrrrrrrrr");
};

kitty.meow();
