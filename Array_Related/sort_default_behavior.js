const a = [ 10, 1 ,7 , 20]

console.log(a.sort())

/**
 * By default, sort method performs sorting by converting the numbers into strings. Then it compares their sequences of UTF-16 code unit values.

To sort the numbers by their numeric value, we’ll need to pass a compareFn to the sort() method:
 */

console.log(a.sort((a,b) => a-b))