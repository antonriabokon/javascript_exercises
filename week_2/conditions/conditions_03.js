/* 
Write a function named getGrade:
Take a score as a parameter.
If score is 90 or higher, return "Grade A".
If score is between 80 and 89, return "Grade B".
For any other score, return "Grade C".
Call the function with scores like 85 and 75 and print the result. 
*/

const getGrade = (score) => {
    switch(true) {
        case score >= 90:
        console.log("Grade A");
        break;
        case score >= 80 && score <= 89:
        console.log("Grade B")
        break;
        case score <= 80:
        console.log("Grade C");
        break;
    };
};
getGrade(75);
getGrade(85);

/*Alternative*/

const getGradeOne = (score) =>{
    if(score >= 90){
        console.log("Grade A");
    } else if(score >= 80 && score <= 89){
        console.log("Grade B");
    } else {
        console.log("Grade C");
    }
};
getGradeOne(85);
getGradeOne(75);