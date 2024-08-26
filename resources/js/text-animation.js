import { gsap } from "gsap";

document.addEventListener('livewire:load', function () {
    Livewire.hook('element.initialized', (_el, component) => {
        if (component.name === 'text-animation') {
            animateText();
        }
    });
});

function animateText() {
    // Oculta inicialmente el texto
    gsap.set("#animatedText span", { opacity: 0, y: 50 });

    // Anima cada palabra
    gsap.to("#animatedText span", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
    });

    // Anima todo el h1 hacia el centro
    gsap.from("#animatedText", {
        opacity: 0,
        scale: 0.5,
        duration: 1.5,
        ease: "back.out(1.7)"
    });
}
