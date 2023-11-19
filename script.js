$(document).ready(function () {
    // Add active class to the current link in the navigation
    $('nav a').on('click', function () {
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });

    // Toggle responsive navigation menu
    $('.navbar').on('click', function () {
        $('nav').toggleClass('active');
    });

    function toggleLike(element) {
        element.classList.toggle('liked');
    }

    // Selecting the elements
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');
    let loginForm = document.querySelector('.login-form-container');

    // Adding click event to menu button
    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
        navbar.classList.remove('active');
    };
});
