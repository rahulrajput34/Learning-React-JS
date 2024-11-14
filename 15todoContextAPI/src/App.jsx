import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // todo store karva mate
  const [todos, setTodos]  = useState([])

  // niche je value ma che te banava mate
  const addTodo = (todo) => {
    // setTodos(todo)    //-- if we do like this then old value gonna be deleted and this value gonna be store
    // but we want old values as well so we do like below
    // setTodos((prev) => [todo, ...prev])
    // but our one todo itself is one object which have id, todoText and completed
    // so we need to pass it like an object we give id as random dates and rest of are same for every todos
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (todo, id) => {
    // for checking ki konsi Id update ho we write below code
    // map lagavathi badha todo mali jase
    // all the todoes are objects and there is an id inside it
    // prevTodo is individial todo
    // prevTodo vadi id is id from the object but the alone id is the parametre of updateTodo
    // if targeted id is same then add the todo(the text) which we give inside the paramter otherwise add older text
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo))
    // the logic it is like below
    // prev.map((eachValue) => {
    //   if(eachValue.id === id){
    //     todo
    //   }else{
    //     prevTodo
    //   }
    // })
  }

  const deleteTodo = (id) => {
    // delete mate map nai use karta apde most of the time we use filter for delete kyun ki vo filter kar dega whateven not needed
    // below code says that ki ap sari id aane do but jo uper paramre wadi id nai aane do usko filter kar do
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  // here we need to do checked and unchecked so changing of true to false and false to true
  const toggleComplete = (id) => {
    // pele array che to prev value to levij padse
    // jo id same na hoy to prevTodo means todo ne { } Am na am rakho
    // and ej id target thati hoy to completed ne overwrite karo means ture karo and baki nu same j rakho
      setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  
  // when we load the page the value gonna be same. For that, we gonna use the concept of local stoage
  // we can use localstorage when we are on react(on client side)
  // for storage
  useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"))

    // if any todos hoy and eni lenght hoy to nichenu karo nake else wado case
     // vo JSON hai but end of the day to json ke under ek array hi hai to ham lenght puchte hai ki array hai bhi ya nai vo check karne ke liye
     if(todos && todos.length > 0){
        setTodos(todos)
     }
  }, [])

  useEffect(() => {
    // setItem can only get the values in string so we need to change it to string from JSON
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              // take id because of perfomence
              // it is better to take ids insted of index because of destructring issue
              <div key={todo.id}
              className='w-full'> 
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App