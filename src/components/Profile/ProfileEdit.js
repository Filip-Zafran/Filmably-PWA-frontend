import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from '../styleElements/icons';
import { Download } from '../styleElements/icons';
import { CirclesBackground } from '../styleElements/CirclesBackground';
<<<<<<< HEAD
import { TopNav } from '../TopNav';
=======
import { Toggle } from '../styleElements/controls/Toggle';

const useStyles = makeStyles((theme) => ({
	formControl: {
		minWidth: 100
	}
}));
>>>>>>> styled ProfileEdit Page, added Dropdown / npm install @material-ui/core

export function ProfileEdit() {
	const location = useLocation();

	const options = [
		'newb ( < 18)',
		'barely legal (18 - 21)',
		'generation z (22 - 30)',
		'midlife crisis (30 - 40)',
		'golden age (40 - 50)',
		'old yeller (50+)'
	];

	const classes = useStyles();
	const [ value, setValue ] = useState('');

	const handleChange = (e) => setValue(e.target.value);

	return (
		<div>
			<CirclesBackground />
			<TopNav />
			<div className='profile__edit-containter'>
				<div className='profile__edit-footer'>
					<Link to='/Profile'>
						<ChevronLeft size={24} active={location.pathname === '/Profile'} />
					</Link>
					<h1>Profile Settings </h1>
				</div>

				<div id='profile__edit-picture-container'>
					<div id='profile__edit-picture'>
						<Download />
					</div>
				</div>

				<div className='profile__edit-label-input'>
					<label> Edit username:</label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Age Range </label>
					<FormControl className={classes.formControl}>
						<InputLabel>Numbers</InputLabel>
						<Select onChange={handleChange}>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
							<MenuItem value={40}>Forty</MenuItem>
						</Select>
					</FormControl>

					<p>You Selected: {value}</p>
				</div>

				<div className='profile__edit-label-input'>
					<label> City: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Edit email: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Edit password: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Current filters: </label>
					<input type='text' />
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
						<p className='profile__p-text'>Show friends on profile page</p>
						<Toggle />
					</div>
				</div>
			</div>
		</div>
	);
}
