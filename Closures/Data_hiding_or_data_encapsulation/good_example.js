function counter() {
    let count = 0
    function incrementCounter(){
        count++
        console.log(count)
    }
    return incrementCounter
}

var counter1 = counter()
counter1()
counter1()