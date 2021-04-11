$(document).ready(function () {

    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });

    times = function(){
        now = new Date();
        hour = 24-now.getHours();
        hour = ((hour+'').length==1?hour='0'+hour:hour)+'';
        minu = 60-now.getMinutes();
        minu = ((minu+'').length==1?minu='0'+minu:minu)+'';
        secu = 60-now.getSeconds();
        secu = ((secu+'').length==1?secu='0'+secu:secu)+'';
        $('.timer').html(''+
          '<div class="timer-item">'+
          '<div class="count">'+hour+'</div>'+
          '<div class="text">Часов</div>'+
          '</div>'+
          '<div class="timer-item">'+
          '<div class="count">'+minu+'</div>'+
          '<div class="text">Минут</div>'+
          '</div>'+
          '<div class="timer-item">'+
          '<div class="count">'+secu+'</div>'+
          '<div class="text">Секунд</div>'+
          '</div>');
    };
    times();
    setInterval(times,1000);


    $('.slider-result').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1600
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1600
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1600
                }
            }
        ]
    });

    $('.slider-rev').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    adaptiveHeight: true
                }
            }
        ]
    });


});

