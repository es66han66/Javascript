function myFunction() {
    console.log(this)
}

const obj = {
    someKey : 1,
    myFunc : myFunction
}

const referFunc = obj.myFunc

referFunc()