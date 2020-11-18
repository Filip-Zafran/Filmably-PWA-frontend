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
		'',
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
					<label> Edit username:</label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<FormControl className={classes.formControl} id='profile__edit-formcontrol'>
						<InputLabel id='profile__edit-inputlabel'>Age range</InputLabel>
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
