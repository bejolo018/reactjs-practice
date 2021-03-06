import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        task: "",
        id: ""
    })

    const handleInput = (e) => {
        setTodo({...todo, task: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo.task){
            addTodo({...todo, id: uuid()})
            setTodo({...todo, task: ""})
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value ={todo.task} onChange={handleInput} />
            <button type="submit">submit</button>
        </form>
    )
}

export default TodoForm
