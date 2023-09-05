// mobile menu
let hamIcon=document.getElementById('hamIcon');

hamIcon.addEventListener('click',function () {
  hamIcon.parentElement.parentElement.querySelector('ul').classList.add('active');
})
// swiper
var projects = new Swiper(".projects", {
  effect: "coverflow",
  loop:true,
  autoplay: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
  pagination: {
    el: ".swiper-pagination",
  },
});
var brands = new Swiper(".brands", {
  loop: true,
  autoplay: true,
  slidesPerView: 2,
  spaceBetween: 40,
  breakpoints: {
    1200: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 4
    },
    576: {
      slidesPerView: 3
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var testimonials = new Swiper(".testimonials", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    1200: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 2
    },
  }
});
// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.bottom', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.right', {
  duration: 2000,
  origin: 'right',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});