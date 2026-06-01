// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    const setMenuIcon = (name) => {
        mobileMenuButton.innerHTML = `<i data-lucide="${name}"></i>`;
        if (window.lucide) lucide.createIcons();
    };

    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        setMenuIcon(isOpen ? 'x' : 'menu');
    });

    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            setMenuIcon('menu');
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

// Render Lucide icons (replaces [data-lucide] placeholders with inline SVGs)
if (window.lucide) {
    lucide.createIcons();
}
