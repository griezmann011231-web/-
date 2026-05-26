/* ============================================================
   318 川西自驾攻略 · 交互脚本
   ============================================================ */

(function () {
  'use strict';

  /* ------ Nav: scroll shadow + active link highlight ------ */
  const nav = document.querySelector('nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    // Darken nav after scrolling past hero
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Highlight current section link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ------ Scroll-reveal for cards & sections ------ */
  const revealEls = document.querySelectorAll(
    '.day-card, .highlight-card, .tip-card, .couple-tip, .route-info-card'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings slightly
          const siblings = Array.from(entry.target.parentElement.children);
          const index = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ------ Smooth anchor scroll (polyfill for older Safari) ------ */
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* ------ Route line: hide scrollbar but keep draggable ------ */
  const routeLine = document.querySelector('.route-line');
  if (routeLine) {
    let isDown = false;
    let startX;
    let scrollLeft;

    routeLine.addEventListener('mousedown', e => {
      isDown = true;
      routeLine.style.cursor = 'grabbing';
      startX = e.pageX - routeLine.offsetLeft;
      scrollLeft = routeLine.scrollLeft;
    });

    routeLine.addEventListener('mouseleave', () => {
      isDown = false;
      routeLine.style.cursor = 'grab';
    });

    routeLine.addEventListener('mouseup', () => {
      isDown = false;
      routeLine.style.cursor = 'grab';
    });

    routeLine.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - routeLine.offsetLeft;
      const walk = (x - startX) * 1.5;
      routeLine.scrollLeft = scrollLeft - walk;
    });

    routeLine.style.cursor = 'grab';
  }
})();
