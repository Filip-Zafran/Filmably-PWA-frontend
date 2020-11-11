import React, { useEffect, useState } from 'react';
import axios from 'axios'


export default function FriendsButton({ otherUserId }) {

    const [buttonText, setButtonText] = useState("Send friend request")
    const [errors, setError] = useState(false)
    // const [id, setId] = useState('');
    // const [otherId, setOtherId] = useState('');

    //props should be replaced by otherUserId
    useEffect(() => {
        console.log("mounted ")
        axios
            .get(`/getFriendsStatus/${otherUserId}`)


            //check in the backend the current status of the friend request.
            // Is there an existing friend request between a given pair of users ?

            //     If there is a request, has it been accepted ?

            //         If there is a request and it has not been accepted, who is the sender and who is the receiver ?
            //     A simple way to accomplish this would be to create a table for friend requests that has columns for the id of the sender, the id of the recipient, and a boolean indicating whether or not the request has been accepted.When one user sends another a friend request, a row would be inserted with the ids of the sender and receiver in the appropriate columns and the boolean set to false.When a user accepts a friend request, the appropriate row would be updated to set the boolean to true.When a user unfriends or cancels a pending request, the row for the request can be deleted(deleting these rows means that we will lose potentially valuable historical information, but that is probably acceptable for our purposes).


            .then(data => {
                //define the orignal "state" of the message 
                if (data && data.addFriend === true) {
                    setButtonText("Send friend request")
                } else if (data && data.unfriend === true) {
                    setButtonText("Unfriend")
                } else if (data && data.acceptFriend === true) {
                    setButtonText("Accept Friend Request")
                } else if (data && data.cancelFrequest === true) {
                    setButtonText("Cancel Friend Request")
                } else {
                    setError(true)
                }
            })
    }, [])

    const handleClicke = () => {
        //for this function, one route to backend will be created per button title
        if (buttonText == 'Send friend request') {
            axios
                .post(`/makeFriendRequest/${otherUserId}`)
                .then(data => {
                    if (data == true) {
                        setButtonText('Cancel Friend Request')
                    } else {
                        setError(true)
                    }
                })

        } else if (buttonText == 'Cancel Friend Request' || buttonText == "Unfriend") {
            axios
                .post(`/unfriend/${otherUserId}`)
                .then(data => {
                    if (data == true) {
                        setButtonText('Send friend request')
                    } else {
                        setError(true)
                    }
                })
        } else if (buttonText == "Accept Friend Request") {
            axios
                .post(`/acceptFriendRequest/${otherUserId}`)
                .then(data => {
                    if (data == true) {
                        setButtonText('Unfriend')
                    } else {
                        setError(true)
                    }
                })
        } else {
            setError(true)
        }
    }







    //props hsould have the ID of the profile that being visited


    //if no pending request or sent request, not friend => add friends

    // if there is a friendship => remove friend
    //if request is pending, should offer to accept or declined friends request for the user that receive it and should allow to cancel friend request for the user sending it 



    //DB
    // Is there an existing friend request between a given pair of users ?

    //     If there is a request, has it been accepted ?

    //         If there is a request and it has not been accepted, who is the sender and who is the receiver ?
    //     A simple way to accomplish this would be to create a table for friend requests that has columns for the id of the sender, the id of the recipient, and a boolean indicating whether or not the request has been accepted.When one user sends another a friend request, a row would be inserted with the ids of the sender and receiver in the appropriate columns and the boolean set to false.When a user accepts a friend request, the appropriate row would be updated to set the boolean to true.When a user unfriends or cancels a pending request, the row for the request can be deleted(deleting these rows means that we will lose potentially valuable historical information, but that is probably acceptable for our purposes).




    return (
        <React.Fragment>
            {errors && <div>There was an issue with your request, please try again!</div>}
            <button style={{ color: "red", fontSize: "16px", width: "200px", height: "200px" }} onClick={handleClicke}>{buttonText}</button>
        </React.Fragment>
    )






}
