import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
import Axios from 'axios';
// import Profile from 'Profile'
import FriendButton from './FriendsButton'

export default function OtherProfile(props) {
    //this is a child component of the profile page
    console.log("props.location", props)
    console.log("I am a child components")
    const [profiles, setProfile] = useState({})
    const [error, setError] = useState(false)
    const [url, setUrl] = useState()
    // const [id, setId] = useState();
    const [otherUserId, setOtherUserId] = useState()
    //

    useEffect(() => {
        const id = props.name;

        Axios({
            method: "GET",
            url: `http://localhost:5000/authenticate/OtherProfile/${id}.json`
        })
            .then((res) => {
                if (res.data) {
                    // console.log(res)

                    setProfile({
                        username: res.data.username,
                        //     // last: data.last,
                        //     // url: data.url_profile,
                        //     // currentUrl: data.url_profile,
                        id: res.data._id
                    })

                } else {
                    setError(true)
                }
            })
    }, [])

    return (
        <React.Fragment>
            {error && <div>Woops, there was an error with laoding the content! Please try again</div>}
            <div>I AM A PROFILE</div>

            <p key={profiles.id} > {profiles.username}</p>


            {/* <FriendButton otherId={props.match.params.id} /> */}
            {/* <FriendButton otherUserId={props.match.params.id} />*/}
        </React.Fragment >
    )
}