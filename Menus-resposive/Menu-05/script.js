const tooggleButton = document.getElementByClassName('toogle-button')[0]
const navbarLinks = document.getElementByClassName('navbar-links')[0]

tooggleButton.addEventListener('click',() =>{

	navbarLinks.classList.toogle('active')

})