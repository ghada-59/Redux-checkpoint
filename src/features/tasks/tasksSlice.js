import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload)
      },
      prepare: (description) => ({
        payload: {
          id: nanoid(),
          description,
          isDone: false,
        },
      }),
    },
    toggleTask: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload)
      if (task) {
        task.isDone = !task.isDone
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload
      const task = state.items.find((item) => item.id === id)
      if (task) {
        task.description = description
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { addTask, toggleTask, editTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer
