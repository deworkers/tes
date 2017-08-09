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

    $( ".datepicker" ).datepicker({
        
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

});