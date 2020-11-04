import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const moviesAdapter = createEntityAdapter();

const initialState = moviesAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    `https://imdb-api.com/en/API/Top250Movies/${process.env.IMDB_KEY}`
  );
  return response;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: moviesAdapter.setAll,
  },
});

export default moviesSlice.reducer;

export const selectAllMovies = (state) =>
  state.movies ? state.movies.entities.undefined.items : [];
