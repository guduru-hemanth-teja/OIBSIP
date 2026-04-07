class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.init();
    }

    init() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.totalTasks = document.getElementById('totalTasks');
        this.completedTasks = document.getElementById('completedTasks');
        this.clearCompletedBtn = document.getElementById('clearCompleted');
        this.clearAllBtn = document.getElementById('clearAll');

        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        this.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.clearAllBtn.addEventListener('click', () => this.clearAll());

        this.render();
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        if (text) {
            this.todos.push({
                id: Date.now(),
                text: text,
                completed: false
            });
            this.todoInput.value = '';
            this.save();
            this.render();
        }
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.save();
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.save();
        this.render();
    }

    clearCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.save();
        this.render();
    }

    clearAll() {
        this.todos = [];
        this.save();
        this.render();
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    render() {
        this.todoList.innerHTML = '';
        
        this.todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'todo completed' : 'todo';
            li.innerHTML = `
                <div class="todo-content">
                    <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="todoApp.toggleTodo(${todo.id})">
                    <span>${todo.text}</span>
                </div>
                <button class="delete-btn" onclick="todoApp.deleteTodo(${todo.id})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            this.todoList.appendChild(li);
        });

        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        
        this.totalTasks.textContent = total;
        this.completedTasks.textContent = completed;
    }
}

const todoApp = new TodoApp();
