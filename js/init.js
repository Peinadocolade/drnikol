$(function(){

  /* lazy load */
  var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
    });

  $('a[href^="#"]').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
    return false;
  });

  $("img.panorama").panorama();

  $('a.open-popup').click(function(){
    var itemCard = $(this).closest('.card'),
        orderTitle = itemCard.find(".card-info__title").text(),
        orderCode = $(this).siblings(".card-info__char").find("dd:first").text();

    $(".popup-w").fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css('opacity','0.8');
    $(".card-order").find('.card-order__title').text(orderTitle);
    $(".card-order").find('.card-order__code').text("Артикул: " + orderCode);
    $(".card-order input[name='comment']").val(orderTitle.replace(/[«»]/g,'') + ' (артикул: ' + orderCode + ')');                          
    $('.card-order__close, #overlay').click(function () {
          $('.popup-w').fadeOut(100);
          $('#overlay').remove();
          return false;
      });
          $('.popup-w').click(function(e){
          e.stopPropagation();    
      });
      return false;
  });

});
$(window).on("load", function(){
  $('.card-gallery').slick({
    dots: true,
    infinite: true,
    speed: 250,
    fade: false,
    cssEase: 'linear'
  });
});