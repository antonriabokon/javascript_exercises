/* Create a variable description and assign it the value " JavaScript is Fun and powerful! ".
Perform the following:
Trim the extra spaces using .trim().
Convert the string to lowercase.
Check if it includes the word "fun".
Replace "powerful" with "amazing".
Print the final string and whether it includes "fun" using console.log().
Example output:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
 */

const description = " JavaScript is Fun and powerful! "
const desEdited = description.trim();
const desEditOne = desEdited.replace("powerful", "amazing")
const desEditTwo = desEditOne.toLowerCase();
const isTheWord = desEditTwo.includes("fun");
if(isTheWord == true) {
    console.log(`\"Final description: ${desEditTwo}"
"Does it include 'fun'? true\"`);
}else {
    console.log("incorect result");
}