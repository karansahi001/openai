import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface responseState {
  response: string
}

const initialState: responseState = {
  response: '',
}

export const responseSlice = createSlice({
  name: 'responser',
  initialState,
  reducers: {
    newResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { newResponse } = responseSlice.actions

export default responseSlice.reducer