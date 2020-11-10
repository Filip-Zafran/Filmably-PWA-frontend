import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from 'Profile'


export default function OtherProfile() {
    //this is a child component of the profile page
    console.log("I am a child components")
    const [profiles, setProfile] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        // do an ajax request to 
        axios
            .get('/user/:id')
            .then((data) => {
                if (data) {

                    //need here to get the data from the DB in order to display the information about the current user being visited
                } else {
                    setError(true)
                }
            })
    })

    return (
        <React.Fragment>
            {error && <div>Woops, there was an error with laoding the content! Please try again</div>}
            {profiles && profiles.map((profile) => {
                return (
                    <p key={profile.id}>{profile.name}</p>
                )

            })
            }

        </React.Fragment >
    )
}