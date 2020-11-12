import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Registration() {

    const [values, setInput] = useState('')
    const [error, setError] = useState();

    // func expression to post the data gathered in the inputfield
    const submit = () => {
        //post route to backend
        axios
            .post('http://localhost:5000/authenticate/register', {
                // first: values.first,
                // last: values.last,
                username: values.email,
                // username: values.username,
                password: values.pw
            })
            .then(({ data }) => {
                // console.log(data)
                //data is the response from backend
                if ({ data }) {
                    //should send user to its account
                    console.log(data)
                    window.location.replace('/dashboard')
                } else {
                    setError(true)
                }
            })
        return [submit, error];
    }

	// func expression to post the data gathered in the inputfield
	const submit = () => {
		//post route to backend
		axios
			.post('/register', {
				first: values.first,
				last: values.last,
				email: values.email,
				pw: values.pw
			})
			.then(({ data }) => {
				//data is the response from backend
				if (data.success) {
					//should send user to its account
					window.location.replace('/');
				} else {
					setError(true);
				}
			});
		return [ submit, error ];
	};

	//will handle the fact that many letters can be written and update to the lastest version
	const handleChange = (e) => {
		//with set input, update the state of name and value together
		setInput({
			...values,
			[e.target.name]: e.target.value
		});
		return [ values, handleChange ];
	};

	return (
		<React.Fragment>
			<div>
				{error && <div>Something went wrong!</div>}
				<input
					type="text"
					name="first"
					placeholder="First Name"
					onInput={(e) => setInput(e.target.value)}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="last"
					placeholder="Last Name"
					onInput={(e) => setInput(e.target.value)}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					onInput={(e) => setInput(e.target.value)}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="pw"
					placeholder="Password"
					onInput={(e) => setInput(e.target.value)}
					onChange={handleChange}
				/>
				<button onClick={submit}> Register </button>
				<Link to="/login"> Log In</Link>
				<Link to="/resetpw">Reset PW</Link>
			</div>
		</React.Fragment>
	);
}

export default Registration;
