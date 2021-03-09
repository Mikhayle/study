'use strict';
(function() {	
	window.getFullUrlForRequest = function(adressReq) {
	  let fullAdressToRequest = `${adressReq}?key=${API_KEY}`; // добавляем к запросу ключ API
	  if (adressReq == getTranslateUrl) {
	    fullAdressToRequest = `${fullAdressToRequest}&text=${textElem.value}&lang=${langFromElem.value}-${langToElem.value}`;
	  };
	  if (adressReq == getLangsUrl) {
	    fullAdressToRequest = `${fullAdressToRequest}&ui=ru`;
	  };
	  return fullAdressToRequest;
	};
})();