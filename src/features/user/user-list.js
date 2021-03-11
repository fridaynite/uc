import React from 'react'
import { useSelector } from 'react-redux'

import { User } from './user'

import { makeStyles } from '@material-ui/core/styles'
import { List, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

export const UserList = (props) => {
  const classes = useStyles()
  const users = useSelector((state) => state.user.data)

  return (
    <Grid item xs={12} md={6}>
      <Typography variant="h6" className={classes.title}>
        Avatar with text and icon
      </Typography>
      <div className={classes.demo}>
        <List>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              sex={user.sex}
            />
          ))}
        </List>
      </div>
    </Grid>
  )
}
