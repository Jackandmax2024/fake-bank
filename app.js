const rippleCards = document.querySelectorAll('[data-ripple]');

rippleCards.forEach((card) => {
  card.addEventListener('pointerdown', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty('--rx', `${x - rect.width / 2}px`);
    card.style.setProperty('--ry', `${y - rect.height / 2}px`);
    card.classList.remove('rippling');
    void card.offsetWidth;
    card.classList.add('rippling');
  });
});

const lanternField = document.getElementById('lanternField');
for (let i = 0; i < 16; i += 1) {
  const lantern = document.createElement('span');
  lantern.className = 'lantern';
  lantern.style.left = `${Math.random() * 95}%`;
  lantern.style.top = `${Math.random() * 85}%`;
  lantern.style.animationDelay = `${Math.random() * 4}s`;
  lantern.style.animationDuration = `${4 + Math.random() * 5}s`;
  if (Math.random() > 0.72) {
    lantern.style.background = '#9a65ff';
    lantern.style.boxShadow = '0 0 8px #9a65ff, 0 0 16px rgb(154 101 255 / 80%)';
  }
  lanternField.appendChild(lantern);
}

const trackInput = document.getElementById('trackInput');
const forgeStatus = document.getElementById('forgeStatus');
trackInput.addEventListener('change', () => {
  const track = trackInput.files?.[0];
  forgeStatus.textContent = track
    ? `${track.name} fragmented into glowing shards and shared across the mesh.`
    : 'No track in the forge yet.';
});

const syncButton = document.getElementById('syncButton');
const syncStatus = document.getElementById('syncStatus');
syncButton.addEventListener('click', () => {
  syncStatus.textContent = 'Choir sync complete: crystals exchanged and heartbeat aligned.';
  syncButton.disabled = true;
  setTimeout(() => {
    syncButton.disabled = false;
    syncStatus.textContent = 'Mesh resting in local crystal mode.';
  }, 2400);
});
