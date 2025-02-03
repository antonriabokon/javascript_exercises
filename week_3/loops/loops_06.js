/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
    let count = 0;
    let average = 0;
    while (true) {
        number = Number(prompt("Please enter the number:"));
        if(Number.isNaN(number)) {
            alert("Invalid number, please refresh the web page!"); // Invalid number
            break;
        }
        average += number;
        question = String(prompt("Do you want to continue giving numbers? (y/n)"));
        count++;
        
        if(question === "y") {
            continue;
        } else if (question === "n") {
            break;
        } else {
            alert("Invalid response, the procedure will be continued!"); // Invalid answer
        }
    }
    console.log(average);
    console.log(average / count);
};
askToContinue();