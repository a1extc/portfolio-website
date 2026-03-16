let isDarkMode = false;
let isLargeText = false;

function changeMode() {
    const body = document.getElementsByTagName("body")[0];
    const button = document.getElementById("darkModeButton");

    if (isDarkMode) {
        // Change to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.innerText = "Dark Mode";

    } else {
        // Change to dark mode
        body.style.backgroundColor = "#1F2020"; // #1D1F2B
        body.style.color = "white";
        button.innerText = "Light Mode";
    }

    isDarkMode = !isDarkMode; // Toggle the mode
}

function changeTextSize() {
    const body = document.getElementsByTagName("body")[0];
    const textSizeButton = document.getElementById("textSizeButton");

    if (isLargeText) {
        body.style.fontSize = "16px"; // Normal text size
    } else {
        body.style.fontSize = "24px"; // Larger text size
    }

    isLargeText = !isLargeText; // Toggle the font size
}

