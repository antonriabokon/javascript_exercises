/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

const canVote = (age) =>{
    if(age >= 18){
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
};
canVote(13);
canVote(43);