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
							<span style={{ background: 'rgba(200, 0, 255, 0.2)' }}>1970s</span>
							<span style={{ background: 'rgba(0, 0, 255, 0.2)' }}>1980s</span>
							<span style={{ background: 'rgba(5, 111, 255, 0.2)' }}>Art</span>
							<span style={{ background: 'rgba(30, 20, 355, 0.2)' }}>Indy</span>
							<span style={{ background: 'rgba(20, 330, 0, 0.2)' }}>Si-Fi</span>
							<span style={{ background: 'rgba(50, 500, 0, 0.2)' }}>Western</span>
							<span style={{ background: 'rgba(20, 330, 0, 0.2)' }}>Si-Fi</span>
							<span style={{ background: 'rgba(50, 500, 0, 0.2)' }}>Western</span>
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
