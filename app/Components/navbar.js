'use client'
import { Grid } from '@mui/material';
import React from 'react'
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const router = useRouter();
    const handleSignin = () =>
    {
        router.push('/signin')
    }

    const handleSignup = () =>
    {
        router.push('/signup')
    }

    const handleHomePage = () =>
    {
        router.push('/')
    }
    return (
        <div className='border border-solid border-b-gray flex h-16'>
           <Grid container  className='flex justify-center items-center'>
                <Grid item xs = {7} lg={7} >
                    <button onClick={handleHomePage} className="btn">LOGO</button>
                </Grid>
                <Grid item xs = {1.5} lg={2} textAlign="right">
                    <button className='btn'>About Us</button>
                </Grid>
                <Grid onClick={handleSignin} item xs = {1.5} lg={0.75} textAlign="center">
                    <button className='btn'>Log In</button>
                </Grid>
                <Grid onClick={handleSignup} item xs = {1.5} lg={1.5} textAlign="left">
                    <button className='btn btn-neutral'>Create an Account</button>
                </Grid>
            </Grid>
        </div>
      )
}

export default Navbar;