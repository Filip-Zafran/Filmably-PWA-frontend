import React, { useState } from 'react';
import FindPeople from './FindPeople';
// import { BottomNav } from "../BottomNav/BottomNav"
// import FriendsList from './FriendsList'
// import { Route } from 'react-router-dom';

export default function Friends(props) {
	console.log("props", props)
	const [otherID, setOtherID] = useState('')

	const handleID = (newID) => {
		console.log("props in newID", props)
		setOtherID(newID)
		// console.log("newID after", newID)
		if (newID) {
			console.log("props inside", props)
			props.onChange(newID)
		}
	}
	return (
		<React.Fragment>
			<p> Friends</p>
			{/* <FindPeople name={otherID} onChange={handleID} value={props} /> */}



			<p> My friends</p>

			{/* <BottomNav /> */}
		</React.Fragment>

	)
}


//to do friends: Manage status friends 
// manage who is online and which ID is called
// Look for friends
