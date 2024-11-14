import React from 'react'
// To select the perticuler id we use useSelect but select kari pachi we need to delete it so that we need to use useDispatch as well
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
  // for selection all the todos present inside the array
    const todos = useSelector(state => state.todos)
  // for removeing perpose
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {/* We can give ul, li, div whatever we want */}
    <ul className="list-none">
      {/* We are giving the loop like we gave in the same project of the context API */}
        {todos.map((todo) => (
          // here we give key for good perfomence code
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            {/* we gave callback over here because our  dispatch method want the parametre and if we give directly then it will execute at that time and our application gonna crash */}
            {/* This is the functionality of our delete button */}
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos


// This is the simple code which we write in our return with good css
/* todos.map((todo) => {
  <ul>
    <li key={todo.id}>
    {todo.text}
    <button
    onclick = {() => dispatch(removeTodo(todo.id))}
    >Delete</button>
    </li>
    })
  </ul>
*/