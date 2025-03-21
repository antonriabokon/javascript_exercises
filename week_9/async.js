'use strict';

/* 
Task 1: Delayed Greeting (Callback)  
---------------------------------------
Write a function `delayedGreet(name, callback)`  
After **2 seconds**, it should call `callback` with `"Hello, [name]!"`  
*/

function delayedGreet(name, callback) {
    // Your code here
    setTimeout(() => {
        callback(`'Hello, ${name}!"`)}, 2000);
    }

// Test Case
delayedGreet("Alice", (message) => console.log(message));
// Expected: "Hello, Alice!" (after 2 seconds)


/* 
Task 2: Order Processing (Callback)  
---------------------------------------
Write a function `processOrder(orderNumber, callback)`  
It should **wait 3 seconds** before calling the callback with:  
   `"Order [orderNumber] is ready for pickup."`  
*/

function processOrder(orderNumber, callback) {
    // Your code here
    setTimeout(() => {
        callback(`"Order ${orderNumber} is ready for pickup."`)},
    3000);
}

// Test Case
processOrder(101, (message) => console.log(message));
// Expected: "Order 101 is ready for pickup." (after 3 seconds)


/* 
Task 3: Login System (Callback)  
---------------------------------------
Fix `loginUser(username, validUser, callback)`  
If `validUser === true`, call the callback with `"Welcome, [username]!"` after **1 second**  
If `validUser === false`, call the callback immediately with `"Invalid login"`  
*/

function loginUser(username, validUser, callback) {
    // Your code here
    if (validUser) {
    setTimeout(() => {
        callback(`"Welcome, ${username}!"`)}, 1000);
    }
    if (!validUser) {
        callback("Invalid login");
    }
}

// Test Cases
loginUser("Sam", true, (message) => console.log(message));
// Expected: "Welcome, Sam!" (after 1 sec)
loginUser("Alex", false, (message) => console.log(message));
// Expected: "Invalid login" (immediately)


/* 
Task 4: Fetch User Data (Promise)  
---------------------------------------
Convert `fetchUserData(shouldFail)` to return a Promise  
If `shouldFail === false`, **resolve after 2 seconds** with `"User data retrieved"`  
If `shouldFail === true`, **reject after 2 seconds** with `"Error fetching user data"`  
*/

function fetchUserData(shouldFail) {
    // Your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!shouldFail) {
                resolve("User data retrived");
            }
            if (shouldFail) {
                reject("Error fetching the user data");
            }
        }, 2000)
    })

}

// Test Cases
fetchUserData(false).then(console.log).catch(console.error);
// Expected: "User data retrieved" (after 2 sec)
fetchUserData(true).then(console.log).catch(console.error);
// Expected: "Error fetching user data" (after 2 sec)


/* 
Task 5: Order Processing (Promise Chain)  
---------------------------------------
Convert `processOrderPromise()` to return a promise chain:  
   Wait **2 sec** → Resolve `"Order received"`  
   Wait **3 sec** → Resolve `"Preparing order"`  
   Wait **1 sec** → Resolve `"Order ready for pickup"`  
*/

function processOrderPromise() {
    // Your code here
    return new Promise((resolve) => {
        setTimeout(() => resolve("Order received"), 2000);
    })
    .then(log => {
        console.log(log);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Preparing order"), 3000);
        })
    })
    .then(log => {
        console.log(log);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Order ready for pickup"), 1000);
        })
    })
}

// Test Case
processOrderPromise().then(console.log);
// Expected: 
// "Order received" (after 2 sec)
// "Preparing order" (after 3 more sec)
// "Order ready for pickup" (after 1 more sec)


/* 
Task 6: API Simulation (Promise)  
---------------------------------------
Convert `getUserProfile(userExists)` into a Promise  
If `userExists === true`, **resolve after 2 sec** with `"User profile loaded"`  
If `userExists === false`, **reject after 2 sec** with `"User not found"`  
*/

function getUserProfile(userExists) {
    // Your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            userExists ? resolve("User profile loaded") : reject("User not found"), 2000)
    })
}

// Test Cases
getUserProfile(true).then(console.log).catch(console.error);
// Expected: "User profile loaded" (after 2 sec)
getUserProfile(false).then(console.log).catch(console.error);
// Expected: "User not found" (after 2 sec)


/* 
Task 7: Fetch User Data (Async/Await)  
---------------------------------------
Convert `fetchUserDataAsync(shouldFail)` to use `async/await`  
If `shouldFail === false`, wait **2 sec** and return `"User data loaded"`  
If `shouldFail === true`, wait **2 sec** and throw `"Failed to fetch data"`  
*/

async function fetchUserDataAsync(shouldFail) {
    // Your code here
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                shouldFail ? reject("Failed to fetch data") : resolve("User data loaded");
            }, 2000)
        })
    } catch (error) {
        console.error("Error:", error)
    }
}

// Test Cases
fetchUserDataAsync(false).then(console.log).catch(console.error);
// Expected: "User data loaded" (after 2 sec)
fetchUserDataAsync(true).then(console.log).catch(console.error);
// Expected: "Failed to fetch data" (after 2 sec)

/* 
Task 8: E-commerce Checkout (Async/Await)  
---------------------------------------
Convert `checkoutCart()` to use `async/await`  
   Wait **1 sec** → `"Checking stock..."`  
   Wait **2 sec** → `"Payment processed"`  
   Wait **1 sec** → `"Order completed!"`  
*/

async function checkoutCart() {
    // Your code here
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Checking stock...");
            resolve();
        }, 1000);
    });
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment processed");
            resolve();
        }, 2000);
    });
    await new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Order compleated!");
            resolve();
        }, 1000)
    })
}

// Test Case
checkoutCart().then(() => console.log("Thanks for shopping!"));
// Expected:
// "Checking stock..." (after 1 sec)
// "Payment processed" (after 2 more sec)
// "Order completed!" (after 1 more sec)
// "Thanks for shopping!" (at the end)


/* 
Task 9: Fetch Product Details (Async/Await)  
---------------------------------------
Convert `fetchProductDetails(hasError)` to use `async/await`  
If `hasError === false`, wait **3 sec** and return `"Product details retrieved"`  
If `hasError === true`, wait **3 sec** and throw `"Error loading product"`  
Use **try/catch** to handle errors  
*/

async function fetchProductDetails(hasError) {
    // Your code here
   try {
   const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            hasError ? reject("Error loading product") : resolve("Product details retrieved")
        }, 3000);
    })
    return result;
   } catch (error) {
        console.error(error);
   }
}

// Test Cases
fetchProductDetails(false).then(console.log).catch(console.error);
// Expected: "Product details retrieved" (after 3 sec)
fetchProductDetails(true).then(console.log).catch(console.error);
// Expected: "Error loading product" (after 3 sec)