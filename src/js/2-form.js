

document.addEventListener('DOMContentLoaded', loadAStorage);

function loadAStorage(event) {
    const form = document.querySelector(".feedback-form");
    const savedState = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedState) {
        document.querySelector('.input').value = savedState.email || "";
        document.querySelector('.textarea').value = savedState.message || "";

    }
    form.addEventListener("input", handleInput);

    function handleInput() {
        const email = document.querySelector('.input').value.trim();
        const message = document.querySelector(".textarea").value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));

    }

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        const email = document.querySelector('.input').value.trim();
        const message = document.querySelector(".textarea").value.trim();


        if (email && message) {
            console.log({ email, message });
            localStorage.removeItem("feedback-form-state")
            form.reset();
        }
        else {
            alert("Будь ласка, заповніть обидва поля форми!")
        }
    }
}