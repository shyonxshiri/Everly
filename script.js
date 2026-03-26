// Initialize interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Schedule a Tour button click handler
    const tourButton = document.querySelector('.btn-primary');
    if (tourButton) {
        tourButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! Please call us at 408-316-3016 to schedule a tour.');
        });
    }
    
    // Smooth scroll behavior for navigation links
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
});
