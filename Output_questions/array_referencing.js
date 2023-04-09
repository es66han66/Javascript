let a = { name : "eshan"}

const b = [ a ]

a = null

console.log(b)

/**
 * we are only setting new reference to a variable. Previous reference will be used in members array
 */