import { useState } from 'react'
import TodoForm from './Components/TodoForm'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <TodoForm />
    </div>
  );
}

export default App;
