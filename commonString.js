//Question #3: Given a string of words, return the most common used word in it.

const commonString = string => {
  console.log('Phrase Entered : ' + string);

  //setup regex for removing punctuation
  const regex = /[^A-Za-z0-9]/g;
  let wordsCounter = {};
  let mostCommonCounter = 0;
  let mostCommonWord = '';

  //set to lower case then replace all punctuation and special characters with space
  string.toLowerCase().replace(regex, ' ');

  //split strings on spaces to array and then run foreach on each word
  string.split(' ').forEach(word => {
    wordsCounter[word] = wordsCounter[word] || 0;
    wordsCounter[word]++;
  });

  //look through the keys of the wordsCounter object
  Object.keys(wordsCounter).forEach(word => {
    //if the word has been used more than the current most common value
    //if so, set the new current most used word and counter
    if (wordsCounter[word] > mostCommonCounter) {
      mostCommonWord = word;
      mostCommonCounter = wordsCounter[word];
    }
  });
  return mostCommonWord;
};

//tests
console.log(
  'Most common word in the entered phrase is : ' +
    commonString(
      "The hiil was large and round and the tree was the biggest she'd ever seen."
    )
);
console.log('---');
console.log(
  'Most common word in the entered phrase is : ' +
    commonString('Hello World. You are a fine World indeed.')
);
console.log('---');
console.log(
  'Most common word in the entered phrase is : ' +
    commonString(
      "Cuz I am whatever I say I am, if I wasn't why would I say I am?"
    )
);
