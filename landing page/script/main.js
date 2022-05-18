

// Menu Moba

let navBar = document.querySelector(".header .nav");

document.querySelector('#menu-btn')
.addEventListener('click', ()=>{
    navBar.classList.add('active')
})

document.querySelector('#nav-close')
.addEventListener('click', ()=>{
    navBar.classList.remove('active')
})


/* Scroll Header efeito
=======================================================*/

window.onscroll = (e) => {

    if(window.scrollY > 0){
        document.querySelector('.header')
        .classList.add('active');
    } else {
        document.querySelector('.header')
        .classList.remove('active');
    }

    e.stopPropagation

};

// slider Home

var swiper = new Swiper(".home__slider", {
    loop:true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// slider Comentarios

var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 18,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
          },
        768: {
          slidesPerView: 3,
        },
      },
  });