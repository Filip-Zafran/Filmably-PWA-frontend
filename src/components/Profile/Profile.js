import React from 'react';
import './Profile.css';
import { Settings } from '../styleElements/icons/Settings';
// import uploadeIcon from './uploadIcon';
import { Star } from '../styleElements/icons';
import { LogoActive } from '../styleElements/icons';
import { Link, useLocation } from 'react-router-dom';

export function Profile() {
	// const options = [
	// 	'newb ( < 18)',
	// 	'barely legal (18 - 21)',
	// 	'generation z (22 - 30)',
	// 	'midlife crisis (30 - 40)',
	// 	'golden age (40 - 50)',
	// 	'old yeller (50+)'
	// ];

	const location = useLocation();

	return (
		<div className='profile__container'>
			<div id='profile__settings'>
				<Link to='/ProfileEdit'>
					<Settings active={location.pathname === '/ProfileEdit'} />
					{/* <p className={location.pathname === '/ProfileEdit'} /> */}
				</Link>
			</div>

			<div profile__header-container>
				<img
					className='profile__profile-picture'
					src='https://boroondaraosteopathy.com.au/wp-content/uploads/2018/05/20180313_120911-2-1024x1024.jpg'
					alt='new'
				/>
				{/* <uploadIcon /> */}
			</div>
			<div className='profile__name-box'>
				<h2>Linda Bear</h2>
				<h3>
					<LogoActive />
					26 matches{' '}
					<span>
						<Star width={20} height={20} />
					</span>
					103 likes{' '}
				</h3>
				<h4>“It’s only after we’ve lost everything that we’re free to do anything.”</h4>
			</div>

			<div id='profile__likes-container'>
				<div className='profile__text-container'>
					<p>Likes</p>
					<p>Show All </p>
				</div>

				<div className='profile__likes-container'>
					<img
						className='profile__likes-picture'
						src='https://img.apmcdn.org/86805e8c22499c4214dd67d19b4987ec3a73eecd/uncropped/930f1a-20150612-pulp-fiction-soundtrack-album.jpg'
						alt='new'
					/>
					<img
						className='profile__likes-picture'
						src='https://fanart.tv/fanart/movies/19/movieposter/metropolis-5223509d084e8.jpg'
						alt='new'
					/>
					<img
						className='profile__likes-picture'
						src='https://fanart.tv/fanart/movies/13/movieposter/forrest-gump-52196a490f738.jpg'
						alt='new'
					/>
				</div>
			</div>

			<div id='profile__matches-container'>
				<div className='profile__text-container'>
					<p>Top Matches</p>
					<p>Show All </p>
				</div>
				<div className='profile__likes-container'>
					<img
						className='profile__likes-picture'
						src='https://vignette.wikia.nocookie.net/marveldatabase/images/0/00/Deadpool_%28film%29_poster_009.jpg/revision/latest?cb=20160115014652'
						alt='new'
					/>
					<img
						className='profile__likes-picture'
						src='https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg'
						alt='new'
					/>
					<img
						className='profile__likes-picture'
						src='https://tse1.mm.bing.net/th?id=OIP.y20AfVtBWiqW7JGF6IVeLwHaLP&pid=Api'
						alt='new'
					/>
				</div>
			</div>

			<div className='profile__footer'>
				<div className='profile__footer-text'>
					<h1>Friends </h1> <p></p>
				</div>

				<hr className='profile__horizontal-line' />

				<div className='profile__footer-text'>
					<h1>My Black List </h1> <p></p>
				</div>
			</div>
		</div>
	);
}
