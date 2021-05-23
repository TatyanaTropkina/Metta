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
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 551,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.blog__btn').on('click', function () {
		$('.blog__form').toggleClass('show');
	});
	$('.gallery-slider').slick({
		slidesToShow: 4,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnFocus: true,
		pauseOnHover: true,
		swipe: true,

		responsive: [{
				breakpoint: 1101,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 551,
				settings: {
					slidesToShow: 1,
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

	if ($(window).width() < 767) {


		$('.drink__list-item:nth-child(odd)').addClass('animate__animated animate__fadeInRightBig wow');
		$('.drink__list-item:nth-child(even)').addClass('animate__animated animate__fadeInLeftBig wow');

	
		$('.section__content').removeClass('animate__animated animate__fadeInLeftBig wow animated');
		$('.section__content').removeClass(' animated');

		$('.section__content').removeAttr('data-wow-offset');

		$('.adapt__title-left, .adapt__title-right').attr('data-wow-offset' , '100');
		$('.gallery__title').attr('data-wow-offset' , '100');
		$('.works__energy-anim , works__stressed-anim').removeAttr('data-wow-offset')
	}
});


new WOW().init();