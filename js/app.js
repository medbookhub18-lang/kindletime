/* ============================================================
   KindleTime — App Logic
   ============================================================ */

const state = {
  activeCategory: 'All',
  searchQuery: '',
  sortBy: 'default',
  currentBookId: null,
  readingFontSize: 18,
  readingTheme: 'light',  // 'light' | 'dark' | 'sepia'
  isDark: false,
};

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  renderFeaturedBooks();
  renderCategoryPills();
  renderBooksGrid();
  renderBookStack();
  bindEvents();
});

/* ============================================================
   THEME
   ============================================================ */
function loadTheme() {
  const saved = localStorage.getItem('kt-theme');
  if (saved === 'dark') applyTheme(true);
}

function applyTheme(dark) {
  state.isDark = dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('kt-theme', dark ? 'dark' : 'light');
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.innerHTML = dark
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

/* ============================================================
   COVER GENERATION
   ============================================================ */
function makeCoverStyle(book) {
  return `background: linear-gradient(145deg, ${book.coverColor[0]}, ${book.coverColor[1]});`;
}

function coverInitials(title) {
  return title.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

/* ============================================================
   HERO BOOK STACK
   ============================================================ */
function renderBookStack() {
  const container = document.getElementById('bookStack');
  if (!container) return;

  const picks = BOOKS.filter(b => b.featured).slice(0, 4);
  const positions = [
    { w: 140, h: 190, top: 20, left: 60, rot: -12, zIndex: 1 },
    { w: 150, h: 200, top: 60, left: 100, rot: 5, zIndex: 2 },
    { w: 130, h: 175, top: 30, left: 30, rot: -4, zIndex: 3 },
    { w: 155, h: 210, top: 80, left: 70, rot: 8, zIndex: 4 },
  ];

  container.innerHTML = picks.map((book, i) => {
    const pos = positions[i] || positions[0];
    return `
      <div class="stack-book" style="
        ${makeCoverStyle(book)}
        width:${pos.w}px; height:${pos.h}px;
        top:${pos.top}px; left:${pos.left}px;
        transform: rotate(${pos.rot}deg);
        z-index: ${pos.zIndex};
      ">
        <div class="spine"></div>
        <span class="stack-book-title">${book.title}</span>
      </div>`;
  }).join('');
}

/* ============================================================
   FEATURED BOOKS
   ============================================================ */
function renderFeaturedBooks() {
  const track = document.getElementById('featuredTrack');
  if (!track) return;
  const featured = BOOKS.filter(b => b.featured);

  track.innerHTML = featured.map(book => `
    <div class="featured-card" onclick="openBookDetail(${book.id})" tabindex="0" role="button" aria-label="View ${book.title}">
      <div class="featured-cover" style="${makeCoverStyle(book)}">
        <div class="featured-cover-spine"></div>
        <span class="featured-cover-title">${book.title}</span>
      </div>
      <div class="featured-meta">
        <div class="featured-title">${book.title}</div>
        <div class="featured-author">${book.author}</div>
        <div class="featured-rating">
          <span class="star">★</span>
          <span>${book.rating}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ============================================================
   CATEGORY PILLS
   ============================================================ */
function renderCategoryPills() {
  const container = document.getElementById('categoryPills');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(cat => `
    <button
      class="pill ${cat === state.activeCategory ? 'active' : ''}"
      onclick="filterCategory('${cat}')"
      aria-pressed="${cat === state.activeCategory}"
    >${cat}</button>
  `).join('');
}

function filterCategory(cat) {
  state.activeCategory = cat;
  state.searchQuery = '';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  hideSearchDropdown();
  clearSearchClearBtn();
  renderCategoryPills();
  renderBooksGrid();
  document.getElementById('booksSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============================================================
   BOOKS GRID
   ============================================================ */
function getFilteredBooks() {
  let books = [...BOOKS];

  if (state.activeCategory !== 'All') {
    books = books.filter(b => b.category === state.activeCategory);
  }

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.toLowerCase();
    books = books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    );
  }

  switch (state.sortBy) {
    case 'title':
      books.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'author':
      books.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case 'rating':
      books.sort((a, b) => b.rating - a.rating);
      break;
    case 'year':
      books.sort((a, b) => b.year - a.year);
      break;
  }

  return books;
}

function renderBooksGrid() {
  const grid = document.getElementById('booksGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultsCount');
  const title = document.getElementById('gridTitle');
  if (!grid) return;

  const books = getFilteredBooks();

  if (title) {
    title.textContent = state.activeCategory !== 'All'
      ? `${state.activeCategory} Books`
      : state.searchQuery ? 'Search Results' : 'All Books';
  }

  if (count) {
    count.textContent = `${books.length} book${books.length !== 1 ? 's' : ''}`;
  }

  if (books.length === 0) {
    grid.innerHTML = '';
    grid.style.display = 'none';
    empty.classList.add('visible');
    return;
  }

  grid.style.display = 'grid';
  empty.classList.remove('visible');

  grid.innerHTML = books.map((book, i) => `
    <div
      class="book-card"
      onclick="openBookDetail(${book.id})"
      tabindex="0"
      role="button"
      aria-label="View details for ${book.title}"
      style="animation-delay: ${i * 0.04}s"
    >
      <div class="card-cover" style="${makeCoverStyle(book)}">
        <div class="card-cover-spine"></div>
        ${book.featured ? '<span class="card-cover-badge">Featured</span>' : ''}
        <div class="card-cover-text">
          <div class="card-cover-title">${book.title}</div>
          <div class="card-cover-author">${book.author}</div>
        </div>
      </div>
      <div class="card-body">
        <div class="card-category">${book.category}</div>
        <div class="card-title">${book.title}</div>
        <div class="card-author">${book.author}</div>
        <div class="card-footer">
          <div class="card-rating">
            <span class="star">★</span>
            <span>${book.rating}</span>
          </div>
          <span class="card-pages">${book.pages}pp</span>
        </div>
      </div>
    </div>
  `).join('');

  // Keyboard nav for cards
  grid.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });
}

/* ============================================================
   SEARCH
   ============================================================ */
let searchTimer = null;

function handleSearch(query) {
  state.searchQuery = query;
  state.activeCategory = 'All';
  renderCategoryPills();
  renderBooksGrid();
}

function showSearchDropdown(query) {
  const dropdown = document.getElementById('searchDropdown');
  if (!dropdown || !query.trim()) { hideSearchDropdown(); return; }

  const q = query.toLowerCase();
  const matches = BOOKS.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q)
  ).slice(0, 6);

  if (matches.length === 0) { hideSearchDropdown(); return; }

  dropdown.innerHTML = matches.map(book => `
    <div class="dropdown-item" onclick="selectDropdownBook(${book.id})">
      <div class="dropdown-cover" style="${makeCoverStyle(book)}">
        ${coverInitials(book.title)}
      </div>
      <div class="dropdown-info">
        <strong>${highlightMatch(book.title, query)}</strong>
        <span>${book.author} · ${book.category}</span>
      </div>
    </div>
  `).join('');

  dropdown.classList.add('open');
}

function highlightMatch(text, query) {
  if (!query.trim()) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(255,153,0,0.25);color:inherit;border-radius:2px;">$1</mark>');
}

function hideSearchDropdown() {
  const dropdown = document.getElementById('searchDropdown');
  if (dropdown) dropdown.classList.remove('open');
}

function selectDropdownBook(id) {
  hideSearchDropdown();
  openBookDetail(id);
}

function clearSearchClearBtn() {
  const btn = document.getElementById('searchClearBtn');
  if (btn) btn.classList.remove('visible');
}

/* ============================================================
   MODAL — BOOK DETAIL
   ============================================================ */
function openBookDetail(id) {
  const book = BOOKS.find(b => b.id === id);
  if (!book) return;
  state.currentBookId = id;

  const body = document.getElementById('modalBody');
  if (!body) return;

  body.innerHTML = `
    <div class="modal-layout">
      <div class="modal-cover-wrap">
        <div class="modal-cover" style="${makeCoverStyle(book)}">
          <div class="modal-cover-spine"></div>
          <div class="modal-cover-text">
            <strong>${book.title}</strong>
            <small>${book.author}</small>
          </div>
        </div>
      </div>
      <div class="modal-info">
        <div class="modal-category">${book.category}</div>
        <h2 class="modal-title" id="modalBookTitle">${book.title}</h2>
        <p class="modal-author">by ${book.author}</p>
        <div class="modal-meta">
          <div class="meta-item">
            <span class="meta-value">★ ${book.rating}</span>
            <span class="meta-label">Rating</span>
          </div>
          <div class="meta-item">
            <span class="meta-value">${book.pages}</span>
            <span class="meta-label">Pages</span>
          </div>
          <div class="meta-item">
            <span class="meta-value">${book.year < 1000 ? book.year + ' BCE' : book.year}</span>
            <span class="meta-label">Year</span>
          </div>
        </div>
        <p class="modal-description">${book.description}</p>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-read" onclick="openReadingMode(${book.id})">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        Read Summary
      </button>
      <button class="btn-outline" onclick="filterCategory('${book.category}'); closeBookDetail()">
        More ${book.category}
      </button>
      <button class="btn-outline" onclick="closeBookDetail()">Close</button>
    </div>
  `;

  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => {
    document.getElementById('modalBookTitle')?.focus();
  }, 250);
}

function closeBookDetail() {
  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   READING MODE
   ============================================================ */
function openReadingMode(id) {
  const book = BOOKS.find(b => b.id === id);
  if (!book) return;
  state.currentBookId = id;

  closeBookDetail();

  const overlay = document.getElementById('readingOverlay');
  const article = document.getElementById('readingArticle');
  const titleEl = document.getElementById('readingBookTitle');

  if (titleEl) titleEl.textContent = book.title;

  if (article) {
    article.style.fontSize = state.readingFontSize + 'px';
    article.innerHTML = `
      <div class="reading-header-block">
        <h2>${book.title}</h2>
        <p class="reading-meta-line">by ${book.author} &nbsp;·&nbsp; ${book.category} &nbsp;·&nbsp; ${book.pages} pages &nbsp;·&nbsp; ${book.year < 1000 ? book.year + ' BCE' : book.year}</p>
      </div>
      ${book.summary}
    `;
  }

  overlay.setAttribute('data-reading-theme', state.readingTheme);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Scroll to top
  const body = document.getElementById('readingBody');
  if (body) body.scrollTop = 0;
}

function closeReadingMode() {
  const overlay = document.getElementById('readingOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';

  // Re-open modal if there's a current book
  if (state.currentBookId) {
    setTimeout(() => openBookDetail(state.currentBookId), 300);
  }
}

function adjustFontSize(delta) {
  state.readingFontSize = Math.min(24, Math.max(14, state.readingFontSize + delta));
  const article = document.getElementById('readingArticle');
  if (article) article.style.fontSize = state.readingFontSize + 'px';
}

function toggleReadingTheme() {
  const themes = ['light', 'sepia', 'dark'];
  const current = themes.indexOf(state.readingTheme);
  state.readingTheme = themes[(current + 1) % themes.length];
  const overlay = document.getElementById('readingOverlay');
  if (overlay) overlay.setAttribute('data-reading-theme', state.readingTheme);

  const btn = document.getElementById('readingThemeBtn');
  if (btn) {
    const icons = {
      light: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      sepia: `☕`,
      dark: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    };
    btn.innerHTML = icons[state.readingTheme] || icons.light;
  }
}

/* ============================================================
   NAVIGATION HELPERS
   ============================================================ */
function handleNavClick(e, section) {
  e.preventDefault();
  closeMobileMenu();
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll(`[data-section="${section}"]`).forEach(l => l.classList.add('active'));

  if (section === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (section === 'browse') {
    document.getElementById('booksSection')?.scrollIntoView({ behavior: 'smooth' });
  } else if (section === 'categories') {
    document.getElementById('categoriesSection')?.scrollIntoView({ behavior: 'smooth' });
  }
}

function clearFilters() {
  state.activeCategory = 'All';
  state.searchQuery = '';
  state.sortBy = 'default';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  const sort = document.getElementById('sortSelect');
  if (sort) sort.value = 'default';
  clearSearchClearBtn();
  hideSearchDropdown();
  renderCategoryPills();
  renderBooksGrid();
}

function filterCategory(cat) {
  state.activeCategory = cat;
  state.searchQuery = '';
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  clearSearchClearBtn();
  hideSearchDropdown();
  renderCategoryPills();
  renderBooksGrid();
  document.getElementById('booksSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileNav');
  const btn = document.getElementById('hamburger');
  menu?.classList.remove('open');
  btn?.classList.remove('open');
}

/* ============================================================
   EVENT BINDING
   ============================================================ */
function bindEvents() {
  // Theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    applyTheme(!state.isDark);
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav?.classList.toggle('open');
  });

  // Close mobile nav on outside click
  document.addEventListener('click', e => {
    if (!hamburger?.contains(e.target) && !mobileNav?.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Search input
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');

  searchInput?.addEventListener('input', e => {
    const q = e.target.value;
    const hasValue = q.length > 0;
    if (hasValue) {
      searchClearBtn?.classList.add('visible');
    } else {
      searchClearBtn?.classList.remove('visible');
    }

    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      handleSearch(q);
      if (q.length >= 1) showSearchDropdown(q);
      else hideSearchDropdown();
    }, 200);
  });

  searchClearBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    searchClearBtn.classList.remove('visible');
    hideSearchDropdown();
    handleSearch('');
    searchInput?.focus();
  });

  searchInput?.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      hideSearchDropdown();
      searchInput.blur();
    }
  });

  // Close dropdown on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-container')) {
      hideSearchDropdown();
    }
  });

  // Modal backdrop click to close
  document.getElementById('modalBackdrop')?.addEventListener('click', e => {
    if (e.target.id === 'modalBackdrop') closeBookDetail();
  });

  document.getElementById('modalCloseBtn')?.addEventListener('click', closeBookDetail);

  // Reading mode back button
  document.getElementById('readingBackBtn')?.addEventListener('click', closeReadingMode);

  // Sort
  document.getElementById('sortSelect')?.addEventListener('change', e => {
    state.sortBy = e.target.value;
    renderBooksGrid();
  });

  // Featured scroll buttons
  const track = document.getElementById('featuredTrack');
  document.getElementById('scrollLeft')?.addEventListener('click', () => {
    track?.scrollBy({ left: -240, behavior: 'smooth' });
  });
  document.getElementById('scrollRight')?.addEventListener('click', () => {
    track?.scrollBy({ left: 240, behavior: 'smooth' });
  });

  // Keyboard: close modal with Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const readingOpen = document.getElementById('readingOverlay')?.classList.contains('open');
      const modalOpen = document.getElementById('modalBackdrop')?.classList.contains('open');
      if (readingOpen) closeReadingMode();
      else if (modalOpen) closeBookDetail();
    }
  });

  // Navbar shrink on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.style.boxShadow = window.scrollY > 10 ? 'var(--shadow-md)' : 'none';
    }
  }, { passive: true });
}
