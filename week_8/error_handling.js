'use strict';

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/

function task1() {
    // Your code here
    try { 
        return testFunction();
     } catch(error) {
        console.error(`Error caught: ${error.message}`);
     }
}
task1();


/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
    // Your code here
    try {
        console.log(num);
    } catch (error){
        console.error(`ReferenceError caught: ${error.message}'`)
    }
}
task2();


/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/

function task3() {
    // Your code here
    try{
        return testThree();
    } catch (error) {
        console.error(error.message);
    } finally{
        console.log('Task completed');
    }
}
task3();


/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
    // Your code here
    try {
      const test = JSON.parse(jsonString);
      console.log(test);
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
console.log(parseJSON('{"name": Alice", "age": 25}'));


/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
    // Your code here
    if (age < 18) {
        throw new Error('Error: You must be at least 18.');
    }
    console.log('Access granted');
    try {
        checkAge(17);
    } catch (error) {
        console.error(error.message);
    }
}


/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    try {
        const storedValue = JSON.parse(localStorage.getItem('user'));   
        return storedValue;
    } catch (error) {
        console.error("Error retrieving user data:", error.message);
        return null;
    }
}
// Test cases
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return { name: "Alice", age: 25 }

localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser());  // Should log an error and return null


/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
    // Your code here
    try {
        if(!obj.hasOwnProperty(key)) {
            throw new Error('Property not found!');
        }
        console.log(obj[key]);
    } catch (error) {
        console.error(`Alarm, alarm: ${error.message}`);
    }
}
checkProperty({ name: "Bob", age: 30 }, "name");
checkProperty({ name: "Bob", age: 30 }, "email");


/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

async function fetchData(url) {
    // Your code here
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error


/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function task9(malformedURI) {
    // Your code here
    try {
        const decodedUrl = decodeURIComponent(malformedURI);
        console.log(decodedUrl);
    } catch (error) {
        console.error(`Alarm, alarm ${error.message}`);
    }
}
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError


/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
    // Your code here
    try {
        if (localStorage.length > 0) {
            console.log(`Local storage is not empty and needs to be cleared! 
                ${localStorage.length} item${localStorage.length > 1 ? 's are' : 'is'} inside!`);
        }
        if (confirm('Are you sure you want to clear local storage?')) {
        localStorage.clear();
        console.log('Local storage is empty!');
        }
    } catch (error) {
        console.error(`Alarm, alarm!!! ${error.message}`);
    }
}
clearStorage();