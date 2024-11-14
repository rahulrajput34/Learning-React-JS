import {configureStore} from '@reduxjs/toolkit'
// Step 4: import this
import todoReducer from '../features/todo/todoSlice'

// Step 5: export store
// it take object by default

// Step 0:
export const store = configureStore({
    reducer: todoReducer
})



// Most important note: there is always be the one store of the application