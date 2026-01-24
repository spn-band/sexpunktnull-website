# Changelog

## 2026-01-24 - Fireball Effect
### Added
- Alpha channel video effect (fireball_1/2/3.webm/.mp4) overlaying hero logo
- **Desktop only** - disabled on mobile (browsers don't support alpha video reliably)
- **Two simultaneous videos** - can overlap for more dynamic effect
- **Easy mode switch**: `DUAL_FIREBALL_MODE` constant (true/false) to toggle between 1 or 2 videos
- Auto-detects mobile and uses MP4 (HEVC with alpha), desktop uses WebM
- Randomly selects 1 of 3 fireball videos per playback
- Randomly mirrors video 50% of the time
- Each video plays independently every 1-5 seconds
- Composite mask: linear gradients (top/bottom/left/right) + radial vignette (soft edges)
- videos/ folder for video assets (WebM for desktop, MP4 for mobile)
- js/fireball.js for random selection & playback logic (refactored for 2 videos)
- CSS positioning in hero.css (z-index: 3, above logo & particles)
### Fixed
- Top edge harsh cutoff - added linear gradient mask for smooth fadeout on all edges
- **Mobile alpha issue**: Disabled fireball on mobile devices (@media hover:none) - mobile browsers don't support alpha channel video in `<video>` element
- Cache: hero.css v34

## [v009] - 2026-01-23 - Summary

**Major updates**: Performance optimizations, neon cyberpunk design, mobile fixes, scanline effect

**Key improvements**:
- ~70% CPU reduction (particles: 100→40, 60fps→30fps, GPU acceleration)
- Super dark background with neon accents
- Fixed logo scroll jitter on mobile
- Optional CRT scanline effect (css/scanline.css)
- Impact sound for ABDREHEN button
- Compact tile layouts for mobile
- README.md: Removed version tracking (now version-agnostic, history in CHANGELOG only)

---

## 2026-01-23 - Particle Performance
### Optimized
- Reduced particles: 100 → 40
- Throttled to 30fps (was 60fps)
- GPU acceleration: transform translate instead of left/top
- Removed dynamic boxShadow (now static CSS)
- Removed scale flickering
- Added will-change hint
- ~70% CPU reduction
### Fixed
- Particles now visible on mobile (set initial positions immediately)

## 2026-01-23 - Scanline Effect
### Added
- CRT-style scanline effect in separate css/scanline.css (easy to disable by commenting out)
- Cache: v29

## 2026-01-23 - Fix Black Area Animation
### Fixed
- Disabled meshFloat animation causing black vertical area on right side
- Cache: v27

## 2026-01-23 - ABDREHEN Impact Sound
### Changed
- ABDREHEN button now uses impact.mp3 instead of click.mp3

## 2026-01-23 - Logo Scroll Fix (Final)
### Fixed
- **animations.js**: Disabled parallax effect (translateY) causing logo to lag behind page scroll
- **animations.js**: Disabled random pulse effect (transform scale) causing jitter
- Logo now moves 1:1 with page content

## 2026-01-23 - Color & Layout Tweaks
### Changed
- Background: Super dark/almost black (#000000)
- Subtitle & titles: Restored pink→green→blue gradient (#ff0080 → #00ff88 → #00d4ff)
- Section titles: Centered, smaller size (clamp 2rem-3.5rem), animated colored underline
- Tile titles: Added gradient to past shows, music albums, and video titles
- Cache: v14 for sections.css & videos.css

## [2025-01-22] - Glassmorphism Redesign

### Changed - FULL DESIGN OVERHAUL
- **Design system**: Cyberpunk neon → Glassmorphism (frosted glass, translucent, futuristic)
- **Color palette**: Deep purples (#0f0c29 → #302b63) with accent pink/purple/blue gradients
- **Background**: Fixed gradient with animated mesh overlay
- **All cards**: Glass effect (backdrop-filter: blur, translucent borders, soft shadows)
- **Navigation**: Frosted glass header with subtle gradient underlines
- **CTA button**: Pill-shaped glass button with gradient hover fill
- **Ticket buttons**: Gradient pill buttons with purple glow
- **Social links**: Glass squares with colored accents
- **Footer**: Frosted glass with subtle border
- **Videos**: Glass card containers with rounded iframe corners
- **Sections**: Consistent glass panels for all content
- **Hover effects**: Subtle translateY lifts with purple glow shadows
- **Scrollbar**: Custom glass-themed scrollbar

### Technical
- CSS variables for glass properties (--glass-white, --glass-border, etc.)
- Legacy color variable compatibility maintained
- `-webkit-backdrop-filter` for Safari support
- Mesh gradient animation disabled on touch devices
- All cache versions bumped to v=10

---

## [2025-01-22] - UI/Mobile Fixes

### Fixed
- **iOS rendering artifacts**: Disabled scanline animation and reduced gradient effects on touch devices to eliminate flickering/banding
- **Hero logo glow**: Simplified drop-shadows and disabled heavy blur effect on mobile for better performance
- **ABDREHEN button mobile issue**: Fixed gradient slider effect leaking outside button on iOS/iPad
- **Button rounded corners**: Added `border-radius: 5px` to match ticket buttons
- **Hero/header overlap**: Fixed logo being covered by navigation on smaller screens using flexbox auto margins
- **Responsive navigation**: Made header compact on mobile with horizontal wrapped nav links

### Changed
- `base.css`: Added `@media (hover: none)` to disable heavy effects on touch devices
- `hero.css`: Simplified effects for touch devices, fixed button overflow, added responsive styles
- `header.css`: Added responsive styles for compact mobile header
- `layout.css`: Cleaned up conflicting responsive styles
- `particles.js`: Temporarily disabled (commented out)

### Technical
- Using `transform: translateX()` instead of `left` for button hover effect (better cross-device support)
- Cache busting via `?v=X` query params on CSS files
