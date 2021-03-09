'use strict';
(function() {
   window.onLoadGetAllLang = function() {
    const selectTemplateElem = document.createDocumentFragment();  
    
    fetch( getFullUrlForRequest(getLangsUrl) )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {   
        const langs = response.langs;

        for (let key in langs) {
          const newElem = createElement(`option`, `${langs[key]}`, {value: `${key}`}); 
          if (key == 'ru') newElem.setAttribute(`selected`, ``);  
          selectTemplateElem.append(newElem);                   
        };

        const selectTemplateCloneElem = selectTemplateElem.cloneNode(true);

        langToElem.append(selectTemplateElem);
        langFromElem.append(selectTemplateCloneElem);      
      });
  };
})();

  