/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/

const canEnterEvent = (age, hasID) => {
    if(age >= 18 && hasID === true) {
        console.log("You can enter the event.");
    } else {
        console.log("You cannot enter.");
    }
};
canEnterEvent(13, true);
canEnterEvent(19,true);
canEnterEvent(12, false);