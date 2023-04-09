const a = {
    1 : "eshan"
}

const b = new Set([1,2,3,4])

console.log(a.hasOwnProperty(1))
console.log(a.hasOwnProperty('1'))
console.log(b.has(1))
console.log(b.has('1'))
