import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// We can see in the picture we created App componet and then we created Dashboard, Leftside , Rightside, Topside and Bottomside and One Card componenet inside the Topside componenet 
// If we pass prop title inside the App componenet and if we want to access title inside the card component that time we must pass title in all components in order to reach our Card component
// this concept is called prop drilling
// if there any alternative way to create the title so that once we created and it has access in all the components ??
// Here where the concept of the context API is arrives
// From Context API we can create the props which are availble to all the componnets
// We have some other concept like Redux, Redux-toolkit, react-Redux , zustand and many more as well for solving above propblem