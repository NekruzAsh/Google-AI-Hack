'use client'
import { Grid, Stack, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import nlp from 'compromise';
import supabase from "@/app/api/api";
  

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyAqG3b_elDfKMC6n8o_MJFEPyzo9aNkA7s";


async function runChat(userInput, setAiResponse) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });


  const interestsList = [
    "Baking",
    "Cook",
    "Hanging out",
    "Movies",
    "Walking",
    "Gardening",
    "Arts and Crafts",
    "Reading",
    "Music",
    "Board Games",
    "Photography",
    "Puzzles",
    "Hiking",
    "Traveling",
  ];

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const result = await chat.sendMessage(userInput);


  const doc = nlp(userInput);
  const keywords = interestsList.filter(interest => doc.match(interest).found);

  const response = `Using this text "${userInput}", I found these keywords that the person might like: ${keywords.join(', ')}`;
  setAiResponse(response);
}

const page = () => {

  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [selectedInterest, setSelectedInterests] = useState({});

  const handleInterestButtonClick = (interest) =>
      {
          setSelectedInterests(prevState => ({
              ...prevState,
              [interest] : !prevState[interest]
          }))
      }

  const interestsButtonCreate = () =>
      interestsList.map(e => (
          <button key={e} 
          className={`btn btn-xs ${selectedInterest[e] ? 'btn-selected' : ''}`}
          onClick={() => handleInterestButtonClick(e)}
          >{e}</button>
      )
    )

  const addDataToDB = async () =>
  {
    if(supabase.auth.getUser())
    {
      try{

      const {error} = await supabase.auth.updateUser(
        {
          data : {
            aboutMe : userInput,
            interests : Object.keys(selectedInterest)
          }
        }
      )

    }catch (error)
    {
      console.log("update supabase error", error)
    }
    } 

  }
  const interestsList = [
    "Baking",
    "Movies",
    "Walking",
    "Gardening",
    "Arts and Crafts",
    "Reading",
    "Music",
    "Board Games",
    "Photography",
    "Puzzles",
    "Hiking",
    "Traveling",
  ];

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleButtonClick = () => {
    runChat(userInput, setAiResponse);
  }

  return (
    <div className="h-screen w-screen flex justify-items-center justify-center items-center">
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
              <HelpIcon color="disabled"></HelpIcon>

            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={6}
            className="w-6/12 justify-center content-center"
          >
            <Grid item>
              <h4>4. Select 3 to 6 hobbies and interests</h4>
            </Grid>
            <Grid item>
              <HelpIcon color="disabled"></HelpIcon>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item id="third-row">
          <Grid item xs={6}>

            <textarea
              className="textarea text-black textarea-bordered w-10/12 h-24"
              placeholder="Bio"
              value={userInput}
              onChange={handleInputChange}

            ></textarea>
            <Card>
              <CardContent>
                {aiResponse}
              </CardContent>
            </Card>
          </Grid>

          <Grid
            container
            item
            xs={6}
            id="interest-box"
            className="w-6/12 justify-center content-center"
          >
            <Grid item xs={8}>
              {interestsButtonCreate()}
            </Grid>
          </Grid>
        </Grid>

        <Grid container className="">
          <Grid item xs={7}>
            <p>3/4 steps</p>
          </Grid>

          <Grid item xs={1}>
            <button className="btn">Back</button>
          </Grid>

          <Grid item xs={1}>
            <button className="btn" onClick={handleButtonClick}>Run AI</button>
          </Grid>

          <Grid item xs ={1}>
            <button onClick={addDataToDB} className='btn btn-neutral'>Continue</button>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default page;