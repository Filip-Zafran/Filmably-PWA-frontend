import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from '../styleElements/icons';
import { ChevronRight } from '../styleElements/icons';
import { CirclesBackground } from '../styleElements/CirclesBackground';

export function LikedMovies() {
	const location = useLocation();

	const likedMoviesArray = [
		<img
			className='profile__likes-picture'
			src='https://vignette.wikia.nocookie.net/marveldatabase/images/0/00/Deadpool_%28film%29_poster_009.jpg/revision/latest?cb=20160115014652'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://tse1.mm.bing.net/th?id=OIP.y20AfVtBWiqW7JGF6IVeLwHaLP&pid=Api'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://img.apmcdn.org/86805e8c22499c4214dd67d19b4987ec3a73eecd/uncropped/930f1a-20150612-pulp-fiction-soundtrack-album.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://fanart.tv/fanart/movies/19/movieposter/metropolis-5223509d084e8.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://tse1.mm.bing.net/th?id=OIP.y20AfVtBWiqW7JGF6IVeLwHaLP&pid=Api'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://img.apmcdn.org/86805e8c22499c4214dd67d19b4987ec3a73eecd/uncropped/930f1a-20150612-pulp-fiction-soundtrack-album.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://fanart.tv/fanart/movies/19/movieposter/metropolis-5223509d084e8.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://fanart.tv/fanart/movies/13/movieposter/forrest-gump-52196a490f738.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://tse1.mm.bing.net/th?id=OIP.y20AfVtBWiqW7JGF6IVeLwHaLP&pid=Api'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://img.apmcdn.org/86805e8c22499c4214dd67d19b4987ec3a73eecd/uncropped/930f1a-20150612-pulp-fiction-soundtrack-album.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://fanart.tv/fanart/movies/19/movieposter/metropolis-5223509d084e8.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://tse1.mm.bing.net/th?id=OIP.y20AfVtBWiqW7JGF6IVeLwHaLP&pid=Api'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://upload.wikimedia.org/wikipedia/en/0/04/X-Men_-_Apocalypse.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://tse1.mm.bing.net/th?id=OIP.y20AfVtBWiqW7JGF6IVeLwHaLP&pid=Api'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://img.apmcdn.org/86805e8c22499c4214dd67d19b4987ec3a73eecd/uncropped/930f1a-20150612-pulp-fiction-soundtrack-album.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://fanart.tv/fanart/movies/19/movieposter/metropolis-5223509d084e8.jpg'
			alt='new'
		/>,
		<img
			className='profile__likes-picture'
			src='https://tse1.mm.bing.net/th?id=OIP.y20AfVtBWiqW7JGF6IVeLwHaLP&pid=Api'
			alt='new'
		/>
	];

	const movieNames = [
		'DeadPool',
		'Black Panther',
		'Pulp Fiction',
		'Metropolis',
		'Forrest Gump',
		'Three Billboards',
		'Star Trek',
		'The Shawshank Redemption '
	];

	const movieYear = [ 1983, 1963, 1993, 2001, 2013, 1983, 1963, 1993, 2001, 2013, 1983, 1963, 1993, 2001, 2013 ];

	const numberOfMatches = [ 1, 2, 55, 6, 789, 2, 432, 5, 66, 666, 6666, 235, 32, 43, 11 ];

	return (
		<div>
			<CirclesBackground />

			<div id='profile__liked-movies-container'>
				<div className='profile__edit-containter'>
					<div className='profile__edit-footer'>
						<div id='profile__chevron-left'>
							<Link to='/Profile'>
								<ChevronLeft size={30} active={location.pathname === '/Profile'} />
							</Link>
						</div>
						<h1> Liked Movies </h1>
					</div>
				</div>

				<div className='profile__movies-list'>
					{/* PICTURE CONTAINER */}
					<div>
						{likedMoviesArray.map((likedMovie) => (
							<div className='profile__listed-movie-container'>
								<div className='profile__listed-movie' key={likedMovie}>
									{likedMovie}
								</div>
							</div>
						))}
					</div>

					<div id='biggest'>
						{/* NAME YEAR MATCH CONTAINER */}
						<div>
							{/* NAME  CONTAINER */}
							{movieNames.map((movieName) => (
								<div className='profile__listed-movie-name'>
									{movieName}
									<br />
									<span> 1998 </span> <span> 5 matches</span>
									<ChevronRight id='profile__likes-chevron-right' />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
