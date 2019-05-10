// let health = 100

let target = {
  name: 'Templar',
  health: 100,
  hits: 0,
}

function punch() {
  target.hits++
  // target.health -= 5
  if (target.hits > 0) {
    target.health -= 5
  }
  updateTarget()
}

function updateTarget() {
  document.getElementById('health').innerText = target.health
  document.getElementById('hits').innerText = target.hits
}


// document.getElementById('hits').innerText = target.health