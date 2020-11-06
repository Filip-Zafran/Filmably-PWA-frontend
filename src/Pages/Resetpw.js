import React, { useState } from 'react';
import axios from 'axios';


export default function Resetpw() {

    console.log("Iam a resetpw bitch")

    const [values, setValue] = useState({})
    const [error, setError] = useState()

    const submitPW = () => {
        axios.Post("/verifyemail", {
            email: values.email
        })

        return [error, submitPW()]
    }



    const handleChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })

        return [values, setValue()]
    }


    return (

        <React.Fragment>
            {error && <div> Woops something went wrong! </div>}
            <input name="email" placeholder="Please enter your email" onInput={e => setValue(e)} onChange={handleChange} />
        </React.Fragment >

    )

}

