$(window).scroll(function () {
	if ($(window).scrollTop() >= 100) {
		$('.lift').addClass('active');
	} else {
		$('.lift').removeClass('active');
	}
});
// hashtag Smooth scrolling
var $clickTag = $('a.gotheme');
$clickTag.click(function () {
	var target = $(this.getAttribute('href'));
	if ($(window).width() < 768) {
		if (target.length) {
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 50
			}, 300);
		}
		return false;
	} else {
		if (target.length) {
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 300);
		}
		return false;
	}
});

// header 漢堡 觸發選單
$('header .hamburg').click(function () {
	$('body').toggleClass("mobile-nav-open");
	$(this).children().toggleClass("change");
	$('.mobile-nav').toggle();
});
// header 漢堡 觸發細項展開
$('.mobile-various li').click(function () {
	$(this).siblings().children('.mobile-dropdown-content').hide();
	$(this).find('i').toggleClass("active");
	$(this).children('.mobile-dropdown-content').toggle();
});

// scrollreveal
window.sr = ScrollReveal({
	duration: 750, // 動畫時間
	mobile: true, // 支援行動裝置
	reset: false, // 每次都啟動動畫
	useDelay: "always", // 延遲動畫次數
	viewFactor: 0.35 // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
});
sr.reveal(".topAnimate", {
	origin: 'top',
	distance: '50px'
});
sr.reveal(".bottomAnimate", {
	origin: 'bottom',
	distance: '50px'
});
sr.reveal(".leftAnimate", {
	origin: 'left',
	distance: '50px',
});
sr.reveal(".rightAnimate", {
	origin: 'right',
	distance: '50px',
});

// BANNER輪播
var banner_swiper = new Swiper('.banner .swiper-container', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	pagination: {
		el: '.swiper-pagination',
	},
});

// 底部輪播
var promotions_swiper = new Swiper('.promotions .swiper-container', {
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},
	loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 27.5,
		},
	},
})