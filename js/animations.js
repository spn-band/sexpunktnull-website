// ============================================
// ANIMATIONS MODULE - Logo Effects & Parallax
// ============================================

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroLogo = document.querySelector('.hero-logo');
    if (hero && heroLogo && scrolled < window.innerHeight) {
        heroLogo.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Glitch effect on logo hover
const logos = document.querySelectorAll('.logo img, .hero-logo');
logos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'none';
        setTimeout(() => {
            logo.style.animation = '';
        }, 10);
    });
});

// Random pulsing animation for hero logo
const heroLogo = document.querySelector('.hero-logo');
if (heroLogo) {
    function randomPulse() {
        const intensity = 1 + (Math.random() * 0.02 - 0.01); // 0.99 to 1.01
        const duration = 100 + Math.random() * 200; // 100-300ms
        
        heroLogo.style.transition = `transform ${duration}ms ease-out`;
        heroLogo.style.transform = `scale(${intensity})`;
        
        const nextPulseDelay = 50 + Math.random() * 150; // 50-200ms until next pulse
        setTimeout(randomPulse, nextPulseDelay);
    }
    
    randomPulse();
}
