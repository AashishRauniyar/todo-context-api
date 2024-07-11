import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=>prev.map((prevToDo)=> (prevToDo.id === id ? todo : prevToDo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((prevToDo)=> prevToDo.id !== id))
  }


  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ) )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (
    <TodoProvider value={{todos,addTodo, deleteTodo, updateTodo,  toggleComplete}} >
      <div className=" min-h-screen py-8">
                <div className="bg-primary w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Task Check List</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {todos.map((todo) => (
                            <div className='w-full' key={todo.id}>
                              <TodoItem todo={todo} />
                              
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App