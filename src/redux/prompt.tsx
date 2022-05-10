import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface promptState {
  prompt: string
}

const initialState: promptState = {
  prompt: '',
}

export const promptSlice = createSlice({
  name: 'prompter',
  initialState,
  reducers: {
    newPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { newPrompt } = promptSlice.actions

export default promptSlice.reducer