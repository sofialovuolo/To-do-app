import "../style.css";

//Data (holds the "State" of my application )
const todos = [
    "Buy coffee",
    "Buy sugar",
    "Buy jam"
]

//functions (classes) that operate on data (update the state or render UI base on the state)
function renderTodos() {
    const todoListSection =
        document.getElementById(
            "todo-list"
        );

    todoListSection.innerHTML = "";

    for(let i = 0;
        i < todos.length;
        i++
    ) {
        const todo = todos[i];

        const todoItemDiv = 
            document.createElement("div");
        
        todoItemDiv.classList.add("p-4", "todo-item")

        const todoTextDiv = 
            document.createElement("div");
        todoTextDiv.classList.add("todo-text")
        todoTextDiv.textContent = todo;

        const todoEditInput = 
            document.createElement("input");
        todoEditInput.classList.add("hidden", "todo-edit")
        todoEditInput.setAttribute("value", todo);
        
        todoItemDiv.appendChild(todoTextDiv);
        todoItemDiv.appendChild(todoEditInput);
        todoListSection.appendChild(todoItemDiv)
    }
}

//renderTodos();

document.addEventListener("DOMContentLoaded", renderTodos);

