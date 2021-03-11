import { createSlice } from '@reduxjs/toolkit'

const initialData = [
  { id: 1, name: 'George', sex: 'male', email: 'george@email.com' },
  { id: 2, name: 'Kate', sex: 'female', email: 'kate@email.com' },
  { id: 3, name: 'Dan', sex: 'male', email: 'dan@email.com' },
  { id: 4, name: 'Jen', sex: 'female', email: 'jen@email.com' },
]

export const user = createSlice({
  name: 'user',
  initialState: {
    data: initialData,
  },
  reducers: {
    create: (state, action) => {
      state.data.push(action.payload)
    },
    edit: (state, action) => {
      const data = state.data.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload
        }

        return user
      })

      state.data = data
    },
    remove: (state, action) => {
      const data = state.data.filter((user) => user.id !== action.payload)

      state.data = data
    },
  },
})

export const { create, edit, remove } = user.actions

export default user.reducer
