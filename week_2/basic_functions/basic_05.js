/* Create a function named generateRandomNumber that:
Takes two parameters, min and max.
Returns a random integer between min and max (inclusive).
Call the function with the arguments 1 and 10.
Print the result using console.log().

Hint: Use Math.random(), Math.floor(), and simple math.

*/

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(generateRandomNumber(1, 10));

// Alternative

const generateRandomNumberOne = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(generateRandomNumberOne(1, 10));

// Alternative Two

const generateRandomNumberTwo = (min, max) => 
    Math.floor(Math.random() * (max - min) + min);

console.log(generateRandomNumberTwo(1, 10));