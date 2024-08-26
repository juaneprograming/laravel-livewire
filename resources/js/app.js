import { gsap } from "gsap";
import './bootstrap';
document.addEventListener('DOMContentLoaded', function () {
    gsap.from("#animatedText", {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out"
    });
});

// Para manejar Livewire y animar después de que se renderice el DOM:
document.addEventListener('livewire:load', function () {
    Livewire.hook('message.processed', (message, component) => {
        gsap.from("#animatedText", {
            opacity: 0,
            y: -50,
            duration: 1.5,
            ease: "power3.out"
        });
    });
});

// animacion de imagen
document.addEventListener('DOMContentLoaded', function () {
    gsap.from("#animatedImage", {
        y: -6,  // Mueve la imagen 10 píxeles hacia arriba
        scale: 1.05,  // Incrementa ligeramente el tamaño
        duration: 2,  // Duración de cada ciclo de animación
        ease: "power1.inOut",  // Easing suave para el efecto de levitación
        repeat: 0,  // Repetir indefinidamente
        yoyo: true   // Revertir la animación al final de cada ciclo
    });
});

document.addEventListener('livewire:load', function () {
    Livewire.hook('message.processed', (message, component) => {
        gsap.from("#animatedImage", {
            y: -10,  // Mueve la imagen 10 píxeles hacia arriba
            scale: 1.05,  // Incrementa ligeramente el tamaño
            duration: 2,  // Duración de cada ciclo de animación
            ease: "power1.inOut",  // Easing suave para el efecto de levitación
            repeat: 0,  // Repetir indefinidamente
            yoyo: true   // Revertir la animación al final de cada ciclo
        });
    });
});

