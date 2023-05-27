import Todo from './Todo'

const TodoList = ({ todos, handleTodoClick }) => {
    return (
        todos.map((todo) => <Todo todo={todo} key={todo.id} handleTodoClick={handleTodoClick} />)
    )
}

export default TodoList
