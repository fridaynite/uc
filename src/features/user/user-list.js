import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'

import { User } from './user'
import { CreateUserModal } from './create-modal'

import { makeStyles } from '@material-ui/core/styles'
import { List, Grid, IconButton } from '@material-ui/core'

import { Add as AddIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}))

export const UserList = (props) => {
  const classes = useStyles()
  const users = useSelector((state) => state.user.data)

  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <Grid item xs={12} md={6}>
        <IconButton
          onClick={() => setOpen(true)}
          edge="end"
          aria-label="delete"
        >
          <AddIcon />
        </IconButton>
        <div className={classes.demo}>
          <List>
            {users.map((user) => (
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                sex={user.sex}
                user={user}
              />
            ))}
          </List>
        </div>
      </Grid>

      <CreateUserModal open={open} handleClose={() => setOpen(false)} />
    </Fragment>
  )
}
