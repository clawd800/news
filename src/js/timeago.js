// Lightweight timeago for data-timeago elements
(function () {
  function timeago(date) {
    const now = Date.now();
    const diff = now - new Date(date).getTime();
    const s = Math.floor(diff / 1000);
    if (s < 60) return 'just now';
    const m = Math.floor(s / 60);
    if (m < 60) return m + 'm ago';
    const h = Math.floor(m / 60);
    if (h < 24) return h + 'h ago';
    const d = Math.floor(h / 24);
    if (d < 30) return d + 'd ago';
    const mo = Math.floor(d / 30);
    if (mo < 12) return mo + 'mo ago';
    return Math.floor(mo / 12) + 'y ago';
  }

  function update() {
    document.querySelectorAll('[data-timeago]').forEach(function (el) {
      el.textContent = timeago(el.getAttribute('data-timeago'));
    });
  }

  update();
  setInterval(update, 60000);
})();
