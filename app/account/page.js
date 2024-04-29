'use client'

import React, { useEffect, useState } from 'react'
import supabase  from '../api/api'
import { useRouter } from 'next/navigation'


const page = () => {
    const [hobbies, setHobbies] = useState([]);
    const [aboutMe, setAboutMe] = useState("");
    const router = useRouter();

    const signOff = async () =>
    {
        const {data, error} = await supabase.auth.getUser();
        if(data.user !== null)
        {
            await supabase.auth.signOut();
            router.push('/')
        }
    }
    
    useEffect(() => 
    {
        const fetchData = async () => {
            const {data, error} = await supabase.auth.getUser();
            if(data.user)
            {
                setHobbies(data.user.user_metadata.interests);
                setAboutMe(data.user.user_metadata.aboutMe);
                console.log(data.user)
            }
        }
        fetchData();
    })

    return (
    <div className="h-screen flex justify-center items-center">
        <div className="card w-120 h-96 shadow-lg md:w-[500px] mt-20 glass">
          <div className="avatar justify-start p-8">
            <div className="w-32 rounded-full">
              <img src="https://i.pravatar.cc/150?img=67.jpg" />
            </div>
            <div className="ml-6 justify-end">
              <p className="text-black text-lg">Joan Doe</p>
              <p>Toronto &#8226; Active</p>
            </div>
          </div>
          <div className="card-body">
            <h2 className='card-title gap-10'>About Me</h2>
                <p>
                    {aboutMe}
                </p>
            <h2 className="card-title">Hobbies & Interests</h2>
                <ul className="gap-2">
                    {hobbies.map((hobby, index) => (
                    <li key={index} className={`badge badge-primary badge-outline ${index !== 0 ? 'ml-2' : ''}`}>
                        {hobby}
                    </li>
                    ))}
                </ul>
          </div>
            <button onClick={signOff} className='btn btn-primary btn-outline'>
                Log Out
            </button>
          </div>

    </div>
  )
}

export default page