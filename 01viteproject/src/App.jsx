// we must import it
// We can return a html in function, this is done by react

//    1
// function App() {
//   return (
//       <Chai/>
//       // <h1>Hello</h1>
//   )
// }
// we can not able to  return more than one html elements in return


//    2
// Then this is how we started returning two elements togather
// function App() {
//   return (
//       <div>
//           <Chai/>
//           <h1>Hello</h1>
//       </div>    
//   )
// }


//   3
// But this work become commmon, that why we create fragmenet over there for adding mutliple elements
function App() {
  return (
    // this is the fragment <> </>
      <h1> React and vite||  Rahul Rajput</h1>   
  )
}

export default App
