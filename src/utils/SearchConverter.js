const userInput = "saalvador ba";

// Verify if string more than 2 words.
const isStringGreaterThanTwo = (string) => {
  const matches = string.match(/\b\w+\b/g);
  if (!matches || matches.length <= 1) {
    return false;
  } else {
    return true;
  }
};

// Verify if string contains numbers.
const isStringWithNumbers = (string) => {
  const matches = string.match(/[0-9]/);
  if (!matches) {
    return false;
  } else {
    return true;
  }
};

// Verify if only the last word has 2 caracters.
const isJustTwoLastWords = (string) => {
  const matches = string.match(/\b\w{2}\b/);
  if (!matches) {
    return false;
  } else {
    return true;
  }
};



const isValidInput = (input) => {

};


console.log(isStringGreaterThanTwo(userInput));
console.log(isStringWithNumbers(userInput));
console.log(isJustTwoLastWords(userInput));
