$(document).ready(function (){

    if($(window).width() > 768) {
        function isElementInViewport(el) {

            // Проверяем на использование jQuery
            if (typeof jQuery === "function" && el instanceof jQuery) {
                el = el[0];
            }

            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
            );
        }

        function isElementPartiallyInViewport(el) {
            // Проверяем на использование jQuery
            if (typeof jQuery !== 'undefined' && el instanceof jQuery)
                el = el[0];

            var rect = el.getBoundingClientRect();

            var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            var windowWidth = (window.innerWidth || document.documentElement.clientWidth);


            var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
            var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

            return (vertInView && horInView);
        }

        function fnIsVis(ele, a) {
            var inVpFull = isElementInViewport(ele);
            var inVpPartial = isElementPartiallyInViewport(ele);


            if (inVpPartial) {
                if (typeof jQuery !== 'undefined' && ele instanceof jQuery) {
                    ele.addClass("normalize");

                } else {
                    ele.classList.add("normalize");
                }

            clearInterval(a);

            }
            console.log("Fully in viewport: " + inVpFull);
            console.log("Partially in viewport: " + inVpPartial);

        }


        let timerId = setInterval(() => fnIsVis($('.programs__item'), timerId), 500);

        let timerId2 = setInterval(() => fnIsVis($('.service__content-block')[3], timerId2), 500);

        let timerId3 = setInterval(() => fnIsVis($('.service__content-block')[0], timerId3), 500);

        let timerId4 = setInterval(() => fnIsVis($('.service__content-block')[1], timerId4), 500);

        let timerId5 = setInterval(() => fnIsVis($('.service__content-block')[2], timerId5), 500);
    }


    ScrollReveal().reveal('.service__content-block', {distance: '50px', origin: 'right' });

    ScrollReveal().reveal('.programs__item', {distance: '50px', interval: 300 });

    ScrollReveal().reveal('.swiper-slide-active .index_slider__text', { delay: 500 });

});


