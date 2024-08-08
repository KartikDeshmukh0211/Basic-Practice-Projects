const video = document.querySelector('.video')
const button = document.querySelector('.button')
const preloader = document.querySelector('.preloader')



button.addEventListener('click', ()=>{
    button.classList.toggle('slide')
    if(button.classList.contains('slide')){
        video.pause()
    }
    else{
        video.play()
    }
})

window.addEventListener('load',()=>{
    preloader.classList.add("hide-preloader");
})