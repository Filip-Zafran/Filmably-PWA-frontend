import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import { Link } from 'react-router-dom'


export default function Resetpw(e) {

    console.log('Iam a resetpw bitch')

    //bugs on the 2Nd display about the prefilled input
    // bug on the third display no showing up

    const [values, setValue] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState();
    const [step, setSteps] = useState(0)

    const submitEmail = () => {

        setSteps({
            step: 1
        })
        //    `     console.log("step", step)
        //         //console.log('values.email', values.email)

        //         console.log(values)`
        // axios
        //     .post('/verifyemail', {
        //         email: values.email
        //     })
        //     .then(({ data }) => {
        //         if (data.success) {
        //             // setSteps({
        //             //     step: 1
        //             // })
        //             //need to make another form visible that requests to write the code they received and to add a new code and hide the
        //             // need to send email to the recovery email (ses with amazon)
        //             // need to compare if the code that is entereed from the email is matching the one currently set up in the db => meaning that the db needs to be updated with the new code 
        //         } else {
        //             setError(true)
        //         }
        //     })

        // return [error, submitEmail()]
        setValue({
            values: ''
        })
    }

    const submitCode = (e) => {
        // console.log(e.target.value)
        console.log("something")
        setSteps({
            step: 2
        })

        return []

    }

    const handleChange = (e) => {
        // console.log("value", e.target.value)
        // console.log("name", e.target.name)
        setValue({
            ...values,
            [e.target.name]: e.target.value
        })


        return [values, setValue()]
    }


    // const handleCodeChange = (e) => {
    //     e.preventDefault()
    //     setCode({
    //         ...code,
    //         [e.target.name]: e.target.value
    //     })
    // }



    const getCurrentDisplay = () => {
        console.log("step in ftecurrentdisplay", step)
        if (step == 0) {
            return (
                <React.Fragment >
                    <form>
                        <input id="mail" input key="email" type='email' name='email' placeholder='Please enter your email' onInput={e => setValue(e.target.value)} onChange={handleChange} />
                        <button onClick={submitEmail}> Next </button >
                    </form>
                </React.Fragment>
            )
        } else if ({ step: 1 }) {
            return (
                <React.Fragment>
                    <form>
                        <input id="code" key="secret-code" type='password' name='code' placeholder='Please enter the code you received' onInput={e => setValue(e.target.value)} onChange={handleChange} />
                        <input type='password' name='Newcode' placeholder='Please enter your new PW' onInput={e => setValue(e.target.value)} onChange={handleChange} />
                        <button onClick={submitCode}> Next </button >
                    </form>
                </React.Fragment>
            )
        } else if ({ step: 2 }) {
            <React.Fragment>
                <p>Successfully updated</p>
                <Link to='/login'>Login</Link>
            </React.Fragment>
        }
    }

    return (
        <React.Fragment >
            {getCurrentDisplay()}
        </React.Fragment>
    )

}

