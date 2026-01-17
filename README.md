# SEXPUNKTNULL Website - v006

Offizielle Website der Punk/Rock/Metal Band SEXPUNKTNULL.

## 📦 Version: v006
**Datum:** 2025-01-14  
**Status:** ✅ Produktionsbereit  
**Änderungen:** Auto-Pause für Audio Player + Aktualisierte Inhalte

## ✨ Features

### Design
- **Neon Cyberpunk Aesthetic** - Pink (#ff0080), Grün (#00ff88), Cyan (#00d4ff)
- **100 Turbulente Partikel** - Noise-basierte organische Animation
- **Logo-Glow Effekt** - Beim Hover über ABDREHEN-Button
- **Scanline & Gradient Background** - Animierte Retro-CRT-Effekte
- **Responsive Design** - Optimiert für Mobile & Desktop
- **Vergangene Shows Galerie** - Mit Bild-Thumbnails und Hover-Effekten
- **Custom Audio Player** - HTML5 Audio für direkte MP3-Wiedergabe
- **Auto-Pause Funktion** - Nur ein Song läuft gleichzeitig (NEU in v006)

### Interaktivität
- **Sound-Effekte** - Hover & Click auf allen interaktiven Elementen
- **Smooth Scrolling** - Zu allen Sektionen
- **Logo-Pulsing** - Zufällige organische Puls-Animation
- **Parallax-Effekt** - Hero-Logo bewegt sich beim Scrollen
- **YouTube-Integration** - 3 eingebettete Videos

### Modulare Struktur

```
v006/
├── index.html          (~295 Zeilen - mit deinen Updates)
├── css/
│   ├── base.css        (73 Zeilen)   - Variables, Reset, Background
│   ├── header.css      (84 Zeilen)   - Navigation & Logo
│   ├── hero.css        (145 Zeilen)  - Hero, Logo, Button, Particles
│   ├── sections.css    (~440 Zeilen) - About, Shows, Past Shows, Music
│   ├── videos.css      (76 Zeilen)   - YouTube Section
│   └── layout.css      (141 Zeilen)  - Contact, Footer, Responsive
├── js/
│   ├── audio.js        (26 Zeilen)   - Sound System (Hover/Click)
│   ├── navigation.js   (56 Zeilen)   - Scrolling & Navigation
│   ├── animations.js   (41 Zeilen)   - Logo-Pulsing, Parallax
│   ├── particles.js    (120 Zeilen)  - Partikel-Generierung & Animation
│   └── music-player.js (19 Zeilen)   - Auto-Pause (NEU in v006)
├── images/
│   ├── sexpunktnull_logo_shirt_60x30cm_neon.png
│   └── shows/          - Show-Fotos
├── sounds/
│   ├── hover.wav
│   ├── click.wav
│   └── music/          - MP3-Dateien (track_der_sinn.mp3, etc.)
└── README.md
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

### Vergangene Shows hinzufügen (NEU in v003)
In `index.html` (Zeile ~210-280):
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

### Musik-Dateien hinzufügen (NEU in v005)
1. **MP3-Dateien vorbereiten:**
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

### Auto-Pause Funktion (NEU in v006)
**Was ist das?**
Wenn ein Song abgespielt wird, pausieren automatisch alle anderen Songs. So läuft immer nur ein Player gleichzeitig – bessere User Experience!

**Wie funktioniert's?**
Das neue Modul `js/music-player.js` überwacht alle Audio-Elemente und pausiert automatisch die anderen, wenn ein neuer Song startet.

**Keine zusätzliche Konfiguration nötig!** Funktioniert automatisch mit allen `<audio>`-Tags auf der Seite.

### Partikel-Anzahl ändern
In `js/particles.js` (Zeile 6):
```javascript
const PARTICLE_COUNT = 100; // Hier Anzahl ändern!
```
Einfach die Zahl ändern und Seite neu laden.

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

## 📱 Browser-Kompatibilität

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 📄 Lizenz

© 2025 SEXPUNKTNULL · Alle Rechte vorbehalten

---

**Version:** v006  
**Erstellt:** 2025-01-14  
**Basiert auf:** v005  
**Änderungen:** Auto-Pause für Audio Player + Content-Updates  
**Nächste Version:** v007 (bei Änderungen)
