// Soldier

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
    //  this.health = this.health - damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    //  const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    //  const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    //  const poorSaxon = this.saxonArmy[saxonIndex];
    //  const badViking = this.vikingArmy[vikingIndex];

    //  const damage = poorSaxon.receiveDamage(badViking.attack());

    //  if (poorSaxon.health <= 0) {
    //    this.saxonArmy.splice(saxonIndex, 1);
    //  }
    //  return damage;
    return this.armyAttack(this.vikingArmy, this.saxonArmy);
  }

  saxonAttack() {
    //  const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    //  const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);

    //  const badSaxon = this.saxonArmy[saxonIndex];
    //  const poorViking = this.vikingArmy[vikingIndex];

    //  const damage = poorViking.receiveDamage(badSaxon.attack());

    //  if (poorViking.health <= 0) {
    //    this.vikingArmy.splice(vikingIndex, 1);
    //  }
    //  return damage;
    return this.armyAttack(this.saxonArmy, this.vikingArmy);
  }

  armyAttack(attackArmy, defendArmy) {
    const attackIndex = Math.floor(Math.random() * attackArmy.length);
    const defendIndex = Math.floor(Math.random() * defendArmy.length);

    const attackSoldier = attackArmy[attackIndex];
    const defendSolider = defendArmy[defendIndex];

    const damage = defendSolider.receiveDamage(attackSoldier.attack());

    if (defendSolider.health <= 0) {
      defendArmy.splice(defendIndex, 1);
    }

    return damage;
  }

  showStatus() {
    //  if (this.saxonArmy.length === 0) {
    if (!this.saxonArmy.length) {
      return `Vikings have won the war of the century!`;
    }
    if (!this.vikingArmy.length) {
      return `Saxons have fought for their lives and survived another day...`;
    }
    return `Vikings and Saxons are still in the thick of battle.`;
  }
}
