const products = [

    { id: 1, name: "Wireless Headphones", price: 59, image: "https://plus.unsplash.com/premium_vector-1736271039744-c202679e307d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Smart Watch", price: 99, image: "https://plus.unsplash.com/premium_vector-1771754596374-7c7555b41f52?q=80&w=758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Gaming Mouse", price: 39, image: "https://plus.unsplash.com/premium_vector-1726330675243-5aaaf12162d6?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Mechanical Keyboard", price: 79, image: "https://plus.unsplash.com/premium_vector-1724320109211-b905afbe0ae6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Bluetooth Speaker", price: 49, image: "https://plus.unsplash.com/premium_vector-1724168400190-f17f604691bc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Laptop Stand", price: 25, image: "https://plus.unsplash.com/premium_vector-1726111903720-e7e727b248a4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "USB-C Hub", price: 35, image: "https://plus.unsplash.com/premium_vector-1724102775071-abb68ad89306?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, name: "Wireless Charger", price: 29, image: "https://plus.unsplash.com/premium_vector-1726111903695-2a87a0448799?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, name: "Portable SSD", price: 120, image: "https://picsum.photos/300?9" },
    { id: 10, name: "Noise Cancelling Earbuds", price: 89, image: "https://picsum.photos/300?10" },

    { id: 11, name: "4K Webcam", price: 75, image: "https://picsum.photos/300?11" },
    { id: 12, name: "Gaming Chair", price: 199, image: "https://picsum.photos/300?12" },
    { id: 13, name: "LED Desk Lamp", price: 32, image: "https://picsum.photos/300?13" },
    { id: 14, name: "Smartphone Gimbal", price: 99, image: "https://picsum.photos/300?14" },
    { id: 15, name: "Power Bank", price: 45, image: "https://picsum.photos/300?15" },
    { id: 16, name: "Action Camera", price: 150, image: "https://picsum.photos/300?16" },
    { id: 17, name: "Smart Home Hub", price: 130, image: "https://picsum.photos/300?17" },
    { id: 18, name: "Fitness Tracker", price: 70, image: "https://images.unsplash.com/vector-1769706443716-3c0dd45d4653?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 19, name: "Gaming Headset", price: 85, image: "https://picsum.photos/300?19" },
    { id: 20, name: "Laptop Backpack", price: 60, image: "https://picsum.photos/300?20" },

    { id: 21, name: "Mini Projector", price: 140, image: "https://picsum.photos/300?21" },
    { id: 22, name: "Tablet Stand", price: 22, image: "https://picsum.photos/300?22" },
    { id: 23, name: "Smart Light Bulb", price: 18, image: "https://picsum.photos/300?23" },
    { id: 24, name: "Drone Camera", price: 299, image: "https://picsum.photos/300?24" },
    { id: 25, name: "VR Headset", price: 249, image: "https://picsum.photos/300?25" },
    { id: 26, name: "Wireless Keyboard", price: 45, image: "https://picsum.photos/300?26" },
    { id: 27, name: "Phone Tripod", price: 20, image: "https://picsum.photos/300?27" },
    { id: 28, name: "USB Flash Drive", price: 15, image: "https://picsum.photos/300?28" },
    { id: 29, name: "Smart Thermostat", price: 180, image: "https://picsum.photos/300?29" },
    { id: 30, name: "Portable Monitor", price: 210, image: "https://picsum.photos/300?30" },

    { id: 31, name: "Bluetooth Adapter", price: 14, image: "https://picsum.photos/300?31" },
    { id: 32, name: "Gaming Controller", price: 65, image: "https://picsum.photos/300?32" },
    { id: 33, name: "External Hard Drive", price: 110, image: "https://picsum.photos/300?33" },
    { id: 34, name: "WiFi Router", price: 90, image: "https://picsum.photos/300?34" },
    { id: 35, name: "Smart Door Lock", price: 220, image: "https://picsum.photos/300?35" },
    { id: 36, name: "LED Strip Lights", price: 30, image: "https://picsum.photos/300?36" },
    { id: 37, name: "Microphone Kit", price: 95, image: "https://picsum.photos/300?37" },
    { id: 38, name: "Smart Scale", price: 55, image: "https://picsum.photos/300?38" },
    { id: 39, name: "Portable Fan", price: 18, image: "https://picsum.photos/300?39" },
    { id: 40, name: "USB Desk Fan", price: 16, image: "https://picsum.photos/300?40" },

    { id: 41, name: "Car Phone Mount", price: 12, image: "https://picsum.photos/300?41" },
    { id: 42, name: "Smart Plug", price: 20, image: "https://picsum.photos/300?42" },
    { id: 43, name: "Laptop Cooling Pad", price: 28, image: "https://picsum.photos/300?43" },
    { id: 44, name: "Graphics Tablet", price: 130, image: "https://picsum.photos/300?44" },
    { id: 45, name: "Wireless Presenter", price: 25, image: "https://picsum.photos/300?45" },
    { id: 46, name: "Digital Alarm Clock", price: 19, image: "https://picsum.photos/300?46" },
    { id: 47, name: "Smart Coffee Mug", price: 60, image: "https://picsum.photos/300?47" },
    { id: 48, name: "Portable Bluetooth Printer", price: 150, image: "https://picsum.photos/300?48" },
    { id: 49, name: "Smart Ring", price: 199, image: "https://picsum.photos/300?49" },
    { id: 50, name: "AI Voice Assistant Speaker", price: 120, image: "https://picsum.photos/300?50" }

];



/* =========================
LOCAL STORAGE CART
========================= */

/* =========================
USER CART KEY
========================= */

function getCartKey() {

    const token = localStorage.getItem("token");

    if (!token) return "cart_guest";

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return "cart_" + payload.id;
    } catch {
        return "cart_guest";
    }

}


/* =========================
GET CART
========================= */

function getCart() {

    const key = getCartKey();
    return JSON.parse(localStorage.getItem(key)) || [];

}


/* =========================
SAVE CART
========================= */

function saveCart(cart) {

    const key = getCartKey();
    localStorage.setItem(key, JSON.stringify(cart));

}


/* =========================
UPDATE CART COUNT
========================= */

function updateCartCount() {

    const count = document.getElementById("cart-count");

    if (!count) return;

    const cart = getCart();
    count.innerText = cart.length;

}


/* =========================
ADD TO CART
========================= */

function addToCart(id) {

    const cart = getCart();

    const product = products.find(p => p.id === id);

    if (!product) return;

    cart.push(product);

    saveCart(cart);

    updateCartCount();

    alert("Product added to cart");

}


/* =========================
REMOVE ITEM
========================= */

function removeItem(index) {

    const cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);

    updateCartCount();

    location.reload();

}


