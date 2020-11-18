import React, { useState } from 'react';
import FindPeople from './FindPeople';
import { BottomNav } from "../BottomNav/BottomNav"
import FriendsList from './FriendsList'
import { Route } from 'react-router-dom';

export default function Friends(props) {
	console.log("props", props)
	const [otherID, setOtherID] = useState('')

	const handleID = (newID) => {
		console.log("something", newID)
		setOtherID(newID)

		// console.log("e in friends.js", e)
		props.onChange(newID)
		// setOtherID()
	}

	// const passToParents = (e) => {
	// 	console.log("e in passtoparents", e)
	// 	// props.onChange(e)
	// }
	// onChange = { e => passToParents(e) }
	return (
		<React.Fragment>
			<p> Friends</p>
			<FindPeople name={otherID} onChange={handleID} />



			<p> My friends</p>

			{/* <BottomNav /> */}
		</React.Fragment>

	)
}


//to do friends: Manage status friends 
// manage who is online and which ID is called
// Look for friends
