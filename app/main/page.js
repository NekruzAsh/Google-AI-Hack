import React from "react";
import Navbar from "../Components/navbar";
import Image from "next/image";
import { Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <div className="h-screen w-full">
      <div className="border border-solid border-b-gray p-2 flex">
        <Grid container className="flex justify-center items-center">
          <Grid item xs={7} lg={7}>
            <p className=" btn">Logo</p>
          </Grid>
          <Grid item xs={1.5} lg={2} textAlign="right">
            <p className="text-black">Find a Match</p>
          </Grid>
          <Grid item xs={1.5} lg={0.75} textAlign="center">
            <p className="text-black">Message</p>
          </Grid>
          <Grid item xs={1.5} lg={1.5} textAlign="left">
            <button className="btn btn-neutral">My Account</button>
          </Grid>
        </Grid>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <button className="btn shadow-lg bg-black text-white rounded-full h-1">
          Compatible
        </button>
        <button className="btn shadow-lg rounded-full h-1 text-black hover:text-white bg-transparent">
          Active Today
        </button>
        <button className="btn shadow-lg rounded-full h-1 text-black hover:text-white bg-transparent">
          Nearby
        </button>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
