// яндекс-карта
/* eslint-disable */
const map = () => {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 16,
      controls: ['zoomControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
    }, {
        searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Круизы в Антарктику'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-pin.svg',
        // Размеры метки.
        iconImageSize: [18, 22],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-9, -22],
    });

    myMap.geoObjects
        .add(myPlacemark);
  });
};
export {map};
