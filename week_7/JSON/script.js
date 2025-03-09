/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here
const student = {
    name: "Lisa",
    age: 30,
    grade: 'B'
}
const studentJson = JSON.stringify(student);
console.log(studentJson);


/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here
const studentConverted = JSON.parse(studentJson);
console.log(studentConverted);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [
    {name: 'Ashley', age: 25, grade: 'A'},
    {name: 'Chris', age: 28, grade: 'B'}
]
const classroomJson = JSON.stringify(classroom);
console.log(classroomJson);


/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
const classroomConverted = JSON.parse(classroomJson);
console.log(classroomConverted);

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here
const weatherReport = {
    temperature: 20,
    humidity: 40,
    conditions: 'Sunny'
}
const weatherJSON = JSON.stringify(weatherReport);
const weatherConverted = JSON.parse(weatherJSON);
console.log(weatherConverted.conditions);


/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
    {title: 'Lord of the Rings', director: 'Peter Jackson', rating: 9},
    {title: 'Alien', director: 'Ridley Scott', rating: 10},
    {title: 'The Matrix', director: 'Wachowski Brothers', rating: 8}
]
const moviesJson = JSON.stringify(movies);
const moviesConverted = JSON.parse(moviesJson);

const moviesDisplay = () => {
    moviesConverted.forEach(movie => {
        if(movie.rating > 8) {
            console.log(movie.title);
        }
    });
}
moviesDisplay();

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here
const moviesFilter = (jsonString) => {
    const moviesStringConverted = JSON.parse(jsonString);
    return moviesStringConverted.filter(movie => movie.rating > 8);
}
console.log(moviesFilter(`[{"title":"Home Alone","rating":"10"}, {"title":"Alien 3", "rating":"6"}]`));


/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here
const shoppingCart = {
    items: [{
        name:'Apple',
        price: 10
    },
    {
        name: 'Milk',
        price: 8
    }]
};
const shoppingCartJson = JSON.stringify(shoppingCart);
console.log(shoppingCartJson);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here
const totalCartValue = (jsonStringTwo) => {
    const shoppingCartConverted = JSON.parse(jsonStringTwo);
    return shoppingCartConverted.reduce((a, b) => a + b.price, 0);
}
console.log(totalCartValue(`[{"item":"Banana","price":5},{"item":"chocolate","price":6}]`));


/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here
const gameProgress = {
    levle: 5,
    score: 25,
    livesRemaining: 2
}
const gameData = JSON.stringify(gameProgress);
console.log(gameData);
const scoreUpdate = () => {
    const gameDataConverted = JSON.parse(gameData);
    gameDataConverted.score += 5;
    console.log(gameDataConverted);
}
scoreUpdate();