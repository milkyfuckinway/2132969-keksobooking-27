function randomNumber (firstNumber, lastNumber, symbolsAfterComma) {
  if ((firstNumber >= 0) && (lastNumber >= 0) && (firstNumber <= lastNumber)) {
    return ((Math.random() * (lastNumber - firstNumber) + firstNumber).toFixed(symbolsAfterComma));
  } else {
    return NaN;
  }
}

randomNumber(1.111, 1.121, 4);
