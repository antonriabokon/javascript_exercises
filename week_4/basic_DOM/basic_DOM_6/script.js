/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

document.getElementById("applicationForm").onsubmit = function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        event.inputError();
        document.getElementById("error").style.display = "block";
    }
}