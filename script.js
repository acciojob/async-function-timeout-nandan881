// Function to simulate delay using async/await and setTimeout
async function displayMessageAfterDelay(text, delay) {
  // Delay logic using promise and setTimeout
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Display the text in the output div after the delay
  document.getElementById('output').textContent = text;
}

// Event listener for the button
document.getElementById('btn').addEventListener('click', function () {
  // Retrieve the values from the input fields
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  // Validate input (ensure delay is a positive number)
  if (!text || isNaN(delay) || delay < 0) {
    alert("Please provide valid text and delay.");
    return;
  }

  // Clear the output div before displaying the message
  document.getElementById('output').textContent = "";

  // Call the async function to display the message after the delay
  displayMessageAfterDelay(text, delay);
});
