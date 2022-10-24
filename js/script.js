const header = document.querySelector("header");
const moreDetails = document.querySelector('.btnPortfolio')
const closeDialog = document.querySelector('#closeDialog')
const dialog = document.querySelector('.dialog')
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

moreDetails.addEventListener('click', (e)=>{
	e.preventDefault()
	dialog.style.display = 'flex'
	dialog.style.flexDirection = 'column'
})

closeDialog.addEventListener('click', (e)=>{

	dialog.style.display = 'none'

})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})