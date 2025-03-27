const form = document.getElementById("pancakeForm");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPrice = document.getElementById("totalPrice");
const orderSummary = document.getElementById("summaryText");

// Creating arrays for toppings and extras
let selectedToppings = [];
let selectedExtras = [];

// Listener for the form changes
form.addEventListener("change", updateOrder);
document.getElementById("seeOrder").addEventListener("click", displayOrderSummary);


// Function to update order
function updateOrder() {
    const pancakeType = document.querySelector("#type");
    const selectedPancake = pancakeType.options[pancakeType.selectedIndex];
    let totalPriceValue = parseFloat(selectedPancake.dataset.price);

    selectedToppings.length = 0;
    selectedExtras.length = 0;

    document.querySelectorAll(".topping:checked").forEach(topping => {
        selectedToppings.push(topping.parentElement.textContent.trim());
    });
    totalPriceValue += selectedToppings.length * 1;

    document.querySelectorAll(".extra:checked").forEach(extra => {
        selectedExtras.push({
            name: extra.parentElement.textContent.trim(),
            price: parseFloat(extra.dataset.price)
        });
    });
    totalPriceValue += selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

    const selectedDelivery = document.querySelector(".delivery:checked");
    totalPriceValue += parseFloat(selectedDelivery.dataset.price);

    totalPrice.textContent = `${totalPriceValue}€`;
    totalPriceDisplay.textContent = `${totalPriceValue}€`;

    const priceBanner = document.querySelector(".price-banner");
    priceBanner.classList.add("fade-in");
    setTimeout(() => priceBanner.classList.remove("fade-in"), 500);
}
// Displaying order function
function displayOrderSummary() {
    const customerName = document.getElementById("customerName").value || "Guest";
    const selectedPancake = document.querySelector("#type option:checked").textContent;
    const selectedDelivery = document.querySelector(".delivery:checked").parentElement.textContent.trim();

    orderSummary.textContent = `
    Name: ${customerName}
    Pancake: ${selectedPancake}
    Toppings: ${selectedToppings.length ? selectedToppings.join(", ") : "None"}
    Extras: ${selectedExtras.length ? selectedExtras.map(e => e.name).join(", ") : "None"}
    Delivery: ${selectedDelivery}
    Total Price: ${totalPrice.textContent}   
    `;
}

updateOrder();

// Add transition button to the second page
document.getElementById("orders").addEventListener("click", function () {
    window.location.href = "orders.html";
});

// Order confirmation function and create unique id
document.getElementById("confirmOrder").addEventListener("click", function () {
    let order = {
        id: Date.now(),
        customerName: document.getElementById("customerName").value.trim(),
        selectedPancake: document.getElementById("type").value,
        toppings: [...document.querySelectorAll(".topping:checked")].map(t => t.parentElement.textContent),
        extras: [...document.querySelectorAll(".extra:checked")].map(e => e.parentElement.textContent),
        deliveryMethod: document.querySelector(".delivery:checked").parentElement.textContent,
        totalPrice: document.getElementById("totalPrice").textContent,
        status: "waiting"
    };

    // Get existing orders or create a new array
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add new order to the array
    orders.push(order);

    // Save updated orders to localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    console.log("Order saved:", order);
});