$(document).ready(function () {
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('header');
    if (window.scrollY > 200) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  $('#searchBtn').on('click', function () {
    $('.searchBox').toggleClass('active');

    if ($('.searchBox').hasClass('active')) {
      $('#searchBtn .closeIcon').removeClass('d-none').addClass('d-block');
      $('#searchBtn .searchIcon').addClass('d-none');
    } else {
      $('#searchBtn .closeIcon').addClass('d-none').removeClass('d-block');
      $('#searchBtn .searchIcon').removeClass('d-none');
    }
  });

  $('.bannerBox').on('init', function (event, slick) {
    $('.Banner_items').eq(0).addClass('active');
  });

  $('.bannerBox').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  });

  $('.bannerBox').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      $('.Banner_items').removeClass('active');
    }
  );

  $('.bannerBox').on('afterChange', function (event, slick, currentSlide) {
    $('.Banner_items').eq(currentSlide).addClass('active');
  });

  // Card popup
  $('.cartBox').on('click', function () {
    $('.cartPopup').addClass('active');
    $('.cartOverlay').addClass('active');
  });
  $('.cartOverlay,.closeBtn').on('click', function () {
    $('.cartPopup').removeClass('active');
    $('.cartOverlay').removeClass('active');
  });

  // fetured product
  $('.responsive').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //review slidar
  $('.review').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
