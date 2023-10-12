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
 

    // закрепление хедера скролле
    let scrollPrev = $(window).scrollTop(); 

    $(window).scroll(function () {
        
      let scrollTop = $(window).scrollTop(); 
      let showHeader = $("[data-header]").outerHeight();
       
      if (scrollPrev > scrollTop && scrollTop > showHeader) { 
        $("[data-header-sticky]").css('top', '0');
        return;
      } else {
        $("[data-header-sticky]").css('top', '-7.3rem');
      } 
      
      scrollPrev = scrollTop;
    
    });
});
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
$(document).ready(function () {
    
    //Начальный размер и положение линии переключения слайдеров продукции
    if ($('[data-products-line').length) { 
        let activeButton = $('[data-products-line').parents('[data-products-control]').find('.active')
        animeLineControl(activeButton) 
    }
    
    //Смена размера и положения линии переключения слайдеров продукции при клике на кнопку выбора слайдера
    $(document).on('click', '[data-products-type]', function () {
        if (!$(this).hasClass('active')) {
            $('[data-products-type]').toggleClass('active');
            activeButton = $(this);
            animeLineControl(activeButton)
        } 
    })
    
    //Анимация смены размера и положения линии переключения слайдеров продукции
    function animeLineControl(activeButton) { 
        $('[data-products-line').animate({
            width: activeButton.width() + 40,
            left: activeButton.position().left - 20
        }, 300); 
    } 

});

//Объявление слайдеров продукции
$(document).ready(function () {

    var swiper = new Swiper('[data-products-swiper="durometer"] .swiper', {
      slidesPerView: 3,
      spaceBetween: 30, 
  
    //   pagination: {
    //     el: '[data-products-swiper="durometer"] .swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    //     dynamicMainBullets: 3,
    //   },
    
      navigation: {
        nextEl: '[data-products-swiper="durometer"] .swiper-button-next',
        prevEl: '[data-products-swiper="durometer"] .swiper-button-prev',
      },
    });

  });