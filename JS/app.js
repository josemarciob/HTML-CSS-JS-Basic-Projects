//SELECTORS
const links = document.querySelector('.links')
const navToggle = document.querySelector('.nav-toggle')

//EVENTS
/* OPEN LINK LIST */
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})

//FUNCTIONS
