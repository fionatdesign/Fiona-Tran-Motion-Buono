import { gsap } from "gsap";

// gsap.from("#hero-content", {delay: 1, duration: 3, opacity: 0});

// gsap.to("#aldente" , {rotation: 360, transformOrigin: "center", ease: "none", duration: 30, repeat: -1});

// gsap.from("#penne-pasta", {duration: 1, rotation: -15, ease: "bounce.out"});

// gsap.from("#bowtie-pasta", {duration: 1, rotation: 15, ease: "bounce.out"});

const mainTL = gsap.timeline();

mainTL.from(".pastahero-img", {x:-500, duration: 3, ease: "power3.out"}, "heroimg")
.from("#hero-content", {duration: 2, opacity:0, y:40, delay: .3, ease: "power3.out"}, "heroimg")
.from("#aldente", {x: 700, duration:3, display: "none", rotation:360, ease: "power3.out"}, "heroimg+=.1")
.from("#bowtiesticker" , {x:700, duration: 3, display: "none", rotation: 360, ease: "power3.out"}, "heroimg+=.1")
.from("#pennesticker", {x:700, duration: 3, display: "none", rotation:360, ease: "power3.out"}, "heroimg+=.1")
;