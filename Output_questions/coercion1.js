console.log(1 +  "2" + "2"); //ans: 122
console.log(1 +  +"2" + "2"); //ans: 32
console.log(1 +  -"1" + "2"); //ans: 02
console.log(+"1" +  "1" + "2"); //ans: 112
console.log( "A" - "B" + "2"); //ans: NaN2
console.log( "A" - "B" + 2); //ans: NaN
console.log("10,11" == [[[[10]],11]]) //10,11 == 10,11, and: true
"[object Object]" == {name: "test"} //ans true