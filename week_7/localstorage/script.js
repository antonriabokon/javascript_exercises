/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here
const message = 'Hello, LocalStorage!';
localStorage.setItem('message', 'Hello, LocalStorage');
const revievedData = localStorage.getItem('message');
console.log(revievedData);


/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here
const userSettings = {
    theme: 'dark',
    lenguage: 'English'
}
localStorage.setItem('userSettings', JSON.stringify(userSettings));
const downloadedData = JSON.parse(localStorage.getItem('userSettings'));
console.log(downloadedData.theme);


/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here
const favoriteBooks = [
    {title: 'A Story of Yesterday', author: 'Sergio Cobo'},
    {title: 'To Kill a Mockingbird', author: 'Lee Harper'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald'}
]
localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
const getLibraryBack = JSON.parse(localStorage.getItem('favoriteBooks'));
console.log(getLibraryBack.map(book => book.title).join(', '));


/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here
const saveToLocalStorage = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object));
    const loadSave = JSON.parse(localStorage.getItem('user'));
    console.log(Object.values(loadSave).join());
};
saveToLocalStorage('user', {name: 'Casandra'});


/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here
const testValue = {name: 'Milana'};
localStorage.setItem('test', JSON.stringify(testValue));

function getFromLocalStorage(key) {
    const getValueBack = localStorage.getItem(key);
    try {
        JSON.parse(getValueBack);
        return console.log(JSON.parse(getValueBack));
    } catch(error) {
        return console.log('Alert, not a JSON');
    }
}
getFromLocalStorage('test');


/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here
const userProfile = {
    username: 'Indigo',
    email: 'e@email.com',
    preferences: {
        theme: 'light mode',
        notifications: false
    }
}
localStorage.setItem('userOne', JSON.stringify(userProfile));
const loadUserProfile = JSON.parse(localStorage.getItem('userOne'));
loadUserProfile.preferences.theme = 'dark mode';
console.log(loadUserProfile);


/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here
const shoppingList = {
    items: ['orange', 'milk', 'sugar']
}
localStorage.setItem('list', JSON.stringify(shoppingList));

const addItemToList = (item) => {
    const listBack = JSON.parse(localStorage.getItem('list'));
    listBack.items.push(item);
    localStorage.setItem('list', JSON.stringify(listBack));
    console.log(listBack);
}
addItemToList('honey');


/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here
const counter = {
    count: 0
}
localStorage.setItem('counter', JSON.stringify(counter));
const incrementCounter =() => {
    const counterBack = JSON.parse(localStorage.getItem('counter'));
    counterBack.count++;
    localStorage.setItem('counter', JSON.stringify(counterBack));
    console.log(counterBack);
}
incrementCounter();


/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here
const tasks = [
    {id: 101, description: 'exerciseOne', completed: true},
    {id: 102, description: 'exerciseTwo', completed: false},
    {id: 103, description: 'exerciseThree', completed: false}
]
localStorage.setItem('exercises', JSON.stringify(tasks));

function markTaskComplete(taskId) {
    const taskBack = JSON.parse(localStorage.getItem('exercises'));
    const updateTasks = taskBack.find(task => task.id === taskId);
    updateTasks.completed = true;
    localStorage.setItem('exercises', JSON.stringify(updateTasks));
    console.log(updateTasks);
}
markTaskComplete(102);


/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
function clearLocalStorage() {
    localStorage.clear();
    console.log(`Local storage is empty, data objects stored inside: ${localStorage.length}`);
}
clearLocalStorage();