// blogs page link redirect code
document.getElementById("blogs").addEventListener("click", function () {
    window.location.href = "/html/blogs.html";
});

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

// correct time and date code
function updateDate() {
    const now = new Date();

    // Options for formatting the date
    const options = {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    };
    const formattedDate = now.toLocaleDateString("en-US", options);

    // Split the formatted date into parts
    const [weekday, month, day, year] = formattedDate.split(" ");

    // Update the HTML
    document.getElementById("dayName").textContent = weekday;
    document.getElementById("fullDate").textContent = `${month} ${day} ${year}`;
}
// Call function on page load
updateDate();

let countTask = 0;

// click button and all Majic happen on this function
function markTaskComplete(buttonId, titleId) {
    alert("Task is complete");
    countTask++;
    if (countTask >= 6) {
        alert("Congratulation!!! You have completed all the current task");
    }

    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    // Get task title
    const taskTitle = document.getElementById(titleId).textContent;

    // Update pending task count
    const taskCount = document.getElementById("taskCount");
    let currentTaskCount = parseInt(taskCount.textContent);
    if (currentTaskCount > 0) {
        taskCount.textContent = currentTaskCount - 1;
    }

    // Update completed task count
    const completedCount = document.getElementById("completedCount");
    let currentCompletedCount = parseInt(completedCount.textContent);
    completedCount.textContent = currentCompletedCount + 1;

    // Disable the clicked button
    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.classList.add("opacity-50", "cursor-not-allowed");

    // Add message to the completionMessages div
    const messagesDiv = document.getElementById("completionMessages");
    const newMessage = document.createElement("p");
    newMessage.className = "px-3 py-1 my-4 rounded-xl text-sm bg-[#F4F7FF]";
    newMessage.textContent = `You have completed the task '${taskTitle}' at ${timeString}`;
    messagesDiv.prepend(newMessage); // Adds the new message at the top
}

// clear message history
function clearHistory() {
    const messagesDiv = document.getElementById("completionMessages");
    messagesDiv.innerHTML = "";
}
// clear history click listener and call the clean function
document.getElementById("clearHistory").addEventListener("click", function () {
    clearHistory();
});

// calling from the buttons
document.getElementById("taskOneBtn").addEventListener("click", function () {
    markTaskComplete("taskOneBtn", "titleIdOne");
});
document.getElementById("taskTwoBtn").addEventListener("click", function () {
    markTaskComplete("taskTwoBtn", "titleIdTwo");
});
document.getElementById("taskThreeBtn").addEventListener("click", function () {
    markTaskComplete("taskThreeBtn", "titleIdThree");
});

document.getElementById("taskFourBtn").addEventListener("click", function () {
    markTaskComplete("taskFourBtn", "titleIdFour");
});
document.getElementById("taskFiveBtn").addEventListener("click", function () {
    markTaskComplete("taskFiveBtn", "titleIdFive");
});
document.getElementById("taskSixBtn").addEventListener("click", function () {
    markTaskComplete("taskSixBtn", "titleIdSix");
});
