import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
