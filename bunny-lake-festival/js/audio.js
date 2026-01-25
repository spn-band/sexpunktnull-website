// ============================================
// AUDIO MODULE - Sound Effects System
// ============================================

// Audio objects for sound effects
const hoverSound = new Audio('sounds/hover.mp3');
const clickSound = new Audio('sounds/click.mp3');
const impactSound = new Audio('sounds/impact.mp3');

// Set volume (0.0 to 1.0)
hoverSound.volume = 0.5;
clickSound.volume = 0.7;
impactSound.volume = 0.6;

// Play hover sound
function playHoverSound() {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(e => console.log('Hover sound:', e.message));
}

// Play click sound
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log('Click sound:', e.message));
}

// Play impact sound
function playImpactSound() {
    impactSound.currentTime = 0;
    impactSound.play().catch(e => console.log('Impact sound:', e.message));
}

// Export functions for use in other modules
// (In browser, these are globally available)
