import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from '../styleElements/icons';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import { TopNav } from '../TopNav';

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

	return (
		<div>
			<CirclesBackground />
			<TopNav />
			<div className='profile__edit-containter'>
				<div className='profile__edit-footer'>
					<ChevronLeft size={24} /> <h1>Profile Settings </h1>
				</div>

				<div id='profile__edit-picture'>
					<label> Update Prof-Pic </label>
				</div>

				<div className='profile__edit-label-input'>
					<label> Change username</label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Age Range </label>
					<h1> - DROPDOWN - </h1>
				</div>

				<div className='profile__edit-label-input'>
					<label> City: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Change email: </label>
					<input type='text' />
				</div>

				<div className='profile__edit-label-input'>
					<label> Change password: </label>
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
					<p className='profile__p-text'>Show likes on profile page</p>
					<p className='profile__p-text'>Show friends on profile page</p>
				</div>
			</div>
		</div>
	);
}
