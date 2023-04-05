console.log(1); 
new Promise(resolve => {
  console.log(2); 
  return setTimeout(() => {
    console.log(3)
    resolve()
  }, 0)
})
setTimeout(function(){console.log(4)}, 1000); 
setTimeout(function(){console.log(5)}, 0); 
console.log(6);