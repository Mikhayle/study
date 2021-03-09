const textBlockElem = document.querySelector('.js-text-content');
const textBlockInner = textBlockElem.innerHTML;
const btnEditElem = document.querySelector('.js-btn-edit');
const btnSaveElem = document.querySelector('.js-btn-save');
const btnCancelElem = document.querySelector('.js-btn-cancel');
const jsBtnsElem = document.querySelectorAll('.js-btn');
const jsBtnsBlockElem = document.querySelector('.js-btns');
if (localStorage.getItem('text') !== null) {
  textBlockElem.innerHTML = localStorage.getItem('text');
};

function onBtnsClick(event) {
  const target = event.target;
  if (target.classList.contains('js-btn')) {
    for (let i = 0; i < jsBtnsElem.length; i++) {
      jsBtnsElem[i].disabled = !jsBtnsElem[i].disabled;
      textBlockElem.setAttribute('contenteditable', !textBlockElem.isContentEditable);
    };
    if (target == btnSaveElem) {
      localStorage.setItem('text', textBlockElem.innerHTML);
    };
    if (target == btnCancelElem) {
      if (localStorage.getItem('text') === null) {
        textBlockElem.innerHTML = textBlockInner;
      };
      if (localStorage.getItem('text') !== null) {
        textBlockElem.innerHTML = localStorage.getItem('text');
      };
    };
  };
};

jsBtnsBlockElem.addEventListener('click', onBtnsClick);
