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
});