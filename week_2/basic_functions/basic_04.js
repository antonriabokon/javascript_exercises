/* Create a function named capitalize that:
Takes one parameter, str.
Returns the string with the first character in uppercase and the rest in lowercase.
Call the function with the string "javascript".
Print the result using console.log().

Hint: Use str[0].toUpperCase() and str.slice(1).toLowerCase().
*/

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("javascript")); 

/* Alternative*/

const capitalize1 = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize1("javascript")); 

/*Alternative 2*/

const capitalize2 = (str) => str[0].toUpperCase() 
+ str.slice(1).toLowerCase();

console.log(capitalize2("javascript"));


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
console.log("generateRandomNumber :", generateRandomNumber(5,10));

/*Alternative*/

const generateRandomNumberOne = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log("generateRandomNumberOne :", generateRandomNumberOne(1,7));

/*Alternative Two*/

const generateRandomNumberTwo = (min,max) => 
    Math.floor(Math.random() * (max - min) + min);

console.log("generateRandomNumberTwo :", generateRandomNumberTwo(3,8));