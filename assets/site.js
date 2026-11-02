/* Kitelux site script. Progressive enhancement only: every page is fully usable without it.
   Fade-up reveal for sections marked .reveal, using IntersectionObserver.
   Skipped entirely when the browser lacks IntersectionObserver or the user prefers reduced motion,
   in which case nothing is ever hidden. Sections already on screen are never hidden (no flash). */
(function () {
  'use strict';
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var items = document.querySelectorAll('.reveal');
  var vh = window.innerHeight || document.documentElement.clientHeight;
  var below = [];
  for (var i = 0; i < items.length; i++) {
    if (items[i].getBoundingClientRect().top < vh) items[i].classList.add('is-visible');
    else below.push(items[i]);
  }

  document.documentElement.classList.add('reveal-ready');

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
  for (var j = 0; j < below.length; j++) io.observe(below[j]);
})();

(function () {
  var vids = document.querySelectorAll('video.kv-demo');
  if (!vids.length) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  vids.forEach(function (v) {
    if (reduce) { v.removeAttribute('autoplay'); v.pause(); return; } // poster only
    if (!('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else { v.pause(); }
      });
    }, { threshold: 0.25 }).observe(v);
  });
})();
