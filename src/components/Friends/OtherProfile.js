import React, { useEffect, useState } from 'react';
// import { useParams } from "react-router-dom";
import Axios from 'axios';
// import Profile from 'Profile'
import FriendsButton from './FriendsButton.js'

export default function OtherProfile(props) {
    console.log("props.location", props)

    const [profiles, setProfile] = useState({})
    const [error, setError] = useState(false)
    // const [url, setUrl] = useState()
    // const [id, setId] = useState();
    // const [otherUserId, setOtherUserId] = useState()


    useEffect(() => {
        const id = props.name;

        Axios({
            method: "GET",
            url: `http://localhost:5000/authenticate/OtherProfile/${id}.json`,
            withCredentials: true
        })
            .then((res) => {
                console.log("res in other profile", res)
                if (res.data) {
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


    // const handleChange = e => {
    //     console.log("handle change", e)
    // }

    return (
        <React.Fragment>
            {error && <div>Woops, there was an error with laoding the content! Please try again</div>}
            <div>I AM A PROFILE</div>
            <p key={profiles.id} > {profiles.username}</p>
            <FriendsButton otherUserId={props.name} />
        </React.Fragment >
    )
}