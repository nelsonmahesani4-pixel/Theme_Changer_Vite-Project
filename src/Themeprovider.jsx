import React, { createContext, useState } from 'react'
export const ThemeContext = createContext()

function Themeprovider({children}) {
  const [theme, settheme] = useState("Light")
  
  const toggleTheme = () => {
    if(theme=== "Light"){
      settheme( "Dark")
    }
    if(theme === "Dark"){
      settheme("Light")
    }
  };


  return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>

  )
}
export default Themeprovider;