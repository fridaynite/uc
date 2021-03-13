import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { create } from './slice'

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core/'

export const CreateUserModal = ({ open, handleClose }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [sex, setSex] = useState('')

  const clearForm = () => {
    setEmail('')
    setName('')
    setSex('')
  }

  const onSubmit = () => {
    dispatch(
      create({
        id: Date.now(),
        email,
        name,
        sex,
      }),
    )

    clearForm()
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="create-user">
      <DialogTitle id="create-user">Create user</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To create user, please enter your email, name and set your sex here.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabel>Sex</InputLabel>
        <Select
          labelId="sex"
          id="sex"
          fullWidth
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}
