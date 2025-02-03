/* Create a function named containsWord that:
Takes two parameters, sentence and word.
Returns true if sentence includes word, otherwise false.
Call the function with the sentence "JavaScript is fun!" and the word "fun".
Print the result using console.log().

Bonus: Modify the function to use implicit return. 
*/

function containsWord(sentence, word) {
    return sentence.includes(word);
}
console.log(containsWord("JavaScript is fun!", "fun"));

/*Alternative*/

const containsWord1 = (sentence, word) => {
    return sentence.includes(word);
}
console.log(containsWord1("JavaScript is fun!", "fun"))

/*Alternative Two*/

const containsWordTwo = (sentence, word) =>
    sentence.includes(word);

console.log(containsWordTwo("JavaScript is fun!", "fun"));