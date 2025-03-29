const input = document.querySelector('input')
const lowerCase = document.querySelector('.lower-case')
const upperCase = document.querySelector('.upper-case')
const camelCase = document.querySelector('.camel-case')
const pascelCase = document.querySelector('.pascel-case')
const snakeCase = document.querySelector('.snake-case')
const kebabCase = document.querySelector('.kebab-case')
const trim = document.querySelector('.trim')

input.addEventListener('input', (e) =>{
    console.dir(input.value)
    lowerCase.innerText = input.value.toLowerCase()
    upperCase.innerText = input.value.toUpperCase()
    if(!input.value){
        camelCase.innerText = ""
        pascelCase.innerText = ""
        snakeCase.innerText = ""
        kebabCase.innerText = ""
    }
    else{
        camelCase.innerText = convertToCamelCase(input.value)
        pascelCase.innerText = convertToPascelCase(input.value)
        snakeCase.innerText = convertToSnakeCase(input.value)
        kebabCase.innerText = convertToKebabCase(input.value)
    } 
    trim.innerText = convertToTrim(input.value) 
})

function convertToCamelCase(str){
    const arr = str.split(" ")
    let ans = ""
    arr.forEach((ele) =>{
        if(!ans){
            ans = ans + ele.toLowerCase()
        }
        else{
            ans = ans + ele[0].toUpperCase() + ele.toLowerCase().slice(1)
        }
    })

    return ans
}
function convertToPascelCase(str){
    const arr = str.split(" ")
    let ans = ""
    arr.forEach((ele) =>{
        ans = ans + ele[0].toUpperCase() + ele.toLowerCase().slice(1)
    })

    return ans
}

function convertToSnakeCase(str){
    const arr = str.split(" ")
    let ans = ""
    arr.forEach((ele, idx) =>{
        ans = ans + ele.toLowerCase()
        if(idx != arr.length - 1){
            ans = ans + "_"
        }
    })

    return ans
}
function convertToKebabCase(str){
    const arr = str.split(" ")
    let ans = ""
    arr.forEach((ele, idx) =>{
        ans = ans + ele.toLowerCase()
        if(idx != arr.length - 1){
            ans = ans + "-"
        }
    })

    return ans
}
function convertToTrim(str){
    const arr = str.split(" ")
    let ans = ""
    arr.forEach((ele) =>{
        ans = ans + ele.toLowerCase()
    })

    return ans
}