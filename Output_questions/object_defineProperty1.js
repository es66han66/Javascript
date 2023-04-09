const a = { name : "eshan"}

Object.defineProperty(a, "age", {value: 23})

console.log(a)
console.log(a.age)
console.log(Object.keys(a))


/**
 * age won’t be included. Because property defined with defineProperty are non enumerable by default.
 */