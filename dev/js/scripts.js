import { gsap } from "gsap";

gsap.to("#aldente", {rotation: 360, transformOrigin: "center", ease: "none", duration: 30, repeat: -1});

gsap.from("#hero-content", {delay: 1, duration: 3, opacity: 0});

//gsap.to("#penne-pasta", {rotation: 45, transformOrigin: "center", ease: "none", duration: 30, repeat: 2});

//gsap.from("#penne-pasta", {duration: 2, rotation: 45, ease: "bounce"});
