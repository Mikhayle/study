'use strict';
(function () {
	window.onFormElemSubmit = function (ev) {
		ev.preventDefault();

		fetch(getFullUrlForRequest(getTranslateUrl))
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			translateExitBlockElem.innerHTML = response.text.join(`<br>`); // вставляем его на страницу      
		})
		.catch(function (error) {
			translateExitBlockElem.innerHTML = `Произошла ошибка при получении ответа от сервера: 
			${error}`;
		});
	};
})();