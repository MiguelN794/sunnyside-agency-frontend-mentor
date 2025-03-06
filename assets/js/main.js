// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS con configuración personalizada
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Inicializar Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
        // Opciones personalizadas para Fancybox
        loop: true,
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "close"
        ],
        animationEffect: "fade"
    });

    // Cerrar el menú móvil al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Implementar botón "Volver arriba"
    const backToTop = document.querySelector('#back-to-top');

    if (backToTop) {
        const toggleBackToTop = () => {
            if (window.scrollY > 100) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        };

        window.addEventListener('load', toggleBackToTop);
        document.addEventListener('scroll', toggleBackToTop);

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
