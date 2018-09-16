//checks if a given string is a palindrome or not
const isPalindrome = string => {
  //regex to remove unwanted characters (things that aren't numbers or letters)
  //[^A-Z] matches anything that is not enclosed between A and Z
  //[^a-z] matches anything that is not enclosed between a and z
  //[^0-9] matches anything that is not enclosed between 0 and 9
  const regex = /[^A-Za-z0–9]/g;

  //lower case the string and replace the unwanted characters
  const lowerStringRemoved = string.toLowerCase().replace(regex, '');

  //reverse the string by splitting to array, reversing, and joining back into string
  const reversedString = lowerStringRemoved
    .split('')
    .reverse()
    .join('');

  //return string comparison
  return reversedString === lowerStringRemoved;
};

//test cases
console.log("Is 'RaCeCaR' a palindrome? : " + isPalindrome('RaCeCaR'));

console.log(
  "Is 'Madam, I'm adam' a palindrome? : " + isPalindrome("Madam, I'm adam")
);
console.log(
  "Is 'thisisnotapalindrome' a palindrome? : " +
    isPalindrome('thisisnotapalindrome')
);

console.log(
  "Is 'A man, a plan, a canal. Panama' a palindrome? : " +
    isPalindrome('A man, a plan, a canal.Panama')
);
