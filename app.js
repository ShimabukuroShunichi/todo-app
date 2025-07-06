document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("todo-form");
    const input = document.getElementById("todo-input");
    const list = document.getElementById("todo-list");

    const todos = JSON.parse(localStorage.getItem("todos")) || []; 

    todos.forEach(task => {
        addTaskToList(task);
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value.trim();
        if (task === "") return;

        todos.push(task);
        localStorage.setItem("todos", JSON.stringify(todos));

        addTaskToList(task);
        input.value = "";
    });

    function addTaskToList(task) {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "削除";
        deleteBtn.addEventListener("click", () => {
            list.removeChild(li);

            const index = todos.indexOf(task);
            if (index !== -1) {
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
            }
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);

    }
});