// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS con configuración personalizada
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        disable: 'mobile' // Desactivar en móviles para mejor rendimiento
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
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .contact-btn');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
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

    // Cargar imágenes correctas según el dispositivo
    function loadCorrectImages() {
        const isMobile = window.innerWidth <= 768;

        // Imágenes de secciones
        const transformImg = document.querySelector('#transform-img img');
        const standOutImg = document.querySelector('#stand-out-img img');
        const graphicDesignImg = document.querySelector('#graphic-design img');
        const photographyImg = document.querySelector('#photography img');

        if (isMobile) {
            if (transformImg) transformImg.src = './assets/images/mobile/image-transform.jpg';
            if (standOutImg) standOutImg.src = './assets/images/mobile/image-stand-out.jpg';
            if (graphicDesignImg) graphicDesignImg.src = './assets/images/mobile/image-graphic-design.jpg';
            if (photographyImg) photographyImg.src = './assets/images/mobile/image-photography.jpg';
        } else {
            if (transformImg) transformImg.src = './assets/images/desktop/image-transform.jpg';
            if (standOutImg) standOutImg.src = './assets/images/desktop/image-stand-out.jpg';
            if (graphicDesignImg) graphicDesignImg.src = './assets/images/desktop/image-graphic-design.jpg';
            if (photographyImg) photographyImg.src = './assets/images/desktop/image-photography.jpg';
        }
    }

    // Cargar imágenes correctas al inicio
    loadCorrectImages();

    // Recargar imágenes al cambiar el tamaño de la ventana
    window.addEventListener('resize', loadCorrectImages);
});
