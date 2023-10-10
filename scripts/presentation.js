$(document).ready(function () {
    
    // Смена картинки первью на первом экране
    $(document).on('click', '[data-next-preview]', function () {  
        if (!$(this).parents('.elem').hasClass('active')) { 
            $('[data-next-preview]').parents('.elem').toggleClass('active')
        } 
    });

     // Добавить класс для пульсации при ховере на название превью элемента
     $(document).on('mouseenter', '[data-next-preview]', function () { 
        $(this).parents('.title').addClass('hover');
    });

    // Убрать класс для пульсации на название превью элемента по уходу мыши с блока
    $(document).on('mouseleave', '[data-next-preview]', function () { 
        $(this).parents('.title').removeClass('hover');
    });
 
});