/* Kitelux site script. Progressive enhancement only: every page is fully usable without it.
   Fade-up reveal for sections marked .reveal, using IntersectionObserver.
   Skipped entirely when the browser lacks IntersectionObserver or the user prefers reduced motion,
   in which case nothing is ever hidden. */
(function () {
  'use strict';
  var root = document.documentElement;
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  root.classList.add('reveal-ready');

  function start() {
    var items = document.querySelectorAll('.reveal');
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    for (var i = 0; i < items.length; i++) io.observe(items[i]);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
