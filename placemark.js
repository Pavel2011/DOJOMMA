ymaps.ready(init)
function init() {
  let myMap = new ymaps.Map('ah-map', {
    center: [55.80146, 37.63765],
    zoom: 16,
  })

  let placemark = new ymaps.Placemark(
    [55.80146, 37.63765],
    {
      // baloonContentHeader:'ООО Агрохолдинг',
      // balloonContentBody:'ООО \"Агрохолдинг\"'
      balloonContent: `
  <div class='balloon'>
  <div class='ball-name'>Клуб восточных единоборств \"DojoMMA\"</div>
  <div class='ball-phone'>Телефон\:Алексей Лавинчук +7 926 230 7664, 
         </div>
  <div class='ball-phone'>Телефон\:...  + 7 ...</div>
  <div class='ball-address'>Адрес\:Москва, проспект Мира 102, с12</div>
  </div>
  `,
    },
    {
      iconLayout: 'default#image',
      // iconImageHref:'',
      iconImageSize: [40, 30],
      iconImageOffset: [-10, 0],
    }
  )

  myMap.controls.remove('geolocationControl') // удаляем геолокацию
  myMap.controls.remove('searchControl') // удаляем поиск
  myMap.controls.remove('trafficControl') // удаляем контроль трафика
  myMap.controls.remove('typeSelector') // удаляем тип
  myMap.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
  // myMap.controls.remove('zoomControl') // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl') // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
  myMap.geoObjects.add(placemark)
  placemark.balloon.open()
}
