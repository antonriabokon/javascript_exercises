/* 
Write a function named sumFromOneToHundred:
- Use a loop to calculate the sum of all numbers from 1 to 100.
Log the final sum in the console.
*/

const sumFromOneTOHundred = () => {
    let sum = 0;
    for(let i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
};
sumFromOneTOHundred();