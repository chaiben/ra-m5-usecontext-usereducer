import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users.slice'
import housesReducer from './houses.slice'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    users: usersReducer,
    houses: housesReducer,
  },
})
