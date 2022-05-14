import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface allPromptsState {
  allPrompts: { prompt?: string, response?: string }[]
}

const initialState: allPromptsState = {
  allPrompts: [],
}

export const allPromptsSlice = createSlice({
  name: 'allPromptser',
  initialState,
  reducers: {
    newallPrompts: (state, action: PayloadAction<any[]>) => {
      state.allPrompts = action.payload
    },
    promptsClear: (state) => {
      state.allPrompts = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { newallPrompts, promptsClear } = allPromptsSlice.actions

export default allPromptsSlice.reducer
