$(document).ready(function(){

$('.slider__main').slick({

    arrows: true,
    prevArrow:"<div class='visible-lg slick-prev'><img src='./img/prev page.png'></div>",
    nextArrow:"<div class='visible-lg slick-next'><img src='./img/Next page.png' class='rotate'></div>",
});


// $('.slider__one').slick({
//     cssEase: 'linear',
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     prevArrow: "<div class='visible-lg slick-prev'><img src='./img/Vector_4.png'></div>",
//     nextArrow: "<div class='visible-lg slick-next'><img src='./img/Vector_4.png' class='rotate'></div>",
// });
});
$(document).ready(function(){
    $("#top").hide();
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 1300) {
                $('#top').fadeIn();
            } else {
                $('#top').fadeOut();
            }
        });

        $('#top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });         
            
            
    
    });