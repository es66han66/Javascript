var foo = {n: 1};
var bar = foo;
console.log(foo === bar) //true
foo.x = foo = {n: 2};

console.log(foo) //ans: {n: 2}
console.log(bar) //ans: {n: 1, x: {n: 2}}
console.log(foo === bar) //false