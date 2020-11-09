import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FindPeople() {
    const [errors, setError] = useState(false);
    const [people, setPeople] = useState([])
    const [searchPeople, setSearchPeople] = useState()

    console.log('I am finding friends')
    // useEffect is there in order to make the request when component mount
    //this GET route should gather the last three registered people 
    useEffect(() => {
        console.log('getpeople')
        axios
            .get('/users.json')
            .then((data) => {
                if (data) {
                    console.log("people", people)
                    setPeople(data.people)
                    //should render the data (three last people registered) in the retur statement on mount 
                    //should be an array

                } else {
                    setError(true)
                }
            })
    }, [])

    //when user looks for friend on an input field, should do a post request 

    useEffect(() => {
        if (searchPeople === undefined) return;
        let ignore = false;
        console.log('search')
        // console.log('values', values.searchFriends)
        axios
            .get(`/findProfile/${searchPeople}`,)
            .then((data) => {
                // no match found btw the typed Char and the list of people
                if (data.length === 0) {
                    setPeople(people)
                } else if (!ignore && data.data) {
                    //if match found, should send name, pictures.... to DOM
                    setPeople(data.data)
                } else if (!data.data && !ignore) {
                    //if none of the previous conditions are met, it means there has been an issue somewhere
                    setError(true)
                }
            })
        return () => {
            ignore = true;
        };
    }, [searchPeople])


    const handleChange = (e) => {
        setSearchPeople(e.target.value)
    }


    return (
        <React.Fragment>
            <h2>Find friends!</h2>
            <input type='text' name='searchFriends' onChange={handleChange} />
            <button onClick={setSearchPeople}>Search</button>
            {people && people.map(person => {
                return (
                    <div>
                        <p name='personCard' key={person.id} > {person.first} {person.last}</p>
                        <img href={person.href} />
                    </div>
                )
            })}
            {/* {searchPeople && searchPeople.map(searchPerson => {
                return (
                    <div>
                        <p name='personCard' key={searchPerson.id} > {searchPerson.first} {searchPerson.last}</p>
                        <img href={searchPerson.href} />
                    </div>
                )
            })} */}
            {errors && <div> Woopw, there was an error loading your search, please try again!</div>}

            <div ></div>
        </React.Fragment>
    )


}