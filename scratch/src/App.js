import { useState } from 'react'
import TodoForm from './Components/TodoForm'
import './App.css'
import TodoList from './Components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

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
