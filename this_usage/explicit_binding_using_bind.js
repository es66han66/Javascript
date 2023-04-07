function myFunction() {
    console.log(this)     
  }
 
const obj = {
  someKey: 1, 
}

const boundFunction = myFunction.bind(obj)
boundFunction();      // {someKey: 1}