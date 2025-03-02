/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
const weather = {
    temperature: -31,
    humidity: 20,
    condition: 'Rainy'
};
const weatherCheck = () => {
    const condOutside = weather.condition === 'Rainy' ? `"Take an umbrella!"` : null;
    console.log(condOutside);
};
weatherCheck();


/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here
const shoppingCart = [
    {
        name: 'Milk',
        price: 5,
        quantity: 1
    },
    {
        name: 'Bear',
        price: 6,
        quantity: 2
    },
    {
        name: 'Juice',
        price: 2,
        quantity: 3
    }];
function calculation () {
    let sum = 0;
    for(let i = 0; i < shoppingCart.length; i++) {
        sum += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    console.log(sum);
};
calculation();


/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here
const restaurants = [
    {name: 'BigSwenie', cuisineType: 'national', rating: 3},
    {name: 'SmallTom', cuisineType: 'international', rating: 2},
    {name: 'JoelsSwamp', cuisineType: 'interesting', rating: 9}
];
const ratingIn = () => {
    const bestRest = restaurants.filter(r => r.rating > 8).map(n => n.name);
    console.log(bestRest.join());
};
ratingIn();


/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here
const bankAccount = {
    accountHolder: 'J.Miller',
    balance: 15899,
    transactions: [355, 655, 799]
};
const updatedBalance = () => {
    let sum = 0;
    for(let i = 0; i < bankAccount.transactions.length; i++) {
        sum += bankAccount.transactions[i];
    }
    const finalBalance = bankAccount.balance - sum;
    console.log(finalBalance);
};
updatedBalance();

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here
const students = [
    {
        name: 'Lara',
        scores:[50, 60],
        averageScore: null
    },
    {
        name: 'Tina',
        scores:[55, 65],
        averageScore: null
    },
    {
        name: 'Jill',
        scores:[45, 75],
        averageScore: null
    }
];
function scoreUpdate () {
    students.forEach(student => {
        student.averageScore = student.scores.reduce((a, b) => a +b, 0) 
        / student.scores.length;
        console.log(`${student.name} - averageScore: ${student.averageScore}`);
    })
};
scoreUpdate();


/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here
const courses = [
    {
        courseName: 'Swenska',
        instructor: 'L.Raley',
        studentsEnrolled: 31
    },
    {
        courseName: 'English',
        instructor: 'J.Martin',
        studentsEnrolled: 26
    },
    {
        courseName: 'Suomi',
        instructor: 'K.Linder',
        studentsEnrolled: 32
    },
];
function logCourse () {
    const logInfo = courses.filter(num => num.studentsEnrolled > 30)
    .map(name => name.courseName);
    console.log(logInfo.join());
};
logCourse ();

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here
const pet = [
    {
        species: 'Vulpes vulpes',
        name: 'Gloria',
        isVaccinated: true
    },
    {
        species: 'Felis catus',
        name: 'Sentinel',
        isVaccinated: true
    },
    {
        species: 'Canis lupus',
        name: 'Maestro',
        isVaccinated: false
    },
];
function vaccinationCheck () {
    const offender = pet.filter(p => !p.isVaccinated).map(n => n.name);
    console.log(`'Attention, offender detected!!! ${offender} - "Vaccination required!"'`);
};
vaccinationCheck();

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here
const city = {
    name: 'New York',
    population: 8258000,
    landmark: 'The Empire State Building'
};
const cityPopulation = () => {
    if(city.population > 1000000) {
        console.log(`"This is a big city!"`);
    }
};
cityPopulation();


/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here
const transactions = [
    {
        type: 'credit',
        amount: 1000
    },
    {
        type: 'debit',
        amount: 1000
    },
    {
        type: 'debit',
        amount: 1000
    },
];
function balanceCalculation () {
    let balance = 0;
    for(let i = 0; i < transactions.length; i++) {
        if(transactions[i].type === 'credit') {
            balance += transactions[i].amount;
        }else if (transactions[i].type === 'debit') {
            balance -= transactions[i].amount;
        }
    }
    console.log(balance);
};
balanceCalculation();

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here
const foxPack = [
    {
        name: 'Rudolf',
        age: 176,
        furColor: 'greyAlready, poor old foxie'
    },
    {
        name: 'Cassiopeia',
        age: 1,
        furColor: 'redLikeSun'
    },
    {
        name: 'Princess Leia',
        age: 7,
        furColor: 'lightOrange'
    } 
];
function findTheKid () {
    const baby = foxPack.filter(b => b.age < 2).map(n => n.name);
    console.log(`Finally we have found you, our sweet ${baby}!`)
};
findTheKid();

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here
const gameCharacter = {
    name: 'Bulbasaur',
    level: 99,
    health: 100,
    inventory: ['Crystal Sword', 'First Aid kit', 'Molecular Uncoupler', 'One Orange']
};
function whatDoYouHaveInYourInventoryBulbasaurQuicklySayThat () {
    console.log(...gameCharacter.inventory);
};
whatDoYouHaveInYourInventoryBulbasaurQuicklySayThat();

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here
const emploees = [
    {
        name: 'Freddy Krueger',
        role: 'Serial killer',
        workingHours: 35
    },
    {
        name: 'Alien',
        role: 'Perfect killing machine',
        workingHours: 100000000
    },
    {
        name: 'Pippi Långstrump',
        role: 'Fictional main character',
        workingHours: 0
    }
];
const notLookingForLazyOne = () => {
    const letsFindItOut = emploees.filter(work => work.workingHours > 40).map(n => n.name);
    console.log(`'Aaaaaaa, ${letsFindItOut} is comiiing for usss! GO!GO!GO!'`);
};
notLookingForLazyOne();


/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here
const musicAlbums = [
    {
        title: 'The Eminem Show',
        artist: 'Eminem',
        releaseYear: 2002
    },
    {
        title: 'The Fox(What Does the Fox Say?)',
        artist: 'Ylvis',
        releaseYear: 2013
    },
    {
        title: 'Sinatra at the Sands',
        artist: 'Frank Sinatra',
        releaseYear: 1966
    },
];
function whatWasReleasedBeforeTheMillenium() {
    const album = musicAlbums.filter(a => a.releaseYear < 2000).map(t => t.title);
    console.log(album.join());
};
whatWasReleasedBeforeTheMillenium();


/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here
const cars = [
    {brand: "The Flintstones' Flintmobile", model: 'Bum-bum,bang-bang', horsepower: 2000000000},
    {brand: 'Batmobile', model: 'Gotham City Thunderstorm One', horsepower: 10000},
    {brand: 'Lightning McQueen', model: 'Try to stop me, kido', horsepower: 15000}
];
function ladysAndGentelmenLetsFindOutTheFastestPapPapBuggyGrandmothersWagon() {
    const horslessCarrige = cars.reduce((oldOne, newOne) => 
        newOne.horsepower > oldOne.horsepower ? newOne : oldOne);
    console.log(horslessCarrige);
};
ladysAndGentelmenLetsFindOutTheFastestPapPapBuggyGrandmothersWagon();


/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
const airports = [
    {
        name: 'Heathrow Airport',
        country: 'The United Kindom',
        flightPerDay: 1000
    },
    {
        name: 'John F. Kennedy International Airport',
        country: 'USA',
        flightPerDay: 4000
    },
    {
        name: 'Frankfurt Airport',
        country: 'Germany',
        flightPerDay: 3000
    }
];
function flightAmount () {
    const amount = airports.reduce((smallest, biggest) => biggest.flightPerDay > 
    smallest.flightPerDay ? biggest : smallest);
    console.log(amount);
};
flightAmount();