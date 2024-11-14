import Rahul from './Rk.jsx'   // this is how we can inport the function from another directory

function App() {

  return (
    // <Rahul/>
    // <h2>Rahul Rajput</h2>  this showing error because we can return only one tag over here
    // to solve this problem
    // we give all the elements in one div
    // <div></div>  
    // but it is very common in react so they came up with concept called fragment
    // the below one is called fragment and we wrap up inside as many element we want
    <>
      <Rahul/>
      <h2>
        I came here using fragment
      </h2>
    </>
  )
}

export default App
// here in function named app we return our html
// so it is good concept is given by react, from this, we store html in function and render it on webpage

//What is advantage of it?
// it gives programming ability to html
