import React from 'react'
import TodoList from './TodoList'
const Todo = ({ todo, toggleComplete, removeTodo }) => {
    function handleCheckboxClick () {
        toggleComplete(todo.id)
    }

    function handleRemoveClick(){
        removeTodo(todo.id)
    }

    return (
        <div style={{
            display: "flex"
        }}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <div style={{
            color: "black",
            textDecoration: todo.completed ? "line-through" : null
        }}>{todo.task}</div>
        <button onClick={handleRemoveClick}>X</button>
        </div>
    )
}

export default Todo