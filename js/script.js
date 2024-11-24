//WOW init
new WOW().init();

const headerMenu = document.querySelector("#header");
const burgerMenu = headerMenu.querySelector(".burger");
const closeMenu = headerMenu.querySelector(".close-menu");
const headerBackdrop = headerMenu.querySelector(".header-backdrop");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && headerMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    headerMenu.classList.toggle("menu-is-active");
    document.body.classList.toggle("overflow-hidden");
  });

  closeMenu.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    headerMenu.classList.remove("menu-is-active");
    document.body.classList.remove("overflow-hidden");
  });

  headerBackdrop.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    headerMenu.classList.remove("menu-is-active");
    document.body.classList.remove("overflow-hidden");
  });
}

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
  if (this.scrollY >= 50) {
    headerMenu.classList.add("on-scroll");
  } else {
    headerMenu.classList.remove("on-scroll");
  }
});

new Swiper(".testimonials-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  allowTouchMove: true,
  spaceBetween: 24,
  effect: "slide",
  speed: 500,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      direction: "horizontal",
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    992: {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
    },
  },
});

new Swiper(".logo-section-swiper", {
  slidesPerView: 3,
  speed: 500,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
