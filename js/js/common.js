$(document).ready(function(){

// 	OWL CAROUSEL INIT

	$(function(){

		$('.review-carousel').owlCarousel({
			dots: true,
			nav: false,
			loop: true,
			responsive:{
				0:{
					items:1
				},
				992:{
					items:2,
					margin: 70
				}
			}
		});

		$('.instagram-carousel').owlCarousel({
			nav: false,
			loop: true,
			responsive:{
				0:{
					items:1,
					dots: true
				},
				992:{
					items:3,
					dots: false
				}
			}
		})

	})

// COUNTDOWN INIT

// Timer Init
var storageCountdownReset = "countdownResetTMSv1",
		storageCountdownTime = "countdownTimeTMSv1",
		countdownResetTimeVal = 41,
		nowDateTime = new Date().getTime(),
		countdownReset = localStorage.getItem(storageCountdownReset);
if (countdownReset == null) {
		localStorage.setItem(storageCountdownReset, nowDateTime)
} else {
		if (nowDateTime - countdownReset > countdownResetTimeVal * 60 * 1000) {
				var countdownTime = (new Date).getTime() + 24e5;
				localStorage.setItem(storageCountdownTime, countdownTime);
				localStorage.setItem(storageCountdownReset, nowDateTime);
		}
}

if (localStorage.getItem(storageCountdownTime)) {
		var countdownTime = localStorage.getItem(storageCountdownTime);
} else {
		countdownTime = (new Date).getTime() + 24e5;
}
$('.countdown__wrap').countdown(countdownTime, function (event) {
		$(this).html(event.strftime('%H:%M:%S'));
		var $this = $(this).html(event.strftime(''
				+ '<div class="countdown__item countdown__item--hour">%H</div><div class="countdown__item countdown__item--minute">%M</div><div class="countdown__item countdown__item--second">%S</div>'
		));
}).on('update.countdown', function (e) {
		countdownTime = e.finalDate.getTime();
		localStorage.setItem(storageCountdownTime, countdownTime);
}).on('finish.countdown', function (e) {
		$('.countdown__wrap').countdown('stop');
});


	// $(function(){
	//
	// 	$('.countdown__wrap').countdown('2060/10/10', function(event) {
	// 		var $this = $(this).html(event.strftime(''
	// 			+ '<div class="countdown__item countdown__item--hour">%H</div><div class="countdown__item countdown__item--minute">%M</div><div class="countdown__item countdown__item--second">%S</div>'
	// 		));
	// 	});
	//
	// })

// LAZYLOAD INIT

	//$(function() {
	//	var imgLazy 	= $("img.lazy"),
	//		loadingUrl	= https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.0/assets/ajax-loader.gif;
	//	imgLazy.attr('src', loadingUrl).lazyload();
	//});

	$(function(){
		$('.bg-js').removeClass('bg-js');
	});

// REMOVE CLASS

	$(function(){

		var docWidth = $(document).width();

		if(docWidth > 1200) {
			$('.competition__wrap').find('.row--0').removeClass('row--0');
		}

	})

// SCROLL TO

	$(function(){
		$("[data-toggle=scroll]").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('data-id'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});

});
