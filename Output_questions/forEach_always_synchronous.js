const delay = async (item) => new Promise(
	resolve => setTimeout(() => {
		console.log(item);
		resolve(item)
	}, Math.random() * 100)
)
console.log(1)
let arr = [3,4,5,6]
async function check() {
    for(let item of arr) {
        await delay(item)
    }
} // gives 1,2,3,4,5,6

// arr.forEach(async (item) => await delay(item)) // randomness introduced because forEach is always synchronous
console.log(2)
check()