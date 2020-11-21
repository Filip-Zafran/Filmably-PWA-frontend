import React from 'react';
import './Profile.css';
import { Settings } from '../styleElements/icons/Settings';
import { Link, useLocation } from 'react-router-dom';
import { Star } from '../styleElements/icons';
import { LogoActive } from '../styleElements/icons';
import { ChevronRight } from '../styleElements/icons';
import { dummyData } from '../MatchPage/MatchCard/dummyData';

export function Profile(size) {
	const location = useLocation();

	const likedFilms = [];
	for (let i = 0; i < 3; i++) {
		likedFilms.push(dummyData[i]);
	}

	return (
		<div className='profile__container'>
			<div id='profile__settings'>
				<Link to='/ProfileEdit'>
					<Settings active={location.pathname === '/ProfileEdit'} />
				</Link>
			</div>

			<div profile__header-container>
				<img
					className='profile__profile-picture'
					src='https://boroondaraosteopathy.com.au/wp-content/uploads/2018/05/20180313_120911-2-1024x1024.jpg'
					alt='new'
				/>
			</div>
			<div className='profile__name-box'>
				<h2>Linda Bear</h2>
				<h3>
					<LogoActive size={13} />
					&nbsp;26 matches &nbsp; &nbsp;
					<Star size={13} />
					&nbsp;103 likes
				</h3>

				<div className='profile__span-container'>
					<span> “Midlife Crisis”</span>
					<span> Berlin </span>
				</div>
				<div className='profile__span-container-big'>
					<h4> Current filter:</h4>
					<div className='profile__span-container'>
						<span style={{ background: 'rgba(200, 0, 255, 0.2)' }}>1970s</span>
						<span style={{ background: 'rgba(0, 0, 255, 0.2)' }}>1980s</span>
						<span style={{ background: 'rgba(5, 111, 255, 0.2)' }}>Art</span>
						<span style={{ background: 'rgba(30, 20, 355, 0.2)' }}>Indy</span>
						<span style={{ background: 'rgba(20, 330, 0, 0.2)' }}>Si-Fi</span>
						<span style={{ background: 'rgba(50, 500, 0, 0.2)' }}>Western</span>
					</div>
				</div>
			</div>

			<div id='profile__likes-container'>
				<div className='profile__text-container'>
					<p>Likes</p>
					<p className='profile__show-all'>Show All </p>

					<Link to='/LikedMovies'>
						<ChevronRight size={15} active={location.pathname === '/LikedMovies'} />
					</Link>
				</div>

				<div className='profile__likes-container'>
					{likedFilms.map((film) => (
						<img className='profile__likes-picture' src={film.image} alt='movie thumbnail' />
					))}
				</div>
			</div>

			<div id='profile__matches-container'>
				<div className='profile__text-container'>
					<p>Top Matches</p>
					<p className='profile__show-all'>Show All </p>
					<Link to='/TopMatches'>
						<ChevronRight size={15} active={location.pathname === '/TopMatches'} />
					</Link>
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
				<Link to='/Friends'>
					<div active={location.pathname === '/Friends'} className='profile__footer-text'>
						<h1>Friends </h1> <ChevronRight />
					</div>
				</Link>

				<hr className='profile__horizontal-line' />

				<div className='profile__footer-text'>
					<h1>My Black List </h1> <ChevronRight />
				</div>
			</div>
		</div>
	);
}
