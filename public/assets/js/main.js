window.addEventListener('scroll', function () {
  let navbar = document.getElementsByClassName('header-flex')
  let navbarr = document.getElementsByClassName('header-flex')
  if (window.pageYOffset >= 300) {
    navbar[0].classList.add('sticky')
  } else {
    navbar[0].classList.remove('sticky')
  }
})
//Get the button
var mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
var navLinks = document.getElementById('navLinks')
function showMenu() {
  navLinks.style.right = '0'
}
function hideMenu() {
  navLinks.style.right = '-200px'
}
