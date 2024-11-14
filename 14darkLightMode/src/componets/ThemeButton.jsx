import React from 'react'
import useTheme from '../contexts/Theme';

export default function ThemeBtn() {
    // use context API but it from our created hook
    const {themeMode, darkTheme, lightTheme}  = useTheme()

    const onChangeBtn = (e)  => {
        // we are checking the current status of checked
        const darkModeStatus = e.currentTarget.checked
        // if the checked is true then change to the dark mode and if not then change to the light mode
        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }
    }

    // ye sab to ho gaya but hamare card ko kon batayega ki hamara button change ho raha to  light ho jao or dark ho jao

    // So our darkTheme() and lightTheme() here are states and in App.jsx we did if theme ke under koi change ho useeffect ho
    // to vo sab automatic ho jayega

    // to webside ma gana badha component hot tyare ek j jagya per button hoy light mode and  dark mode and e badhu change kar de kem??
    // because all we did is wraped inside the context api and the things we do is change only dark or light inside the html tag so it is the functinality of tailwind and power of the context API to change the themes
        return ( 
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked = {themeMode === "dark"}
            />
            
            {/* theme==="dark" gives answer either true or false */}
            {/*  If themeMode is "dark", the expression evaluates to true, making the checkbox or radio button checked. If themeMode is not "dark", it evaluates to false, making the checkbox or radio button unchecked. */}

            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}

