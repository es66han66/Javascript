function a(obj1, obj2){
    let a = obj1.name
    let b = obj2.name
}

console.time("first")
for(let i = 0;i<=10000000; i++){
    a.apply(this, [{
        name: "eshan"
    },
    {
        name: "eshan"
    }
    ])
}
console.timeEnd("first")

console.time("second")
for(let i = 0;i<=10000000; i++){
    a.call(this, {
        name: "eshan"
    },
    {
        name: "eshan"
    }
    )
}
console.timeEnd("second")

console.time("third")
for(let i = 0;i<=10000000; i++){
    a({
        name: "eshan"
    },
    {
        name: "eshan"
    }
    )
}
console.timeEnd("third")