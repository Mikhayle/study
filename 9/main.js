const newDealEl = document.querySelector('.js-new-deal');
const listElem = document.querySelector('.js-list');
const formElem = document.querySelector('.js-form');

function getNewListItemEl(tag, content, ...classOfEl) {
  const newObjectElem = document.createElement(tag);
  newObjectElem.innerHTML = content;
  newObjectElem.classList.add(...classOfEl);
  return newObjectElem;
};
function onFormElSubmit(ev) {
  ev.preventDefault();
  listElem.append( getNewListItemEl('li', newDealEl.value, 'js-list__item', 'list__item') );
  formElem.reset();
};

function onListItemClick(event) {
  const target = event.target;
  if ( target.classList.contains('js-list__item') ) {
    target.classList.toggle('list__item_done');
  };
};

formElem.addEventListener('submit', onFormElSubmit);
listElem.addEventListener('click', onListItemClick);
