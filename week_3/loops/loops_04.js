/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const countEvenNumbers = () => {
    let count = 0;
    for(let i = 0; i < 20; i++) {
        number = Number(prompt("Please enter the number:"));
        if(number % 2 === 0) {
            count++;
        }
    }
    console.log(count);
};
countEvenNumbers();

// Alternative:

const countEvenNumbersOne = () =>{
    let i = 0;
    let count = 0;
    while (i < 5) {
        number = Number(prompt("Enter the number:"));
        if(number % 2 == 0) {
            count++;
        }
        i++;
    }
    console.log(count);
};
countEvenNumbersOne();

// Alternative Two:

const countEvenNumbersTwo = () => {
    let count = 0;
    let i = 0;
    do {
        number = Number(prompt("Enter the number:"));
        if(number % 2 == 0) {
            i++;
        }
        count++;
    } while (count < 5);
    console.log(i);
};
countEvenNumbersTwo();