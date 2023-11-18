$(document).ready(function(){
    // Add active class to the current link in the navigation
    $('nav a').on('click', function(){
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function(){
    // Toggle responsive navigation menu
    $('.navbar').on('click', function(){
        $('nav').toggleClass('active');
    });
});
$(document).ready(function(){
    // Toggle login form visibility
    $('#login-btn').on('click', function(){
        $('.login-form').toggle();
    });
});
function toggleLike(element) {
    element.classList.toggle('liked');
}
document.addEventListener('DOMContentLoaded', function () {
    // Selecting the elements
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');

    // Adding click event to menu button
    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});