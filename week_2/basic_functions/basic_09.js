/* Create a function named findMax that:
Takes three parameters, a, b, and c.
Returns the largest of the three numbers.
Call the function with the arguments 12, 7, and 20.
Print the result using console.log().

Hint: Use Math.max(). 
*/

function findMax(a, b, c) {
    return Math.max(a, b ,c);
}
console.log(findMax(12, 7, 20));

/*Alternative*/

const findMaxOne = (a, b, c) => {
    return Math.max(a, b, c);
}
console.log(findMaxOne(12, 7, 20));

/*Alternative Two*/

const findMaxTwo = (a, b, c) =>
    Math.max(a, b, c);
console.log(findMaxTwo(12, 7, 20));