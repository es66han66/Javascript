// In below example, when a closure is made and we call outer then because in future inner can be called therefore the memory for all those variables which outer declare and are referenced in inner persist

function outer(){
    let a = 0
    return function inner(){
        console.log(a)
    }
}

let called = outer()