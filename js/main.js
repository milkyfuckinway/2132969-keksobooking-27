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
