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

  //search popup
  $('#searchBtn').on('click', function () {
    $('.searchBox').toggleClass('active');

    if ($('.searchBox').hasClass('active')) {
      $('#searchBtn .closeIcon').removeClass('d-none').addClass('d-block');
      $('#searchBtn .searchIcon').addClass('d-none');
      $('.searchBox-overlay').addClass('active').fadeIn(400);
    } else {
      $('#searchBtn .closeIcon').addClass('d-none').removeClass('d-block');
      $('#searchBtn .searchIcon').removeClass('d-none');
      $('.searchBox-overlay').removeClass('active').fadeOut(400);
    }
  });
  $('.searchBox-overlay').on('click', function () {
    $('.searchBox').removeClass('active');
    $('#searchBtn .closeIcon').addClass('d-none').removeClass('d-block');
    $('#searchBtn .searchIcon').removeClass('d-none');
    $('.searchBox-overlay').removeClass('active').fadeOut(400);
  });

  //banner
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

  // Cart popup
  $('.cartBox').on('click', function () {
    $('.cartPopup').toggleClass('active');
    if ($('.cartPopup').hasClass('active')) {
      $('.cartOverlay').addClass('active');
    } else {
      $('.cartPopup').removeClass('active');
      $('.cartOverlay').removeClass('active');
    }
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
          slidesToShow: 1,
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

  // product details all image sliber
  $('.child-images').slick({
    dots: false,
    autoplay: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.child-images .image-item img').click(function () {
    let imgSrc = $(this).attr('src');
    $('.main-image img').attr('src', imgSrc);
  });
  //product quantity
  // Plus button
  $('.quantity-plus').on('click', function () {
    let input = $(this).closest('.quantity').find('.input-quantity input');
    let minusBtn = $(this).closest('.quantity').find('.quantity-minus');
    let value = parseInt(input.val()) || 0;

    input.val(value + 1);
    minusBtn.prop('disabled', false); // plus চাপলে minus আবার active হবে
  });

  // Minus button
  $('.quantity-minus').on('click', function () {
    let input = $(this).closest('.quantity').find('.input-quantity input');
    let value = parseInt(input.val()) || 0;

    if (value > 1) {
      input.val(value - 1);
      if (value - 1 === 1) {
        $(this).prop('disabled', true); // যদি মান ১ হয় তাহলে disable হবে
      }
    }
  });

  // Direct typing validation
  $('.input-quantity input').on('input', function () {
    let value = parseInt($(this).val()) || 0;
    let minusBtn = $(this).closest('.quantity').find('.quantity-minus');

    if (value <= 1) {
      $(this).val(1);
      minusBtn.prop('disabled', true);
    } else {
      minusBtn.prop('disabled', false);
    }
  });

  //product details page related products slidar
  $('.related-products').slick({
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
