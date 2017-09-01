ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("cenrt-map", {
            center: [56.499494144794475,84.97354198144527],
            zoom: 13,
            controls: []
        }, {
        });


    myMap.geoObjects
        .add(new ymaps.Placemark([56.489049074620965,84.94985271142575], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-place.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }))
        .add(new ymaps.Placemark([56.49199919000121,84.95313224597909], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pay.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }))
        .add(new ymaps.Placemark([56.475187372175306,84.96429023548102], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-place.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }))
        .add(new ymaps.Placemark([56.461884591419846,84.94798240467048], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pay.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }))
        .add(new ymaps.Placemark([56.48506640858895,84.96635017200448], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-place.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }))
        .add(new ymaps.Placemark([56.492853828398424,84.95948371692636], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pay.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }))
        .add(new ymaps.Placemark([56.50614571414872,84.9903827647779], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-place.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }))
        .add(new ymaps.Placemark([56.52398746042584,84.92841300769783], {
            balloonContent: 'текст описания'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-pay.png',
            iconImageSize: [45, 55],
            iconImageOffset: [-22, -55]
        }));
}
