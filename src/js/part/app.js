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

});