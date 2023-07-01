import React, { useEffect, useState } from 'react'
import SharedCard from 'src/Components/Shared/Card/Card'

const Featured = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('favUsersLocal') || '[]')
  )

  return <SharedCard users={users} />
}

export default Featured
