// ============================================
// MUSIC PLAYER MODULE - Auto-pause other players
// ============================================

// Get all audio players on the page
const audioPlayers = document.querySelectorAll('audio');

if (audioPlayers.length > 0) {
    // Add event listener to each audio player
    audioPlayers.forEach(player => {
        player.addEventListener('play', function() {
            // Pause all other audio players when this one starts playing
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
        });
    });
}
