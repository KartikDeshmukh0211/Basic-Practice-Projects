const openBtn = document.querySelectorAll('.question-box i')
const question = document.querySelectorAll('.question-container')



openBtn.forEach((ele, i) =>{
    console.log(ele)
    ele.addEventListener('click', ()=>{
        question[i].classList.toggle('open')
    })   
})
//by using forEach we have add three eventlistner on three btns with thier respective question box