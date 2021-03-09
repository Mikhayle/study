'use strict';
const API_KEY = `trnsl.1.1.20200403T221457Z.c9c098443d6cf306.144500b869646c6e743fe77e7f6650bf26010869`;
const BASE_URL = `https:/translate.yandex.net/api/v1.5/tr.json/`;

const getLangsUrl = `${BASE_URL}getLangs`;
const getTranslateUrl = `${BASE_URL}translate`;
const textElem = document.querySelector(`.js-intro`);
const formElem = document.querySelector(`.js-form`);
const translateExitBlockElem = document.querySelector(`.js-translate`);
const langFromElem = document.querySelector(`.js-lang-from`);
const langToElem = document.querySelector(`.js-lang-to`); 

document.addEventListener(`DOMContentLoaded`, onLoadGetAllLang);
formElem.addEventListener(`submit`, onFormElemSubmit);