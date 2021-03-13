import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'

import { Folder as FolderIcon } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  listItem: {
    backgroundColor: (darkTheme) => (darkTheme ? '#212121' : 'white'),
    boxShadow:
      '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
  },
  avatar: (darkTheme) =>
    darkTheme && {
      backgroundColor: '#757575',
      color: '#e0e0e0',
    },
  primaryText: {
    color: (darkTheme) => (darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'gray'),
  },
  secondaryText: {
    color: (darkTheme) => (darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'gray'),
  },
}))

export const UserDetails = () => {
  const { id } = useParams()

  const darkTheme = useSelector((state) => state.theme.dark)
  const classes = useStyles(darkTheme)

  const user = useSelector((state) => {
    return state.user.data.find((el) => el.id === Number(id))
  })

  return (
    <ListItem className={classes.listItem}>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={user.name}
        secondary={user.email}
        className={classes.primaryText}
        classes={{ secondary: classes.secondaryText }}
      />
    </ListItem>
  )
}
