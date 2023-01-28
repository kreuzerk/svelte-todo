export interface Todo {
    id: number;
    todo: string;
    done: boolean;
}

export interface PartialTodo {
    todo: string;
    done: boolean;
}

let todos: Todo[] = [
    {
        id: 0,
        todo: 'Learn Angular',
        done: false
    },
    {
        id: 1,
        todo: 'Learn Svelte',
        done: false
    }
];

let id = 1;

export function getTodos(): Todo[] {
    return todos;
}

export function addTodo(newTodo: PartialTodo): Todo[] {
    todos.push({
        id: ++id,
        ...newTodo
    })
    return todos;
}

export function updateTodo(id: number, done: boolean) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                done
            }
        }
        return todo;
    });
}

export function deleteTodo(todoId: number) {
    todos = todos.filter(t => t.id !== todoId);
}

