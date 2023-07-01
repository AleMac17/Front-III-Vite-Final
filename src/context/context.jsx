import React, { createContext, useState, useEffect } from 'react'

export const CounterContext = createContext()

function CounterProvider({ children }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <CounterContext.Provider value={users}>{children}</CounterContext.Provider>
  )
}

export default CounterProvider
