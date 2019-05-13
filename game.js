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

function giveParry(parryButton) {
  parryButton.disabled = true;
  targets[activeTarget].items.splice(0);
  targets[activeTarget].items.push(items.parry);
  targets[activeTarget].defenseIndex = 1;
  updateTarget()
}

function giveSwordBlock(swordButton) {
  targets[activeTarget].items.splice(0);
  targets[activeTarget].items.push(items.swordBlock);
  targets[activeTarget].defenseIndex = 2;
  updateTarget()
  swordButton.disabled = true;
}

function giveShield(shieldButton) {
  shieldButton.disabled = true;
  targets[activeTarget].items.splice(0);
  targets[activeTarget].items.push(items.shield);
  targets[activeTarget].defenseIndex = 3;
  updateTarget()
}

function addMods() {
  let runningTotal = 1
  for (let i = 0; i < targets[activeTarget].items.length; i++) {
    let item = targets[activeTarget].items[i];
    runningTotal += item
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
  buttonsDisabledOnDeath()
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
}

function buttonsDisabledOnDeath() {
  let disableButtons = document.getElementsByClassName('disable-buttons')
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    for (let i = 0; i < disableButtons.length; i++) {
      let button = disableButtons[i];
      button.setAttribute('disabled', 'true');
    }
  }
  setWinMotto()
}

function setActiveTarget(index) {
  activeTarget = index;
  updateTarget()
}

function resetButtons() {
  let resetButtons = document.getElementsByClassName('reset-buttons')
  if (targets[activeTarget].health > targets[activeTarget].death && targets[activeTarget].health <= 100) {
    for (let i = 0; i < resetButtons.length; i++) {
      let button = resetButtons[i];
      button.removeAttribute('disabled');
    }
  }
}

function reset() {
  targets[activeTarget].health = 100;
  targets[activeTarget].strikes = 0;
  targets[activeTarget].defenseIndex = 0;
  targets[activeTarget].items.slice(0);
  targets[activeTarget].itemIndex = 0;
  updateTarget()
  resetButtons()
  setWinMotto()
}

function setWinMotto() {
  if (targets[activeTarget].health <= targets[activeTarget].death) {
    document.querySelector('.win-motto').textContent = 'Molto Bene Assassino! Where other men blindly follow the truth, Remember, nothing is true. Where other men are limited by morality or law, Remember, everything is permitted. We work in the dark to serve the light.'
  } else {
    document.querySelector('.win-motto').textContent = 'Assassino vs Templar Knight'
  }
}

//Wants:

// 1) When Templar Knight reaches 0 so "Well done Assassin! 'Assassin Motto"
//     A) Show a kill cut scene gif

// 2)When - health > 60 = color is green; 60 > health > 30 = color yellow; health < 30 color = red