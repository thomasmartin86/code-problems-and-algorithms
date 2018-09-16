//get n fibonacci number using recusrsion
const fibRecursive = n => {
  if (n < 2) {
    return n;
  } else {
    return fibRecursive(n - 1) + fibRecursive(n - 2);
  }
};

console.log('the 15th fibonacci number is : ' + fibRecursive(15));
