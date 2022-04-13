import { gsap } from "gsap";

gsap.to("#aldente", {rotation: 360, transformOrigin: "center", ease: "none", duration: 30, repeat: -1});

gsap.from("#hero-content", {duration: 2.5, ease: "power1.out", y: -100});

//gsap.to("#bowtie-pasta", {});