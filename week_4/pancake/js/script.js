const pancakeType = document.getElementById('type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.getElementById('totalPriceDisplay');
const totalPrice = document.getElementById('totalPrice'); 

// Adding listener to the pancake selector
pancakeType.addEventListener('change', updateTotalPrice);

// Adding listener to the toppings
toppings.forEach(topping => {
  topping.addEventListener('change', updateTotalPrice);
});

// Adding listner to the extras
extras.forEach(extra => {
  extra.addEventListener('change', updateTotalPrice);
});

// Defining the function to calculate and update any changes
function updateTotalPrice() {
  const selectedPancakeType = pancakeType.value;
  let totalPriceValue = parseFloat(selectedPancakeType); 
  console.log(totalPriceValue);

  // Adding toppings if checked 
  toppings.forEach(topping => {
    if (topping.checked) {
      totalPriceValue += parseFloat(topping.value);
      console.log(totalPriceValue);
    }
  });

  // Adding extras if checked
  extras.forEach(extra => {
    if (extra.checked) {
      totalPriceValue += parseFloat(extra.value);
      console.log(totalPriceValue);
    }
  });

  console.log(totalPriceValue);
  
  // Updating prices on the web page
  totalPrice.textContent = `${totalPriceValue}€`; 
  totalPriceDisplay.textContent = `${totalPriceValue}€`; 

  // Animation, price-banner on price change
  const priceBanner = document.querySelector('.price-banner'); 
  priceBanner.classList.add('fade-in');

  setTimeout(() => {
    priceBanner.classList.remove('fade-in');
  }, 500);
}

updateTotalPrice();