import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { entities: [], loading: 'idle' };

const serverURL = 'http://localhost:5000';

//makes an API call to decode the user information stored in the cookie
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const response = await axios({
      method: 'GET',
      withCredentials: true,
      url: `${serverURL}/authenticate/user`,
    });
    return response.data;
  } catch (err) {
    return err;
  }
});

//creates a slice called "user" set to the initial state defined above
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  //when fetchUser has finished doing async logic it stores the data in the Redux store
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

export default userSlice.reducer;

//to access the user ID and username
//import {useSelector} from 'react-redux';
//import {selectUser} from '../Redux/userSlice';
//const user = useSelector(selectUser);

export const selectUser = (state) =>
  state.user ? state.user.entities[0] : null;
