/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

const calculateAverageUnitZero = () => {
    let average = 0;
    let count = 0;
    while (true) {
        number = Number(prompt("Enter the number:"));
        average += number;
        if(number === 0) {
            break;
        }
        count++;
    }
    console.log(average / count);
};
calculateAverageUnitZero();