// in vite, we can not create .js file for javascript, we have to create JSX file
// in simple react app, it oky to create file by js and jsx both

// It is common practise when you want to give the properties of react than create the file with .jsx
// when you just want to give js to the project that time use ,js to create javacript file

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// react create it's vertual dom
// below is creation of react dom
ReactDOM.createRoot(document.getElementById('root')).
render(
    <App />
)

// this is the power of JSX is given by react, We can html through Javascript
// we can say, we can create custom tags
// it means now there is prgrammming abilities in JS
