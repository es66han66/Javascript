function myFunction() {
    console.log(this)
}

const obj = {
    someKey : 1,
    myFunc : myFunction
}

obj.myFunc()