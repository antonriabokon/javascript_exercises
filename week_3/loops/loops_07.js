/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = () => {
    let count = 0;
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    while(true) {
        number = Number(prompt("Please enter a number:"));
        sum += number;
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
        count++;
        if(count >= 4) {
            break;
        }
    }
    console.log(sum, sum / count, min, max);
};
sumAndAverage();