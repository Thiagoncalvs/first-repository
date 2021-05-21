const ContainerSlide = document.querySelector('.carousel-slide')
const ImagensSlide = document.querySelectorAll('.carousel-slide img')

// Buttons

const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

// Counter

let Counter = 4
const size = ImagensSlide[0].clientWidth

ContainerSlide.style.transition = "transform 10s ease-in-out"
Counter++
ContainerSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)'

ContainerSlide.addEventListener('transitionend', ()=>{
    console.log(ContainerSlide[Counter])
    if(ImagensSlide[Counter].id === 'firstClone'){
        ContainerSlide.style.transition = 'none'
        Counter = ImagensSlide.length -Counter
        ContainerSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)'
    }
})





// Button Listeners
/*
nextBtn.addEventListener('click', () => {
    if (Counter >= ImagensSlide.length -1) return
    ContainerSlide.style.transition = "transform 1s ease-in-out"
    Counter++
    ContainerSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)'
})

prevBtn.addEventListener('click', () => {
    if (Counter <= 0) return
    ContainerSlide.style.transition = "transform 1s ease-in-out"
    Counter--
    ContainerSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)'
})

ContainerSlide.addEventListener('transitionend', ()=>{
    console.log(ContainerSlide[Counter])
    if(ImagensSlide[Counter].id === 'lastClone'){
        ContainerSlide.style.transition = 'none'
        Counter = ImagensSlide.length -2
        ContainerSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)'
    }
    if(ImagensSlide[Counter].id === 'firstClone'){
        ContainerSlide.style.transition = 'none'
        Counter = ImagensSlide.length -Counter
        ContainerSlide.style.transform = 'translateX(' + (-size * Counter) + 'px)'
    }
})
*/