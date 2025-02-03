/* Create a function named replaceWord that:
Takes three parameters, sentence, oldWord, and newWord.
Returns the sentence with oldWord replaced by newWord.
Call the function with the sentence "I like apples.", oldWord as "apples", and newWord as "bananas".
Print the result using console.log(). 
*/

function replaceWord(oldWord, newWord, sentence) {
    return sentence.replace(oldWord, newWord);
}
console.log(replaceWord("apples", "bananas", "I like apples."));

/*Alternative*/

const replaceWord1 = (oldWord, newWord, sentence) => {
    return sentence.replace(oldWord, newWord);
}
console.log(replaceWord1("apples", "bananas", "I like apples."));

/*Alternative Two*/

const replaceWordTwo = (oldWord, newWord, sentence) =>
    sentence.replace(oldWord, newWord);

console.log(replaceWordTwo("apples", "bananas", "I like apples"));