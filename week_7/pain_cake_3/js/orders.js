const ordersContainer = document.getElementById("ordersTable");
const searchBox = document.getElementById("searchBox");
const removeDeliveredBtn = document.getElementById("removeDelivered");
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function displayOrders() {
    ordersContainer.textContent = ""; // Clear previous content

    // Sort orders: "waiting" first
    const sortedOrders = [...orders].sort((a, b) => a.status === "waiting" ? -1 : 1);

    sortedOrders.forEach(order => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = order.id;

        const nameCell = document.createElement("td");
        nameCell.textContent = order.customerName;

        const pancakeCell = document.createElement("td");
        pancakeCell.textContent = order.selectedPancake;

        const toppingsCell = document.createElement("td");
        toppingsCell.textContent = order.toppings.length ? order.toppings.join(", ") : "None";

        const extrasCell = document.createElement("td");
        extrasCell.textContent = order.extras.length ? order.extras.join(", ") : "None";

        const deliveryCell = document.createElement("td");
        deliveryCell.textContent = order.deliveryMethod;

        const priceCell = document.createElement("td");
        priceCell.textContent = order.totalPrice + "€";

        // Status dropdown
        const statusCell = document.createElement("td");
        const statusDropdown = document.createElement("select");
        statusDropdown.className = `statusDropdown ${order.status}`;
        statusDropdown.dataset.id = order.id;

        ["waiting", "ready", "delivered"].forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
            if (order.status === status) option.selected = true;
            statusDropdown.appendChild(option);
        });

        statusDropdown.addEventListener("change", updateOrderStatus);
        statusCell.appendChild(statusDropdown);

        // Append all cells to row
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(pancakeCell);
        row.appendChild(toppingsCell);
        row.appendChild(extrasCell);
        row.appendChild(deliveryCell);
        row.appendChild(priceCell);
        row.appendChild(statusCell);

        ordersContainer.appendChild(row);
    });
}

function updateOrderStatus(event) {
    const orderId = event.target.dataset.id;
    const newStatus = event.target.value;

    orders = orders.map(order =>
        order.id == orderId ? { ...order, status: newStatus } : order
    );

    localStorage.setItem("orders", JSON.stringify(orders));
    displayOrders(); // Refresh the table
}

// Search orders by ID or Customer Name
searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();

    const filteredOrders = orders.filter(order =>
        order.id.toString().includes(searchTerm) ||
        order.customerName.toLowerCase().includes(searchTerm)
    );

    ordersContainer.textContent = ""; // Clear existing content

    filteredOrders.forEach(order => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = order.id;

        const nameCell = document.createElement("td");
        nameCell.textContent = order.customerName;

        const pancakeCell = document.createElement("td");
        pancakeCell.textContent = order.selectedPancake;

        const toppingsCell = document.createElement("td");
        toppingsCell.textContent = order.toppings.length ? order.toppings.join(", ") : "None";

        const extrasCell = document.createElement("td");
        extrasCell.textContent = order.extras.length ? order.extras.join(", ") : "None";

        const deliveryCell = document.createElement("td");
        deliveryCell.textContent = order.deliveryMethod;

        const priceCell = document.createElement("td");
        priceCell.textContent = order.totalPrice + "€";

        // Status dropdown
        const statusCell = document.createElement("td");
        const statusDropdown = document.createElement("select");
        statusDropdown.className = `statusDropdown ${order.status}`;
        statusDropdown.dataset.id = order.id;

        ["waiting", "ready", "delivered"].forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
            if (order.status === status) option.selected = true;
            statusDropdown.appendChild(option);
        });

        statusDropdown.addEventListener("change", updateOrderStatus);
        statusCell.appendChild(statusDropdown);

        // Append all cells to row
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(pancakeCell);
        row.appendChild(toppingsCell);
        row.appendChild(extrasCell);
        row.appendChild(deliveryCell);
        row.appendChild(priceCell);
        row.appendChild(statusCell);

        ordersContainer.appendChild(row);
    });
});

// Remove delivered orders
removeDeliveredBtn.addEventListener("click", () => {
    orders = orders.filter(order => order.status !== "delivered");
    localStorage.setItem("orders", JSON.stringify(orders));
    // Refresh the table
    displayOrders();
});

displayOrders();