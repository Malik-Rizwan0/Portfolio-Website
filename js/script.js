/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 70);

  // Remove menu on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

/*========== portfolio tab filter using Bootstrap ==========*/
/*========== Portfolio Filter ==========*/
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-box");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    portfolioItems.forEach((item) => {
      // Show all
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


/*========== scroll reveal ==========*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form',
  { origin: 'bottom' }
);
ScrollReveal().reveal('.home-content h1, .about-img img, .right', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .left', { origin: 'right' });
