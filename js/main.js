	
$(function(){
$(document).ready(function () {
			let $preloader = $('.preloader'),
			$loader = $preloader.find('.preloader__loader');
			$loader.fadeOut();
			$preloader.delay(250).fadeOut(200);
	});
});

$(function () {
	let menu = $('.menu__list');
	let menuBtn = $('.menu__btn');
	let menuLink = $('.menu__list-link');
	let header = $('.header');

	$(menuBtn).on('click', function () {
		$(menu).toggleClass('open');
		$(this).toggleClass('open');
		$(header).toggleClass('gradient');
	});
	$(menuLink).on('click', function(){
		$(menu).removeClass('open');
		$(header).removeClass('gradient');
		$(menuBtn).toggleClass('open');

	})
	$(document).mouseup(function (e) {
		if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
			!menu.is(e.target) && menu.has(e.target).length === 0
		) {
			menu.removeClass('open');
			$(header).removeClass('gradient');
			$(menuBtn).removeClass('open');
		}
	});
	$(window).scroll(function () {
		let scrollTop = $(window).scrollTop();
		if (scrollTop > 500) {
            $(menuBtn).removeClass('open');
            $(menu).removeClass('open');
			$(header).removeClass('gradient');
        }
    });
});
$(function (){
	$(document).ready(function(){
		
		$('.header__content-img').addClass('animate__animated animate__fadeInUp')

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

	});
	$(document).ready(function(){

		if ($(window).width() < 769) {
			$('.section__content').addClass('animate__animated animate__fadeInUp wow');
			$('.section__content').attr('data-wow-offset' , '100');

			$('.drink__list-name').addClass('animate__animated animate__fadeInRightBig wow');
			$('.drink__list-name').attr('data-wow-offset' , '200');

			$('.drink__list-descr').addClass('animate__animated animate__fadeInLeftBig wow');
			$('.drink__list-descr').attr('data-wow-offset' , '200');
	
			$('.blog__item').addClass('animate__animated animate__fadeInUp wow')

		}else{
			$('.section__content').addClass('animate__animated animate__fadeInRight wow');
			$('.drink__list').addClass('animate__animated animate__fadeInLeft wow');
			$('.drink__list').attr('data-wow-offset' , '280');
			$('.blog__item-box').addClass('animate__animated animate__fadeInUp wow')
		}
	})
});
$(function () {
	
	let drinkBg = $('.drink__img-bg')
	$(window).scroll(function () {
		if ($(this).scrollTop() > drinkBg.offset().top - 450) {
			drinkBg.addClass('anim');
		}
	});
	let blogBtn = $('.blog__btn');
	let blogForm = $('.blog__form');

	$(window).scroll(function () {
		if ($(this).scrollTop() > blogBtn.offset().top - 400) {
			blogBtn.addClass('anim');
		
			blogForm.css('opacity', '1');
		}
	});
});
$(function (){
	$('.benefits-slider').slick({
		slidesToShow: 3,
		arrows: false,
		autoplay: true,
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

	$('.gallery-slider').slick({
		slidesToShow: 4,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2500,
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
});
$(function () {
	$(document).ready(function () {
		new WOW().init();
	});
});