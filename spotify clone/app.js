/* ═══════════════════════════════════════
   SPOTIFY CLONE — app.js
   ═══════════════════════════════════════ */

// ── Fake track data ──────────────────────────────
const tracks = [
  { title: "Top 50 – Global",     artist: "Spotify Charts",   duration: 213, gradient: "linear-gradient(135deg,#c62828,#ff6f00)" },
  { title: "Top Songs – India",   artist: "Spotify Charts",   duration: 198, gradient: "linear-gradient(135deg,#1565c0,#00bcd4)" },
  { title: "Chill Vibes",         artist: "Various Artists",  duration: 241, gradient: "linear-gradient(135deg,#2e7d32,#a5d6a7)" },
  { title: "Viral 50",            artist: "Spotify Charts",   duration: 187, gradient: "linear-gradient(135deg,#6a1b9a,#e91e63)" },
  { title: "Morning Energy",      artist: "Various Artists",  duration: 225, gradient: "linear-gradient(135deg,#e65100,#ffd54f)" },
  { title: "Bollywood Bangers",   artist: "Various Artists",  duration: 208, gradient: "linear-gradient(135deg,#4a0080,#1DB954)" },
  { title: "Romantic Hits",       artist: "Various Artists",  duration: 232, gradient: "linear-gradient(135deg,#880e4f,#f06292)" },
  { title: "EDM Rave",            artist: "Various Artists",  duration: 195, gradient: "linear-gradient(135deg,#01579b,#00e5ff)" },
  { title: "Featured Charts",     artist: "Spotify",          duration: 220, gradient: "linear-gradient(135deg,#c62828,#ff6f00)" },
];

let currentTrack = null;
let isPlaying = false;
let elapsed = 0;
let timer = null;
let currentIndex = -1;

// ── DOM refs ─────────────────────────────────────
const playPauseBtn = document.getElementById('playPauseBtn');
const progressSlider = document.getElementById('progressSlider');
const progressFill = document.getElementById('progressFill');
const currTimeEl = document.getElementById('currTime');
const totalTimeEl = document.getElementById('totalTime');
const npTitle = document.getElementById('npTitle');
const npArtist = document.getElementById('npArtist');
const npArt = document.getElementById('npArt');

// ── Helpers ──────────────────────────────────────
function fmt(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2,'0')}`;
}

function loadTrack(track, index) {
  currentTrack = track;
  currentIndex = index;
  elapsed = 0;
  updateUI();
  play();
}

function updateUI() {
  if (!currentTrack) return;
  npTitle.textContent = currentTrack.title;
  npArtist.textContent = currentTrack.artist;
  npArt.style.background = currentTrack.gradient;
  npArt.innerHTML = '<i class="fa-solid fa-music"></i>';
  totalTimeEl.textContent = fmt(currentTrack.duration);
  currTimeEl.textContent = fmt(elapsed);
  const pct = (elapsed / currentTrack.duration) * 100;
  progressFill.style.width = pct + '%';
  progressSlider.value = pct;
}

function play() {
  isPlaying = true;
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  clearInterval(timer);
  timer = setInterval(() => {
    if (elapsed >= currentTrack.duration) {
      elapsed = 0;
      isPlaying = false;
      playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      clearInterval(timer);
    } else {
      elapsed++;
    }
    updateUI();
  }, 1000);
}

function pause() {
  isPlaying = false;
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  clearInterval(timer);
}

// ── Player button events ──────────────────────────
playPauseBtn.addEventListener('click', () => {
  if (!currentTrack) {
    loadTrack(tracks[0], 0);
    return;
  }
  isPlaying ? pause() : play();
});

progressSlider.addEventListener('input', (e) => {
  if (!currentTrack) return;
  elapsed = Math.floor((e.target.value / 100) * currentTrack.duration);
  updateUI();
});

// Volume
const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', (e) => {
  // In a real app, this would control audio volume
  const v = e.target.value;
  const icon = volumeSlider.previousElementSibling.querySelector('i');
  if (icon) {
    if (v == 0) icon.className = 'fa-solid fa-volume-xmark';
    else if (v < 50) icon.className = 'fa-solid fa-volume-low';
    else icon.className = 'fa-solid fa-volume-high';
  }
});

// ── Card click events ─────────────────────────────
document.querySelectorAll('.card').forEach((card, i) => {
  const playBtn = card.querySelector('.card-play');
  const track = tracks[i % tracks.length];

  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    // Reset all active states
    document.querySelectorAll('.card').forEach(c => c.dataset.playing = 'false');
    card.dataset.playing = 'true';
    loadTrack(track, i);
  });

  card.addEventListener('dblclick', () => {
    document.querySelectorAll('.card').forEach(c => c.dataset.playing = 'false');
    card.dataset.playing = 'true';
    loadTrack(track, i);
  });
});

// Quick picks
document.querySelectorAll('.quick-card').forEach((qc, i) => {
  const playBtn = qc.querySelector('.play-fab');
  const track = tracks[i % tracks.length];

  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    loadTrack(track, i);
  });

  qc.addEventListener('dblclick', () => loadTrack(track, i));
});

// Like button
document.querySelector('.heart-btn').addEventListener('click', function() {
  this.classList.toggle('liked');
  const icon = this.querySelector('i');
  if (this.classList.contains('liked')) {
    icon.className = 'fa-solid fa-heart';
    icon.style.color = '#1DB954';
  } else {
    icon.className = 'fa-regular fa-heart';
    icon.style.color = '';
  }
});
