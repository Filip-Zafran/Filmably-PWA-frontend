import React from 'react';
import FindPeople from './FindPeople';
import { BottomNav } from "../BottomNav/BottomNav"
import FriendsList from './FriendsList'

export default function Friends() {


	return (
		<React.Fragment>
			<p> Friends</p>
			<FindPeople />



			<p>My friends</p>

			<BottomNav />
		</React.Fragment>

	)
}


//to do friends: Manage status friends 
// manage who is online and which ID is called
// Look for friends
