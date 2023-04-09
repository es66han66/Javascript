const a = [1, [[2]], [[3,4]], [[[[7,8]]]]]

const b = [1, [[[2,3]]], "eshan"]

const c = [1, 2, [[{
    "3": "3"
}, 4]]]

console.log(a.toString())

console.log(b.toString())

console.log(c.toString())



/**
 * When we do .toString() in an array, it will stringily the elements inside it, if it contains primitive values.
And toString() also flatten the array.
 */