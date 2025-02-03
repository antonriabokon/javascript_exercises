/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

const validatePassword = () => {
    while(true) {
        password = String(prompt("Please enter the password:"));
        if (password === "correct123") {
            alert("Access granted!");
            break;
        } else if(password !== "correct123") {
            alert("Try again!")
        }  
    }
};
validatePassword();