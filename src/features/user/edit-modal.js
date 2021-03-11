import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { edit } from './slice'

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

export const EditUserModal = ({ open, handleClose, user }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [sex, setSex] = useState(user.sex)

  const onSubmit = () => {
    dispatch(
      edit({
        id: user.id,
        email,
        name,
        sex,
      }),
    )

    handleClose()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit user, please enter your email, name and set your sex here.
          </DialogContentText>
          <TextField
            autoFocus
            error={!email}
            helperText={!email && 'Set your email'}
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
            error={!name}
            helperText={!name && 'Set your name'}
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
    </div>
  )
}
