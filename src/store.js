import { configureStore } from '@reduxjs/toolkit'

import user from 'features/user/slice'
import theme from 'features/switch-theme/slice'

export default configureStore({
  reducer: {
    user,
    theme,
  },
})
