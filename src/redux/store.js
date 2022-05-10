import { configureStore } from '@reduxjs/toolkit';
//reducers
import changingLanguageSlice from './features/changingLanguageSlice'

export const store = configureStore({
  reducer: {
    changing:changingLanguageSlice
  },
})