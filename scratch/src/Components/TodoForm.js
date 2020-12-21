import React, { useState } from 'react'

const TodoForm = () => {
    const [todo, setTodo] = useState({
        task: ""
    })

    const handleInput = (e) => {
        setTodo(...todo, e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo.task){
            addTodo({...todo})
            setTodo({...todo, task: ""})
        }
    }
    return (
        <form>
            <input name="task" type="text" value ={todo.task} onChange={handleInput} />
            <button type="submit">submit</button>
        </form>
    )
}

export default TodoForm
