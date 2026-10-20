export interface Todo {
    task: string;
    completed: boolean;
    priority: number;
}

export class TodoList {
    private todos: Todo[] = [];

    constructor() {
        this.loadFromLocalStorage();
    }
    addTodo(task: string, priority: number): boolean {
        if (
            task.trim() === "" ||
            priority < 1 ||
            priority > 3 ||
            !Number.isInteger(priority)
        ) {
            return false;
        }

        const newTodo: Todo = {
            task: task.trim(),
            completed: false,
            priority: priority
        };

        this.todos.push(newTodo);

        this.saveToLocalStorage();

        return true;
    }

    markTodoCompleted(todoIndex: number): void {
        if (this.todos[todoIndex]) {
            this.todos[todoIndex].completed = true;
            this.saveToLocalStorage();
        }
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    saveToLocalStorage(): void {
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    loadFromLocalStorage(): void {
        const storedTodos = localStorage.getItem("todos");

        if (storedTodos) {
            this.todos = JSON.parse(storedTodos) as Todo[];
        }
    }
}
