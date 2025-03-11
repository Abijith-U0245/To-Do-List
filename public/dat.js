document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let dueDate = document.getElementById("dueDate").value;
    let category = document.getElementById("category").value;
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.draggable = true;  // Enable drag and drop
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText} - <small>${dueDate} [${category}]</small></span>
        <button onclick="editTask(this)">✏️</button>
        <button onclick="deleteTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
}

function toggleTask(task) {
    task.classList.toggle("completed");
    saveTasks();
}

function editTask(button) {
    let taskText = button.parentElement.querySelector("span").innerText.split(" - ")[0];
    let newTask = prompt("Edit Task:", taskText);
    if (newTask) {
        button.parentElement.querySelector("span").innerText = newTask;
        saveTasks();
    }
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function clearAllTasks() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(task => {
        tasks.push({
            text: task.querySelector("span").innerText,
            completed: task.querySelector("span").classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.draggable = true; // Enable drag and drop
        li.innerHTML = `
            <span onclick="toggleTask(this)" class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="editTask(this)">✏️</button>
            <button onclick="deleteTask(this)">❌</button>
        `;
        document.getElementById("taskList").appendChild(li);
    });
}

// Drag & Drop Feature
let taskList = document.getElementById("taskList");
taskList.addEventListener("dragstart", function (e) {
    e.target.classList.add("dragging");
});
taskList.addEventListener("dragend", function (e) {
    e.target.classList.remove("dragging");
});
taskList.addEventListener("dragover", function (e) {
    e.preventDefault();
    let draggingTask = document.querySelector(".dragging");
    let closestTask = [...taskList.querySelectorAll("li:not(.dragging)")].reduce(
        (closest, child) => {
            let box = child.getBoundingClientRect();
            let offset = e.clientY - box.top - box.height / 2;
            return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
        },
        { offset: Number.NEGATIVE_INFINITY }
    ).element;
    if (closestTask) {
        taskList.insertBefore(draggingTask, closestTask);
    }
});
