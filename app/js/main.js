$(function(){
	
    $(".menu__link, .logo").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({
          scrollTop: top
      }, 1500);
  });

    $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('hidden');
    });

    $('.menu__link').on('click', function(){
    $('.menu__list').removeClass('menu__list--active');
    $('body').removeClass('hidden');
    });

    $('.header__btn').on('click', function(){
      $('.header__form-input').toggleClass('header__form-input--visibile');
      });
    $('section, .menu__btn').on('click', function(){
      $('.header__form-input').removeClass('header__form-input--visibile');
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
  
  slidesPerView: 1,
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
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 3,
    },
    1360: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1660: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
 });

 const autoExpand = function(field) {
  // Reset field height
  field.style.height = "inherit";

  // Get the computed styles for the element
  const computed = window.getComputedStyle(field);

  // Calculate the height
  const height =
    parseInt(computed.getPropertyValue("border-top-width"), 10) +
    parseInt(computed.getPropertyValue("padding-top"), 10) +
    field.scrollHeight +
    parseInt(computed.getPropertyValue("padding-bottom"), 10) +
    parseInt(computed.getPropertyValue("border-bottom-width"), 10);

  field.style.height = `${height}px`;
};

document.addEventListener(
  "input",
  function(event) {
    if (event.target.tagName.toLowerCase() !== "textarea") return;
    autoExpand(event.target);
  }
);
