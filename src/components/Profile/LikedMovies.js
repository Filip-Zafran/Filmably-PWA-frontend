import React from 'react';
import { Link, useLocation } from 'react-router-dom';


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
                    />,
    ] 
    
    return (
                  <>
                     
			<p className="profile__header-text">MY MOVIES</p>

            <ol className='profile__movies-list'>

             {likedMoviesArray.map(likedMovie => (
                <li className="profile__listed-movie" key={likedMovie}>{likedMovie}</li>
             ))}
                
            </ol>
    

			<Link to='/Profile'>
					<button className="profile__back-bttn" active={location.pathname === '/Profile'}>BACK</button>
								</Link>
   
            </>
    )
}