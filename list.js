// Cached DOM elements
const taskform = document.getElementById("task-form");
const taskinp = document.getElementById("task-input");
const tasklist = document.getElementById("displayed");
const addbutton = document.getElementById("adder");
const delbutton = document.getElementById("delete");

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

    task.addEventListener("click", () => {
        task.classList.toggle("completed");
    });

    tasklist.appendChild(task);
    taskinp.value = ""; // Clear the input field
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

        task.addEventListener("click", () => {
            task.classList.toggle("completed");
        });

        tasklist.appendChild(task);
        taskinp.value = ""; // Clear the input field
    }
});

// Delete all tasks when the "Delete" button is clicked
delbutton.addEventListener("click", () => {
    tasklist.textContent = ""; // Clear the task list
});
