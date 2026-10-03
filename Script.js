/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* ================= MOBILE MENU ================= */

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


/* ================= SCROLL REVEAL ================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

      }

    });

  },

  {
    threshold: 0.12
  }

);


reveals.forEach(element => {

  observer.observe(element);

});


/* ================= COUNTERS ================= */

const counters = document.querySelectorAll(
  ".stat-number [data-target]"
);


const counterObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;

      const target = Number(
        element.dataset.target
      );

      let current = 0;

      const duration = 1300;

      const start = performance.now();


      function update(time) {

        const progress = Math.min(
          (time - start) / duration,
          1
        );

        current = Math.floor(
          progress * target
        );

        element.textContent = current;


        if (progress < 1) {

          requestAnimationFrame(update);

        }

      }


      requestAnimationFrame(update);

      counterObserver.unobserve(element);

    });

  },

  {
    threshold: 0.7
  }

);


counters.forEach(counter => {

  counterObserver.observe(counter);

});
