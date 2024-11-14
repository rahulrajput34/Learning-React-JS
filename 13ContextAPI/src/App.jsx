import { useState } from 'react'
import './App.css'
import UsContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profie from './components/Profie'

function App() {

  return (
    <UsContextProvider>
      <h1>Hello Brother! How are you?</h1>
      <Login/>
      <Profie/>
    </UsContextProvider>
  )
}

export default App
