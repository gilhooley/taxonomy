
var Bee = function(age) {
  Grub.call(this, age);
  this.age = 5;
  this.color = "yellow";
  this.job = "Keep on growing";
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

