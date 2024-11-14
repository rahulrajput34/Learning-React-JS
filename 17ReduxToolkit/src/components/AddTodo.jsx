// work of useDisplatch
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

// todos na under add karvanu che to ahi thi todo array ma mokalvu padse
// mokalva mate dispatch vapray


function AddTodo() {
    // to store the input we give
    const [input, setInput] = React.useState('');
    // this is how we use dispatch hook
    const dispatch = useDispatch();

    // dispatch change the value in store by using reducer
    // dispatch reducer ko use kar ke store me value change karta hai
    const addTodoHandler = (e) => {
        e.preventDefault();
        //in context API, inside the addTodo we write the logic about what we want to send inside it inside the object
        // but here we do not need to do all those things
        // we just need to pass input over here
        dispatch(addTodo(input))
        // todo jab ban gaya hai tab input feild ne clean kar
        setInput('')
        }

    return (
    <form onSubmit={addTodoHandler} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add Todo
            </button>
        </form>
  )
}

export default AddTodo