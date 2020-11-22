import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
// import OtherProfile from './OtherProfile';

export default function FindPeople(props) {
    // console.log("props below unction", props)
    const [errors, setError] = useState(false);
    const [people, setPeople] = useState()
    const [searchPeople, setSearchPeople] = useState()
    // const [otherID, setOtherID] = useState('')

    // console.log('I am finding friends')
    // useEffect is there in order to make the request when component mount
    //this GET route should gather the last three registered people 
    useEffect(() => {
        // console.log('getpeople')
        Axios({
            // origin: "http://localhost:3000/Friends",
            method: "GET",
            url: "http://localhost:5000/authenticate/users.json",
            withCredentials: true,
        })
            .then((res) => {
                console.log("res in findpeople", res)
                if (res.data) {
                    setPeople(res.data)
                    // console.log(res.data)
                } else {
                    setError(true)
                }
            });
    }, [])

    //when user looks for friend on an input field, should do a post request 

    useEffect(() => {

        if (searchPeople === undefined) return;
        console.log("searcjpeople", searchPeople)
        let ignore = false;
        Axios({
            method: "GET",
            url: `http://localhost:5000/authenticate/FindPeople/${searchPeople || "d9r3"}`,
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
        // e.preventDefault()
        setSearchPeople(e.target.value)

    }

    const redirectPage = e => {
        // e.preventDefault()
        props.onChange(e.target.parentElement.name)
        // console.log(props)

    }

    return (
        <React.Fragment>
            <h2>Find friends!</h2>
            <input type='text' name='searchFriends' onChange={handleChange} />
            <button >Search</button>

            {people && people.map(person => {

                return (
                    <Link
                        to={"user/:" + person._id}
                        key={person._id}
                        name={person._id}
                        onClick={e => redirectPage(e)} >
                        <p name={person._id} >{person.username}</p>
                        <img href={person.href} />
                    </Link>
                )
            })}
            { errors && <div> Woops, there was an error loading your search, please try again!</div>}
        </React.Fragment >
    )


}