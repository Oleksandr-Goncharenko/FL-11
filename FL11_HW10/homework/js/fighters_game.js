function Fighter(fighterInfo) {
  const NAME = fighterInfo.name;
  const DAMAGE = fighterInfo.damage;
  const HEALTH = fighterInfo.hp;
  const AGILITY = fighterInfo.agility;
  let currentHP = HEALTH;
  let currentWins = 0;
  let currentLoses = 0;

  this.getName = () => NAME;
  this.getDamage = () => DAMAGE;
  this.getAgility = () => AGILITY;
  this.getHealth = () => currentHP;
  this.attack = opponent => {
    const missChance = opponent.getAgility();
    const hundredPercent = 101;
    const hit = Math.floor(Math.random() * hundredPercent);
    if (hit > missChance) {
      opponent.dealDamage(DAMAGE);
      console.log(`${NAME} make ${DAMAGE} damage to ${opponent.getName()}`);
    } else {
      console.log(`${NAME} attack missed`);
    }
  };
  this.logCombatHistory = () => {
    console.log(`Name : ${NAME}, Wins: ${currentWins}, Loses: ${currentLoses}`);
  };
  this.heal = amount => {
    currentHP += amount;
    currentHP > HEALTH ? currentHP = HEALTH : currentHP;
    console.log(`Fighter ${this.getName()} was healed to ${currentHP} (of ${HEALTH}) HP`);
  };
  this.dealDamage = damage => {
    currentHP -= damage;
    if (currentHP < 0) {
      currentHP = 0;
    }
  };
  this.addWin = () => currentWins++;
  this.addLoss = () => currentLoses++;
}
function battle(good, evil, battleStarted = false) {
  if (good.getHealth() === 0 || evil.getHealth() === 0) {
    let deadMan, winner;
    if (good.getHealth() === 0) {
      deadMan = good;
      winner = evil;
    } else {
      deadMan = evil;
      winner = good;
    }
    if (!battleStarted) {
      console.log(`${deadMan.getName()} is dead and can't fight`);
    } else {
      console.log(winner.getName(), 'won the battle!');
      deadMan.addLoss();
      winner.addWin();
    }
  } else {
    good.attack(evil);
    battle(evil, good, true);
  }
}

const fighter1 = new Fighter({name: 'Alex', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Frank', damage: 20, hp: 100, agility: 25});
battle(fighter1, fighter2);