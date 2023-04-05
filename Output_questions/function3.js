function foo(a,b,a){return a+b}
console.log(foo(1,2,3)) //ans: 3+2 = 5

function foo2(a,b,c = a){return a+b+c}
console.log(foo2(1,2)) //ans = 1+2+1 = 4

function foo3(a = b, b){
    console.log("!! a",a)
    console.log("!! b",b)
    return a+b
}
console.log(foo3(1,2)) //ans = 1+2 = 3
console.log(foo3(undefined,2)) //error