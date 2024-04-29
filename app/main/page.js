'use client'
import React from "react";
import Navbar from "../Components/navbar";
import Image from "next/image";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();

  const myAccountButton = () =>
  {
    router.push('/account')
  }

  const goToVideo = () =>
  {
    router.push('/video')
  }
  return (
    <div className="h-screen w-full">
      
      <div className="absolute flex justify-between transform -translate-y-1/2 left-96 right-96 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
      <div className="border border-solid border-b-gray p-2 flex">
        <Grid container className="flex justify-center items-center">
          <Grid item xs={7} lg={7}>
            <p className=" btn">Logo</p>
          </Grid>
          <Grid item xs={1.5} lg={2} textAlign="right">
            <p className="text-black">Find a Match</p>
          </Grid>
          <Grid item xs={1.5} lg={0.75} textAlign="center">
            <p className="text-black">Call</p>
          </Grid>
          <Grid item xs={1.5} lg={1.5} textAlign="left">
            <button onClick={myAccountButton} className="btn btn-neutral">My Account</button>
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
      
      <div className="flex justify-center items-center">
      <div className="carousel">
        <div id="slide1" className="carousel-item card bg-slate-300 w-full mt-20 glass">
          <div className="avatar justify-start p-8">
            <div className="w-32 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <div className="ml-6 justify-end">
              <p className="text-black text-lg">Joan Doe</p>
              <p>Toronto &#8226; Active</p>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Hobbies & Interests</h2>
           
              <ul className="gap-2">
                <li className="badge badge-primary badge-outline">Hiking</li>
                <li className="badge badge-primary badge-outline ml-2">
                  Swimming
                </li>
                <li className="badge badge-primary badge-outline ml-2">
                  Cooking
                </li>
                <li className="badge badge-primary badge-outline ml-2">Dogs</li>
              </ul>
          </div>
          <div className="card-actions justify-end items-center p-6">
            <p>
              Compatibility Score:
            </p>
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                70%
              </div>
              <button className="btn btn-primary" onClick={goToVideo}>Message</button>
            </div>
        </div>
        <div id="slide2" className="card bg-slate-300 carousel-item w-full mt-20 glass">
          <div className="avatar justify-start p-8">
            <div className="w-32 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <div className="ml-6 justify-end">
              <p className="text-black text-lg">John Doe</p>
              <p>NY &#8226; Active</p>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">Hobbies & Interests</h2>
           
              <ul className="gap-2">
                <li className="badge badge-primary badge-outline">Hiking</li>
                <li className="badge badge-primary badge-outline ml-2">
                  Programming
                </li>
                <li className="badge badge-primary badge-outline ml-2">
                  Baking
                </li>
                <li className="badge badge-primary badge-outline ml-2">Cats</li>
              </ul>
          </div>
          <div className="card-actions justify-end items-center p-6">
            <p>
              Compatibility Score:
            </p>
              <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                30%
              </div>
              <button className="btn btn-primary" onClick={goToVideo}>Message</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
