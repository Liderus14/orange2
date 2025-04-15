const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// Обработчики событий для открытия модального окна
document.getElementById('openModalButton1').onclick = function() {
    modal.style.display = "block";
};
document.getElementById('openModalButton2').onclick = function() {
    modal.style.display = "block";
};

// Закрытие модального окна при клике на крестик
span.onclick = function() {
    modal.style.display = "none";
};

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};