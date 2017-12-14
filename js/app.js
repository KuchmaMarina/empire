$(document).ready(function(){
    $('.slider__elem').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:2000
    });
});

$(document).ready(function(){
    $(".hamburger-nav").on("click", function(){
        $(".menu").animate({
            height: 'toggle'
        });
    });
});

$(document).ready(function(){
    $(".menu__links").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1700);
    });
});

$(document).ready(function() {
    $('.slider__button').click( function(event){
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){
                $('.modal')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    $('.modal__close, .overlay').click( function(){
        $('.modal')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
    });
});