function test() {
    let a = b = 0
    a++
    return a
}

test()

console.log(b) // gives 0

// console.log(a) // error