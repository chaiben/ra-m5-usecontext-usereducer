import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { urls } from '../constants'

const getUrl = () => `${urls.users}`

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const res = await fetch(getUrl())
    const data = await res.json()
    return data
  } catch (err) {
    return Error('Error to load userList')
  }
})

const initialState = {
  reqStatus: {
    status: 'initial',
    isError: false,
    isSuccess: false,
    isLoading: false,
    hasData: true,
  },
  users: {
    byId: {},
    allIds: [],
    data: [],
  },
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.reqStatus.status = 'loading'
      state.reqStatus.isLoading = true
      state.reqStatus.isError = false
      state.reqStatus.isSuccess = false
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.reqStatus.state = 'success'
      state.reqStatus.isSuccess = true
      state.reqStatus.isLoading = false
      state.reqStatus.isError = false
      if (action.payload && action.payload.length === 0) {
        state.reqStatus.hasData = false
      }
      state.users.data = action.payload
      action.payload.forEach((user) => {
        state.users.byId[user.id] = user
        if (!state.users.allIds.includes(user.id)) {
          state.users.allIds.push(user.id)
        }
      })
    })
    builder.addCase(getUsers.rejected, (state) => {
      state.reqStatus.status = 'failed'
      state.reqStatus.isSuccess = false
      state.reqStatus.isLoading = false
      state.reqStatus.isError = true
    })
  },
})

export default usersSlice.reducer
