import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  check: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map(items => {
        if (action.payload === items.id) {
          if (items.done === true) {
            items.done= false
          } else {
            items.done= true
          }
        }
      })
    }
  },
});


export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
