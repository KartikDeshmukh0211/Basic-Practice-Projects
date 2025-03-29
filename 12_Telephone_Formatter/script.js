const input = document.querySelector('input')

input.addEventListener('input', (e) =>{
    console.log(e.target.value )
    if(e.target.value.length  === 4){
        input.value = "+(" + e.target.value.substring(0,3) + ") - " + e.target.value.slice(3)
    }
})