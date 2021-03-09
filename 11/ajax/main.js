const formElem = document.querySelector('.js-form');
const text = document.querySelector('.intro');
const langFrom = document.querySelector('.js-lang-from');
const langTo = document.querySelector('.js-lang-to');    
const translateExitBlockElem = document.querySelector('.js-translate');

getTranslate = function(ev) {
  ev.preventDefault();

  const API_KEY = 'trnsl.1.1.20200403T221457Z.c9c098443d6cf306.144500b869646c6e743fe77e7f6650bf26010869';
  const ADRESS_TO_REQUEST = 'https:/translate.yandex.net/api/v1.5/tr.json/translate';
  const req = new XMLHttpRequest();

  let fullAdressToRequest = ADRESS_TO_REQUEST + '?key=' + API_KEY; // добавляем к запросу ключ API
  fullAdressToRequest += `&text=${text.value}`; // текст для перевода
  fullAdressToRequest += `&lang=${langFrom.value}-${langTo.value}`; // направление перевода
  
  // Назначаем обработчик события load
  req.addEventListener('load', function () {
    const response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект
    // Проверяем статус-код, который прислал сервер
    // 200 — это ОК, остальные — ошибка или что-то другое
    if (response.code !== 200) {
      translateExitBlockElem.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
      return;
    };
    // Проверяем, найден ли перевод для данного слова
    if (response.text.length === 0) {
      translateExitBlockElem.innerHTML = 'К сожалению, перевод для данного слова не найден';
      return;
    };
    // Если все в порядке, то отображаем перевод на странице
    translateExitBlockElem.innerHTML = response.text.join('<br>'); // вставляем его на страницу
  });
  // Обработчик готов, можно отправлять запрос
  // Открываем соединение и отправляем
  req.open('get', fullAdressToRequest);
  req.send();
};

formElem.addEventListener('submit', getTranslate);