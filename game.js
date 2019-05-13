// let health = 100
let activeTarget = 0;

let targets = [{
  name: 'Templar Knight',
  health: 100,
  death: 0,
  defenses: ['Vulnerable', 'Parry', 'Sword Block', 'Shield'],
  defenseIndex: 0,
  strikes: 0,
  items: [],
  attacks: {
    punch: 5,
    stab: 10,
    doublestab: 20,
  }
}]



let items = {
  parry: 0.8,
  swordBlock: 0.7,
  shield: 0.5,
}

function giveParry() {
  targets[activeTarget].items.push(items.parry);
  targets[activeTarget].defenseIndex += 1
  // if (targets[activeTarget].defenseIndex == 1) {
  //   document.getElementById('parry').disabled = true;
  // } else {
  // }
  updateTarget()
}

function giveSwordBlock() {
  targets[activeTarget].items.push(items.swordBlock);
  targets[activeTarget].defenseIndex += 2
  updateTarget()
}

function giveShield() {
  targets[activeTarget].items.push(items.shield);
  targets[activeTarget].defenseIndex += 3
  updateTarget()
}

function addMods() {
  let total = 0
  for (let i = 0; i < targets[activeTarget].items.length; i++) {
    let item = targets[activeTarget].items[i];
    total += item
  }
  return total
}


function punch() {
  targets[activeTarget].strikes++
  if (targets[activeTarget].strikes > 0) {
    targets[activeTarget].health -= targets[activeTarget].attacks.punch * addMods()
  }
  updateTarget()
}

function stab() {
  targets[activeTarget].strikes++
  if (targets[activeTarget].strikes > 0) {
    targets[activeTarget].health -= targets[activeTarget].attacks.stab * addMods()
  }
  updateTarget()
}

function doubleStab() {
  targets[activeTarget].strikes++
  if (targets[activeTarget].strikes > 0) {
    targets[activeTarget].health -= targets[activeTarget].attacks.doublestab * addMods()
  }
  updateTarget()
}



function updateTarget() {
  document.getElementById('health').innerText = targets[activeTarget].health;
  document.getElementById('strikes').innerText = targets[activeTarget].strikes;
  document.getElementById('defenses').innerText = targets[activeTarget].defenses[targets[activeTarget].defenseIndex]
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.getElementById('health').innerText = targets[activeTarget].death
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
  updateTarget()
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