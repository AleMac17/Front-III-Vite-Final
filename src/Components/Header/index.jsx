import React, { useContext, useState } from 'react'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from '@mui/material/IconButton'
import { ThemeContext } from 'src/context/themeContext'

const Header = () => {
  const [color, setColor] = useState()
  const theme = useContext(ThemeContext)

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.rutes}>
          <li>
            {' '}
            <NavLink activeClassName={styles.active} exact to='/'>
              Home
            </NavLink>{' '}
          </li>
          <li>
            <NavLink activeClassName={styles.active} to='/contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to='/featured'>
              Featured
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <IconButton>
          <DarkModeIcon color={color} onClick={() => theme.toggleTheme()} />
        </IconButton>
      </div>
    </header>
  )
}

export default Header
