const a = Promise.resolve(1)
console.log(a)
const b = Promise.resolve(2)

a.then(console.log)
b.then(console.log)

b.then(console.log).then(console.log)