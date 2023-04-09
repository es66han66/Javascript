// works with primitive values in array only

const a = [1, [[2]], [[3,4]], [[[[7,8]]]]]

const b = [1, [[[2,3]]], "eshan"]

const c = [1, 2, [[{
    "3": "3"
}, 4]]]

console.log(a.toString())

console.log(b.toString())

console.log(c.toString())

