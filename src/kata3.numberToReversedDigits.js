const numberToReversedDigits = number => {
  const arrOfStr = number
    .toString()
    .split("")
    .reverse();
  return arrOfStr.map(str => Number(str));
};

module.exports = numberToReversedDigits;
