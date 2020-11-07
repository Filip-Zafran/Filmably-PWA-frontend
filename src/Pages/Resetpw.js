import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import { Link } from 'react-router-dom'


export default function Resetpw(e) {

    //bugs on the 2Nd display about the prefilled input
    // bug on the third display no showing up

    const [values, setValue] = useState('');
    const [step, setSteps] = useState(0)
    const [code, setCode] = useState('');
    const [error, setError] = useState();


    const submitEmail = (e) => {
        // console.log("e.target.value", e.target.value)
        setSteps({
            step: 1
        })

        //    console.log(values)`
        // axios
        //     .post('/password/reset/start"', {
        //         email: values.email
        //     })
        //     .then(({ data }) => {
        //         if (data.success) {
        //             // setSteps({
        //             //     step: 1
        //             // })
        //             // need to send email to the recovery email (ses with amazon)
        //             // need to compare if the code that is entereed from the email is matching the one currently set up in the db => meaning that the db needs to be updated with the new code 
        //         } else {
        // setError(true)
        //         }
        //     })


    }

    const submitCode = (e) => {
        //             //need to make another form visible that requests to write the code they received and to add a new code and hide the



        // axios
        //.post('/password/reset/verify', {
        //     email: values.email,
        //     code: values.code,
        //     newCode: values.newcode
        // })
        // .then(({ data }) => {
        // if (data.success) {
        setSteps({
            step: 2
        })
        // } else {
        // setError(true)
        // }

        // })
    }



    // return [step, setSteps()]

    // }

    const handleChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })
        // return [values, setValue()]
    }



    const getCurrentDisplay = () => {
        if (step == 0) {
            return (
                <React.Fragment >
                    {/* Maybe a key should be declared but is causes an issue into making the data email travel up to submitEmail() */}
                    {error && <div>Woops, there was an issue with the email!</div>}
                    <input id="mail" input='true' type='email' name='email' placeholder='Please enter your email' onInput={e => setValue(e.target.value)} onChange={handleChange} />
                    <button onClick={submitEmail}> Next </button >
                </React.Fragment>
            )
        } else if (Object.values(step)[0] == 1) {

            return (
                <React.Fragment>
                    {error && <div>Woops, there was an issue with code/ password!</div>}
                    <input key="secret-code" type='password' name='code' placeholder='Please enter the code you received' onInput={e => setValue(e.target.value)} onChange={handleChange} />
                    <input key="newpassword" type='password' name='newcode' placeholder='Please enter your new PW' onInput={e => setValue(e.target.value)} onChange={handleChange} />
                    <button onClick={submitCode}> Next </button >
                </React.Fragment>
            )
        } else if (Object.values(step)[0] == 2) {

            return (

                <React.Fragment>
                    <p>Successfully updated</p>
                    <Link to='/login'>Login</Link>
                </React.Fragment >
            )
        }
    }

    return (
        <React.Fragment >
            {getCurrentDisplay()}
        </React.Fragment>
    )

}

