import { gsap } from "gsap";

// gsap.from("#hero-content", {delay: 1, duration: 3, opacity: 0});

// gsap.to("#aldente" , {rotation: 360, transformOrigin: "center", ease: "none", duration: 30, repeat: -1});

// gsap.from("#penne-pasta", {duration: 1, rotation: -15, ease: "bounce.out"});

// gsap.from("#bowtie-pasta", {duration: 1, rotation: 15, ease: "bounce.out"});

const mainTL = gsap.timeline();

mainTL.from(".pastahero-img", {x:-500, duration: 3, ease: "power3.out"}, "heroimg")
.from("#hero-content", {duration: 3, opacity:0, y:50, delay: 1}, "heroimg+=2")
.from("#aldente", {x: 800, duration:3, rotation:360, ease: "power3.out"}, "animate")
.from("#pennesticker", {x:800, duration: 3, rotation:360, ease: "power3.out"}, "animate+=.75")
.from("#bowtiesticker" , {x:850, duration: 3, rotation: 360, ease: "power3.out"}, "animate+=1.5")

;