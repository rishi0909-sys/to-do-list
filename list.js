// Cached DOM elements
const taskform = document.getElementById("task-form");
const taskinp = document.getElementById("task-input");
const tasklist = document.getElementById("displayed");
const addbutton = document.getElementById("adder");
const delbutton = document.getElementById("delete");

// Function to load tasks from localStorage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasklist.textContent = ""; // Clear the task list

    tasks.forEach((taskData, index) => {
        const task = document.createElement("li");
        task.classList.add("task-item");
        task.textContent = taskData.text;

        // If the task is marked as completed, apply the completed class
        if (taskData.completed) {
            task.classList.add("completed");
        }

        // Add a click event to toggle completion
        task.addEventListener("click", () => {
            task.classList.toggle("completed");
            updateLocalStorage(); // Update localStorage when a task is toggled
        });

        tasklist.appendChild(task);
    });
}

// Function to update localStorage with the current tasks
function updateLocalStorage() {
    const tasks = [];
    const taskItems = document.querySelectorAll(".task-item");
    
    taskItems.forEach(task => {
        tasks.push({
            text: task.textContent,
            completed: task.classList.contains("completed"),
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task when the "Add" button is clicked
addbutton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    const taskdata = taskinp.value.trim();
    if (taskdata === "") {
        return;
    }

    const task = document.createElement("li");
    task.classList.add("task-item");
    task.textContent = taskdata;

    // Add a click event to toggle completion
    task.addEventListener("click", () => {
        task.classList.toggle("completed");
        updateLocalStorage(); // Update localStorage when a task is toggled
    });

    tasklist.appendChild(task);
    taskinp.value = ""; // Clear the input field

    updateLocalStorage(); // Save the new task to localStorage
});

// Add task when "Enter" is pressed in the input field
taskform.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission
        const taskdata = taskinp.value.trim();
        if (taskdata === "") {
            return;
        }

        const task = document.createElement("li");
        task.classList.add("task-item");
        task.textContent = taskdata;

        // Add a click event to toggle completion
        task.addEventListener("click", () => {
            task.classList.toggle("completed");
            updateLocalStorage(); // Update localStorage when a task is toggled
        });

        tasklist.appendChild(task);
        taskinp.value = ""; // Clear the input field

        updateLocalStorage(); // Save the new task to localStorage
    }
});

// Delete all tasks when the "Delete" button is clicked
delbutton.addEventListener("click", () => {
    tasklist.textContent = ""; // Clear the task list
    localStorage.removeItem("tasks"); // Remove tasks from localStorage
});

// Load tasks from localStorage when the page loads
loadTasks();
