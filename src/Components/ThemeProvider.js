import React from 'react'
import {useState, useContext} from 'react'

const ThemeContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}



function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark')
  function handleTheme() {
    setTheme(prev=>{return(!prev)})
    let bodyTag = document.getElementsByTagName("BODY")[0]
    if(bodyTag.classList.contains('light-mode'))
    {
      bodyTag.classList.remove('light-mode')
    }
    else
    {
      bodyTag.classList.add('light-mode')
    }
  }

  const themeObj = {
    theme,
    handleTheme
  }
  return (
    <ThemeContext.Provider value={themeObj}>
    {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider