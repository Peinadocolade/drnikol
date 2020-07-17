if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1     
    var dpt = window.devicePixelRatio;
    var widthM = window.screen.width * dpt;
    document.write('<meta name="viewport" content="width=' + 480 + '">');
}

$(function(){
    var timerH = '0' + 2;
    var timerM = 12;
    var timerS = 16;
    $('.hours').text(timerH);
    $('.mins').text(timerM);
    $('.secs').text(timerS);

    $('.timer').simpletimer({
         day: 0,
         dayDom: '.day',
         hour: timerH,
         hourDom: '.hours',
         minute: timerM,
         minuteDom: '.mins',
         second: timerS,
         secondDom: '.secs',
         millisecond: 0,
         millisecondDom: '.timer-millisecond',
         pause: '#pause_btn'
       });

    // $('.slider__block-left').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     dots:true,
    //     autoplay: true,
    // });

    $('.reviews__slider').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        autoplayTimeout: 5000,
        navText: '',
        navContainer: '.reviews__nav'
    });

    $('a').click(function(){
      if($(this).attr('href').charAt(0) == "#"){

        var bl = $('.shadow__wrapper');

        var blDur = parseFloat(bl.css('animation-duration'));
        var target = $(this).attr('href');
        var dest = $(target).offset().top;

        setTimeout(function(){
            $('html,body').animate({scrollTop: dest}, 1);
        }, blDur * 1000 / 2);

        bl.addClass('active');

        setTimeout(function(){
            bl.removeClass('active');
        }, blDur * 1000);

          return false; 
      }
  });


    $('.faq__semiTitle').on('click', function(){
        if($(this).next('.faq__text').is(':hidden')){
            $('.faq__semiTitle').not(this).next('.faq__text').slideUp(200);
            $('.faq__semiTitle').not(this).find('.arrd').removeClass('active');
            $(this).next('.faq__text').slideDown(200);
            $(this).find('.arrd').addClass('active');
        } else {
            $('.faq__semiTitle').next('.faq__text').slideUp(200);
            $('.faq__semiTitle').find('.arrd').removeClass('active');
        }
    });
});