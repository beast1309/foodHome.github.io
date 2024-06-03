$('.menu__slider-inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 1361,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.reviews__slider-inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
});

$('.header__top-menu').on('click', function () {
    $('.header__navigation-list').toggleClass('--active');
    $('.header__breadcrumbs').toggleClass('--active');
    $('.header__top-btn').toggleClass('--active');
});