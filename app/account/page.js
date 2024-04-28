'use client'

import React, { useEffect, useState } from 'react'
import supabase  from '../api/api'


const page = () => {
    const [hobbies, setHobbies] = useState({});
    const [aboutMe, setAboutMe] = useState("");

    useEffect(() => 
    {
        // const fetchData = async () => {
        //     const {data, error} = await supabase.auth.getUser();
        //     console.log(data);
        // }

    // const manuallyLogin = async () =>
    // {
    //     try {
    //         const { data, error } = await supabase.auth.signInWithPassword({
    //             email: "123456@gmail.com",
    //             password: "123456",
    //         })
    //         alert("User successfully signed in", data)

    //     } catch (error) {
    //         alert('Error signing up:', error.message);
    //     }
    // }
        
        // fetchData();
    })

    return (
    <div className="h-96 flex justify-center items-center">
        <div className="card w-120 h-96 shadow-lg md:w-[500px] mt-20 glass">
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
            <h2 className='card-title gap-10'>About Me</h2>
                <p>
                    People who are smart cannot see this text :=D
                </p>
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
          </div>
    </div>
  )
}

export default page