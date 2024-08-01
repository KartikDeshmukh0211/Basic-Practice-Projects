const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const button = document.querySelector('#btn')
const mainBody = document.querySelector('main')
const mainBodyTxt = document.querySelector('.backgroung-color span')
let colorHex = "#"

button.addEventListener('click', ()=>{

    for(let i = 0; i<6; i++){
        const randomNumber = Math.floor(Math.random() * hex.length)
        colorHex += hex[randomNumber]
    }
    mainBodyTxt.innerText = colorHex
    mainBody.style.backgroundColor = colorHex

    colorHex = "#"
})