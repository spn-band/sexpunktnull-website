// ============================================
// AUDIO MODULE - Sound Effects System
// ============================================

// Audio objects for sound effects
const hoverSound = new Audio('sounds/hover.wav');
const clickSound = new Audio('sounds/click.wav');

// Set volume (0.0 to 1.0)
hoverSound.volume = 0.5;
clickSound.volume = 0.7;

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

// Export functions for use in other modules
// (In browser, these are globally available)
