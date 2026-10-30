(function () {
  'use strict';

  /* ===== Social links: fill in your real URLs; empty ones show "قريبًا" ===== */
  var SOCIAL = {
    youtube: 'https://www.youtube.com/@amzakistory',
    tiktok: 'https://www.tiktok.com/@amzakistory',
    instagram: 'https://www.instagram.com/amzakistory/',
    facebook: ''
  };

  document.querySelectorAll('[data-social]').forEach(function (a) {
    var url = SOCIAL[a.dataset.social];
    if (url) {
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    } else {
      a.removeAttribute('href');
      a.setAttribute('aria-disabled', 'true');
    }
  });

  /* Mobile menu */
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'إغلاق القائمة' : 'فتح القائمة');
  }
  btn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* Scroll reveal */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* Footer year in Arabic-Indic digits */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear().toLocaleString('ar-SY', { useGrouping: false });
})();
