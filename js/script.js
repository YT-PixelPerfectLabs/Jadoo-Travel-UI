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
  loop: true,
  clickable: true,
  allowTouchMove: true,
  spaceBetween: 24,
  initialSlide: 0,
  autoplay: {
    delay: 5000,
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
      slidesPerView: 1.1,
      spaceBetween: 24,
      allowTouchMove: true,
      initialSlide: 0,
    },
    992: {
      direction: "vertical",
      slidesPerView: 1.5,
      spaceBetween: 0,
      allowTouchMove: false,
      initialSlide: 2,
    },
  },
});
