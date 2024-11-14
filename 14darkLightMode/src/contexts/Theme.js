// this is the faster way of creating the context API
// In the production level, we use like below
// Step 1:
import { createContext, useContext} from "react";

// Step 2:
// Here, we gave default props inside our context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// step 3:
export const ThemeProvider = ThemeContext.Provider

//we can also create custom hooks over here
// step 4:
// we have created below one because we do not need to import ThemeContext and useContext everyhwhere
export default function useTheme(){
    return useContext(ThemeContext)
}4