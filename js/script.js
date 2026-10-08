// Fallback translation function — overridden by js/i18n.js
var t = function(key) { return key; };


// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');

function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    if (scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    updateActiveLink();
}

// Active link highlighting based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
    mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose = document.getElementById('mobileClose');

function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

navToggle.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form — sends via FormSubmit.co AJAX (stays on page, no redirect)
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    const originalHTML = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + t('contact.formSending');
    formMessage.className = 'form-message';

    const userSubject = document.getElementById('subject').value;
    const subjectInput = this.querySelector('input[name="_subject"]');
    if (subjectInput) subjectInput.value = '[RUGGED Website] ' + userSubject;

    const ajaxUrl = this.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    const formData = new FormData(this);

    try {
        const response = await fetch(ajaxUrl, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        const result = await response.json();

        if (result.success) {
            btn.innerHTML = '<i class="fa-solid fa-check"></i> ' + t('contact.formSent');
            btn.style.backgroundColor = '#4A9EFF';
            btn.style.borderColor = '#4A9EFF';
            formMessage.textContent = t('contact.formSuccessMsg');
            formMessage.className = 'form-message success';
            this.reset();
        } else {
            throw new Error(result.message || 'Unknown error');
        }
    } catch (err) {
        btn.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> ' + t('contact.formError');
        btn.style.backgroundColor = '#e74c3c';
        btn.style.borderColor = '#e74c3c';
        formMessage.textContent = t('contact.formErrorMsg');
        formMessage.className = 'form-message error';
    }

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
        const span = btn.querySelector('span[data-i18n="contact.formSubmit"]');
        if (span) span.innerHTML = t('contact.formSubmit');
        btn.style.backgroundColor = '';
        btn.style.borderColor = '';
        formMessage.className = 'form-message';
    }, 4000);
});

// ============ OBJECTIVES CAROUSEL ============
const objCarousel = document.getElementById('objCarousel');
const objTrack = document.getElementById('objTrack');
const objPrev = document.getElementById('objPrev');
const objNext = document.getElementById('objNext');
const objDotsContainer = document.getElementById('objDots');
const objCards = objTrack.querySelectorAll('.obj-card');

function getCardStep() {
    const gap = parseFloat(getComputedStyle(objTrack).gap) || 20;
    return objCards[0].offsetWidth + gap;
}

function scrollToCard(index) {
    const card = objCards[index];
    const targetScroll = card.offsetLeft - (objCarousel.clientWidth - card.offsetWidth) / 2;
    objCarousel.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
}

function updateDots() {
    const maxScroll = objCarousel.scrollWidth - objCarousel.clientWidth;
    const progress = maxScroll > 0 ? objCarousel.scrollLeft / maxScroll : 0;
    const activeIndex = Math.round(progress * (objCards.length - 1));

    const dots = objDotsContainer.querySelectorAll('.obj-dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
}

function updateArrows() {
    const maxScroll = objCarousel.scrollWidth - objCarousel.clientWidth;
    objPrev.disabled = objCarousel.scrollLeft <= 5;
    objNext.disabled = objCarousel.scrollLeft >= maxScroll - 5;
}

// Generate dot indicators
objCards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'obj-dot';
    dot.setAttribute('aria-label', t('carousel.dotAria') + ' ' + (i + 1));
    dot.addEventListener('click', () => scrollToCard(i));
    objDotsContainer.appendChild(dot);
});

objPrev.addEventListener('click', () => {
    objCarousel.scrollBy({ left: -getCardStep(), behavior: 'smooth' });
});

objNext.addEventListener('click', () => {
    objCarousel.scrollBy({ left: getCardStep(), behavior: 'smooth' });
});

let objScrollRaf;
objCarousel.addEventListener('scroll', () => {
    if (objScrollRaf) cancelAnimationFrame(objScrollRaf);
    objScrollRaf = requestAnimationFrame(() => {
        updateDots();
        updateArrows();
    });
});

window.addEventListener('resize', () => { updateDots(); updateArrows(); });

// Initialise
updateDots();
updateArrows();

