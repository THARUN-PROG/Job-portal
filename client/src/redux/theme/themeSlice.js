import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'dark',
  },
  reducers: {
    toggleTheme: (state) => {
      state.value === 'dark' ? state.value = 'light' : state.value = 'dark'
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer