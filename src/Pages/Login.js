import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {

	const history = useHistory()
	
	function login() {
		localStorage.setItem("isAuthenticated", true)
		history.replace("/dashboard")
	}


	return (
		<>
			<br />
			<br /> <br /> <br />
			<h1>Login Page</h1>
			<br />
			<label> user name </label>
			<input type="text"  />
			<br />
			<br />
			<label> password </label>
			<input type="text" />
			<br />
			<br />
		<button onClick={login}> Login </button>
		</>
	);
}
