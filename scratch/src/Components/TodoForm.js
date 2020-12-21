import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        task: ""
    })

    const handleInput = (e) => {
        setTodo({...todo, task: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo.task){
            addTodo({...todo})
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
