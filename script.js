document.addEventListener("DOMContentLoaded", function () {
    
    const backToTopBtn = document.getElementById("backToTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  
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
  
  window.addEventListener("scroll", function () {
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

