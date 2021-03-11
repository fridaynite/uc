import { configureStore } from '@reduxjs/toolkit'

import user from '/features/user/slice'

export default configureStore({
  reducer: {
    user,
  },
})
