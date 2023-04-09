class Eshan {
    constructor(a){
        this.a = a
    }

    static getName() {
        console.log(this)
        console.log(this.a)
    }
}

Eshan.getName()
/**
 * The value of this inside a static function is class itself.
 * When we log this inside static method whole class will be logged.
 */