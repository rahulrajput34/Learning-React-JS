import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    //creating individual todo
    const [todo, setTodo] = useState("")

    // from we used for add the todo
    // we must give paranthisis over here not function(hook)
    const {addTodo} =  useTodo()// take the functionality from Context
    
    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        // we can not give direct todo over here because our todo accept three argument in object which gonna be id, text, completed
        // addTodo(todo)  // not like this
        // we give id: date.now() there inside the APP so we do not need to give date.now() id over here and if todo: todo hoy to apde direct todo lakhi sakiye and we want complted is false over here so we give false in all the todo we have created
        addTodo({todo, completed: false})
        setTodo("")
        // above one
        // if(!todo){
        //     return
        // } else{

        // }
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


