import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function FindPeople() {
    // [users, setUsers] = useState('')
    const [errors, setError] = useState();
    const [values, setValue] = useState('');
    const [people, setPeople] = useState(false)
    // const [searchPeople, setSearchPeople] = useState()

    console.log('I am finding friends')
    // useEffect is there in order to make the request when component mount
    //this GET route should gather the last three registered people 
    useEffect(() => {
        console.log('getpeople')
        axios
            .get('/users')
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
    }, [people])

    //when user looks for friend on an input field, should do a post request 
    const searchPeople = () => {
        console.log('search')
        console.log('values', values.searchFriends)
        axios
            .get('/searchPeople', {
                searchLetter: values.searchFriends
            })
            .then((data) => {
                if (data) {
                    setPeople(data.people)
                    //need to display the result of the search
                }
                else {
                    setError(true)
                }
            })
    }


    const handleChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    return (
        <React.Fragment>
            <h2>Find friends!</h2>
            <input type='text' name='searchFriends' onInput={e => setValue(e)} onChange={handleChange} />
            <button onClick={searchPeople}>Search</button>
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