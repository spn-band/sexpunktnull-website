# SEXPUNKTNULL Website

Offizielle Website der Punk/Rock/Metal Band SexPunktNull.

**Status:** ✅ Produktionsbereit

## ✨ Features

### Design
- **Dark Cyberpunk Aesthetic** - Super-dunkler Hintergrund (#000), Neon-Akzente
- **Neon Color Gradients** - Pink (#ff0080) → Grün (#00ff88) → Cyan (#00d4ff)
- **40 Optimierte Partikel** - GPU-beschleunigt, 30fps, ~70% weniger CPU-Last
- **CRT Scanline Effekt** - Optional aktivierbar (css/scanline.css)
- **Neon Show Tiles** - Glühende Ränder mit Sweep-Animationen
- **Compact Layout** - Reduzierte Abstände für bessere Mobile-Ansicht
- **Responsive Design** - Optimiert für Mobile & Desktop
- **Vergangene Shows Galerie** - Mit Bild-Thumbnails und Neon-Hover-Effekten
- **SoundCloud Embed Player** - Große Player mit Cover-Artwork
- **Platform Buttons** - Links zu SoundCloud & Bandcamp
- **Auto-Pause Funktion** - Nur ein Song läuft gleichzeitig

### Interaktivität
- **Sound-Effekte** - Hover (hover.mp3) & Click sounds
- **Impact Sound** - ABDREHEN Button mit impact.mp3
- **Smooth Scrolling** - Zu allen Sektionen
- **Logo-Pulsing** - Zufällige organische Puls-Animation (optional)
- **Scroll-Optimierung** - Kein Parallax/Jitter auf mobilen Geräten
- **YouTube-Integration** - Eingebettete Videos

### Modulare Struktur

```
├── index.html          - Main HTML mit SoundCloud Playern
├── css/
│   ├── base.css        - Variables, Reset, Dark Background
│   ├── header.css      - Navigation & Logo
│   ├── hero.css        - Hero, Logo, Button, Particles
│   ├── sections.css    - About, Shows (Neon), Music, Platform Buttons
│   ├── videos.css      - YouTube Section
│   ├── layout.css      - Contact, Footer, Responsive
│   └── scanline.css    - CRT Scanline Effekt (optional)
├── js/
│   ├── audio.js        - Sound System (hover.mp3, click.mp3, impact.mp3)
│   ├── navigation.js   - Scrolling & Navigation
│   ├── animations.js   - Logo Effects (parallax disabled)
│   ├── particles.js    - Optimierte Partikel (40 Stück, 30fps, GPU)
│   └── music-player.js - Auto-Pause
├── images/
│   ├── sexpunktnull_logo_shirt_60x30cm_neon.png
│   └── shows/          - Show-Fotos
├── sounds/
│   ├── hover.mp3
│   ├── click.mp3
│   ├── impact.mp3      - ABDREHEN Button Sound
│   └── music/          - (optional für lokale MP3s)
├── README.md
├── sitemap.xml
├── robots.txt
└── CNAME
```

## 🚀 Installation

1. **ZIP entpacken**
2. **Logo hinzufügen**: `images/sexpunktnull_logo_shirt_60x30cm_neon.png`
3. **Sounds hinzufügen**: 
   - `sounds/hover.wav`
   - `sounds/click.wav`
4. **Lokalen Server starten**:
   ```bash
   python -m http.server 8000
   # oder
   php -S localhost:8000
   ```
5. **Browser öffnen**: `http://localhost:8000`

> ⚠️ **Wichtig**: YouTube-Videos benötigen einen lokalen Server (kein `file://`-Protokoll)

## 🎨 Anpassungen

### Farben ändern
In `css/base.css`:
```css
:root {
    --neon-pink: #ff0080;    /* Hauptfarbe */
    --neon-green: #00ff88;   /* Akzentfarbe 1 */
    --neon-cyan: #00d4ff;    /* Akzentfarbe 2 */
    --bg-dark: #0a0a0a;      /* Hintergrund */
}
```

### YouTube-Videos ändern
In `index.html` (Zeile ~220-250):
```html
<iframe src="https://www.youtube.com/embed/DEINE_VIDEO_ID"></iframe>
```

### Shows aktualisieren
In `index.html` (Zeile ~140-180):
```html
<div class="show-item">
    <div class="show-date">
        <span class="day">15</span>
        FEB
    </div>
    <div class="show-details">
        <h3>VENUE NAME</h3>
        <p>Adresse · Doors: 20:00 Uhr</p>
    </div>
    <button class="show-ticket">TICKETS</button>
</div>
```

### Vergangene Shows hinzufügenIn `index.html` (Zeile ~210-280):
```html
<div class="past-show-item">
    <div class="past-show-image">
        <img src="images/shows/dein-foto.jpg" alt="Show Beschreibung">
        <div class="past-show-overlay">
            <span class="past-show-label">15 DEZ 2024</span>
        </div>
    </div>
    <div class="past-show-info">
        <h3>EVENT NAME</h3>
        <p>Location · Details</p>
    </div>
</div>
```
**Bilder:** Lege Fotos in `images/shows/` ab (empfohlen: 800x500px, JPG)

### SoundCloud Player anpassenIn `index.html` findest du für jeden Song einen SoundCloud Embed:

```html
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/DEINE_TRACK_ID&color=%2360c08c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
</iframe>
```

**So holst du deine SoundCloud Embed URL:**
1. Gehe zu deinem Track auf SoundCloud
2. Klicke auf "Share" → "Embed"
3. Kopiere die iframe URL
4. Ersetze die URL im `src="..."` Attribut

**Platform Buttons anpassen:**
```html
<div class="platform-buttons">
    <a href="https://soundcloud.com/sexpunktnull/dein-song" target="_blank" class="platform-btn soundcloud">
        🎵 SOUNDCLOUD
    </a>
    <a href="https://sexpunktnull.bandcamp.com/track/dein-song" target="_blank" class="platform-btn bandcamp">
        💿 BANDCAMP
    </a>
</div>
```

### Musik-Dateien hinzufügen1. **MP3-Dateien vorbereiten:**
   - Preview-Clips erstellen (30-60 Sekunden empfohlen)
   - Format: MP3, 320 kbps
   - Dateinamen: `nullpunkt-preview.mp3`, etc.

2. **In `sounds/music/` ablegen:**
   ```
   sounds/music/
   ├── nullpunkt-preview.mp3
   ├── rebellion-preview.mp3
   └── kein-zurueck-preview.mp3
   ```

3. **Im HTML verlinken** (Zeile ~205):
   ```html
   <audio controls>
       <source src="sounds/music/dein-song.mp3" type="audio/mpeg">
   </audio>
   ```

**⚠️ Wichtig:** 
- Du hostest die Dateien selbst (Bandbreite beachten)
- Copyright beachten (nur eigene Musik!)
- Dateigrößen klein halten (max. 5-10 MB pro File)

### Auto-Pause Funktion**Was ist das?**
Wenn ein Song abgespielt wird, pausieren automatisch alle anderen Songs. So läuft immer nur ein Player gleichzeitig – bessere User Experience!

**Wie funktioniert's?**
Das neue Modul `js/music-player.js` überwacht alle Audio-Elemente und pausiert automatisch die anderen, wenn ein neuer Song startet.

**Keine zusätzliche Konfiguration nötig!** Funktioniert automatisch mit allen `<audio>`-Tags auf der Seite.

### Partikel-Anzahl ändern
In `js/particles.js` (Zeile 9-10):
```javascript
const PARTICLE_COUNT = 40; // Hier Anzahl ändern! (Standard: 40 für Performance)
```
**Performance-Tipp:** 40 Partikel = optimale Balance zwischen Effekt und CPU-Last.

### Scanline-Effekt aktivieren/deaktivieren
In `index.html` die Zeile auskommentieren/aktivieren:
```html
<!-- <link rel="stylesheet" href="css/scanline.css?v=1"> -->
```

### Glow-Intensität ändern
In `css/hero.css` (Zeile 44):
```css
.hero-logo-wrapper.glow-active::before {
    opacity: 1.0; /* 0.0 bis 2.0 */
}
```

## 🛠️ Troubleshooting

### YouTube-Videos werden nicht angezeigt
- **Problem**: Browser blockiert iframe-Inhalte
- **Lösung**: Lokalen Server verwenden (siehe Installation)

### Sounds funktionieren nicht
- **Problem**: Dateien fehlen oder falscher Pfad
- **Lösung**: 
  1. Dateien in `sounds/` ablegen
  2. Browser-Konsole auf Fehler prüfen (F12)

### Logo wird nicht angezeigt
- **Problem**: Datei fehlt
- **Lösung**: Logo als `images/sexpunktnull_logo_shirt_60x30cm_neon.png` speichern

### Partikel bewegen sich nicht
- **Problem**: JavaScript-Fehler
- **Lösung**: Browser-Konsole prüfen (F12 → Console)

### Partikel nicht sichtbar auf Mobile
- **Problem**: Initiale Positionen nicht gesetzt
- **Lösung**: Aktuelles particles.js setzt Positionen sofort

### Logo "schwebt" beim Scrollen
- **Problem**: Parallax-Effekt in animations.js
- **Lösung**: Bereits deaktiviert (Zeile 6-13 auskommentiert)

## 📱 Browser-Kompatibilität

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 📄 Lizenz

© 2025 SEXPUNKTNULL · Alle Rechte vorbehalten
