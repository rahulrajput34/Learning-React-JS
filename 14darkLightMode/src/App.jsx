import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './componets/ThemeButton'
import Card from './componets/Card'
import { ThemeProvider } from './contexts/Theme'

function App() {
  // so we gave methods like drakTheme and lightTheme inside the context
  // but there is nothing inside it 
  // to give some functionality inside it we define the exact same named method here and it the functinality automatically goes inside the given method

  const [ themeMode, setThemeMode]  = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    // to delete whatever current theme present inside the class of html
    document.querySelector('html').classList.remove("light", "dark")
  
    // to add the themeMode inside class of html tag
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    // wrapping up all inside the ThemeProvider
    // we can give this theme provider inside the main.jsx and wrap the App as well
    // like below code we can get access of props
    <ThemeProvider  value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
