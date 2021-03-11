import { useDispatch } from 'react-redux'

import { remove } from './slice'

import {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
} from '@material-ui/core'

import { Folder as FolderIcon, Delete as DeleteIcon } from '@material-ui/icons'

export const User = (props) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(remove(props.id))
  }

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.name} secondary={props.email} />
      <ListItemSecondaryAction>
        <IconButton onClick={handleDelete} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
