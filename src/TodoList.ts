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
}