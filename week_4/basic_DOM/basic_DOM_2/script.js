/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

const button = document.querySelector('#addFruitBtn');
const input = document.querySelector('#fruitInput');
const output = document.querySelector('#fruitList');

const uppdateFruits = () => {
    const newFruit = document.createElement('li');
    newFruit.textContent = input.value;
    output.appendChild(newFruit);
    input.value = '';
}
button.addEventListener('click', uppdateFruits);