const camera = document.getElementById("camera")
console.log("test");
// Function to handle keydown event
function handleKeyDown(event) {
// Check if the pressed key is one of the specified keys (W, A, S, D)
    if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
        // Your code to run when the key is pressed
        console.log('Key ${event.key} is pressed');
        camera.setAttribute("playSound", true)
    }
}

  // Function to handle keyup event
function handleKeyUp(event) {
    // Check if the released key is one of the specified keys (W, A, S, D)
    if (event.key === 'w' || event.key === 'a' || event.key === 's' || event.key === 'd') {
        // Your code to run when the key is released
        console.log('Key ${event.key} is released');
        camera.setAttribute("playSound", false)
    }
}

// Add event listeners for keydown and keyup events
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);