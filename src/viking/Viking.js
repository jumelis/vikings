const Soldier = require("../soldier/Soldier.js");

class Viking extends Soldier {
   constructor(name, health, strength){
    super(health, strength);
    this.name = name;
   }
   attack(){
      return this.strength;
  }
  receiveDamage(damage){
   super.receiveDamage(damage);
   if (this.health <= 0){
      return (`${this.name} has died in act of combat`);
   }
   return (`${this.name} has received ${damage} points of damage`);
}
battleCry(){
   return ("Odin Owns You All!")
}
}

module.exports = Viking;
