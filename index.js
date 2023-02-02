import splt from "https://cdn.skypack.dev/spltjs@1.1.0";
import anime from "https://cdn.skypack.dev/animejs@3.2.1";

splt({});

anime({
    targets: '.char',
    translateY: [0, 40],
    direction: 'alternate',
    loop: true,
    delay: anime.stagger(50),
});