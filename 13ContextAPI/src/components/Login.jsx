// Step 3: learning How to send the data inside the props

import React , {useState , useContext }from 'react'
import UsContext from '../context/UserContext'

function Login() {
    const [ username, setUsername]  = useState('');
    const [ password, setPassword]  = useState('');

    // We can access the setUser from Context API which we created inside the context
    const {setUser}  = useContext(UsContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // This is how we send our data inside the value of userContextProvider
        // it means we are adding more props inside our props of Context API whcih gonna be availbale to all the components present inside the code
        setUser({username, password})
    }
  return (
    <div>
        <h2>I come from Login Component</h2>
        <input type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        <input type="text" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login