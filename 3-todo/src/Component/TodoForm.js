import React, { useState } from 'react'
import uuid from 'uuid'

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false

    })

    const handleInput = (e) => {
        setTodo({ ...todo, task: e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({...todo, id: uuid.v4()})
            //reset task input
            setTodo({...todo, task: ""})
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value={todo.task} onChange={handleInput}/>
            <button type="submit"> submit </button>
        </form>
    )
}

export default TodoForm