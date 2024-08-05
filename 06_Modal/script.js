const openBtn = document.querySelector('.open-container button')
const popupContainer = document.querySelector('.popup-container')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close')

openBtn.addEventListener('click', () =>{
    popupContainer.classList.add('opened')
    overlay.classList.add('added-overlay')
})

closeBtn.addEventListener('click', () =>{
    popupContainer.classList.remove('opened')
    overlay.classList.remove('added-overlay')
})

