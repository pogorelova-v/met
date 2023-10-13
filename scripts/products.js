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



$(document).ready(function () {
  
  //Объявление слайдера продукции
    let slider = new Swiper('.swiper_durometer', {
      slidesPerView: 3,
      spaceBetween: 30,  

      noSwipingClass: 'swiper_product-item',
      
      navigation: {
        nextEl: '[data-products-swiper="durometer"] .swiper-button-next',
        prevEl: '[data-products-swiper="durometer"] .swiper-button-prev',
      },
    });

  });


$(document).ready(function () {
  
  //Объявление слайдера продукции

  $('.swiper_product-item').each( function (i) {  

    new Swiper(this, {
      slidesPerView: 1,
      spaceBetween: 30,  
      
      pagination: {
        el: ".swiper_product-item .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      },

    });

  }); 

});
 