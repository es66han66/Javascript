let arr = [1, 2]; 
// Choose any one of the following methods
arr.unshift(0);
arr = [0].concat(arr);
arr = [0, ...arr];
// arr => [0, 1, 2]