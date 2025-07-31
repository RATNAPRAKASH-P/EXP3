let cart = [];
let cartButton = document.getElementById("cartButton");
let cartModal = document.getElementById("cartModal");
let cartItemsList = document.getElementById("cartItems");
let totalAmount = document.getElementById("totalAmount");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (e) => {
        const productName = e.target.getAttribute("data-product");
        const productPrice = parseFloat(e.target.getAttribute("data-price"));

        // Add product to cart
        cart.push({ name: productName, price: productPrice });
        
        // Update cart button
        cartButton.textContent = `Cart (${cart.length})`;

        // Update total amount
        updateCart();
    });
});

function updateCart() {
    // Clear cart items
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    // Update total amount
    totalAmount.textContent = total.toFixed(2);
}

cartButton.addEventListener("click", () => {
    // Open cart modal
    cartModal.style.display = "flex";
});

document.getElementById("closeCartButton").addEventListener("click", () => {
    // Close cart modal
    cartModal.style.display = "none";
});

document.getElementById("checkoutButton").addEventListener("click", () => {
    alert("Checkout functionality will be added here.");
});
