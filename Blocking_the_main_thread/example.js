console.log("start");

setTimeout(() => {
  console.log("setTimeout called");
}, 5000);

const startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("end");
