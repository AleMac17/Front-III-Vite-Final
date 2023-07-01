import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import WebAssetIcon from '@mui/icons-material/WebAsset'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'

const Detail = () => {
  const history = useHistory()
  let { id } = useParams()
  const [user, setUser] = useState([])

  const getUser = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (id) {
      getUser()
    }
  }, [])

  return (
    <div>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          borderRadius: 5,
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='h6' style={{ color: '#ff6f00' }}>
                Name
              </Typography>
            }
            secondary={user.name}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AlternateEmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='h6' style={{ color: '#ff6f00' }}>
                Email
              </Typography>
            }
            secondary={user.email}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalPhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='h6' style={{ color: '#ff6f00' }}>
                Phone
              </Typography>
            }
            secondary={user.phone}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WebAssetIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='h6' style={{ color: '#ff6f00' }}>
                Website
              </Typography>
            }
            secondary={user.website}
          />
        </ListItem>
      </List>
    </div>
  )
}

export default Detail
