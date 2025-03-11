/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/
"use strict";
function task1() {
    // Code here
    try {
       const test = undeclared - 1;
    } catch (error) {
        console.error(`Strict mode error: ${error.message}`)
    }
}
task1();


/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/

function task2() {
    // Code here
    const MAX_USERS = 100;
    let currentUsers =10;
    try {
        MAX_USERS = currentUsers;
    } catch (error) {
        console.error(`Alarm, alarm: ${error.message}`);
    }
}
task2();


/* Task 3: Create and Log an Object
/*
Task: Create an object `userProfile` with:
      - `name`
      - `email`
      - `isAdmin` (true or false)
      Log the object.

Expected:
- Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }
*/

function task3() {
    // Code here
    const userProfile = {
        name: 'Alice',
        email: 'alice@email.com',
        isAdmin: true
    }
    console.log(userProfile);
}
task3();


/* Task 4: Write a Simple Function
/*
Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs.

Example:
calculateArea(5, 10) → 50
*/

function calculateArea(width, height) {
    // Code here
    return width * height;
}
console.log(calculateArea(10, 5));


/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
    // Code here
    return price - (price * DISCOUNT);
}
console.log(applyDiscount(100));


/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function.

Example:
greetUser("Bob") → "Hello, Bob!"
*/

function greetUser(name) {
    // Code here
    // Check the name to be a valid value
    if (name.length > 0 && isNaN) {
        // If it is, log the message
        return console.log(`Hello, ${name}!`);
    } else {
        // If it's not, log the message
        console.log('Please enter the a prooper name!');
    }
}
greetUser('Bob');


/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/

function checkNumber(num) {
    // Code here
    if(num > 0) {
        return console.log('The number is positive');
    }else if(num < 0) {
        return console.log('The number is negative');
    } else {
        return console.log('Number is zero');
    }
}
checkNumber(0);


/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/

function example() {
    let x = 10;
    console.log(x);
}
example();