const pin = 1111;

function login() {
    const enteredPin = Number(document.getElementById("pin").value.trim());
    const logMessage = document.getElementById("loginMessage");
    console.log(enteredPin);
    console.log(pin);
  
    if (enteredPin === pin) {
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("atmCont").style.display = "block";
      showMessage("Login successful!");
    } else {
      logMessage.textContent = "Incorrect PIN. Please try again.";
      logMessage.style.color = "blue";
    }
  }
document.getElementById("logBtn").addEventListener("click", login);

let balance = 0;

function displayBalance() {
  document.getElementById("balance").textContent = balance.toFixed(2);
}

function deposit() {
  const depositAmount = parseFloat(document.getElementById("depositAmount").value);

 
  if (isNaN(depositAmount) || depositAmount <= 0) {
    showMessage("Please enter a valid amount.");
    document.getElementById("depositAmount").value = "";
    return;
  }


  balance += depositAmount;
  displayBalance(); 

  showMessage(`Deposited ${depositAmount.toFixed(2)}!`);
  document.getElementById("depositAmount").value = "";
}


function withdraw() {

  const withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);

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


  balance -= withdrawAmount;
  displayBalance(); 


  showMessage(`Withdrew ${withdrawAmount.toFixed(2)}!`);
  document.getElementById("withdrawAmount").value = "";
}


function showMessage(message) {

  document.getElementById("message").textContent = message;
}


document.getElementById("depBtn").addEventListener("click", deposit);
document.getElementById("withBtn").addEventListener("click", withdraw);


displayBalance();