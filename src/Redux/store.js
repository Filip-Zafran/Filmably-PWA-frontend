import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

//creates a redux store with defined slices and imports the reducers for each

export default configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
