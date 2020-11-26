import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TopNav } from '../TopNav';
import { ChevronRight } from '../styleElements/icons';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import { dummyData } from '../MatchPage/MatchCard/dummyData';
import { LogoActive } from '../styleElements/icons';
import Canvas from './CanvasTest';

export function LikedMovies() {
	const location = useLocation();

	const likedFilmsAll = [];
	for (let i = 0; i < 8; i++) {
		likedFilmsAll.push(dummyData[i]);
	}

	return (
		<div className='liked_movies__container'>
			<CirclesBackground />
			<Link to='/dashboard//Profile'>
				<TopNav backIcon active={location.pathname === '/dashboard//Profile'} />
			</Link>

			<div className='profile__edit-footer'>
				<h1> Liked Movies </h1>
			</div>

			<Canvas />

			<div className='liked_movies__all'>
				{likedFilmsAll.map((film) => (
					<Fragment>
						<img className='liked_movies__thumbnail' src={film.image} alt='movie thumbnail' />
						<div className='liked_movies__text-container'>
							<p>{film.title} </p>
							<div className='liked_movies__year-match'>
								{film.year}
								<span>
									<LogoActive size={13} />
									&nbsp;14 matches
								</span>
							</div>
						</div>
						<div className='liked_movies__circle'>
							<ChevronRight />
						</div>
					</Fragment>
				))}
			</div>
		</div>
	);
}
