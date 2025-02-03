/* Create a function named cleanAndTransform that:
Takes one parameter, str.
Trims whitespace, converts the string to lowercase, and replaces "powerful" with "amazing".
Returns the transformed string.
Call the function with " JavaScript is powerful! ".
Print the result using console.log(). */

function cleanAndTransform(str) {
    return str.trim().toLowerCase().replace("powerful", "amazing")
}
console.log(cleanAndTransform("Javascript is powerful."))

/*Alternative*/

const cleanAndTransformOne = (str) => {
    return str.trim().toLowerCase().replace("powerful", "amazing");
}
console.log(cleanAndTransformOne("JavaScript is powerful."));

/*Altrernative Two*/

const cleanAndTransformTwo = (str) => 
    str.trim().toLowerCase().replace("powerful", "amazing");

console.log(cleanAndTransformTwo("Javascript is powerful."));