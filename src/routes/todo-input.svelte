<form method="POST" action="?/addTodo">
    <input placeholder="Add a new Todo" name="todo"/>
</form>

<style>
    input {
        border: none;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        height: 40px;
        width: 300px;
        padding-left: 20px;
        padding-right: 20px;
    }

    input::placeholder{
        color: #c0c3c9;
        font-size: 14px;
        line-height: 20px;
    }

</style>
