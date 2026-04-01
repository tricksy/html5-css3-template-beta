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
const sentinel = document.getElementById("nav-sentinel");
if (sentinel) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("nav-scrolled", !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  observer.observe(sentinel);
}

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

// ── Mobile menu toggle ──
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

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

// ── Section Navigation (simulated multi-page) ──
const sections = document.querySelectorAll(".blog-section");
const navLinks = document.querySelectorAll("[data-section]");

function showSection(sectionId) {
  sections.forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  navLinks.forEach((link) => {
    link.classList.toggle(
      "text-primary-600",
      link.dataset.section === sectionId
    );
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

// ── Article card click → show article section ──
document.querySelectorAll("[data-show-article]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showSection("article-view");
  });
});

// ── Back to home links ──
document.querySelectorAll("[data-back-home]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showSection("home");
  });
});

// ── Search toggle ──
const searchToggle = document.getElementById("search-toggle");
const searchBar = document.getElementById("search-bar");
searchToggle?.addEventListener("click", () => {
  searchBar?.classList.toggle("hidden");
  if (!searchBar?.classList.contains("hidden")) {
    searchBar?.querySelector("input")?.focus();
  }
});

// ── View Transitions ──
if (document.startViewTransition) {
  document.querySelectorAll("[data-section], [data-show-article], [data-back-home]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.startViewTransition(() => {
        if (link.dataset.section) showSection(link.dataset.section);
        else if (link.dataset.showArticle !== undefined) showSection("article-view");
        else if (link.dataset.backHome !== undefined) showSection("home");
      });
    });
  });
}
