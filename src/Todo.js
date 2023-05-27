const Todo = ({ todo, handleTodoClick }) => {
    const todoClick = () => {
        handleTodoClick(todo.id)
    }

    return (
        <div className="todo">
            <label>
                <input className="addTodoCheckBox" type="checkbox" onChange={todoClick} />
                <span>{todo.name}</span>
            </label>
        </div>
    )
}

export default Todo
