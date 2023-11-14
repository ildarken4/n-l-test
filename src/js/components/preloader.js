import gsap from 'gsap';

var preloader = gsap.timeline();
preloader.to('#rocket',2, {x: '30vw', y: '10vh',ease: 'none'})
.to('#rocket',1.5, {rotate: '-270deg'}, 1)
.to('#rocket', 0.5, {x: '50vw', y: '20vh', rotate: '-360deg',ease: 'none'}, 2)
.to('#rocket', 1, {x: '100vw', y: '-50vh'})
.to('.preloader', 0.5, {opacity: 0, pointerEvents: 'none'})
.to('.hero__description', 0.5, {opacity: 1, y: 0} )