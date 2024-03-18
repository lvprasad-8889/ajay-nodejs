import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 100,
    users: [],
    loggedIn: false
  }
  
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment(state, action) {
        state.count++;
      },
      decrement(state, action) {
        state.count--;
      },
      incrementByN(state, action) {
        state.count += action.payload.data;
      },
      users(state, action) {
        state.users = [...state.users, ...action.payload.data];
      },
      setLoggedIn(state, action) {
        state.loggedIn = action.payload;
      }
    }
  })
  
export const counterActions = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;