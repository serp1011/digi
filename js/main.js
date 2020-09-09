$(function(){
	
	$('.top-slider').slick({
		prevArrow: '<button class="slider-btn slider-btn__left"><svg width="21" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5441 21.239L0.34375 11.0386L10.5261 0.856275L12.7928 3.12303L4.87325 11.0426L12.8069 18.9763L10.5441 21.239Z"/></svg></button>',
		nextArrow: '<button class="slider-btn slider-btn__right"><svg width="21" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5441 21.239L0.34375 11.0386L10.5261 0.856275L12.7928 3.12303L4.87325 11.0426L12.8069 18.9763L10.5441 21.239Z"/></svg></button>',
		infinite: false,
		slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: true,
		responsive: [
	    {
	      breakpoint: 640,
	      settings: {
	        arrows: false,
	      }
	    },
	  ]
	});
	
/*	var img = $(".news__item > img");
	$(".news__item").css({width:img.width(), height:img.height()});*/
	
	$('.testimonials-slider').slick({
		infinite: false,
		slidesToShow: 1,
	  slidesToScroll: 1,
		dots: true,
		arrows: false,
	});

	$('.menu__btn').click(function(){
		$(this).toggleClass("menu__btn--active");
		$('.menu__toggle').toggleClass("menu__toggle--active");
/*		$('.menu__toggle').slideToggle();*/
	});

	$('.menu__toggle-link').click(function(){
			$('.menu__toggle').removeClass('menu__toggle--active');
			$('.menu__btn').removeClass('menu__btn--active');
	});
	
	$('.call__btn').magnificPopup({
		showCloseBtn: false,
		mainClass: 'mfp-fade',
		removalDelay: 300,
		callbacks: {
	    open: function() {
	      $('html').css('overflow', 'scroll').css('margin-right', '0');
   		},
  	}
	});

	$(document).on('click', '.popup-modal-dismiss', function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	
	$('.call__modal-submit').click(function(){
		$.magnificPopup.close();
	});


});