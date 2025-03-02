const animalSimple = [
    {name: 'Fox', color: 'black', year: '2020', status: 'looking for food'},
    {name: 'Wolf', color: 'grey', year: '2021', status: 'sleeping'},
    {name: 'Bear', color: 'brown', year: '2012', status: 'looking for adventures'},
    {name: 'Cat', color: 'white', year: '2022', status: 'hunting'},
    {name: 'Dog', color: 'darkgrey', year: '2010', status: 'barking'}
];
const animalList = document.querySelector('#animalList');
const searchInput = document.querySelector('#searchAnimal');
console.log(animalSimple);

const displayAnimals = () => {
    animalList.innerHTML = '';
    for(let animal of animalSimple) {
        const li = document.createElement('li');
        li.textContent = (`${animal.name}, ${animal.color}, ${animal.year}, ${animal.status}`);
        animalList.appendChild(li);
        console.log(animal);
    }
};

const searchAnimal = () => {
    const searchText = searchInput.value.toLowerCase();
    const  filteredAnimals = animalSimple.filter(animal => animal.name.toLowerCase().includes(searchText));
    console.log(filteredAnimals);
    displayAnimals(filteredAnimals);
};
searchInput.addEventListener('input', searchAnimal);
displayAnimals();