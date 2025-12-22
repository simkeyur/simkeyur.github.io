// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll animations
const scrollTargets = document.querySelectorAll('.scroll-target');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation to improve performance
            // observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.1
});

scrollTargets.forEach(target => {
    observer.observe(target);
});

// Typing Effect
const typingText = document.getElementById('typing-effect');
if (typingText) {
    const phrases = [
        "Leveraging Generative AI",
        "Building Intelligent Systems",
        "Building Scalable SaaS Solutions.",
        "Solving Complex Problems building AI Agents."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        let typeSpeed = isDeleting ? 50 : 120;

        if (isDeleting) {
            // Deleting
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        } else {
            // Typing
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end of phrase
            }
        }

        setTimeout(type, typeSpeed);
    }
    // Start the animation after a short delay
    setTimeout(type, 250);
}
