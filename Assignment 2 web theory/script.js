window.onload = function() {
    alert("Welcome to the Laptop Shop!");
    displayCurrentDateTime();
};

let messages = [
    "Thanks for visiting our website! I hope you like our selection!",
    "Explore our latest laptop deals and offers!",
    "Check out our best-selling laptops today!",
    "Your perfect laptop awaits you!"
];
let currentIndex = 0;

document.getElementById('changeTextBtn').addEventListener('click', function() {
    
    currentIndex = (currentIndex + 1) % messages.length; 
    document.getElementById('dynamicText').innerText = messages[currentIndex];
});

function displayCurrentDateTime() {
    var now = new Date();
    var formattedDate = now.toLocaleString();
    document.getElementById('currentDateTime').innerText = "Current Date and Time: " + formattedDate;
}

$(document).ready(function() {
    $("nav ul li a").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    $(".product-card").hover(
        function() {
            $(this).css("background-color", "#ffdd57");
        }, 
        function() {
            $(this).css("background-color", "white");
        }
    );

    $(".toggleDescriptionBtn").click(function() {
        $(this).next(".productDescription").toggle(500);
    });
});
