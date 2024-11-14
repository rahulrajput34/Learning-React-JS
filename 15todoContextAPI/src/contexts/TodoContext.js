import { createContext, useContext } from "react";

// in todos we gonna get all the todo  we have means all the different texts present in the search box
// We gave our todo over here and in todo we need todoText for text, id to defer the todo, and complete for checkmark
//this is how we write our methods over here in our context API
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoText: "Todo message",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}

