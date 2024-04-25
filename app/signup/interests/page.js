import { Grid, Stack } from '@mui/material'
import React from 'react'
import HelpIcon from '@mui/icons-material/Help';

const page = () => {

  const interestsList =
  [
    "Baking", "Movies", "Walking", "Gardening", "Arts and Crafts", "Reading", "Music", "Boarding Games and Puzzles", "Photography"
  ]
    
    {/* havent tested this feature, dont know if it works */}
  const interestsButtonCreate = () =>
  {
    return interestsList.map(e => {
        <button className='btn btn-xs'>{e}</button>
    });
  }

  return (
    <div>
        <Stack >
            <h3>Almost done</h3>
            <p>Final steps to complete your account</p>
            <Grid container item id="second-row">   
                <Grid item>                        
                    <h4>3. About Me</h4>
                </Grid>
                <Grid item>
                    <HelpIcon color='disabled'></HelpIcon>
                </Grid>


                <Grid item>                       
                    <h4>4. Select 3 to 6 hobbies and interests</h4>
                </Grid>
                <Grid item>
                    <HelpIcon color='disabled'></HelpIcon>
                </Grid>
            </Grid>                

            <Grid container item id="third-row">
                <Grid item xs={6}>
                    <Textarea
                        color="neutral"
                        disabled={false}
                        minRows={2}
                        placeholder="Talk a little about yourself. What do you want others to know about yourself?"
                        size="lg"
                        variant="outlined"
                        />
                </Grid> 

                <Grid item container id="interest-container">
                    <Grid item xs={6}>
                        {interestsButtonCreate()}
                        {/* it's a nested container, where this one will be containing interests buttons*/}
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    </div>
  )
}

export default page