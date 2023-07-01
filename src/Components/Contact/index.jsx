import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const Contact = () => {
  const [userContact, setUserContact] = useState({ name: '', email: '' })
  const [nameError, setNameError] = useState(false)
  const [nameMsgError, setNameMsgError] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [emailMsgError, setEmailMsgError] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const handleClose = () => setOpenModal(false)

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return regex.test(email)
  }

  const handleNameChange = (e) => {
    setUserContact({ ...userContact, name: e.target.value })
  }

  const handleEmailChange = (e) => {
    setUserContact({ ...userContact, email: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let isFormValid = true

    if (userContact.name.length < 6) {
      setNameError(true)
      setNameMsgError('Name must be at least 6 characters')
      isFormValid = false
    } else {
      setNameError(false)
      setNameMsgError('')
    }

    if (!validateEmail(userContact.email)) {
      setEmailError(true)
      setEmailMsgError('Invalid email')
      isFormValid = false
    } else {
      setEmailError(false)
      setEmailMsgError('')
    }

    if (isFormValid) {
      setOpenModal(true)
    } else {
      console.log('Invalid Form')
    }
  }

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 5,
        padding: 1,
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          error={nameError}
          required
          id='outlined-required'
          label={nameError ? 'Error' : null}
          helperText={nameMsgError || 'Required'}
          placeholder='Name'
          color={!nameError ? 'success' : null}
          value={userContact.name}
          onChange={handleNameChange}
        />
        <TextField
          error={emailError}
          label={emailError ? 'Error' : null}
          required
          id='outlined-required'
          helperText={emailMsgError || 'Required'}
          placeholder='Email'
          type='email'
          color={!emailError ? 'success' : null}
          value={userContact.email}
          onChange={handleEmailChange}
        />
      </div>
      <Button variant='contained' type='submit'>
        Send
      </Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            color: 'black',
          }}
        >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Success
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Hello: {userContact.name}, we will send you an email to:{' '}
            {userContact.email}
          </Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default Contact
