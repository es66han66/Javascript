function getInfo(name, age) {

}

function getExtraInfo(name , age , address = null, id) {

}

console.log(getInfo.length)
console.log(getExtraInfo.length)

/**
 * .length property on function prints the length of arguments a function is expecting.
And if there is any optional argument, then all argument after that will be considered option, not matter if we declare them optional or not.
With that said, it is always a good practice to include optional arguments in the last.
 */