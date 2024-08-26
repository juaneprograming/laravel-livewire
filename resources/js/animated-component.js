document.addEventListener('DOMContentLoaded', function () {
    // Asegúrate de que Livewire esté cargado
    Livewire.on('load', function () {
        gsap.from("#animatedText", {
            opacity: 0,
            y: -50,
            duration: 1.5,
            ease: "power3.out"
        });
    });
});

