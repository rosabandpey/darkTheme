import react from "react"
import { useContext } from "react"
import { createContext } from "react"
import { useState } from "react"



const ThemeContext = createContext(undefined)
theme={
    mode:"LIGHT"
}
const ThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(theme.mode)
    toggleThemeMode = () => {
        setThemeMode(themeMode=="LIGHT" ? "DARK" : "LIGHT")
       
    }

    return <ThemeContext.Provider value={{themeMode, toggleThemeMode}}>
        {children}
    </ThemeContext.Provider>
}

const useTheme = () => {
    const value = useContext(ThemeContext)
    if (value == undefined) {
        throw new Error("useTheme must be within ThemeContext Provider")
    }
    return value
}

export { ThemeProvider, useTheme }
