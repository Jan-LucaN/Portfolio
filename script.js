import { default as anime } from '../node_modules/animejs/lib/anime.es.js';

anime({
    targets: '.headline-hello', 
    translateX: [-100, 0],
    delay: 400,
    duration: 2000,
    easing: 'easeInOutExpo'
});