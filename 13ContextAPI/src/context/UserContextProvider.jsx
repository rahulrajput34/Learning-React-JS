// Step 2:   wrap all the Components
import React, { useState } from "react";
import UsContext from "./UserContext";

// we can give anyName to children
// here the children can be any component
// we wrap the children inside the UsContext.Provider
// The props we want to show to the all components we passed it inside the value
const UsContextProvider = ({children}) => {

    // just to understand the concept we used user and setUser over here 
    // we can use anything else as well
    const [ user, setUser]  = useState(null);

    return(
        <UsContext.Provider value={{user, setUser}}>
        {children}
        </UsContext.Provider>
    )

}

export default UsContextProvider;