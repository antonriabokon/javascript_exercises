/* 
Write a function named checkFoxLover:
Take two parameters: age and likesFoxes.
If age is 18 or older:
Check if likesFoxes is true.
If true, return "You are an adult who likes foxes!"
Otherwise, return "Not a fox fan, but that’s okay!"
Call the function with different ages and preferences.
 */

const checkFoxLover = (age, likesFoxes) => {
    if(age >= 18 && likesFoxes === true) {
        console.log("You are an adult who likes foxes!");
    } else {
        console.log("Not a fox fan, but thats okay!");
    }
};
checkFoxLover(19, true);
checkFoxLover(11, true);
checkFoxLover(21, false);