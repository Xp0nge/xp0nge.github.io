document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusText = document.getElementById("formStatus");
  const submitBtn = document.getElementById("submitBtn");

  // REPLACE THIS VALUE with your generated Google Web App URL endpoint:
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzoojaNBWhD_w8c3h8ZRTO0phRWL7ubHljNPN-i5c3bpviYqVpIQVtR1LsKRpHLgbK/exec";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Visual loading response loop
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    statusText.innerText = "";

    // Parse input tracking matrix values
    const payload = {
      idNumber: Date.now(), // Generates a unique tracking key sequence
      surname: document.getElementById("surname").value,
      firstName: document.getElementById("firstName").value,
      email: document.getElementById("email").value,
      contactNumber: document.getElementById("contactNumber").value,
      message: document.getElementById("message").value
    };

    try {
      // Execute standard asynchronous cross-domain fetch transmission matrix
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Bypasses browser restriction barriers securely
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // Show processing success UI state updates
      statusText.style.color = "#4ade80";
      statusText.innerText = "Thank you! Your inquiry was recorded successfully.";
      form.reset();
    } catch (error) {
      statusText.style.color = "#f87171";
      statusText.innerText = "Transmission issue encountered. Please try again.";
      console.error("Transmission Error Context:", error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerText = "Submit";
    }
  });
});
