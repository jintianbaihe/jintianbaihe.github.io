/* Warm Ink & Macaron — Theme JS */

(function () {
  'use strict';

  // ── Mobile nav toggle ──────────────────────────────────────────
  var menuBtn = document.querySelector('.nav-menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var icon = menuBtn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = mobileNav.classList.contains('open') ? 'close' : 'menu';
    });
  }

  // ── Hero parallax (index page only) ───────────────────────────
  var heroImg = document.querySelector('.hero-image-frame img');
  if (heroImg) {
    document.addEventListener('mousemove', function (e) {
      var moveX = (e.clientX - window.innerWidth  / 2) / 60;
      var moveY = (e.clientY - window.innerHeight / 2) / 60;
      heroImg.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    });
  }

  // ── 分类筛选（Notes 页面）—— 优先委托页面内联脚本 ─────────────
  var filterBtns = document.querySelectorAll('.filter-btn');
  var postItems  = document.querySelectorAll('.post-item');
  if (filterBtns.length && postItems.length && typeof window.applyNotesFilters !== 'function') {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var category = btn.dataset.category || 'all';
        postItems.forEach(function (item) {
          var itemCat = item.dataset.category || 'all';
          item.style.display = (category === 'all' || itemCat === category) ? '' : 'none';
        });
      });
    });
  }

  // ── Same-page anchor smooth scroll ─────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var el = document.querySelector(a.getAttribute('href'));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Highlight current nav link + macaron accent color ──────────
  var currentPath = window.location.pathname;
  document.querySelectorAll('.site-nav a, .mobile-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    var accent = link.getAttribute('data-accent') || '';
    if (href && href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
      if (accent) link.style.borderBottomColor = accent;
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });

  // ── Pagination: 4-color cycle + smaller ────────────────────────
  var macarons = ['var(--macaron-orange)', 'var(--macaron-pink)', 'var(--macaron-green)', 'var(--macaron-blue)'];
  document.querySelectorAll('.pagination .page-number').forEach(function (el, i) {
    var c = macarons[i % 4];
    if (el.classList.contains('current')) {
      el.style.background = c;
      el.style.borderColor = c;
    } else {
      el.addEventListener('mouseenter', function () { el.style.background = c; el.style.borderColor = c; el.style.color = '#fff'; });
      el.addEventListener('mouseleave', function () { el.style.background = ''; el.style.borderColor = ''; el.style.color = ''; });
    }
  });

})();
