$(document).ready(function () {

  $('.slider__text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    fade: true,
    asNavFor: '.slider__img'
  });
  $('.slider__img').slick({
    slidesToShow: 1,
    prevArrow: '<button class="slick-prev"><img src="img/arow-left.png" alt="prev"></button>',
    nextArrow: '<button class="slick-next"><img src="img/arow-right.png" alt="prev"></button>',
    arrows: true,
    slidesToScroll: 1,
    asNavFor: '.slider__text',
  });

  $('.menu__buttom').on('click', function () {
    $('.menu__listSeason').toggleClass('menu__listSeason--active');
    $('.menu__buttom').toggleClass('menu__buttom--active');

  });
})

