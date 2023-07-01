import React, { useContext } from 'react'

import SharedCard from 'src/Components/Shared/Card/Card'
import { CounterContext } from 'src/context/context'
import styles from './home.module.css'

const Home = () => {
  const users = useContext(CounterContext)

  return <SharedCard users={users} />
}

export default Home
