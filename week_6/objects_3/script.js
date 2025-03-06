/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function User(username, email) {
    this.username = username;
    this.email = email;
    this.showInfo = function() {
        console.log(`${this.username}, ${this.email}`);
    }
};
const userOne = new User('Lea', 'email@gmail.com');
userOne.showInfo();


/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here
class UserTwo {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        }  
        changeEmail(newEmail) {
        this.email=newEmail;  
    }
};
const userTwo = new UserTwo('Maria', 'maria@gmail.com');
userTwo.changeEmail('marry@gmail.com');
console.log(userTwo);


/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here
const theme = {
    name: 'dark',
    isActive: true,
    triggeredButton() {
        this.name = this.name === 'light' ? 'dark' : 'light'; 
        this.isActive = !this.isActive;
    }
};
const button = document.querySelector('#btn');
button.addEventListener('click', function () {
    theme.triggeredButton();
    console.log(theme);
});


/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

const counter = {
    value: 0
};

const buttonTwo = document.querySelector('#btnTwo');
const buttonThree = document.querySelector('#btnThree');
const valueDisplay = document.querySelector('#valueDisplay');

buttonTwo.addEventListener('click', function () {
    counter.value++;
    valueDisplay.textContent = counter.value;
    console.log(counter.value); 
});
buttonThree.addEventListener('click', function() {
    counter.value--;
    valueDisplay.textContent = counter.value;
    console.log(counter.value);
});


/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here
const product = {
    name: "Dutch babies(It's a dish :) )",
    price: 10,
    quantity: 0
};

const input = document.querySelector('#input');

input.addEventListener('input', (event) => {
    document.querySelector('#liveOut').textContent =
    event.target.value;
    product.quantity = event.target.value;
    console.log(product.quantity);
});


/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here
class Task {
    constructor(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}
const tasks = [];

const buttonFour = document.querySelector('#btnFour');
const outputText = document.querySelector('#txtOut');
buttonFour.addEventListener('click', () => {
    const taskOne = new Task('English', 'Do your classes', true);
    tasks.push(taskOne);
    console.log(tasks);
    outputText.textContent = JSON.stringify(tasks, null, 1); 
});


/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here
const weatherApp = {
    city:'',
    temperature: '',
    async fetchWeather(city) {
        

    }
}

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here