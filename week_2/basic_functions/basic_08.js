/* Create a function named roundNumber that:
Takes two parameters, num and precision.
Returns the number rounded to the specified precision (number of decimal places).
Call the function with 19.56789 and 2.
Print the result using console.log().

Hint: Use .toFixed().
*/

function roundNumber(num, precesion) {
    return num.toFixed(precesion);
}
console.log(roundNumber(19.56789, 2));

/*Alternative*/

const roundNumberOne = (num, precesion) => {
    return num.toFixed(precesion);
}
console.log(roundNumberOne(19.56789, 2));

/*Alternative Two*/

const roundNumberTwo = (num, precesion) =>
    num.toFixed(precesion);

console.log(roundNumberTwo(19.56789, 2));