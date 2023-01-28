<script lang="ts">
    import type {Todo} from "../server/database";

    export let todos: Todo[];
</script>

{#each todos as todo}
    <div class="todo-item">
        <div class="checked-and-text">
            <form method="POST" action="?/updateTodo">
                <input type="hidden" value={todo.id} name="id"/>
                <input type="hidden" value={!todo.done} name="done"/>
                {#if !todo.done}
                    <button type="submit">
                        <span class="material-symbols-outlined">radio_button_unchecked</span>
                    </button>
                {/if}
                {#if todo.done}
                    <button type="submit">
                        <span class="material-symbols-outlined checked">task_alt</span>
                    </button>
                {/if}
            </form>
            {todo.todo}
        </div>

        <form method="POST" action="?/deleteTodo">
            <input type="hidden" value={todo.id} name="todoId"/>
            <button type="submit">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </form>
    </div>
{/each}

<style>
    .todo-item {
        border: none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        height: 40px;
        width: 300px;
        padding: 5px 20px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: slategray;
    }

    .todo-item button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }

    .todo-item span {
        cursor: pointer;
        color: slategray;
    }

    .checked-and-text {
        display: flex;
        align-items: center;
    }

    .checked-and-text span {
        margin-right: 15px;
    }


    .checked-and-text span.checked {
        color: #348234;
    }
</style>
