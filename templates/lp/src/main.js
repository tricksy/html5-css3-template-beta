import "./style.css";

// ── Navbar scroll effect ──
const nav = document.querySelector("nav");
const observer = new IntersectionObserver(
  ([entry]) => {
    nav.classList.toggle("nav-scrolled", !entry.isIntersecting);
  },
  { threshold: 0.1 }
);
observer.observe(document.querySelector("#hero"));

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

// ── Mobile menu toggle ──
const menuBtn = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ── View Transitions for section navigation ──
if (document.startViewTransition) {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      document.startViewTransition(() => {
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
}

// ── Animate number counters ──
const counters = document.querySelectorAll("[data-count]");
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current.toLocaleString() + suffix;
      }, 30);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => countObserver.observe(c));
