/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

function sum(a,b) {
    return a + b;
}

console.log(sum(10,5));

/* The alternative*/

const sum1 = (a,b) => {
    return a + b;
}

console.log(sum1(10,5));

/* And one more*/

const sum2 = (a,b) => a + b;

console.log(sum(10,5));