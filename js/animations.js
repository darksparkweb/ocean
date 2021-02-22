import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const title = document.getElementById('title')
const subTitle = document.getElementById('subtitle')

const tl = gsap.timeline();


tl.to(title, {
    duration: 2,
    opacity: 1,
    ease: "sine.out",
    fontSize: '13em',
    delay: 0.5
})
tl.to(title, {
    duration: 4,
    ease: 'bounce.out',
    fontSize: '16em',
    y: -200,
    ease: "elastic",
    
})
tl.fromTo(title, {
    repeat:-1, 
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    
}, {
    yoyo:true,
    repeat: -1,
    duration: 1,
    scaleX: 1.1,
    scaleY: 1.1,
    
})
tl.to(subTitle, {
    duration: 1,
    opacity: 1,
    ease: "linear",
})
tl.to(subTitle, {
    yoyo:true,
    repeat: -1,
    duration: 1,
    
})