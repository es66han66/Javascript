const RandomId = (len) => Math.random().toString(36).substr(3, len);
const id = RandomId(10);
console.log(id);
