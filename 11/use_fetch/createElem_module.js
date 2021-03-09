'use strict';
(function() {
	function createElemet(tag, content, attr) {
        const newElem = document.createElement(tag);
        newElem.innerHTML = content;
        for (let key in attr) {
        	newElem.setAttribute(`${key}`, `${attr[key]}`);
        };        
        return newElem;
      };
    window.createElement = createElemet;
   
})();