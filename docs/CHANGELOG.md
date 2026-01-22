# Changelog

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
