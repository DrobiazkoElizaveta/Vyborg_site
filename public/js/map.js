ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [60.710497, 28.749784], // Координаты города Выборг
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([60.714809, 28.748976], {
        balloonContentHeader: 'Автовокзал',
        balloonContentBody: '<img src="./img/monuments/автовокзал.png" style="width: 70px;">',
        iconContent: '<img src="./img/monuments/автовокзал.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.711272, 28.737775], {
        balloonContentHeader: 'Аллея звезд',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/аллеязвезд.png" style="width: 40px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.708147, 28.738271], {
        balloonContentHeader: 'Аллея статуй',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/аллеястатуй.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.719617, 28.723714], {
        balloonContentHeader: 'Анненские укрепление',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/аннинские.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.716997, 28.725101], {
        balloonContentHeader: 'Памятник Ф.М. Апраксину',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/апраксин.png" style="width: 40px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.705219, 28.755575], {
        balloonContentHeader: 'Батарейная гора',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/батарейнаягора.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.710390, 28.734710], {
        balloonContentHeader: 'Башня ратуши',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/башняратуши.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.709027, 28.747384], {
        balloonContentHeader: 'Библиотека А.Аалто',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/библиотека.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.715450, 28.751052], {
        balloonContentHeader: 'ЖД вокзал',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/вокзал.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.715852, 28.728593], {
        balloonContentHeader: 'Выборгский замок',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/выборгскийзамок.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.711684, 28.746152], {
        balloonContentHeader: 'Гостиница "Выборг"',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/гостиницавыборг.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.715462, 28.745575], {
        balloonContentHeader: 'Гостиница "Дружба"',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/гостиницадружба.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.712603, 28.729912], {
        balloonContentHeader: 'Дом Дагермана',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/домдагермана.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.710670, 28.733273], {
        balloonContentHeader: 'Руины доминиканского собора',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/доминиканский.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.711880, 28.731762], {
        balloonContentHeader: 'Дом купеческой Гильдии',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/домкупечества.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.712583, 28.751961], {
        balloonContentHeader: 'Дом Хякли, Лаллукка и Ко',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/домлаллуки.png" style="width: 40px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.713993, 28.733930], {
        balloonContentHeader: 'Дом на скале',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/домнаскале.png" style="width: 40px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.714654, 28.732348], {
        balloonContentHeader: 'Дом Хакмана',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/домхакмана.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.715244, 28.745229], {
        balloonContentHeader: 'Драккары викингов',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/драккары.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.715347, 28.723940], {
        balloonContentHeader: 'Здание архива',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/зданиеархива.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.713506, 28.739316], {
        balloonContentHeader: 'Здание городского банка',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/зданиебанка.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.713838, 28.733121], {
        balloonContentHeader: 'Костел Св. Гиацинта',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/костелсвятого.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.712969, 28.737378], {
        balloonContentHeader: 'Круглая башня',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/круглаябашня.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.710730, 28.750156], {
        balloonContentHeader: 'Памятник В. Ленину',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/ленин.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.712422, 28.730269], {
        balloonContentHeader: 'Здание ломбарда',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/ломбард.png" style="width: 30px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.709627, 28.747111], {
        balloonContentHeader: 'Скульптура "Лось"',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/лось.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.705452, 28.748615], {
        balloonContentHeader: 'Памятник Максиму Горькому',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/максимгорький.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.711858, 28.738644], {
        balloonContentHeader: 'Памятник Миакэлю Агриколе',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/микаэль.png" style="width: 40px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.710163, 28.741022], {
        balloonContentHeader: 'Военный музей Карельского перешейка',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/музей.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.708592, 28.738129], {
        balloonContentHeader: 'Бастион Панцерлакс',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/панцерлакс.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.716996, 28.722408], {
        balloonContentHeader: 'Памятник Петру I',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/петрпервый.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.707419, 28.745074], {
        balloonContentHeader: 'Площадь Выборгских полков',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/площадьполков.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.714215, 28.730117], {
        balloonContentHeader: 'Площадь Старой Ратуши',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/площадьратуши.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.712027, 28.729622], {
        balloonContentHeader: 'Здание порта',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/порт.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.711182, 28.742985], {
        balloonContentHeader: 'Ресторан «Эспиля»',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/ресторанэспиля.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.713109, 28.730681], {
        balloonContentHeader: 'Руины кафедрального собора',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/руинысобора.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.714163, 28.736853], {
        balloonContentHeader: 'Здание рынка',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/рынок.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.711412, 28.753396], {
        balloonContentHeader: 'Сад скульптур',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/садскульптур.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.712087, 28.738353], {
        balloonContentHeader: 'Собор С. Петра и Павла',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/соборпп.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.710090, 28.739378], {
        balloonContentHeader: 'Спасо-Преображенский собор',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/спасособор.png" style="width: 80px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.710786, 28.754443], {
        balloonContentHeader: 'Страховая компания «Карьяла»',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/страховая.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.714250, 28.730258], {
        balloonContentHeader: 'Памятник Торгильсу Кнутссону',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/торкелькнутссон.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.711669, 28.736895], {
        balloonContentHeader: 'Памятник трамваю',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/трамвай.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.713663, 28.734165], {
        balloonContentHeader: 'Усадьба Бюргера',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/усадьбабюргера.png" style="width: 70px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.712899, 28.731864], {
        balloonContentHeader: 'Часовая башня',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/часоваябашня.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.708605, 28.737303], {
        balloonContentHeader: 'Эрмитаж-Выборг',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/эрмитаж.png" style="width: 90px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

    myPlacemark = new ymaps.Placemark([60.710699, 28.743648], {
        balloonContentHeader: 'Скульптура "Юный лесник"',
        balloonContentBody: '',
        iconContent: '<img src="./img/monuments/юныйлесник.png" style="width: 50px;">'
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'your_image_url.jpg',
        iconImageSize: [100, 100],
        iconImageOffset: [-25, -25]
    });
   
    myMap.geoObjects.add(myPlacemark);

}