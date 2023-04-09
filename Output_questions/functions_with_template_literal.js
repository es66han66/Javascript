function getInfo(one, two, three) {
    console.log(one)
    console.log(two)
    console.log(three)
}
const name = "eshan"
const age = 23

getInfo`My name is ${name} and my age is ${age}`
getInfo`My name is eshan and my age is 23`

/**
 * If we use tagged template literals, the value of the first argument is always an array of the string values.
The remaining arguments get the values of the passed expressions!
 */