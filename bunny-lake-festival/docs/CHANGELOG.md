# Bunny Lake Festival - Changelog

## [1.0.0] - 2026-01-25

### Added
- Initial festival website creation
- Hero section with festival branding and Punk font for title
- INFO section with festival details and event information
- TIME TABLE section with 7 bands/artists lineup (16:00-22:00)
  - Cosima (Acoustic)
  - Glassage (Alternative Rock)
  - SexPunktNull (Punk Rock Metal)
  - 24/7 Breakdown (Punk Rock)
  - Tilda und Randale (Punk Rock)
  - Vaspiary (Metal)
  - Sinners & Kings (Metal)
- MUSIC section with 14 audio players (2 tracks per band)
- LOCATION section with:
  - Detailed directions and parking information
  - Wegweiser (signage) image
  - Embedded Google Maps
- Glassmorphism design matching main SPN site aesthetic
- Responsive layout for desktop, tablet, and mobile
- Smooth scroll navigation
- Auto-pause functionality for audio players
- Custom Punk font (@font-face) for festival subtitle
- Complete independence from main site (all assets self-contained)
- Interactive sound effects for navigation (hover, click, impact sounds)

### Design
- Neon gradient color scheme (pink/purple/cyan)
- Glass card effects with backdrop blur
- Hover animations and transitions
- Floating logo animation
- Custom styled audio players

### Technical
- Standalone CSS: base.css, header.css, hero.css, sections.css, festival.css
- Standalone JS: navigation.js, music-player.js, audio.js
- Self-contained assets folder with logos, fonts, audio files, and images
- No external dependencies except Google Fonts (Bebas Neue, Oswald)

### Files Structure
```
bunny-lake-festival/
├── index.html
├── css/
│   ├── base.css
│   ├── header.css
│   ├── hero.css
│   ├── sections.css
│   └── festival.css
├── js/
│   ├── navigation.js
│   ├── music-player.js
│   └── audio.js
├── sounds/
│   ├── click.mp3
│   ├── hover.mp3
│   └── impact.mp3
├── assets/
│   ├── fonts/
│   │   ├── 1_Punk.ttf
│   │   └── Punktype.ttf
│   ├── audio/
│   │   └── [14 placeholder MP3 files]
│   ├── bunny-logo-header.png (placeholder)
│   ├── bunny-logo-hero.png (placeholder)
│   └── bunny_lake_wegweiser_rechts.png
└── docs/
    └── CHANGELOG.md
```

### Future Enhancements
- Replace placeholder logos with actual Bunny Lake branding
- Upload real audio tracks from all 7 bands
- Add individual band bio pages
- Photo gallery section
- Ticket purchase integration (if needed)
- Sponsor logos section
- Social media feed integration
