const name = "eshan"
age = 23
console.log(typeof name)
console.log(typeof age)

console.log(delete name)
console.log(delete age)

console.log(typeof name)
console.log(typeof age)

/**
 * delete operator only deletes a key in object
 * when we don't use any declaration before any variable, it will be treated as a global variable, and will be added as deletable entity in window object.
 */