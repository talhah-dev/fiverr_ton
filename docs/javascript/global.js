const lenis = new Lenis({
    autoRaf: true,
});

// ------- Navbar -------
const qs = (s, el = document) => el.querySelector(s);
const qsa = (s, el = document) => [...el.querySelectorAll(s)];

qsa('[data-menu]').forEach(wrap => {
    const btn = wrap.querySelector('button');
    const panel = wrap.querySelector('.menu-panel');
    const open = () => { wrap.setAttribute('data-open', ''); panel?.classList.add('translate-y-0'); };
    const close = () => { wrap.removeAttribute('data-open'); panel?.classList.remove('translate-y-0'); };
    wrap.addEventListener('mouseenter', open);
    wrap.addEventListener('mouseleave', close);
    btn.addEventListener('focusin', open);
    btn.addEventListener('blur', () => setTimeout(close, 100));
});

// ------- Language dropdown / sheet -------
const langBtn = qs('#langBtn');
const langDropdown = qs('#langDropdown');
const overlay = qs('#overlay');

const LANGS = ['English', 'Español', 'हिन्दी', '中文', 'Português', 'Русский', 'Bahasa Indonesia'];

function buildLangList(ul) {
    ul.innerHTML = '';
    LANGS.forEach(l => {
        const li = document.createElement('li');
        li.innerHTML = `<button class="w-full text-left rounded-xl px-4 py-3 font-medium hover:text-[#0098ea] transition-all duration-500 cursor-pointer">${l}</button>`;
        ul.appendChild(li);
    })
}
buildLangList(qs('#langDropdown ul'));
buildLangList(qs('#mobileLangList'));

function isDesktop() { return window.matchMedia('(min-width: 768px)').matches; }

function openDesktopLang() {
    langDropdown.classList.remove('hidden');
    langDropdown.classList.add('menu-open', 'translate-y-0');
    overlay.classList.remove('hidden');
    requestAnimationFrame(() => overlay.classList.add('opacity-100'));
    langBtn.setAttribute('aria-expanded', 'true');
}
function closeDesktopLang() {
    langDropdown.classList.remove('menu-open', 'translate-y-0');
    overlay.classList.remove('opacity-100');
    setTimeout(() => { langDropdown.classList.add('hidden'); overlay.classList.add('hidden'); }, 180);
    langBtn.setAttribute('aria-expanded', 'false');
}

// Hover to open (desktop only)
function attachLangHover() {
    if (!isDesktop()) return;
    langBtn.addEventListener('mouseenter', openDesktopLang);
    langBtn.addEventListener('mouseleave', () => setTimeout(() => { if (!langDropdown.matches(':hover')) closeDesktopLang(); }, 80));
    langDropdown.addEventListener('mouseenter', openDesktopLang);
    langDropdown.addEventListener('mouseleave', () => setTimeout(closeDesktopLang, 80));
}
attachLangHover();
window.addEventListener('resize', () => {
    closeDesktopLang();
});

const langSheetWrap = qs('#langSheetWrap');
const sheetBackdrop = qs('#langSheetWrap > div:first-child');
const closeLangSheet = qs('#closeLangSheet');

function openLangSheet() {
    langSheetWrap.classList.remove('hidden');
    requestAnimationFrame(() => {
        langSheetWrap.classList.add('sheet-open');
        sheetBackdrop.classList.add('opacity-100');
    });
}
function closeLangSheetFn() {
    langSheetWrap.classList.remove('sheet-open');
    sheetBackdrop.classList.remove('opacity-100');
    setTimeout(() => langSheetWrap.classList.add('hidden'), 250);
}

langBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isDesktop()) {
        const open = langDropdown.classList.contains('menu-open');
        open ? closeDesktopLang() : openDesktopLang();
    } else {
        openLangSheet();
    }
});

closeLangSheet?.addEventListener('click', closeLangSheetFn);
sheetBackdrop?.addEventListener('click', closeLangSheetFn);

const mobilePanels = qsa('[id^="mobilePanel-"]');

function closeMobilePanels() {
    mobilePanels.forEach(p => p.classList.add('hidden'));
    overlay?.classList.remove('opacity-100');
    setTimeout(() => overlay?.classList.add('hidden'), 180);
    document.documentElement.classList.remove('overflow-hidden');
}

function openMobilePanel(target) {
    closeDesktopLang();
    closeLangSheetFn();

    mobilePanels.forEach(p => { if (p !== target) p.classList.add('hidden'); });

    const willOpen = target.classList.contains('hidden');
    if (willOpen) {
        target.classList.remove('hidden');
        overlay?.classList.remove('hidden');
        requestAnimationFrame(() => overlay?.classList.add('opacity-100'));
        document.documentElement.classList.add('overflow-hidden'); // lock scroll
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        closeMobilePanels();
    }
}

overlay.addEventListener('click', () => {
    closeDesktopLang();
    closeLangSheetFn();
    closeMobilePanels();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDesktopLang();
        closeLangSheetFn();
        closeMobilePanels();
    }
});

qsa('[data-mobile-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetSel = btn.getAttribute('data-mobile-open');
        const target = qs(targetSel);
        if (!target) return;
        openMobilePanel(target);
    });
});

document.addEventListener('click', (e) => {
    const insidePanel = e.target.closest('[id^="mobilePanel-"]');
    const isTrigger = e.target.closest('[data-mobile-open]');
    if (!insidePanel && !isTrigger) closeMobilePanels();
});



// Hero section


document.addEventListener('DOMContentLoaded', () => {
    const phrases = ["for gamers", "for Everyone", "for creators", "for crypto ninjas"];
    const el = document.getElementById('typed');

    let i = 0;
    let j = 0;
    let del = false;

    const TYPE_SPEED = 85;
    const DELETE_SPEED = 55;
    const HOLD_MS = 3000;

    function tick() {
        const full = phrases[i];

        if (!del) {
            // typing
            el.textContent = full.slice(0, j + 1);
            j++;
            if (j === full.length) {
                del = true;
                return setTimeout(tick, HOLD_MS);
            }
            return setTimeout(tick, TYPE_SPEED);
        } else {
            el.textContent = full.slice(0, j - 1);
            j--;
            if (j === 0) {
                del = false;
                i = (i + 1) % phrases.length;
                return setTimeout(tick, 300);
            }
            return setTimeout(tick, DELETE_SPEED);
        }
    }

    tick();
});

// swiper
const gsSwiper = new Swiper('.getting-started-swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.05,
    autoplay: true,
    breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 }
    }
});