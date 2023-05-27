import "./App.css"
import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [todos, setTodos] = useState([]);

    const todoNameRef = useRef();
    const handleAddTodo = () => {
        let name = todoNameRef.current.value;
        if (name === "") { return }

        setTodos([...todos, { id: uuidv4(), name: name, completed: false }])

        todoNameRef.current.value = null;
    }

    const handleTodoClick = (id) => {
        const newTodos = todos
        const todo = newTodos.find(todo => todo.id === id)
        todo.completed = !todo.completed
        setTodos([...newTodos])
    }

    const handleDelTodos = () => {
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }

    return (
        <div className="container">
            <div className="taskTitle">ToDo アプリ</div>
            <div className="inputForm">
                <input type="text" ref={todoNameRef} />
                <button onClick={handleAddTodo}><i className="fa-solid fa-plus"></i></button>
                <button onClick={handleDelTodos}><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="taskCount">残りのタスク:{todos.filter(todo => todo.completed === false).length}</div>
            <TodoList todos={todos} handleTodoClick={handleTodoClick} />
        </div>
    );
}

export default App;
