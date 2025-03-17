/* Task 6: Create Your Own
Write a function that receives a `car` object and logs the `brand` and `year`.
Test with `{ brand: "Toyota", year: 2020 }`.
*/

// Write your code here
function carFactory(car) {
    const {brand, year} = car;
    console.log( `${brand}, ${year}`);
}
carFactory({brand: "BMW", year:1992});