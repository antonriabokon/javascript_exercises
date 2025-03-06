document.addEventListener("DOMContentLoaded", function () {
    const pancakeForm = document.getElementById("pancakeForm");
    const totalPriceDisplay = document.getElementById("totalPriceDisplay");
    const totalPriceBanner = document.getElementById("totalPrice");
    const priceBannerContainer = document.querySelector(".price-banner");
    const orderSummary = document.getElementById("summaryText");
    const seeOrderButton = document.getElementById("seeOrder");

    function updateTotal() {
        let total = 0;
        let summary = [];

        const pancakeType = document.getElementById("type");
        const selectedPancake = pancakeType.options[pancakeType.selectedIndex];
        total += parseInt(selectedPancake.getAttribute("data-price"));
        summary.push(`Pancake: ${selectedPancake.text}`);

        document.querySelectorAll(".topping:checked").forEach(topping => {
            total += parseInt(topping.getAttribute("data-price"));
            summary.push(`Topping: ${topping.parentElement.textContent.trim()}`);
        });

        document.querySelectorAll(".extra:checked").forEach(extra => {
            total += parseInt(extra.getAttribute("data-price"));
            summary.push(`Extra: ${extra.parentElement.textContent.trim()}`);
        });

        const delivery = document.querySelector(".delivery:checked");
        total += parseInt(delivery.getAttribute("data-price"));
        summary.push(`Delivery: ${delivery.parentElement.textContent.trim()}`);

        totalPriceDisplay.textContent = `${total}€`;
        totalPriceBanner.textContent = `${total}€`;

        priceBannerContainer.classList.remove("fade-in");
        void priceBannerContainer.offsetWidth;
        priceBannerContainer.classList.add("fade-in");

        return summary;
    }

    function showOrderSummary() {
        const summary = updateTotal();
        orderSummary.innerHTML = summary.length > 0 ? summary.join("<br>") : "No items selected.";
    }

    pancakeForm.addEventListener("change", updateTotal);
    seeOrderButton.addEventListener("click", showOrderSummary);

    updateTotal();
});