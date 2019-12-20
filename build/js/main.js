$(document).ready(function () {

  // Обработка переключения табов
  $('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'); // Получили значение атрибута data-tab у текущего элемента
    var content = $('.js-tab-content[data-tab="'+ id +'"]'); // Находим вкладку с этим же аттриботом

    $('.js-tab-trigger.js-active').removeClass('js-active'); // Удалили класс active у активной вкладки
    $(this).addClass('js-active'); // Добавили класс active вкладке по которой кликнули

    // Удалили класс active у активного контейнера с содержимым
    $('.js-tab-content.js-active').removeClass('js-active'); // Удалили класс active у активного контейнера с содержимым
    content.addClass('js-active'); // Добавили класс active контейнеру который должен быть активным
  });

});
