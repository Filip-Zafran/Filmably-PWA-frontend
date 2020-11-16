import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BottomNav from '../BottomNav'

export function ProfileEdit() {

  const location = useLocation();
    
    return (
          
        <>
            
            	<Link to='/Profile'>
					<button active={location.pathname === '/Profile'}>SAVE</button>
								</Link>
                    
			<br />
			<br /> <br /> <br />
            <h1> name profile</h1> 
			<br />
			     	<label> Choose avatar UPLOADER  </label>
			<input type="text" />
			<br />
			<br />
			<label> Change nick name</label>
			<input type="text"  />
			<br />
			<br />
			<label> Age  </label>
			<input type="text" />
			<br />
            <br />
            	<label> Fav movie  </label>
			<input type="text" />
			<br />
            <br />
            	<label> Fav movie quote  </label>
			<input type="text" />
			<br />
            <br />
                 	<label> Current filters: </label>
			<input type="text" />
			<br />
            <br />
       

			<button> SAVE </button>
			
			<br />
			<br />
    
			<BottomNav />
   
            </>
    )
}