// ============ NEWS MODAL ============
const newsModal = document.getElementById('newsModal');
const modalClose = document.getElementById('modalClose');
const modalCategory = document.getElementById('modalCategory');
const modalDate = document.getElementById('modalDate');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('.news-category');
        const date = card.querySelector('.news-date');
        const title = card.querySelector('h3');
        const fullContent = card.querySelector('.news-full');

        modalCategory.textContent = category ? category.textContent : '';
        modalDate.textContent = date ? date.textContent : '';
        modalTitle.textContent = title ? title.textContent : '';
        modalBody.innerHTML = fullContent ? fullContent.innerHTML : '';

        newsModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeNewsModal() {
    newsModal.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeNewsModal);

newsModal.addEventListener('click', (e) => {
    if (e.target === newsModal) closeNewsModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && newsModal.classList.contains('open')) {
        closeNewsModal();
    }
});

// ============ NEWS FILTER & SEARCH ============
const newsSearch = document.getElementById('newsSearch');
const newsFilterBtns = document.querySelectorAll('#newsFilters .filter-btn');
const newsCards = document.querySelectorAll('.news-card');
const newsNoResults = document.getElementById('newsNoResults');
let newsActiveFilter = 'all';

function filterNews() {
    const searchTerm = newsSearch.value.toLowerCase().trim();
    let visibleCount = 0;

    newsCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const text = card.textContent.toLowerCase();

        const matchesFilter = newsActiveFilter === 'all' || category === newsActiveFilter;
        const matchesSearch = searchTerm === '' || text.includes(searchTerm);

        if (matchesFilter && matchesSearch) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    newsNoResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

if (newsSearch) newsSearch.addEventListener('input', filterNews);

newsFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        newsFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        newsActiveFilter = btn.getAttribute('data-filter');
        filterNews();
    });
});

// ============ PUBLICATIONS FILTER & SEARCH ============
const pubsSearch = document.getElementById('pubsSearch');
const pubsFilterBtns = document.querySelectorAll('#pubsFilters .filter-btn');
const pubCards = document.querySelectorAll('.pub-card');
let pubsActiveFilter = 'all';

function filterPubs() {
    const searchTerm = pubsSearch.value.toLowerCase().trim();

    pubCards.forEach(card => {
        const type = card.getAttribute('data-type') || '';
        const text = card.textContent.toLowerCase();

        const matchesFilter = pubsActiveFilter === 'all' || type === pubsActiveFilter;
        const matchesSearch = searchTerm === '' || text.includes(searchTerm);

        card.style.display = (matchesFilter && matchesSearch) ? '' : 'none';
    });
}

if (pubsSearch) pubsSearch.addEventListener('input', filterPubs);

pubsFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        pubsFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        pubsActiveFilter = btn.getAttribute('data-filter');
        filterPubs();
    });
});

// ============ DOCUMENTATION SEARCH ============
const docsSearch = document.getElementById('docsSearch');
const docCards = document.querySelectorAll('.doc-card');

function filterDocs() {
    const searchTerm = docsSearch.value.toLowerCase().trim();

    docCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

if (docsSearch) docsSearch.addEventListener('input', filterDocs);

// ============ PARTNER MODAL ============
const partnerModal = document.getElementById('partnerModal');
const partnerModalClose = document.getElementById('partnerModalClose');
const partnerModalLogo = document.getElementById('partnerModalLogo');
const partnerModalType = document.getElementById('partnerModalType');
const partnerModalName = document.getElementById('partnerModalName');
const partnerModalBody = document.getElementById('partnerModalBody');
const partnerModalLink = document.getElementById('partnerModalLink');

document.querySelectorAll('.partner-card').forEach(card => {
    card.addEventListener('click', () => {
        const logo = card.querySelector('.partner-logo');
        const type = card.querySelector('.partner-type');
        const name = card.querySelector('h3');
        const fullContent = card.querySelector('.partner-full');
        const website = card.getAttribute('data-website') || '#';

        partnerModalLogo.innerHTML = logo ? logo.innerHTML : '';
        partnerModalType.textContent = type ? type.textContent : '';
        partnerModalType.style.display = type ? 'inline-block' : 'none';
        partnerModalName.textContent = name ? name.textContent : '';
        partnerModalBody.innerHTML = fullContent ? fullContent.innerHTML : '';
        partnerModalLink.href = website;

        partnerModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closePartnerModal() {
    partnerModal.classList.remove('open');
    document.body.style.overflow = '';
}

partnerModalClose.addEventListener('click', closePartnerModal);

partnerModal.addEventListener('click', (e) => {
    if (e.target === partnerModal) closePartnerModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && partnerModal.classList.contains('open')) {
        closePartnerModal();
    }
});
