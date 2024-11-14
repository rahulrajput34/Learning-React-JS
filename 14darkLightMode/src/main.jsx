import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// In tailwind CSS we give dark named class to the html element 
// the work of this class is when we give light over there it works in light mode and when we give dark over ther its work in propeties of dark mode which is going to given by us
