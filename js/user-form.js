/* eslint-disable no-console */
// Контейнер с формой
const adForm = document.querySelector('.ad-form');
// Классы формы с которыми будем работать
const defaultConfig = {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
};

// Говорим - валидируй форму найденную ранее с указанными параметрами в прямом эфире
const pristine = new Pristine(adForm, defaultConfig, true);

// Валидация заголовка объявления
const adFormTitle = adForm.querySelector('#title');
function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}
pristine.addValidator(adFormTitle, validateTitle, 'От 30 до 100 символов');


// Кнопка опубликовать выводит в консоль булеовй результат
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('valid');
  } else {
    console.log('not valid');
  }
});
