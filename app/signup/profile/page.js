import { Grid, Stack } from '@mui/material'
import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const page = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        
        <Stack spacing={3}>
            <p>Welcome! Let's create your profile</p>
            <p>Let others get to know you better</p>

            <Grid container>
                <Grid item >
                    <h4>Add profile picture</h4>
                </Grid>
                <Grid item>
                    <HelpIcon color='disabled'></HelpIcon>
                </Grid>
            </Grid>

            <Grid spacing={1} container>
                <Grid item>
                    <button className='btn bg-white btn-circle border-dashed border-2 border-indigo-300 w-40 h-40'>
                        <AddPhotoAlternateIcon></AddPhotoAlternateIcon>
                    </button>
                </Grid>

                <Grid item>
                    <button className='btn text-center'>Choose Image</button>
                </Grid>
            </Grid>


            <Grid container>
                <Grid item >
                    <h4>Add your location</h4>
                </Grid>
                <Grid item>
                    <HelpIcon color='disabled'></HelpIcon>
                </Grid>
            </Grid>

            
            <Grid container>
                <Grid item>
                    <button className='btn'>back</button>
                </Grid>

                <Grid item>

                </Grid>
            </Grid>
        </Stack>
 
    </div>
  )
}

export default page