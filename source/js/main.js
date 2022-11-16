import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // mobile-menu
  let html = document.querySelector('[data-html]');
  // let body = document.querySelector('[data-body]');
  let header = document.querySelector('[data-header]');
  let menuToggle = document.querySelector('[data-header-toggle]');
  let headerList = document.querySelector('[data-header-list]');
  // let headerPromo = document.querySelector('[data-header-promo]');

  header.classList.add('is-js');
  html.style.setProperty('overflow-y', 'auto');
  // headerPromo.style.setProperty('padding-top', '124px');

  menuToggle.onclick = () => {
    header.classList.toggle('is-open');

    if (html.style.getPropertyValue('overflow-y') === 'auto') {
      html.style.setProperty('overflow-y', 'hidden');
    } else {
      html.style.setProperty('overflow-y', 'auto');
    }
  };

  headerList.onclick = () => {
    header.classList.remove('is-open');
    html.style.setProperty('overflow-y', 'auto');
  };

  // form
  let inputName = document.querySelector('[data-name-input]');
  let inputPhone = document.querySelector('[data-phone-input]');
  let inputEmail = document.querySelector('[data-email-input]');

  inputName.oninput = () => {
    if (inputName.value.length < 2) {
      inputName.classList.add('is-invalid');
    } else {
      inputName.classList.remove('is-invalid');
    }
  };

  inputPhone.oninput = () => {
    if (inputPhone.value.length < 11) {
      inputPhone.classList.add('is-invalid');
    } else {
      inputPhone.classList.remove('is-invalid');
    }
  };

  inputPhone.addEventListener('keypress', (evt) => {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  });

  inputName.oninput = () => {
    if (inputName.value.length < 2) {
      inputName.classList.add('is-invalid');
    } else {
      inputName.classList.remove('is-invalid');
    }
  };

  inputEmail.oninput = () => {
    if (inputEmail.value.match(/([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})/)) {
      inputEmail.classList.remove('is-invalid');
    } else {
      inputEmail.classList.add('is-invalid');
    }
  };

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });

  // map
  let mapImage = document.querySelector('[data-img-map]');
  let mapYandex = document.querySelector('[data-map]');

  mapYandex.classList.remove('visually-hidden');
  mapImage.classList.add('visually-hidden');

  // яндекс-карта
  /* eslint-disable */
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
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../img/svg/map-pin.svg',
        // Размеры метки.
        iconImageSize: [18, 22],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
    });

    myMap.geoObjects
        .add(myPlacemark);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
