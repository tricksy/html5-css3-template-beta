import "./style.css";

// ── Scroll Progress Indicator ──
const scrollProgress = document.getElementById("scroll-progress");
window.addEventListener(
  "scroll",
  () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollProgress.style.width = `${(scrollTop / scrollHeight) * 100}%`;
  },
  { passive: true },
);

// ── Navbar scroll effect ──
const nav = document.querySelector("nav");
const hero = document.querySelector("#hero");
if (hero) {
  const navObserver = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("nav-scrolled", !entry.isIntersecting);
    },
    { threshold: 0.1 },
  );
  navObserver.observe(hero);
}

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
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
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

// ── Project Filter ──
const filterBtns = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // Update active tab
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter cards
    projectCards.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.dataset.visible = match ? "true" : "false";
      if (match) {
        card.style.display = "";
        requestAnimationFrame(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        });
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(16px)";
        setTimeout(() => {
          if (card.dataset.visible === "false") card.style.display = "none";
        }, 300);
      }
    });
  });
});

// ── Contact Form (prevent default, show feedback) ──
const contactForm = document.getElementById("contact-form");
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = "送信しました";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = originalText;
    btn.disabled = false;
    contactForm.reset();
  }, 2000);
});
