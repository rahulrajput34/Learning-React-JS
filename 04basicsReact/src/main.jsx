import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"    this is we can import jsx if we want

// if APP is the function then we can do below one
function AppOne(){
  return(
    <>
      <h1>I am Woking !</h1>
    </>
  )
}
// Yes, it is working
// So, what we did in creating our own react app it all done in behind the scene over here, we can also do over there all the work of react but it gonna be lenghty process and consume lot of time that's is why we use react
// Behind the scene work is the work of bundlers
// react comes with many bundlers which convert our html looking like code in what we created in custom react app
// The sytanx is look like html but we are doing work in JS this why we called it jsx


// if we passed function over there, it is working so altemetly the logic of function convets into below logic, so if we pass below logic it should work
// But, it is not gonna work because this is our custom made object, what object they are parsing and what key they take behind the scene is different , so that is why it is not parsing the way we want and code is not gonna work

const reactElement = {  
  type: 'a',
  props: {
      href: 'https://google.com',
      target: "_blank"
  },
  children: 'Click me to visit google'
}

// if we directly store in varibale and give directly it is working
const anotherElement = (
  <a href="https://google.com" target='_blank'> Click ME</a>
)


// then why when we passed object it is not working
// we should give like below it is the syntaxt of react , we can not pass in our own style


const username = "Rahul Rajput"
// created varibale or evaluated expression stores at the end of text
// here , username is the example of it 
const elementReact = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to Visit Google',
    username
)
// So at the end of the day, elemenetReact is gonna converted into the object
// so it is not possible to give syntax inside the object
// that is why we pass evaluated expression inside it


ReactDOM.createRoot(document.getElementById('root'))
.render(
    // <App/>          //  it is function we created in App directory
    // <AppOne />      // it is working
    //  AppOne()       // this is also working because what is react, it is behind the scene JavaScript, When we write like <AppOne/> that time bundlers convert this html syntax into function sayntax
    // anotherElement   // creates directly what we want to return
    // elementReact
    <App/>
)