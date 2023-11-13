import gsap from "gsap";

var handsShake = gsap.timeline({repeat: -1, repeatDelay: 2.3});

 handsShake.to(".footer__pic", {ease: 'ease-out', y: 0, duration: 0.1})
 .to(".footer__pic", {ease: 'ease-out', x: -10, y: -20, scale: 1.2, rotate: "-10deg", duration: 0.4})
 .to(".footer__pic", {ease: 'ease-out', x: 10, y: -20, scale: 1.4, rotate: "10deg", duration: 0.4})
 .to(".footer__pic", {ease: 'ease-out', x: 0, y: 0, scale: 1, rotate: 0, duration: 0.4});
  