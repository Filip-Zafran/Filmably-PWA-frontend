import React, { useState, useEffect } from 'react';
import Axios from 'axios';


export default function FindPeople() {
    const [errors, setError] = useState(false);
    const [people, setPeople] = useState([])
    const [searchPeople, setSearchPeople] = useState()

    // console.log('I am finding friends')
    // useEffect is there in order to make the request when component mount
    //this GET route should gather the last three registered people 
    useEffect(() => {
        // console.log('getpeople')
        Axios({
            // origin: "http://localhost:3000/Friends",
            method: "GET",
            url: "http://localhost:5000/authenticate/Friends/users.json"
        })
            .then((res) => {
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
            url: `http://localhost:5000/authenticate/Friends/FindPeople/${searchPeople}`
        })

            // .get(`/findProfile/${searchPeople}`,)
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


    const handleChange = (e) => {
        e.preventDefault()
        setSearchPeople(e.target.value)
    }


    return (
        <React.Fragment>
            <h2>Find friends!</h2>
            <input type='text' name='searchFriends' onChange={handleChange} />
            <button >Search</button>
            {/* <h3>Latest register</h3> */}
            {people && people.map(person => {
                return (
                    <div key={person._id}>
                        <p name='personCard'  > {person.username}</p>
                        <img href={person.href} />
                    </div>
                )
            })}
            {/* <h3>Your search:</h3>
            {searchPeople && searchPeople.map(searchPerson => {
                return (
                    <div>
                        <p name='personCard' key={searchPerson.id} > {searchPerson.first} {searchPerson.last}</p>
                        <img href={searchPerson.href} />
                    </div>
                )
            })} */}
            {errors && <div> Woops, there was an error loading your search, please try again!</div>}

        </React.Fragment>
    )


}