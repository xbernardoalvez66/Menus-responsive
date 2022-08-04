const hamburguer = document.querySelector(".icon");
const navMenu = document.querySelector(".navi-ul");

hamburguer.addEventListener("click",responsive);

function responsive(){
	navMenu.classList.toggle('active');
}