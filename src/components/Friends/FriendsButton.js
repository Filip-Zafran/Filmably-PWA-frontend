import React, { useEffect, useState } from 'react';
import Axios from 'axios'


export default function FriendsButton() {
    const [buttonText, setButtonText] = useState("something")
    const [errors, setError] = useState(false)
    var otherUserId = (window.location.pathname).slice(6)
    const serverUrl = process.env.REACT_APP_SERVER;

    useEffect(() => {
        //when component mount, it checks the status of friendship (not friend, friend request, friends)
        Axios({
            method: "GET",
            url: `${serverUrl}/Friends/getFriendsStatus/${otherUserId}`,
            withCredentials: true,
        })
            .then(data => {
                if (data && data.data.addFriend === true) {
                    console.log("made it to addFriend")
                    setButtonText("Send friend request")
                } else if (data && data.data.unfriend === true) {
                    setButtonText("Unfriend")
                } else if (data && data.data.acceptFriendReq === true) {
                    console.log("Iam in accept friends request")
                    setButtonText("Accept Friend Request")
                } else if (data && data.data.cancelFriendReq === true) {
                    setButtonText("Cancel Friend Request")
                } else {
                    setError(true)
                }
            })
    }, [])

    const handleClick = () => {
        //on click, will identify current status and update depending on the action
        if (buttonText === 'Send friend request') {
            Axios({
                method: "POST",
                url: `${serverUrl}/Friends/makeFriendRequest/${otherUserId}`,
                withCredentials: true,
            })
                .then(data => {
                    if (data.data.data === true) {
                        console.log("made it to accept friend")
                        setButtonText('Cancel Friend Request')
                    } else {
                        setError(true)
                    }
                })

        } else if (buttonText === 'Cancel Friend Request' || buttonText === "Unfriend") {
            Axios({
                method: "POST",
                url: `${serverUrl}/Friends/unfriend/${otherUserId}`,
                withCredentials: true,
            })
                .then(data => {
                    if (data.data.data === true) {
                        setButtonText('Send friend request')
                    } else {
                        setError(true)
                    }
                })
        } else if (buttonText === "Accept Friend Request") {
            Axios({
                method: "POST",
                url: `${serverUrl}/Friends/acceptFriendRequest/${otherUserId}`,
                withCredentials: true,
            })
                .then(data => {
                    if (data.data.accepted === true) {
                        setButtonText('Unfriend')
                    } else {
                        setError(true)
                    }
                })
        } else {
            setError(true)
        }
    }



    return (
        <React.Fragment>
            {errors && <div>There was an issue {errors} with your request, please try again!</div>}
            <button style={{ color: "red", fontSize: "16px", width: "200px", height: "200px" }} onClick={handleClick}>{buttonText}</button>
        </React.Fragment>
    )






}
