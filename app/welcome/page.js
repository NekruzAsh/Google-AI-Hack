import React from 'react'
import Navbar from '../Components/navbar'
import { Grid, Stack } from '@mui/material'
import Image from 'next/image'

const page = () => {
  return (
    <div className='h-screen w-screen'>
        <Navbar/>
        <Grid spacing={10} container className='h-full w-full flex justify-center items-center'>
            <Grid item xs={4} >
                <Stack spacing={3} textAlign="center" className='flex justify-center items-center'>
                    <h1>Welcome to "App Name"!</h1>
                    <button className='btn btn-neutral w-10/12'>Sign up with Google</button>
                    <Grid container className='flex justify-center items-center'>
                        <Grid item xs={4.5}>
                            <div className='w-full h-0.5 bg-black'></div>
                        </Grid>
                        <Grid item xs={1} >
                            <p1>or</p1>
                        </Grid>
                        <Grid item xs={4.5}>
                            <div className='w-full h-0.5 bg-black'></div>
                        </Grid>
                    </Grid>
                    <button className='btn w-10/12'>Continue with email</button>
                
                    <h1>By creating an account you agree with our Term of Service, Privacy, Policy, and our default notification</h1>
 
                    <h1>Already have an account? Sign In</h1>
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Image src="https://placehold.co/1000x1000.svg" alt="" width={1000} height={1000}></Image>
            </Grid>
        </Grid>
    </div>
  )
}

export default page