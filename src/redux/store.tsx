import { configureStore } from '@reduxjs/toolkit'
import promptReducer from './prompt'
import responseReducer from './response'
import allPromptsReducer from './allPrompts'
import modeReducer from './mode'

export const store = configureStore({
  reducer: {
    prompter: promptReducer,
    responser: responseReducer,
    allPromptser: allPromptsReducer,
    moder: modeReducer,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
