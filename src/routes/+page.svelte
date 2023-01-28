<script>
    import TodoInput from './todo-input.svelte'
    import TodoList from './todo-list.svelte'

    export let data;
</script>

<div class="container">
    <h1>Todos</h1>
    <TodoInput />
    <TodoList todos={data.todos} />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #f8f8f8;
        height: 100vh;
    }

    h1 {
        font-size: 3rem;
        font-weight: 300;
        color: darkred;
    }
</style>
