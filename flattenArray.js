//recusively flatten an ugly array (nested/complex array) using spread operator and es6 syntax

const flatten = arr => {
  //if current element is not an array, return it
  //if current element is an array, flatten all elements and then concatenate resulting arrays
  //use the spread operator to spread the arrays to function parameters
  return Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
};

//test
console.log(flatten([[[0], [1]], [[2], [3, [8, [9, 10]]]], [[4], [5]]]));
console.log('---');
console.log(flatten([[[0], [1, [2, 3, [4, 5, 6], 7], [8, 9]]], 10]));
