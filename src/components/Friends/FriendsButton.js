import React, { useEffect, useState } from 'react';
import Axios from 'axios'


export default function FriendsButton() {
    // console.log("otheruserIdtop", otherUserId)
    // console.log("e in FriendsButton", e)
    const [buttonText, setButtonText] = useState("something")
    const [errors, setError] = useState(false)
    var otherUserId = (window.location.pathname).slice(6)

    // const [id, setId] = useState('');
    // const [otherId, setOtherId] = useState('');
    // let otherUserId;
    //props should be replaced by otherUserId
    useEffect(() => {
        // if (otherUserId) {
        console.log("otheruserIdtuseEffect", otherUserId)

        Axios({
            method: "GET",
            url: `http://localhost:5000/Friends/getFriendsStatus/${otherUserId}`,
            withCredentials: true,
        })
            .then(data => {
                //define the orignal "state" of the message 
                console.log("data.data", data)

                if (data && data.data.addFriend === true) {
                    setButtonText("Send friend request")
                } else if (data && data.data.unfriend === true) {
                    setButtonText("Unfriend")
                } else if (data && data.data.acceptFriendReq === true) {
                    console.log("Iam in accept friends request")
                    setButtonText("Accept Friend Request")
                } else if (data && data.data.cancelFriendReq === true) {
                    setButtonText("Cancel Friend Request")
                } else {
                    // console.log("Iam the error")
                    setError(true)
                }
            })
        // }
    }, [])

    const handleClick = () => {
        //for this function, one route to backend will be created per button title
        if (buttonText === 'Send friend request') {
            // console.log("send friend request", otherUserId)
            Axios({
                method: "POST",
                url: `http://localhost:5000/Friends/makeFriendRequest/${otherUserId}`,
                withCredentials: true,
            })
                // .post(`/makeFriendRequest/${otherUserId}`)
                .then(data => {
                    console.log(data)

                    if (data.data.data === true) {
                        console.log("made it to accept friend")
                        setButtonText('Cancel Friend Request')
                    } else {
                        console.log("error in post")

                        setError(true)
                    }
                })

        } else if (buttonText === 'Cancel Friend Request' || buttonText === "Unfriend") {
            Axios({
                method: "POST",
                url: `http://localhost:5000/Friends/unfriend/${otherUserId}`,
                withCredentials: true,
            })
                // .post(`/unfriend/${otherUserId}`)
                .then(data => {
                    console.log("nop", data)

                    if (data.data.data === true) {
                        console.log("nop")
                        setButtonText('Send friend request')
                    } else {
                        console.log("error in post")

                        setError(true)
                    }
                })
        } else if (buttonText === "Accept Friend Request") {
            Axios({
                method: "POST",
                url: `http://localhost:5000/Friends/acceptFriendRequest/${otherUserId}`,
                withCredentials: true,
            })
                .post(`/acceptFriendRequest/${otherUserId}`)
                .then(data => {
                    if (data === true) {
                        setButtonText('Unfriend')
                    } else {
                        console.log("error in post2")

                        setError(true)

                    }
                })
        } else {
            console.log("error in post3")

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
