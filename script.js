const form = document.getElementById("lead-form");
const status = document.getElementById("form-status");
const year = document.getElementById("current-year");

if (year) {
    year.textContent = String(new Date().getFullYear());
}

if (form && status) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        status.className = "form-status";
        status.textContent = "Sending...";

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            form.reset();
            status.classList.add("is-success");
            status.textContent = "Thanks. Your enquiry has been sent.";
        } catch (error) {
            status.classList.add("is-error");
            status.textContent = "Set a real form endpoint before publishing, then try again.";
        }
    });
}
