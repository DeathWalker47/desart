$(function(){
  
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