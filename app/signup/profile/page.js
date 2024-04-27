'use client'
import { Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import HelpIcon from '@mui/icons-material/Help';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRouter } from 'next/navigation';
import supabase from '@/app/api/api';
const page = () => {
    const [zipCode,setZipCode] = useState("");

    const router = useRouter();

    const handleNextPage = async () =>
    {
        if(supabase.auth.getUser())
        {
            await supabase.auth.updateUser(
                {
                    data :
                    {
                        zipCode : zipCode
                    }
                }
            )
        }
        router.push('/signup/interests')
    }
    
    const handlePrevPage = () =>
    {
        router.push('/signup')
    }

    const listenZipCode = (e) =>
    {
        setZipCode(e.target.value)
    }
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            
            <Stack spacing={3} >
                <h1>Welcome! Let's create your profile</h1>
                <p1>Let others get to know you better</p1>

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

                    <Grid item className='flex justify-center items-center'>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
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

                <input type="text"  value={zipCode} onChange={listenZipCode} placeholder="Enter your ZipCode" className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-sm bg-white" />
                <Grid spacing={2} container>
                    <Grid item xs={9}>
                        <p>2/4 steps</p>
                    </Grid>
                    <Grid item xs={1.5}>
                        <button className='btn' onClick={handlePrevPage} >Back</button>
                    </Grid>

                    <Grid item xs={1.5}>
                        <button onClick={handleNextPage} className='btn btn-neutral'>Continue</button>
                    </Grid>
                </Grid>
            </Stack>
    
        </div>
  )
}

export default page