var burger = document.querySelector('.menu__burger')

burger.addEventListener('click', () => {
	burger.parentElement.classList.toggle('active')
})