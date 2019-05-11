// let health = 100
let activeTarget = 0;

let targets = [{
  name: 'Templar Knight',
  health: 100,
  death: 0,
  defenses: ['Vulnerable', 'Parry', 'Shield'],
  strikes: 0,
  attacks: {
    punch: 5,
    stab: 10,
    doublestab: 15,
  }
}, {
  name: 'Templar',
  health: 100,
  death: 0,
  defenses: ['Vulnerable', 'Parry', 'Shield'],
  strikes: 0,
  attacks: {
    punch: 5,
    stab: 10,
    doublestab: 15,
  }
}]
function punch() {
  targets[activeTarget].strikes++
  // targets.health -= 5
  if (targets[activeTarget].strikes > 0) {
    targets[activeTarget].health -= targets[activeTarget].attacks.punch
  }
  updateTarget()
}

function stab() {
  targets[activeTarget].strikes++
  // targets.health -= 5
  if (targets[activeTarget].strikes > 0) {
    targets[activeTarget].health -= 10
  }
  updateTarget()
}

function doubleStab() {
  targets[activeTarget].strikes++
  // targets.health -= 5
  if (targets[activeTarget].strikes > 0) {
    targets[activeTarget].health -= 15
  }
  updateTarget()
}

function updateTarget() {
  document.getElementById('health').innerText = targets[activeTarget].health;
  document.getElementById('strikes').innerText = targets[activeTarget].strikes;
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
}

function setActiveTarget(index) {
  activeTarget = index;
  updateTarget()
}

//reset function
function reset() {
  targets[activeTarget].health = 100;
  targets[activeTarget].strikes = 0;
  // document.getElementById('defenses').innerText = targets.defenses['0']
  updateTarget()
}

//when pushed punch = 2 damage, stab = 5 & doubleStab = 10

// function parry() {
//   if (onclick == true) {
//     document.getElementById('parry').disabled = true;
//   } else {
//     document.getElementById('parry').disabled = false;
//   }
// }

//Wants:

// 1) When Templar Knight reaches 0 so "Well done Assassin!"
//     A) Show a kill cut scene gif

//2)When - health > 60 = color is green; 60 > health > 30 = color yellow; health < 30 color = red (flashing)