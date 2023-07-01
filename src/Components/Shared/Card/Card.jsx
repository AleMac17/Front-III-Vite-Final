import React, { useEffect, useState } from 'react'
import styles from './card.module.css'
import { Container } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import InfoIcon from '@mui/icons-material/Info'
import placeholderImage from 'src/assets/happyenamel.jpg'
import { IconButton, Card, CardMedia, Grid } from '@mui/material'
import { useHistory } from 'react-router-dom'

const SharedCard = ({ users }) => {
  const [color, setColor] = useState({})
  const [favUsers, setFavUsers] = useState([])
  const history = useHistory()

  const handleDetail = (id) => {
    history.push(`details/${id}`)
  }

  const handlerFav = (user) => {
    setColor((prevColor) => ({
      ...prevColor,
      [user.id]: prevColor[user.id] === 'error' ? undefined : 'error',
    }))

    if (!favUsers.some((favUser) => favUser.id === user.id)) {
      setFavUsers((prevFavUsers) => {
        const updatedFavUsers = [...prevFavUsers, user]
        localStorage.setItem('favUsersLocal', JSON.stringify(updatedFavUsers))
        return updatedFavUsers
      })
    } else {
      setFavUsers((prevFavUsers) => {
        const updatedFavUsers = prevFavUsers.filter(
          (favUser) => favUser.id !== user.id
        )
        localStorage.setItem('favUsersLocal', JSON.stringify(updatedFavUsers))
        return updatedFavUsers
      })
    }
  }

  useEffect(() => {
    const favUsersLocal = localStorage.getItem('favUsersLocal')
    if (favUsersLocal) {
      setFavUsers(JSON.parse(favUsersLocal))
      const initialColor = {}
      JSON.parse(favUsersLocal).forEach((user) => {
        initialColor[user.id] = 'error'
      })
      setColor(initialColor)
    }
  }, [])

  const listUsers = users
    ? users.map((user) => (
        <Card key={user.id} className={styles.card}>
          <CardMedia
            className={styles.cardImage}
            component='img'
            height='200'
            image={`${placeholderImage}?w=164&h=164&fit=crop&auto=format`}
            sx={{ objectFit: 'contain' }}
            alt=''
          />
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <Container>
            <IconButton>
              <FavoriteIcon
                color={color[user.id]}
                onClick={() => handlerFav(user)}
              />
            </IconButton>
            <IconButton>
              <InfoIcon onClick={() => handleDetail(user.id)} />
            </IconButton>
          </Container>
        </Card>
      ))
    : null

  return (
    <Grid
      container
      justifyContent='space-evenly'
      alignItems='center'
      className={styles.containerCard}
    >
      {listUsers}
    </Grid>
  )
}

export default SharedCard
