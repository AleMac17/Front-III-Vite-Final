import { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeProvider(props) {
  const [theme, setTheme] = useState()

  const toggleTheme = () => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
      setTheme('dark')
    } else {
      root.classList.add('dark')
      setTheme('light')
    }
  }
  const exposedValue = {
    theme,
    toggleTheme,
  }

  return (
    <>
      <ThemeContext.Provider value={exposedValue}>
        {props.children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
