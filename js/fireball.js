// ============================================
// FIREBALL MODULE - Random Fire Effect
// ============================================

const fireballVideo = document.getElementById('fireball-video');

if (fireballVideo) {
    // Available fireball videos
    const fireballVideos = [
        'videos/fireball_1.webm',
        'videos/fireball_2.webm',
        'videos/fireball_3.webm'
    ];

    // Function to play fireball effect
    function playFireball() {
        // Pick random video
        const randomVideo = fireballVideos[Math.floor(Math.random() * fireballVideos.length)];
        fireballVideo.src = randomVideo;

        fireballVideo.currentTime = 0;

        // Random mirror 50% of the time
        if (Math.random() > 0.5) {
            fireballVideo.style.transform = 'translate(-50%, -50%) scaleX(-1)';
        } else {
            fireballVideo.style.transform = 'translate(-50%, -50%)';
        }

        fireballVideo.classList.add('playing');
        fireballVideo.play().catch(e => console.log('Fireball video:', e.message));
    }

    // Remove playing class when video ends
    fireballVideo.addEventListener('ended', () => {
        fireballVideo.classList.remove('playing');
        scheduleNextFireball();
    });

    // Schedule next random playback
    function scheduleNextFireball() {
        // Random delay between 2-6 seconds (2000-6000ms)
        const delay = 1000 + Math.random() * 2000;
        setTimeout(playFireball, delay);
    }

    // Start the cycle after initial delay
    scheduleNextFireball();
}
