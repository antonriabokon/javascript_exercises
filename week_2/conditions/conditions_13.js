/* 
Write a function named planAdventure:
Take three parameters: isWeekend, isSunny, and likesFoxes.
Use logical operators:
If it’s the weekend AND sunny AND likes foxes, return "Perfect day for a fox adventure!"
If it’s the weekend OR sunny, return "Good day, but not perfect."
Otherwise, return "Maybe another day."
Call the function with different combinations of conditions. 
*/


const planAdventure = (isWeekend, isSunny, likesFoxes) => {
    if(isWeekend === true && isSunny === true && likesFoxes === true) {
        console.log("Perfect day for a fox adventure!");
    } else if(isWeekend === true || isSunny === true) {
        console.log("Good day, but not perfect.");
    } else {
        console.log("Maybe another day.");
    }
};
planAdventure(true, true, false);
planAdventure(true, true, true);
planAdventure(true, false, true);
planAdventure(false, true, false);
planAdventure(false, false, false);
planAdventure(true, false, false);
planAdventure(false, false, true);
planAdventure(false, true, true);