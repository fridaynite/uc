import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Switch from '@material-ui/core/Switch'

import { enableDarkTheme } from './slice'

export const Switcher = () => {
  const dispatch = useDispatch()
  const checked = useSelector((state) => state.theme.dark)

  const handleChange = (e) => {
    dispatch(enableDarkTheme(e.target.checked))
  }

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
  )
}
