import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const moviesAdapter = createEntityAdapter();

//initial state of moviesSlice
const initialState = moviesAdapter.getInitialState({
  status: "idle",
  error: null,
});

//async thunk that will fetch the top 250 movies list from IMDB and store them
//in the "movies" section of the redux state
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get(
    `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_IMDB_KEY}`
  );
  return response;
});

//creates moviesSlice when fetchMovies is fullfilled it will populate the movies slice
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: moviesAdapter.setAll,
  },
});

export default moviesSlice.reducer;

//selects all moves from the redux store
//Note: the shape of the redux state is a bit awkward but I'm not sure how to clean this up
export const selectAllMovies = (state) =>
  state.movies ? state.movies.entities.undefined.items : [];
