document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Schedule a Tour button
    const tourButton = document.querySelector('.btn-primary');
    if (tourButton) {
        tourButton.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // WebP support detection
    const webpSupported = (function() {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext && canvas.getContext('2d')) &&
               canvas.toDataURL('image/webp').startsWith('data:image/webp');
    })();

    // Lazy-load CSS background images as sections approach the viewport
    const bgObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const el = entry.target;
                const src = webpSupported
                    ? (el.dataset.bgWebp || el.dataset.bg)
                    : el.dataset.bg;
                if (src) {
                    el.style.backgroundImage = "url('" + src + "')";
                }
                bgObserver.unobserve(el);
            }
        });
    }, { rootMargin: '300px 0px' });

    document.querySelectorAll('[data-bg]').forEach(function(el) {
        bgObserver.observe(el);
    });
});
