// ── Navbar active link ──────────────────────────────────
(function () {
  const links = document.querySelectorAll('.navbar__link');
  const current = location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current) link.classList.add('active');
  });
})();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

lucide.createIcons();
