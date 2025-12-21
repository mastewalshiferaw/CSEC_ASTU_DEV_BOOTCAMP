const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');
const totalCountSpan = document.getElementById('total-count');
const completedCountSpan = document.getElementById('completed-count');

let totalTodos = 0;
let completedTodos = 0;

function updateStats() {
    totalCountSpan.textContent = totalTodos;
    completedCountSpan.textContent = completedTodos;
}

function addTodo() {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="btn-group">
            <button class="check-btn">✔</button>
            <button class="delete-btn">🗑</button>
        </div>
    `;
    todoList.appendChild(li);
    totalTodos++;
    updateStats();
    todoInput.value = "";

    const checkBtn = li.querySelector('.check-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    const taskSpan = li.querySelector('.task-text');

    checkBtn.addEventListener('click', function() {
        if (taskSpan.classList.contains('completed-task')) {
            taskSpan.classList.remove('completed-task');
            completedTodos--;
        } else {
            taskSpan.classList.add('completed-task');
            completedTodos++;
        }
        updateStats();
    });

    deleteBtn.addEventListener('click', function() {
        if (taskSpan.classList.contains('completed-task')) completedTodos--;
        li.remove();
        totalTodos--;
        updateStats();
    });
}

addBtn.addEventListener('click', addTodo);

clearBtn.addEventListener('click', function() {
    todoList.innerHTML = "";
    totalTodos = 0;
    completedTodos = 0;
    updateStats();
});
