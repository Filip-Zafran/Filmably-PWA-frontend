import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from '../styleElements/icons';
import { Download } from '../styleElements/icons';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import { TopNav } from '../TopNav';
import { Toggle } from '../styleElements/controls/Toggle';

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 100
	}
}));

export function ProfileEdit() {
	const location = useLocation();

	const classes = useStyles();
	const [ value, setValue ] = useState('');

	const handleChange = (e) => setValue(e.target.value);

	/*
  How to make post http requests with axios?
  How to send data in post http requests with axios?
  How to work with Redux Thunk (redux-toolkit)?
  Finish form validation with Formik
  Show validation errors in the form
  Learn Formik API
  learn basics about http requests/responds. 101/crashcorse http
  How your server receives http requests
  Find out if there is already an API endpoint for profile/user updating?
  If no - create one
  Found out how to get/RECEIVE the data from the http POST request 
  how to put data into mongo db - ex
  post vs get vs get requests
  how to respond to the client - http status codes: 201 / 400 / 500
*/

	return (
		<div>
			<CirclesBackground />
			<TopNav />
			<div className='profile__edit-containter'>
				<div className='profile__edit-footer'>
					<div id='profile__chevron-left'>
						<Link to='/Profile'>
							<ChevronLeft size={30} active={location.pathname === '/Profile'} />
						</Link>
					</div>
					<h1>Profile Settings </h1>
				</div>

				<div id='profile__edit-picture-container'>
					<div id='profile__edit-picture'>
						<Download />
					</div>
				</div>

				<div className='profile__edit-label-input'>
					<label> Username:</label>
					<input type='text' />
				</div>
				<div className='profile__edit-label-input profile__edit__age-select-wrapper'>
					<FormControl
						className={`${classes.formControl} profile__edit__age-select`}
						id='profile__edit-formcontrol'
					>
						<InputLabel id='profile__edit-inputlabel'>Age range:</InputLabel>
						<Select id='profile__edit-select' onChange={handleChange}>
							<MenuItem value={'Newb'}> Younger than 18yo</MenuItem>
							<MenuItem value={'Generation Z'}>Between 22 - 30yo</MenuItem>
							<MenuItem value={'Midlife Crisis'}> Between 30 - 40yo</MenuItem>
							<MenuItem value={'Golden Age'}> Between 40 - 50yo </MenuItem>
							<MenuItem value={'Veteran'}>Over 50yo </MenuItem>
						</Select>
					</FormControl>
				</div>

				<div className='profile__edit-label-input'>
					<label> City: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Email: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Password: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-current-filters'>
					<div className='profile__span-container-big'>
						<h4> Current filters: - - - EDIT SYMBOL</h4>
						<div className='profile__edit-span-container'>
							<span>1970s</span>
							<span>1980s</span>
							<span>Art</span>
							<span>Indy</span>
							<span>Si-Fi</span>
							<span>Western</span>
							<span>Si-Fi</span>
							<span>Western</span>
						</div>
					</div>
				</div>

				<Link to='/Profile'>
					<button className='profile__bttn' active={location.pathname === '/Profile'}>
						SAVE
					</button>
				</Link>

				<div className='profile__edit-likes-friends'>
					<div className='profile__edit-grid'>
						<p className='profile__p-text'>Show likes on profile page</p>
						<Toggle />
					</div>
					<div className='profile__edit-grid'>
						<p className='profile__p-text'>Show matches on profile page</p>
						<Toggle />
					</div>
				</div>
			</div>
		</div>
	);
}
