const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

function removeNthElement(index, array) {
  array.splice(index, 1);
}

const numbersToStrings = numbers => {
  const numString = numbers.map(num => {
    return String(num);
  });
  return numString;
};

function uppercaseWordsInArray(strings) {
  const toUpper = array => {
    return array.toUpperCase();
  };

  return strings.map(toUpper);
}

const reverseWordsInArray = strings => {
  const array = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < strings.length; i++) {
    const word = strings[i];
    const firstChar = word.charAt(0);
    const lastChar = word.charAt(word.length - 1);
    const middle = word
      .substring(1, word.length - 1)
      .split('')
      .reverse()
      .join('');
    array.push(`${lastChar}${middle}${firstChar}`);
  }
  return array;
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

function removeNthElement2(index, array) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

function elementsStartingWithAVowel(strings) {
  const regTest = /^[aeiou]/gi;
  const result = strings.filter(i => regTest.test(i));
  return result;
}

const removeSpaces = string => {
  return string.replace(/\s+/gi, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

function sortByLastLetter(strings) {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
