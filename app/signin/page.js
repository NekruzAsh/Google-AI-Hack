'use client'
import React from 'react'
import Navbar from '../Components/navbar';
import { Grid, Stack } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '../api/api';

const page = () => {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [warning, setWarning] = useState({});
    const [firstSignIn, setFirstSignIn] = useState(true);

    const handleBackToSignup = () =>
    {
        router.push('/signup')
    }
    const listenEmail = (e) =>
    {
        setEmail(e.target.value);
    }
    const listenPassword = (e) =>
    {
        setPassword(e.target.value);
    }

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const handleSignIn = async () => {
        if(validateFields())
        {
            try {
                const {data, error} = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password,
                })


                alert("User successfully signed in")

            } catch (error) {
                alert('Error signing up:', error);
            }
            };
        }

        
    const validateFields = () => {
        let warnings = {};
        warnings["email"] = (isValidEmail(email) && email) ? true : false;
        warnings["password"] = password.length >= 6 ? true : false;
        setWarning(warnings);
        setFirstSignIn(false);
        return (warnings["password"] && warnings["email"]);
    }

  return (
    <div>

    <Navbar/>
    <Grid spacing={10} container className='h-screen w-full flex justify-center items-center'>
        <Grid item xs={4} >
            <Stack spacing={2}>
                <h3>Sign In to "App Name"</h3>
                
                <p>Email</p>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input value={email} onChange={listenEmail} type="text" className="grow" placeholder="Type in your email address" />
                    {!warning["email"] && !firstSignIn ?  <p className="text-red-500 text-xs italic">Please fill out this field.</p> : ""}                        
                </label>

                <p>Password</p>
                <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input value={password} onChange={listenPassword} type="password" className="grow" placeholder='6+ characters' />
                    {!warning["password"] && !firstSignIn ?  <p className="text-red-500 text-xs italic">It's either empty or too short.</p> : ""}                        
                </label>

                <button onClick={handleSignIn} className='btn btn-neutral w-full'>Log in</button>

                <p className='text-center'>Don't have an account?<a onClick={handleBackToSignup}> Back to <u>sign up</u></a></p>
            </Stack>
        </Grid>

        <Grid item xs={6}>
            <img src="https://placehold.co/1000x800.svg" alt="" className='h-full w-full'></img>
        </Grid>
    </Grid>
</div>
  )
}

export default page