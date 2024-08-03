const hamburgerMenu = document.querySelector('.hamburger-icon')
const closeBtn = document.querySelector('#close')
const sidebar = document.querySelector('nav')

hamburgerMenu.addEventListener('click', ()=>{
    sidebar.classList.toggle('sidebar')
})

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar')
})