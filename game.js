// let health = 100

let target = {
  name: 'Templar',
  health: 100,
  death: 0,
  strikes: 0,
}

function punch() {
  target.strikes++
  // target.health -= 5
  if (target.strikes > 0) {
    target.health -= 5
  }
  updateTarget()
}

function stab() {
  target.strikes++
  // target.health -= 5
  if (target.strikes > 0) {
    target.health -= 10
  }
  updateTarget()
}

function doubleStab() {
  target.strikes++
  // target.health -= 5
  if (target.strikes > 0) {
    target.health -= 15
  }
  updateTarget()
}

function updateTarget() {
  document.getElementById('health').innerText = target.health
  document.getElementById('strikes').innerText = target.strikes
  if (target.health <= target.death) {
    document.getElementById('punch').disabled = true;
  } else {
    document.getElementById('punch').disabled = false;
  }
  if (target.health <= target.death) {
    document.getElementById('stab').disabled = true;
  } else {
    document.getElementById('stab').disabled = false;
  }
  if (target.health <= target.death) {
    document.getElementById('double-stab').disabled = true;
  } else {
    document.getElementById('double-stab').disabled = false;
  }
}

//reset function
function reset() {
  target.health = 100;
  target.strikes = 0;
  updateTarget()
}

// function parry() {
//   target.strikes++
//   if (target.health == 0)
  //when pushed punch = 2 damage, stab = 5 & doubleStab = 10

// }

//Wants:

//1) When - health > 60 = color is green; 60 > health > 30 = color yellow; health < 30 color = red (flashing) 

//2)