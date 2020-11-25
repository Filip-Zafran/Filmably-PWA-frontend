import React, { useState, useEffect } from 'react';
import { fetchFriendsWannabes, fetchFriendsAccepted, fetchFriendsDeclined, fetchFriendsDeleted } from '../../Redux/friendsSlice'
import { useDispatch, useSelector } from "react-redux";

export default function Friends(status) {

	const [friendsWannabes, setFriendsWannabes] = useState();
	const [friendsAccepted, setFriendsAccepted] = useState();
	const [friendsDeclined, setFriendsDeclined] = useState();
	const [friendsDelete, setFriendsDelete] = useState();

	useEffect(() => {
		console.log("looking for the id",)
		// fetchFriendsWannabes
		setFriendsWannabes(fetchFriendsWannabes)
		console.log("fetchFriendsWannabes", fetchFriendsWannabes)
		return () => {
			console.log("FRIENDS LOADING")
		}
	}, [])


	return (
		<React.Fragment>
			<h3> Friends</h3>

		</React.Fragment>

	)
}



