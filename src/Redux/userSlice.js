//this does nothing at the moment I just set it up because
//I assume we will want to store some basic user information in our redux state

import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter();

//defines the initial state
const initialState = userAdapter.getInitialState({
  status: "idle",
  error: null,
});

//creates a slice called "user" set to the initial state defined above
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
