const Todo = ({ todo, handleTodoClick }) => {
    const todoClick = () => {
        handleTodoClick(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" onChange={todoClick} />
                {todo.name}
            </label>
        </div>
    )
}

export default Todo
