// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        // Toggle hamburger icon
        const icon = mobileMenuButton.textContent.trim();
        mobileMenuButton.textContent = icon === '☰' ? '✕' : '☰';
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuButton.textContent = '☰';
        });
    });
}

// Subtle fade-in on scroll
const fadeTargets = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.1
});

fadeTargets.forEach(target => {
    observer.observe(target);
});
