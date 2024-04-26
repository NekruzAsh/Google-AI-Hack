import { Grid, Stack } from '@mui/material'
import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import { Textarea } from '@mui/joy';

const page = () => {

  const interestsList =
  [
    "Baking", "Movies", "Walking", "Gardening", "Arts and Crafts", "Reading", "Music", "Boarding Games and Puzzles", "Photography"
  ]
    
    {/* havent tested this feature, dont know if it works */}
  const interestsButtonCreate = () =>
        interestsList.map(e => (
            <button key={e} className='btn btn-xs '>{e}</button>
        )
    )

  return (
    <div className='h-screen w-screen flex justify-items-center justify-center items-center'>
        <Stack spacing={5}>
            <div>
                <h2>Almost done</h2>
            </div>
            <div>
                <p>Final steps to complete your account</p>
            </div>

            <Grid container item id="second-row">   
                <Grid container item xs={6}>
                    <Grid item>                        
                        <h4>3. About Me</h4>
                    </Grid>
                    <Grid item>
                        <HelpIcon color='disabled'></HelpIcon>
                    </Grid>
                </Grid>

                <Grid container item xs={6}  className='w-6/12 justify-center content-center'>
                    <Grid item>                       
                        <h4>4. Select 3 to 6 hobbies and interests</h4>
                    </Grid>
                    <Grid item>
                        <HelpIcon color='disabled'></HelpIcon>
                    </Grid>
                </Grid>

            </Grid>                

            <Grid container item id="third-row" >
                <Grid item xs={6}>
                    <Textarea
        
                        color="neutral"
                        minRows={4}
                        placeholder="Talk a little about yourself. What do you want others to know about yourself?"
                        size="sm"
                        variant="outlined"
                        style= {{width : "70%"}}
                        />
                </Grid> 

                <Grid container item xs={6} id="interest-box" className='w-6/12 justify-center content-center'>
                    <Grid item xs={8}>
                        {interestsButtonCreate()}
                    </Grid>
                </Grid>
            </Grid>

            <h4>5. Upload your photos</h4>

            <Grid container >
                <Grid item xs={6}> 
                    <button className='btn'>Gallery</button>
                    <button className='btn'>Gallery</button>
                    <button className='btn'>Gallery</button>
                    <button className='btn'>Gallery</button>
                    <button className='btn'>Gallery</button>
                </Grid>

                <Grid container xs={3.65} item id="button-box" className='w-6/12 justify-items-center justify-center items-center'>
                    <button className='btn ' >Choose Image</button>
                </Grid>
            </Grid>

            <Grid container className=''>
                <Grid item xs={7}>
                    <p>3/4 steps</p>
                </Grid>

                <Grid item xs={1}>
                    <button className='btn'>Back</button>
                </Grid>

                <Grid item xs ={1}>
                    <button className='btn btn-neutral'>Continue</button>
                </Grid>
            </Grid>
        </Stack>
    </div>
  )
}

export default page