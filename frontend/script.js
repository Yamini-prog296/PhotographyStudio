document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("🎉 Booking Submitted Successfully!");
});
document.getElementById("bookingForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const booking = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        date: document.getElementById("date").value
    };

    try {
        const response = await fetch("https://photographystudio-4.onrender.com/api/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        });

        const data = await response.json();
        alert(data.message);

        document.getElementById("bookingForm").reset();

    } catch (error) {
        console.error(error);
        alert("Error saving booking.");
    }

});
    