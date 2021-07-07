$(function () {
	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('open');
		$(this).toggleClass('open');
		$('.header').toggleClass('gradient');
	});
	$(window).scroll(function () {
		$('.menu__list').removeClass('open');
		$('.header').removeClass('gradient');
		$('.menu__btn').removeClass('open');

	});
	let btn = $(".menu__btn");
	let menu = $(".menu__list");

	$(document).mouseup(function (e) {
		if (!btn.is(e.target) && btn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
			$('.header').removeClass('gradient');
			$('.menu__btn.open').removeClass('open');
		}
	});
	$('.benefits-slider').slick({
		slidesToShow: 3,
		arrows: false,
		// autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 581,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 401,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			}
		]
	});

	// $('.blog__btn').on('click', function () {
	// 	$('.blog__form').toggleClass('show');
	// });
	$('.gallery-slider').slick({
		slidesToShow: 4,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 2500,
		swipe: true,
		responsive: [{
				breakpoint: 1101,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 551,
				settings: {
					slidesToShow: 2,
					
				}
			},
			{
				breakpoint: 351,
				settings: {
					slidesToShow: 1,
					centerMode: true,
				}
			}
		]

	});
	var reviews = $('.reviews');

	$(window).scroll(function () {
		if ($(this).scrollTop() > reviews.offset().top - 200) {
			reviews.addClass('anim');
		}
	});

	let drinkItem = $('.drink__list-item');
	$(window).scroll(function () {
		if ($(this).scrollTop() > drinkItem.offset().top - 50) {
			drinkItem.addClass('anim');
		}
	});
	let drinkBg = $('.drink__img-bg')
	$(window).scroll(function () {
		if ($(this).scrollTop() > drinkBg.offset().top - 450) {
			drinkBg.addClass('anim');
		}
	});
	let blogBtn = $('.blog__btn');
		let blogForm = $('.blog__form');
		// blogForm.hide();


	$(window).scroll(function () {
		if ($(this).scrollTop() > blogBtn.offset().top - 400) {
			blogBtn.addClass('anim');
		
			blogForm.css('opacity', '1');
		}
	});
	// let blogForm = $('.blog__form')
	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > blogForm.offset().top - 250) {
	// 		blogForm.addClass('anim');
	// 	}
	// });
	$(document).ready(function(){
		$('.header__content-img').addClass('animate__animated animate__fadeInUpBig');
		$('.adapt__title-left').addClass('animate__animated animate__fadeInRightBig wow')
		$('.adapt__title-left').attr('data-wow-offset', '300')
		$('.adapt__title-right').addClass('animate__animated animate__fadeInLeftBig wow')
		$('.adapt__title-right').attr('data-wow-offset', '100')
		
		$('.gallery__title-img').addClass('animate__animated animate__fadeInLeftBig wow')
		$('.gallery__title-img').attr('data-wow-offset', '100');

		$('.drink__img').addClass('animate__animated animate__zoomIn wow');
		$('.drink__img').attr({
			"data-wow-offset": "350",
			"data-wow-delay": "1s"
		});



	})
	// if ($(window).width() < 767) {

	// 	$('.drink__list-item:nth-child(even)').addClass('animate__animated animate__fadeInLeftBig wow');
	// 	$('.section__content').removeClass('animate__animated animate__fadeInLeftBig wow animated');
	// 	$('.section__content').removeClass(' animated');
	// 	$('.section__content').removeAttr('data-wow-offset');
	// 	$('.adapt__title-left, .adapt__title-right').attr('data-wow-offset' , '100');
	// 	$('.gallery__title').attr('data-wow-offset' , '100');
	// 	$('.works__energy-anim , works__stressed-anim').removeAttr('data-wow-offset')
	// }
});

$(function () {
	 if ($(window).width() < 767) {
		$('.drink__list').removeClass('animate__animated animate__fadeInRightBig wow');
		$('.drink__list').removeAttr('data-wow-offset' , '280');

		$('.drink__list-item:nth-child(odd)').addClass('animate__animated animate__fadeInRightBig wow');
		$('.drink__list-item:nth-child(even)').addClass('animate__animated animate__fadeInLeftBig wow');


		$('.drink__list-item:nth-child(odd)').attr('data-wow-offset' , '200');
		$('.drink__list-item:nth-child(even)').attr('data-wow-offset' , '200');

	 }
	
	
	
	
});
$(function () {
	$(document).ready(function () {
		new WOW().init();
	});
});