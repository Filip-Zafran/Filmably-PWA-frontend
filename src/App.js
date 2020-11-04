import "./App.css";
import { fetchMovies } from "./Redux/moviesSlice";
import store from "./Redux/store";

function App() {
  store.dispatch(fetchMovies());

  return (
    <div className="App">
      <h1>Hello there Movie lovers :) </h1>
    </div>
  );
}

export default App;
