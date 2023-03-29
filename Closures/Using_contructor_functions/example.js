function Counter(){
    let count = 0
    this.incrementCounter = function() {
        count++
        console.log("Count incremented to",count)
    }
    this.decrementCounter = function() {
        count--
        console.log("Count decremented to",count)
    }
}

var counter1 = new Counter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()