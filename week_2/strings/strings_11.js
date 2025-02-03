/* Create a variable phrase and assign it the value "JavaScript is versatile and powerful."
Use .includes() to check if the string contains the word "powerful".
Print the result using console.log().
Example output:
"Does the phrase include 'powerful'? true"
 */

const phrase = "JavaScript is versatile and powerful.";
const isWord = phrase.includes("powerful");

if(isWord == true) {
    console.log("Does the phrase include 'powerful'? true");
}
else {
    console.log("Does the phrase include 'powerful'? false");
}
