$(function() {
	$(window).scroll(function(){
		winH = $(window).height()
		winScr = $(window).scrollTop()
		// if(winScr>0){
		// 	$('.header').addClass('scrolled')
		// } else {
		// 	$('.header').removeClass('scrolled')
		// }
		var sliderBlock = $('.sec').offset().top + winH
		if (winScr >= sliderBlock) {
			$('.third .img .block').css('left','-105%')
			console.log('run')
		} else {
			$('.third .img .block').css('left','0')
		}

		//opacity slider
		var opacityVar = 1 - (winScr/winH)
		opacityVar = opacityVar * 1.3
		if (opacityVar >= 1) { opacityVar = 1 }
		$('.full').css('opacity',opacityVar)

		var sliderHeight = 50 + (50 * (winScr / $('.full').height()))
		$('.one .vertical-align').css('top', sliderHeight + '%')

	});

})

// (1-($(window).scrollTop()/$(window).height()))*1.3

// ($(window).scrollTop() / $('.full').height())