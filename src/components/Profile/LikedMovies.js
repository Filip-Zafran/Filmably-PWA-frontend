import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from '../styleElements/icons';
import { ChevronRight } from '../styleElements/icons';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import { dummyData } from '../MatchPage/MatchCard/dummyData';

export function LikedMovies() {
	const location = useLocation();

	const likedFilmsAll = [];
	for (let i = 0; i < 8; i++) {
		likedFilmsAll.push(dummyData[i]);
	}

	return (
		<div className='liked_movies__container'>
			<CirclesBackground />

			<div className='profile__edit-footer'>
				<div id='profile__chevron-left'>
					<Link to='/Profile'>
						<ChevronLeft size={30} active={location.pathname === '/Profile'} />
					</Link>
				</div>
				<h1> Liked Movies </h1>
			</div>

			<div className='liked_movies__all'>
				{likedFilmsAll.map((film) => (
					<Fragment>
						<img className='liked_movies__thumbnail' src={film.image} alt='movie thumbnail' />
						<div className='liked_movies__text-container'>
							<p>{film.title} </p>
							<div className='liked_movies__year-match'>
								{film.year} <span>14 matches</span>
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
