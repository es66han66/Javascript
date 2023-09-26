const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("p1 resolved")
    },10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("p2 resolved")
    },5000)
})

async function p3(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("p3 resolved")
        },10000)
    })
}

async function p4() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("p4 resolved")
        },5000)
    })
}

async function handle() {
    console.log("handle starts")

    const val1 = await p1
    console.log("handle 1 done")
    console.log(val1)

    const val2 = await p2
    console.log("handle 2 done")
    console.log(val2)

    console.log("handle 2nd part starts")

    const val3 = await p3()
    console.log("handle 3 done")
    console.log(val3)

    const val4 = await p4()
    console.log("handle 4 done")
    console.log(val4)
}

handle()