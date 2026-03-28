function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function () {
        span.style.textDecoration = "line-through";
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}