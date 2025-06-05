document.addEventListener("DOMContentLoaded", function () {
    // Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");
  
    // Show/hide button on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    // Scroll to top when button clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
    // Scrollspy (active link highlight)
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".section-nav a");
  
    window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  
    // Lightbox for expanding images
    window.expandImage = function (imgElement) {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
  
      lightboxImg.src = imgElement.src;
      lightbox.style.display = "flex";
    };
  
    window.closeLightbox = function () {
      document.getElementById("lightbox").style.display = "none";
    };
  });
  