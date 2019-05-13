let activeTarget = 0;

let targets = [{
  name: 'Templar Knight',
  health: 100,
  death: 0,
  defenses: ['Vulnerable', 'Parry', 'Sword Block', 'Shield'],
  defenseIndex: 0,
  strikes: 0,
  items: [],
  itemIndex: 0,
  attacks: {
    punch: 5,
    stab: 10,
    doublestab: 20,
  }
}]

let items = {
  parry: -.2,
  swordBlock: -.3,
  shield: -.5,
}

function giveParry() {
  targets[activeTarget].items.shift();
  targets[activeTarget].itemIndex = 0;
  targets[activeTarget].items.push(items.parry);
  targets[activeTarget].defenseIndex = 1;
  updateTarget()
}

function giveSwordBlock() {
  targets[activeTarget].items.shift();
  targets[activeTarget].itemIndex = 0;
  targets[activeTarget].items.push(items.swordBlock);
  targets[activeTarget].defenseIndex = 2;
  updateTarget()
}

function giveShield() {
  targets[activeTarget].items.shift();
  targets[activeTarget].itemIndex = 0;
  targets[activeTarget].items.push(items.shield);
  targets[activeTarget].defenseIndex = 3;
  updateTarget()
}

function addMods() {
  let runningTotal = 1
  for (let i = 0; i < targets[activeTarget].items.length; i++) {
    let item = targets[activeTarget].items[i];
    total += item
  }
  return runningTotal
}

function punch() {
  targets[activeTarget].health -= targets[activeTarget].attacks.punch * addMods()
  targets[activeTarget].strikes++
  updateTarget()
}

function stab() {
  targets[activeTarget].health -= targets[activeTarget].attacks.stab * addMods()
  targets[activeTarget].strikes++
  updateTarget()
}

function doubleStab() {
  targets[activeTarget].health -= targets[activeTarget].attacks.doublestab * addMods()
  targets[activeTarget].strikes++
  updateTarget()
}

function updateTarget() {
  document.getElementById('health').innerText = targets[activeTarget].health;
  document.getElementById('strikes').innerText = targets[activeTarget].strikes;
  document.getElementById('defenses').innerText = targets[activeTarget].defenses[targets[activeTarget].defenseIndex]
  if (targets[activeTarget].health <= 0) {
    document.getElementById('health').innerText = 0
  } else {
  }
  if (targets[activeTarget].health >= 100) {
    document.getElementById('health').innerText = 100
  } else {
  }
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.getElementById('punch').disabled = true;
  } else {
    document.getElementById('punch').disabled = false;
  }
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.getElementById('stab').disabled = true;
  } else {
    document.getElementById('stab').disabled = false;
  }
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.getElementById('double-stab').disabled = true;
  } else {
    document.getElementById('double-stab').disabled = false;
  }
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.getElementById('parry').disabled = true;
  } else {
    document.getElementById('parry').disabled = false;
  }
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.getElementById('swordBlock').disabled = true;
  } else {
    document.getElementById('swordBlock').disabled = false;
  }
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.getElementById('shield').disabled = true;
  } else {
    document.getElementById('shield').disabled = false;
  }
}

function setActiveTarget(index) {
  activeTarget = index;
  updateTarget()
}

function reset() {
  targets[activeTarget].health = 100;
  targets[activeTarget].strikes = 0;
  targets[activeTarget].defenseIndex = 0;
  targets[activeTarget].items.shift();
  targets[activeTarget].items.shift();
  targets[activeTarget].items.shift();
  targets[activeTarget].itemIndex = 0;
  updateTarget()
}

function setWinMotto() {
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.querySelector('.win-motto').innerText = 'Where other men blindly follow the truth, Remember, nothing is true. Where other men are limited by morality or law, Remember, everything is permitted. We work in the dark to serve the light.'
  }
}

// if (targets[activeTarget].health <= targets[activeTarget].death) {
  //   document.getElementById('punch').disabled = true;
  // } else {
  //   document.getElementById('punch').disabled = false;
  // }
  // if (targets[activeTarget].health <= targets[activeTarget].death) {
  //   document.getElementById('stab').disabled = true;
  // } else {
  //   document.getElementById('stab').disabled = false;
  // }
  // if (targets[activeTarget].health <= targets[activeTarget].death) {
  //   document.getElementById('double-stab').disabled = true;
  // } else {
  //   document.getElementById('double-stab').disabled = false;
  // }
  // if (targets[activeTarget].health <= targets[activeTarget].death) {
  //   document.getElementById('parry').disabled = true;
  // } else {
  //   document.getElementById('parry').disabled = false;
  // }
  // if (targets[activeTarget].health <= targets[activeTarget].death) {
  //   document.getElementById('swordBlock').disabled = true;
  // } else {
  //   document.getElementById('swordBlock').disabled = false;
  // }
  // if (targets[activeTarget].health <= targets[activeTarget].death) {
  //   document.getElementById('shield').disabled = true;
  // } else {
  //   document.getElementById('shield').disabled = false;
  // }
  // let b = targets[activeTarget].health <= targets[activeTarget].death
  // if (targets[activeTarget].health <= targets[activeTarget].death) {
  //   b.setAttribute('disabled', '')
  // } else {
  // }


//when pushed punch = 2 damage, stab = 5 & doubleStab = 10

// function parry() {
//   targets[activeTarget].defenseIndex++
//   if (targets[activeTarget].defenseIndex == targets[activeTarget].defenses.length[1]) {
//     document.getElementById('parry').disabled = true;
//   } else {
//     document.getElementById('parry').disabled = false;
//   }
// }
//cats[activeCat].moodIndex == cats[activeCat].moods.length - 1
//Wants:

// 1) When Templar Knight reaches 0 so "Well done Assassin!"
//     A) Show a kill cut scene gif

// 2)When - health > 60 = color is green; 60 > health > 30 = color yellow; health < 30 color = red