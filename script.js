const homeBtn = document.getElementById('homeBtn');
const crumb = document.getElementById('crumb');
const homeView = document.getElementById('homeView');
const gridView = document.getElementById('gridView');
const cardsEl = document.getElementById('cards');
const backBtn = document.getElementById('backBtn');
const gridTitle = document.getElementById('gridTitle');
const gridCount = document.getElementById('gridCount');
const thumbGrid = document.getElementById('thumbGrid');

const lightbox = document.getElementById('lightbox');
const lightboxBlur = document.getElementById('lightboxBlur');
const lbFrame = document.getElementById('lbFrame');
const lbImage = document.getElementById('lbImage');
const lbCaption = document.getElementById('lbCaption');
const lbDownload = document.getElementById('lbDownload');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

let categories = [];
let activeCategory = null; // index into categories
let activeImages = [];     // resolved {file, name, url} for current category
let lbIndex = 0;

function resolveImages(cat){
  return cat.images.map(entry => ({
    file: entry.file,
    name: entry.name || entry.file,
    url: new URL(`./${cat.folder}/${entry.file}`, window.location.href).toString()
  }));
}

/* ---------------- Home ---------------- */
function renderCards(){
  cardsEl.innerHTML = categories.map((cat, i) => {
    const imgs = resolveImages(cat);
    const collage = imgs.slice(0, 4).map(img => `<img src="${img.url}" alt="" loading="lazy" draggable="false" />`).join('');
    return `
      <button class="card" data-cat="${i}" type="button">
        <div class="card-collage">${collage}</div>
        <div class="card-scrim"></div>
        <div class="card-arrow">
          <svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="card-body">
          <p class="card-label">${cat.label}</p>
          <p class="card-meta">${imgs.length} wallpaper${imgs.length === 1 ? '' : 's'}</p>
        </div>
      </button>
    `;
  }).join('');

  cardsEl.querySelectorAll('.card').forEach(el => {
    el.addEventListener('click', () => openCategory(Number(el.dataset.cat)));
  });
}

function showHome(){
  activeCategory = null;
  homeView.hidden = false;
  gridView.hidden = true;
  crumb.textContent = '';
}

/* ---------------- Grid ---------------- */
function openCategory(i){
  activeCategory = i;
  const cat = categories[i];
  activeImages = resolveImages(cat);

  gridTitle.textContent = cat.label;
  gridCount.textContent = `${activeImages.length} wallpaper${activeImages.length === 1 ? '' : 's'}`;
  crumb.textContent = cat.label;

  const isTall = cat.id !== 'pc';
  thumbGrid.className = 'thumb-grid ' + (isTall ? 'cols-tall' : 'cols-wide');

  thumbGrid.innerHTML = activeImages.map((img, idx) => `
    <button class="thumb-card ${isTall ? 'ar-tall' : 'ar-wide'}" data-idx="${idx}" type="button">
      <img src="${img.url}" alt="${img.name}" loading="lazy" draggable="false" />
      <span class="thumb-card-name">${img.name}</span>
    </button>
  `).join('');

  thumbGrid.querySelectorAll('.thumb-card').forEach(el => {
    el.addEventListener('click', () => openLightbox(Number(el.dataset.idx)));
  });

  homeView.hidden = true;
  gridView.hidden = false;
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* ---------------- Lightbox ---------------- */
function openLightbox(idx){
  lbIndex = idx;
  updateLightboxImage();
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox(){
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

function updateLightboxImage(){
  const img = activeImages[lbIndex];
  if (!img) return;
  lbImage.src = img.url;
  lbImage.alt = img.name;
  lbCaption.textContent = img.name;
  lbDownload.href = img.url;
  lbDownload.setAttribute('download', img.file);
}

function lbGo(delta){
  if (!activeImages.length) return;
  lbIndex = (lbIndex + delta + activeImages.length) % activeImages.length;
  updateLightboxImage();
}

lbPrev.addEventListener('click', (e) => { e.stopPropagation(); lbGo(-1); });
lbNext.addEventListener('click', (e) => { e.stopPropagation(); lbGo(1); });

// Click the blurred backdrop (anywhere outside the frame) to close
lightboxBlur.addEventListener('click', closeLightbox);

// Prevent clicks on the image frame itself from bubbling to the backdrop
lbFrame.addEventListener('click', (e) => e.stopPropagation());

document.addEventListener('keydown', (e) => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbGo(-1);
  if (e.key === 'ArrowRight') lbGo(1);
});

// Swipe support inside the lightbox (mobile)
let touchStartX = null, touchStartY = null;
lbFrame.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  touchStartX = t.clientX;
  touchStartY = t.clientY;
}, { passive: true });
lbFrame.addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const t = e.changedTouches[0];
  const dx = t.clientX - touchStartX;
  const dy = t.clientY - touchStartY;
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
    lbGo(dx < 0 ? 1 : -1);
  }
  touchStartX = null; touchStartY = null;
});

/* ---------------- Nav ---------------- */
homeBtn.addEventListener('click', showHome);
backBtn.addEventListener('click', showHome);

/* ---------------- Init ---------------- */
function loadManifest(){
  if (typeof WALLPAPER_MANIFEST === 'undefined') {
    console.error('WALLPAPER_MANIFEST not found — make sure assets/manifest.js is loaded before script.js');
    categories = [];
    return;
  }
  categories = WALLPAPER_MANIFEST.categories || [];
}

function init(){
  loadManifest();
  renderCards();
  showHome();
}

init();
