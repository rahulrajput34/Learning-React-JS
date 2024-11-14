import React from 'react'
import ReactDOM from 'react-dom/client'  // ReactDOM is implementation on web (just like react native is implementation on mobile apps) 
import App from './App.jsx'  // import from another dirctory named App.jsx

// react khud ka DOM banata hai
// we called it vertual DOM
// first react create khude ka DOM and then it compare to real DOM
//phir vo hi change karte hai jski hame jarurat hai
const root = ReactDOM.createRoot(document.getElementById('root'));   // create own dom and target root ID element from index.html
// createRoot is one method of ReactDOM

root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)
//Above we are rendering App tag in strickmode)
// So we do not have app tag in html so from where it came from
// it came from  App.jsx directory
// so, It is the power of react so that we can create our own custom tag by using our javascript


//  +++++++++++++++++++++++++++  Good note ++++++++++++++++++++++++++++++
// when we use vite that time we must create js directory with .jsx
// when we use our creat react app that time we can create JS directory by using .jsx  ||  .js
// But whatever we are using from both , we must give function name capitle
// we can give lowercase when we are giving directory  name, but it is good practice to give directy name start with capitle letter