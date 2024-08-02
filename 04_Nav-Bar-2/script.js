const hambergerMenu = document.querySelector('.hamburger-menu')
const dropdownMenu = document.querySelector('ul')
let clicked = false

hambergerMenu.addEventListener('click', () =>{
    dropdownMenu.classList.toggle('dropdown')
})