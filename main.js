




//!  Carousel   

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 0,
    items: 1,
    responsive: {

        540 : {
            items: 3,
            startPosition: 1,
            
        },

        1200: {
            margin: 30,
            items: 3,
        }


    }

});

$('.slider__btn--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

// Go to the next item
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item


//! Nav Icon

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
menuIcon.classList.toggle('menu-icon-active');
nav.classList.toggle('nav--mobile');
document.body.classList.toggle('no-scroll');
};


