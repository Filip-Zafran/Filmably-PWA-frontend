import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
import axios from 'axios';
// import Profile from 'Profile'
import FriendButton from './FriendsButton'

export default function OtherProfile(props) {
    //this is a child component of the profile page
    console.log(props)
    console.log("I am a child components")
    const [profiles, setProfile] = useState()
    const [error, setError] = useState(false)
    const [url, setUrl] = useState()
    // const [id, setId] = useState();
    const [otherUserId, setOtherUserId] = useState()
    //

    useEffect(() => {
        // do an ajax request to 
        // const { id } = props.match.params;
        // console.log("id", window)
        // console.log(id)

        // axios
        //     .get(`/user/${id}.json`)
        //     .then((data) => {
        //         if (data.redirect) {
        //             //note sure about TypeOF data here
        //             setUrl(
        //                 url.history.push('/')
        //             )

        //         } else if (data) {
        //             //need here to get the data from the DB in order to display the information about the current user being visited
        //             setProfile({
        //                 first: data.first,
        //                 last: data.last,
        //                 url: data.url_profile,
        //                 currentUrl: data.url_profile,
        //                 id: data.id
        //             })

        //         } else {
        //             setError(true)
        //         }
        //     })
    })

    return (
        <React.Fragment>
            {error && <div>Woops, there was an error with laoding the content! Please try again</div>}
            {/* {profiles && profiles.map((profile) => {
                return (
                    <p key={profile.id}>{profile.name}</p>
                )

            })
            }
            {/* <FriendButton otherId={props.match.params.id} /> */}
            {/* <FriendButton otherUserId={props.match.params.id} />*/}
        </React.Fragment >
    )
}