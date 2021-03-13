import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { User } from './user'
import { CreateUserModal } from './create-modal'

import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'

import { Add as AddIcon } from '@material-ui/icons'

import { sexFilter } from './slice'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 115,
  },
  selectLabel: (darkTheme) =>
    darkTheme && {
      color: 'rgba(255, 255, 255, 0.6)',
    },
  select: {
    color: (darkTheme) => (darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'gray'),
  },
  demo: {
    backgroundColor: (darkTheme) =>
      darkTheme ? '#212121' : theme.palette.background.paper,
    boxShadow:
      '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
  },
  addButton: {
    marginTop: '15px',
    marginLeft: '368px',
    color: (darkTheme) => darkTheme && '#757575',
  },
}))

export const UserList = () => {
  const dispatch = useDispatch()

  const darkTheme = useSelector((state) => state.theme.dark)
  const classes = useStyles(darkTheme)

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
      <Grid item xs={12} md={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="sex-label" className={classes.selectLabel}>
            Filter by sex
          </InputLabel>
          <Select
            labelId="sex-label"
            id="sex"
            value={sexFilterData}
            onChange={handleSetFilter}
            className={classes.select}
          >
            <MenuItem value={''}>Both</MenuItem>
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          onClick={() => setOpen(true)}
          aria-label="add new user"
          className={classes.addButton}
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
