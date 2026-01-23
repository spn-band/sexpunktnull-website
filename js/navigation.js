// ============================================
// NAVIGATION MODULE - Smooth Scrolling & Links
// ============================================

// Smooth scrolling with sounds for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Hover sound for nav links
    anchor.addEventListener('mouseenter', playHoverSound);
    
    // Click sound and scroll
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        playClickSound();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// CTA Button - scroll to shows section with sound and logo glow
const ctaButton = document.querySelector('.cta-button');
const heroLogoWrapper = document.querySelector('.hero-logo-wrapper');

if (ctaButton && heroLogoWrapper) {
    // Hover sound and logo glow
    ctaButton.addEventListener('mouseenter', () => {
        playHoverSound();
        heroLogoWrapper.classList.add('glow-active');
    });
    
    // Remove logo glow when mouse leaves
    ctaButton.addEventListener('mouseleave', () => {
        heroLogoWrapper.classList.remove('glow-active');
    });
    
    // Click sound and scroll
    ctaButton.addEventListener('click', () => {
        playImpactSound();
        document.querySelector('#shows').scrollIntoView({ behavior: 'smooth' });
    });
}

// Logo click - scroll to top with sound
const logoLink = document.querySelector('#logo-link');
if (logoLink) {
    // Hover sound
    logoLink.addEventListener('mouseenter', playHoverSound);
    
    // Click sound and scroll to top
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        playClickSound();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
