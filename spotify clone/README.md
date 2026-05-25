# 🎵 Spotify Web Player Clone

A pixel-close clone of the **Spotify Web Player** home page, built with pure **HTML, CSS, and Vanilla JavaScript** — no frameworks, no dependencies.

![Spotify Clone Preview](https://img.shields.io/badge/Project-Spotify%20Clone-1DB954?style=for-the-badge&logo=spotify&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- 🎨 **Dark theme UI** faithful to Spotify's design system
- 🏠 **Home page layout** with sidebar, main content, and sticky music player
- ⚡ **Quick Picks grid** — the "Good evening" section with hover play buttons
- 🃏 **Card shelves** — Recently Played, Trending Near You, and Featured Charts
- ▶️ **Interactive music player** — play/pause, progress bar scrubbing, live timer
- 🔊 **Volume slider** with dynamic icon (mute / low / high)
- ❤️ **Like button** toggle with green highlight
- 📱 **Responsive design** — adapts from desktop down to mobile
- 🎯 **Card interactions** — hover reveals green play button; double-click loads track

---

## 🗂️ Project Structure

```
spotify-clone/
├── index.html    # App structure and markup
├── style.css     # All styling with CSS variables for easy theming
├── app.js        # Player logic, interactions, and fake track data
└── README.md     # You're reading it
```

---

## 🚀 Getting Started

No build step needed. Just clone and open.

```bash
git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone
```

Then open `index.html` in your browser — or use a live server:

```bash
# With VS Code Live Server extension, or:
npx serve .
```

---

## 🎮 How to Use

| Action | Result |
|---|---|
| Click **▶ play button** on any card | Loads that track into the player |
| **Double-click** a card | Also loads the track |
| Drag the **progress bar** | Scrubs to that position |
| Click **♥** (heart icon) | Toggles liked state |
| Drag **volume slider** | Adjusts volume icon |
| Click **⏯ play/pause** | Plays or pauses the current track |

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — Flexbox, Grid, CSS variables, transitions, media queries
- **Vanilla JS** — DOM manipulation, setInterval timer, event listeners
- **Font Awesome 6** — icons
- **Google Fonts** — DM Sans typeface

---

## 📌 Note

This is a **frontend-only UI clone** built for learning purposes. It uses no real Spotify API and plays no actual audio. All track data is mocked locally in `app.js`.

---

## 🙌 Acknowledgements

Inspired by the [Spotify Web Player](https://open.spotify.com) UI. Made as a learning project to practice HTML/CSS/JS fundamentals.

---

> Made with 💚 and a lot of music
