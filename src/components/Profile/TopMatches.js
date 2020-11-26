import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from '../styleElements/icons';
import { ChevronRight } from '../styleElements/icons';
import { CirclesBackground } from '../styleElements/CirclesBackground';
import { dummyData } from '../MatchPage/MatchCard/dummyData';
import { LogoActive } from '../styleElements/icons';

export function TopMatches() {
	const location = useLocation();

	const likedFilmsAll = [];
	for (let i = 0; i < 4; i++) {
		likedFilmsAll.push(dummyData[i]);
	}

	return (
		<div className='liked_movies__container'>
			<CirclesBackground />

			<div className='profile__edit-footer'>
				<div className='profile__chevron-left'>
					<Link to='/dashboard/Profile'>
						<ChevronLeft size={30} active={location.pathname === '/dashboard/Profile'} />
					</Link>
				</div>
				<h1> Top Matches </h1>
			</div>

			<div className='liked_movies__all'>
				{likedFilmsAll.map((film) => (
					<Fragment>
						<img className='liked_movies__thumbnail' src={film.image} key={film.id} alt='movie thumbnail' />
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
