import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'

import { Folder as FolderIcon } from '@material-ui/icons'

export const UserDetails = () => {
  const { id } = useParams()

  const user = useSelector((state) => {
    return state.user.data.find((el) => el.id === Number(id))
  })

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={user.email} />
    </ListItem>
  )
}
