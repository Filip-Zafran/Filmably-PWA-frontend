import React, { useState, useEffect } from 'react';
import { fetchFriendsWannabes, fetchFriendsAccepted, fetchFriendsDeclined, fetchFriendsDeleted, stateWannabes } from '../../Redux/friendsSlice'
import { useDispatch, useSelector } from "react-redux";
// import {}

export default function Friends() {

	const dispatch = useDispatch();
	const friendsAccepted = useSelector(
		state => state.friends.friendsWannabes && state.friends.friendsWannabes.filter(
			friendsWannabe => friendsWannabe.accepted == true

		))

	const friendsPending = useSelector(
		state => state.friends.friendsWannabes && state.friends.friendsWannabes.filter(
			friendsWannabe => friendsWannabe.accepted == false
		)
	)
	// console.log("state", (state => state.friendsWannabes && state.friendsWannabes.filter(
	// 	friendsWannabe => friendsWannabe.accepted == true)))
	// );

	// console.log("stateWannabes ", stateWannabes)
	// console.log("fetchFriendsWannabes", fetchFriendsWannabes)
	// )

	console.log("friendsaccepted", friendsAccepted)

	// const [friendsWannabes, setFriendsWannabes] = useState();
	// const [friendsAccepted, setFriendsAccepted] = useState();
	// const [friendsDeclined, setFriendsDeclined] = useState();
	// const [friendsDelete, setFriendsDelete] = useState();



	useEffect(() => {
		dispatch(fetchFriendsWannabes())
	}, [])


	return (
		<React.Fragment>
			<h3> Friends</h3>
			<h1>I am your friends BICHE</h1>
			{friendsAccepted && friendsAccepted.map(friend => {
				return (
					<h2> ID {friend.receiverUserId} </h2>
				)
			})}
			<h1>I am your pending Friends BICHE</h1>
			{friendsPending && friendsPending.map(friend => {
				return (
					<h1> ID{friend.receiverUserId}</h1>
				)
			})}
		</React.Fragment>

	)
}



