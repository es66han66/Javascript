const obj = {
    someKey : 1,
    myFunc : function () {
        console.log(this)
    }
}

const referFunc = obj.myFunc

referFunc()