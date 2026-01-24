// ============================================
// FIREBALL MODULE - Random Fire Effect (Up to 2 simultaneous)
// ============================================

// CONFIGURATION - Set to false for single video mode (only 1 at a time) or true for multishot (2 possible videos overlapping)
const DUAL_FIREBALL_MODE = false;

// Detect if mobile/iOS for format selection
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const videoFormat = isMobile ? 'mp4' : 'webm';

// Available fireball videos (will use mp4 on mobile, webm on desktop)
const fireballVideos = [
    `videos/fireball_1.${videoFormat}`,
    `videos/fireball_2.${videoFormat}`,
    `videos/fireball_3.${videoFormat}`
];

// Initialize fireball effect for a video element
function initFireball(videoElement) {
    if (!videoElement) return;

    // Function to play fireball effect
    function playFireball() {
        // Pick random video
        const randomVideo = fireballVideos[Math.floor(Math.random() * fireballVideos.length)];
        videoElement.src = randomVideo;
        videoElement.currentTime = 0;

        // Random mirror 50% of the time
        if (Math.random() > 0.5) {
            videoElement.style.transform = 'translate(-50%, -50%) scaleX(-1)';
        } else {
            videoElement.style.transform = 'translate(-50%, -50%)';
        }

        videoElement.classList.add('playing');
        videoElement.play().catch(e => console.log('Fireball video:', e.message));
    }

    // Remove playing class when video ends
    videoElement.addEventListener('ended', () => {
        videoElement.classList.remove('playing');
        scheduleNextFireball();
    });

    // Schedule next random playback
    function scheduleNextFireball() {
        // Random delay between 1-3 seconds
        const delay = 1000 + Math.random() * 4000;
        setTimeout(playFireball, delay);
    }

    // Start the cycle after initial delay
    scheduleNextFireball();
}

// Initialize video elements based on mode
const fireballVideo1 = document.getElementById('fireball-video-1');
const fireballVideo2 = document.getElementById('fireball-video-2');

initFireball(fireballVideo1);

// Only initialize second video if dual mode is enabled
if (DUAL_FIREBALL_MODE) {
    initFireball(fireballVideo2);
}
