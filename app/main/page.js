import React from 'react'
import Navbar from '../components/navbar'
import { Grid, Stack } from '@mui/material'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div style={{width:"100vw", height:"100vh", }}>
      <Navbar></Navbar>
      <Grid container spacing={3} className='flex mt-60 justify-center w-full h-full'>
        <Grid item xs={6} container className='flex justify-end'>
          <div className=' w-6/12 h-100'>
            <Stack spacing={2.5} className='flex '>
                <h1> Make new friends and share you stories!</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className='btn btn-neutral w-40 rounded-full'>Start Now</button>
            </Stack>
          </div>
        </Grid>

        <Grid item xs={6} className='flex justify-left self-start'>
          <Image src="https://placehold.co/500x400.svg" alt="" width={500} height={400}></Image>
        </Grid>
      </Grid>
        
    </div>
  )
}

export default AboutUs