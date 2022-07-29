import { Subject } from 'rxjs';

export interface TodoManager {
    addedObservable: () => void;
    deletedObservable: () => void;
}

export class TodoManagerService implements TodoManager {
    addedTodo;
    deletedTodo;
    private static todoInstance: TodoManagerService;

    private constructor() {
        this.addedTodo = new Subject();
        this.deletedTodo = new Subject();
    }

    addedObservable(): any {
        return this.addedTodo;
    }

    deletedObservable(): any {
        return this.deletedTodo;
    }

    static getInstance(): TodoManagerService {
        if (!this.todoInstance) {
            this.todoInstance = new TodoManagerService();
        }
        return this.todoInstance;
    }
}