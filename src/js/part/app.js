var achiev;

$(document).ready(function() {
    $('.m-menu-list a').each(function() {
        if ( $(this).next('ul').length > 0 ) {
            $(this).addClass('j-submenu').after('<div class="j-submenu-open"></div>');
        }
    });

    $('.j-submenu-open').on('click', function() {
        $(this).toggleClass('active').next('ul').slideToggle();
        $(this).prev().toggleClass('active');
    });

    $('.m-head-searh').on('click', function(event) {
        event.preventDefault();
        $('.m-searh').animate({'top':'0'}, 200)
    });

    $('.m-searh-close').on('click', function(event) {
        event.preventDefault();
        $('.m-searh').animate({'top':'-100%'}, 200)
    });

    $('.head-lk__enter, .m-head-lk').on('click', function() {
        $('.lk-enter').slideToggle();
        $('.lk-enter-overlay').fadeIn();
    });

    $('.lk-enter-overlay').on('click', function(event) {
        event.stopPropagation();
        $('.lk-enter').slideUp();
        $('.lk-enter-overlay').hide();
    });
    $(".datepicker" ).datepicker({
       // showOn: "button",
        buttonImage: "img/calendar.png",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });

    $('.news-filtr-date').on('click', function() {

    });


    $('.sert-zoom').magnificPopup({
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });

    $('.direction-text__title').on('click', function() {
        $(this).toggleClass('open').next().slideToggle();
    });

    var achiev = new Swiper('.achiev-slider', {
        spaceBetween: 10,
        paginationClickable: true,
        autoHeight: true,
        onSlideChangeEnd: function() {
            idx = $('.achiev-slider .swiper-slide-active').index();
            console.log(idx);
            achievYear.slideTo(idx, 300, true);
            $('.achiev-year .swiper-slide').removeClass('curr');
            $('.achiev-year .swiper-slide').eq(idx).addClass('curr');
        }
    });

    var achievYear = new Swiper('.achiev-year', {
        spaceBetween: 0,
        slidesPerView: 7,
        slideToClickedSlide: true,
        allowSwipeToPrev: false,
        allowSwipeToNext: false,
        breakpoints: {
            760: {
                slidesPerView: 4,
                allowSwipeToPrev: true,
                allowSwipeToNext: true,
                centeredSlides: true,
            }
        }
    });

    var year = $('.achiev-year .swiper-slide');

    year.on('click', function() {
        year.removeClass('curr');
        $(this).addClass('curr');
        idx = $(this).index();
        achiev.slideTo(idx, 300, true);
    });


    $('.zacup-docs-list').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('open');
        if ( $(this).parents('.zacup-one').next().hasClass('zacup-docs') ) {
            $(this).parents('.zacup-one').next().fadeToggle(100);
        }
    });

    $('.tab-menu__one').on('click', function() {
        $(this).parents('.tab-menu').find('.tab-menu__one').removeClass('active');
        $(this).addClass('active');
        idx = $(this).index();

        $(this).parents('.tab-menu').next('.tab-list').find('.tab-one').hide().removeClass('open');
        $(this).parents('.tab-menu').next('.tab-list').find('.tab-one').eq(idx).show().addClass('open');
    });



});