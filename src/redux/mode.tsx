import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface modeState {
  mode: 'dark' | 'light';
}

const initialState: modeState = {
  mode: 'dark',
}

export const modeSlice = createSlice({
  name: 'moder',
  initialState,
  reducers: {
    newMode: (state, action: PayloadAction<'dark' | 'light'> ) => {
      state.mode = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { newMode } = modeSlice.actions

export default modeSlice.reducer