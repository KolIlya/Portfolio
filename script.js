function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};

$(document).ready(function() {
    function initializeSlider() {
        var sliderConfig = {
            slideWidth: 380,
            minSlides: 1,
            maxSlides: 6,
            slideMargin: 20,
            pager: true,
            controls: false,
        };

        if ($(window).width() < 400) {
            sliderConfig.minSlides = 1;
            sliderConfig.maxSlides = 1;
            sliderConfig.slideWidth = 350;
        } else if ($(window).width() < 770) {
            sliderConfig.minSlides = 2;
            sliderConfig.maxSlides = 2;
            sliderConfig.slideWidth = 350;
        } else if ($(window).width() < 1024) {
            sliderConfig.minSlides = 2;
            sliderConfig.maxSlides = 2;
            sliderConfig.slideWidth = 480;
        } else if ($(window).width() < 1500) {
            sliderConfig.minSlides = 2;
            sliderConfig.maxSlides = 2;
            sliderConfig.slideWidth = 700;
        }

        // Уничтожаем существующий слайдер, если он есть
        if ($.fn.bxSlider) {
            if ($('.slider1').data('bxSlider')) {
                $('.slider1').data('bxSlider').destroySlider();
            }
        }

        // Инициализируем новый слайдер
        $('.slider1').bxSlider(sliderConfig);
    }

    // Инициализация слайдера при загрузке страницы
    initializeSlider();

    // Обработчик события resize
    $(window).resize(function() {
        initializeSlider();
    });
});