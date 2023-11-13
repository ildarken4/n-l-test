import helpers from '../helpers';
import gsap from 'gsap';
import locomotiveScroll from '../main';



function openMenu() {

	return new Promise((resolve) => {
		$('.js-burger').addClass('is-disabled').attr('disabled', true);
		helpers.lockScroll(true, helpers.$header.find('.header__menu_mob'), 'header');

		
		helpers.$header.addClass('is-menu-opened');
		$('.header__menu_mob').removeClass('is-hidden');

		setImmediate(() => {
			helpers.$body.css('padding-right', `${helpers.getScrollbarWidth()}px`);
			helpers.$header.css('right', `${helpers.getScrollbarWidth()}px`);
		});

		setTimeout(() => {
			$('.header__menu_mob').addClass('is-active');
			$('.js-burger').removeClass('is-disabled').attr('disabled', false);

			resolve();
		}, 100);
	});
}

function closeMenu() {
	
	return new Promise((resolve) => {
		$('.js-burger').addClass('is-disabled').attr('disabled', true);

		helpers.lockScroll(false, helpers.$header.find('.header__menu_mob'), 'header');
		helpers.$body.css('padding-right', '');
		helpers.$header.css('right', '');

		helpers.$header.removeClass('is-menu-opened');

		$('.header__menu_mob').removeClass('is-active');

		setTimeout(() => {
				$('.header__menu_mob').addClass('is-hidden');
				$('.js-burger').removeClass('is-disabled').attr('disabled', false);
	
				resolve();
			
			
		}, 500);
	});
}

function toggleMenu(event) {
	event.preventDefault();
	event.stopPropagation();
	if ($(event.currentTarget).hasClass('is-active')) {
		$(event.currentTarget).removeClass('is-active');
		closeMenu();
		locomotiveScroll.start();
	} else {
		$(event.currentTarget).addClass('is-active');
		openMenu();
		locomotiveScroll.stop();
		firstOpenedMenu = true;
	}
}

function init() {
	helpers.$header = $('.header');
	
	$('.js-burger').on('click.header', toggleMenu);
	

	helpers.$document
		.on('click.header', (e) => {
			let $container = $('.header__menu_mob');

			if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
				closeMenu();
				$('.js-burger').removeClass('is-active');
			}
		})
		.on('keyup.header', (e) => {
			if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu_mob').hasClass('is-active')) {
				closeMenu();
				$('.js-burger').removeClass('is-active');
			}
		});
	
}

function destroy() {
	$('.js-burger').off('.header');
	helpers.$document.off('.header');
}

// Переключение пунктов меню во время скролла
var bgLine = $('.header__menu .header__line');
var bgLineMob = $('.header__menu_mob .header__line');
var menuWidth = $('.header__menu').outerWidth(true);
var menuHeight = $('.header__menu_mob').height();
var menuLength = $('.header__menu .header__link').length;
var linkOffset = menuWidth/menuLength
var linkOffsetMob = menuHeight/menuLength


window.addEventListener('scrollEventAbout', (e) => {
	const { target, way, from } = e.detail;

	if (way=='leave' && from == 'end'){
		gsap.to(bgLine, {
			duration: 0.5,
			x: linkOffset*2,
			ease: 'power3.out'
		});
		gsap.to(bgLineMob, {
			duration: 0.5,
			y: linkOffsetMob*2,
			ease: 'power3.out'
		});
	} else if (way=='enter' && from == 'end'){
		gsap.to(bgLine, {
			duration: 0.5,
			x: linkOffset,
			ease: 'power3.out'
		});
		gsap.to(bgLineMob, {
			duration: 0.5,
			y: linkOffsetMob,
			ease: 'power3.out'
		});
	} else if (way=='leave' && from == 'start'){
		gsap.to(bgLine, {
			duration: 0.5,
			x: 0,
			ease: 'power3.out'
		});
		gsap.to(bgLineMob, {
			duration: 0.5,
			y: 0,
			ease: 'power3.out'
		});
	} else if (way=='enter' && from == 'start'){
		gsap.to(bgLine, {
			duration: 0.5,
			x: linkOffset,
			ease: 'power3.out'
		});
		gsap.to(bgLineMob, {
			duration: 0.5,
			y: linkOffsetMob,
			ease: 'power3.out'
		});
	}
});

export default {
	init,
	destroy,
	openMenu,
	closeMenu,
};


