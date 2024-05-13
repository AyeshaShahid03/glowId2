var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
    });
  });


  var swiper = new Swiper('.testimonials_slide', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Click event for next button
document.querySelector('.swiper-button-next').addEventListener('click', function () {
    swiper.slideNext();
});

// Click event for previous button
document.querySelector('.swiper-button-prev').addEventListener('click', function () {
    swiper.slidePrev();
});