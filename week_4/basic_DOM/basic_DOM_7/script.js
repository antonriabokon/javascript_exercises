/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

let count = 0;

document.getElementById("mainBtn").onclick = function() {
    count++;
    document.getElementById("count").textContent = count;
};