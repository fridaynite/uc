import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'

import { useSelector } from 'react-redux'

import { UserList, UserDetails, Switcher } from 'features/'

import { makeStyles } from '@material-ui/core/styles'

import { Container, Button } from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    marginLeft: '8px',
  },
  homeIcon: (darkTheme) => ({
    color: darkTheme && '#e0e0e0',
  }),
  homeButton: (darkTheme) => ({
    marginTop: '25px',
    marginRight: '386px',
    marginBottom: '30px',
    color: darkTheme ? 'rgba(255, 255, 255, 0.6)' : 'gray',
    backgroundColor: darkTheme && '#212121',
    '&:hover': {
      backgroundColor: darkTheme ? '#212121' : 'white',
    },
  }),
}))

function App() {
  const darkTheme = useSelector((state) => state.theme.dark)
  const classes = useStyles(darkTheme)

  return (
    <Container maxWidth="sm">
      <Router>
        <Link to="/" className={classes.link}>
          <Button
            variant="contained"
            color="default"
            startIcon={<HomeIcon className={classes.homeIcon} />}
            className={classes.homeButton}
          >
            Home
          </Button>
        </Link>

        <Switcher />

        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>

          <Route path="/user/:id">
            <UserDetails />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
