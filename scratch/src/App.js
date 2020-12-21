import { useState } from 'react'
import TodoForm from './Components/TodoForm'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
