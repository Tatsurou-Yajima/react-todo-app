const Todo = ({ todo, handleTodoClick }) => {
    const todoClick = () => {
        handleTodoClick(todo.id)
    }

    return (
        <div className="todo">
            <label>
                <input type="checkbox" onChange={todoClick} />
                {todo.name}
                <span>{todo.name}</span>
            </label>
        </div>
    )
}

export default Todo
