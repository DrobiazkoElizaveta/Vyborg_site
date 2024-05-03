// const MapElement = require("../models/monuments");

// ymaps.ready(function() {
//     var myMap = new ymaps.Map("map", {
//         center: [60.710497, 28.749784], // Координаты города Выборг
//         zoom: 17
//     });

//     MapElement.getMapElements((err, data) => {
//         if (err) {
//             console.error(err);
//         }

//         data.forEach(item => {
//             var placemark = new ymaps.Placemark([item.latitude, item.longitude], {
//                 balloonContentHeader: `<strong>${item.name}</strong>`,
//                 balloonContentBody: `<img src="${item.description_image_url}" style="width: 150px;"><p style="color: black; text-align: justify;">${item.description}</p>`,
//                 iconContent: `<img src="${item.main_image_url}" style="width: 70px;">`
//             }, {
//                 iconLayout: 'default#imageWithContent',
//                 iconImageHref: 'your_image_url.jpg',
//                 iconImageSize: [100, 100],
//                 iconImageOffset: [-25, -25]
//             });
//             // myMap.geoObjects.add(placemark);
//         });
//     });
// });

