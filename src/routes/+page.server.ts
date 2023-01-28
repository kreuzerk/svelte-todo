import {addTodo, deleteTodo, getTodos, PartialTodo, updateTodo} from "../server/database";

export function load() {
    return {
        todos: getTodos()
    };
}

export const actions = {
    // @ts-ignore
    addTodo: async ({request}) => {
        const formData = await request.formData();
        addTodo({
            todo: formData.get('todo'),
            done: false
        });
    },
    // @ts-ignore
    deleteTodo: async ({request}) => {
        deleteTodo(+(await request.formData()).get('todoId'));
    },
    // @ts-ignore
    updateTodo: async ({request}) => {
        const formData = await request.formData();
        const done = formData.get('done');
        const id = formData.get('id');
        updateTodo(+id, done === 'true');
    }
}
