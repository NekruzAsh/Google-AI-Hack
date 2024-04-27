'use client'
import React from 'react';
import Navbar from './Components/navbar';
import { Grid, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import supabase  from './api/api'


const Page = () => {
    const router = useRouter();

    const handleRedirectEmail = () =>
    {
        router.push('/signup');
    }
    const checkCurrentUser = async () =>
    {
        const {data, error} = await supabase.auth.getUser();
        console.log(data.user);
    }

    const manuallyLogin = async () =>
    {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: "123456@gmail.com",
                password: "123456",
            })
            alert("User successfully signed in", data)

        } catch (error) {
            alert('Error signing up:', error.message);
        }
    }
    return (
        <div>
        <Navbar/>
            <div className='h-screen w-screen'>
                
                <Grid spacing={10} container className='h-full w-full flex justify-center items-center'>
                    <Grid item xs={4} >
                        <Stack spacing={3} textAlign="center" className='flex justify-center items-center'>
                            <h2>Welcome to "App Name"!</h2>
                            <button onClick={checkCurrentUser} className='btn btn-neutral w-10/12'>Sign up with Google</button>
                            <Grid container className='flex justify-center items-center'>
                                <Grid item xs={4.5}>
                                    <div className='w-full h-0.5 bg-black'></div>
                                </Grid>
                                <Grid item xs={1} >
                                    <p>or</p>
                                </Grid>
                                <Grid item xs={4.5}>
                                    <div className='w-full h-0.5 bg-black'></div>
                                </Grid>
                            </Grid>
                            <button onClick={handleRedirectEmail} className='btn w-10/12'>Continue with email</button>
                            <button onClick={manuallyLogin} className='btn w-10/12'>Manually login</button>
                        
                            <p>By creating an account you agree with our Term of Service, Privacy, Policy, and our default notification</p>
        
                            <p>Already have an account? Sign In</p>
                        </Stack>
                    </Grid>
        
                    <Grid item xs={6}>
                        <img src="https://placehold.co/1000x800.svg" className='w-full h-full' alt=""></img>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Page;
