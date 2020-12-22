import React from 'react'

const Todo = ({ todo, removeTodo }) => {

    function handleRemoveClick(){
        removeTodo(todo.id)
    }

    return (
        <div>
            {todo.task}
            <button onClick={handleRemoveClick}>x</button>
        </div>
    )
}

export default Todo
