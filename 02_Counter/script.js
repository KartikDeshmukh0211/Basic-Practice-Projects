let count = 0;
const increase = document.querySelector('.btn-increase')
const reset = document.querySelector('.btn-reset')
const decrease = document.querySelector('.btn-decrease')
const countDisplay = document.querySelector('span')

increase.addEventListener('click',()=>{
    count++
    countDisplay.innerText = count
    if(count > 0) countDisplay.style.color = "GrEEn"
    if(count === 0) countDisplay.style.color = "#102A42"
    
})

decrease.addEventListener('click',()=>{
    count--
    countDisplay.innerText = count
    if(count < 0) countDisplay.style.color = "red"
    if(count === 0) countDisplay.style.color = "#102A42"
})

reset.addEventListener('click',()=>{
    count = 0
    countDisplay.innerText = count
    countDisplay.style.color = "#102A42"
})