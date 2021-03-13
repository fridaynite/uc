import { createStyles, makeStyles } from '@material-ui/core'

import { useSelector } from 'react-redux'

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        backgroundColor: (darkTheme) =>
          darkTheme ? 'rgb(41, 41, 41)' : 'white',
      },
    },
  }),
)

const GlobalStyles = () => {
  const darkTheme = useSelector((state) => state.theme.dark)
  useStyles(darkTheme)

  return null
}

export default GlobalStyles
