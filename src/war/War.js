const Viking = require("../viking/Viking.js");

class War {
    constructor() {
        this.vikingArmy = ([]);
        this.saxonArmy = ([]);
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const saxon = this.saxonArmy[randomSaxonIndex];
        const viking = this.vikingArmy[randomVikingIndex];

        const oldHealth = saxon.health;
        saxon.receiveDamage(viking.strength);

        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
            return "A Saxon has died in combat";
        }

        return `A Viking has attacked a Saxon`;
    }

    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

        const saxon = this.saxonArmy[randomSaxonIndex];
        const viking = this.vikingArmy[randomVikingIndex];

        const oldHealth = viking.health;
        viking.receiveDamage(saxon.strength);

        if (viking.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
            return "A Viking has died in combat";
        }

        return viking.name + " has received " + saxon.strength + " points of damage"
    }

    showStatus() {
        if (this.vikingArmy > 0 && this.saxonArmy.length > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
        if (this.saxonArmy.length <= 0 && this.vikingArmy.length > 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length <= 0 && this.saxonArmy.length > 0) {
            return "Saxons have won the war of the century!"
        }

    }
}

module.exports = War;
