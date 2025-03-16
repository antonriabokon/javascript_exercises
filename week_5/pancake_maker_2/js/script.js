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



function updateOrder() {
    const pancakeType = document.querySelector("#type");
    const selectedPancake = pancakeType.options[pancakeType.selectedIndex];
    let totalPriceValue = parseFloat(selectedPancake.dataset.price);

// Adding toppings in array
let selectedToppings = [];
document.querySelectorAll(".topping:checked").forEach(topping => {
    selectedToppings.push(topping.parentElement.textContent.trim());
});
totalPriceValue += selectedToppings.length * 1;

// Adding extras in an array
let selectedExtras = [];
document.querySelectorAll(".extra:checked").forEach(extra => {
    selectedExtras.push({
        name: extra.parentElement.textContent.trim(),
        price: parseFloat(extra.dataset.price)
    });
});
totalPriceValue += selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

    // Updating a selected delivery option
    const selectedDelivery = document.querySelector(".delivery:checked");
    totalPriceValue += parseFloat(selectedDelivery.dataset.price);

    // Updating displayed price
    totalPrice.textContent = `${totalPriceValue}€`;
    totalPriceDisplay.textContent = `${totalPriceValue}€`;

    // Animation on price update
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