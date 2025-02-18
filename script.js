//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text");
    const delayInput = document.getElementById("delay");
    const button = document.getElementById("btn");
    const output = document.getElementById("output");

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function displayMessage() {
        const message = textInput.value.trim();
        const delayTime = parseInt(delayInput.value, 10);

        // Validation for empty text and invalid delay
        if (!message || isNaN(delayTime) || delayTime < 0) {
            output.innerText = "Please enter a valid message and delay.";
            return;
        }

        output.innerText = "Waiting...";
        await delay(delayTime);
        output.innerText = message;
    }

    button.addEventListener("click", displayMessage);
});
