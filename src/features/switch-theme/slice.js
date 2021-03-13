import { createSlice } from '@reduxjs/toolkit'

export const theme = createSlice({
  name: 'theme',
  initialState: {
    dark: localStorage.getItem('darkTheme')
      ? JSON.parse(localStorage.getItem('darkTheme'))
      : false,
  },
  reducers: {
    enableDarkTheme: (state, action) => {
      localStorage.setItem('darkTheme', action.payload)

      state.dark = action.payload
    },
  },
})

export const { enableDarkTheme } = theme.actions

export default theme.reducer
