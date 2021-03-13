import { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { remove } from './slice'

import { EditUserModal } from './edit-modal'

import { makeStyles } from '@material-ui/core/styles'

import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
} from '@material-ui/core'

import {
  Folder as FolderIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  avatar: (darkTheme) =>
    darkTheme && {
      backgroundColor: '#757575',
      color: '#e0e0e0',
    },
  link: {
    textDecoration: 'none',
    color: (darkTheme) => (darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'gray'),
  },
  secondaryText: {
    color: (darkTheme) => (darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'gray'),
  },
  editButton: {
    color: (darkTheme) => darkTheme && '#757575',
  },
  deleteButton: {
    color: (darkTheme) => darkTheme && '#757575',
  },
}))

export const User = (props) => {
  const darkTheme = useSelector((state) => state.theme.dark)
  const classes = useStyles(darkTheme)

  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(remove(props.id))
  }

  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to={`/user/${props.id}`} className={classes.link}>
          <ListItemText
            primary={props.name}
            secondary={props.email}
            classes={{ secondary: classes.secondaryText }}
          />
        </Link>
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => setEditing(true)}
            edge="end"
            aria-label="edit"
            className={classes.editButton}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={handleDelete}
            edge="end"
            aria-label="delete"
            className={classes.deleteButton}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <EditUserModal
        open={editing}
        handleClose={() => setEditing(false)}
        user={props.user}
      />
    </Fragment>
  )
}
