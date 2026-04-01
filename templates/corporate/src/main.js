import "./style.css";

// ── Scroll Progress Indicator ──
const scrollProgress = document.getElementById("scroll-progress");
window.addEventListener(
  "scroll",
  () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  },
  { passive: true }
);

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
    // Close mobile menu if open
    mobileMenu?.classList.add("hidden");
  });
});

// ── Mobile menu toggle ──
const menuBtn = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ── View Transitions ──
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
      const prefix = el.dataset.prefix || "";
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = prefix + current.toLocaleString() + suffix;
      }, 30);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((c) => countObserver.observe(c));

// ── Dark Mode Toggle ──
const themeToggle = document.getElementById("theme-toggle");

function getEffectiveTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
}

applyTheme(getEffectiveTheme());

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    applyTheme(e.matches ? "dark" : "light");
  }
});

themeToggle?.addEventListener("click", () => {
  const current = getEffectiveTheme();
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

// ── Parallax on hero shapes ──
const heroShapes = document.querySelector(".hero-shapes");
if (heroShapes) {
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector("#hero")?.offsetHeight || 700;
      if (scrollY < heroHeight) {
        heroShapes.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    },
    { passive: true }
  );
}
