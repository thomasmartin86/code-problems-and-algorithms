//check if two words are anagrams
const isAnagram = (word1, word2) => {
  //break words into array of letters, sort and then rejoin the arrays into strings
  //if the two words don't have the same values then they aren't anagrams
  console.log(word1 + ' & ' + word2);
  return (
    word1
      .split('')
      .sort()
      .join('') ===
    word2
      .split('')
      .sort()
      .join('')
  );
};

//tests
console.log(isAnagram('scalp', 'clasp'));
console.log(isAnagram('scalp', 'clasps'));
console.log(isAnagram('binary', 'brainy'));
