function randomNumber (firstNumber, lastNumber) {
  if ((firstNumber >= 0) && (lastNumber >= 0) && (firstNumber <= lastNumber)) {
    return Math.round((Math.random() * (lastNumber - firstNumber) + firstNumber));
  } else {
    return NaN;
  }
}

function randomNumberWithComma (firstNumber, lastNumber, symbolsAfterComma) {
  if ((firstNumber >= 0) && (lastNumber >= 0) && (firstNumber <= lastNumber)) {
    return ((Math.random() * (lastNumber - firstNumber) + firstNumber).toFixed(symbolsAfterComma));
  } else {
    return NaN;
  }
}

randomNumber(-0.0, 10.1411);
randomNumberWithComma(-0.0, 10.1411, 4);
