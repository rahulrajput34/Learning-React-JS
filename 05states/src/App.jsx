// Read every comments to uderstand
// One Note: All the parsing and all is done by babble behind the scnene
import { useState } from 'react'  // we have to import it,this is how we import hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// first we created one function app and give two function and html inside it , two function has a logic of when we click on the button the values incresing and decreasing
//but When we trying to do that , in console the counter is chaning but on UI it not changed
//We use hooks for solving this problem of not displing on UI

//Then we added counter three more place as well  // how easily we added, imagen if we want to add by using Js how hectic is that calling all the button and give listner to them -- that is also one of problem react solving


// All hooks have their own method means one hook do one specific task
// 1. useState -- this hook is responsable for change the state (it not means it change the state, it means it change the state on UI)
function App() {

  
  // abhi is varibale ki default value 5 hai
  let [counter, setCounter] = useState(5) ; 
  // we can write what ever we want inside []
  //for example, [supermen, setsuprmen]  ..  [Stocks, bonds]
  // in place of 5 we can give anything whether it is object, string , boolean or anything else
  // Here,[counter, setCounter] counter is a value and setcounter is a function

  // let counter = 5;

  const addValue = () => {
    // console.log("Value Added", counter);
    // counter = counter + 1;
    // setCounter(counter)
    setCounter(counter + 1)  // we can also do like this

  }

  const remomveValue = () => {
    // console.log("Value Added", counter);
    // counter = counter - 1;
    // setCounter(counter)
    setCounter(counter - 1)  // we can also do like this
  }
  
  return (
    <>
      <h1>Rahul Rajput</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}> Add Value {counter}</button>   {/* we want when we click the button that time this function addValue gonna execute that is why we passes reference not paranthisis */}
      <br />
      <button
      onClick={remomveValue}> Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
