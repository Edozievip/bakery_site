// Toggle menu visibility
document.getElementById("toggleMenu").addEventListener("click", function() {
    var menuSection = document.getElementById("menu");
    if (menuSection.style.display === "none" || menuSection.style.display === "") {
        menuSection.style.display = "block";
    } else {
        menuSection.style.display = "none";
    }
});

// Feedback form submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var feedback = document.getElementById("feedback").value;
    var feedbackMessage = document.getElementById("feedbackMessage");

    if (feedback) {
        feedbackMessage.textContent = "Thank you for your feedback!";
        feedbackMessage.style.color = "green";
        document.getElementById("feedback").value = ""; // Clear input field
    } else {
        feedbackMessage.textContent = "Please provide feedback!";
        feedbackMessage.style.color = "red";
    }
});
