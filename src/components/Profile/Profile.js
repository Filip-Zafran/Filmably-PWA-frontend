import React from 'react';
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css'
import OnClickTextEdit from './OnClickTextEdit';
import { BottomNav } from '../BottomNav';
import './Profile.css';
import Settings from '../styleElements/icons/Settings';
import uploadeIcon from './uploadIcon';
import { Star } from '../styleElements/icons';

export function Profile() {
	// const [ modal, setModal ] = useState(false);
	// const toggle = () => setModal(!modal);

	const options = [
		'newb ( < 18)',
		'barely legal (18 - 21)',
		'generation z (22 - 30)',
		'midlife crisis (30 - 40)',
		'golden age (40 - 50)',
		'old yeller (50+)'
	];
	const defaultOption = options[0];

	return (
		<div className='profile__container'>
			<div id='profile__settings'>
				<Settings />
			</div>

			<div profile__header-container>
				<img className='profile__profile-picture' src='https://shmector.com/_ph/4/270476539.png' alt='new' />
				<uploadeIcon />
			</div>
			<div className='profile__name-box'>
				<h2>Linda Bear</h2>
				<h3>
					26 matches <Star style={{ height: '5%' }} /> 103 likes{' '}
				</h3>
				<h4>“It’s only after we’ve lost everything that we’re free to do anything.”</h4>
			</div>

			<div className='profile__info-container'>
				<label> First Name:</label>
				<OnClickTextEdit />

				<label> Last Name:</label>
				<OnClickTextEdit />

				<label> Short Bio</label>
				<OnClickTextEdit />

				<label> e-mail:</label>
				<OnClickTextEdit />

				<label> Age Range: DROPDOWN </label>
				{/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder='Select your age range' /> */}
			</div>

			<div id='profile__likes-container'>
				<div className='profile__text-container'>
					<p>Likes</p>
					<p className='profile__show-all-text'>Show All ></p>
				</div>
				<div className='profile__likes-picture'>
					<img className='profile__likes-picture' src='https://shmector.com/_ph/4/270476539.png' alt='new' />
					<img className='profile__likes-picture' src='https://shmector.com/_ph/4/270476539.png' alt='new' />
					<img className='profile__likes-picture' src='https://shmector.com/_ph/4/270476539.png' alt='new' />
				</div>
			</div>

			<div id='profile__matches-container'>
				<div className='profile__text-container'>
					<p>Top Matches</p>
					<p className='profile__show-all-text'>Show All ></p>
				</div>
				<div className='profile__likes-picture'>
					<img className='profile__likes-picture' src='https://shmector.com/_ph/4/270476539.png' alt='new' />
					<img className='profile__likes-picture' src='https://shmector.com/_ph/4/270476539.png' alt='new' />
					<img className='profile__likes-picture' src='https://shmector.com/_ph/4/270476539.png' alt='new' />
				</div>
			</div>

			<div className='profile__footer'>
				<div className='profile__footer-text'>
					<h1>Friends </h1> <p>></p>
				</div>

				<hr className='profile__horizontal-line' />

				<div className='profile__footer-text'>
					<h1>Black List </h1> <p>></p>
				</div>
			</div>

			<BottomNav />
		</div>
	);
}
