// step 4: learning How to send the data inside the props
import React, {useContext} from "react"
import UsContext from "../context/UserContext"

function Profie() {
    const {user}  = useContext(UsContext)
    // This is how we can give condition to the return
    if (!user) return <div> Bro Please Login</div>
    return(
        <div>
            Your name is {user.username}
            Your password is {user.password}
        </div>
    )
}

export default Profie