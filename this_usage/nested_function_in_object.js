const obj = {
    somKey : 1,
    outer : function() {
        function inner() {
            // console.log(this.somKey) // undefined
            console.log(this)
        }
        inner()
    }
}

obj.outer()