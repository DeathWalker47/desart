$(function(){
	
    $(".menu__link, .logo").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({
          scrollTop: top
      }, 1500);
  });

});

AOS.init({
	easing: "linear",
	disable: 'mobile',
	duration: 800,
	offset: 200,

});

let center = [56.13821608478914,47.274704757949756];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 16
	});

  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);

new Swiper('.team-slider',{
  loop:true,
  
  slidesPerView: 5,
  speed: 600,
	spaceBetween: 30,
	grabCurcor: true,
	keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
	// mousewheel: {
  //   invert: true,
  // },
	autoplay: {
		delay: 8000,
	},
	slidesPerGroup: 1,
	pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
 });