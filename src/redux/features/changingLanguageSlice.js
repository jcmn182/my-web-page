import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  englishOn: false,
}

export const changingLanguageSlice = createSlice({
  name: 'changingLanguage',
  initialState,
  reducers: {
    spa: (state) => {
        if(state.englishOn===false){
          state.englishOn = true
        } 
    },
    eng: (state) => {
      if(state.englishOn === true){
        state.englishOn = false
      } 
  }
  },
})

// Action creators are generated for each case reducer function
export const { eng, spa } = changingLanguageSlice.actions

export default changingLanguageSlice.reducer