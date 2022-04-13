import { gsap } from "gsap";

gsap.to("#aldente", {rotation: 360, transformOrigin: "center", ease: "none", duration: 30, repeat: -1});

gsap.from("#hero-content", {duration: 2.5, ease: "power1.out", y: -100});

//gsap.to("#penne-pasta", {rotation: 45, transformOrigin: "center", ease: "none", duration: 30, repeat: 2});

gsap.from("#penne-pasta", {duration: 2, rotation: 45, ease: "bounce"});

gsap.from('#bowtie-pasta', 1, {
    duration: 2, rotation: -45, ease: "bounce"}
    );

    