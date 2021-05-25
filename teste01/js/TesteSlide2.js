class SlideCarouselAutoJS{
    constructor(id){
        this.SlideCA = document.querySelector(`[data-SlideCarouselAuto="${id}"]`)
        this.active = 0
        console.log(this.SlideCA)
        this.activeSlide(1)
    }

    activeSlide(index){
        this.active = index
        this.itens = this.SlideCA.querySelectorAll('.SlideCarouselAuto-Itens > *')
        this.itens[index].classList.add('active')
    }
}

new SlideCarouselAutoJS('SlideCarouselAuto')