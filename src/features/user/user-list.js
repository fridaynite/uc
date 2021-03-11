import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { User } from './user'
import { CreateUserModal } from './create-modal'

import { makeStyles } from '@material-ui/core/styles'
import { List, Grid, IconButton, Select, MenuItem } from '@material-ui/core'

import { Add as AddIcon } from '@material-ui/icons'

import { sexFilter } from './slice'

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}))

export const UserList = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const sexFilterData = useSelector((state) => state.user.sexFilter)
  const users = useSelector((state) => {
    if (sexFilterData) {
      return state.user.data.filter((user) => user.sex === sexFilterData)
    }

    return state.user.data
  })

  const handleSetFilter = (e) => {
    dispatch(sexFilter(e.target.value))
  }

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
        <Select
          labelId="sex"
          id="sex"
          value={sexFilterData}
          onChange={handleSetFilter}
        >
          <MenuItem value={''}>Both</MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
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
