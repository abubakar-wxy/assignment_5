// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listener to button
const htmlTag = document.getElementById("html_tag");
document
    .getElementById("changeColorBtn")
    .addEventListener("click", function () {
        htmlTag.style.backgroundColor = getRandomColor(); // Change to random color
    });
