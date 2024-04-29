document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements
    const backToTop = document.querySelector(".back-to-top");
    const form = document.querySelector(".contact-form");
    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const emailInput = document.querySelector("#email");
    const messageTextarea = document.querySelector("#message");

    // Back to Top Button Click Event
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Form Validation and Submission
    form.addEventListener("submit", function (event) {
        // Basic form validation
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageTextarea.value.trim();

        let hasError = false;

        if (firstName === "") {
            alert("First name is required");
            hasError = true;
        }

        if (lastName === "") {
            alert("Last name is required");
            hasError = true;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            hasError = true;
        }

        if (message === "") {
            alert("Message is required");
            hasError = true;
        }

        if (hasError) {
            event.preventDefault(); // Prevent form submission if there's an error
        } else {
            alert("Form submitted successfully");
        }
    });

    // Subscription Modal Handling
    const subscribeModal = document.querySelector("#subscribeModal");
    const subscribeBtn = document.querySelector("#subscribeBtn");
    const closeModal = document.querySelector("#closeModal");

    // Show modal on Subscribe button click
    subscribeBtn.addEventListener("click", function () {
        subscribeModal.style.display = "block";
    });

    // Close modal on 'x' click
    closeModal.addEventListener("click", function () {
        subscribeModal.style.display = "none";
    });

    // Close modal when clicking outside the modal
    window.addEventListener("click", function (event) {
        if (event.target === subscribeModal) {
            subscribeModal.style.display = "none";
        }
    });
});