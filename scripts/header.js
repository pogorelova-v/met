$(document).ready(function () {
    
    // Открыть главное подменю по ховеру
    $(document).on('mouseenter', '[data-nav-btn]', function () { 
        $(this).addClass('active');  
        $(this).children('[data-nav-sublist]').stop().slideDown();
    });

    // Закрыть главное подменю по уходу мыши с блока
    $(document).on('mouseleave', '[data-nav-btn]', function () { 
        $(this).remove('active');  
        $(this).children('[data-nav-sublist]').stop().slideUp();
    });

    //Смена текста у переключателя языка
    $(document).on('click', '[data-language-switch]', function () { 
 
        $(this).find('span').text($(this).attr('data-language-switch-new'));
        $(this).find('svg').toggleClass('rotate');
        $(this).attr('data-language-switch-new',  $(this).attr('data-language-switch')); 
        $(this).attr('data-language-switch',  $(this).find('span').text());  
    });
});