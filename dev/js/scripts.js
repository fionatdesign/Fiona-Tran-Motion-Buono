import { gsap } from "gsap";

gsap.from("#hero-content", {delay: 1, duration: 3, opacity: 0});

gsap.to("#aldente" , {rotation: 360, transformOrigin: "center", ease: "none", duration: 30, repeat: -1});

gsap.from("#penne-pasta", {duration: 1, rotation: -15, ease: "bounce.out"});

gsap.from("#bowtie-pasta", {duration: 1, rotation: 15, ease: "bounce.out"});


//gsap.fromTo("#penne-pasta", {rotation: 30, transformOrigin: "center", ease: "none", duration: 1, repeat: -1}, {rotation:-30, transformOrigin: "center", ease: "none", duration: 1, reversed: 1});