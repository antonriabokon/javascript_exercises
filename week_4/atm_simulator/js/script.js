const pin = 1111; // ATM pin code

// Pincode check function
function login() {
    const enteredPin = Number(document.getElementById("pin").value.trim());
    const logMessage = document.getElementById("loginMessage");
    
    // Test console logs
    console.log(enteredPin);
    console.log(pin);
    
    if (enteredPin === pin) {
      document.getElementById("loginContainer").style.display = "none"; // Hides pincode field
      document.getElementById("atmCont").style.display = "block"; // Shows ATM display
      showMessage("Login successful!"); // showMessage function, defined down below
    } else {
      logMessage.textContent = "Incorrect PIN. Please try again.";
      logMessage.style.color = "blue";
    }
  }
document.getElementById("logBtn").addEventListener("click", login);

let balance = 0; // Start balance

// Function to display messages and error warnings
function showMessage(message) {

  document.getElementById("message").textContent = message;
}

// Function to update and display balance after deposit or withdraw(different from message function)
function displayBalance() {
  document.getElementById("balance").textContent = balance.toFixed(2);
}

// Deposit function
function deposit() {
  const depositAmount = parseFloat(document.getElementById("depositAmount").value);

  // Checking the input 
  if (isNaN(depositAmount) || depositAmount <= 0) {   
    showMessage("Please enter a valid amount.");
    document.getElementById("depositAmount").value = "";
    return;
  }
  // Calculating current balance
  balance += depositAmount;
  displayBalance(); 

  showMessage(`Deposited ${depositAmount.toFixed(2)}!`);
  document.getElementById("depositAmount").value = "";
}
document.getElementById("depBtn").addEventListener("click", deposit);

// Withdraw function
function withdraw() {

  const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);

  // Checking the input
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    showMessage("Please enter a valid amount.");
    document.getElementById("withdrawAmount").value = "";
    return;
  }

  if (withdrawAmount > balance) {
    showMessage("Not enough balance!");
    document.getElementById("withdrawAmount").value = "";
    return;
  }

  // Calculating curent balance
  balance -= withdrawAmount;
  displayBalance(); 

  showMessage(`Withdrew ${withdrawAmount.toFixed(2)}!`);
  document.getElementById("withdrawAmount").value = ""; 
}
document.getElementById("withBtn").addEventListener("click", withdraw);

displayBalance();