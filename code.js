// Add item to cart
let cart = [];

// Function to add an item to the cart
function addToCart(item) {
    cart.push(item);
    console.log(item + " has been added to the cart.");
    console.log("Cart: " + cart);
}

// Example usage:
addToCart("item1"); // Output: "item1 has been added to the cart." "Cart: item1"
addToCart("item2"); // Output: "item2 has been added to the cart." "Cart: item1, item2"


// Function to remove an item from the cart
function removeFromCart(item) {
    var index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
    }
    console.log(item + " has been removed from the cart.");
    console.log("Cart: " + cart);
}

// Function to clear the cart
function clearCart() {
    cart = [];
    console.log("Cart has been cleared.");
}

function displayCartItems(){
    console.log(cart);
    // open a modal or display cart items here
}