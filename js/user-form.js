import {
  typesEngToRus
} from './card.js';
/* eslint-disable no-console */
const adForm = document.querySelector('.ad-form');
const defaultConfig = {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
};

const pristine = new Pristine(adForm, defaultConfig, true);
const adFormTitle = adForm.querySelector('#title');
const validateIsNotEmpty = (value) => value;
const validateTitleLength = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(adFormTitle, validateTitleLength, 'От 30 до 100 символов');
pristine.addValidator(adFormTitle, validateIsNotEmpty, 'Поле обязательно для заполнения');
const adFormPrice = adForm.querySelector('#price');
const validatePriceIsZero = (value) => value !== '0';
const validatePriceIsLessThenZero = (value) => value >= 0;
const validatePriceMax = (value) => value <= 100000;
pristine.addValidator(adFormPrice, validateIsNotEmpty, 'Поле обязательно для заполнения');
pristine.addValidator(adFormPrice, validatePriceIsZero, 'Бесплатный сыр только в мышеловке');
pristine.addValidator(adFormPrice, validatePriceIsLessThenZero, 'Вы не можете доплачивать постояльцам');
pristine.addValidator(adFormPrice, validatePriceMax, 'Цена не может быть больше 100000');

const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const typeToMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const adFormType = adForm.querySelector('#type');

// const adFormCapacity = adForm.querySelector('#capacity');

// const roomNumber = adForm.querySelector('#room_number');

// const validateTypeToPrice = function() {
//   if (adFormPrice.value >= typeToMinPrice[adFormType.value]) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// };

// pristine.addValidator(adFormPrice, validateTypeToPrice, `Минимальная цена ${typeToMinPrice[adFormType.value]} рублей`);

// console.log(typesEngToRus[adFormType.value]);

const consoleLogFunction = () => console.log(typesEngToRus[adFormType.value]);

pristine.addValidator(adFormType, consoleLogFunction, typesEngToRus[adFormType.value]);

// pristine.addValidator(adFormType, validateCapacity, 'test');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('valid');
  } else {
    console.log('not valid');
  }
});
