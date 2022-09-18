// import { Points } from "./utils";
// include utils/mixins 
// include utils/mixins 

var map;

ymaps.ready(init)

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.757131068980215, 37.61711450000001],
        zoom: 11,
    });

    // Создание стиля для значка метки
    // var baseStyle = new ymaps.Style();
    // baseStyle.iconStyle = new ymaps.IconStyle();
    // baseStyle.iconStyle.href = "../dummy/shops/placemark.png";

    //-  данные для каталога магазинов стр shops.html
    const shops = [
        {
            name: 'BRUSNIKA «Ереван Плаза»',
            coords: [55.70873406903462, 37.622090999999976],
            img: 'shop-1.png',
            address: 'м. Войковская, м. Тульская, ул. Большая Тульская, д. 13, ТРЦ "Ереван Плаза", 2 этаж',
            time: 'Пн-Вс: с 10:00 до 22:00',
            phone: '8 926 734 07 15'
        },
        {
            name: 'BRUSNIKA «АФИМОЛЛ Сити»',
            coords: [55.74916156898958, 37.53974249999992],
            img: 'shop-1.png',
            address: 'м. Деловой центр, Пресненская наб., д. 2, ТРЦ «АФИМОЛЛ Сити», 3 этаж ',
            time: 'Вс-Чт: с 10:00 до 22:00, Пт-Сб: с 10:00 до 23:00',
            phone: '8 985 926 51 36'
        },
        {
            name: 'BRUSNIKA «Капитолий»',
            coords: [55.691963069051084, 37.527965499999965],
            img: 'shop-1.png',
            address: 'м. Университет, пр-т Вернадского, д. 6, ТЦ «Капитолий», 2 этаж',
            time: 'Пн-Вс: с 10:00 до 22:00',
            phone: '8 985 926 51 36'
        },
        {
            name: 'BRUSNIKA «Метрополис»',
            coords: [55.82387906891326, 37.497215999999966],
            img: 'shop-1.png',
            address: 'Адрес: м. Войковская, Ленинградское ш., д. 16А, ТЦ "Метрополис", 2 этаж',
            time: 'Режим работы: Пн-Вс: с 10:00 до 23:00',
            phone: '8 919 720 04 57'
        },
        {
            name: 'BRUSNIKA «Авиапарк»',
            coords: [55.79023106894601, 37.531288999999965],
            img: 'shop-1.png',
            address: 'м. ЦСКА, Ходынский бульвар, д. 4, ТЦ «Авиапарк», 2 этаж',
            time: 'Вс-Чт: с 10:00 до 22:00',
            time1: 'Пт-Сб: с 10:00 до 23:00',
            phone: '8 985 115 95 42'
        },
        {
            name: 'BRUSNIKA «Европарк»',
            coords: [55.76621756897374, 37.38087549999998],
            img: 'shop-1.png',
            address: 'м. Крылатское, Рублевское шоссе, д. 62, МТК «Европарк», 1 этаж',
            time: 'Пн-Вс: с 10:00 до 22:00',
            phone: '8 964 646 82 34'
        },
        {
            name: 'BRUSNIKA Лесная',
            coords: [55.7786435689461, 37.58941000000001],
            img: 'shop-1.png',
            address: 'г. Москва, м. Белорусская, ул. Лесная, д. 10-16',
            time: 'Пн-Вс: с 10:00 до 22:00',
            phone: '8 919 720 04 32'
        },
        {
            name: 'BRUSNIKA «Модный Сезон»',
            coords: [55.757131068980215, 37.61711450000001],
            img: 'shop-1.png',
            address: 'м. Охотный ряд, ул.Охотный ряд., д. 2, ТГ «Модный сезон», 2 этаж',
            time: 'Пн-Вс: с 10:00 до 22:00',
            phone: '8 926 419 36 33'
        },
    ]

    const placemarks = [];
    const lengthShops = Object.keys(shops).length;
    console.log('lengthShops = ', lengthShops);

    for (let i = 0; i < lengthShops; i++) {
        console.log('shops [' + i + '] = ', shops[i].coords);



        // placemarks[i] = new ymaps.Placemark(shops[i].coords, { style: baseStyle }, {
        placemarks[i] = new ymaps.Placemark(shops[i].coords, {
            balloonContentHeader: `<img src="../dummy/shops/${shops[i].img}" width="100%">`,
            balloonContentBody: ` <div class="item-shop-title">${shops[i].name}</div>` +
                `<div class="item-shop-address">${shops[i].address}</div>` +
                `<div class="item-shop-time">${shops[i].time}</div>`,
            balloonContentFooter: ` <div class="item-shop-phone"> <a href="tel:${shops[i].phone}">${shops[i].phone}</a></div>`,
            hintContent: `${shops[i].name}`
        });

        // placemarks[i].events.add('click', function (e) {
        //     console.log('Клик по метке карты!!!');
        // });

        // Добавим метку на карту.
        myMap.geoObjects.add(placemarks[i]);


        // // открыть балун
        // myMap.balloon.open([55.757131068980215, 37.61711450000001],'Содержимое балуна');
    };


};