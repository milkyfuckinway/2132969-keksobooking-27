function randomNumber(firstNumber, lastNumber) {
  if (firstNumber >= 0 && lastNumber >= 0 && firstNumber <= lastNumber) {
    return Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber);
  } else {
    return NaN;
  }
}

function randomNumberWithComma(firstNumber, lastNumber, symbolsAfterComma) {
  if (firstNumber >= 0 && lastNumber >= 0 && firstNumber <= lastNumber) {
    return (Math.random() * (lastNumber - firstNumber) + firstNumber).toFixed(symbolsAfterComma);
  } else {
    return NaN;
  }
}

const randomNumberTernary = (firstNumber, lastNumber) => (firstNumber >= 0 && lastNumber >= 0 && firstNumber <= lastNumber ? Math.round(Math.random() * (lastNumber - firstNumber) + firstNumber) : NaN);

const randomNumberWithCommaTernary = (firstNumber, lastNumber, symbolsAfterComma) => (firstNumber >= 0 && lastNumber >= 0 && firstNumber <= lastNumber ? (Math.random() * (lastNumber - firstNumber) + firstNumber).toFixed(symbolsAfterComma) : NaN);

randomNumber(-0.0, 10);
randomNumberWithComma(-0.0, 10, 10);
randomNumberTernary(-0.0, 10);
randomNumberWithCommaTernary(-0.0, 10, 10);

// author, объект — описывает автора. Содержит одно поле:

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
// offer, объект — содержит информацию об объявлении. Состоит из полей:

// title, строка — заголовок предложения. Придумайте самостоятельно.

// address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

// price, число — стоимость. Случайное целое положительное число.

// type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

// rooms, число — количество комнат. Случайное целое положительное число.

// guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

// checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

// checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

// description, строка — описание помещения. Придумайте самостоятельно.

// photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

// location, объект — местоположение в виде географических координат. Состоит из двух полей:

// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
