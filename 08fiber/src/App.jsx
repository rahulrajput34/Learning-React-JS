import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  // the value gonna be change to plus 1 only
  // useState batches me sab saman pack karta hai and bhejta hai and bolta hai ye wala kam kar do vo wala kar do
  // this is what the fiber is, because it is the same task it  not gonna do it again
  // But aisa bhi to ho sakta hai hame kam niche ki hisab se karna hai
  // hame fiber ka concept follow nai karna that time we use like below

  let addValue = () => {
    // setCount(count + 1)
    // This is how we shold give if we want really 19
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)  // here setCount is a function which can take callback that we passed function inside it
    setCount(prevCounter => prevCounter + 1)
    setCount(prevCounter => prevCounter + 1)
  }

  let removeValue =  () =>{
    setCount(count - 1)
  }


  return (
    <>
      <h1>Hello I am a Millionaire  {count}</h1>
      <button onClick={addValue}>Click me to Increase {count}</button>
      <button onClick={removeValue}>Click me to Decrease {count}</button>
      <footer> conter is {count}</footer>
    </>
  )
}

export default App
