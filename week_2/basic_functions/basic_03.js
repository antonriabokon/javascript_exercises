/* Create a function named getLength that:
Takes one parameter, str.
Returns the length of str using .length.
Call the function with the string "JavaScript".
Print the result using console.log().
*/

function getLength(str) {
    return str.length;
}

console.log(getLength("JavaScript"));

/* Alternative*/

const getLength1 = (str) => {
    return str.length;
}

console.log(getLength1("JavaScript"));

/* Alternative two*/

const getLength2 = (str) => str.length;

console.log(getLength2("JavaScript"));