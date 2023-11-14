import './vendor';
import './helpers';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import './modules/plugin';
import gsap from "gsap";
import './components/preloader';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';


ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);

lazyLoading.init();

import header from './components/header';
header.init();
import './components/social';
import './components/about';
import './components/footer';
import './components/back-to-top';

window.locomotiveScroll = locomotiveScroll;
export default {
    locomotiveScroll, 
    LocomotiveScroll,
    gsap
}
