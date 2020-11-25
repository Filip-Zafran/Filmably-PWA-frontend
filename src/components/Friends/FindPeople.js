import React, { useState, useEffect } from 'react';
import Friends from './Friends'
import Axios from 'axios';

export default function FindPeople() {
    const [errors, setError] = useState(false);
    const [people, setPeople] = useState()
    const [searchPeople, setSearchPeople] = useState()
    const [otherid, setOtherProfileID] = useState('')
    const serverUrl = process.env.REACT_APP_SERVER;
    const feUrl = process.env.REACT_APP_FE;
    //this GET route should gather the last three registered people 
    useEffect(() => {
        Axios({
            method: "GET",
            url: `${serverUrl}/profiles/users.json`,
            withCredentials: true,
        })
            .then((res) => {
                if (res.data) {
                    setPeople(res.data)
                } else {
                    setError(true)
                }
            });
    }, [])

    //when user looks for friend on an input field, should do a post request 
    useEffect(() => {
        if (searchPeople === undefined) return;
        let ignore = false;
        Axios({
            method: "GET",
            url: `${serverUrl}/profiles/FindPeople/${searchPeople || "d9r3"}`,
            withCredentials: true,
        })

            .then((res) => {
                console.log(res)
                // no match found btw the typed Char and the list of people
                if (res.length === 0) {
                    setPeople(people)
                } else if (!ignore && res.data) {
                    //if match found, should send name, pictures.... to DOM
                    setPeople(res.data)
                } else if (!res.data && !ignore) {
                    //if none of the previous conditions are met, it means there has been an issue somewhere
                    setError(true)
                }
            })
        return () => {
            ignore = true;
        };
    }, [searchPeople])


    const handleChange = e => {
        setSearchPeople(e.target.value)
    }

    const sendPropsParents = e => {
        setOtherProfileID(e.target.id)
    }



    return (
        <React.Fragment>
            <h2>Find friends!</h2>
            <input type='text' name='searchFriends' onChange={handleChange} />
            <button >Search</button>

            {people && people.map(person => {
                return (
                    <div key={person._id}  >
                        <a
                            href={`${feUrl}/user/${person._id}`} name={person._id} target="_blank" otheridtoparents={setOtherProfileID} onClick={sendPropsParents}
                        >
                            <p id={person._id} >{person.username}</p>
                        </a>
                    </div>
                )
            })}
            { errors && <div> Woops, there was an error loading your search, please try again!</div>}
            <Friends />
        </React.Fragment >
    )


}