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

// ── Dark Mode Toggle ──
const themeToggle = document.getElementById("theme-toggle");

function getEffectiveTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  // Update Tailwind dark: classes by toggling a class on <html>
  document.documentElement.classList.toggle("dark", theme === "dark");
}

// Apply theme on load (always set data-theme so Tailwind dark: works)
applyTheme(getEffectiveTheme());

// Listen for OS theme changes (only if user hasn't manually set)
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

// ── Timeline Animation on Scroll ──
const stepsTimeline = document.querySelector(".steps-timeline");
if (stepsTimeline) {
  const timelineObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        stepsTimeline.classList.add("timeline-animated");
        timelineObserver.unobserve(stepsTimeline);
      }
    },
    { threshold: 0.2 }
  );
  timelineObserver.observe(stepsTimeline);
}

// ── Parallax-like effect on hero shapes ──
const heroShapes = document.querySelector(".hero-shapes");
if (heroShapes) {
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector("#hero")?.offsetHeight || 900;
      if (scrollY < heroHeight) {
        heroShapes.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    },
    { passive: true }
  );
}
