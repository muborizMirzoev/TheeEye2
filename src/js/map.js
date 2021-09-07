ymaps.ready(init);

function init() {
   var myMap = new ymaps.Map("map", {
         center: [25.082414, 55.145036],
         zoom: 15
      }, {
         searchControlProvider: 'yandex#search'
      }),

      // Создаем геообъект с типом геометрии "Точка".
      metkaOne = new ymaps.GeoObject({
         // Описание геометрии.
         geometry: {
            type: "Point",
            coordinates: [25.082029, 55.139861]
         },
         // Свойства.
         properties: {
            // Контент метки.
            iconContent: '50 000$',
            hintContent: '50 000$'
         }
      }, {
         // Опции.
         // Иконка метки будет растягиваться под размер ее содержимого.
         preset: 'islands#blackStretchyIcon',
         // Метку можно перемещать.
         draggable: false
      }),

      metkaTwo = new ymaps.GeoObject({
         // Описание геометрии.
         geometry: {
            type: "Point",
            coordinates: [25.076945, 55.133560]
         },
         // Свойства.
         properties: {
            // Контент метки.
            iconContent: '5 000$',
            hintContent: '5 000$'
         }
      }, {
         // Опции.
         // Иконка метки будет растягиваться под размер ее содержимого.
         preset: 'islands#blackStretchyIcon',
         // Метку можно перемещать.
         draggable: false
      }),

      metkaThree = new ymaps.GeoObject({
         // Описание геометрии.
         geometry: {
            type: "Point",
            coordinates: [25.080419, 55.143962]
         },
         // Свойства.
         properties: {
            // Контент метки.
            iconContent: '5 000$',
            hintContent: '5 000$'
         }
      }, {
         // Опции.
         // Иконка метки будет растягиваться под размер ее содержимого.
         preset: 'islands#blackStretchyIcon',
         // Метку можно перемещать.
         draggable: false
      });

   myMap.geoObjects
      .add(metkaOne)
      .add(metkaTwo)
      .add(metkaThree);


   window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth < 768) {
         myMap.behaviors.disable('scrollZoom');
         myMap.behaviors.disable('multiTouch');
         myMap.behaviors.disable('drag');
      }
   });
}