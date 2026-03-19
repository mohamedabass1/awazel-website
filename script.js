// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

// Quote Form Submission
const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const formData = {
      serviceType: document.getElementById("serviceType").value,
      area: document.getElementById("area").value,
      location: document.getElementById("location").value,
      propertyType: document.getElementById("propertyType").value,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    };

    // Validate required fields
    if (!formData.serviceType || !formData.area || !formData.location || !formData.propertyType) {
      alert("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    // Simulate form submission
    console.log("Quote Request:", formData);

    // Show success message
    alert(
      `شكراً ${formData.name}! تم استلام طلبك بنجاح. سنتواصل معك على ${formData.email} أو ${formData.phone} قريباً لتقديم عرض السعر.`
    );

    // Reset form
    quoteForm.reset();
  });
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: this.querySelector('input[type="text"]').value,
      email: this.querySelector('input[type="email"]').value,
      subject: this.querySelectorAll('input[type="text"]')[1].value,
      message: this.querySelector("textarea").value,
    };

    console.log("Contact Form Data:", formData);

    alert(
      `شكراً لك ${formData.name}! تم استلام رسالتك بنجاح. سنتواصل معك على ${formData.email} قريباً.`
    );

    // Reset form
    contactForm.reset();
  });
}

// Gallery Image Modal
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imgSrc = this.querySelector("img").src;
    modalImage.src = imgSrc;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(
    ".room-card, .amenity-item, .gallery-item, .about-content, .contact-content"
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Active navigation link highlighting
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Add active class styling
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);
