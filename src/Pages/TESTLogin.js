import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./TestLogin.css";

export default function TestLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regPass, setRegPass] = useState("");
  const [user, setUser] = useState(null);

  const history = useHistory();

  //this could be changed to an async function
  //this verification route will work if you run the server from index.js on your local machine
  //currently the credentials username:Admin password:password will work
  //a registration route is set up under POST "http://localhost:5000/authentication/register" (also accepts username and pw)
  function login() {
    Axios({
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      withCredentials: true,
      //url: "http://localhost:5000/authenticate/login",
      url: "https://filmably-app-backend.herokuapp.com/authenticate/login",
    }).then((res) => {
      if (res.data.message === "Successfully Authenticated") {
        setUsername("");
        setPassword("");
        localStorage.setItem("isAuthenticated", true);
        //history.replace("/dashboard");
      }
    });
  }

  function register() {
    Axios({
      method: "POST",
      data: {
        username: regName,
        password: regPass,
      },
      withCredentials: true,
      //url: "http://localhost:5000/authenticate/register",
      url: "https://filmably-app-backend.herokuapp.com/authenticate/register",
    }).then((res) => {
      if (res.data === "User Created") {
        setRegName("");
        setRegPass("");
        //localStorage.setItem("isAuthenticated", true);
        //history.replace("/dashboard");
      }
    });
  }

  function logout() {
    Axios({
      method: "GET",
      withCredentials: true,
      //url: "http://localhost:5000/authenticate/logout",
      url: "https://filmably-app-backend.herokuapp.com/authenticate/logout",
    });
  }

  function getUser() {
    Axios({
      method: "GET",
      withCredentials: true,
      //url: "http://localhost:5000/authenticate/user",
      url: "https://filmably-app-backend.herokuapp.com/authenticate/user",
    }).then((res) => {
      console.log(res);
      setUser(res.data.username);
    });
  }

  return (
    <div className="testLogin">
      <div className="testLogin__section">
        <h1>Login Page</h1>
        <label>username</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={login}> Login </button>
      </div>
      <div className="testLogin__section">
        <h1>Register Page</h1>
        <label>username</label>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setRegName(e.target.value)}
          value={regName}
        />
        <label> password </label>
        <input
          type="password"
          onChange={(e) => setRegPass(e.target.value)}
          value={regPass}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="testLogin__section">
        <h1>LogOut</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="testLogin__section">
        <h1>Get User</h1>
        <button onClick={getUser}>Get User</button>
        {user}
      </div>
    </div>
  );
}
