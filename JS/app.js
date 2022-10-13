//SELECTORS
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')

//EVENTS
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

//FUNCTIONS
