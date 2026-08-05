// Script para interactividad del Portafolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling para los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste por la barra de navegación fija
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Animación de "Fade In" al hacer scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que ya apareció
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});
