// Vanilla JavaScript for responsive navigation
document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');

    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

// Handling login form visibility
let loginForm = document.querySelector('.login-form-container');
let navbar = document.querySelector('.header .navbar');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
};

document.addEventListener('mouseup', function (e) {
    if (!loginForm.contains(e.target)) {
        loginForm.classList.remove('active');
    }
});

// JavaScript code to handle the "add to cart" click event
function addToCartClicked() {
    event.preventDefault();
    alert('Item added to cart!');
}

// Function to toggle the like icon
function toggleLike(element) {
    element.classList.toggle('liked');
}

// JavaScript code to handle the form submission
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.querySelector('input[placeholder="Enter customer\'s name"]').value;
    var number = document.querySelector('input[placeholder="Enter customer\'s number"]').value;

    // Show a custom message
    alert('Order placed successfully!\nName: ' + name + '\nNumber: ' + number);

    event.target.reset();
});
