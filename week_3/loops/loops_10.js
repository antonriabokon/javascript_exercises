/* 
Write a function named countdownTimer:
- Take a number (e.g., 10) as input and simulate a countdown in the console.
Log each number in descending order until 0, and then log: "Time's up!".
 */

const countdownTimer = () => {
    let number = Number(prompt("Please enter a random number:"));
    while(true) {
        console.log(number);
        if (number === 0) {
            break;
        }
        number--;
    }
};
countdownTimer();