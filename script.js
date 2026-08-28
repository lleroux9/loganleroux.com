const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        message: formData.get("message")
    };

    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Message sent!");
        form.reset();
    } else {
        alert("This feature is not operational yet. Sorry if you just typed in long message. Feel free to contact me on LinkedIn. I will soon be adding my email address.");
    }
});