/* =========================
RENDER PRODUCTS
========================= */

function renderProducts(list) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = "";

    list.forEach(product => {

        grid.innerHTML += `

        <div class="product-card">

            <a href="product.html?id=${product.id}">
                <img src="${product.image}">
            </a>

            <h3>${product.name}</h3>

            <p>$${product.price}</p>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>

        </div>

        `;

    });

}


/* =========================
DISPLAY CART ITEMS
========================= */

function renderCart() {

    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    const cart = getCart();
    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty</p>";

        if (totalPrice) totalPrice.innerText = 0;

        return;
    }

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        cartItems.innerHTML += `

        <div class="cart-item">

            <div class="cart-img-text">
                <img src="${item.image}" width="80">

                <div>
                    <h2>${item.name}</h2>
                    <h4>$${item.price}</h4>
                </div>
            </div>

            <button onclick="removeItem(${index})"
            style="padding:10px 16px;background:red;color:white;border:none;border-radius:6px;cursor:pointer;">
            Remove
            </button>

        </div>

        `;

        total += item.price;

    });

    if (totalPrice) totalPrice.innerText = total;

}


/* =========================
SEARCH PRODUCTS
========================= */

function initSearch() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const name = card.querySelector("h3").innerText.toLowerCase();

            card.style.display = name.includes(value) ? "block" : "none";

        });

    });

}


/* =========================
USER PROFILE
========================= */

function showUserProfile(){

    const token = localStorage.getItem("token");

    if(!token) return;

    try{

        const payload = JSON.parse(atob(token.split(".")[1]));

        const loginLink = document.getElementById("loginLink");
        const profileMenu = document.getElementById("profileMenu");
        const usernameDisplay = document.getElementById("usernameDisplay");

        if(loginLink) loginLink.style.display = "none";

        if(profileMenu && usernameDisplay){

            profileMenu.style.display = "block";
            usernameDisplay.innerText = (payload.name || "User").toUpperCase();

        }

    }catch(e){
        console.log("Invalid token");
    }

}


/* =========================
PROFILE TOGGLE
========================= */

function toggleProfile(){

    const dropdown = document.getElementById("profileDropdown");

    if(!dropdown) return;

    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";

}


/* =========================
CLICK OUTSIDE PROFILE
========================= */

document.addEventListener("click", function(e){

    const menu = document.getElementById("profileMenu");
    const dropdown = document.getElementById("profileDropdown");

    if(menu && dropdown && !menu.contains(e.target)){
        dropdown.style.display = "none";
    }

});


/* =========================
PAGE LOAD
========================= */

document.addEventListener("DOMContentLoaded", () => {

    renderProducts(products);
    renderCart();
    updateCartCount();
    showUserProfile();
    initSearch();

});


/* =========================
NAVBAR TOGGLE
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if(menuToggle && navbar){

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

        });

    }

});

