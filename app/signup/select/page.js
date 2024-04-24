import { Grid, Stack } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <Stack spacing={30}>
            <Stack spacing={3}>
                <h1 className='text-center'>To begin with,</h1>
                <h2>are you a volunteer or a senior?</h2>

                <Grid container className='flex justify-between'>
                    <Grid item xs={5.5}>
                        <button className='btn w-full'>Volunteer</button>
                    </Grid>
                    <Grid item xs={5.5}>
                        <button className='btn w-full'>Senior</button>
                    </Grid>
                </Grid>
            </Stack>
    
            <button className='wd-1/12 btn btn-neutral'>Continue</button>
        </Stack>

    </div>
  )
}

export default page;