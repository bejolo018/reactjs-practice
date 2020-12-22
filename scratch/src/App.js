import { useState, useEffect } from 'react'
import TodoForm from './Components/TodoForm'
import './App.css'
import TodoList from './Components/TodoList'

const LOCAL_STORAGE_KEY = "react-todo"

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])


  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
