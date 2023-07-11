
const Soldier = require("../soldier/Soldier.js");

class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
      }
    
      attack(){
        return this.strength;
    }

    receiveDamage(damage){
       super.receiveDamage(damage);
       if (this.health <= 0){
        return (`A Saxon has died in combat`);
       }
       return (`A Saxon has received ${damage} points of damage`);

    }
}

module.exports = Saxon;
