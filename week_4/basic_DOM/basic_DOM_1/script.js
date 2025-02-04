/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const element = document.getElementById('content');
const button = document.getElementById('btnOne');

const textChange = () => {
    element.textContent = 'Hello, World!'
};
button.addEventListener('click', textChange);