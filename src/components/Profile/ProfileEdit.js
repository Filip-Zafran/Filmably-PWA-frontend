import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export function ProfileEdit() {

  const location = useLocation();
    
    return (
          
        <>
            
            	
                    
			<br />
			<br /> <br />
			<h1>EDIT PROFILE </h1>
			<br />
        
			     	<label> Update Prof-Pic  </label>
			<input type="text" />
			<br />
			<br />
			<label> Change nick/user name</label>
			<input type="text"  />
			<br />
			<br />
			<label> Age Range </label>
		<h1>DROPDOWN MENI GOZ HIR</h1>
			<br />
			<br />
			         	<label> City: </label>
			<input type="text" />
			<br />
			<br />
						         	<label> Change email: ?? </label>
			<input type="text" />
			<br />
            <br />
    
                 	<label> Current filters: </label>
			<input type="text" />
			<br />
            <br />
       

			<Link to='/Profile'>
					<button active={location.pathname === '/Profile'}>SAVE</button>
								</Link>
   
            </>
    )
}