/* Warm Ink & Macaron — Theme JS */

(function () {
  'use strict';

  // ── Mobile nav toggle ──────────────────────────────────────────
  const menuBtn = document.querySelector('.nav-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const icon = menuBtn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = mobileNav.classList.contains('open') ? 'close' : 'menu';
    });
  }

  // ── Hero parallax (index page only) ───────────────────────────
  const heroImg = document.querySelector('.hero-image-frame img');
  if (heroImg) {
    document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth  / 2) / 60;
      const moveY = (e.clientY - window.innerHeight / 2) / 60;
      heroImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }

  // ── Archive page: category filter ─────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const postItems  = document.querySelectorAll('.post-item');

  if (filterBtns.length && postItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category || 'all';

        postItems.forEach(item => {
          if (category === 'all' || item.dataset.category === category) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // ── Smooth scroll for anchor links ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Newsletter form (basic client-side guard) ──────────────────
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      const input = newsletterForm.querySelector('.newsletter-input');
      if (!input || !input.value.includes('@')) {
        e.preventDefault();
        input && input.focus();
      }
    });
  }

  // ── Highlight current nav link ─────────────────────────────────
  const currentPath = window.location.pathname;
  document.querySelectorAll('.site-nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href !== '/' && currentPath.startsWith(href)) {
      link.classList.add('active');
    } else if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    }
  });

})();
