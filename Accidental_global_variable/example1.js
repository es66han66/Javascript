function test() {
    let a = b = 0
    a++
    function test1() {
        let c = d = 0
        c++
        return c
    }
    test1()
    console.log("d is",d)
}

test()

console.log(b) // gives 0

console.log(d) // gives 0


// console.log(a) // error