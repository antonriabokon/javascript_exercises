/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = () => {
    do {
        distance = Number(prompt("Enter the distance:"));
        time = Number(prompt("Enter the time:"));
        console.log("Average speed:", distance / time);
    } while(distance !== 0);
};
calculateAverageSpeed();

// Alternative:

const calculateAverageSpeedOne = () => {
    let distance = 1;
    while (distance !== 0) {
        distance = Number(prompt("Enter the speed:"));
        if (distance === 0) break;
        time = Number(prompt("Enter the time:"));
        console.log("Average speed:", distance / time);
    }
};
calculateAverageSpeedOne();