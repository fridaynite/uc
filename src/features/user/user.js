import { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'

import { remove } from './slice'

import { EditUserModal } from './edit-modal'

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

export const User = (props) => {
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(remove(props.id))
  }

  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.email} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => setEditing(true)}
            edge="end"
            aria-label="delete"
          >
            <EditIcon />
          </IconButton>

          <IconButton onClick={handleDelete} edge="end" aria-label="delete">
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
