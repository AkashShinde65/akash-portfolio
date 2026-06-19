console.log("Akash portfolio loaded successfully");

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("active");
}

const fadeElements = document.querySelectorAll(".fade-up");

function showOnScroll() {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);