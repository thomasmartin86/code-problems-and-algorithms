//simple function to reverse a string
const strReverse = string => {
  return string
    .split('')
    .reverse()
    .join('');
};

//test
console.log('Hello World reversed : ' + strReverse('Hello World'));
