'use client'
import React, { useState } from 'react'
import Navbar from '../Components/navbar'
import { Grid, Stack } from '@mui/material'
import supabase  from '../api/api'
import { useRouter } from 'next/navigation';


const page = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [volunteer, setVolunteer] = useState(false);
    const [senior, setSenior] = useState(false);

    const router = useRouter();


    const turnIntoSignInPage = () =>
    {
        router.push('/signin')
    }


    const listenFirstName = (e) =>
    {
        setFirstName(e.target.value);
    }
    const listenLastName = (e) =>
    {
        setLastName(e.target.value);
    }
    const listenEmail = (e) =>
    {
        setEmail(e.target.value);
    }
    const listenPassword = (e) =>
    {
        setPassword(e.target.value);
    }

    const handleVolunteerButton = (e) =>
    {   
        setVolunteer(!volunteer)
    }
    
    const handleSeniorButton = (e) =>
    {
        setSenior(!senior);
    }

    const handleLogOut = async () => {
        try {
            const {data, user, error} = await supabase.auth.refreshSession();
                
            console.log(data)
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };



    const handleSignUp = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
                data : 
                {
                    first_name : firstName,
                    last_name : lastName
                }
            })

            if(error)
            {
                throw error;
            }

            console.log("User successfully signed up", data.user);
            router.push('/signup/profile');

        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    }


  return (
        
        <div>
            <Navbar/>
            <Grid container spacing={5} className=' flex h-screen w-full justify-center items-center'>
                <Grid item xs={4} >
                    <Stack spacing={2}>
                        <h3>Sign up to "App Name"</h3>
                        <p>First Name</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input value={firstName} onChange={listenFirstName} type="text" className="grow" placeholder="Type in your first name" />
                        </label>
                        
                        <p>Last Name</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input value={lastName} onChange={listenLastName} type="text" className="grow" placeholder="Type in your last name" />
                        </label>
                        
                        <p>Email</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input value={email} onChange={listenEmail} type="text" className="grow" placeholder="Type in your email address" />
                        </label>

                        <p>Password</p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input value={password} onChange={listenPassword} type="password" className="grow" placeholder='6+ characters' />
                        </label>

                        <h4>Are you a volunteer or senior?</h4>
                        <Grid container className='flex justify-between'>
                            <Grid item xs={5.5}>
                                <button onClick={handleVolunteerButton} className='btn w-full'>Volunteer</button>
                            </Grid>
                            <Grid item xs={5.5}>
                                <button onClick={handleSeniorButton} className='btn w-full'>Senior</button>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={1}> 
                                <input type='checkbox' className='checkbox'></input>
                            </Grid>
                            <Grid item xs={10}>
                                <p>By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification</p>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item xs={1}>
                                <input type='checkbox' className='checkbox'></input>
                            </Grid>
                            <Grid item xs={10}>
                                <p>I'm at least 18 years old.</p>
                            </Grid>
                        </Grid>

                        <button onClick={handleSignUp} className='btn btn-neutral w-full'>Create Account</button>

                        <p className='text-center'>Already have an account? <a onClick={turnIntoSignInPage}>Sign In</a></p>
                    </Stack>
                </Grid>

                <Grid item xs={6}>
                    <img src="https://placehold.co/1000x700.svg" alt="" className='h-full w-full'></img>
                </Grid>
            </Grid>
        </div>
  )
}

export default page