/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/

const logEvenNumbers = () => {
    for(let i = 2; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i, 100 - i);
            if(i === 50) {
                break;
            }
        }
    }
};
logEvenNumbers();