// let health = 100

let target = {
  name: 'Templar',
  health: 100,
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
}

//reset function
function reset() {
  target.health = 100;
  target.strikes = 0;
  updateTarget()
}

function parry() {
  target.strikes++

  //when pushed punch = 2 damage, stab = 5 & doubleStab = 10

}

//Wants:

//1) When - health > 60 = color is green; 60 > health > 30 = color yellow; health < 30 color = red (flashing) 

//2)