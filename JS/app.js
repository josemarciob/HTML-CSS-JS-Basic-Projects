//SELECTORS

/* NAV */
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')
/* CONTROLS */
const controls = document.querySelectorAll('.control')
const items = document.querySelectorAll('.item')
/* CAR & CAR PANEL */
const car = document.querySelector('.car-container')
const carPanelBoard = document.querySelector('.car-panel-board_container')
/* CAR CONTROLS */
const controlFingerprint = document.querySelector('.control-fingerprint')
const controlBrightness = document.querySelector('.control-brightness')
const controlStatistics = document.querySelector('.control-statistics')
/* CAR BUTTON LOGIN & DISCONNECT */
const loginFingerprint = document.querySelector('.login')
const disconnectFingerprint = document.querySelector('.disconnect')

//END SELECTORS

/* VARS CONTROLS*/
let currentItem = 0
const maxItems = items.length

//EVENTS

/* EVENT CLICK, OPEN NAV LINK LIST */
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})
/* EVENT CLICK, CONTROLS ACESS*/
controlFingerprint.addEventListener('click', controlsAcess)
/* EVENT CLICK, CONTROL CAROUSEL */
controls.forEach(control => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-left')

    if (isLeft) {
      currentItem -= 1
    } else {
      currentItem += 1
    }

    if (currentItem >= maxItems) {
      currentItem = 0
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1
    }

    items.forEach(item => item.classList.remove('current-item'))

    /* TRY TO PLACE THE ELEMENT ALWAYS CENTRALIZED */
    items[currentItem].scrollIntoView({
      inline: 'center',
      behavior: 'smooth'
    })

    items[currentItem].classList.add('current-item')
  })
})
//END EVENTS

//FUNCTIONS
function controlsAcess() {
  /* ADD/REMOVE CONTROLS */
  controlBrightness.classList.toggle('show-control')
  controlStatistics.classList.toggle('show-control')

  /* ADD/REMOVE CONTROLS LONGIN & DISCONNECT*/
  loginFingerprint.classList.toggle('login-fingerprint')
  disconnectFingerprint.classList.toggle('show-disconnect')

  /* ADD/REMOVE CAR CONTAINER */
  car.classList.toggle('show-car')

  /* ADD/REMOVE CAR PANEL BOARD */
  carPanelBoard.classList.toggle('show-car-panel-board')
}
// END FUNCTIONS
