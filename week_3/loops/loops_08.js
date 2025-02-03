/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

let numberAmount;
const findMinMax = () => {
    let min = Infinity;
    let max = -Infinity;
    let count = Number(prompt("How many numbers are you going to enter:"));
    for(let i = 0; i < count; i++){
        number = Number(prompt("Please enter a number:"));
        if(number < min) {
            min = number;
        }
        if(number > max) {
            max = number;
        }
    }
    console.log(min, max);
};
   
findMinMax();