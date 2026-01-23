// ============================================
// PARTICLES MODULE - Turbulent Neon Particles
// ============================================

// TEMPORARILY DISABLED - Uncomment below to re-enable


// PARTICLE COUNT - Change this number to adjust particle count
// Reduced from 100 to 40 for better performance
const PARTICLE_COUNT = 40;

// Generate particles dynamically
const particlesContainer = document.querySelector('.particles');

if (particlesContainer) {
    // Create particle elements
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);
    }
}

// Get all particles (including dynamically created ones)
const particles = document.querySelectorAll('.particle');

if (particles.length > 0 && particlesContainer) {
    const containerWidth = particlesContainer.offsetWidth;
    const containerHeight = particlesContainer.offsetHeight;

    // Initialize particles with random positions and velocities
    const particleData = Array.from(particles).map((particle, index) => ({
        element: particle,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
        scale: 0.5 + Math.random() * 1.0,
        opacity: 0.3 + Math.random() * 0.4
    }));

    // Simple Perlin-like noise function for smooth random values
    function noise(x) {
        const X = Math.floor(x) & 255;
        x -= Math.floor(x);
        const u = x * x * (3.0 - 2.0 * x);
        const a = Math.sin(X * 12.9898 + 78.233) * 43758.5453;
        const b = Math.sin((X + 1) * 12.9898 + 78.233) * 43758.5453;
        return (a - Math.floor(a)) * (1 - u) + (b - Math.floor(b)) * u;
    }

    let time = 0;
    let lastFrame = 0;
    const targetFPS = 30; // Throttle to 30fps instead of 60fps
    const frameInterval = 1000 / targetFPS;

    // Main animation loop - OPTIMIZED
    function animateParticles(currentTime) {
        const elapsed = currentTime - lastFrame;

        // Throttle to 30fps
        if (elapsed < frameInterval) {
            requestAnimationFrame(animateParticles);
            return;
        }

        lastFrame = currentTime;
        time += 0.01;

        particleData.forEach(p => {
            // Apply noise-based turbulence for organic movement
            const noiseX = noise(p.noiseOffsetX + time) * 2 - 1;
            const noiseY = noise(p.noiseOffsetY + time) * 2 - 1;

            // Turbulent force
            p.vx += noiseX * 0.5;
            p.vy += noiseY * 0.5;

            // Speed limit to prevent particles from going too fast
            const maxSpeed = 3;
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (speed > maxSpeed) {
                p.vx = (p.vx / speed) * maxSpeed;
                p.vy = (p.vy / speed) * maxSpeed;
            }

            // Damping to prevent too much speed buildup
            p.vx *= 0.95;
            p.vy *= 0.95;

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Bounce at edges instead of wrapping around
            if (p.x < 0) {
                p.x = 0;
                p.vx *= -0.8;
            }
            if (p.x > containerWidth) {
                p.x = containerWidth;
                p.vx *= -0.8;
            }
            if (p.y < 0) {
                p.y = 0;
                p.vy *= -0.8;
            }
            if (p.y > containerHeight) {
                p.y = containerHeight;
                p.vy *= -0.8;
            }

            // Random opacity variations (removed scale for performance)
            const opacityNoise = noise(p.noiseOffsetY + time * 2) * 0.4 + 0.4;

            // Use transform translate instead of left/top (GPU accelerated)
            // Removed boxShadow (most expensive operation)
            p.element.style.transform = `translate(${p.x}px, ${p.y}px) scale(${p.scale})`;
            p.element.style.opacity = opacityNoise;
        });

        requestAnimationFrame(animateParticles);
    }

    // Start the animation
    animateParticles();
}

