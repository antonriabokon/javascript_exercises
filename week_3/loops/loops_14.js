/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */

    const createWordPyramidTwo = () => {
        word = String(prompt("Please enter a word:"));
        for(let i = 0; i < word.length; i++) {
            console.log(word.slice(0, i + 1));
        }
    };
    createWordPyramidTwo();