var swiper = new Swiper(".slide-content", {

    slidesPerView: 3,

    spaceBetween: 25,

    loop: true,

    centerSlide: 'true',

    fade: 'true',

    grabCursor: 'true',

    autoplay: {

        delay: 3500,

        disableOnInteraction: false,

      },

    pagination: {

      el: ".swiper-pagination",

      clickable: true,

      dynamicBullets: true,

    },

    navigation: {

      nextEl: ".swiper-button-next",

      prevEl: ".swiper-button-prev",

    },



    breakpoints:{

        0: {

            slidesPerView: 1,

        },

        660: {

            slidesPerView: 2,

        },

        950: {

            slidesPerView: 3,

        },

    },

  });

  const currentDate = new Date()

  // Форматируем дату в нужный формат
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  document.getElementById('currentDate').innerText = currentDate.toLocaleString(
    'ru-RU',
    options
  );



  // Модальное окно
// Получение элементов DOM
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const openModalBtn1 = document.getElementById('openModal1');
const openModalBtn2 = document.getElementById('openModal2');
const openModalBtn3 = document.getElementById('openModal3');
const closeButtons = document.querySelectorAll('.close');
const closeButtons1 = document.querySelectorAll('.close__popup');

// Открываем модальное окно при клике на соответствующую кнопку
openModalBtn1.addEventListener('click', () => {
    modal1.style.display = 'block';
});

openModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'block';
});

openModalBtn3.addEventListener('click', () => {
    modal3.style.display = 'block';
});

// Закрываем модальное окно при клике на крестик
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    });
});
closeButtons1.forEach(button => {
    button.addEventListener('click', () => {
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    });
});

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 ) {
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    }
};
  // конец модального окна
