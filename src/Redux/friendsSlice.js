import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
// import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';

const serverUrl = process.env.REACT_APP_SERVER;
const feUrl = process.env.REACT_APP_FE;

const friendsAdapter = createEntityAdapter();
// const initialState = { entities: [], loading: 'idle' };

//initial state of moviesSlice
const initialState = friendsAdapter.getInitialState({
    // id:
    status: "idle",
    error: null,
});

// const user = useSelector(selectUser)

//async thunk that will fetch the top 250 movies list from IMDB and store them
//in the "movies" section of the redux state
// export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
//     const response = await axios.get(
//         `https://imdb-api.com/en/API/Top250Movies/${process.env.REACT_APP_IMDB_KEY}`
//     );
//     return response;
// });

//Actions
const fetchFriendsWannabes = createAsyncThunk("RECEIVE_FRIENDS_WANNABES",
    async () => {
        const rs = await axios({
            method: 'GET',
            url: `${serverUrl}/Friends/wannabe`,
            withCredentials: true,
        })
        // console.log("rs in friendsslice", rs.data)
        // console.log("rs.payload", rs.payload)
        // if (rs) {
        return {
            friendsWannabes: rs.data
        }
        // }
    }
)

const fetchFriendsAccepted = createAsyncThunk('ACCEPT_FRIEND_REQUEST',

    async () => {
        const rs = await axios.post(`${serverUrl}/friends/accepted`)
        // if (rs) {
        return {
            friendsAccepted: rs.data
        }
        // }
    }

)

const fetchFriendsDeclined = createAsyncThunk('/friends/declined',

    async () => {
        const rs = await axios.post(`${serverUrl}/friends/declined`)
        // if (rs) {
        return {
            type: "DECLINE_FRIEND_REQUEST"
        }
        // }
    }

)

//Actions
const fetchFriendsDeleted = createAsyncThunk('/friends/deleted',

    async () => {
        const rs = await axios.post(`${serverUrl}/friends/deleted`)
        // if (rs) {
        return {
            type: "DELETE_FRIEND_REQUEST"
        }
        // }
    }

)

//creates moviesSlice when fetchMovies is fullfilled it will populate the movies slice
const friendsSlice = createSlice({
    name: "friendsList",
    initialState,
    reducers: {
        //here pass the action if not async
    },
    //if async need to crate a thunk 
    extraReducers: {
        [fetchFriendsWannabes.fulfilled]: (state, action) => {
            // console.log("state before", action.type)
            if (action.type === "RECEIVE_FRIENDS_WANNABES/fulfilled") {
                // console.log("made it to action")
                state = {
                    ...state,
                    friendsWannabes: action.payload.friendsWannabes
                }
                console.log("state", state)
            }
            return state
        },

        // [fetchFriendsAccepted.fulfilled]: friendsAdapter.setAll,

        // [fetchFriendsWannabes],
        // [fetchFriendsAccepted]

        // if (payload.type === "RECEIVE_FRIENDS_WANNABES")
    },

});

console.log("friendsSlice", friendsSlice)
console.log("fetchFriendsWannabes", fetchFriendsWannabes)

export default friendsSlice.reducer;

export { fetchFriendsWannabes, fetchFriendsAccepted, fetchFriendsDeclined, fetchFriendsDeleted };

// export const stateWannabes = (state) =>
//     state.friendsWannabes ? state.friendsWannabes : [];
// console.log("state Wannabes", stateWannabes())
// export selectUser = (state) =>
//     state.user ? state.user.entities[0] : null;
//selects all moves from the redux store
//Note: the shape of the redux state is a bit awkward but I'm not sure how to clean this up
// export const selectAllMovies = (state) =>
//     state.movies ? state.movies.entities.undefined.items : [];