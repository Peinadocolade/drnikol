$(document).ready(function () {

	$('[data-toggle="scroll"]').on("click", function (e) {
		var anchor = $(this).attr("data-id");
		var bodyLeft = $("body").css("left");
		if (bodyLeft == "200px") {
			$("body").animate({
				left: "-=200px"
			}, 500);
		}
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top
		}, 1000);
		e.preventDefault();
	});


	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('#countdown-1').timeTo({
		seconds: 2400,
		displayCaptions: false,
		lang: 'ru',
		displayHours: true
	});

	$('#countdown-2').timeTo({
		seconds: 2400,
		displayCaptions: false,
		lang: 'ru',
		displayHours: true
	});


});