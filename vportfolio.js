function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Fade-in animation on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      const visibleCards = [...cards];
      
      visibleCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 400);
      });

    } else {
      cards.forEach(card => {
        card.classList.remove("show");
      });
    }

  });
}, {
  threshold: 0.4
});

observer.observe(document.querySelector(".project-container"));