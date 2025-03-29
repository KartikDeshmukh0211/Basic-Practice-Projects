const randomNumber = Math.floor(Math.random() * 99) + 1
const userInput = document.querySelector('.input-number')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuess = document.querySelector('.all-guess')
const allGuessArray = []
const submitBtn = document.querySelector('.submit')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(randomNumber === parseInt(userInput.value)){
        result.innerText = "You Win!!"
        submitBtn.disabled = true
    }
    else if(randomNumber > parseInt(userInput.value)){
        result.innerText = "Too low!!"        
    }
    else{
        result.innerText = "Too high!!"
    }
    allGuessArray.push(userInput.value)
    allGuess.innerText = 'Your Guess : ' + allGuessArray.join(', ')
    form.reset()
})
