// console.log(23.toString()) // not allowed like this

/**
 * This is due to language grammar limitation.
The dot(.) character could mean different things in JS. It can be seen as the member operator, or a decimal, depending on its placement.

In order to make above code work we have to either use parenthesis or an additional dot to make the expression valid.
 */

console.log(21..toString())

console.log((21).toString())
