// Waits for the HTML document to fully load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // Select elements for the Hamburger Menu
    const hamburger = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    // Select elements for the Appointment Modal
    const appointmentBtn = document.getElementById("appointment-btn");
    const modal = document.getElementById("appointment-modal");
    const closeModal = document.getElementById("close-modal");

    // Select elements for the Newsletter Form
    const subscribeForm = document.getElementById("subscribe-form");
    const statusMsg = document.getElementById("subscribe-status");

    // --- HAMBURGER INTERACTION ---
    // Opens or closes the navigation drawer menu on small screens
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Closes mobile menu drawer automatically when any link inside it is clicked
    document.querySelectorAll(".nav-item").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // --- MODAL POPUP INTERACTION ---
    // Displays the hidden popup window when "Book an Appointment" is clicked
    appointmentBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Hides the popup window when clicking the "X" button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Hides the popup window if you click anywhere on the dark background overlay
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // --- NEWSLETTER FORM SUBMISSION ---
    // Prevents page reloads and displays a success confirmation string text
    subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevents page reload
        const email = document.getElementById("email-input").value;
        statusMsg.textContent = `Thank you! ${email} has been subscribed.`;
        subscribeForm.reset(); // Clears form text box
    });
});
