//SELECTORS
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')

const car = document.querySelector('.car-container')
const carPanelBoard = document.querySelector('.car-panel-board_container')

const controlFingerprint = document.querySelector('.control-fingerprint')
const controlBrightness = document.querySelector('.control-brightness')
const controlStatistics = document.querySelector('.control-statistics')

//EVENTS
/* OPEN LINK LIST */
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

controlFingerprint.addEventListener('click', function () {
  controlBrightness.classList.toggle('show-control')
  controlStatistics.classList.toggle('show-control')
  car.classList.toggle('show-car')
  carPanelBoard.classList.toggle('show-car-panel-board')
})

//FUNCTIONS
