const homeButtons = document.querySelectorAll('.demo-button')

homeButtons.forEach(homeBtn => {
    homeBtn.addEventListener('click', ()=>{
        const contexto = homeBtn.dataset.contexto
        window.location.href = `cardspage.html?contexto=${contexto}`;
    })
})

//Swiper API section

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});