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