const animalSimple = [
    {name: 'Fox', color: 'black', year: '2020', status: 'looking for food'},
    {name: 'Wolf', color: 'grey', year: '2021', status: 'sleeping'},
    {name: 'Bear', color: 'brown', year: '2012', status: 'looking for adventures'},
    {name: 'Cat', color: 'white', year: '2022', status: 'hunting'},
    {name: 'Dog', color: 'darkgrey', year: '2010', status: 'barking'}
];
console.log(animalSimple.length);
const animalList = document.querySelector('#animalList');
const addAnimalButton = document.querySelector('#addAnimal');
const searchInput = document.querySelector('#searchAnimal');
const sortButton = document.querySelector('#sortAnimals');


const displayAnimals = (animalArray) => {
    animalList.innerHTML = ''; //will clean the ul
    for(const animal of animalArray) {
        const li = document.createElement('li');
        li.textContent = (`${animal.name}, ${animal.color}, ${animal.year}, ${animal.status}`);
        animalList.appendChild(li);
    }
};
const addAnimal = () => {
    const nameInput = document.querySelector('#newAnimalName').value.trim();
    console.log(nameInput);
    animalSimple.push(nameInput);
    displayAnimals(animalSimple);
    console.log(animalSimple);
    document.querySelector('#newAnimalName').value = '';
};
const searchAnimal = () => {
    const searchText = searchInput.value.toLowerCase();
    const  filteredAnimals = animalSimple.filter(animal => animal.name.toLowerCase().includes(searchText));
    console.log(filteredAnimals);
    displayAnimals(filteredAnimals);
};
const filterAnimalByType = () => {
    const selectedType = filterType.value;
    const filteredAnimals = animalSimple.filter(animal => animal.color === selectedType)
    displayAnimals(filteredAnimals);
};
const sortAnimal = () => {
    animalSimple.sort();
    displayAnimals(animalSimple);
}

addAnimalButton.addEventListener('click', addAnimal);
searchInput.addEventListener('input', searchAnimal);
sortButton.addEventListener('click', sortAnimal);
filterType.addEventListener('change', filterAnimalByType);
displayAnimals(animalSimple);