ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [56.489049074620965,84.94985271142575],
            zoom: 12,
            controls: []
        }, {
        });


    myMap.geoObjects
        .add(new ymaps.Placemark([56.489049074620965,84.94985271142575], {
            balloonContentHeader: '<div class="ballon"><div class="ballon-title__top">Центр обслуживания</div>'+
                '<div class="ballon-title__adress">Кировский р-он, ул. Котовского, 19</div>'+
                '<div class="ballon-title__bottom">(главный офис)</div>',
            balloonContentBody: '<div class="ballon-list"><div class="ballon-list__title">Услуги</div>'+
                '<div class="ballon-list__one">Консультации по расчётам'+
                '<span>электроэнергия, отопление, водоснабжение</span></div>'+
                '<div class="ballon-list__one">Оплата услуг'+
                '<span>электроэнергия, отопление, водоснабжение</span></div>'+
                '<div class="ballon-list__one">Покупка товаров</div></div>'+
                '<div class="ballon-list"><div class="ballon-list__title">Режим работы</div>'+
                '<p>Пн-Пт: 08:00-19:00 (без перерыва)<br>'+
                'Сб: 10:00-15:00 (без перерыва)<br>'+
                'Вс: выходной</p></di>',
            balloonContentFooter: '<button class="select-office">Выбрать</button></div>',
            balloonPanelMaxMapArea: 0
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pay.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }));
}
