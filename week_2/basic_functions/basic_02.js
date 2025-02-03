/* Create a function named isEven that:
Takes one parameter, num.
Returns true if num is even, otherwise returns false.
Call the function with the arguments 4 and 7.
Print the results using console.log().

Bonus: Modify the function to use implicit return. 
*/

function isEven(num) {
    return num % 2 == 0;
}

console.log(isEven(18));

/* The alternative */

const isEven1 = (num) => {
    return num % 2 == 0;
}

console.log(isEven1(19));

/* Second alternative */

const isEven2 = (num) => num % 2 == 0;

console.log(isEven2(28));