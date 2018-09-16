//calculate n factorial recursively
const factorial = n => {
  if (n < 0) return;
  else if (n == 0) return 1;
  else return n * factorial(n - 1);
};

//test
console.log('1! = ' + factorial(1));
console.log('2! = ' + factorial(2));
console.log('3! = ' + factorial(3));
console.log('4! = ' + factorial(4));
console.log('5! = ' + factorial(5));
console.log('6! = ' + factorial(6));
