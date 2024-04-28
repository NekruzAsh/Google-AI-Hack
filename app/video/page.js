'use client'
import React, { useState, useRef, useEffect } from 'react';

const Page = () => {
    const APP_ID = process.env.APP_ID;
    const TOKEN = process.env.TOKEN;
    const CHANNEL = process.env.CHANNEL;

    const [display, setDisplay] = useState(false);
    const joinBtnRef = useRef(null);
    const streamControlsRef = useRef(null);
    const [key, setKey] = useState("");
    const [localTracks, setLocalTracks] = useState(null); 

    let remoteUsers = [];
    let AgoraRTC;
    let client;

    useEffect(() => {
        const initSdk = async () => {
            AgoraRTC = (await import('agora-rtc-react')).default;
            client = AgoraRTC.createClient({ mode: 'rtc', codec: "vp8" });
        }
        initSdk();
    }, []);
    

    let joinAndDisplayLocalStream = async () => {
        if(client)
        {
            let UID = await client.join("8f8841f090f64a6aaa64463c34fe0e8a", "main", "007eJxTYEj38uq23FUdcWL9n7UdJ8T4ki+FsYa3XFcTXBM4eerF2JcKDBZpFhYmhmkGlgZpZiaJZomJiWYmJmbGycYmaakGqRaJObN00xoCGRnKoucxMEIhiM/CkJuYmcfAAAAzdh71", null);
            const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
            setLocalTracks(tracks);
            setKey(`user-${UID}`); 
            await client.publish([tracks[0], tracks[1]]);
        }
    }

    let joinStream = async () => {
        setDisplay(true);
        await joinAndDisplayLocalStream();
        joinBtnRef.current.style.display = 'none';
        streamControlsRef.current.style.display = 'flex';
    }

    useEffect(() => {
        if (localTracks) {
            localTracks[1].play(key);
        }
    }, [localTracks]);

    return (
        <div>
            <button ref={joinBtnRef} id="join-btn" onClick={joinStream}>Join Stream</button>
            <div id="stream-wrapper">
                <div id="video-streams">
                    <div className="video-container" id={`user-container-${key}`}>
                        <div className="video-player" id={key}></div>
                    </div>
                </div>
                <div id="stream-controls" ref={streamControlsRef}>
                    <button className='btn' id="leave-btn">Leave Stream</button>
                    <button className='btn' id="mic-btn">Mic On</button>
                    <button className='btn' id="camera-btn">Camera On</button>
                </div>
            </div>
        </div>
    );
}

export default Page;
