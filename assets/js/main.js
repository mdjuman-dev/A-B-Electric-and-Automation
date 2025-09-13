$(document).ready(function () {
  //menu scroll
  $(document).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('nav').addClass('scrolled');
      $('.topBar').addClass('none');
    } else {
      $('nav').removeClass('scrolled');
      $('.topBar').removeClass('none');
    }
  });

  //
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

  // Menu popup
  $('.menuBox').on('click', function () {
    $('.menuPopup').addClass('active');
    $('.menuOverlay').addClass('active');
  });
  $('.menuOverlay,.closeBtn').on('click', function () {
    $('.menuPopup').removeClass('active');
    $('.menuOverlay').removeClass('active');
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

  // Shop filtar price range
  let minGap = 500;

  function updateTrack($box) {
    let minVal = parseInt($box.find('.minRange').val());
    let maxVal = parseInt($box.find('.maxRange').val());
    let maxLimit = parseInt($box.find('.maxRange').attr('max'));

    let percent1 = (minVal / maxLimit) * 100;
    let percent2 = (maxVal / maxLimit) * 100;

    $box
      .find('.slider-track')
      .css(
        'background',
        `linear-gradient(to right, #ddd ${percent1}%, #28acd5 ${percent1}%, #28acd5 ${percent2}%, #ddd ${percent2}%)`
      );

    $box.find('.minValue').text(minVal);
    $box.find('.maxValue').text(maxVal);
  }

  // Multiple filter-box support
  $('.filter-box').each(function () {
    let $box = $(this);

    $box.find('.minRange, .maxRange').on('input', function () {
      let minVal = parseInt($box.find('.minRange').val());
      let maxVal = parseInt($box.find('.maxRange').val());

      if (maxVal - minVal < minGap) {
        if ($(this).hasClass('minRange')) {
          $box.find('.minRange').val(maxVal - minGap);
        } else {
          $box.find('.maxRange').val(minVal + minGap);
        }
      }

      updateTrack($box);
    });

    // Initial update
    updateTrack($box);
  });

  // shop filter popup
  $('.filter-close').on('click', function () {
    $('.filter-popup').addClass('active');
    $('.filter-overley').addClass('active');
  });

  $('.filter-header .closeBtn,.filter-overley').on('click', function () {
    $('.filter-popup').removeClass('active');
    $('.filter-overley').removeClass('active');
  });
});
