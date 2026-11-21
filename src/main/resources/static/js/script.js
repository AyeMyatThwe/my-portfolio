const body = document.body;
const header = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const backToTop = document.getElementById("backToTop");
const cursorGlow = document.getElementById("cursorGlow");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];

document.getElementById("year").textContent = new Date().getFullYear();

function closeMenu() {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach(link => link.addEventListener("click", closeMenu));

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
    backToTop.classList.toggle("visible", window.scrollY > 550);

    let currentSection = "home";
    sections.forEach(section => {
        const top = section.offsetTop - 180;
        if (window.scrollY >= top) currentSection = section.id;
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
    });
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeIcon.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
    const light = body.classList.toggle("light-theme");
    themeIcon.textContent = light ? "☀" : "☾";
    localStorage.setItem("portfolio-theme", light ? "light" : "dark");
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", event => {
        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;
    });
}

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", event => event.preventDefault());
});
