$(document).ready(function(){

    /* lazyload */
    var blazy = new Blazy();

	/* scroll */
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    //product_item open form
    $(".product_item .content .button-m").click(function(){
        $(".product_item").removeClass("active");
        $(this).parent().parent(".product_item").addClass("active");
    });
    $(".product_item .close").click(function(){
        $(".product_item").removeClass("active");
    });

    //модель в форму
    $('.product_item .content .button-m').on('click', function(){
        var prodName = $(this).parent().parent().find('.hidden .vendor_code').text();
        $("input[name='comment']").val(prodName);
    });

});
