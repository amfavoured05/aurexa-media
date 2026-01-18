document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const fabBtn = document.getElementById("homeToggleBtn");
  const fabActions = document.getElementById("fabActions");
  const fabContainer = document.getElementById("fabContainer");

  if (!fabBtn || !fabActions || !fabContainer) return;

  let lastScrollY = window.scrollY;

  fabBtn.addEventListener("click", () => {
    fabActions.classList.toggle("show");
    fabBtn.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      fabContainer.classList.add("hide");
    } else {
      fabContainer.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
  });

  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === ""
  ) {
    fabContainer.style.display = "none";
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("show");
  });
});
// Navbar background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Page transition
document.querySelectorAll("a").forEach(link => {
  if (link.href.includes(".html")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.href;

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = target;
      }, 300);
    });
  }
});
// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// Active nav link
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
// Contact form validation
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "2px solid green";
      }
    });

    if (valid) {
      alert("Message sent successfully!");
      form.reset();
    }
  });
}
// Floating Home Toggle
const homeToggleBtn = document.getElementById("homeToggleBtn");
const homeLink = document.getElementById("homeLink");

if (homeToggleBtn && homeLink) {
  homeToggleBtn.addEventListener("click", () => {
    homeLink.classList.toggle("show");
  });
}
const slideElements = document.querySelectorAll(
  ".slide-left, .slide-right"
);

document.addEventListener("DOMContentLoaded", () => {
  const slideElements = document.querySelectorAll(
    ".slide-left, .slide-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element enters view → animate in
          entry.target.classList.add("active");
        } else {
          // Element leaves view → reset animation
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.3, // 30% visibility feels natural
    }
  );

  slideElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", () => {
  // ===== PORTFOLIO LIGHTBOX (SAFE VERSION) =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxImages = document.querySelectorAll(".lightbox-img");

  // If portfolio elements do not exist, stop here
  if (!lightbox || !lightboxImg || !lightboxClose || lightboxImages.length === 0) {
    return;
  }

  // Open lightbox
  lightboxImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
  });

  // Close button
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });

  // Click outside image to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;
  document.getElementById("scroll-progress").style.width = progress + "%";
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const update = () => {
      const target = +counter.dataset.target;
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
});
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  setTimeout(() => loader.classList.add("hide"), 800);
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".ai-slide");
  if (!slides.length) return;

  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4000);
});

const communityCards = document.querySelectorAll(".community-card");

if (communityCards.length) {
  communityCards.forEach(card => {
    card.addEventListener("click", () => {
      // logic here
    });
  });
}

// WhatsApp dynamic redirect
const joinButtons = document.querySelectorAll('.join-btn');
joinButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const skill = btn.closest('.community-card').dataset.skill;
    const message = `Hello AureXa Team, I want to join the ${skill}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
});
