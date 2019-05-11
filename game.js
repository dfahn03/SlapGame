// let health = 100

let target = {
  name: 'Templar',
  health: 100,
  strikes: 0,
}

function punch() {
  target.hits++
  // target.health -= 5
  if (target.strikes > 0) {
    target.health -= 5
  }
  updateTarget()
}

function updateTarget() {
  document.getElementById('health').innerText = target.health
  document.getElementById('strikes').innerText = target.strikes
}


// document.getElementById('hits').innerText = target.health