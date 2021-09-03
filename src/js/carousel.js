const carousel = document.querySelector('#carousel')


/* конфигурация */
let width = 269+18; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel.querySelector('.carousel__images');
let listElems = carousel.querySelectorAll('.carousel__item');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
   // сдвиг влево
   position += width * count;
   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
   position = Math.min(position, 0)
   list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
   // сдвиг вправо
   position -= width * count;
   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
   position = Math.max(position, -width * (listElems.length - count));
   list.style.marginLeft = position + 'px';
};

window.addEventListener('resize', () => {
   if (window.innerWidth <= 408) {
      list.style.marginLeft = 0;
   }
})
