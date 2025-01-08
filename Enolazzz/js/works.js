gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 1.2,
    easing:(t) => (1, 1.001 - Mathmpow(2, -10 *t))
})

function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timekine({
    ScrollTrigger:{
        trigger:'.img',
        scrub:ture
    }
})
.to('.img', {
    stagger: .2,
    y: -700,
    scrub
})
