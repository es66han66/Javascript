const p = new Promise((resolve, reject) => {
    resolve("it's resolved")
})

const p1 = new Promise((resolve, reject) => {
    resolve("it's resolved again")
})

function normal(){
    p.then(res => {
        console.log(res)
    })
    console.log("normal ends here")
}

async function asyncCheck(){
    p1.then(res => {
        console.log(res)
    })
    console.log("asyncCheck ends here")
}

normal()

asyncCheck()