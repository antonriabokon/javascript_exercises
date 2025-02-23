const pancakeType = document.getElementById('type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.getElementById('totalPriceDisplay');
const totalPrice = document.getElementById('totalPrice'); 

pancakeType.addEventListener('change', updateTotalPrice);

toppings.forEach(topping => {
  topping.addEventListener('change', updateTotalPrice);
});

extras.forEach(extra => {
  extra.addEventListener('change', updateTotalPrice);
});

function updateTotalPrice() {
  const selectedPancakeType = pancakeType.value;
  let totalPriceValue = parseFloat(selectedPancakeType) || 0; 
  console.log(totalPriceValue);

  toppings.forEach(topping => {
    if (topping.checked) {
      totalPriceValue += parseFloat(topping.value);
    }
  });

  extras.forEach(extra => {
    if (extra.checked) {
      totalPriceValue += parseFloat(extra.value);
    }
  });


  totalPrice.textContent = `${totalPriceValue}€`; 
  totalPriceDisplay.textContent = `${totalPriceValue}€`; 

  const priceBanner = document.querySelector('.price-banner');
  priceBanner.classList.add('fade-in');

  // Remove fade class after animation ends (to allow re-triggering)
  setTimeout(() => {
    priceBanner.classList.remove('fade-in');
  }, 500);
}

updateTotalPrice();