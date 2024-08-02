const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'WEB DEVELOPER',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'WEB DESIGNER',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'INTERN',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'THE BOSS',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const image = document.querySelector('.img-container img')
const personName = document.querySelector('.name')
const job = document.querySelector('.job')
const info = document.querySelector('.review-container p')
const leftChevron = document.querySelector('.btn-left')
const rightChevron = document.querySelector('.btn-right')
const surpriseBtn = document.querySelector('.surprise-btn')
let idx = 0

rightChevron.addEventListener('click', () =>{
    idx++
    if(idx >= reviews.length){
        idx = idx % reviews.length
    }
    
    setPersonDetail(reviews[idx])
})

leftChevron.addEventListener('click', () =>{
    idx--
    if(idx < 0){
        idx = reviews.length - 1
    }

    setPersonDetail(reviews[idx])
})

surpriseBtn.addEventListener('click', () =>{
    idx = Math.floor(Math.random() * reviews.length)
    setPersonDetail(reviews[idx])
})


function setPersonDetail(data){
    image.src = data.img
    personName.innerText = data.name
    job.innerText = data.job
    info.innerText = data.text
}