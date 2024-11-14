// We Made a file named todo but it is naming convention in redux tool kit that is why we used todoSlice name over here

// in context API project of todo we used date to generate the random ids but in reduxtoolkit we have nanoid for generate the unique ids
import { createSlice, nanoid} from "@reduxjs/toolkit";

// Step 1:
// it can be object or array
// creating initial todo or whatever
const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}

// we can write the initialState dirextly inside the todoSlice insted of creating seperate 
// We can also write all the methods like addTodo or removeTodo out side and give referecne to the code
// in the Context API, we created just the function declaration over here but in the reduxtool kit we write all the function logic over here (function defination)
// we give name, initialState and the reducers
// In reduces we give all the methos which we want
// cause, this is what the syntax is
// we must pass the state and action parametres in all the function we have created
// initial state aage jake change ho jayegi to abhi us ke under kya kya value hai vo sab ka accesss state dega
// action is for kch value aaye (jese ki id)
// in the big project we create one folder write all the fucntion over there and inport it over and give it insdie the reducers

//Step 2:
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // nanoid for generation new ids just like date we used in Context API
            // action.payload ke under value milegi text ki 
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            // this is how we can add our created this todo inside the todos array
            // state.todos give all the current array of the todos
            state.todos.push(todo)

        },
        removeTodo: (state, action) => {
            // current todos ni array ma je todo remove karvano che ene remove kariye chiye below
            // the logic of the below code is je id target na thay ene biji new array ma nakho do and je id match thay ene remove kar do  
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})



// Step 3:
// this is how we can export, all the methods we have created in the reducers, we must export like this unline context API we direclty
export const {addTodo, removeTodo} = todoSlice.actions

// we should also export
export default todoSlice.reducer