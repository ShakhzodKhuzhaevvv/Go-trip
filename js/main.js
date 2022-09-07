const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 30,
	startPosition: 1,
	items: 3,
	responsive: {
		320: {
			startPosition: 1,
			items:3,
			margin:10,
		},
		650: {
			startPosition: 1,
			items:3,
			margin:20,
		},
		850: {
			startPosition: 1,
			items:3,
			margin:20,
		},
		1000: {
			margin:20,
			items: 3,
		},
		1200: {
			margin:30,
		},
	},
});

$('.slider_btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider_btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});


// burger menu
const burger = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const lists = document.querySelectorAll('.nav__list');

burger.addEventListener('click', () => {
	nav.classList.toggle('open')
})

lists.forEach(elem => {
elem.addEventListener('click', () => {
nav.classList.remove('open')
})
})